"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { POSES } from "@/components/Mascot";
import MouseParallax from "@/components/MouseParallax";
import { SITE_CONFIG } from "@/constants/site";

/** Hero avatar. Set HERO_VIDEO to a looping video to replace the still poses. */
const HERO_VIDEO = "";

const SLIDES = [
  { word: "AUTOMATE", bg: "#0E2E2B", wordColor: "#B7E85A", text: "#EFFAF6", dark: true, pose: POSES.idea },
  { word: "BUILD IT", bg: "#EFFAF6", wordColor: "#10847E", text: "#10201D", dark: false, pose: POSES.laptop },
  { word: "SHIP IT", bg: "#B7E85A", wordColor: "#0E2E2B", text: "#10201D", dark: false, pose: POSES.coffee },
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
    const t = setInterval(() => setI((n) => (n + 1) % SLIDES.length), 4800);
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
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-40 md:h-56"
        style={{ background: "linear-gradient(to bottom, rgba(10,36,33,0) 0%, rgba(10,36,33,0.55) 55%, #0a2421 100%)" }}
      />

      {/* stage: giant word behind, character in front */}
      <div className="relative h-[27rem] md:absolute md:inset-0 md:h-auto" aria-hidden="true">
        <div className="absolute inset-x-0 top-[8%] flex justify-center overflow-hidden md:top-[9%]">
          <span
            key={slide.word}
            className="font-display condensed anim-rise block whitespace-nowrap font-extrabold uppercase leading-[0.82] tracking-[-0.02em]"
            style={{ fontSize: "clamp(5rem, 19vw, 17.5rem)", color: slide.wordColor, transition: "color 0.9s ease" }}
          >
            {slide.word}
          </span>
        </div>

        <div
          className="anim-rise absolute inset-x-0 bottom-[2.5rem] z-[2] mx-auto h-[86%] w-[min(30rem,92vw)] md:bottom-[6.5rem] md:h-[80%] md:w-[min(34rem,40vw)]"
          style={{ animationDelay: "200ms" }}
        >
          <MouseParallax className="h-full w-full">
            <div className="relative h-full w-full">
              <div
                aria-hidden="true"
                className="absolute -bottom-3 left-1/2 h-8 w-[60%] -translate-x-1/2 rounded-[50%]"
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
                    className="object-contain object-bottom"
                    style={{
                      opacity: i === n ? 1 : 0,
                      transform: i === n ? "translateY(0) scale(1)" : "translateY(18px) scale(0.97)",
                      transition: "opacity 0.8s ease, transform 0.9s cubic-bezier(0.2,0.8,0.25,1)",
                      filter: "drop-shadow(0 12px 22px rgba(0,0,0,0.25))",
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
        <div className="max-w-xs">
          <p className="text-sm font-bold uppercase leading-snug tracking-[0.06em]">
            AI engineer &amp;
            <br />
            full-stack developer
          </p>
          <p className="mt-4 text-xs font-semibold uppercase leading-relaxed tracking-[0.08em] opacity-80">
            Founder: {SITE_CONFIG.company}
            <br />
            Stack: n8n, Qdrant, Python, Next.js
            <br />
            Based in: {SITE_CONFIG.location}
          </p>
          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.08em]">
            <a href={SITE_CONFIG.socials.find((s) => s.name === "GitHub")?.url} className="underline underline-offset-4">
              GitHub
            </a>
            ,{" "}
            <a href={SITE_CONFIG.socials.find((s) => s.name === "LinkedIn")?.url} className="underline underline-offset-4">
              LinkedIn
            </a>
          </p>
        </div>

        <div className="md:justify-self-end md:text-left">
          <div className="max-w-xs">
            <p className="text-base font-medium leading-snug">
              I build AI agents, automations and the web apps and interfaces around them, so people stop doing
              repetitive work by hand.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <button type="button" onClick={() => go(-1)} aria-label="Previous" className={`flex h-10 w-10 items-center justify-center rounded-full border transition ${btn}`}>
                <Arrow dir="prev" />
              </button>
              <button type="button" onClick={() => go(1)} aria-label="Next" className={`flex h-10 w-10 items-center justify-center rounded-full border transition ${btn}`}>
                <Arrow dir="next" />
              </button>
              <span className={`mx-1 h-px w-8 ${rule}`} aria-hidden="true" />
              <a
                href={SITE_CONFIG.whatsappUrl}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${slide.dark ? "bg-accent text-ink hover:bg-surface" : "bg-ink text-surface hover:bg-primary"}`}
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
