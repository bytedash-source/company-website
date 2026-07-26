import type { Metadata } from "next";
import { SplitHero } from "@/components/ui/split-hero";
import { Container } from "@/components/ui/container";
import { CtaLink } from "@/components/ui/cta-link";
import { Reveal } from "@/components/ui/reveal";
import { WorkIndexGrid } from "@/components/sections/work-index-grid";

export const metadata: Metadata = {
  title: "Work",
  description:
    "A selection of mobile and web applications designed and developed by BYTE DASH, including IEA and TERMFAI.",
  openGraph: {
    title: "Work by BYTE DASH",
    description:
      "A selection of mobile and web applications designed and developed by BYTE DASH.",
  },
};

export default function WorkIndexPage() {
  return (
    <>
      <SplitHero
        eyebrow="Work"
        headline="Work shaped by real needs."
        supporting="Every project here sits at the meeting point of a business objective, a real user need, and the technology available to serve both. This page reflects a selection of that work, not the full list of projects we've completed — more is added as it's ready to share publicly."
      />

      <section data-surface="dark" className="bg-graphite pb-24 text-ivory sm:pb-32">
        <Container>
          <Reveal>
            <WorkIndexGrid />
          </Reveal>
        </Container>
      </section>

      <section data-surface="light" className="bg-ivory py-24 text-ink sm:py-32">
        <Container>
          <Reveal className="max-w-2xl">
            <h2 className="text-4xl leading-[1.1] font-medium sm:text-5xl">
              Have a project in mind?
            </h2>
            <CtaLink href="/contact" variant="framed" className="mt-8">
              Start a conversation
            </CtaLink>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
