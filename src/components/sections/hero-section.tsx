import { SplitHero } from "@/components/ui/split-hero";
import { EditorialPhotoPlaceholder } from "@/components/media/editorial-photo-placeholder";

export function HeroSection() {
  return (
    <SplitHero
      eyebrow="Digital product studio — Bangkok"
      headline={
        <>
          Make digital products
          <br />
          that make complex work feel clear.
        </>
      }
      supporting="BYTE DASH designs and develops mobile applications, web platforms, and user-centred systems for businesses building what comes next."
      primaryCta={{ label: "Start a project", href: "/contact" }}
      secondaryCta={{ label: "Explore our work", href: "/work" }}
      visual={
        <EditorialPhotoPlaceholder
          aspectRatio="square"
          variant="graphite"
          imageSrc="/images/hero/hero-visual.png"
          alt="Abstract isometric diagram of a layered digital product system"
        />
      }
    />
  );
}
