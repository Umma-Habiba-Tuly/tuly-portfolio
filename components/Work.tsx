import Image from "next/image";
import { ICONS } from "@/components/icons";
import Mascot from "@/components/Mascot";
import PhoneFrame from "@/components/PhoneFrame";
import Reveal from "@/components/Reveal";
import { SITE_CONFIG, WEAR_INSPIRED_POSTER, WEAR_INSPIRED_VIDEO } from "@/constants/site";
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
        <Mascot pose="sitLaptop" className="right-12 -top-3 hidden w-40 md:block" ledge="teal" bubble="Real builds" />
        <Reveal className="pb-6">
          <p
            aria-hidden="true"
            className="echo-text font-display font-extrabold leading-[0.9] tracking-[-0.04em]"
            style={{ fontSize: "clamp(3.5rem, 11vw, 8.5rem)" }}
          >
            Work
          </p>
        </Reveal>
        <div className="border-t-2 border-surface/40" aria-hidden="true" />

        <Reveal
          as="article"
          className="mt-6 overflow-hidden rounded-[2rem] bg-gradient-to-br from-ink to-deep ring-1 ring-surface/15 lg:grid lg:grid-cols-[1.4fr_1fr]"
        >
          <div className="p-6 sm:p-8">
            <p className="flex flex-wrap items-center gap-2 text-xs font-bold">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-ink">
                <span className="h-1.5 w-1.5 rounded-full bg-ink" aria-hidden="true" />
                {F.label}
              </span>
              <span className="rounded-full border border-surface/30 px-3 py-1 text-surface/85">{F.sector}</span>
            </p>
            <h3 className="font-display mt-4 text-4xl font-extrabold leading-none tracking-[-0.03em] sm:text-5xl">{F.name}</h3>
            <p className="mt-2 text-lg font-semibold leading-snug text-accent">{F.title}</p>
            <p className="mt-3 max-w-2xl text-[0.92rem] leading-relaxed text-surface/80">{F.summary}</p>

            <ol className="mt-7 grid gap-x-4 gap-y-5 sm:grid-cols-2 xl:grid-cols-4">
              {F.flow.map((row, n) => (
                <li key={row.k} className="relative border-t border-surface/25 pt-4">
                  <span className="absolute -top-3 left-0 flex h-6 w-6 items-center justify-center rounded-full bg-accent text-xs font-extrabold text-ink">
                    {n + 1}
                  </span>
                  <p className="text-sm font-bold">{row.k}</p>
                  <p className="mt-1 text-[0.76rem] leading-snug text-surface/70">{row.v}</p>
                </li>
              ))}
            </ol>

            <ul className="mt-6 flex flex-wrap items-center gap-1.5" aria-label="Built with">
              {F.builtWith.split(", ").map((t) => (
                <li key={t} className="rounded-full bg-surface/10 px-2.5 py-1 text-xs font-semibold ring-1 ring-surface/15">
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative min-h-[15rem] overflow-hidden bg-gradient-to-br from-primary to-deep sm:min-h-[20rem] lg:min-h-[34rem]">
            <div aria-hidden="true" className="dot-grid absolute inset-0 opacity-60" />
            <div
              aria-hidden="true"
              className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-accent/25 blur-3xl"
            />
            <div className="absolute inset-0 flex justify-center pt-6 sm:pt-8 lg:items-center lg:pt-0">
              <div
                aria-hidden="true"
                className="fan fan-left hidden flex-col items-start gap-2 rounded-[1.6rem] bg-gradient-to-br from-primary to-deep p-3.5 shadow-xl ring-1 ring-surface/20 md:flex"
              >
                <span className="flex items-center gap-1.5 font-display text-sm font-bold leading-tight">
                  <span className="h-2 w-2 rounded-full bg-accent" />
                  Website chat
                </span>
                <span className="w-[4.6rem] rounded-xl rounded-bl-sm bg-surface px-2 py-1.5 text-[0.6rem] font-medium leading-tight text-ink">
                  Is this scent long lasting?
                </span>
                <span className="w-[4.9rem] self-start rounded-xl rounded-br-sm bg-accent px-2 py-1.5 text-[0.6rem] font-semibold leading-tight text-ink">
                  Yes, 8 to 10 hours.
                </span>
                <span className="flex gap-1 rounded-full bg-surface/20 px-2.5 py-1.5">
                  <i className="h-1 w-1 rounded-full bg-surface" />
                  <i className="h-1 w-1 rounded-full bg-surface/70" />
                  <i className="h-1 w-1 rounded-full bg-surface/40" />
                </span>
              </div>
              <div
                aria-hidden="true"
                className="fan fan-right hidden flex-col items-end gap-2 rounded-[1.6rem] bg-surface p-3.5 text-ink shadow-xl md:flex"
              >
                <span className="flex items-center gap-1.5 font-display text-sm font-bold leading-tight">
                  Instagram
                  <span className="flex h-4 w-4 items-center justify-center rounded-[0.35rem] bg-gradient-to-tr from-[#f9a03f] via-[#e1306c] to-[#7b3fe4] text-white">
                    <svg viewBox="0 0 24 24" className="h-2.5 w-2.5">
                      {ICONS.Instagram}
                    </svg>
                  </span>
                </span>
                <span className="w-[4.4rem] rounded-xl rounded-br-sm bg-ink px-2 py-1.5 text-right text-[0.6rem] font-medium leading-tight text-surface">
                  Do you have Velvet in 12ml?
                </span>
                <span className="w-[4.4rem] rounded-xl rounded-bl-sm bg-deep/10 px-2 py-1.5 text-right text-[0.6rem] font-semibold leading-tight">
                  Yes, ৳400. Want it?
                </span>
                <span className="mt-auto rounded-full bg-gradient-to-r from-[#e1306c] to-[#7b3fe4] px-2.5 py-1 text-[0.55rem] font-bold text-white">
                  Replied ✓
                </span>
              </div>
              <div className="relative z-10">
                <PhoneFrame size="sm" videoSrc={WEAR_INSPIRED_VIDEO} poster={WEAR_INSPIRED_POSTER} />
              </div>
            </div>
          </div>
        </Reveal>

        <div className="-mx-5 mt-8 flex snap-x gap-3 overflow-x-auto px-5 pb-3 [scrollbar-width:none] md:mx-0 md:grid md:grid-cols-2 md:overflow-visible md:px-0 md:pb-0">
          {OTHER_WORK.map((w, i) => {
            const card = CARDS[i % CARDS.length];
            return (
              <Reveal
                key={w.name}
                delay={i * 80}
                className={`group relative flex w-[86%] shrink-0 snap-center flex-col gap-3 overflow-hidden rounded-3xl p-4 md:w-auto md:shrink transition duration-500 hover:-translate-y-1 sm:flex-row sm:items-stretch sm:gap-4 ${card.span} ${card.look}`}
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

      <div className="mt-0 bg-accent text-ink">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-2 px-5 py-2 sm:flex-row sm:px-8">
          <p className="font-display text-base font-extrabold tracking-[-0.01em] sm:text-lg">Have a task your team hates doing?</p>
          <a
            href={SITE_CONFIG.whatsappUrl}
            className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-1 text-[0.8rem] font-semibold text-accent transition hover:bg-deep"
          >
            Message me <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
