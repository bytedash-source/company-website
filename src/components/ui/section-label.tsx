import { MicroLabel } from "@/components/ui/micro-label";

type SectionLabelProps = {
  /** Eyebrow text, e.g. "WHAT WE MAKE". Rendered upper-case via CSS. */
  children: string;
  /** Optional section number, e.g. "01", shown before the label. */
  index?: string;
  tone?: "dark" | "light";
  className?: string;
};

/**
 * Standard section eyebrow used to open a section across every page —
 * optional index number, hairline rule, and a muted micro-label.
 */
export function SectionLabel({
  children,
  index,
  tone = "dark",
  className = "",
}: SectionLabelProps) {
  const mutedClass = tone === "light" ? "text-ink/50" : "text-ivory/50";
  const accentClass = tone === "light" ? "text-ink/30" : "text-ivory/30";

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {index ? (
        <MicroLabel className={`text-accent`}>{index}</MicroLabel>
      ) : null}
      <span aria-hidden="true" className={`h-px w-8 bg-current ${accentClass}`} />
      <MicroLabel className={mutedClass}>{children}</MicroLabel>
    </div>
  );
}
