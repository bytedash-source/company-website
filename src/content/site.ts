export const siteInfo = {
  name: "BYTE DASH",
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

export const navItems: NavItem[] = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];
