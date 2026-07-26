import { SplitHero } from "@/components/ui/split-hero";
import { AbstractSystemVisual } from "@/components/media/abstract-system-visual";

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
      visual={<AbstractSystemVisual />}
    />
  );
}
