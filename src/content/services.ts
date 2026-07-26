export type Service = {
  slug: string;
  index: string;
  /** Short label used in compact previews (home page index). */
  previewTitle: string;
  previewDescription: string;
  /** Full detail used on the Services page. */
  label: string;
  headline: string;
  valueProposition: string;
  description: string;
  helpWith: string[];
  expect: string[];
};

export const services: Service[] = [
  {
    slug: "mobile-application-development",
    index: "01",
    previewTitle: "Mobile applications",
    previewDescription:
      "Apps built for iOS and Android that people use every day, not just download once.",
    label: "Mobile application development",
    headline: "Apps built to be used, not just installed.",
    valueProposition:
      "We design and build mobile applications for iOS and Android that are fast to use and straightforward to maintain.",
    description:
      "Mobile development at BYTE DASH covers the full lifecycle, from technical architecture and platform decisions through to release and post-launch support. We build for the realities of mobile use: unreliable networks, small screens, interruptions, and users who expect an app to respond immediately.",
    helpWith: [
      "Native and cross-platform app development for iOS and Android",
      "App architecture and technical planning",
      "Integrating with existing backend systems and APIs",
      "Performance and stability improvements to existing apps",
      "App store preparation and release support",
      "Ongoing maintenance and iteration after launch",
    ],
    expect: [
      "Clear technical decisions explained in plain terms",
      "Regular builds you can test on a real device",
      "A codebase that's documented and handed over cleanly",
    ],
  },
  {
    slug: "web-application-development",
    index: "02",
    previewTitle: "Web applications",
    previewDescription:
      "Web products that load fast, work reliably, and scale as your business does.",
    label: "Web application development",
    headline: "Web products that hold up under real use.",
    valueProposition:
      "We build web applications that are fast to load, dependable in production, and structured to grow alongside the business.",
    description:
      "From customer-facing platforms to internal tools, we build web applications using sound architecture, with attention to performance, accessibility, and how the product will need to change over time.",
    helpWith: [
      "Web application design and development, front end and back end",
      "Rebuilding or modernising existing web platforms",
      "Integrations with third-party services and internal systems",
      "Performance, accessibility, and responsive design",
      "Admin tools and internal dashboards",
      "Ongoing support and iteration after launch",
    ],
    expect: [
      "A working product to review at each stage of development, not just at the end",
      "Decisions made with future scaling in mind",
      "Code and documentation you can hand to another team if needed",
    ],
  },
  {
    slug: "ux-ui-design",
    index: "03",
    previewTitle: "UX/UI systems",
    previewDescription:
      "Interfaces shaped around how people actually think and behave, not just how a sitemap looks.",
    label: "UX/UI design",
    headline: "Design that removes friction, not just adds polish.",
    valueProposition:
      "We design interfaces around how people actually use software, reducing the number of decisions a user has to make to get something done.",
    description:
      "UX/UI design at BYTE DASH starts with understanding the task a user is trying to complete, then structures the interface, flow, and visual language around that task, whether we're designing a new product from scratch or improving an existing one.",
    helpWith: [
      "User flow and information architecture",
      "Interface design for mobile and web products",
      "Design systems for consistent, scalable interfaces",
      "Usability review of existing products",
      "Visual design and interaction detail",
      "Design handoff for development teams",
    ],
    expect: [
      "Design decisions explained in terms of user behaviour, not just aesthetics",
      "Interfaces that stay consistent across screens and states",
      "Design files structured for efficient handoff to development",
    ],
  },
  {
    slug: "prototyping-and-wireframing",
    index: "04",
    previewTitle: "Prototyping",
    previewDescription:
      "Test ideas and structure before committing engineering time to them.",
    label: "Prototyping and wireframing",
    headline: "Test the idea before you build it.",
    valueProposition:
      "We create wireframes and interactive prototypes that let you validate a product direction before committing engineering time and budget to it.",
    description:
      "Prototyping is often where the most expensive mistakes get avoided. We build wireframes and clickable prototypes at a level of detail appropriate to the decision being made, from rough flows for early feedback to higher-fidelity prototypes for stakeholder or investor review.",
    helpWith: [
      "Low-fidelity wireframes for early-stage concepts",
      "Interactive, clickable prototypes for testing and feedback",
      "Structuring flows for complex or multi-step products",
      "Prototypes for stakeholder, investor, or user testing",
    ],
    expect: [
      "A tangible way to review a product direction before development begins",
      "Clear reasoning behind structural and flow decisions",
      "Prototypes that can be tested with real users or stakeholders",
    ],
  },
  {
    slug: "technology-consulting",
    index: "05",
    previewTitle: "Technology consulting",
    previewDescription:
      "Practical guidance on what to build, how to build it, and what can wait.",
    label: "Technology consulting",
    headline: "Clarity before commitment.",
    valueProposition:
      "We help businesses decide what to build, how to approach it, and what can reasonably wait, before any development begins.",
    description:
      "Not every project starts with a clear brief. Technology consulting at BYTE DASH covers early-stage strategy: reviewing an idea or an existing product, identifying risks and priorities, and setting a realistic direction for design and development.",
    helpWith: [
      "Reviewing a product idea or existing platform",
      "Technology and platform recommendations",
      "Scoping and prioritisation for new projects",
      "Advice on approach for teams building in-house",
    ],
    expect: [
      "Honest input, including where we think a plan needs to change",
      "A clearer sense of scope, priority, and risk before committing budget",
      "Recommendations grounded in what's realistic to build and maintain",
    ],
  },
];
