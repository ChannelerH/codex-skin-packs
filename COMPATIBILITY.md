# Compatibility Notes

This repository ships verified public-safe Codex skin packs as plain assets:

- `theme.json`
- `background.png`
- `README.md`
- optional installer metadata through the `codex-skin-pack-installer` skill

The packs are meant to be easy to download, inspect, remix, and apply through a
user's active Codex theme workflow without publishing private Codex screenshots.

## Current Install Paths

### Skills.sh / npx skills

```bash
npx skills add ChannelerH/codex-skin-packs --skill codex-skin-pack-installer --global --agent codex --yes
```

Then ask Codex:

```text
Use $codex-skin-pack-installer to install the caishen-readable Codex skin pack and tell me how to restore the default theme.
```

### Codex Plugin

```bash
codex plugin marketplace add ChannelerH/codex-skin-packs --ref main --sparse .agents/plugins --sparse plugins/codex-skin-pack-installer
codex plugin add codex-skin-pack-installer@codex-skin-packs
```

### Direct Release Download

Download a zip from:

https://github.com/ChannelerH/codex-skin-packs/releases/tag/v0.1.0

The current recommended starter pack is `caishen-readable` because it is the
most readable Caishen variant and the one receiving the clearest usage signal:

https://github.com/ChannelerH/codex-skin-packs/releases/download/v0.1.0/caishen-readable.zip

### Windows Theme Inject

`caishen-readable` is also being reviewed as a downloadable example package for
`codecnmc/codex-theme-inject`:

https://github.com/codecnmc/codex-theme-inject/pull/2

Until that package is merged upstream, Theme Inject users should download the
release zip and keep `theme.json` and `background.png` in the same folder.

## Directory Submission Status

| Ecosystem | Current status |
|---|---|
| Skills.sh / npx skills | Supported by `skills.sh.json` and `skills/codex-skin-pack-installer/SKILL.md`. |
| Codex plugin marketplace workflow | Supported by `.agents/plugins/marketplace.json` and `plugins/codex-skin-pack-installer/`. |
| CodexThemes | Individual public-safe skin entries can link to the gallery and release packs. |
| codecnmc/codex-theme-inject | `caishen-readable` package is under upstream review in [codecnmc/codex-theme-inject#2](https://github.com/codecnmc/codex-theme-inject/pull/2). |
| `.codexskin` registries | Draft source exists for `caishen-readable`; not claimed as registry-ready until a real public-safe Codex preview is captured. Tracking discussion: [Wangnov/awesome-codex-skins#11](https://github.com/Wangnov/awesome-codex-skins/issues/11). |

## `.codexskin` Gap

Some community registries use the `.codexskin` archive format. That format is
stricter than this repo's current release zips. A directory-ready `.codexskin`
submission typically needs:

- `schemaVersion: 2` manifest metadata
- scoped `theme.css`
- WebP assets with per-file size budgets
- `previews/home.webp` captured from a running themed Codex instance
- a concrete `codexVerified` app version
- CI or local quality-gate validation

We do not want to submit fake previews or private workspace screenshots. The
conversion path is:

1. Convert one pilot pack, starting with `caishen-readable`, into a source
   folder that matches the `.codexskin` layout. Draft:
   [`codexskin-drafts/caishen-readable`](codexskin-drafts/caishen-readable).
2. Generate WebP assets from public artwork only. Done for the pilot draft.
3. Capture a sanitized real Codex preview with collapsed/private-free content.
4. Run the target registry's quality gate before opening a PR. Current expected
   failure: missing `previews/home.webp`.
5. Repeat only for packs that remain readable in Home, Task, Diff, and Composer
   states.

Tracking discussion with the `.codexskin` standard repository:
https://github.com/Wangnov/awesome-codex-skins/issues/11

## Public-Safe Rule

No public listing, preview, issue, PR, or release asset should contain:

- real Codex chats
- task names
- project names
- sidebars from a private workspace
- file paths
- email addresses
- screenshots of the user's actual Codex environment

Use the gallery's sanitized previews and release assets instead.
