import type { Metadata } from "next";
import { CaseStudyContent } from "@/components/sections/case-study-content";
import { caseStudies } from "@/content/work";

export const metadata: Metadata = {
  title: "EXAT LinkedBiz — Business content & eCommerce CMS",
  description:
    "EXAT LinkedBiz is a content management system built for the Expressway Authority of Thailand (EXAT) to manage business content and support an eCommerce experience.",
};

const project = caseStudies.find((p) => p.slug === "exat-linkedbiz")!;
const nextProject = caseStudies.find((p) => p.slug === "iea")!;

export default function ExatLinkedbizCaseStudyPage() {
  return <CaseStudyContent project={project} nextProject={nextProject} />;
}
