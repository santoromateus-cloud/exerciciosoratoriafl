/**
 * Decorative SVG primitives. No emojis, no clipart vibes.
 * Editorial marks: waveform, asterisk, hand-drawn underline, ornament rule.
 */
import { useEffect, useRef } from "react";

/** Animated audio waveform bars */
export function Waveform({
  bars = 28,
  className = "",
  color = "currentColor",
}: { bars?: number; className?: string; color?: string }) {
  return (
    <svg
      viewBox={`0 0 ${bars * 6} 40`}
      className={className}
      preserveAspectRatio="none"
      aria-hidden
    >
      {Array.from({ length: bars }).map((_, i) => (
        <rect
          key={i}
          x={i * 6 + 1}
          y={6}
          width={3}
          height={28}
          rx={1.5}
          fill={color}
          className="wave-bar"
          style={{ animationDelay: `${(i % 8) * 90}ms` }}
        />
      ))}
    </svg>
  );
}

/** Slow-spinning typographic asterisk used as a section ornament */
export function Asterisk({ className = "" }: { className?: string }) {
  return (
    <span className={`asterisk-mark inline-block leading-none ${className}`}>
      <svg viewBox="0 0 24 24" className="h-full w-full" aria-hidden>
        <g stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
          <line x1="12" y1="2" x2="12" y2="22" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <line x1="4.9" y1="4.9" x2="19.1" y2="19.1" />
          <line x1="19.1" y1="4.9" x2="4.9" y2="19.1" />
        </g>
      </svg>
    </span>
  );
}

/** Hand-drawn underline that draws itself when visible */
export function HandUnderline({ className = "" }: { className?: string }) {
  const ref = useRef<SVGPathElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            el.classList.add("draw-line");
            io.disconnect();
          }
        }
      },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <svg
      viewBox="0 0 300 24"
      className={`absolute left-0 top-full w-full ${className}`}
      preserveAspectRatio="none"
      aria-hidden
    >
      <path
        ref={ref}
        d="M4 14 C 60 4, 120 22, 180 10 S 280 18, 296 8"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Ornament rule (• fleuron •) */
export function OrnamentRule({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`} aria-hidden>
      <span className="h-px w-16 bg-current opacity-40" />
      <svg viewBox="0 0 24 24" className="h-3 w-3 opacity-70">
        <path
          d="M12 2 L14 10 L22 12 L14 14 L12 22 L10 14 L2 12 L10 10 Z"
          fill="currentColor"
        />
      </svg>
      <span className="h-px w-16 bg-current opacity-40" />
    </div>
  );
}

/** Editorial section index marker — bold numeral + vertical rule + label */
export function SectionMark({
  number,
  label,
  className = "",
}: { number: string; label: string; className?: string }) {
  return (
    <div className={`flex items-stretch gap-4 ${className}`}>
      <div className="flex flex-col items-center">
        <span className="text-[10px] uppercase tracking-[0.35em] opacity-60">N°</span>
        <span className="numeral-display text-5xl font-bold leading-none sm:text-6xl">
          {number}
        </span>
        <span className="mt-2 h-10 w-px bg-current opacity-30" />
      </div>
      <div className="flex flex-col justify-end pb-1">
        <span className="text-[10px] uppercase tracking-[0.4em] opacity-60">capítulo</span>
        <span className="font-display text-base font-semibold uppercase tracking-[0.18em] sm:text-lg">
          {label}
        </span>
      </div>
    </div>
  );
}

/** Animated section divider — a self-drawing line with a center diamond */
export function SectionDivider({ className = "" }: { className?: string }) {
  const leftRef = useRef<SVGPathElement>(null);
  const rightRef = useRef<SVGPathElement>(null);
  useEffect(() => {
    const targets = [leftRef.current, rightRef.current].filter(Boolean) as SVGPathElement[];
    if (!targets.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            targets.forEach((t) => t.classList.add("draw-line"));
            io.disconnect();
          }
        }
      },
      { threshold: 0.4 }
    );
    io.observe(targets[0]);
    return () => io.disconnect();
  }, []);
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`} aria-hidden>
      <svg viewBox="0 0 200 4" className="h-1 w-32 sm:w-48" preserveAspectRatio="none">
        <path ref={leftRef} d="M0 2 L200 2" fill="none" stroke="currentColor" strokeWidth="1" />
      </svg>
      <svg viewBox="0 0 24 24" className="h-3 w-3 rotate-45 opacity-80">
        <rect x="4" y="4" width="16" height="16" fill="currentColor" />
      </svg>
      <svg viewBox="0 0 200 4" className="h-1 w-32 sm:w-48" preserveAspectRatio="none">
        <path ref={rightRef} d="M0 2 L200 2" fill="none" stroke="currentColor" strokeWidth="1" />
      </svg>
    </div>
  );
}

/** Vinyl-like spinning seal with text on a circle */
export function StampSeal({
  text = "Garantia incondicional 7 dias",
  className = "",
}: { text?: string; className?: string }) {
  const id = "seal-path";
  // duplicate text to fill the circle
  const filled = (text + " · ").repeat(2);
  return (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 200 200" className="h-full w-full animate-spin-slow">
        <defs>
          <path
            id={id}
            d="M 100,100 m -78,0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0"
          />
        </defs>
        <circle cx="100" cy="100" r="92" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.4" />
        <circle cx="100" cy="100" r="62" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3" />
        <text fontSize="13" letterSpacing="3" fill="currentColor" fontFamily="Inter, sans-serif">
          <textPath href={`#${id}`}>{filled}</textPath>
        </text>
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <Asterisk className="h-7 w-7 opacity-90" />
      </div>
    </div>
  );
}
