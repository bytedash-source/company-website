import type { Metadata } from "next";
import { SplitHero } from "@/components/ui/split-hero";
import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { CtaLink } from "@/components/ui/cta-link";
import { Reveal } from "@/components/ui/reveal";
import { EditorialPhotoPlaceholder } from "@/components/media/editorial-photo-placeholder";
import { corePrinciples } from "@/content/principles";

export const metadata: Metadata = {
  title: "About",
  description:
    "BYTE DASH is a digital product studio based in Bangkok and Nonthaburi, working across mobile, web, and UX/UI design.",
  openGraph: {
    title: "About BYTE DASH",
    description:
      "A digital product studio based in Bangkok and Nonthaburi, working across mobile, web, and UX/UI design.",
  },
};

export default function AboutPage() {
  return (
    <>
      <SplitHero
        eyebrow="About"
        headline="Built for products that need to work in the real world."
        supporting="BYTE DASH is a digital product studio based in Bangkok and Nonthaburi, working across mobile, web, and UX/UI design."
      />

      {/* Who we are */}
      <section data-surface="light" className="bg-ivory py-24 text-ink sm:py-32">
        <Container>
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-8">
            <Reveal className="lg:col-span-5">
              <SectionLabel tone="light">Who we are</SectionLabel>
            </Reveal>
            <Reveal delayMs={80} className="lg:col-span-7">
              <p className="max-w-xl text-xl leading-relaxed text-ink/75 sm:text-2xl">
                BYTE DASH designs and develops digital products, web
                platforms, mobile applications, and operational systems. We
                help organisations turn complex business needs, information,
                and workflows into clear, reliable, user-centred digital
                experiences, usually moving between mobile, web, design, and
                consulting within a single project rather than treating them
                as separate services.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* What we believe */}
      <section data-surface="dark" className="bg-graphite py-24 text-ivory sm:py-32">
        <Container>
          <SectionLabel>What we believe</SectionLabel>
          <div className="mt-10 grid gap-px overflow-hidden border border-ivory/15 bg-ivory/15 sm:grid-cols-3">
            {corePrinciples.map((principle, i) => (
              <Reveal key={principle.title} delayMs={i * 80} className="bg-graphite p-8 sm:p-10">
                <h3 className="text-2xl font-medium sm:text-3xl">{principle.title}</h3>
                <p className="mt-3 text-ivory/65">{principle.description}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Vision & Mission */}
      <section data-surface="light" className="bg-ivory py-24 text-ink sm:py-32">
        <Container>
          <div className="grid gap-16 sm:grid-cols-2">
            <Reveal>
              <SectionLabel tone="light">Vision</SectionLabel>
              <p className="mt-6 max-w-md text-lg text-ink/70">
                We want BYTE DASH to be recognised, beyond Thailand, for the
                quality and reliability of the digital products we build, and
                for genuinely understanding how modern technology becomes
                something people find useful, not just impressive.
              </p>
            </Reveal>
            <Reveal delayMs={80}>
              <SectionLabel tone="light">Mission</SectionLabel>
              <p className="mt-6 max-w-md text-lg text-ink/70">
                Our mission is to help businesses strengthen their digital
                presence through application solutions that work well enough
                to build real engagement, loyalty, and long-term value, not
                just a launch.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* How we work */}
      <section data-surface="dark" className="bg-graphite-elevated py-24 text-ivory sm:py-32">
        <Container>
          <Reveal className="max-w-2xl">
            <SectionLabel>How we work</SectionLabel>
            <p className="mt-6 text-lg text-ivory/70">
              Projects at BYTE DASH move through five stages, discover,
              define and design, build, test, and launch and improve,
              adapted to the scope of the work. We stay involved past
              launch, because most of what determines whether a product
              succeeds happens after release, not before it.
            </p>
            <CtaLink href="/process" className="mt-8">
              See our process
            </CtaLink>
          </Reveal>
        </Container>
      </section>

      {/* Team / culture */}
      <section data-surface="dark" className="bg-graphite py-24 text-ivory sm:py-32">
        <Container>
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-8">
            <div className="grid grid-cols-2 gap-4 lg:col-span-7 lg:gap-6">
              <Reveal delayMs={0} className="col-span-2 sm:col-span-1">
                <EditorialPhotoPlaceholder aspectRatio="portrait" />
              </Reveal>
              <Reveal delayMs={100} className="col-span-2 mt-8 sm:col-span-1 sm:mt-16">
                <EditorialPhotoPlaceholder aspectRatio="landscape" />
              </Reveal>
            </div>
            <Reveal delayMs={160} className="lg:col-span-5 lg:self-center">
              <SectionLabel>Studio</SectionLabel>
              <p className="mt-6 max-w-sm text-lg text-ivory/70">
                BYTE DASH is a hands-on studio: the people who scope a
                project are involved in building it.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Contact CTA */}
      <section data-surface="light" className="bg-ivory py-24 text-ink sm:py-32">
        <Container>
          <Reveal className="max-w-2xl">
            <h2 className="text-4xl leading-[1.1] font-medium sm:text-5xl">
              Talk to BYTE DASH about your project.
            </h2>
            <CtaLink href="/contact" variant="framed" className="mt-8">
              Get in touch
            </CtaLink>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
