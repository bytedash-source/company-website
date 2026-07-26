"use client";

import { useState } from "react";
import { Container } from "@/components/ui/container";
import { MicroLabel } from "@/components/ui/micro-label";
import { Reveal } from "@/components/ui/reveal";
import { services } from "@/content/services";

function ServiceRow({
  index,
  title,
  description,
}: {
  index: string;
  title: string;
  description: string;
}) {
  const [open, setOpen] = useState(false);
  const panelId = `service-panel-${index}`;

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

export function ServicesSection() {
  return (
    <section id="services" data-surface="dark" className="bg-graphite py-24 text-ivory sm:py-32">
      <Container>
        <h2>
          <MicroLabel className="text-ivory/50">What we make</MicroLabel>
        </h2>
        <div className="mt-8">
          {services.map((service, i) => (
            <Reveal key={service.index} delayMs={i * 60}>
              <ServiceRow
                index={service.index}
                title={service.title}
                description={service.description}
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
