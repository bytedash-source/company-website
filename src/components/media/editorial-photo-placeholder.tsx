import Image from "next/image";
import { MicroLabel } from "@/components/ui/micro-label";

export type EditorialAspect = "portrait" | "landscape" | "panoramic" | "square";
export type EditorialTone = "graphite" | "ivory";

const ASPECT_CLASS: Record<EditorialAspect, string> = {
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
  panoramic: "aspect-[21/9]",
  square: "aspect-square",
};

type EditorialPhotoPlaceholderProps = {
  aspect?: EditorialAspect;
  tone?: EditorialTone;
  /** object-position, used once a real `src` is supplied */
  cropPosition?: string;
  label?: string;
  src?: string;
  alt?: string;
  className?: string;
};

/**
 * Art-directed stand-in for editorial photography. Pass `src`/`alt` later to
 * swap in the real image — layout, aspect and crop are already wired up.
 */
export function EditorialPhotoPlaceholder({
  aspect = "landscape",
  tone = "graphite",
  cropPosition = "center",
  label = "PROJECT VISUAL / COMING SOON",
  src,
  alt = "",
  className = "",
}: EditorialPhotoPlaceholderProps) {
  const toneClass =
    tone === "ivory"
      ? "bg-ivory text-ink border-ink/15"
      : "bg-graphite-elevated text-ivory border-ivory/15";

  return (
    <figure
      className={`relative overflow-hidden border ${ASPECT_CLASS[aspect]} ${toneClass} ${className}`}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          style={{ objectPosition: cropPosition }}
          className="object-cover"
        />
      ) : (
        <>
          <div className="grain-overlay absolute inset-0" aria-hidden="true" />
          <div
            className="absolute inset-0 bg-linear-to-br from-accent/12 via-transparent to-transparent"
            aria-hidden="true"
          />
          <div className="absolute inset-0 flex flex-col justify-between p-4">
            <span
              className="h-3 w-3 border-t border-l border-current/40"
              aria-hidden="true"
            />
            <MicroLabel className="self-start text-current/60">
              {label}
            </MicroLabel>
          </div>
        </>
      )}
    </figure>
  );
}
