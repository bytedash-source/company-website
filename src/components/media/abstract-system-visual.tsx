import SystemDiagram from "@/assets/svg/system-diagram.svg";
import { MicroLabel } from "@/components/ui/micro-label";

export type AbstractSystemVisualVariant = "network" | "grid";

type AbstractSystemVisualProps = {
  /** Caption rendered in the blueprint corner, e.g. "SYS.01 — PRODUCT ARCHITECTURE". */
  label?: string;
  /** Reserved for future compositional variants; only "network" is drawn today. */
  variant?: AbstractSystemVisualVariant;
  className?: string;
};

/**
 * Blueprint-style system diagram — a static SVG asset (`src/assets/svg/system-diagram.svg`,
 * imported as a component via SVGR) for the grid/panels/nodes/corner-marks, plus a soft
 * cobalt glow and a `label` caption laid on top. This is a permanent illustrative element
 * (not a stand-in for a photograph), so it takes a `label`/`variant` rather than an
 * `imageSrc` — there's no real-world asset to eventually swap in. The label stays in JSX
 * (not baked into the static SVG) because it's page-specific copy, not part of the graphic.
 */
export function AbstractSystemVisual({
  label = "SYS.01 — PRODUCT ARCHITECTURE",
  className = "",
}: AbstractSystemVisualProps) {
  return (
    <div
      className={`relative aspect-square w-full ${className}`}
      aria-hidden="true"
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 62% 38%, color-mix(in oklab, var(--color-accent) 22%, transparent), transparent 60%)",
        }}
      />
      <SystemDiagram className="relative h-full w-full" />
      <MicroLabel className="absolute top-[13%] left-[15%] text-ivory/45">
        {label}
      </MicroLabel>
    </div>
  );
}
