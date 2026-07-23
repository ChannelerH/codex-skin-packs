import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";

const packagePath = process.argv[2];

if (!packagePath) {
  console.error("Usage: node compat/dreamskin-package-v1/validate-package-v1.mjs <package.json>");
  process.exit(2);
}

function fail(code, message) {
  const error = new Error(message);
  error.code = code;
  throw error;
}

function sha256(buffer) {
  return crypto.createHash("sha256").update(buffer).digest("hex");
}

function assertPortableBasename(value, code) {
  if (typeof value !== "string" || value.length === 0) {
    fail(code, "path must be a non-empty string");
  }
  if (value !== path.basename(value) || value.includes("/") || value.includes("\\")) {
    fail(code, `path must be a portable basename: ${value}`);
  }
  const stem = value.split(".")[0]?.toLowerCase();
  const windowsReserved = new Set([
    "con", "prn", "aux", "nul",
    "com1", "com2", "com3", "com4", "com5", "com6", "com7", "com8", "com9",
    "lpt1", "lpt2", "lpt3", "lpt4", "lpt5", "lpt6", "lpt7", "lpt8", "lpt9"
  ]);
  if (windowsReserved.has(stem)) {
    fail(code, `path uses a Windows reserved name: ${value}`);
  }
}

function assertShaAndLength(label, buffer, declared) {
  if (!Number.isSafeInteger(declared.byteLength) || declared.byteLength < 0) {
    fail(`${label.toUpperCase()}_BAD_LENGTH`, `${label} byteLength must be a non-negative integer`);
  }
  if (buffer.byteLength !== declared.byteLength) {
    fail(`${label.toUpperCase()}_LENGTH_MISMATCH`, `${label} byteLength mismatch`);
  }
  const digest = sha256(buffer);
  if (digest !== declared.sha256) {
    fail(`${label.toUpperCase()}_SHA256_MISMATCH`, `${label} sha256 mismatch`);
  }
}

try {
  const raw = fs.readFileSync(packagePath, "utf8");
  const pkg = JSON.parse(raw);

  if (pkg.format !== "codex-dream-skin") {
    fail("BAD_FORMAT", "format must be codex-dream-skin");
  }
  if (pkg.packageVersion !== 1) {
    fail("BAD_PACKAGE_VERSION", "packageVersion must be integer 1");
  }

  assertPortableBasename(pkg.themeJson?.path, "BAD_THEME_PATH");
  assertPortableBasename(pkg.primaryImage?.path, "BAD_IMAGE_PATH");

  const themeText = pkg.themeJson?.utf8;
  if (typeof themeText !== "string") {
    fail("BAD_THEME_PAYLOAD", "themeJson.utf8 must be a string");
  }
  const themeBytes = Buffer.from(themeText, "utf8");
  assertShaAndLength("theme", themeBytes, pkg.themeJson);

  const theme = JSON.parse(themeText);
  if (theme.schemaVersion !== 1) {
    fail("BAD_THEME_SCHEMA_VERSION", "theme.schemaVersion must be integer 1");
  }
  if (theme.image !== pkg.primaryImage.path) {
    fail("THEME_IMAGE_MISMATCH", "theme.image must match primaryImage.path");
  }

  if (pkg.primaryImage.mediaType !== "image/png") {
    fail("BAD_IMAGE_MEDIA_TYPE", "primaryImage.mediaType must be image/png");
  }
  if (!/^[A-Za-z0-9+/]+={0,2}$/.test(pkg.primaryImage.base64 ?? "")) {
    fail("BAD_IMAGE_BASE64", "primaryImage.base64 is not strict base64");
  }
  const imageBytes = Buffer.from(pkg.primaryImage.base64, "base64");
  assertShaAndLength("image", imageBytes, pkg.primaryImage);
  if (
    imageBytes[0] !== 0x89 ||
    imageBytes[1] !== 0x50 ||
    imageBytes[2] !== 0x4e ||
    imageBytes[3] !== 0x47
  ) {
    fail("BAD_IMAGE_MAGIC", "primary image does not have PNG magic bytes");
  }

  console.log(JSON.stringify({
    ok: true,
    id: pkg.id,
    themePath: pkg.themeJson.path,
    imagePath: pkg.primaryImage.path,
    themeBytes: themeBytes.byteLength,
    imageBytes: imageBytes.byteLength
  }, null, 2));
} catch (error) {
  console.error(JSON.stringify({
    ok: false,
    code: error.code ?? "VALIDATION_ERROR",
    message: error.message
  }, null, 2));
  process.exit(1);
}

