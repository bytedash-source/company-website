import type { ReactNode } from "react";
import Link from "next/link";

type CtaLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "framed" | "text";
  className?: string;
};

const BASE =
  "inline-flex items-center gap-2 font-mono text-xs tracking-[0.14em] uppercase transition-colors duration-300 group";

/**
 * Shared CTA styling. Contrast note: hover states shift the *border/underline*
 * to accent rather than the text color, since small uppercase label text on
 * cobalt does not clear WCAG AA at this size — see product-requirement.md §5.
 */
export function CtaLink({ href, children, variant = "text", className = "" }: CtaLinkProps) {
  const variantClass =
    variant === "framed"
      ? "border border-current px-5 py-3 hover:border-accent"
      : "hover:text-accent";
  const classes = `${BASE} ${variantClass} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      <span
        aria-hidden="true"
        className="transition-transform duration-300 group-hover:translate-x-1"
      >
        →
      </span>
    </>
  );

  if (href.startsWith("/") || href.startsWith("#")) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  const isMailOrTel = href.startsWith("mailto:") || href.startsWith("tel:");

  return (
    <a
      href={href}
      className={classes}
      target={isMailOrTel ? undefined : "_blank"}
      rel={isMailOrTel ? undefined : "noreferrer"}
    >
      {content}
    </a>
  );
}
