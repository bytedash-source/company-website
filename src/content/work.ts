export type CaseStudy = {
  slug: string;
  projectNumber: string;
  client: string;
  category: string;
  description: string;
  /** Non-standard status worth surfacing on the card, e.g. an upcoming launch date. */
  note?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "iea",
    projectNumber: "01",
    client: "IEA",
    category: "Responsive Web Application",
    description: "Asset management",
  },
  {
    slug: "termfai",
    projectNumber: "02",
    client: "TERMFAI",
    category: "Cross-platform Mobile Application",
    description: "EV Platform and Shopping",
    note: "Available 2025",
  },
];
