import type { Metadata } from "next";
import { CaseStudyContent } from "@/components/sections/case-study-content";
import { caseStudies } from "@/content/work";

export const metadata: Metadata = {
  title: "NapLap — Co-working space energy management",
  description:
    "NapLap is a web application built to help co-working space operators monitor and control energy use, from individual devices to overall electricity cost.",
};

const project = caseStudies.find((p) => p.slug === "naplap")!;
const nextProject = caseStudies.find((p) => p.slug === "iea")!;

export default function NapLapCaseStudyPage() {
  return <CaseStudyContent project={project} nextProject={nextProject} />;
}
