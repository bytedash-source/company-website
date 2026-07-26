import type { Metadata } from "next";
import { SplitHero } from "@/components/ui/split-hero";
import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { CtaLink } from "@/components/ui/cta-link";
import { MicroLabel } from "@/components/ui/micro-label";
import { Reveal } from "@/components/ui/reveal";
import { processAdaptabilityNote, processSteps } from "@/content/process";

export const metadata: Metadata = {
  title: "Process",
  description:
    "How BYTE DASH moves projects from discovery through design, development, testing, and launch — a process adapted to each project's scope.",
  openGraph: {
    title: "Process — BYTE DASH",
    description:
      "Five stages, adapted to scope: discover, define and design, build, test, launch and improve.",
  },
};

export default function ProcessPage() {
  return (
    <>
      <SplitHero
        eyebrow="Process"
        headline="How a project moves from idea to release."
        supporting="Every project at BYTE DASH follows the same five stages. The depth of each stage depends on the size and maturity of the project — a new product idea moves through all five in full, while an existing platform might begin partway through."
      />

      <section data-surface="dark" className="bg-graphite text-ivory">
        {processSteps.map((step, i) => (
          <Reveal key={step.index} delayMs={i * 40}>
            <div className="border-t border-ivory/15 py-16 last:border-b sm:py-20">
              <Container>
                <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
                  <div className="lg:col-span-4">
                    <SectionLabel index={step.index}>{step.title}</SectionLabel>
                    <h2 className="mt-6 max-w-sm text-3xl leading-[1.15] font-medium sm:text-4xl">
                      {step.headline}
                    </h2>
                  </div>

                  <div className="lg:col-span-8">
                    <p className="max-w-2xl text-ivory/70">{step.whatHappens}</p>

                    <div className="mt-10 grid gap-10 sm:grid-cols-3">
                      <div>
                        <MicroLabel className="text-ivory/45">Typical activities</MicroLabel>
                        <ul className="mt-4 space-y-3">
                          {step.activities.map((item) => (
                            <li
                              key={item}
                              className="border-t border-ivory/10 pt-3 text-ivory/75 first:border-t-0 first:pt-0"
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <MicroLabel className="text-ivory/45">Client involvement</MicroLabel>
                        <p className="mt-4 text-ivory/75">{step.clientInvolvement}</p>
                      </div>

                      <div>
                        <MicroLabel className="text-ivory/45">
                          Deliverables / outputs
                        </MicroLabel>
                        <ul className="mt-4 space-y-3">
                          {step.deliverables.map((item) => (
                            <li
                              key={item}
                              className="border-t border-ivory/10 pt-3 text-ivory/75 first:border-t-0 first:pt-0"
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Container>
            </div>
          </Reveal>
        ))}
      </section>

      <section data-surface="light" className="bg-ivory py-16 text-ink sm:py-20">
        <Container>
          <Reveal className="max-w-2xl border-l-2 border-accent pl-6">
            <p className="text-ink/70">{processAdaptabilityNote}</p>
          </Reveal>
        </Container>
      </section>

      <section data-surface="dark" className="bg-graphite py-24 text-ivory sm:py-32">
        <Container>
          <Reveal className="max-w-2xl">
            <h2 className="text-4xl leading-[1.1] font-medium sm:text-5xl">
              Ready to talk through where your project fits?
            </h2>
            <CtaLink href="/contact" variant="framed" className="mt-8">
              Start a project
            </CtaLink>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
