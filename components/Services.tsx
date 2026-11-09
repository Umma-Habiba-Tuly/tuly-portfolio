import Reveal from "@/components/Reveal";
import { PROCESS, SERVICES } from "@/data/content";

const ICON_PATHS = [
  // chat
  <path key="chat" d="M4 5h16v11H10l-5 4v-4H4z" />,
  // document + search (RAG)
  <g key="doc">
    <path d="M6 3h8l4 4v6M6 3v18h6" />
    <circle cx="16" cy="17" r="3" />
    <path d="m18.2 19.2 2.3 2.3" />
  </g>,
  // workflow nodes
  <g key="flow">
    <circle cx="5" cy="6" r="2" />
    <circle cx="19" cy="6" r="2" />
    <circle cx="12" cy="18" r="2" />
    <path d="M7 6h10M6 8l5 8M18 8l-5 8" />
  </g>,
  // layers (full-stack)
  <g key="layers">
    <path d="M12 3 3 8l9 5 9-5z" />
    <path d="m3 12 9 5 9-5M3 16l9 5 9-5" />
  </g>,
  // browser window (frontend)
  <g key="browser">
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <path d="M3 9h18M7 6.5h.01M10 6.5h.01" />
  </g>,
  // layout grid (UI/UX)
  <g key="grid">
    <rect x="3" y="3" width="8" height="8" rx="1" />
    <rect x="13" y="3" width="8" height="5" rx="1" />
    <rect x="13" y="10" width="8" height="11" rx="1" />
    <rect x="3" y="13" width="8" height="8" rx="1" />
  </g>,
];

export default function Services() {
  return (
    <section id="services" className="on-deep bg-ink text-surface">
      <div className="mx-auto max-w-[1200px] px-5 py-20 sm:px-8 md:py-28">
        <div className="mb-6 h-px w-16 bg-accent" />
        <h2 className="font-display text-4xl font-extrabold tracking-[-0.03em] sm:text-6xl">What I do</h2>
        <p className="mt-4 max-w-xl text-lg leading-snug text-surface/80">
          AI agents, automation, full-stack software and the interfaces people actually use.
        </p>

        <ul className="mt-12 grid gap-4 md:grid-cols-2">
          {SERVICES.map((s, i) => (
            <Reveal as="li" key={s.name} delay={(i % 2) * 90 + Math.floor(i / 2) * 60}>
              <a
                href="#contact"
                className="group flex items-center gap-4 rounded-2xl border border-surface/15 bg-surface/5 p-3 pr-5 transition duration-300 hover:-translate-y-0.5 hover:border-accent/70"
              >
                <span className="flex h-20 w-20 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-deep text-accent">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-9 w-9"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    {ICON_PATHS[i]}
                  </svg>
                </span>
                <span className="flex-1">
                  <span className="font-display block text-xl font-bold leading-tight">{s.name}</span>
                  <span className="mt-1 block text-sm leading-snug text-surface/75">{s.text}</span>
                </span>
                <span
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent text-base font-bold text-ink transition group-hover:translate-x-0.5"
                  aria-hidden="true"
                >
                  →
                </span>
              </a>
            </Reveal>
          ))}
        </ul>

        <div className="mt-16">
          <p className="text-lg font-semibold">How a project goes</p>
          <ol className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((p, i) => (
              <Reveal as="li" key={p.n} delay={i * 110} className="flex items-start gap-4">
                <span className="font-display flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-lg font-bold text-ink">
                  {p.n}
                </span>
                <p className="pt-1.5 leading-snug text-surface/90">{p.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
