# Component Development Rules

Index of component-specific conventions for this repo. Read this file before building a new reusable component, or before touching an existing component of a kind covered here.

## Rule

**Before creating a new reusable component, or doing focused work on a specific kind of component (forms, inputs, maps, cards, etc.), check the table below first.**

- If a row exists for that kind of component, open its `docs/components/<slug>.md` file and follow the conventions documented there.
- If no row exists yet, there's no special rule to follow — just follow the general architecture conventions in [`CLAUDE.md`](../CLAUDE.md).
- If you establish a non-obvious convention while building or fixing a component (a pattern that should be reused, a gotcha that cost time, a decision another dev/agent would otherwise redo differently), add a `docs/components/<slug>.md` file for it and register it in the table below.

## Component guides

| Kind | Guide | Covers |
|---|---|---|
| SVG / graphics | [`docs/components/svg.md`](components/svg.md) | Importing `.svg` files via SVGR (the default) vs. inline JSX, design-token colors, decorative a11y, when to reuse the existing placeholder components instead |

Example future entries, once written: `docs/components/form.md` (form fields, validation, submit states), `docs/components/input.md` (base input styling/props), `docs/components/map.md` (map embed conventions). Only add a guide when there's an actual convention worth writing down — not as a placeholder.

## Writing a new guide

Keep each `docs/components/<slug>.md` short and focused on decisions, not documentation of what props exist (the code is the source of truth for that). Cover things like:

- Which existing component to copy/extend from, if any.
- Styling conventions specific to that kind of component (e.g. shared class constants, spacing rules).
- Accessibility requirements that apply to every instance (labels, `aria-*`, focus handling).
- State/behavior patterns (e.g. loading/error/success states for anything that submits data).
- Anything explicitly decided against, so it isn't re-litigated later.
