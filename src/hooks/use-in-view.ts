"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Fires once when the element first enters the viewport, then disconnects.
 * Used to drive the reveal-on-scroll effect without re-triggering on every
 * scroll direction change.
 */
export function useInView<T extends HTMLElement>(threshold = 0.2) {
  const ref = useRef<T | null>(null);
  // Always start `false` — matters for SSR: `typeof IntersectionObserver`
  // is also "undefined" on the server, so branching the initial state on
  // browser support here would make the server-rendered markup disagree
  // with the client's first hydration pass.
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      // Legacy-browser fallback only (all evergreen browsers support this
      // API) — effects never run during SSR, so this can't reintroduce the
      // hydration mismatch described above.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}
