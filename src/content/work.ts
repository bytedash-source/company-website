export type WorkCategory =
  | "web-platforms"
  | "mobile-products"
  | "ux-ui-systems"
  | "operational-tools";

export type CaseStudySection = {
  heading: string;
  body: string;
};

export type CaseStudy = {
  slug: string;
  projectNumber: string;
  client: string;
  clientLegalName: string;
  category: string;
  focus: string;
  categories: WorkCategory[];
  /** Non-standard status worth surfacing on the card, e.g. an upcoming launch date. */
  note?: string;
  cardDescription: string;
  overview: string;
  opportunity: string;
  role: string;
  sections: CaseStudySection[];
  visualLabels: string[];
  /** Optional per-item images for the project visuals gallery. */
  visualImageSrcs?: string[];
  /** Use `contain` when a UI capture must remain fully visible in its frame. */
  visualImageFit?: "cover" | "contain";
  /** Frame ratio for the project visuals gallery. */
  visualImageAspect?: "video" | "ui";
  /** Device frame for the project visuals gallery — defaults to "desktop". */
  visualFrame?: "desktop" | "mobile" | "mockup" | "art";
  /** Real screenshot, used for the card preview and case-study hero — only
   * set once a review-ready capture exists. Falls back to the placeholder. */
  imageSrc?: string;
};

export const PLACEHOLDER_DETAILS = "Approved project details to be added.";
export const PLACEHOLDER_OUTCOME = "Outcome details available on request.";
export const PLACEHOLDER_VISUAL = "Project visual coming soon";

