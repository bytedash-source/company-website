import { Container } from "@/components/ui/container";
import { MicroLabel } from "@/components/ui/micro-label";
import { Reveal } from "@/components/ui/reveal";
import { processSteps } from "@/content/process";

export function ProcessSection() {
  return (
    <section id="process" data-surface="light" className="bg-ivory py-24 text-ink sm:py-32">
      <Container>
        <h2>
          <MicroLabel className="text-ink/50">How we work</MicroLabel>
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
                <p className="mt-2 max-w-md text-ink/65">{step.description}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
