import type { Metadata } from "next";
import { CaseStudyContent } from "@/components/sections/case-study-content";
import { caseStudies } from "@/content/work";

export const metadata: Metadata = {
  title: "TERMFAI — EV platform mobile app",
  description:
    "TERMFAI is a cross-platform mobile application for Synergy Technology Co., Ltd., combining an EV platform with a shopping experience. Available 2025.",
};

const project = caseStudies.find((p) => p.slug === "termfai")!;
const nextProject = caseStudies.find((p) => p.slug === "iea")!;

export default function TermfaiCaseStudyPage() {
  return <CaseStudyContent project={project} nextProject={nextProject} />;
}
