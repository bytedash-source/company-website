# SVG / graphics components

Conventions for hand-built SVG visuals in this repo. Reference implementation: [`AbstractSystemVisual`](../../src/components/media/abstract-system-visual.tsx).

## No icon library, no imported `.svg` files

There's no icon package installed (no `lucide-react`, `heroicons`, etc.) and components don't `import` `.svg` files as assets. All SVG in this repo is hand-written inline JSX inside the component itself. Follow that — don't add an icon library or drop in `.svg` file imports for a one-off need; write the markup inline.

The `.svg` files under `public/` (`file.svg`, `globe.svg`, `next.svg`, `vercel.svg`, `window.svg`) are unused `create-next-app` scaffold leftovers, not part of the design system — don't reference them.

## Colors: always design tokens, never hardcoded hex

Every fill/stroke reads from a CSS custom property defined in the `@theme inline` block in `src/app/globals.css` (`var(--color-accent)`, `var(--color-ivory)`, etc.), never a literal hex value. Control transparency with `fillOpacity` / `strokeOpacity` attributes on top of the token color, rather than baking a translucent color in directly — this keeps every visual in sync if a token value changes.

Text set inside `<text>` should pull typography from the same token system too, e.g. `style={{ fontFamily: "var(--font-mono)" }}`, not a default SVG font.

## Structure

- Wrap the `<svg>` in a positioned container div that controls layout (`relative aspect-square w-full`, etc.); the `<svg>` itself just fills it (`h-full w-full`). Let the wrapper own aspect ratio and spacing, not the SVG's `width`/`height` attributes.
- Set `viewBox` to a clean round coordinate space (e.g. `0 0 400 400`) and `fill="none"` on the root `<svg>`, then let each child shape set its own `fill`/`stroke`.
- Use `<defs>`/`<pattern>` for repeating backgrounds (grids, textures) instead of drawing many individual lines.
- Generate repeated elements (corner marks, nodes, ticks) by mapping over a coordinates array rather than hand-duplicating JSX blocks.

## Accessibility

Purely decorative SVGs (diagrams, background graphics, anything not conveying unique content) get `aria-hidden="true"` on the wrapping element — no `<title>`/`<desc>` needed. If a future SVG conveys actual information (a real chart, a meaningful icon with no adjacent text label), give it an accessible name instead of hiding it.

## When *not* to build a new SVG placeholder

If the need is a stand-in for a future photo/screenshot (not an abstract diagram), don't build a new SVG for it — use the existing `imageSrc`-swap pattern instead: [`EditorialPhotoPlaceholder`](../../src/components/media/editorial-photo-placeholder.tsx) or [`CaseStudyVisual`](../../src/components/media/case-study-visual.tsx). Both already render a placeholder state and accept `imageSrc`/`alt` to drop in the real asset later without touching layout.

## Where new SVG visuals live

Illustrative/decorative SVG components go in `src/components/media/`, matching the existing pattern — not `src/components/ui/` (reserved for small reusable primitives) unless it's a genuinely reusable icon primitive rather than a page-specific visual.
