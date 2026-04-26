import { useEffect, useRef, useState } from "react";

export type StickyCtaItem = {
  /** id of the section element to track */
  id: string;
  /** small uppercase tag, e.g. "Capítulo 04" */
  tag: string;
  /** main label inside the button */
  label: string;
  /** small line under the button */
  hint?: string;
};

/**
 * Floating bottom CTA whose copy changes per section.
 * Hides over hero/offer/final-cta to avoid duplication.
 */
export function StickyCTA({
  items,
  hideOverIds = [],
  href = "#oferta",
}: {
  items: StickyCtaItem[];
  hideOverIds?: string[];
  href?: string;
}) {
  const [active, setActive] = useState<StickyCtaItem | null>(null);
  const [visible, setVisible] = useState(false);
  const [pulseKey, setPulseKey] = useState(0);
  const lastIdRef = useRef<string | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const trackedIds = [...items.map((i) => i.id), ...hideOverIds];
    const elements = trackedIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);
    if (!elements.length) return;

    const ratios = new Map<string, number>();

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          ratios.set(e.target.id, e.isIntersecting ? e.intersectionRatio : 0);
        }

        // hide if a "hide" section dominates
        let hideRatio = 0;
        for (const id of hideOverIds) hideRatio = Math.max(hideRatio, ratios.get(id) ?? 0);

        // pick the visible item with highest ratio
        let best: { item: StickyCtaItem; r: number } | null = null;
        for (const it of items) {
          const r = ratios.get(it.id) ?? 0;
          if (r > 0 && (!best || r > best.r)) best = { item: it, r };
        }

        const shouldHide = hideRatio > 0.35 || !best;
        setVisible(!shouldHide);

        if (best && best.item.id !== lastIdRef.current) {
          lastIdRef.current = best.item.id;
          setActive(best.item);
          setPulseKey((k) => k + 1);
        }
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    elements.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [items, hideOverIds]);

  if (!active) return null;

  return (
    <a
      key={pulseKey}
      href={href}
      aria-label={active.label}
      className={`sticky-cta ${visible ? "is-on" : ""} ${visible ? "is-pulse" : ""}`}
    >
      <div className="sticky-cta__btn group relative flex items-center gap-3 overflow-hidden rounded-full border border-gold/40 bg-gradient-cta px-4 py-3 text-navy shadow-gold sm:px-5 sm:py-3.5">
        <span className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy/15 text-navy sm:inline-flex">
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </span>

        <div className="flex min-w-0 flex-1 flex-col text-left leading-tight">
          <span className="sticky-cta__label text-[10px] font-semibold uppercase tracking-[0.28em] text-navy/70">
            {active.tag}
          </span>
          <span className="sticky-cta__label truncate font-display text-sm font-bold uppercase tracking-[0.08em] sm:text-base">
            {active.label}
          </span>
          {active.hint ? (
            <span className="sticky-cta__label hidden text-[10px] font-medium uppercase tracking-[0.22em] text-navy/65 sm:block">
              {active.hint}
            </span>
          ) : null}
        </div>

        <span className="ml-auto inline-flex shrink-0 items-center gap-2 rounded-full bg-navy px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-gold sm:text-xs">
          <span className="inline-flex h-1.5 w-1.5 animate-pulse rounded-full bg-gold" />
          R$ 47
        </span>

        <span className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 rotate-12 bg-white/40 blur-md transition-transform duration-700 group-hover:translate-x-[400%]" />
      </div>
    </a>
  );
}
