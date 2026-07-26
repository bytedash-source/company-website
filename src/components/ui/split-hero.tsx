import type { ReactNode } from "react";
import { Container } from "@/components/ui/container";
import { CtaLink } from "@/components/ui/cta-link";
import { MicroLabel } from "@/components/ui/micro-label";

type HeroCta = {
  label: string;
  href: string;
};

type SplitHeroProps = {
  eyebrow: string;
  headline: ReactNode;
  supporting?: ReactNode;
  primaryCta?: HeroCta;
  secondaryCta?: HeroCta;
  /** Optional visual slot (e.g. AbstractSystemVisual) — renders on a 12-col asymmetric split. */
  visual?: ReactNode;
  className?: string;
};

/**
 * Shared hero layout for every page. With a `visual`, content and visual sit
 * on a 7/5 asymmetric 12-column split; without one, content reads as a
 * focused single column for inner pages that don't need a diagram.
 */
export function SplitHero({
  eyebrow,
  headline,
  supporting,
  primaryCta,
  secondaryCta,
  visual,
  className = "",
}: SplitHeroProps) {
  return (
    <section
      data-surface="dark"
      className={`bg-graphite pt-32 pb-20 text-ivory sm:pt-40 sm:pb-28 ${className}`}
    >
      <Container>
        <div className={visual ? "grid items-center gap-16 lg:grid-cols-12 lg:gap-8" : ""}>
          <div className={visual ? "lg:col-span-7" : "max-w-3xl"}>
            <MicroLabel className="text-ivory/50">{eyebrow}</MicroLabel>

            <h1 className="mt-6 text-5xl leading-[1.08] font-medium sm:text-6xl lg:text-6xl xl:text-7xl">
              {headline}
            </h1>

            {supporting ? (
              <p className="mt-8 max-w-lg text-lg text-ivory/70">{supporting}</p>
            ) : null}

            {primaryCta || secondaryCta ? (
              <div className="mt-10 flex flex-wrap items-center gap-6">
                {primaryCta ? (
                  <CtaLink href={primaryCta.href} variant="framed">
                    {primaryCta.label}
                  </CtaLink>
                ) : null}
                {secondaryCta ? (
                  <CtaLink href={secondaryCta.href} variant="text">
                    {secondaryCta.label}
                  </CtaLink>
                ) : null}
              </div>
            ) : null}
          </div>

          {visual ? (
            <div className="lg:col-span-5">
              <div className="max-w-md justify-self-center lg:max-w-none lg:justify-self-end">
                {visual}
              </div>
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
