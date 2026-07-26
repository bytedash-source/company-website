"use client";

import { useState } from "react";
import { MicroLabel } from "@/components/ui/micro-label";
import { Reveal } from "@/components/ui/reveal";

export type ServiceIndexItem = {
  index: string;
  title: string;
  description: string;
};

type ServiceIndexRowProps = ServiceIndexItem;

function ServiceIndexRow({ index, title, description }: ServiceIndexRowProps) {
  const [open, setOpen] = useState(false);
  const panelId = `service-index-panel-${index}`;

  return (
    <div className="border-b border-ivory/15 first:border-t">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
        className="flex w-full items-baseline gap-6 py-8 text-left transition-[padding] duration-300 md:hover:pl-2"
      >
        <MicroLabel className="pt-1 text-accent">{index}</MicroLabel>
        <h3 className="flex-1 text-2xl font-medium sm:text-3xl">{title}</h3>
        <span
          aria-hidden="true"
          className="font-mono text-lg transition-transform duration-300 md:hidden"
          style={{ transform: open ? "rotate(45deg)" : "none" }}
        >
          +
        </span>
      </button>
      <div id={panelId} data-accordion-panel={open ? "open" : undefined}>
        <div>
          <p className="max-w-xl pb-8 text-ivory/70">{description}</p>
        </div>
      </div>
    </div>
  );
}

/**
 * Numbered index list — collapsible on mobile, always expanded from md up.
 * Used to preview a set of services (or any similarly-shaped list) without
 * repeating the accordion wiring at each call site.
 */
export function ServiceIndex({ items }: { items: ServiceIndexItem[] }) {
  return (
    <div>
      {items.map((item, i) => (
        <Reveal key={item.index} delayMs={i * 60}>
          <ServiceIndexRow index={item.index} title={item.title} description={item.description} />
        </Reveal>
      ))}
    </div>
  );
}
