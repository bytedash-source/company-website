import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { Reveal } from "@/components/ui/reveal";
import { corePrinciples } from "@/content/principles";

export function CorePrinciplesSection() {
  return (
    <section data-surface="light" className="bg-ivory py-24 text-ink sm:py-32">
      <Container>
        <SectionLabel tone="light">Core principles</SectionLabel>

        <div className="mt-10 grid gap-px overflow-hidden border border-ink/15 bg-ink/15 sm:grid-cols-3">
          {corePrinciples.map((principle, i) => (
            <Reveal key={principle.title} delayMs={i * 80} className="bg-ivory p-8 sm:p-10">
              <h3 className="text-2xl font-medium sm:text-3xl">{principle.title}</h3>
              <p className="mt-3 text-ink/65">{principle.description}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
