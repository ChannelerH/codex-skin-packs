import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";

const repoRoot = new URL("../../", import.meta.url);
const sourceDir = new URL("../../packs/caishen-readable/", import.meta.url);
const outFile = new URL("./caishen-readable.package-v1.dreamskin.json", import.meta.url);

function sha256(buffer) {
  return crypto.createHash("sha256").update(buffer).digest("hex");
}

const themeText = fs.readFileSync(new URL("theme.json", sourceDir), "utf8");
const theme = JSON.parse(themeText);
const imageBytes = fs.readFileSync(new URL("background.png", sourceDir));

if (theme.schemaVersion !== 1) {
  throw new Error("Expected theme.schemaVersion to be 1");
}

if (theme.image !== "background.png") {
  throw new Error("Expected theme.image to match background.png");
}

const packageJson = {
  format: "codex-dream-skin",
  packageVersion: 1,
  id: "caishen-readable",
  name: "Caishen Readable",
  source: {
    repository: "https://github.com/ChannelerH/codex-skin-packs",
    path: path.relative(new URL(".", repoRoot).pathname, new URL("../../packs/caishen-readable/", import.meta.url).pathname),
    themePage: "https://codex-theme-gallery.howardhua.chatgpt.site/themes/caishen-readable",
    relatedIssue: "https://github.com/Fei-Away/Codex-Dream-Skin/issues/108"
  },
  themeJson: {
    path: "theme.json",
    mediaType: "application/json; charset=utf-8",
    byteLength: Buffer.byteLength(themeText, "utf8"),
    sha256: sha256(Buffer.from(themeText, "utf8")),
    utf8: themeText
  },
  primaryImage: {
    path: "background.png",
    mediaType: "image/png",
    byteLength: imageBytes.byteLength,
    sha256: sha256(imageBytes),
    base64: imageBytes.toString("base64")
  }
};

fs.writeFileSync(outFile, `${JSON.stringify(packageJson, null, 2)}\n`);
console.log(`wrote ${outFile.pathname}`);

