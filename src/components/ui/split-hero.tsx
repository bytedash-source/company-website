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
  tone?: "dark" | "light";
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
  tone = "dark",
  className = "",
}: SplitHeroProps) {
  const isLight = tone === "light";

  return (
    <section
      data-surface={tone}
      className={`${isLight ? "bg-ivory text-ink" : "bg-graphite text-ivory"} pt-32 pb-20 sm:pt-40 sm:pb-28 ${className}`}
    >
      <Container>
        <div className={visual ? "grid items-center gap-16 lg:grid-cols-12 lg:gap-8" : ""}>
          <div className={visual ? "lg:col-span-7" : "max-w-3xl"}>
            <MicroLabel className={isLight ? "text-ink/50" : "text-ivory/50"}>
              {eyebrow}
            </MicroLabel>

            <h1 className="mt-6 text-5xl leading-[1.08] font-medium sm:text-6xl lg:text-6xl xl:text-7xl">
              {headline}
            </h1>

            {supporting ? (
              <p className={`mt-8 max-w-lg text-lg ${isLight ? "text-ink/70" : "text-ivory/70"}`}>
                {supporting}
              </p>
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
              {/* `justify-self-*` here (instead of `mx-auto`) used to trigger
                  Chromium's block-level self-alignment behavior, which forces
                  shrink-to-fit sizing — collapsing any visual whose content is
                  entirely `position: absolute` (no in-flow box to measure). */}
              <div className="mx-auto max-w-md lg:mx-0 lg:max-w-none">
                {visual}
              </div>
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
