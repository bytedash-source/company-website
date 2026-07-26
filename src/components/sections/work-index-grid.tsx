"use client";

import { useState } from "react";
import { ProjectCard } from "@/components/ui/project-card";
import { MicroLabel } from "@/components/ui/micro-label";
import { caseStudies, workFilters, type WorkCategory } from "@/content/work";

export function WorkIndexGrid() {
  const [active, setActive] = useState<"all" | WorkCategory>("all");

  const visible =
    active === "all"
      ? caseStudies
      : caseStudies.filter((project) => project.categories.includes(active));

  return (
    <div>
      <div role="group" aria-label="Filter work by category" className="flex flex-wrap gap-3">
        {workFilters.map((filter) => {
          const isActive = filter.value === active;
          return (
            <button
              key={filter.value}
              type="button"
              onClick={() => setActive(filter.value)}
              aria-pressed={isActive}
              className={`border px-4 py-2 font-mono text-xs tracking-[0.14em] uppercase transition-colors ${
                isActive
                  ? "border-accent bg-accent text-ivory"
                  : "border-ivory/20 text-ivory/60 hover:border-ivory/50 hover:text-ivory"
              }`}
            >
              {filter.label}
            </button>
          );
        })}
      </div>

      {visible.length > 0 ? (
        <div className="mt-12 grid gap-16 sm:grid-cols-2">
          {visible.map((project) => (
            <ProjectCard key={project.slug} project={project} variant="grid" />
          ))}
        </div>
      ) : (
        <div className="mt-16 border border-ivory/15 p-10 text-center">
          <MicroLabel className="text-ivory/45">More work is on its way</MicroLabel>
          <p className="mt-3 text-ivory/70">
            Nothing published in this category yet — check back soon, or get in
            touch about a project like it.
          </p>
        </div>
      )}
    </div>
  );
}
