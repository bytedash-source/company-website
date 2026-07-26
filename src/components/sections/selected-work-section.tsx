import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { CtaLink } from "@/components/ui/cta-link";
import { Reveal } from "@/components/ui/reveal";
import { ProjectCard } from "@/components/ui/project-card";
import { caseStudies } from "@/content/work";

export function SelectedWorkSection() {
  return (
    <section data-surface="dark" className="bg-graphite py-24 text-ivory sm:py-32">
      <Container>
        <SectionLabel>Selected work</SectionLabel>
        <h2 className="mt-6 max-w-xl text-4xl leading-[1.1] font-medium sm:text-5xl">
          Products built from real questions.
        </h2>

        <div className="mt-12 border-t border-ivory/15">
          {caseStudies.map((project, i) => (
            <Reveal key={project.slug} delayMs={i * 80}>
              <div className="border-b border-ivory/15 py-14 sm:py-16">
                <ProjectCard project={project} variant="row" />
              </div>
            </Reveal>
          ))}
        </div>

        <CtaLink href="/work" className="mt-10">
          View all work
        </CtaLink>
      </Container>
    </section>
  );
}
