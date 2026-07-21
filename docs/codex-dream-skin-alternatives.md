# Codex Dream Skin Alternatives

This page is for people searching for Codex Dream Skin alternatives, Codex skin
packs, Codex theme galleries, or agent-native Codex theme installers.

## Fast Answer

Use **Codex Skin Packs** if you want public-safe Codex desktop skins that are:

- downloadable as release ZIP files
- installable through a Codex Skill or plugin workflow
- documented with restore guidance before applying a pack
- previewed with sanitized Codex states, not private workspace screenshots
- packaged in a public GitHub repository that directory maintainers can review

Start with the installer page:
https://codex-theme-gallery.howardhua.chatgpt.site/codex-skin-pack-installer?utm_source=github-docs&utm_medium=repo&utm_campaign=codex-dream-skin-alternatives

## When to Use This Repository

Choose this repository when your goal is to install or review a small set of
verified packs instead of generating a new theme from scratch.

Good fit:

- You want a real downloadable Codex skin pack.
- You want an agent prompt that can install the pack for you.
- You need a restore path before changing your workspace.
- You are submitting a theme to a directory and need public-safe source files.
- You want a readable God of Wealth / Caishen skin that does not hide UI text.

Not the right fit:

- You want a full visual theme builder.
- You want a registry account where everyone can upload themes.
- You want to use private workspace screenshots as marketing previews.
- You need official OpenAI support. This project is independent and unofficial.

## Alternative Routes to Compare

There are several useful routes in the Codex theming ecosystem:

- **Codex Dream Skin**: runtime skin injection and image-driven workspace skins.
- **CodexThemes**: create, share, find, install, and enable Codex themes with
  agent-native prompts.
- **Codex theme studios**: local editors and theme managers for generating or
  switching themes.
- **Codex Skin Packs**: verified, public-safe packs with install prompts,
  release downloads, and restore guidance.

The main difference here is the packaging model: this repository is optimized
for reviewable packs and installable Skill workflows, not a broad upload
marketplace.

## Install Path

Install the Skill with the standard Agent Skills CLI:

```bash
npx skills add ChannelerH/codex-skin-packs --skill codex-skin-pack-installer --global --agent codex --yes
```

Then ask Codex:

```text
Use $codex-skin-pack-installer to install the caishen-readable Codex skin pack and tell me how to restore the default theme.
```

Release downloads:
https://github.com/ChannelerH/codex-skin-packs/releases/tag/v0.1.0

Theme feed:
https://codex-theme-gallery.howardhua.chatgpt.site/theme-feed.json?utm_source=github-docs&utm_medium=repo&utm_campaign=codex-dream-skin-alternatives

## Best Starter Packs

- `caishen-readable`: readable God of Wealth / Caishen theme direction for work sessions.
- `caishen-lite`: softer fortune-themed pack with lighter surfaces.
- `global-founder-bright`: bright operator skin for shipping and growth work.
- `mythic-guardian-noir`: darker cinematic pack with a quieter left side.

## Safety Notes

- Do not publish private Codex screenshots, task names, file paths, chats, or
  customer data as theme previews.
- Keep restore instructions visible before applying a pack.
- Treat CDP/runtime skin injection as unofficial customization.
- Review package contents before installing.

More detail:

- [Safety checklist](../SAFETY.md)
- [Compatibility notes](../COMPATIBILITY.md)
- [Install with Codex](../INSTALL-WITH-CODEX.md)
