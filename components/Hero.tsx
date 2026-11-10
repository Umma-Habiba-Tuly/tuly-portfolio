import Image from "next/image";
import MouseParallax from "@/components/MouseParallax";
import Typewriter from "@/components/Typewriter";
import { SITE_CONFIG } from "@/constants/site";

/**
 * Hero avatar. Swap for a looping video (e.g. "/videos/avatar.webm") by setting HERO_VIDEO.
 */
const HERO_IMAGE = "/images/avatar-cutout.webp";
const HERO_VIDEO = "";

const TOOLS = ["n8n", "Qdrant", "PostgreSQL", "LangChain", "FastAPI", "Docker"];

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section id="top" className="on-deep relative overflow-hidden bg-deep text-surface">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(55% 75% at 78% 62%, rgba(16,132,126,0.55), transparent 70%), linear-gradient(100deg, #0a1f1d 0%, #0e2e2b 55%, #0e2e2b 100%)",
        }}
      />

      <div className="relative mx-auto max-w-[1200px] px-5 pt-8 sm:px-8 md:pt-8">
        <div className="grid items-center gap-8 md:grid-cols-[1.05fr_0.95fr] md:gap-4">
          <div className="pb-4 md:pb-10">
            <p className="anim-rise text-xl text-surface/85 sm:text-2xl" style={{ animationDelay: "100ms" }}>
              Hey, I&apos;m <span className="font-bold text-accent">Tuly</span>
              <span className="sr-only"> (Umma Habiba Tuly)</span>
            </p>

            <Typewriter
              as="h1"
              parts={[{ text: "Automate the " }, { text: "busywork.", className: "text-accent" }]}
              startDelay={450}
              speed={55}
              className="font-display mt-3 max-w-[11ch] font-bold leading-[1.02] tracking-[-0.035em]"
              style={{ fontSize: "clamp(2.8rem, 6vw, 4.9rem)" }}
            />

            <p className="anim-fade mt-5 text-base font-medium text-surface/70 sm:text-lg" style={{ animationDelay: "800ms" }}>
              AI engineer &amp; full-stack developer · Founder, {SITE_CONFIG.company}
            </p>
            <p className="anim-fade mt-3 max-w-md text-base leading-relaxed text-surface/85 sm:text-lg" style={{ animationDelay: "900ms" }}>
              I build AI agents, automations and the web apps and interfaces around them, so people stop doing
              repetitive work by hand.
            </p>

            <div className="anim-fade mt-8 flex items-center gap-3" style={{ animationDelay: "1000ms" }}>
              <a href={SITE_CONFIG.whatsappUrl} className="btn btn-accent !rounded-full">
                Message me on WhatsApp
              </a>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                aria-label="Send an email"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-surface/35 transition hover:border-accent hover:text-accent"
              >
                <MailIcon />
              </a>
            </div>

            <div className="anim-fade mt-8 h-px max-w-md bg-surface/20" style={{ animationDelay: "1100ms" }} />

            <a
              href="#work"
              className="anim-fade group mt-6 block max-w-sm rounded-3xl border border-surface/15 bg-surface/[0.07] p-5 backdrop-blur-md transition hover:border-accent/60"
              style={{ animationDelay: "1200ms" }}
            >
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-accent">
                <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
                Live in production
              </span>
              <span className="mt-2 block leading-snug text-surface/90">
                Wear Inspired: an AI assistant that answers customers on website chat, Messenger and Instagram.
              </span>
              <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold">
                See the case
                <span aria-hidden="true" className="transition group-hover:translate-x-0.5">
                  →
                </span>
              </span>
            </a>
          </div>

          <div className="anim-rise relative mx-auto w-full max-w-[30rem]" style={{ animationDelay: "250ms" }}>
            <div aria-hidden="true" className="pointer-events-none absolute inset-0">
              {[64, 92, 122].map((d, i) => (
                <span
                  key={d}
                  className="absolute rounded-full border"
                  style={{
                    width: `${d}%`,
                    aspectRatio: "1",
                    left: "58%",
                    top: "62%",
                    transform: "translate(-50%, -50%)",
                    borderColor: i === 0 ? "rgba(183,232,90,0.28)" : "rgba(239,250,246,0.14)",
                  }}
                />
              ))}
            </div>
            <MouseParallax>
              <div
                className="relative aspect-[784/802]"
                style={{
                  maskImage: "linear-gradient(to bottom, #000 86%, transparent 100%)",
                  WebkitMaskImage: "linear-gradient(to bottom, #000 86%, transparent 100%)",
                }}
              >
                {HERO_VIDEO ? (
                  <video src={HERO_VIDEO} autoPlay muted loop playsInline className="h-full w-full object-contain object-bottom" />
                ) : (
                  <Image
                    src={HERO_IMAGE}
                    alt={`Illustrated avatar of ${SITE_CONFIG.name}`}
                    fill
                    priority
                    sizes="(min-width: 768px) 34rem, 90vw"
                    className="object-contain object-bottom"
                  />
                )}
              </div>
            </MouseParallax>
          </div>
        </div>

        <div
          className="marquee anim-fade mt-6 overflow-hidden pb-10 md:mt-2 md:pb-14"
          style={{
            animationDelay: "1300ms",
            maskImage: "linear-gradient(to right, transparent, #000 12%, #000 88%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, #000 12%, #000 88%, transparent)",
          }}
          aria-label="Tools I work with"
        >
          <ul className="marquee-track flex w-max gap-12 text-xl font-bold tracking-tight text-surface/25 sm:text-2xl">
            {[...TOOLS, ...TOOLS].map((t, i) => (
              <li key={`${t}-${i}`} aria-hidden={i >= TOOLS.length ? "true" : undefined}>
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
