# Codex Skin Packs

[![skills.sh](https://skills.sh/b/channelerh/codex-skin-packs)](https://www.skills.sh/channelerh/codex-skin-packs/codex-skin-pack-installer)

Verified public-safe Codex theme and skin packs, packaged as a Codex plugin and
a standalone Skills.sh / `npx skills` installer.

Each pack includes:

- `background.png`
- `theme.json`
- `README.md`
- restore guidance

The gallery shows sanitized Codex Home, Task, Diff, and Composer states so you
can judge readability before applying a pack. This repository does not include
private Codex workspace screenshots, task lists, chats, sidebars, file paths, or
project files.

Start here:
https://codex-theme-gallery.howardhua.chatgpt.site/codex-skin-pack-installer?utm_source=github-readme&utm_medium=repo&utm_campaign=skill-installer

Website:
https://codex-theme-gallery.howardhua.chatgpt.site?utm_source=github-readme&utm_medium=repo&utm_campaign=homepage

Theme index:
https://codex-theme-gallery.howardhua.chatgpt.site/themes?utm_source=github-readme&utm_medium=repo&utm_campaign=theme-index

Codex themes:
https://codex-theme-gallery.howardhua.chatgpt.site/codex-themes?utm_source=github-readme&utm_medium=repo&utm_campaign=search-pages

Codex skins:
https://codex-theme-gallery.howardhua.chatgpt.site/codex-skins?utm_source=github-readme&utm_medium=repo&utm_campaign=search-pages

Install guide:
https://codex-theme-gallery.howardhua.chatgpt.site/install-codex-theme?utm_source=github-readme&utm_medium=repo&utm_campaign=install-guide

Release downloads: https://github.com/ChannelerH/codex-skin-packs/releases/tag/v0.1.0

Safety checklist: [SAFETY.md](SAFETY.md)

Agent install prompts: [INSTALL-WITH-CODEX.md](INSTALL-WITH-CODEX.md)

Skills.sh listing:
https://www.skills.sh/channelerh/codex-skin-packs/codex-skin-pack-installer

Install as a Codex Plugin:

```bash
codex plugin marketplace add ChannelerH/codex-skin-packs --ref main --sparse .agents/plugins --sparse plugins/codex-skin-pack-installer
codex plugin add codex-skin-pack-installer@codex-skin-packs
```

Then ask Codex:

```text
Use $codex-skin-pack-installer to install the caishen-lite Codex skin pack and tell me how to restore the default theme.
```

Install with the standard Agent Skills CLI:

```bash
npx skills add ChannelerH/codex-skin-packs --skill codex-skin-pack-installer --global --agent codex --yes
```

Then ask Codex:

```text
Use $codex-skin-pack-installer to install the caishen-lite Codex skin pack and tell me how to restore the default theme.
```

Legacy Codex Skill installer fallback:

```bash
python3 ~/.codex/skills/.system/skill-installer/scripts/install-skill-from-github.py --repo ChannelerH/codex-skin-packs --path skills/codex-skin-pack-installer --name codex-skin-pack-installer
```

Then ask Codex:

```text
Use $codex-skin-pack-installer to install the caishen-lite Codex skin pack and tell me how to restore the default theme.
```

Machine-readable theme feed:
https://codex-theme-gallery.howardhua.chatgpt.site/theme-feed.json?utm_source=github-readme&utm_medium=repo&utm_campaign=theme-feed

Launch / directory submission kit:
https://codex-theme-gallery.howardhua.chatgpt.site/launch-kit.md?utm_source=github-readme&utm_medium=repo&utm_campaign=launch-kit

External listings:

- [Mythic Guardian Noir](https://codexthemes.ai/skins/mythic-guardian-noir)
- [Caishen Lite Codex Skin Pack](https://codexthemes.ai/themes/caishen-lite-codex-skin-pack)
- [TIANQIAN1238/codex-skin-gallery](https://github.com/TIANQIAN1238/codex-skin-gallery) indexes all six packs as Dream Skin Pack entries.
- [Caishen Readable review draft](https://github.com/lixiaobaivv/Codex-Skin-Store/pull/17) is open for Codex-Skin-Store review.

![Codex Skin Gallery](assets/og.jpg)

## Packs

### Mythic Guardian Noir

Dark mythic focus skin with a quiet left side for readable Codex panels.

Theme page: https://codex-theme-gallery.howardhua.chatgpt.site/themes/mythic-guardian-noir?utm_source=github-readme&utm_medium=repo&utm_campaign=theme-page

![Mythic Guardian Noir](packs/mythic-guardian-noir/background.png)

### Global Founder Bright

Bright overseas growth skin for shipping, analytics, and business work.

Theme page: https://codex-theme-gallery.howardhua.chatgpt.site/themes/global-founder-bright?utm_source=github-readme&utm_medium=repo&utm_campaign=theme-page

![Global Founder Bright](packs/global-founder-bright/background.png)

### Caishen Lite

Soft fortune skin that keeps the main working area calm and readable.

Theme page: https://codex-theme-gallery.howardhua.chatgpt.site/themes/caishen-lite?utm_source=github-readme&utm_medium=repo&utm_campaign=theme-page

![Caishen Lite](packs/caishen-lite/background.png)

### Caishen Max

More fortune, more gold, more visual punch for short immersive sessions.

Theme page: https://codex-theme-gallery.howardhua.chatgpt.site/themes/caishen-max?utm_source=github-readme&utm_medium=repo&utm_campaign=theme-page

![Caishen Max](packs/caishen-max/background.png)

### Export Night

Dark export-ops skin with charts, ports, and midnight commerce energy.

Theme page: https://codex-theme-gallery.howardhua.chatgpt.site/themes/export-night?utm_source=github-readme&utm_medium=repo&utm_campaign=theme-page

![Export Night](packs/export-night/background.png)

### Caishen Readable

Soft low-strain fortune skin.

Theme page: https://codex-theme-gallery.howardhua.chatgpt.site/themes/caishen-readable?utm_source=github-readme&utm_medium=repo&utm_campaign=theme-page

![Caishen Readable](packs/caishen-readable/background.png)

## Usage

Download a pack folder, keep `theme.json` and `background.png` together, then
use the theme JSON in your Codex Dream Skin workflow.

You can also copy the install prompt from the website and ask Codex to apply the
pack, verify Home / Task / Diff / Composer readability, and explain how to
restore the default appearance.

## Why public-safe?

Codex theme screenshots can accidentally expose private project names, chats,
task lists, and file paths. These packs ship only public artwork, reproducible
theme files, and sanitized demo previews.

## License

MIT. This is an independent experiment and is not affiliated with OpenAI.
