import Image from "next/image";
import Mascot from "@/components/Mascot";
import PhoneFrame from "@/components/PhoneFrame";
import Reveal from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";
import { WEAR_INSPIRED_POSTER, WEAR_INSPIRED_VIDEO } from "@/constants/site";
import { FEATURED_WORK as F, OTHER_WORK } from "@/data/content";


function Dot({ c = "bg-current" }: { c?: string }) {
  return <span className={`inline-block h-2 w-2 rounded-full ${c}`} aria-hidden="true" />;
}

const CARDS = [
  {
    span: "",
    look: "bg-gradient-to-br from-primary to-deep text-surface",
    panel: "bg-ink/35 ring-1 ring-surface/15",
    pill: "bg-surface/15 text-surface",
    visual: (
      <div className="w-full space-y-2 text-[0.72rem]">
        <div className="flex items-center gap-2 rounded-full bg-surface px-3 py-1.5 text-ink shadow">
          <svg viewBox="0 0 24 24" className="h-4 w-4 text-primary" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
            <circle cx="11" cy="11" r="6.5" />
            <path d="m16 16 4 4" />
          </svg>
          <span className="font-medium">How do I return an order?</span>
        </div>
        <div className="rounded-lg bg-surface/10 p-2 leading-snug">
          <p>Returns are accepted within 14 days.</p>
          <p className="mt-1.5 inline-flex items-center gap-1 rounded-full bg-accent px-2 py-0.5 text-[0.65rem] font-bold text-ink">
            returns-policy.pdf <span aria-hidden="true">↗</span>
          </p>
        </div>
      </div>
    ),
  },
  {
    span: "",
    look: "bg-accent text-ink",
    panel: "bg-ink/10 ring-1 ring-ink/10",
    pill: "bg-ink/10 text-ink",
    visual: (
      <div className="flex w-full items-center">
        <ol className="flex w-full flex-wrap items-center justify-center gap-1 text-[10px] font-bold">
          {["Web form", "n8n", "PostgreSQL", "Team"].map((t, k, arr) => (
            <li key={t} className="flex flex-1 items-center gap-1">
              <span className={`flex-1 rounded-lg px-1.5 py-1.5 text-center ${k === 1 ? "bg-ink text-accent" : "bg-surface text-ink"}`}>{t}</span>
              {k < arr.length - 1 ? <span aria-hidden="true">→</span> : null}
            </li>
          ))}
        </ol>
      </div>
    ),
  },
  {
    span: "",
    look: "bg-surface text-ink",
    panel: "bg-deep",
    pill: "bg-deep/10 text-deep",
    visual: (
      <div className="w-full overflow-hidden rounded-lg bg-surface/10 ring-1 ring-surface/20">
        <div className="flex items-center gap-1 border-b border-surface/15 px-2 py-1.5">
          <Dot c="bg-accent" />
          <Dot c="bg-surface/50" />
          <Dot c="bg-surface/50" />
        </div>
        <div className="grid grid-cols-3 gap-1.5 p-2">
          <span className="col-span-2 h-5 rounded-md bg-primary" />
          <span className="h-5 rounded-md bg-accent" />
          <span className="h-5 rounded-md bg-surface/25" />
          <span className="col-span-2 h-5 rounded-md bg-surface/15" />
        </div>
      </div>
    ),
  },
  {
    span: "",
    look: "bg-ink text-surface ring-1 ring-surface/15",
    panel: "bg-deep ring-1 ring-surface/10",
    pill: "bg-surface/10 text-surface",
    visual: (
      <div className="w-full space-y-2 text-[0.72rem]">
        <p className="ml-auto w-fit max-w-[85%] rounded-xl rounded-br-sm bg-surface px-2.5 py-1.5 text-ink">Double room on Friday?</p>
        <div className="flex items-end gap-2">
          <Image src="/images/tuly/b-smile.webp" alt="" width={72} height={80} unoptimized className="h-7 w-auto" />
          <p className="max-w-[85%] rounded-xl rounded-bl-sm bg-primary px-2.5 py-1.5">Yes, from $64 a night. Hold it for you?</p>
        </div>
      </div>
    ),
  },
];

