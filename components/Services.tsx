import Reveal from "@/components/Reveal";
import { PROCESS, SERVICES } from "@/data/content";

const ICON_PATHS = [
  <path key="chat" d="M4 5h16v11H10l-5 4v-4H4z" />,
  <g key="doc">
    <path d="M6 3h8l4 4v6M6 3v18h6" />
    <circle cx="16" cy="17" r="3" />
    <path d="m18.2 19.2 2.3 2.3" />
  </g>,
  <g key="flow">
    <circle cx="5" cy="6" r="2" />
    <circle cx="19" cy="6" r="2" />
    <circle cx="12" cy="18" r="2" />
    <path d="M7 6h10M6 8l5 8M18 8l-5 8" />
  </g>,
  <g key="layers">
    <path d="M12 3 3 8l9 5 9-5z" />
    <path d="m3 12 9 5 9-5M3 16l9 5 9-5" />
  </g>,
  <g key="browser">
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <path d="M3 9h18M7 6.5h.01M10 6.5h.01" />
  </g>,
  <g key="grid">
    <rect x="3" y="3" width="8" height="8" rx="1" />
    <rect x="13" y="3" width="8" height="5" rx="1" />
    <rect x="13" y="10" width="8" height="11" rx="1" />
    <rect x="3" y="13" width="8" height="8" rx="1" />
  </g>,
];

export default function Services() {
  return (
    <section id="services" className="bg-surface text-ink">
      <div className="mx-auto max-w-[1200px] px-5 py-20 sm:px-8 md:py-28">
        <Reveal>
          <div className="mb-6 h-px w-16 bg-primary" />
          <h2 className="font-display text-4xl font-extrabold tracking-[-0.03em] sm:text-6xl">What I do</h2>
          <p className="mt-4 max-w-xl text-lg leading-snug text-ink/75">
            AI agents, automation, full-stack software and the interfaces around them.
          </p>
        </Reveal>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal as="li" key={s.name} delay={(i % 3) * 90 + Math.floor(i / 3) * 60}>
              <a
                href="#contact"
                className="group flex h-full flex-col rounded-3xl border border-ink/15 bg-white/60 p-6 transition duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-lg"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-deep text-accent">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-7 w-7"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    {ICON_PATHS[i]}
                  </svg>
                </span>
                <span className="font-display mt-6 block text-2xl font-bold leading-tight">{s.name}</span>
                <span className="mt-2 block flex-1 leading-snug text-ink/75">{s.text}</span>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold">
                  Let&apos;s talk
                  <span
                    className="flex h-7 w-7 items-center justify-center rounded-full bg-ink text-accent transition group-hover:translate-x-0.5"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </span>
              </a>
            </Reveal>
          ))}
        </ul>

        <div className="mt-20">
          <p className="text-lg font-semibold">How a project goes</p>
          <ol className="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((p, i) => (
              <Reveal as="li" key={p.n} delay={i * 110} className="border-t-2 border-ink pt-5">
                <span className="font-display flex h-10 w-10 items-center justify-center rounded-full bg-deep text-lg font-bold text-accent">
                  {p.n}
                </span>
                <p className="mt-4 max-w-[16rem] leading-snug">{p.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
