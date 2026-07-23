# DreamSkin Package v1 Fixture

This directory contains an experimental JSON-envelope `.dreamskin` fixture for
the portable package format discussed in
`Fei-Away/Codex-Dream-Skin#108`.

It is not the current DreamSkin Studio ZIP import shape. The current Studio
package remains:

- `../dreamskin/caishen-readable.dreamskin`
- `../codex-dream-skin/caishen-readable-cds-theme/`

## Fixture

- `caishen-readable.package-v1.dreamskin.json`

The fixture wraps the existing public-safe `packs/caishen-readable` theme:

- `theme.json` as exact UTF-8 text with declared byte length and SHA-256
- `background.png` as base64 with declared byte length and SHA-256
- `format: "codex-dream-skin"`
- `packageVersion: 1`

It contains no scripts, CSS, remote resources, private Codex screenshots, task
names, chats, file paths, or workspace data.

## Validate

```bash
node compat/dreamskin-package-v1/validate-package-v1.mjs \
  compat/dreamskin-package-v1/caishen-readable.package-v1.dreamskin.json
```

The validator checks the integrity fields, PNG magic bytes, `schemaVersion`,
basename-only paths, and agreement between `theme.image` and the packaged
primary image path.

