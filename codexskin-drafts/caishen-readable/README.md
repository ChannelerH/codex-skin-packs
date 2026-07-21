# Caishen Readable `.codexskin` Draft

This is a draft source folder for converting `packs/caishen-readable` into the
community `.codexskin` format used by Codex App Manager / Awesome Codex Skins.

It is intentionally **not** submitted as registry-ready yet because the required
`previews/home.webp` must be a real screenshot from a running themed Codex home
screen with private sidebar content collapsed. We do not publish fake previews
or private workspace screenshots.

## Current Status

- `schemaVersion: 2` manifest exists.
- Scoped `theme.css` exists.
- Public artwork is converted to WebP: `assets/wall.webp`.
- Native Codex appearance colors are included.
- `codexVerified` is recorded from local app version `26.715.61943`.
- Missing: real public-safe `previews/home.webp`.

## Validation

From a checkout that also has `Wangnov/awesome-codex-skins` available:

```bash
CODEX_SKINS_ROOT=/path/to/this/repo/codexskin-drafts \
  node /path/to/awesome-codex-skins/studio/bin/codex-theme.mjs pack caishen-readable
```

Expected current result:

```json
{
  "ok": false,
  "problems": [
    "missing `previews` — run `codex-theme preview-shot <id>` first"
  ]
}
```

Once a real sanitized preview is captured, this draft can be packed as:

```bash
CODEX_SKINS_ROOT=/path/to/this/repo/codexskin-drafts \
  node /path/to/awesome-codex-skins/studio/bin/codex-theme.mjs pack caishen-readable --out dist
```

## Public-Safe Rule

Do not add screenshots containing task names, chats, project names, file paths,
emails, API keys, or private sidebar entries.
