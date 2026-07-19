# Safety Checklist

Codex skin packs should be easy to inspect before you apply them. This project
ships public artwork and theme data only.

## What Is Included

- `background.png`: public-safe artwork for the skin.
- `theme.json`: theme values used by a Codex theme workflow.
- `README.md`: pack notes and restore guidance.

## What Is Not Included

- Private Codex workspace screenshots.
- Chat history, task names, project names, sidebars, or file paths.
- Application bundle patches.
- Credentials, tokens, telemetry code, or background network calls.

## Before Applying A Pack

1. Inspect `theme.json` and `background.png`.
2. Keep the pack files together in one folder.
3. Ask Codex to explain the restore path before changing your active theme.
4. Verify Home, Task, Diff, and Composer readability after applying.

## Restore Prompt

Use this prompt if you want Codex to help revert the visual changes:

```text
Restore my Codex desktop theme to the default appearance.
Use the restore path from Codex Dream Skin or the installed theme manager.
Verify the sidebar, home screen, task view, diff view, and composer are back to the native readable style.
Do not modify app.asar or the signed application bundle.
```

This is an independent experiment and is not affiliated with OpenAI.
