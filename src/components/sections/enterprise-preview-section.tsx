import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { CtaLink } from "@/components/ui/cta-link";
import { Reveal } from "@/components/ui/reveal";
import { AbstractSystemVisual } from "@/components/media/abstract-system-visual";

export function EnterprisePreviewSection() {
  return (
    <section data-surface="dark" className="bg-graphite-elevated py-24 text-ivory sm:py-32">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-7">
            <SectionLabel>For complex operations</SectionLabel>
            <h2 className="mt-6 max-w-xl text-4xl leading-[1.1] font-medium sm:text-5xl">
              Bring clarity to the systems behind the work.
            </h2>
            <p className="mt-6 max-w-lg text-lg text-ivory/70">
              When information, workflows, and user roles become harder to
              manage, a better platform can make the difference. We help
              organisations shape operational systems that are clear for
              people and ready to evolve.
            </p>
            <CtaLink href="/enterprise-platforms" className="mt-8">
              Explore enterprise platforms
            </CtaLink>
          </Reveal>

          <div className="lg:col-span-5">
            <AbstractSystemVisual
              label="SYS.02 — OPERATIONAL PLATFORM"
              className="max-w-md justify-self-center opacity-90 lg:max-w-none lg:justify-self-end"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
