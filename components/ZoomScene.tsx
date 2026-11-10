"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { GROUPS } from "@/data/skills";

const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const ease = (t: number) => t * t * (3 - 2 * t);

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
  const avatarScale = 2.3 - 1.65 * e;
  const mapScale = 2.2 - 1.2 * e;
  const iris = 34 + 118 * ease(clamp((p - 0.1) / 0.78));
  const caption = clamp((p - 0.74) / 0.2);
  
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
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              transform: `scale(${mapScale})`,
              background:
                "radial-gradient(52% 58% at 50% 50%, rgba(16,132,126,0.55) 0%, rgba(16,132,126,0.16) 45%, rgba(16,132,126,0) 75%), radial-gradient(30% 34% at 50% 46%, rgba(183,232,90,0.16) 0%, rgba(183,232,90,0) 70%)",
            }}
          />
          <div aria-hidden="true" className="absolute inset-0 flex items-center justify-center" style={{ transform: `scale(${1 + (1 - e) * 0.5})` }}>
            <span
              className="condensed font-display select-none font-extrabold uppercase leading-none tracking-[-0.02em]"
              style={{
                fontSize: "clamp(12rem, 44vw, 36rem)",
                color: "rgba(16,132,126,0.42)",
                transform: "translateY(-6%)",
              }}
            >
              Tuly
            </span>
          </div>
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-1/3"
            style={{ background: "linear-gradient(to top, rgba(0,0,0,0.35), rgba(0,0,0,0))" }}
          />
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
              transform: `translateY(${(1 - e) * 0.2 * 100 + e * 9}%) scale(${avatarScale})`,
              transformOrigin: "52% 30%",
              filter: `drop-shadow(0 0 28px rgba(16,132,126,0.30)) drop-shadow(0 ${14 * e}px ${30 * e}px rgba(0,0,0,0.45))`,
              maskImage: "linear-gradient(to bottom, #000 72%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to bottom, #000 72%, transparent 100%)",
            }}
          >
            <Image src="/images/avatar-jprim3.webp" alt="Illustrated avatar of Umma Habiba Tuly" fill sizes="34rem" className="object-contain object-bottom" />
          </div>
        </div>

        {/* skills: left and right of the stage (desktop) */}
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
