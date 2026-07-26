# Changelog — committed 2026-07-26

**Branch:** `main`

## 2026-07-26
- **What:** Rewrote `CLAUDE.md` to describe the actual current codebase (multi-page BYTE DASH site under `src/app/`, Tailwind v4, planned Framer Motion, `src/components`/`src/content`/`src/hooks` structure) instead of the stale single-page description and the `@AGENTS.md` pointer.
  **Why:** User no longer wants `CLAUDE.md` to just defer to `AGENTS.md` (unclear purpose, generic Next.js stub) — wants real, project-specific guidance. Content/copy/sitemap details are intentionally left out and linked to `product-requirement.md` / `content-system.md` instead, to avoid duplication that could drift out of sync.
  **Decisions confirmed with user:** Tailwind CSS v4 stays the primary styling approach; Framer Motion is the animation library for new work only (existing hand-rolled `useInView`/`data-reveal` reveal system is left as-is, not migrated); `AGENTS.md` is kept on disk untouched but no longer referenced from `CLAUDE.md`.