export default function Work() {
  return (
    <section id="work" className="on-deep bg-deep text-surface">
      <div className="relative mx-auto max-w-[1200px] px-5 py-12 sm:px-8 md:py-14">
        <Mascot pose="sitLaptop" className="right-12 top-6 hidden w-40 md:block" ledge="teal" bubble="Real builds" />
        <Reveal className="pb-6">
          <p
            aria-hidden="true"
            className="echo-text font-display font-extrabold leading-[0.9] tracking-[-0.04em]"
            style={{ fontSize: "clamp(3.5rem, 11vw, 8.5rem)" }}
          >
            Work
          </p>
        </Reveal>
        <SectionHead
          tone="dark"
          title={
            <>
              One system in <span className="text-accent">production</span>,
              <br className="hidden md:block" /> a few smaller builds, and more on GitHub.
            </>
          }
        />

        <Reveal as="article" className="mt-8">
          <div className="grid gap-6 lg:grid-cols-[1.5fr_0.5fr] lg:gap-8">
            <div>
              <p className="label text-accent">
                {F.label} · {F.sector}
              </p>
              <h3 className="mt-3 font-display text-3xl font-extrabold leading-[1] tracking-[-0.03em] sm:text-4xl">{F.name}</h3>
              <p className="mt-2 text-lg font-medium leading-snug">{F.title}</p>
              <p className="mt-3 max-w-2xl text-[0.95rem] leading-relaxed text-surface/85">{F.summary}</p>

              <dl className="mt-4 grid gap-2 sm:grid-cols-2">
                {F.flow.map((row, n) => (
                  <div key={row.k} className="rounded-xl bg-surface/[0.07] p-3 ring-1 ring-surface/15">
                    <dt className="flex items-center gap-2 text-sm font-bold text-accent">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent text-[0.7rem] font-extrabold text-ink">
                        {n + 1}
                      </span>
                      {row.k}
                    </dt>
                    <dd className="mt-1 text-[0.78rem] leading-snug text-surface/85">{row.v}</dd>
                  </div>
                ))}
              </dl>

              <ul className="mt-3 flex flex-wrap items-center gap-1.5" aria-label="Built with">
                <li className="label mr-1 text-accent">Built with</li>
                {F.builtWith.split(", ").map((t) => (
                  <li key={t} className="rounded-full bg-surface/12 px-2.5 py-0.5 text-xs font-semibold">
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-center lg:justify-end">
              <div className="relative flex w-full justify-center">
                <div
                  aria-hidden="true"
                  className="fan fan-left hidden items-start justify-start rounded-[1.6rem] bg-gradient-to-br from-primary to-deep p-3.5 shadow-xl ring-1 ring-surface/15 md:flex"
                >
                  <span className="font-display text-sm font-bold leading-tight">Website chat</span>
                </div>
                <div
                  aria-hidden="true"
                  className="fan fan-right hidden items-start justify-end rounded-[1.6rem] bg-surface p-3.5 text-ink shadow-xl md:flex"
                >
                  <span className="font-display text-sm font-bold leading-tight">Instagram</span>
                </div>
                <div className="relative z-10">
                  <PhoneFrame size="sm" videoSrc={WEAR_INSPIRED_VIDEO} poster={WEAR_INSPIRED_POSTER} />
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-3 md:grid-cols-2">
          {OTHER_WORK.map((w, i) => {
            const card = CARDS[i % CARDS.length];
            return (
              <Reveal
                key={w.name}
                delay={i * 80}
                className={`group relative flex flex-col gap-3 overflow-hidden rounded-3xl p-4 transition duration-500 hover:-translate-y-1 sm:flex-row sm:items-stretch sm:gap-4 ${card.span} ${card.look}`}
              >
                <div className="flex min-w-0 flex-1 flex-col">
                  <div className="flex items-center justify-between text-xs font-semibold">
                    <span className="inline-flex items-center gap-2">
                      <span
                        className={`h-2 w-2 rounded-full ${w.live ? "bg-accent ring-4 ring-accent/30" : "border border-current"}`}
                        aria-hidden="true"
                      />
                      {w.status}
                    </span>
                    <span className="font-display font-bold opacity-50">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="font-display mt-2 text-xl font-extrabold leading-tight tracking-[-0.02em]">{w.name}</h3>
                  <p className="mt-1 text-[0.82rem] leading-snug opacity-85">{w.text}</p>
                  <ul className="mt-auto flex flex-wrap gap-1 pt-3" aria-label="Built with">
                    {w.stack.split(", ").map((t) => (
                      <li key={t} className={`rounded-full px-2 py-0.5 text-[0.68rem] font-semibold ${card.pill}`}>
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={`flex shrink-0 items-center rounded-2xl p-3 sm:w-[46%] ${card.panel}`}>{card.visual}</div>
              </Reveal>
            );
          })}
        </div>
      </div>

      <div className="marquee mt-4 overflow-hidden bg-accent py-3 text-ink" aria-hidden="true">
        <ul className="marquee-track flex w-max gap-8 text-sm font-bold uppercase tracking-[0.16em]">
          {[...Array(12)].map((_, i) => (
            <li key={i} className="flex items-center gap-8">
              Message me
              <span>✦</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
