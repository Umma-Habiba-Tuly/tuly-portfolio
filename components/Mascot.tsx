"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export const POSES = {
  coffee: { src: "/images/tuly/coffee.webp", w: 392, h: 884 },
  crossed: { src: "/images/tuly/crossed.webp", w: 248, h: 886 },
  idea: { src: "/images/tuly/idea.webp", w: 326, h: 886 },
  laptop: { src: "/images/tuly/laptop.webp", w: 376, h: 866 },
  backpack: { src: "/images/tuly/backpack.webp", w: 370, h: 890 },
  wave: { src: "/images/tuly/wave.webp", w: 428, h: 892 },
  sitLaptop: { src: "/images/tuly/sit-laptop.webp", w: 424, h: 584 },
  beanbag: { src: "/images/tuly/beanbag.webp", w: 544, h: 580 },
  desk: { src: "/images/tuly/desk.webp", w: 610, h: 578 },
  cheer: { src: "/images/tuly/cheer.webp", w: 400, h: 546 },
  sip: { src: "/images/tuly/sip.webp", w: 362, h: 564 },
  notebook: { src: "/images/tuly/notebook.webp", w: 392, h: 566 },
} as const;

export type PoseName = keyof typeof POSES;

type MascotProps = {
  pose: PoseName;
  /** Positioning classes (absolute), including the width, e.g. "right-8 top-20 w-44". */
  className?: string;
  /** Short line shown in a speech bubble once she has popped up. */
  bubble?: string;
  /**
   * "sit": she sits on a ledge/floor. "peek": she looks over the top edge of whatever is below
   * (the picture's bottom is hidden behind it).
   */
  mode?: "sit" | "peek";
  /** Optional floor/ledge under her. */
  ledge?: "dark" | "light" | "teal" | "none";
  delay?: number;
};

const LEDGES = {
  dark: "bg-surface/15 ring-1 ring-surface/25 backdrop-blur-sm",
  light: "bg-deep",
  teal: "bg-primary ring-1 ring-surface/20",
  none: "hidden",
} as const;

/** One of the avatar's poses, rising into place the first time it scrolls into view and then swaying gently. */
export default function Mascot({ pose, className = "", bubble, mode = "sit", ledge = "none", delay = 0 }: MascotProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shown, setShown] = useState(false);
  const p = POSES[pose];

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

  const img = (
    <Image
      src={p.src}
      alt=""
      width={p.w}
      height={p.h}
      sizes="(min-width: 768px) 14rem, 9rem"
      className="h-auto w-full select-none"
      style={{ filter: "drop-shadow(0 10px 18px rgba(0,0,0,0.22))" }}
    />
  );

  return (
    <div ref={ref} aria-hidden="true" className={`pointer-events-none absolute z-10 ${className} ${shown ? "mascot-on" : ""}`}>
      <div className="relative">
        {mode === "peek" ? (
          <div style={{ clipPath: "inset(-70% -40% 0 -40%)" }}>
            <div className="mascot-rise" style={{ transitionDelay: `${delay}ms` }}>
              <div className="mascot-sway" style={{ marginBottom: "-6%" }}>
                {img}
              </div>
            </div>
          </div>
        ) : (
          <div className="mascot-pop" style={{ transitionDelay: `${delay}ms` }}>
            <div className="mascot-sway">{img}</div>
          </div>
        )}

        <div className={`absolute -bottom-2.5 left-[-8%] right-[-8%] h-5 rounded-full ${LEDGES[ledge]}`} />

        {bubble ? (
          <span
            className="mascot-bubble absolute -left-2 top-[8%] hidden -translate-x-full whitespace-nowrap rounded-2xl bg-accent px-3.5 py-2 text-sm font-bold text-ink shadow-lg sm:block"
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
