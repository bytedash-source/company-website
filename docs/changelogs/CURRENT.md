# Changelog — in progress

**Branch:** `chore/workflow-docs`

## 2026-07-26
- **What:** Started upgrading Next.js 14.2.5 → 16.2.12, React/React-DOM 18 → 19.2, `eslint-config-next` to match, plus a `CLAUDE.md` describing the (then) single-page landing site.
  **Why:** Bring the project onto current Next.js/React/ESLint majors before building further features.
  **Superseded:** A teammate force-pushed a full rewrite of `main` (multi-page site under `src/app/`, Tailwind v4, its own `CLAUDE.md`/`AGENTS.md`) that already includes this upgrade in a different structure. These local changes were discarded on this branch — see below.
- **What:** Added `docs/WORKFLOW.md` with commit message conventions, branching, and rules for Claude Code (ask before committing, recommend commit points, maintain this changelog).
  **Why:** User requested a documented workflow so future Claude sessions follow consistent git practices.
- **What:** Discarded the Next.js/React upgrade, `.eslintrc.json`→`eslint.config.mjs` migration, `tsconfig.json` changes, and the custom `CLAUDE.md` from this branch (restored to the pre-rewrite `HEAD` state); kept only `docs/WORKFLOW.md` and this changelog.
  **Why:** Those code changes are superseded by the teammate's rewritten `main`, which already ships Next 16/React 19/ESLint 9 in a different (`src/app/`) layout. Carrying our version forward would just conflict. Origin's own `CLAUDE.md`/`AGENTS.md` will be kept as-is once this branch is rebased onto the new `main`, since it actually matches the current code.
  **Next step:** rebase this branch onto the new `origin/main`, then reset local `main` to match `origin/main`.
