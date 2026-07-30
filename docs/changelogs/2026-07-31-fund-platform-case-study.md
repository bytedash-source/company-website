# Changelog — in progress

**Branch:** `main`

## 2026-07-31
- **What:** Added a bespoke case-study page for the "Fund Management Platform" project (`src/app/work/fund-platform-redesign/page.tsx`), with a 5-step research process, heuristic-evaluation findings, and usability-testing results instead of the shared product-shipping layout.
  **Why:** This engagement is a UX research/redesign engagement for a real, confidential client rather than a shipped product, so the case study needed to show the design process in more depth than the other case studies.
- **What:** Extended `ServiceIndex`/`ServiceIndexRow` (`src/components/ui/service-index.tsx`) with a `tone?: "dark" | "light"` prop.
  **Why:** Reused the component for the Fund Management Platform "Our approach" section after feedback that the original vertical-timeline treatment looked too similar to the homepage Process section; the component was previously hardcoded for dark surfaces only.
- **What:** Extended `CaseStudyVisual` (`src/components/media/case-study-visual.tsx`) with `mockup`/`art` variants and `imageFit`/`imageAspect` props.
  **Why:** Support device-mockup and art-directed imagery (e.g. the fund platform hero/usability-testing photos) without wrapping them in a second browser-chrome frame.
- **What:** Made the "Project visuals" section in `CaseStudyContent` (`src/components/sections/case-study-content.tsx`) conditional on `project.visualImageSrcs` being present.
  **Why:** Requested by user — projects with no gallery images (TERMFAI, EXAT LinkedBiz, NapLap) were showing an empty-looking placeholder-only gallery section; hiding it when there's nothing real to show is now automatic for any future project too.
- **What:** Wired the Fund Management Platform hero/gallery image (`fund-platform-hero.png`) and IEA/U Terrace project-visual galleries; updated `next.config.ts` image patterns, hero/enterprise-platforms editorial photos, and NapLap's "next project" link to point at the new case study.
  **Why:** Real imagery placement requested by user across several case studies in this session.
- **Note:** Deliberately excluded from this commit: `fund-investment-home.jpg`, `usability-testing-anonymized.png`, `fictional-avatar.png` (unreferenced draft images under `public/images/work/fund-platform-redesign/`) and three stray `messageImage_*.jpg` files at the repo root — the first is an un-sanitized capture with real fund codes/nav still visible, the rest are orphaned/misplaced pastes not wired into any page.
