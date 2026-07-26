import type { Metadata } from "next";
import { SplitHero } from "@/components/ui/split-hero";
import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { CtaLink } from "@/components/ui/cta-link";
import { MicroLabel } from "@/components/ui/micro-label";
import { Reveal } from "@/components/ui/reveal";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Mobile and web application development, UX/UI design, prototyping, and technology consulting from BYTE DASH, a Bangkok-based product studio.",
  openGraph: {
    title: "Services — BYTE DASH",
    description:
      "Mobile and web application development, UX/UI design, prototyping, and technology consulting from BYTE DASH.",
  },
};

export default function ServicesPage() {
  return (
    <>
      <SplitHero
        eyebrow="Services"
        headline="Everything needed to take a product from idea to release."
        supporting="BYTE DASH works across mobile development, web development, UX/UI design, prototyping, and technology consulting. Projects can start at any point in that list, from an early idea that needs shaping, to an existing product that needs to be rebuilt or extended."
      />

      <section data-surface="dark" className="bg-graphite text-ivory">
        {services.map((service, i) => (
          <Reveal key={service.slug} delayMs={i * 40}>
            <div className="border-t border-ivory/15 py-16 last:border-b sm:py-20">
              <Container>
                <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
                  <div className="lg:col-span-4">
                    <SectionLabel index={service.index}>{service.label}</SectionLabel>
                    <h2 className="mt-6 max-w-sm text-3xl leading-[1.15] font-medium sm:text-4xl">
                      {service.headline}
                    </h2>
                    <p className="mt-5 max-w-sm text-ivory/70">{service.valueProposition}</p>
                    <CtaLink href="/contact" className="mt-8">
                      Talk about a {service.previewTitle.toLowerCase()} project
                    </CtaLink>
                  </div>

                  <div className="lg:col-span-8">
                    <p className="max-w-2xl text-ivory/70">{service.description}</p>

                    <div className="mt-10 grid gap-10 sm:grid-cols-2">
                      <div>
                        <MicroLabel className="text-ivory/45">
                          What we can help with
                        </MicroLabel>
                        <ul className="mt-4 space-y-3">
                          {service.helpWith.map((item) => (
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
                        <MicroLabel className="text-ivory/45">
                          What you can expect
                        </MicroLabel>
                        <ul className="mt-4 space-y-3">
                          {service.expect.map((item) => (
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

      <section data-surface="light" className="bg-ivory py-24 text-ink sm:py-32">
        <Container>
          <Reveal className="max-w-2xl">
            <h2 className="text-4xl leading-[1.1] font-medium sm:text-5xl">
              Not sure which service you need?
            </h2>
            <p className="mt-6 text-lg text-ink/70">
              Most projects touch more than one of these areas. Tell us what
              you&apos;re trying to build and we&apos;ll help figure out where
              to start.
            </p>
            <CtaLink href="/contact" variant="framed" className="mt-8">
              Start a project
            </CtaLink>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
