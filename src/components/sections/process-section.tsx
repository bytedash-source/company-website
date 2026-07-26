import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { CtaLink } from "@/components/ui/cta-link";
import { MicroLabel } from "@/components/ui/micro-label";
import { Reveal } from "@/components/ui/reveal";
import { processSteps } from "@/content/process";

export function ProcessSection() {
  return (
    <section data-surface="light" className="bg-ivory py-24 text-ink sm:py-32">
      <Container>
        <SectionLabel tone="light">How we work</SectionLabel>
        <h2 className="mt-6 max-w-xl text-4xl leading-[1.1] font-medium sm:text-5xl">
          From the first question to what comes next.
        </h2>

        <ol className="mt-12 border-l border-ink/15 sm:mt-16">
          {processSteps.map((step, i) => (
            <li key={step.index} className="relative">
              <Reveal delayMs={i * 60} className="py-8 pl-8 sm:pl-12">
                <span
                  aria-hidden="true"
                  className="absolute top-9 left-0 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-accent"
                />
                <MicroLabel className="text-accent">{step.index}</MicroLabel>
                <h3 className="mt-2 text-2xl font-medium sm:text-3xl">{step.title}</h3>
                <p className="mt-2 max-w-md text-ink/65">{step.previewDescription}</p>
              </Reveal>
            </li>
          ))}
        </ol>

        <CtaLink href="/process" className="mt-4">
          See how we work
        </CtaLink>
      </Container>
    </section>
  );
}
