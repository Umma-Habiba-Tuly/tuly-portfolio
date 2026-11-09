import Image from "next/image";
import MouseParallax from "@/components/MouseParallax";
import Typewriter from "@/components/Typewriter";
import { SITE_CONFIG } from "@/constants/site";

/**
 * Hero image. Today this is the portrait, cropped into an arch.
 * Swap for a transparent 3D avatar PNG (e.g. "/images/avatar.png") when ready.
 */
const HERO_IMAGE = "/images/tuly-portrait.jpg";

/**
 * Animated avatar. Set to a looping video with a transparent or dark background
 * (e.g. "/videos/avatar.webm") and it replaces the portrait.
 */
const HERO_VIDEO = "";

const TOOLS = ["n8n", "Qdrant", "PostgreSQL", "LangChain", "FastAPI", "Docker"];

export default function Hero() {
  return (
    <section id="top" className="on-deep relative overflow-hidden bg-deep text-surface">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(55% 45% at 50% 34%, rgba(16,132,126,0.45), transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-[1200px] px-5 pt-10 sm:px-8 md:pt-14">
        <div className="grid items-end gap-10 md:grid-cols-[1fr_auto_1fr] md:gap-8">
          <div className="anim-fade order-2 md:order-1 md:pb-28" style={{ animationDelay: "900ms" }}>
            <div className="mb-4 h-px w-16 bg-accent" />
            <p className="text-lg font-medium leading-snug sm:text-xl">
              AI engineer &amp; full-stack developer
              <br />
              Founder, {SITE_CONFIG.company}
            </p>
          </div>

          <figure className="anim-rise relative order-1 mx-auto w-[17rem] sm:w-[21rem] md:order-2" style={{ animationDelay: "150ms" }}>
            <MouseParallax>
            <div
              className={`relative aspect-[4/5] overflow-hidden ${HERO_VIDEO ? "" : "rounded-t-[999px] bg-primary"}`}
              style={{
                maskImage: "linear-gradient(to bottom, #000 62%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to bottom, #000 62%, transparent 100%)",
              }}
            >
              {HERO_VIDEO ? (
                <video
                  src={HERO_VIDEO}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="h-full w-full object-contain object-bottom"
                />
              ) : (
                <Image
                  src={HERO_IMAGE}
                  alt={`Portrait of ${SITE_CONFIG.name}`}
                  fill
                  priority
                  sizes="(min-width: 640px) 336px, 272px"
                  className="object-cover object-top"
                />
              )}
            </div>
            </MouseParallax>

            <h1 className="anim-rise wordmark-drift absolute bottom-0 left-1/2 z-10 w-max -translate-x-1/2 translate-y-[34%] whitespace-nowrap text-center leading-[0.8]" style={{ animationDelay: "550ms" }}>
              <span className="block text-base font-bold tracking-[0.3em] text-accent sm:text-lg">UMMA HABIBA</span>
              <span
                className="font-display block bg-gradient-to-b from-surface via-surface to-surface/10 bg-clip-text font-extrabold tracking-[-0.05em] text-transparent"
                style={{ fontSize: "clamp(6rem, 22vw, 15rem)" }}
              >
                Tuly
              </span>
            </h1>
          </figure>

          <p className="anim-fade order-3 max-w-sm text-base leading-relaxed text-surface/85 md:pb-28 md:text-right" style={{ animationDelay: "1000ms" }}>
            I build AI agents, automations and the web apps and interfaces around them, so people stop doing
            repetitive work by hand.
          </p>
        </div>

        <div
          className="marquee anim-fade mt-36 overflow-hidden md:mt-44"
          style={{
            animationDelay: "1200ms",
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

        <div className="mt-14 pb-16 md:mt-20 md:pb-24">
          <div className="mb-6 h-px w-16 bg-accent" />
          <Typewriter
            parts={[{ text: "Automate the " }, { text: "busywork.", className: "text-accent" }]}
            className="font-display max-w-4xl font-extrabold leading-[0.98] tracking-[-0.04em]"
            style={{ fontSize: "clamp(2.4rem, 6vw, 4.75rem)" }}
          />
          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
            <a href={SITE_CONFIG.whatsappUrl} className="btn btn-accent cta-glow">
              DM to automate <span aria-hidden="true">→</span>
            </a>
            <a href="#work" className="font-semibold underline decoration-surface/50 underline-offset-8 hover:decoration-accent">
              See what I&apos;ve built
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
