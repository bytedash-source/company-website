export type ProcessStep = {
  index: string;
  title: string;
  /** Short line used in compact previews (home page). */
  previewDescription: string;
  /** Full detail used on the Process page. */
  headline: string;
  whatHappens: string;
  activities: string[];
  clientInvolvement: string;
  deliverables: string[];
};

export const processSteps: ProcessStep[] = [
  {
    index: "01",
    title: "Discover",
    previewDescription: "Understand the problem before proposing a solution.",
    headline: "Understand the problem before proposing a solution.",
    whatHappens:
      "We start by understanding the business, the users, and the problem the product needs to solve, including any existing systems, constraints, or prior attempts.",
    activities: [
      "Stakeholder discussions",
      "Review of any existing product or systems",
      "Defining goals and success criteria",
      "Identifying constraints and risks",
    ],
    clientInvolvement:
      "Expect direct questions about the business problem, not just a feature list — this stage works best with access to the people who understand the problem firsthand.",
    deliverables: ["Project brief", "Scope outline", "Key risks and open questions"],
  },
  {
    index: "02",
    title: "Define and design",
    previewDescription: "Turn requirements into a clear, testable design.",
    headline: "Turn requirements into a structure people can use.",
    whatHappens:
      "We translate the brief into user flows, information architecture, and interface design, moving from wireframes to detailed UI as the direction is confirmed.",
    activities: [
      "User flow mapping",
      "Wireframing",
      "UI design",
      "Design system setup",
      "Stakeholder review",
    ],
    clientInvolvement:
      "Structured review points at each stage — feedback shapes the direction before it's carried into wireframes.",
    deliverables: [
      "Wireframes",
      "UI designs",
      "Design system components",
      "A clickable prototype, where useful",
    ],
  },
  {
    index: "03",
    title: "Build",
    previewDescription: "Develop the product with regular, visible progress.",
    headline: "Develop the product with visible, regular progress.",
    whatHappens:
      "Engineering begins once the design direction is confirmed. We build in stages, with working versions available for review throughout rather than only at the end.",
    activities: [
      "Technical architecture",
      "Front-end and back-end development",
      "Integrations",
      "Internal QA",
    ],
    clientInvolvement:
      "Regular access to builds, and clear communication about progress and any changes to scope or timeline.",
    deliverables: ["Working builds at regular intervals", "Technical documentation as it develops"],
  },
  {
    index: "04",
    title: "Test",
    previewDescription: "Check the product works the way it's meant to, under real conditions.",
    headline: "Confirm the product works the way it's meant to.",
    whatHappens:
      "Before launch, we test the product against real conditions — different devices, network states, and user behaviour — alongside functional and usability testing.",
    activities: [
      "Functional testing",
      "Cross-device and cross-browser checks",
      "Usability review",
      "Bug fixing",
    ],
    clientInvolvement:
      "Visibility into what's been tested and what's outstanding, with a shared view of what's blocking release.",
    deliverables: ["Test results", "Resolved issue log", "Release-ready build"],
  },
  {
    index: "05",
    title: "Launch and improve",
    previewDescription: "Release, monitor, and keep refining after launch.",
    headline: "Release the product, then keep it working well.",
    whatHappens:
      "We support the release itself, then monitor early usage and address anything that needs attention. Many projects continue into ongoing iteration after this stage.",
    activities: [
      "Release and deployment support",
      "Monitoring post-launch performance",
      "Prioritising follow-up improvements",
    ],
    clientInvolvement:
      "Support through the release itself, and a shared view of what to prioritise afterwards.",
    deliverables: ["Live product", "Launch summary", "Recommendations for next steps"],
  },
];

export const processAdaptabilityNote =
  "This process is a framework, not a fixed script. Projects that start with an existing product, a partial design, or a fixed deadline are scoped to fit — some stages may run in parallel, and the time spent in each is set by the project's own scope and maturity, not a fixed template.";
