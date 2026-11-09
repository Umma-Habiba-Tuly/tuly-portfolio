import Image from "next/image";
import Reveal from "@/components/Reveal";

function Cursor({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" className={`h-5 w-5 ${className}`} aria-hidden="true">
      <path d="M2 2 17 8.5 10 10.5 8 17.5z" fill="currentColor" />
    </svg>
  );
}

const CARDS = [
  {
    title: "Support assistants",
    sub: "Website, Messenger, Instagram",
    tone: "from-deep to-primary text-surface",
    r: "-12deg",
    y: "34px",
    art: (
      <g>
        <rect x="26" y="40" width="104" height="66" rx="22" fill="#B7E85A" />
        <path d="M52 104 40 128 78 106z" fill="#B7E85A" />
        <rect x="82" y="86" width="96" height="62" rx="22" fill="#EFFAF6" />
        <path d="M148 146 162 168 124 148z" fill="#EFFAF6" />
        <circle cx="62" cy="73" r="5" fill="#10201D" />
        <circle cx="80" cy="73" r="5" fill="#10201D" />
        <circle cx="98" cy="73" r="5" fill="#10201D" />
      </g>
    ),
  },
  {
    title: "Automation",
    sub: "n8n, APIs, webhooks",
    tone: "from-accent to-surface text-ink",
    r: "-6deg",
    y: "10px",
    art: (
      <g stroke="#10201D" strokeWidth="5" strokeLinecap="round">
        <path d="M44 56 156 56M44 56 100 146M156 56 100 146" fill="none" />
        <circle cx="44" cy="56" r="20" fill="#10847E" stroke="none" />
        <circle cx="156" cy="56" r="20" fill="#0E2E2B" stroke="none" />
        <circle cx="100" cy="146" r="22" fill="#EFFAF6" />
      </g>
    ),
  },
  {
    title: "AI agents and RAG",
    sub: "Agents, knowledge, SaaS",
    tone: "from-primary to-deep text-surface",
    r: "0deg",
    y: "-22px",
    center: true,
  },
  {
    title: "Full-stack software",
    sub: "Web apps, front to back",
    tone: "from-ink to-primary text-surface",
    r: "6deg",
    y: "10px",
    art: (
      <g>
        <path d="M100 30 28 68l72 38 72-38z" fill="#B7E85A" />
        <path d="m28 96 72 38 72-38" fill="none" stroke="#EFFAF6" strokeWidth="14" strokeLinejoin="round" />
        <path d="m28 128 72 38 72-38" fill="none" stroke="#10847E" strokeWidth="14" strokeLinejoin="round" />
      </g>
    ),
  },
  {
    title: "UI/UX design",
    sub: "Interfaces, dashboards",
    tone: "from-surface to-[#c9ece1] text-ink",
    r: "12deg",
    y: "34px",
    art: (
      <g>
        <rect x="26" y="30" width="70" height="70" rx="16" fill="#0E2E2B" />
        <rect x="106" y="30" width="68" height="40" rx="16" fill="#10847E" />
        <rect x="106" y="80" width="68" height="70" rx="16" fill="#B7E85A" />
        <rect x="26" y="110" width="70" height="40" rx="16" fill="#10201D" />
      </g>
    ),
  },
];

export default function Showcase() {
  return (
    <section id="showcase" className="on-deep starfield relative overflow-hidden bg-ink text-surface">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(60% 50% at 50% 100%, rgba(16,132,126,0.35), transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-[1200px] px-5 pt-20 sm:px-8 md:pt-28">
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

        <Reveal className="deck mt-16 md:mt-20" delay={150}>
          <ul className="-mx-5 flex snap-x gap-4 overflow-x-auto px-5 pb-10 md:mx-0 md:snap-none md:justify-center md:overflow-visible md:px-0 md:pb-24">
            {CARDS.map((c, i) => (
              <li
                key={c.title}
                className={`deck-card relative h-[21rem] w-[14.5rem] shrink-0 snap-center overflow-hidden rounded-[1.75rem] bg-gradient-to-b p-5 shadow-2xl md:-ml-9 md:first:ml-0 ${c.tone} ${c.center ? "md:z-20 md:scale-[1.07]" : ""}`}
                style={
                  {
                    "--r": c.r,
                    "--y": c.y,
                    "--d": `${i * 60}ms`,
                    zIndex: c.center ? 20 : 10 - Math.abs(i - 2),
                  } as React.CSSProperties
                }
              >
                <p className="font-display relative z-10 text-2xl font-bold leading-tight">{c.title}</p>
                <p className="relative z-10 mt-1 text-sm opacity-75">{c.sub}</p>

                {c.center ? (
                  <>
                    <div className="absolute inset-x-0 bottom-0 top-28 overflow-hidden">
                      <Image
                        src="/images/avatar.webp"
                        alt="Illustrated avatar of Umma Habiba Tuly"
                        fill
                        sizes="240px"
                        className="object-cover"
                        style={{ objectPosition: "80% 100%", transform: "scale(1.3)", transformOrigin: "80% 100%" }}
                      />
                    </div>
                    <a
                      href="#contact"
                      className="absolute -bottom-0 left-4 right-4 z-10 mb-4 inline-flex items-center justify-between gap-3 rounded-full bg-surface py-1.5 pl-5 pr-1.5 text-sm font-semibold text-ink shadow-lg"
                    >
                      Get started
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-ink" aria-hidden="true">
                        ↗
                      </span>
                    </a>
                  </>
                ) : (
                  <svg viewBox="0 0 200 200" className="absolute -bottom-3 left-1/2 h-48 w-48 -translate-x-1/2" aria-hidden="true">
                    {c.art}
                  </svg>
                )}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
