# Changelog — committed 2026-07-26

**Branch:** `chore/workflow-docs` → rebased onto `origin/main` → fast-forward merged into `main`

## 2026-07-26
- **What:** Started upgrading Next.js 14.2.5 → 16.2.12, React/React-DOM 18 → 19.2, `eslint-config-next` to match, plus a `CLAUDE.md` describing the (then) single-page landing site.
  **Why:** Bring the project onto current Next.js/React/ESLint majors before building further features.
  **Superseded:** A teammate force-pushed a full rewrite of `main` (multi-page site under `src/app/`, Tailwind v4, its own `CLAUDE.md`/`AGENTS.md`) that already includes this upgrade in a different structure. These local changes were discarded on this branch — see below.
- **What:** Added `docs/WORKFLOW.md` with commit message conventions, branching, and rules for Claude Code (ask before committing, recommend commit points, maintain this changelog).
  **Why:** User requested a documented workflow so future Claude sessions follow consistent git practices.
- **What:** Discarded the Next.js/React upgrade, `.eslintrc.json`→`eslint.config.mjs` migration, `tsconfig.json` changes, and the custom `CLAUDE.md` from this branch (restored to the pre-rewrite `HEAD` state); kept only `docs/WORKFLOW.md` and this changelog.
  **Why:** Those code changes are superseded by the teammate's rewritten `main`, which already ships Next 16/React 19/ESLint 9 in a different (`src/app/`) layout. Carrying our version forward would just conflict. Origin's own `CLAUDE.md`/`AGENTS.md` was kept as-is since it matches the current code.
- **What:** Rebased `chore/workflow-docs` (`--onto origin/main e2bdaf0`, taking only the docs commit) onto `origin/main`, reset local `main` to `origin/main`, fast-forward merged, deleted `chore/workflow-docs`.
  **Why:** Sync local history with the teammate's force-pushed rewrite while preserving only the still-relevant docs work.
