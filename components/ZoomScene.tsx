"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { GROUPS } from "@/data/skills";

const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const ease = (t: number) => t * t * (3 - 2 * t);

// City blocks around the pitch (x, y, w, h, tone)
const BLOCKS: [number, number, number, number, number][] = [
  [380, -30, 360, 80, 0], [760, -30, 460, 80, 1], [380, 790, 300, 90, 1], [700, 790, 520, 90, 0],
];
const TONES = ["#10847E", "#143f3b"];

export default function ZoomScene() {
  const wrap = useRef<HTMLElement | null>(null);
  const [p, setP] = useState(0);
  const [still, setStill] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setStill(true);
      setP(1);
      return;
    }
    let raf = 0;
    const update = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const el = wrap.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        const total = r.height - window.innerHeight;
        setP(clamp(-r.top / Math.max(total, 1)));
      });
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const e = ease(p);
  const avatarScale = 2.3 - 1.98 * e;
  const mapScale = 2.2 - 1.2 * e;
  const spin = -34 * (1 - e);
  const iris = 34 + 118 * ease(clamp((p - 0.1) / 0.78));
  const caption = clamp((p - 0.74) / 0.2);
  const draw = clamp((p - 0.3) / 0.45);
  const blocksIn = clamp((p - 0.25) / 0.4);

  return (
    <section
      ref={wrap}
      id="skills"
      aria-label="Zoom out from the avatar to the skills"
      className={`on-deep relative bg-deep text-surface ${still ? "" : "h-[270vh]"}`}
    >
      <div className={`${still ? "relative h-[34rem]" : "sticky top-16 h-[calc(100vh-4rem)]"} overflow-hidden`}>
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{ background: "radial-gradient(circle at 50% 50%, #1b5e57 0%, #0E2E2B 55%, #0a2421 100%)" }}
        />

        <div
          className="absolute inset-0"
          style={{ clipPath: `circle(${iris}vmin at 50% 50%)`, WebkitClipPath: `circle(${iris}vmin at 50% 50%)` }}
        >
          <div className="absolute inset-0 bg-ink" />
          <svg
            viewBox="0 -45 1600 900"
            preserveAspectRatio="xMidYMid slice"
            className="absolute inset-0 h-full w-full"
            style={{ transform: `rotate(${spin}deg) scale(${mapScale})`, transformOrigin: "50% 52%" }}
            aria-hidden="true"
          >
            <defs>
              <pattern id="grid2" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M50 0H0V50" fill="none" stroke="#EFFAF6" strokeOpacity="0.05" />
              </pattern>
              <radialGradient id="glow2" cx="50%" cy="55%" r="55%">
                <stop offset="0" stopColor="#10847E" stopOpacity="0.4" />
                <stop offset="1" stopColor="#10847E" stopOpacity="0" />
              </radialGradient>
              <filter id="soft2" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="10" stdDeviation="12" floodColor="#000" floodOpacity="0.4" />
              </filter>
            </defs>
            <rect x="0" y="-45" width="1600" height="900" fill="url(#grid2)" />

            {/* blocks around, like a city seen from above */}
            <g opacity={blocksIn}>
              {BLOCKS.map(([x, y, w, h, t], i) => (
                <rect key={i} x={x} y={y} width={w} height={h} rx="16" fill={TONES[t]} fillOpacity={t ? 0.9 : 0.55} stroke="#EFFAF6" strokeOpacity="0.08" />
              ))}
            </g>

            {/* the pitch */}
            <g filter="url(#soft2)">
              <rect x="400" y="120" width="800" height="650" rx="26" fill="#0b2a27" />
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <rect key={i} x="400" y={120 + i * 108.3} width="800" height="108.3" fill={i % 2 ? "#0d332f" : "#0b2a27"} />
              ))}
            </g>
            <rect x="400" y="120" width="800" height="650" rx="26" fill="none" stroke="#B7E85A" strokeWidth="4" pathLength={1} strokeDasharray="1" strokeDashoffset={1 - draw} />
            <g fill="none" stroke="#B7E85A" strokeWidth="3" strokeOpacity="0.9">
              <path d="M400 445H1200" pathLength={1} strokeDasharray="1" strokeDashoffset={1 - draw} />
              <path d="M620 120V240H980V120" pathLength={1} strokeDasharray="1" strokeDashoffset={1 - draw} />
              <path d="M620 770V650H980V770" pathLength={1} strokeDasharray="1" strokeDashoffset={1 - draw} />
              <path d="M720 120V170H880V120" pathLength={1} strokeDasharray="1" strokeDashoffset={1 - draw} />
              <path d="M720 770V720H880V770" pathLength={1} strokeDasharray="1" strokeDashoffset={1 - draw} />
              <circle cx="800" cy="445" r="110" pathLength={1} strokeDasharray="1" strokeDashoffset={1 - draw} />
            </g>

            {/* the figure stands in the centre circle */}
            <circle cx="800" cy="445" r="110" fill="#0E2E2B" fillOpacity="0.85" stroke="#B7E85A" strokeWidth="3" />
            <circle cx="800" cy="445" r="138" fill="none" stroke="#EFFAF6" strokeOpacity="0.25" strokeDasharray="4 10" />
          </svg>
        </div>

        {/* matches the hero's bottom fade so the two sections join without a line */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 z-20 h-40"
          style={{ background: "linear-gradient(to bottom, #0a2421 0%, rgba(10,36,33,0.7) 45%, rgba(10,36,33,0) 100%)", opacity: clamp(1 - p * 6) }}
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 rounded-full border-[3px] border-accent/70"
          style={{
            width: `${iris * 2}vmin`,
            height: `${iris * 2}vmin`,
            transform: "translate(-50%, -50%)",
            opacity: clamp(1 - (p - 0.12) / 0.45),
            boxShadow: "0 0 60px 6px rgba(183,232,90,0.35), inset 0 0 50px 4px rgba(183,232,90,0.18)",
          }}
        />

        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div
            className="relative"
            style={{
              height: "min(70vh, 34rem)",
              aspectRatio: "584 / 661",
              transform: `translateY(${(1 - e) * 0.2 * 100 + e * 6}%) scale(${avatarScale})`,
              transformOrigin: "52% 30%",
              filter: `drop-shadow(0 ${14 * e}px ${30 * e}px rgba(0,0,0,0.45))`,
            }}
          >
            <Image src="/images/avatar-jprim3.webp" alt="Illustrated avatar of Umma Habiba Tuly" fill sizes="34rem" className="object-contain object-bottom" />
          </div>
        </div>

        {/* skills: left and right of the pitch (desktop) */}
        <div className="pointer-events-none absolute inset-0 hidden md:block">
          {[GROUPS.slice(0, 3), GROUPS.slice(3, 6)].map((col, ci) => (
            <div
              key={ci}
              className={`absolute top-4 bottom-4 flex w-[min(21rem,24vw)] flex-col justify-center gap-3 ${ci === 0 ? "left-4 lg:left-8" : "right-4 lg:right-8"}`}
            >
              {col.map((g, i) => {
                const vis = clamp((p - (0.74 + (ci * 3 + i) * 0.03)) / 0.14);
                return (
                  <div
                    key={g.n}
                    className={`pointer-events-auto rounded-2xl p-4 shadow-xl ${g.look}`}
                    style={{ opacity: vis, transform: `translateX(${(1 - vis) * (ci === 0 ? -40 : 40)}px)` }}
                  >
                    <p className="flex items-baseline gap-2">
                      <span className="font-display text-sm font-bold opacity-60">{g.n}</span>
                      <span className="font-display text-xl font-extrabold leading-tight tracking-[-0.01em]">{g.title}</span>
                    </p>
                    <p className="mt-2 text-[13px] font-medium leading-snug opacity-90">{g.skills.join(" · ")}</p>
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        <div
          className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink via-ink/85 to-transparent px-5 pb-6 pt-16 text-center sm:pb-9"
          style={{ opacity: caption, transform: `translateY(${(1 - caption) * 16}px)` }}
        >
          <p className="font-display mx-auto max-w-2xl text-2xl font-bold leading-tight tracking-tight sm:text-4xl">
            Zoom out. <span className="text-accent">This is what I work with.</span>
          </p>
          <p className="mx-auto mt-1 text-sm text-surface/65">
            Away from the screen: acrylic painting.
          </p>
        </div>
      </div>
    </section>
  );
}
