# Codex Skin Pack Installer Plugin

Install and stage verified public-safe Codex desktop skin packs.

```bash
codex plugin marketplace add ChannelerH/codex-skin-packs --ref main --sparse .agents/plugins --sparse plugins/codex-skin-pack-installer
codex plugin add codex-skin-pack-installer@codex-skin-packs
```

Then ask Codex:

```text
Use $codex-skin-pack-installer to install the caishen-lite Codex skin pack and tell me how to restore the default theme.
```

This plugin avoids private workspace screenshots, validates `theme.json` and
`background.png`, and keeps restore guidance visible before finishing.
