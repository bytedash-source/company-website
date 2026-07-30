import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { CtaLink } from "@/components/ui/cta-link";
import { MicroLabel } from "@/components/ui/micro-label";
import { SectionLabel } from "@/components/ui/section-label";
import { Reveal } from "@/components/ui/reveal";
import { ServiceIndex } from "@/components/ui/service-index";
import { CaseStudyVisual } from "@/components/media/case-study-visual";
import { caseStudies } from "@/content/work";

export const metadata: Metadata = {
  title: "Fund Management Platform — UX research & redesign",
  description:
    "A UX research and redesign engagement for a fund investment platform, from heuristic evaluation to usability-tested prototypes.",
};

const project = caseStudies.find((p) => p.slug === "fund-platform-redesign")!;
const nextProject = caseStudies.find((p) => p.slug === "iea")!;

const approach = [
  {
    index: "01",
    title: "Discovery & research",
    description: "Reviewed analytics, interviewed stakeholders, and audited the existing site to understand what was working and what wasn't, before proposing any changes.",
  },
  {
    index: "02",
    title: "Sitemap & information architecture",
    description: "Restructured navigation and content grouping around how people actually look for information, not around how the organisation is structured internally.",
  },
  {
    index: "03",
    title: "Heuristic evaluation",
    description: "Assessed the existing site against established usability heuristics, turning vague impressions into specific, actionable issues tied to exact pages.",
  },
  {
    index: "04",
    title: "Usability testing",
    description: "Ran moderated sessions with real investors across experience levels, testing the redesigned flows against real tasks rather than assumptions — 97–100% task success across the four scenarios tested.",
  },
  {
    index: "05",
    title: "UI design production",
    description: "Delivered a full design system and high-fidelity, developer-ready screens, refined against direct testing feedback before handoff.",
  },
];

const findings = [
  {
    title: "Getting lost in the site",
    issue: "No indication of where someone was within the site, once they were a few clicks deep.",
    fix: "Added breadcrumbs and consistent location cues across every deep page.",
  },
  {
    title: "Inconsistent interactions",
    issue: "The same action — like viewing more detail — used different button and card styles depending on the page.",
    fix: "Unified interactive patterns so the same action always looks and behaves the same way.",
  },
  {
    title: "Too much to read, too little to scan",
    issue: "Dense, text-heavy pages made it hard to tell what actually mattered.",
    fix: "Restructured content around scannable sections, clearer hierarchy, and more breathing room.",
  },
  {
    title: "Losing key tools while scrolling",
    issue: "Filters and utilities people needed repeatedly disappeared as soon as they scrolled past them.",
    fix: "Made frequently used tools persistent, so they stay within reach during the task.",
  },
];

const results = [
  { label: "Checking an existing fund's performance", value: "100%" },
  { label: "Researching a new fund in detail", value: "97%" },
  { label: "Comparing two funds side by side", value: "100%" },
  { label: "Finding recommended funds", value: "100%" },
];

export default function FundPlatformRedesignCaseStudyPage() {
  return (
    <>
      {/* Hero */}
      <section data-surface="dark" className="bg-graphite pt-32 pb-20 text-ivory sm:pt-40 sm:pb-24">
        <Container>
          <CtaLink href="/work" variant="text" className="mb-12">
            Back to work
          </CtaLink>

          <MicroLabel className="text-accent">{project.projectNumber}</MicroLabel>
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
            alt={project.imageSrc ? `${project.client} — redesigned homepage layout` : ""}
            className="mt-16"
          />
        </Container>
      </section>

      {/* Opportunity / Role */}
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

      {/* Our approach — 5-step process, the thing that makes a UX engagement
          worth showing in more depth than a shipped-product case study */}
      <section data-surface="light" className="bg-ivory py-24 text-ink sm:py-32">
        <Container>
          <SectionLabel tone="light">Our approach</SectionLabel>
          <h2 className="mt-6 max-w-xl text-4xl leading-[1.1] font-medium sm:text-5xl">
            A research process, not a redesign guess.
          </h2>

          <div className="mt-12 sm:mt-16">
            <ServiceIndex items={approach} tone="light" />
          </div>
        </Container>
      </section>

      {/* What we found — heuristic evaluation, genericised */}
      <section data-surface="dark" className="bg-graphite py-24 text-ivory sm:py-32">
        <Container>
          <SectionLabel>What we found</SectionLabel>
          <h2 className="mt-6 max-w-xl text-4xl leading-[1.1] font-medium sm:text-5xl">
            Specific issues, not vague impressions.
          </h2>

          <div className="mt-12 grid gap-px overflow-hidden border border-ivory/15 bg-ivory/15 sm:grid-cols-2">
            {findings.map((finding, i) => (
              <Reveal key={finding.title} delayMs={i * 60} className="bg-graphite p-8 sm:p-10">
                <h3 className="text-xl font-medium">{finding.title}</h3>
                <p className="mt-4 text-sm text-ivory/50">
                  <span className="text-ivory/70">Issue — </span>
                  {finding.issue}
                </p>
                <p className="mt-3 text-sm text-ivory/50">
                  <span className="text-accent">Fix — </span>
                  {finding.fix}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Designing for clarity — keep the existing narrative section */}
      <section data-surface="light" className="bg-ivory py-16 text-ink sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-4">
              <SectionLabel tone="light">{project.sections[0].heading}</SectionLabel>
            </div>
            <div className="lg:col-span-8">
              <p className="max-w-2xl text-ink/70">{project.sections[0].body}</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Results — real, non-identifying usability testing outcomes */}
      <section data-surface="dark" className="border-t border-ivory/15 bg-graphite py-24 text-ivory sm:py-32">
        <Container>
          <SectionLabel>Results</SectionLabel>
          <h2 className="mt-6 max-w-xl text-4xl leading-[1.1] font-medium sm:text-5xl">
            97–100% task success across usability testing.
          </h2>
          <p className="mt-6 max-w-xl text-ivory/70">
            Four moderated scenarios, run with investors from first-time to
            expert, tested whether the redesign actually worked, not just
            whether it looked right.
          </p>

          <div className="mt-12 grid gap-px overflow-hidden border border-ivory/15 bg-ivory/15 sm:grid-cols-2 lg:grid-cols-4">
            {results.map((result, i) => (
              <Reveal key={result.label} delayMs={i * 60} className="bg-graphite p-8">
                <span className="text-4xl font-medium text-accent">{result.value}</span>
                <p className="mt-3 text-sm text-ivory/60">{result.label}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Project visuals */}
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

      {/* Next project */}
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
