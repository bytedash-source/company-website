# Changelog — 2026-07-26 exat-linkedbiz-case-study

**Branch:** `main`

## 2026-07-26
- **What:** Added a third case study, EXAT LinkedBiz (client: Expressway Authority of Thailand / EXAT, a content management system for business content and eCommerce), to `src/content/work.ts`, with a new `/work/exat-linkedbiz` case-study route mirroring the IEA/TERMFAI pages. Rewired the case-study "next project" cycle to IEA → TERMFAI → EXAT LinkedBiz → IEA. Updated `content-system.md` and `product-requirement.md` so the documented content/client tables stay in sync with the new project.
  **Why:** Client confirmed a new completed project (EXAT LinkedBiz) beyond the previously listed IEA and TERMFAI work, and clarified TERMFAI's client was already correctly recorded as Synergy Technology Co., Ltd.
- **What:** Ran `npm install` to restore `@tailwindcss/postcss` (present in `package.json` but missing from `node_modules`), which was causing `npm run build` to fail.
  **Why:** Needed a working build to verify the new case-study route rendered correctly; unrelated to the content change itself but required to verify it.
