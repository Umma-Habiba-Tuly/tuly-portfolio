import { PROCESS, SERVICES } from "@/data/content";

const ICON_PATHS = [
  // chat
  <path key="chat" d="M4 5h16v11H10l-5 4v-4H4z" />,
  // funnel
  <path key="funnel" d="M3 5h18l-7 8v6l-4-2v-4z" />,
  // document + search
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
];

export default function Services() {
  return (
    <section id="services" className="on-deep bg-ink text-surface">
      <div className="mx-auto max-w-[1200px] px-5 py-20 sm:px-8 md:py-28">
        <div className="mb-6 h-px w-16 bg-accent" />
        <h2 className="font-display text-4xl font-extrabold tracking-[-0.03em] sm:text-6xl">What I do</h2>
        <p className="mt-4 max-w-xl text-lg leading-snug text-surface/80">
          Assistants that answer your customers, workflows that move data between your tools, and search that finds
          the answer inside your own documents.
        </p>

        <ul className="mt-12 grid gap-4 md:grid-cols-2">
          {SERVICES.map((s, i) => (
            <li key={s.name}>
              <a
                href="#contact"
                className="group flex items-center gap-4 rounded-2xl border border-surface/15 bg-surface/5 p-3 pr-5 transition hover:border-accent/70"
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
            </li>
          ))}
        </ul>

        <div className="mt-16">
          <p className="text-lg font-semibold">How a project goes</p>
          <ol className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((p) => (
              <li key={p.n} className="flex items-start gap-4">
                <span className="font-display flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-lg font-bold text-ink">
                  {p.n}
                </span>
                <p className="pt-1.5 leading-snug text-surface/90">{p.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
