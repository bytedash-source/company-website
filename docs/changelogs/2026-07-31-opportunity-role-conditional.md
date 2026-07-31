# Changelog — in progress

**Branch:** `main`

## 2026-07-31
- **What:** Wrote real "The opportunity" / "BYTE DASH's role" copy for the IEA case study (`src/content/work.ts`), replacing the `PLACEHOLDER_DETAILS` placeholders.
  **Why:** User supplied the real project facts (data was scattered across spreadsheets, scope was UX/UI design + full-stack build, process was research → design → build → test); rewritten as article-style prose per user request rather than terse bullet-style statements.
- **What:** Made the "The opportunity" / "BYTE DASH's role" section in `CaseStudyContent` (`src/components/sections/case-study-content.tsx`) conditional — only renders when both fields are filled in with real content, not the placeholder.
  **Why:** Requested by user — projects still on `PLACEHOLDER_DETAILS` (TERMFAI, EXAT LinkedBiz, U Terrace, NapLap) were showing "Approved project details to be added." publicly; hiding the section until real content exists is now automatic for any project, matching the same pattern already used for the "Project visuals" gallery.
