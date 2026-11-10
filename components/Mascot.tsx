"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type MascotProps = {
  /** Positioning classes (absolute), including the width, e.g. "right-8 top-20 w-44". */
  className?: string;
  /** Short line shown in a speech bubble once she has popped up. */
  bubble?: string;
  /** A ledge she leans on. "none" sits her straight on top of whatever is below. */
  ledge?: "dark" | "light" | "teal" | "none";
  delay?: number;
};

const LEDGES = {
  dark: "bg-surface/15 ring-1 ring-surface/25 backdrop-blur-sm",
  light: "bg-deep",
  teal: "bg-primary ring-1 ring-surface/20",
  none: "hidden",
} as const;

/**
 * The avatar peeking over an edge. It rises into place the first time it scrolls
 * into view, then sways gently. The picture's bottom is a flat cut that hides behind
 * the ledge (or the card she sits on).
 */
export default function Mascot({ className = "", bubble, ledge = "dark", delay = 0 }: MascotProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} aria-hidden="true" className={`pointer-events-none absolute z-10 ${className} ${shown ? "mascot-on" : ""}`}>
      <div className="relative">
        <div style={{ clipPath: "inset(-70% -40% 0 -40%)" }}>
          <div className="mascot-rise" style={{ transitionDelay: `${delay}ms` }}>
            <div className="mascot-sway">
              <Image
                src="/images/avatar-peek.webp"
                alt=""
                width={1168}
                height={1104}
                sizes="(min-width: 768px) 14rem, 8rem"
                className="h-auto w-full select-none"
                style={{ filter: "drop-shadow(0 0 22px rgba(16,132,126,0.3))" }}
              />
            </div>
          </div>
        </div>

        <div className={`absolute -bottom-2.5 left-[-8%] right-[-8%] h-5 rounded-full ${LEDGES[ledge]}`} />

        {bubble ? (
          <span
            className="mascot-bubble absolute -left-2 top-[6%] hidden -translate-x-full whitespace-nowrap rounded-2xl bg-accent px-3.5 py-2 text-sm font-bold text-ink shadow-lg sm:block"
            style={{ transitionDelay: `${delay + 900}ms` }}
          >
            {bubble}
            <span className="absolute -right-1 top-1/2 h-3 w-3 -translate-y-1/2 rotate-45 bg-accent" />
          </span>
        ) : null}
      </div>
    </div>
  );
}
