import type { CaseStudy } from "@/content/work";
import { CaseStudyVisual } from "@/components/media/case-study-visual";
import { CtaLink } from "@/components/ui/cta-link";
import { MicroLabel } from "@/components/ui/micro-label";

export type ProjectCardVariant = "row" | "grid";

type ProjectCardProps = {
  project: CaseStudy;
  variant?: ProjectCardVariant;
  className?: string;
};

/**
 * Case-study summary card. `variant="row"` pairs a visual with text
 * side-by-side (selected-work sections); `variant="grid"` stacks the visual
 * above the text for use in a card grid (the Work index).
 */
export function ProjectCard({ project, variant = "row", className = "" }: ProjectCardProps) {
  const meta = (
    <>
      <div className="flex items-baseline gap-4">
        <MicroLabel className="text-accent">{project.projectNumber}</MicroLabel>
        {project.note ? (
          <MicroLabel className="text-ivory/45">{project.note}</MicroLabel>
        ) : null}
      </div>
      <h3 className="mt-3 text-3xl font-medium sm:text-4xl">{project.client}</h3>
      <MicroLabel className="mt-3 block text-ivory/50">{project.category}</MicroLabel>
      <p className="mt-4 max-w-md text-ivory/70">{project.cardDescription}</p>
      <CtaLink href={`/work/${project.slug}`} className="mt-8">
        View case study
      </CtaLink>
    </>
  );

  if (variant === "grid") {
    return (
      <article className={className}>
        <CaseStudyVisual
      variant="desktop"
      imageSrc={project.imageSrc}
      alt={project.imageSrc ? `${project.client} dashboard` : ""}
    />
        <div className="mt-6">{meta}</div>
      </article>
    );
  }

  return (
    <article
      className={`grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-16 ${className}`}
    >
      <CaseStudyVisual
      variant="desktop"
      imageSrc={project.imageSrc}
      alt={project.imageSrc ? `${project.client} dashboard` : ""}
    />
      <div>{meta}</div>
    </article>
  );
}
