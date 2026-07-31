import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { navItems, siteInfo } from "@/content/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer data-surface="dark" className="border-t border-ivory/15 bg-graphite py-12 text-ivory">
      <Container className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
        <span className="flex items-center gap-2.5 font-mono text-sm tracking-[0.2em]">
          <Image src="/brand/byte-dash-mark-final.png" alt="" aria-hidden="true" width={24} height={24} unoptimized />
          {siteInfo.name}
        </span>

        <nav aria-label="Footer" className="flex flex-wrap gap-x-8 gap-y-3">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-mono text-xs tracking-[0.14em] text-ivory/60 uppercase transition-colors hover:text-ivory"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-1 font-mono text-xs text-ivory/45 sm:items-end">
          <a href={`mailto:${siteInfo.email}`} className="hover:text-ivory">
            {siteInfo.email}
          </a>
          <span>
            © {year} {siteInfo.name}. All rights reserved.
          </span>
        </div>
      </Container>
    </footer>
  );
}
