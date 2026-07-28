import type { Metadata } from "next";
import { CaseStudyContent } from "@/components/sections/case-study-content";
import { caseStudies } from "@/content/work";

export const metadata: Metadata = {
  title: "U Terrace — Building energy monitoring dashboard",
  description:
    "U Terrace is a web dashboard built to help monitor building energy performance, from floor-level consumption to building-wide trends.",
};

const project = caseStudies.find((p) => p.slug === "u-terrace")!;
const nextProject = caseStudies.find((p) => p.slug === "naplap")!;

export default function UTerraceCaseStudyPage() {
  return <CaseStudyContent project={project} nextProject={nextProject} />;
}
