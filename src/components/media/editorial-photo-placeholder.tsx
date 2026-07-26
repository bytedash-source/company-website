import Image from "next/image";
import { MicroLabel } from "@/components/ui/micro-label";

export type EditorialAspectRatio = "portrait" | "landscape" | "panoramic" | "square";
export type EditorialTone = "graphite" | "ivory";

const ASPECT_CLASS: Record<EditorialAspectRatio, string> = {
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
  panoramic: "aspect-[21/9]",
  square: "aspect-square",
};

type EditorialPhotoPlaceholderProps = {
  aspectRatio?: EditorialAspectRatio;
  variant?: EditorialTone;
  /** object-position, used once a real `imageSrc` is supplied */
  cropPosition?: string;
  label?: string;
  imageSrc?: string;
  alt?: string;
  className?: string;
};

/**
 * Art-directed stand-in for editorial photography. Pass `imageSrc`/`alt` later
 * to swap in the real image — layout, aspect ratio and crop are already
 * wired up, so nothing else needs to change.
 */
export function EditorialPhotoPlaceholder({
  aspectRatio = "landscape",
  variant = "graphite",
  cropPosition = "center",
  label = "PROJECT VISUAL / COMING SOON",
  imageSrc,
  alt = "",
  className = "",
}: EditorialPhotoPlaceholderProps) {
  const toneClass =
    variant === "ivory"
      ? "bg-ivory text-ink border-ink/15"
      : "bg-graphite-elevated text-ivory border-ivory/15";

  return (
    <figure
      className={`relative overflow-hidden border ${ASPECT_CLASS[aspectRatio]} ${toneClass} ${className}`}
    >
      {imageSrc ? (
        <Image
          src={imageSrc}
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
