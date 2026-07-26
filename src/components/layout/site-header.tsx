"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { CtaLink } from "@/components/ui/cta-link";
import { navItems, primaryCta, siteInfo } from "@/content/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  // Lock background scroll and move focus into the panel while it's open.
  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";
    firstLinkRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
        return;
      }

      if (event.key !== "Tab" || !panelRef.current) return;

      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        "a[href], button:not([disabled])",
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header
      data-surface="dark"
      className="fixed inset-x-0 top-0 z-50 border-b border-ivory/10 text-ivory"
    >
      {/* backdrop-filter lives on its own layer, not the header itself —
          filter/backdrop-filter on an ancestor creates a new containing
          block for `position: fixed` descendants, which broke the
          full-viewport mobile nav panel below. */}
      <div className="absolute inset-0 -z-10 bg-graphite/85 backdrop-blur-sm" />

      <Container className="flex h-20 items-center justify-between">
        <Link
          href="/"
          className="font-mono text-sm tracking-[0.2em]"
          onClick={() => setOpen(false)}
        >
          {siteInfo.name}
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-10 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-mono text-xs tracking-[0.14em] text-ivory/70 uppercase transition-colors hover:text-ivory"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <CtaLink href={primaryCta.href} variant="framed">
            {primaryCta.label}
          </CtaLink>
        </div>

        <button
          ref={toggleRef}
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav-panel"
          aria-label={open ? "Close menu" : "Open menu"}
          className="relative h-10 w-10 md:hidden"
        >
          <span
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 h-px w-6 -translate-x-1/2 bg-ivory transition-transform duration-300"
            style={{ transform: `translate(-50%, ${open ? "0" : "-4px"}) rotate(${open ? "45deg" : "0deg"})` }}
          />
          <span
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 h-px w-6 -translate-x-1/2 bg-ivory transition-transform duration-300"
            style={{ transform: `translate(-50%, ${open ? "0" : "4px"}) rotate(${open ? "-45deg" : "0deg"})` }}
          />
        </button>
      </Container>

      {open ? (
        <div
          id="mobile-nav-panel"
          ref={panelRef}
          className="fixed inset-x-0 top-20 bottom-0 flex flex-col justify-between overflow-y-auto bg-graphite px-5 pt-10 pb-10 md:hidden"
        >
          <nav aria-label="Mobile" className="flex flex-col gap-8">
            {navItems.map((item, i) => (
              <Link
                key={item.href}
                ref={i === 0 ? firstLinkRef : undefined}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-3xl font-medium"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <CtaLink href={primaryCta.href} variant="framed" className="w-fit">
            {primaryCta.label}
          </CtaLink>
        </div>
      ) : null}
    </header>
  );
}
