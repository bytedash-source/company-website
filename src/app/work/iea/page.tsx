import type { Metadata } from "next";
import { CaseStudyContent } from "@/components/sections/case-study-content";
import { caseStudies } from "@/content/work";

export const metadata: Metadata = {
  title: "IEA — Asset management web application",
  description:
    "IEA is a responsive web application built for Asset Activator Co., Ltd. to support asset management.",
};

const project = caseStudies.find((p) => p.slug === "iea")!;
const nextProject = caseStudies.find((p) => p.slug === "termfai")!;

export default function IeaCaseStudyPage() {
  return <CaseStudyContent project={project} nextProject={nextProject} />;
}
