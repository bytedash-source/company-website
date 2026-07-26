import { Container } from "@/components/ui/container";
import { CtaLink } from "@/components/ui/cta-link";
import { MicroLabel } from "@/components/ui/micro-label";
import { Reveal } from "@/components/ui/reveal";
import { siteInfo } from "@/content/site";

export function FinalCtaSection() {
  return (
    <section data-surface="dark" className="bg-graphite py-24 text-ivory sm:py-36">
      <Container>
        <Reveal className="max-w-3xl">
          <h2 className="text-4xl leading-[1.1] font-medium sm:text-6xl">
            Have a complex idea?
            <br />
            Let&apos;s make it useful.
          </h2>
          <p className="mt-6 max-w-xl text-lg text-ivory/70">
            Tell us what you are building, improving, or trying to make
            clearer.
          </p>

          <CtaLink href="/contact" variant="framed" className="mt-10">
            Start a conversation
          </CtaLink>

          <div className="mt-16 border-t border-ivory/15 pt-8">
            <MicroLabel className="block text-ivory/45">
              <a href={`mailto:${siteInfo.email}`} className="hover:text-ivory">
                {siteInfo.email}
              </a>
            </MicroLabel>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
