import type { ReactNode } from "react";

type MicroLabelProps = {
  children: ReactNode;
  className?: string;
};

/** Small-caps monospace tag used for eyebrows, placeholder captions and technical labels. */
export function MicroLabel({ children, className = "" }: MicroLabelProps) {
  return (
    <span
      className={`font-mono text-[11px] tracking-[0.2em] uppercase ${className}`}
    >
      {children}
    </span>
  );
}
