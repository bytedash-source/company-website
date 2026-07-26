"use client";

import type { ReactNode } from "react";
import { useInView } from "@/hooks/use-in-view";

type RevealProps = {
  children: ReactNode;
  /** Stagger delay in milliseconds, for lists revealing in sequence. */
  delayMs?: number;
  className?: string;
};

export function Reveal({ children, delayMs = 0, className = "" }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      data-reveal={inView ? "in" : "idle"}
      style={delayMs ? { transitionDelay: `${delayMs}ms` } : undefined}
      className={className}
    >
      {children}
    </div>
  );
}
