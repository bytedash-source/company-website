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
      "U Terrace — building performance dashboard",
      "U Terrace — floor plan view",
      "U Terrace — energy consumption trends",
    ],
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
];

export const workFilters: { label: string; value: "all" | WorkCategory }[] = [
  { label: "All work", value: "all" },
  { label: "Web platforms", value: "web-platforms" },
  { label: "Mobile products", value: "mobile-products" },
  { label: "UX/UI systems", value: "ux-ui-systems" },
  { label: "Operational tools", value: "operational-tools" },
];
