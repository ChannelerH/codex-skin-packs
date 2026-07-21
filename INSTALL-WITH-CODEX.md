# Install With Codex

Use the plugin path first. It gives Codex a repeatable installer Skill and keeps
theme validation plus restore guidance in the same workflow.

```bash
codex plugin marketplace add ChannelerH/codex-skin-packs --ref main --sparse .agents/plugins --sparse plugins/codex-skin-pack-installer
codex plugin add codex-skin-pack-installer@codex-skin-packs
```

Then ask Codex:

```text
Use $codex-skin-pack-installer to install the caishen-lite Codex skin pack and tell me how to restore the default theme.
```

The prompts below are useful after downloading a skin pack from the release or
when the plugin is not available. They are written to keep the native app layout
intact and preserve a restore path.

Release downloads:
https://github.com/ChannelerH/codex-skin-packs/releases/tag/v0.1.0

## Install A Pack

```text
Install this Codex skin pack from my local download folder.
Use Codex Dream Skin or the active Codex theme manager if available.
Keep the native Codex layout interactive.
Do not publish or upload private workspace screenshots.
After applying, verify Home, Task, Diff, and Composer readability.
Then tell me how to restore the default theme.
```

## Apply From A URL

Replace the pack URL before running this prompt.

```text
Apply this Codex skin pack:
PACK_URL_HERE

Download and inspect the zip first.
Use the included background.png and theme.json together.
Do not modify app.asar or the signed application bundle.
Verify Home, Task, Diff, and Composer readability.
Tell me the restore path before finishing.
```

## Restore Default Appearance

```text
Restore my Codex desktop theme to the default appearance.
Use the restore path from Codex Dream Skin or the installed theme manager.
Verify the sidebar, home screen, task view, diff view, and composer are back to the native readable style.
Do not modify app.asar or the signed application bundle.
```

## Create A Public-Safe Remix

```text
Create a new public-safe Codex skin inspired by this pack.
Keep the visual direction, but use original artwork, fake demo text, and no private workspace screenshots.
Ship background.png, theme.json, README.md, and a restore note.
Check Home, Task, Diff, and Composer readability before saying it is ready.
```

## Before Sharing

- Share the pack files, not screenshots of your real Codex workspace.
- Remove task names, project names, chats, file paths, and private sidebars.
- Link to `SAFETY.md` if someone asks what the pack contains.

This is an independent experiment and is not affiliated with OpenAI.
