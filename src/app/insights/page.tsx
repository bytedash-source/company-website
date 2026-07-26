import type { Metadata } from "next";
import { SplitHero } from "@/components/ui/split-hero";
import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { CtaLink } from "@/components/ui/cta-link";
import { MicroLabel } from "@/components/ui/micro-label";
import { Reveal } from "@/components/ui/reveal";
import { insightsCategories } from "@/content/insights";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Thinking on product design, UX/UI, and web and mobile development from BYTE DASH. Coming soon.",
};

export default function InsightsPage() {
  return (
    <>
      <SplitHero
        eyebrow="Insights"
        headline="Notes on making digital products clearer."
        supporting="This is where BYTE DASH will share our thinking on product design, UX/UI, web and mobile development, and the practical decisions behind building digital products. It's still taking shape."
      />

      <section data-surface="dark" className="bg-graphite py-24 text-ivory sm:py-32">
        <Container>
          <Reveal className="border border-ivory/15 p-10 text-center sm:p-16">
            <MicroLabel className="text-ivory/45">Nothing published yet</MicroLabel>
            <p className="mx-auto mt-4 max-w-md text-lg text-ivory/70">
              We haven&apos;t published anything here yet. When we do, it will
              cover the categories below.
            </p>
          </Reveal>

          <div className="mt-16">
            <SectionLabel>Future categories</SectionLabel>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {insightsCategories.map((category) => (
                <li key={category} className="border border-ivory/15 px-6 py-5 text-lg">
                  {category}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section data-surface="light" className="bg-ivory py-24 text-ink sm:py-32">
        <Container>
          <Reveal className="max-w-2xl">
            <h2 className="text-4xl leading-[1.1] font-medium sm:text-5xl">
              Have a question in the meantime?
            </h2>
            <p className="mt-6 text-lg text-ink/70">
              Get in touch and we&apos;ll talk it through directly.
            </p>
            <CtaLink href="/contact" variant="framed" className="mt-8">
              Contact BYTE DASH
            </CtaLink>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
