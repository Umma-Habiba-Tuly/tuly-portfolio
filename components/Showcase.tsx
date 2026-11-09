import CurvedGallery from "@/components/CurvedGallery";
import Reveal from "@/components/Reveal";

function Cursor({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" className={`h-5 w-5 ${className}`} aria-hidden="true">
      <path d="M2 2 17 8.5 10 10.5 8 17.5z" fill="currentColor" />
    </svg>
  );
}

export default function Showcase() {
  return (
    <section id="showcase" className="on-deep starfield relative overflow-hidden bg-ink text-surface">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(60% 50% at 50% 100%, rgba(16,132,126,0.35), transparent 70%)" }}
      />

      <div className="relative border-b border-surface/15" aria-hidden="true">
        <div className="marquee overflow-hidden py-3">
          <ul className="marquee-track flex w-max gap-10 text-xs font-semibold uppercase tracking-[0.18em] text-surface/60">
            {[...Array(2)].flatMap((_, k) =>
              ["Open for projects", "AI agents", "Automation", "Full-stack software", "UI/UX design", "Message me"].map((t) => (
                <li key={`${k}-${t}`} className="flex items-center gap-10">
                  {t}
                  <span className="text-accent">✦</span>
                </li>
              )),
            )}
          </ul>
        </div>
      </div>

      <div className="relative mx-auto max-w-[1200px] px-5 pt-16 sm:px-8 md:pt-24">
        <div className="relative mx-auto max-w-4xl text-center">
          <span
            aria-hidden="true"
            className="float-y absolute -left-2 top-2 hidden items-center gap-1.5 md:inline-flex lg:-left-24"
          >
            <Cursor className="-rotate-12 text-accent" />
            <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-surface">Wear Inspired</span>
          </span>
          <span
            aria-hidden="true"
            className="float-y absolute -right-2 top-40 hidden items-center gap-1.5 md:inline-flex lg:-right-24"
            style={{ animationDelay: "-2.5s" }}
          >
            <Cursor className="text-surface" />
            <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-ink">n8n</span>
          </span>

          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-surface/20 bg-surface/5 px-4 py-1.5 text-sm text-surface/85">
              <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
              Open for projects
              <span className="text-surface/40">—</span>
              Build with me
            </p>
            <h2
              className="font-display mt-6 font-bold leading-[1.04] tracking-[-0.035em]"
              style={{ fontSize: "clamp(2.2rem, 5.2vw, 4.2rem)" }}
            >
              <span className="block">From idea to production.</span>
              <span className="block bg-gradient-to-b from-surface to-surface/35 bg-clip-text text-transparent">
                Without the busywork.
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-surface/75">
              AI agents, automation, full-stack software and interfaces, built end to end for growing businesses.
            </p>
          </Reveal>
        </div>

        <CurvedGallery />
      </div>
    </section>
  );
}
