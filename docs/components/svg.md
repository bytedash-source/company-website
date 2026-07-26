# SVG / graphics components

Two ways SVG shows up in this repo: hand-written inline JSX for original diagrams/illustrations, and imported `.svg` files (via SVGR) for assets that already exist as files — icons, logos, exports from Figma/Illustrator.

## Two patterns — pick based on where the SVG comes from

**Inline JSX** (reference: [`AbstractSystemVisual`](../../src/components/media/abstract-system-visual.tsx)) — for original diagrams/illustrations authored directly in the component, especially ones that read design tokens or vary by props (see "Colors" below). No separate file exists for these; there's nothing to import.

**Imported `.svg` file via SVGR** — for a self-contained asset that already exists as a `.svg` (an icon, a logo, an export from a design tool). SVGR is configured in `next.config.ts` (both the `turbopack.rules` and `webpack` blocks — Turbopack is the default bundler for `next dev`/`next build`, the webpack rule is a fallback for `--webpack`) plus the ambient module declaration in `src/types/svg.d.ts`. Importing a `.svg` file gives you a React component:

```tsx
import Logo from "@/assets/svg/logo.svg";

<Logo width={32} height={32} className="text-accent" />;
```

Don't add a general icon package (`lucide-react`, `heroicons`, etc.) for one-off icons — bring in the specific `.svg` file instead. Source `.svg` files meant to be imported this way live under `src/assets/svg/` (create it if it doesn't exist yet); that's distinct from `src/components/media/`, which is for the inline-JSX components themselves.

There's currently no `?url` (raw string URL) import variant configured — only component imports. If a real need for a literal URL string comes up (rare; `next/image` and `<link rel="icon">` usually just reference a path under `public/` directly, no import needed), extend the SVGR config rather than reaching for a different mechanism.

The `.svg` files under `public/` (`file.svg`, `globe.svg`, `next.svg`, `vercel.svg`, `window.svg`) are unused `create-next-app` scaffold leftovers, not part of the design system — don't reference them.

## Colors: always design tokens, never hardcoded hex

For inline JSX: every fill/stroke reads from a CSS custom property defined in the `@theme inline` block in `src/app/globals.css` (`var(--color-accent)`, `var(--color-ivory)`, etc.), never a literal hex value. Control transparency with `fillOpacity` / `strokeOpacity` attributes on top of the token color, rather than baking a translucent color in directly — this keeps every visual in sync if a token value changes.

Text set inside `<text>` should pull typography from the same token system too, e.g. `style={{ fontFamily: "var(--font-mono)" }}`, not a default SVG font.

For imported `.svg` files: author the source file with `fill="currentColor"` (or `stroke="currentColor"`) wherever the color should be controllable, then set color from the consuming component via a Tailwind text-color class (`className="text-accent"`) or inline `color` — same token system, applied through CSS `currentColor` instead of baked into the file.

## Structure (inline JSX)

- Wrap the `<svg>` in a positioned container div that controls layout (`relative aspect-square w-full`, etc.); the `<svg>` itself just fills it (`h-full w-full`). Let the wrapper own aspect ratio and spacing, not the SVG's `width`/`height` attributes.
- Set `viewBox` to a clean round coordinate space (e.g. `0 0 400 400`) and `fill="none"` on the root `<svg>`, then let each child shape set its own `fill`/`stroke`.
- Use `<defs>`/`<pattern>` for repeating backgrounds (grids, textures) instead of drawing many individual lines.
- Generate repeated elements (corner marks, nodes, ticks) by mapping over a coordinates array rather than hand-duplicating JSX blocks.

## Accessibility

Purely decorative SVGs (diagrams, background graphics, anything not conveying unique content) get `aria-hidden="true"` on the wrapping element — no `<title>`/`<desc>` needed. If a future SVG conveys actual information (a real chart, a meaningful icon with no adjacent text label), give it an accessible name instead of hiding it.

## When *not* to build a new SVG placeholder

If the need is a stand-in for a future photo/screenshot (not an abstract diagram), don't build a new SVG for it — use the existing `imageSrc`-swap pattern instead: [`EditorialPhotoPlaceholder`](../../src/components/media/editorial-photo-placeholder.tsx) or [`CaseStudyVisual`](../../src/components/media/case-study-visual.tsx). Both already render a placeholder state and accept `imageSrc`/`alt` to drop in the real asset later without touching layout.

## Where new SVG assets live

- Inline-JSX illustrative/decorative components go in `src/components/media/`, matching the existing pattern — not `src/components/ui/` (reserved for small reusable primitives) unless it's a genuinely reusable icon primitive rather than a page-specific visual.
- Source `.svg` files meant to be imported via SVGR go in `src/assets/svg/`.
