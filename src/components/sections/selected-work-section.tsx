import { Container } from "@/components/ui/container";
import { CtaLink } from "@/components/ui/cta-link";
import { MicroLabel } from "@/components/ui/micro-label";
import { Reveal } from "@/components/ui/reveal";
import { CaseStudyVisual } from "@/components/media/case-study-visual";
import { caseStudies } from "@/content/work";

export function SelectedWorkSection() {
  return (
    <section id="work" data-surface="dark" className="bg-graphite py-24 text-ivory sm:py-32">
      <Container>
        <h2>
          <MicroLabel className="text-ivory/50">Selected work</MicroLabel>
        </h2>

        <div className="mt-8 border-t border-ivory/15">
          {caseStudies.map((project, i) => (
            <Reveal key={project.slug} delayMs={i * 80}>
              <article className="grid gap-8 border-b border-ivory/15 py-14 sm:py-16 lg:grid-cols-2 lg:items-center lg:gap-16">
                <CaseStudyVisual variant="desktop" />

                <div>
                  <div className="flex items-baseline gap-4">
                    <MicroLabel className="text-accent">
                      {project.projectNumber}
                    </MicroLabel>
                    {project.note ? (
                      <MicroLabel className="text-ivory/45">{project.note}</MicroLabel>
                    ) : null}
                  </div>
                  <h3 className="mt-3 text-3xl font-medium sm:text-4xl">
                    {project.client}
                  </h3>
                  <MicroLabel className="mt-3 block text-ivory/50">
                    {project.category}
                  </MicroLabel>
                  <p className="mt-4 max-w-md text-ivory/70">{project.description}</p>
                  <CtaLink href={`/work/${project.slug}`} className="mt-8">
                    View case study
                  </CtaLink>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
