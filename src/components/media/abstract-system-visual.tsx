export type AbstractSystemVisualVariant = "network" | "grid";

type AbstractSystemVisualProps = {
  /** Caption rendered in the blueprint corner, e.g. "SYS.01 — PRODUCT ARCHITECTURE". */
  label?: string;
  /** Reserved for future compositional variants; only "network" is drawn today. */
  variant?: AbstractSystemVisualVariant;
  className?: string;
};

/**
 * Blueprint-style system diagram built entirely from SVG/CSS — grid, translucent
 * panels, node/connection lines and a soft cobalt glow. No raster assets. This is
 * a permanent illustrative element (not a stand-in for a photograph), so it takes
 * a `label`/`variant` rather than an `imageSrc` — there's no real-world asset to
 * eventually swap in.
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
      <svg
        viewBox="0 0 400 400"
        className="relative h-full w-full"
        fill="none"
      >
        <defs>
          <pattern
            id="grid"
            width="25"
            height="25"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 25 0 L 0 0 0 25"
              fill="none"
              stroke="var(--color-ivory)"
              strokeOpacity="0.08"
              strokeWidth="1"
            />
          </pattern>
        </defs>

        <rect width="400" height="400" fill="url(#grid)" />

        {/* translucent system panels */}
        <rect
          x="60"
          y="70"
          width="160"
          height="110"
          stroke="var(--color-accent)"
          strokeOpacity="0.5"
          fill="var(--color-accent)"
          fillOpacity="0.06"
        />
        <rect
          x="190"
          y="220"
          width="150"
          height="95"
          stroke="var(--color-ivory)"
          strokeOpacity="0.25"
          fill="var(--color-ivory)"
          fillOpacity="0.03"
        />

        {/* connection lines */}
        <path
          d="M140 180 L140 240 L245 240 L245 220"
          stroke="var(--color-ivory)"
          strokeOpacity="0.3"
          strokeWidth="1"
        />
        <path
          d="M220 125 L340 125 L340 220"
          stroke="var(--color-accent)"
          strokeOpacity="0.55"
          strokeWidth="1"
        />

        {/* nodes */}
        <circle cx="140" cy="180" r="4" fill="var(--color-accent)" />
        <circle cx="340" cy="125" r="4" fill="var(--color-accent)" />
        <circle
          cx="245"
          cy="220"
          r="4"
          fill="var(--color-ivory)"
          fillOpacity="0.6"
        />

        {/* blueprint corner marks */}
        {[
          [24, 24],
          [376, 24],
          [24, 376],
          [376, 376],
        ].map(([cx, cy]) => (
          <g key={`${cx}-${cy}`} stroke="var(--color-ivory)" strokeOpacity="0.35">
            <line x1={cx - 10} y1={cy} x2={cx + 10} y2={cy} />
            <line x1={cx} y1={cy - 10} x2={cx} y2={cy + 10} />
          </g>
        ))}

        <text
          x="60"
          y="58"
          fill="var(--color-ivory)"
          fillOpacity="0.45"
          fontSize="10"
          letterSpacing="2"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          {label}
        </text>
      </svg>
    </div>
  );
}