export const caseStudies: CaseStudy[] = [
  {
    slug: "iea",
    projectNumber: "01",
    client: "IEA",
    clientLegalName: "Asset Activator Co., Ltd.",
    category: "Responsive web application",
    focus: "Asset management",
    categories: ["web-platforms", "operational-tools"],
    cardDescription:
      "A responsive web platform built to help manage assets more clearly.",
    overview:
      "IEA is a responsive web application built for Asset Activator Co., Ltd. to support asset management.",
    opportunity: PLACEHOLDER_DETAILS,
    role: PLACEHOLDER_DETAILS,
    sections: [
      {
        heading: "Designing for asset management",
        body: "Asset management platforms need to make it easy to see what exists, where it is, and what state it's in, without asking people to dig through spreadsheets or disconnected records. IEA was built around that need, prioritising clear structure over decorative complexity.",
      },
      {
        heading: "Responsive platform experience",
        body: "As a responsive web application, IEA is designed to work across desktop and mobile browsers within a single platform, so the people using it aren't limited to one device or screen size.",
      },
    ],
    visualLabels: [
      "IEA — dashboard view",
      "IEA — key workflow",
      "IEA — responsive layout",
    ],
    visualImageSrcs: [
      "/images/work/iea/project-visuals/asset-management-ui.jpg",
      "/images/work/iea/project-visuals/asset-detail-ui.jpg",
      "/images/work/iea/project-visuals/user-management-ui.jpg",
    ],
    visualImageFit: "contain",
    visualFrame: "mobile",
    imageSrc: "/images/work/iea/dashboard.jpg",
  },
  {
    slug: "termfai",
    projectNumber: "02",
    client: "TERMFAI",
    clientLegalName: "Synergy Technology Co., Ltd.",
    category: "Cross-platform mobile application",
    focus: "EV platform and shopping",
    categories: ["mobile-products"],
    note: "Available 2025",
    cardDescription:
      "A cross-platform mobile app for an EV platform, combining vehicle features with a shopping experience.",
    overview:
      "TERMFAI is a cross-platform mobile application developed for Synergy Technology Co., Ltd., combining an EV (electric vehicle) platform with a shopping experience. TERMFAI is available in 2025.",
    opportunity: PLACEHOLDER_DETAILS,
    role: PLACEHOLDER_DETAILS,
    sections: [
      {
        heading: "Mobile product experience",
        body: "TERMFAI is built as a cross-platform mobile application, designed to run on iOS and Android from a single product experience.",
      },
      {
        heading: "EV platform and shopping context",
        body: "TERMFAI brings together two areas within a single app: an EV platform and a shopping experience, giving users a single place to manage both.",
      },
    ],
    visualLabels: [
      "TERMFAI — EV platform view",
      "TERMFAI — shopping experience",
      "TERMFAI — key workflow",
    ],
    visualFrame: "mobile",
    imageSrc: "/images/work/termfai/mockup.jpg?v=20260730-2",
  },
  {
    slug: "exat-linkedbiz",
    projectNumber: "03",
    client: "EXAT LinkedBiz",
    clientLegalName: "Expressway Authority of Thailand (EXAT)",
    category: "Content management system",
    focus: "Business content and eCommerce",
    categories: ["web-platforms", "operational-tools"],
    cardDescription:
      "A content management system built for EXAT to manage business content and an eCommerce experience.",
    overview:
      "EXAT LinkedBiz is a content management system built for the Expressway Authority of Thailand (EXAT) to manage business content and support an eCommerce experience.",
    opportunity: PLACEHOLDER_DETAILS,
    role: PLACEHOLDER_DETAILS,
    sections: [
      {
        heading: "Designing for business content management",
        body: "LinkedBiz gives EXAT's team a clear, structured way to manage business content, without depending on a developer for every update. The CMS was built around that need, prioritising a straightforward editing experience over unnecessary complexity.",
      },
      {
        heading: "Content and commerce in one platform",
        body: "LinkedBiz brings business content management and an eCommerce experience together within a single platform, so EXAT can manage what it publishes and what it sells in one place.",
      },
    ],
    visualLabels: [
      "EXAT LinkedBiz — dashboard view",
      "EXAT LinkedBiz — content management",
      "EXAT LinkedBiz — eCommerce experience",
    ],
    imageSrc: "/images/work/exat-linkedbiz/dashboard.png",
  },
  {
    slug: "u-terrace",
    projectNumber: "04",
    client: "U Terrace",
    clientLegalName: "U Terrace",
    category: "Web dashboard",
    focus: "Building energy monitoring",
    categories: ["web-platforms", "operational-tools"],
    cardDescription:
      "A web dashboard built to monitor and manage building energy performance in real time.",
    overview:
      "U Terrace is a web dashboard built to help monitor building energy performance, from floor-level consumption to building-wide trends.",
    opportunity: PLACEHOLDER_DETAILS,
    role: PLACEHOLDER_DETAILS,
    sections: [
      {
        heading: "Monitoring energy at the floor level",
        body: "U Terrace lets facility teams see energy consumption broken down by floor and zone, making it easier to spot where usage is highest and act on it directly.",
      },
      {
        heading: "Building-wide performance at a glance",
        body: "Alongside floor-level detail, the dashboard surfaces building-wide trends, live consumption, and practical recommendations, so day-to-day monitoring and longer-term decisions are supported from the same view.",
      },
    ],
    visualLabels: [
      "U Terrace — floor plan overview",
      "U Terrace — room information",
      "U Terrace — report and billing",
    ],
    visualImageSrcs: [
      "/images/work/u-terrace/floor-plan-overview-sanitized.png",
      "/images/work/u-terrace/room-info-sanitized.png",
      "/images/work/u-terrace/report-billing-sanitized.png",
    ],
    visualImageFit: "contain",
    visualImageAspect: "ui",
    imageSrc: "/images/work/u-terrace/dashboard.jpg",
  },
  {
    slug: "naplap",
    projectNumber: "05",
    client: "NapLap",
    clientLegalName: "NapLap",
    category: "Web application",
    focus: "Co-working space energy management",
    categories: ["web-platforms", "operational-tools"],
    cardDescription:
      "A web application for monitoring and controlling energy use across a co-working space.",
    overview:
      "NapLap is a web application built to help co-working space operators monitor and control energy use, from individual devices to overall electricity cost.",
    opportunity: PLACEHOLDER_DETAILS,
    role: PLACEHOLDER_DETAILS,
    sections: [
      {
        heading: "Monitoring devices by floor",
        body: "NapLap lays out devices on a floor plan with live status, so operators can see at a glance what's running, idle, or reserved without walking the space.",
      },
      {
        heading: "Control and cost in one view",
        body: "Alongside monitoring, NapLap surfaces device shortcuts and electricity cost together, so day-to-day control and budget tracking happen from the same dashboard.",
      },
    ],
    visualLabels: [
      "NapLap — monitor & control dashboard",
      "NapLap — floor plan and device status",
      "NapLap — energy cost overview",
    ],
    imageSrc: "/images/work/naplap/dashboard.jpg",
  },
  {
    slug: "fund-platform-redesign",
    projectNumber: "06",
    client: "Fund Management Platform",
    clientLegalName: "Confidential (asset management)",
    category: "UX/UI research & redesign",
    focus: "Fund investment platform",
    categories: ["ux-ui-systems", "web-platforms"],
    cardDescription:
      "A UX research and redesign engagement for a fund investment platform, from heuristic evaluation to usability-tested prototypes.",
    overview:
      "This engagement covered UX research and redesign for a fund management platform — from competitive analysis and heuristic evaluation through to a redesigned information architecture and usability-tested prototypes. Client details are kept confidential at their request.",
    opportunity:
      "The existing site felt formal and information-dense, which created distance for newer, digital-native investors. The brand wanted to shift from feeling like a traditional financial institution to a more approachable, trustworthy guide for people building long-term wealth, without losing the credibility experienced investors expect.",
    role:
      "ByteDash led discovery and UX research — analytics review, competitive analysis against other fund platforms, and a heuristic evaluation of the existing site — then translated findings into a redesigned sitemap, an accessibility-focused design system (WCAG 2.1 AA), and high-fidelity prototypes. Four rounds of moderated usability testing with real investors, across experience levels from novice to expert, validated the direction before handoff.",
    sections: [
      {
        heading: "Designing for clarity, not just information",
        body: "The original site read as text-heavy and dense, making it hard to know what to focus on. The redesign grouped content by user intent, added clearer visual hierarchy, and gave every page room to breathe, so people could scan for what they needed instead of reading everything.",
      },
      {
        heading: "Validating with real investors",
        body: "Four usability testing scenarios, run with investors ranging from first-time to expert, covered core journeys including checking an existing holding, researching a new fund, and comparing two funds side by side. Every scenario reached a 97-100% task success rate, and the gaps that did surface, like confusing jargon and hard-to-find documents, fed directly into the final design.",
      },
    ],
    visualLabels: [
      "Moderated usability testing",
      "Prototype review session",
      "Research synthesis workshop",
    ],
    visualImageSrcs: [
      "/images/work/fund-platform-redesign/usability-testing/testing-session-01.png",
      "/images/work/fund-platform-redesign/usability-testing/testing-session-02.png",
      "/images/work/fund-platform-redesign/usability-testing/testing-session-03.png",
    ],
    visualImageFit: "cover",
    visualFrame: "art",
    imageSrc: "/images/work/fund-platform-redesign/fund-platform-hero.png",
  },
];

export const workFilters: { label: string; value: "all" | WorkCategory }[] = [
  { label: "All work", value: "all" },
  { label: "Web platforms", value: "web-platforms" },
  { label: "Mobile products", value: "mobile-products" },
  { label: "UX/UI systems", value: "ux-ui-systems" },
  { label: "Operational tools", value: "operational-tools" },
];
