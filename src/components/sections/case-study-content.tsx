import { Container } from "@/components/ui/container";
import { CtaLink } from "@/components/ui/cta-link";
import { MicroLabel } from "@/components/ui/micro-label";
import { SectionLabel } from "@/components/ui/section-label";
import { Reveal } from "@/components/ui/reveal";
import { CaseStudyVisual } from "@/components/media/case-study-visual";
import { PLACEHOLDER_OUTCOME, type CaseStudy } from "@/content/work";

type CaseStudyContentProps = {
  project: CaseStudy;
  nextProject: CaseStudy;
};

/**
 * Shared case-study layout — each project (IEA, TERMFAI, EXAT LinkedBiz, ...)
 * passes its own content object in, so the header, opportunity/role
 * placeholders, and per-project sections all render from data instead of
 * being duplicated per route.
 */
export function CaseStudyContent({ project, nextProject }: CaseStudyContentProps) {
  return (
    <>
      <section data-surface="dark" className="bg-graphite pt-32 pb-20 text-ivory sm:pt-40 sm:pb-24">
        <Container>
          <CtaLink href="/work" variant="text" className="mb-12">
            Back to work
          </CtaLink>

          <div className="flex items-baseline gap-4">
            <MicroLabel className="text-accent">{project.projectNumber}</MicroLabel>
            {project.note ? (
              <MicroLabel className="text-ivory/45">{project.note}</MicroLabel>
            ) : null}
          </div>
          <h1 className="mt-3 text-5xl font-medium sm:text-6xl">{project.client}</h1>
          <MicroLabel className="mt-4 block text-ivory/50">
            {project.category} · {project.focus}
          </MicroLabel>
          <p className="mt-3 font-mono text-xs tracking-[0.14em] text-ivory/40 uppercase">
            Client: {project.clientLegalName}
          </p>

          <p className="mt-8 max-w-xl text-lg text-ivory/70">{project.overview}</p>

          <CaseStudyVisual
            variant="full"
            label={project.visualLabels[0]}
            imageSrc={project.imageSrc}
            alt={project.imageSrc ? `${project.client} dashboard` : ""}
            className="mt-16"
          />
        </Container>
      </section>

      <section data-surface="dark" className="bg-graphite text-ivory">
        <Container>
          <div className="grid gap-16 border-t border-ivory/15 py-16 sm:grid-cols-2 sm:py-20">
            <Reveal>
              <SectionLabel>The opportunity</SectionLabel>
              <p className="mt-6 max-w-md text-ivory/70">{project.opportunity}</p>
            </Reveal>
            <Reveal delayMs={80}>
              <SectionLabel>BYTE DASH&apos;s role</SectionLabel>
              <p className="mt-6 max-w-md text-ivory/70">{project.role}</p>
            </Reveal>
          </div>
        </Container>
      </section>

      {project.sections.map((section, i) => (
        <section
          key={section.heading}
          data-surface={i % 2 === 0 ? "light" : "dark"}
          className={i % 2 === 0 ? "bg-ivory py-16 text-ink sm:py-20" : "bg-graphite-elevated py-16 text-ivory sm:py-20"}
        >
          <Container>
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
              <div className="lg:col-span-4">
                <SectionLabel tone={i % 2 === 0 ? "light" : "dark"}>
                  {section.heading}
                </SectionLabel>
              </div>
              <div className="lg:col-span-8">
                <p className={`max-w-2xl ${i % 2 === 0 ? "text-ink/70" : "text-ivory/70"}`}>
                  {section.body}
                </p>
              </div>
            </div>
          </Container>
        </section>
      ))}

      {project.visualImageSrcs && project.visualImageSrcs.length > 0 ? (
        <section data-surface="dark" className="bg-graphite py-16 text-ivory sm:py-20">
          <Container>
            <SectionLabel>Project visuals</SectionLabel>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {project.visualLabels.map((label, index) => (
                <CaseStudyVisual
                  key={label}
                  variant={project.visualFrame ?? "desktop"}
                  label={label}
                  imageSrc={project.visualImageSrcs?.[index]}
                  alt={project.visualImageSrcs?.[index] ? `${project.client} — ${label}` : ""}
                  imageFit={project.visualImageFit}
                  imageAspect={project.visualImageAspect}
                />
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      <section data-surface="dark" className="border-t border-ivory/15 bg-graphite py-16 text-ivory sm:py-20">
        <Container>
          <SectionLabel>Outcome</SectionLabel>
          <p className="mt-6 max-w-md text-ivory/70">{PLACEHOLDER_OUTCOME}</p>
        </Container>
      </section>

      <section data-surface="dark" className="border-t border-ivory/15 bg-graphite py-20 text-ivory sm:py-28">
        <Container>
          <MicroLabel className="text-ivory/45">Next project</MicroLabel>
          <h2 className="mt-4 text-3xl font-medium sm:text-4xl">{nextProject.client}</h2>
          <p className="mt-3 max-w-md text-ivory/70">{nextProject.cardDescription}</p>
          <div className="mt-8 flex flex-wrap gap-8">
            <CtaLink href={`/work/${nextProject.slug}`} variant="framed">
              View case study
            </CtaLink>
            <CtaLink href="/contact" variant="text">
              Start your own project
            </CtaLink>
          </div>
        </Container>
      </section>
    </>
  );
}
