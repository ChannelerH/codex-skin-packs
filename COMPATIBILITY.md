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

### DreamSkin Studio Import

The current upstream community intake path for Codex Dream Skin is DreamSkin
Studio:

https://www.dreamskin.cc/studio

Use the Studio-compatible `.dreamskin` package for `caishen-readable`:

https://codex-theme-gallery.howardhua.chatgpt.site/dreamskin-studio?utm_source=github-compatibility&utm_medium=repo&utm_campaign=dreamskin-studio-import

https://github.com/ChannelerH/codex-skin-packs/releases/download/v0.1.0/caishen-readable.dreamskin

Tracked gallery download for external submissions:

https://codex-theme-gallery.howardhua.chatgpt.site/api/download/caishen-readable-dreamskin

The package contains only:

- `manifest.json`
- `theme.json`
- `background.jpg`

It is importable for local preview. Publishing to the DreamSkin community
library still requires an authenticated publisher and rights confirmation, so
this repository does not claim gallery acceptance until that flow is completed.

### Codex Dream Skin Portable Theme

If you use a Codex Dream Skin build that supports portable theme imports, use
the validated `.cds-theme.zip` package:

https://github.com/ChannelerH/codex-skin-packs/releases/download/v0.1.0/caishen-readable.cds-theme.zip

The package source lives in:

[`compat/codex-dream-skin/caishen-readable-cds-theme`](compat/codex-dream-skin/caishen-readable-cds-theme)

It has passed the upstream package validator from `charmber/codex-skin`:

```bash
node macos/scripts/theme-package.mjs validate --archive caishen-readable.cds-theme.zip
```

### Windows Theme Inject

`caishen-readable` is also being reviewed as a downloadable example package for
`codecnmc/codex-theme-inject`:

https://github.com/codecnmc/codex-theme-inject/pull/2

Until that package is merged upstream, Theme Inject users should download the
release zip and keep `theme.json` and `background.png` in the same folder.

### ReTheme Source Packages

`caishen-readable` is being reviewed as a public-safe ReTheme source example:

https://github.com/duxweb/ReTheme/pull/5

This is not a signed `.ctheme` package. It is a source-package example for
users who want to inspect the manifest, scoped CSS, public artwork, and local
validation workflow before building their own ReTheme theme.

### Codex Dream Skin Presets

`caishen-readable` is being reviewed as a bundled macOS and Windows preset in
the largest Codex Dream Skin repository:

https://github.com/Fei-Away/Codex-Dream-Skin/pull/197

There is also an alternate macOS preset proposal:

https://github.com/xnydl/codex-dream-skin/pull/5

Until a preset is merged upstream, Dream Skin users should download the release
zip or use the installer Skill to stage the same pack locally.

## Directory Submission Status

| Ecosystem | Current status |
|---|---|
| Skills.sh / npx skills | Supported by `skills.sh.json` and `skills/codex-skin-pack-installer/SKILL.md`. |
| Codex plugin marketplace workflow | Supported by `.agents/plugins/marketplace.json` and `plugins/codex-skin-pack-installer/`. |
| CodexThemes | Individual public-safe skin entries can link to the gallery and release packs. |
| DreamSkin Studio `.dreamskin` | `caishen-readable` is available as a Studio-compatible import package. Publishing to dreamskin.cc requires authenticated rights confirmation after local preview. |
| charmber/codex-skin `.cds-theme.zip` | `caishen-readable` is available as a validator-passing portable theme package and submitted in [charmber/codex-skin#1](https://github.com/charmber/codex-skin/issues/1). |
| codecnmc/codex-theme-inject | `caishen-readable` package is under upstream review in [codecnmc/codex-theme-inject#2](https://github.com/codecnmc/codex-theme-inject/pull/2). |
| duxweb/ReTheme | `caishen-readable` source example is under upstream review in [duxweb/ReTheme#5](https://github.com/duxweb/ReTheme/pull/5). |
| Fei-Away/Codex-Dream-Skin | [Fei-Away/Codex-Dream-Skin#197](https://github.com/Fei-Away/Codex-Dream-Skin/pull/197) was closed after maintainers asked community themes to use DreamSkin Studio intake instead of repo PRs. |
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
