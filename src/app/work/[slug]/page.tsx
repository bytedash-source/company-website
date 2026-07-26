import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { Container } from "@/components/ui/container";
import { CtaLink } from "@/components/ui/cta-link";
import { MicroLabel } from "@/components/ui/micro-label";
import { CaseStudyVisual } from "@/components/media/case-study-visual";
import { caseStudies } from "@/content/work";

export function generateStaticParams() {
  return caseStudies.map((project) => ({ slug: project.slug }));
}

type WorkPageProps = {
  params: Promise<{ slug: string }>;
};

function getProject(slug: string) {
  return caseStudies.find((project) => project.slug === slug);
}

export async function generateMetadata({ params }: WorkPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  return {
    title: `${project.client} — BYTE DASH`,
    description: project.description,
  };
}

export default async function CaseStudyPage({ params }: WorkPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <SiteHeader />
      <main id="main" className="flex-1 bg-graphite pt-32 pb-24 sm:pt-40">
        <Container>
          <CtaLink href="/#work" variant="text" className="mb-12">
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
            {project.category}
          </MicroLabel>
          <p className="mt-4 max-w-lg text-lg text-ivory/70">{project.description}</p>

          <CaseStudyVisual variant="full" className="mt-16" />

          <p className="mt-10 max-w-lg text-ivory/60">
            รายละเอียดฉบับเต็ม (โจทย์ แนวทางแก้ และผลลัพธ์) กำลังจัดเตรียม —
            กลับมาดูอีกครั้งเร็ว ๆ นี้
          </p>
        </Container>
      </main>
      <SiteFooter />
    </>
  );
}
