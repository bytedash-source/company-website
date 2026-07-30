import Image from "next/image";
import { MicroLabel } from "@/components/ui/micro-label";

export type CaseStudyVariant = "desktop" | "mobile" | "mockup" | "art" | "full";

type CaseStudyVisualProps = {
  variant?: CaseStudyVariant;
  label?: string;
  imageSrc?: string;
  alt?: string;
  cropPosition?: string;
  imageFit?: "cover" | "contain";
  imageAspect?: "video" | "ui";
  className?: string;
};

/**
 * Stand-in for a real product/website screenshot. `variant` controls the
 * device framing; pass `imageSrc`/`alt` later to drop in the real capture
 * without touching the surrounding case-study layout.
 */
export function CaseStudyVisual({
  variant = "full",
  label = "PROJECT VISUAL COMING SOON",
  imageSrc,
  alt = "",
  cropPosition = "center",
  imageFit = "cover",
  imageAspect = "video",
  className = "",
}: CaseStudyVisualProps) {
  const frameFill = (
    <div className="relative flex h-full w-full items-center justify-center bg-graphite-elevated">
      {imageSrc ? (
        <Image
          src={imageSrc}
          alt={alt}
          fill
          style={{ objectPosition: cropPosition }}
          className={imageFit === "contain" ? "object-contain" : "object-cover"}
        />
      ) : (
        <>
          <div className="grain-overlay absolute inset-0" aria-hidden="true" />
          <MicroLabel className="relative text-ivory/50">{label}</MicroLabel>
        </>
      )}
    </div>
  );

  if (variant === "mobile") {
    return (
      <div className={`flex justify-center ${className}`}>
        <div className="aspect-[9/16] w-full max-w-[220px] overflow-hidden rounded-[1.75rem] border-4 border-graphite-elevated bg-graphite shadow-[0_0_0_1px_rgba(238,233,223,0.12)]">
          {frameFill}
        </div>
      </div>
    );
  }

  // For art-directed device renders that already include the phone hardware,
  // keep the original crop visible instead of wrapping it in a second device.
  if (variant === "mockup") {
    return (
      <div className={`mx-auto aspect-[9/16] w-full max-w-[220px] overflow-hidden rounded-[1.75rem] border border-ivory/20 bg-graphite shadow-[0_0_0_1px_rgba(238,233,223,0.08)] ${className}`}>
        {frameFill}
      </div>
    );
  }

  if (variant === "art") {
    return (
      <div className={`aspect-[7/5] overflow-hidden border border-ivory/15 bg-graphite-elevated ${className}`}>
        {frameFill}
      </div>
    );
  }

  if (variant === "desktop") {
    return (
      <div className={`overflow-hidden border border-ivory/15 ${className}`}>
        <div className="flex items-center gap-1.5 border-b border-ivory/15 bg-graphite-elevated px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-ivory/20" />
          <span className="h-2 w-2 rounded-full bg-ivory/20" />
          <span className="h-2 w-2 rounded-full bg-ivory/20" />
        </div>
        <div className={imageAspect === "ui" ? "aspect-[7/5]" : "aspect-video"}>{frameFill}</div>
      </div>
    );
  }

  return (
    <div className={`aspect-[16/10] overflow-hidden border border-ivory/15 ${className}`}>
      {frameFill}
    </div>
  );
}
