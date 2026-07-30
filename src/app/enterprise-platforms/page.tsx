import type { Metadata } from "next";
import { SplitHero } from "@/components/ui/split-hero";
import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { CtaLink } from "@/components/ui/cta-link";
import { MicroLabel } from "@/components/ui/micro-label";
import { Reveal } from "@/components/ui/reveal";
import { EditorialPhotoPlaceholder } from "@/components/media/editorial-photo-placeholder";
import { ProjectCard } from "@/components/ui/project-card";
import { PLACEHOLDER_OUTCOME, caseStudies } from "@/content/work";
import {
  clarityPrinciples,
  complexitySignals,
  enterpriseHero,
  evolutionPrinciples,
  platformCapabilities,
} from "@/content/enterprise";

export const metadata: Metadata = {
  title: "Enterprise platforms",
  description:
    "BYTE DASH helps organisations turn complex information, workflows, and operational needs into clear, useful digital platforms.",
  openGraph: {
    title: "Enterprise platforms — BYTE DASH",
    description:
      "Clear, role-aware operational platforms for organisations managing complex information and workflows.",
  },
};

const iea = caseStudies.find((project) => project.slug === "iea")!;

export default function EnterprisePlatformsPage() {
  return (
    <>
      <SplitHero
        eyebrow={enterpriseHero.eyebrow}
        headline={enterpriseHero.headline}
        supporting={enterpriseHero.supporting}
        visual={
          <EditorialPhotoPlaceholder
            aspectRatio="square"
            imageSrc="/images/enterprise/team-workflow.jpg"
            alt="A product team discussing an operational workflow on a whiteboard"
            className="border-0"
          />
        }
      />

      {/* 1. Complexity behind everyday operations */}
      <section data-surface="light" className="bg-ivory py-24 text-ink sm:py-32">
        <Container>
          <Reveal className="max-w-2xl">
            <SectionLabel tone="light">The complexity behind everyday operations</SectionLabel>
            <h2 className="mt-6 text-4xl leading-[1.1] font-medium sm:text-5xl">
              Operations get harder to manage before anyone decides to fix them.
            </h2>
            <p className="mt-6 text-lg text-ink/70">
              Every organisation is different, and not every team runs into
              all of these — but the signs tend to look familiar:
            </p>
          </Reveal>

          <ul className="mt-10 grid gap-px overflow-hidden border border-ink/15 bg-ink/15 sm:grid-cols-2">
            {complexitySignals.map((signal, i) => (
              <Reveal key={signal} delayMs={i * 40} className="bg-ivory p-6">
                <p className="text-ink/75">{signal}</p>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      {/* 2. What we can help build */}
      <section data-surface="dark" className="bg-graphite py-24 text-ivory sm:py-32">
        <Container>
          <SectionLabel>What we can help build</SectionLabel>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {platformCapabilities.map((item, i) => (
              <Reveal key={item} delayMs={i * 40}>
                <li className="border border-ivory/15 p-6 text-lg">{item}</li>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      {/* 3. Built around clarity */}
      <section data-surface="light" className="bg-ivory py-24 text-ink sm:py-32">
        <Container>
          <SectionLabel tone="light">Built around clarity</SectionLabel>
          <h2 className="mt-6 max-w-xl text-4xl leading-[1.1] font-medium sm:text-5xl">
            Clarity is a design decision, not a happy accident.
          </h2>

          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {clarityPrinciples.map((principle, i) => (
              <Reveal key={principle.title} delayMs={i * 40}>
                <h3 className="text-xl font-medium">{principle.title}</h3>
                <p className="mt-3 text-ink/65">{principle.description}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. A platform designed to evolve */}
      <section data-surface="dark" className="bg-graphite-elevated py-24 text-ivory sm:py-32">
        <Container>
          <SectionLabel>A platform designed to evolve</SectionLabel>
          <h2 className="mt-6 max-w-xl text-4xl leading-[1.1] font-medium sm:text-5xl">
            Built to change, not just to launch.
          </h2>

          <div className="mt-12 grid gap-10 sm:grid-cols-2">
            {evolutionPrinciples.map((principle, i) => (
              <Reveal key={principle.title} delayMs={i * 40}>
                <h3 className="text-xl font-medium">{principle.title}</h3>
                <p className="mt-3 text-ivory/65">{principle.description}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. Relevant work */}
      <section data-surface="dark" className="bg-graphite py-24 text-ivory sm:py-32">
        <Container>
          <SectionLabel>Relevant work</SectionLabel>
          <div className="mt-10">
            <ProjectCard project={iea} variant="row" />
            <MicroLabel className="mt-8 block text-ivory/40">{PLACEHOLDER_OUTCOME}</MicroLabel>
          </div>
        </Container>
      </section>

      {/* 6. Final CTA */}
      <section data-surface="dark" className="border-t border-ivory/10 bg-graphite py-24 text-ivory sm:py-36">
        <Container>
          <Reveal className="max-w-2xl">
            <h2 className="text-4xl leading-[1.1] font-medium sm:text-6xl">
              Bring clarity to complex operations.
            </h2>
            <CtaLink href="/contact" variant="framed" className="mt-10">
              Discuss your platform
            </CtaLink>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
