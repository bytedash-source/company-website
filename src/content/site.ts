export const siteInfo = {
  name: "BYTE DASH",
  tagline: "Digital product studio — Bangkok",
  email: "work@bytedash.net",
  addressLines: [
    "14/1492 Moo 13, Bang-bua-thong Sub-district",
    "Bang-bua-thong District, Nonthaburi 11110, Thailand",
  ],
} as const;

export type NavItem = {
  label: string;
  href: string;
};

/** Shared by the header, mobile panel, and footer — keep these three in sync automatically. */
export const navItems: NavItem[] = [
  { label: "Services", href: "/services" },
  { label: "Enterprise platforms", href: "/enterprise-platforms" },
  { label: "Process", href: "/process" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const primaryCta = {
  label: "Start a project",
  href: "/contact",
} as const;
