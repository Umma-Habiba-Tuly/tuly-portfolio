"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { POSES } from "@/components/Mascot";
import { ICONS } from "@/components/icons";
import MouseParallax from "@/components/MouseParallax";
import { SITE_CONFIG } from "@/constants/site";

/** Hero avatar. Set HERO_VIDEO to a looping video to replace the still poses. */
const HERO_VIDEO = "";

const SLIDES = [
  { word: "AUTOMATE", bg: "#0E2E2B", wordColor: "#B7E85A", text: "#EFFAF6", dark: true, pose: POSES.idea, cx: 0.55 },
  { word: "BUILD IT", bg: "#EFFAF6", wordColor: "#10847E", text: "#10201D", dark: false, pose: POSES.laptop, cx: 0.56 },
  { word: "SHIP IT", bg: "#B7E85A", wordColor: "#0E2E2B", text: "#10201D", dark: false, pose: POSES.coffee, cx: 0.58 },
];

function Arrow({ dir }: { dir: "prev" | "next" }) {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={dir === "next" ? "M5 12h14M13 6l6 6-6 6" : "M19 12H5M11 6l-6 6 6 6"} />
    </svg>
  );
}

export default function Hero() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const slide = SLIDES[i];

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setI((n) => (n + 1) % SLIDES.length), 3000);
    return () => clearInterval(t);
  }, [paused]);

  const go = (d: number) => setI((n) => (n + d + SLIDES.length) % SLIDES.length);
  const rule = slide.dark ? "bg-surface/35" : "bg-ink/35";
  const btn = slide.dark
    ? "border-surface/40 hover:bg-surface hover:text-ink"
    : "border-ink/40 hover:bg-ink hover:text-surface";

  return (
    <section
      id="top"
      className="hero-bg font-display relative overflow-hidden"
      style={{ backgroundColor: slide.bg, color: slide.text }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <h1 className="sr-only">Umma Habiba Tuly: Automate the busywork. AI engineer and full-stack developer.</h1>

      {/* soft hand-over to the next scene: fades whatever the hero colour is into the scene's deep teal */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-32 md:h-28"
        style={{ background: "linear-gradient(to bottom, rgba(10,36,33,0) 0%, rgba(10,36,33,0.55) 55%, #0a2421 100%)" }}
      />

      {/* stage: giant word behind, character in front */}
      <div className="relative h-[27rem] md:absolute md:inset-0 md:h-auto" aria-hidden="true">
        <div className="absolute inset-x-0 top-[5%] flex justify-center overflow-hidden md:top-[21%]">
          <span
            key={slide.word}
            className="font-display condensed anim-rise block whitespace-nowrap font-extrabold uppercase leading-[0.82] tracking-[-0.02em] [font-size:clamp(5rem,23vw,17.5rem)] md:[font-size:clamp(7rem,14vw,13rem)]"
            style={{ color: slide.wordColor, transition: "color 0.9s ease" }}
          >
            {slide.word}
          </span>
        </div>

        <div
          className="anim-rise absolute inset-x-0 bottom-[2.5rem] z-[2] mx-auto h-[74%] w-[min(30rem,92vw)] md:bottom-[6.5rem] md:h-[80%] md:w-[min(34rem,40vw)]"
          style={{ animationDelay: "200ms" }}
        >
          <MouseParallax className="h-full w-full">
            <div className="relative h-full w-full" style={{ containerType: "size" }}>
              <div
                aria-hidden="true"
                className="absolute -bottom-2 left-1/2 h-6 w-[52%] -translate-x-1/2 rounded-[50%]"
                style={{ background: "radial-gradient(closest-side, rgba(0,0,0,0.38), rgba(0,0,0,0))" }}
              />
              {HERO_VIDEO ? (
                <video src={HERO_VIDEO} autoPlay muted loop playsInline className="h-full w-full object-contain object-bottom" />
              ) : (
                SLIDES.map((sl, n) => (
                  <Image
                    key={sl.pose.src}
                    src={sl.pose.src}
                    alt=""
                    fill
                    priority={n === 0}
                    sizes="(min-width: 768px) 24rem, 70vw"
                    unoptimized
                    className="object-contain object-bottom"
                    style={{
                      opacity: i === n ? 1 : 0,
                      transform: `translate(calc(${((0.5 - sl.cx) * sl.pose.w / sl.pose.h * 100).toFixed(2)}cqh), ${i === n ? "0px" : "18px"}) scale(${i === n ? 1 : 0.97})`,
                      transition: "opacity 0.8s ease, transform 0.9s cubic-bezier(0.2,0.8,0.25,1)",
                      filter: "drop-shadow(0 6px 9px rgba(0,0,0,0.16))",
                    }}
                  />
                ))
              )}
            </div>
          </MouseParallax>
        </div>
      </div>

      {/* info columns */}
      <div className="relative z-10 mx-auto grid max-w-[1200px] gap-8 px-5 pb-20 pt-6 sm:px-8 md:min-h-[43rem] md:grid-cols-2 md:items-end md:pb-28 md:pt-0">
        <div className="max-w-[27rem]">
          <p className="flex items-center gap-3 text-[0.78rem] font-semibold uppercase tracking-[0.14em] opacity-75">
            <span className="h-px w-8 bg-current" aria-hidden="true" />
            Founder, {SITE_CONFIG.company} · {SITE_CONFIG.location}
          </p>
          <p className="font-display mt-3 text-[1.35rem] font-extrabold leading-[1.15] tracking-[-0.015em] md:text-[1.6rem]">
            AI Engineer, Full-Stack Developer &amp; UI/UX Designer
          </p>
          <p className="mt-3 text-[0.95rem] font-medium leading-relaxed opacity-80">
            n8n · Qdrant · Python · Next.js · Figma
          </p>
          <p className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm font-bold">
            {[
              ["GitHub", SITE_CONFIG.socials.find((s) => s.name === "GitHub")?.url],
              ["LinkedIn", SITE_CONFIG.socials.find((s) => s.name === "LinkedIn")?.url],
            ].map(([k, u]) => (
              <a key={k} href={u} className="group inline-flex items-center gap-2 underline decoration-current/40 underline-offset-[6px] transition hover:decoration-current">
                <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
                  {ICONS[k as string]}
                </svg>
                {k}
                <span aria-hidden="true" className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  ↗
                </span>
              </a>
            ))}
          </p>
        </div>

        <div className="md:justify-self-end md:text-left">
          <div className="max-w-[26rem]">
            <p className="text-lg font-medium leading-snug md:text-[1.35rem]">
              I build AI agents, automations and the web apps and interfaces around them, so people stop doing
              repetitive work by hand.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <button type="button" onClick={() => go(-1)} aria-label="Previous" className={`flex h-12 w-12 items-center justify-center rounded-full border transition ${btn}`}>
                <Arrow dir="prev" />
              </button>
              <button type="button" onClick={() => go(1)} aria-label="Next" className={`flex h-12 w-12 items-center justify-center rounded-full border transition ${btn}`}>
                <Arrow dir="next" />
              </button>
              <span className={`mx-1 h-px w-8 ${rule}`} aria-hidden="true" />
              <a
                href={SITE_CONFIG.whatsappUrl}
                className={`rounded-full px-7 py-3.5 text-base font-semibold transition ${slide.dark ? "bg-accent text-ink hover:bg-surface" : "bg-ink text-surface hover:bg-primary"}`}
              >
                Hire me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
