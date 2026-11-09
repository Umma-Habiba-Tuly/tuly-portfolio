import PhoneFrame from "@/components/PhoneFrame";
import { WEAR_INSPIRED_POSTER, WEAR_INSPIRED_VIDEO } from "@/constants/site";
import { FEATURED_WORK as F, OTHER_WORK } from "@/data/content";

export default function Work() {
  return (
    <section id="work" className="bg-surface text-ink">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        <p className="label text-ink/70">01 — Selected work</p>
        <h2 className="mt-4 max-w-2xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
          Real systems, handling real customers.
        </h2>

        <article className="on-deep mt-12 overflow-hidden rounded-[2rem] bg-deep text-surface">
          <div className="grid gap-12 p-7 sm:p-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14 lg:p-14">
            <div>
              <p className="label flex flex-wrap items-center gap-x-3 gap-y-2 text-surface/70">
                <span className="inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-[0.65rem] text-ink">
                  {F.label}
                </span>
                {F.sector}
              </p>
              <h3 className="mt-5 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">{F.title}</h3>
              <p className="mt-4 max-w-xl text-surface/80">{F.summary}</p>

              <ol className="mt-9 grid gap-px overflow-hidden rounded-2xl bg-surface/15 sm:grid-cols-2">
                {F.pipeline.map((p) => (
                  <li key={p.step} className="bg-deep p-5">
                    <span className="label text-accent">{p.step}</span>
                    <h4 className="mt-2 font-semibold">{p.title}</h4>
                    <p className="mt-1 text-sm leading-relaxed text-surface/70">{p.text}</p>
                  </li>
                ))}
              </ol>

              <ul className="mt-8 space-y-3">
                {F.outcomes.map((o) => (
                  <li key={o} className="flex gap-3 text-surface/90">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                    {o}
                  </li>
                ))}
              </ul>

              <ul className="mt-8 flex flex-wrap gap-2">
                {F.stack.map((t) => (
                  <li key={t} className="label normal-case rounded-full border border-surface/30 px-3 py-1.5 text-[0.7rem] text-surface/85">
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col items-center justify-center gap-5">
              <PhoneFrame videoSrc={WEAR_INSPIRED_VIDEO} poster={WEAR_INSPIRED_POSTER} />
              <p className="label text-center text-surface/60">{F.channels.join(" · ")}</p>
            </div>
          </div>
        </article>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {OTHER_WORK.map((w) => (
            <article key={w.title} className="flex flex-col rounded-3xl border border-ink/15 bg-white/50 p-7">
              <div className="flex items-center justify-between gap-3">
                <span className="label text-ink/60">{w.sector}</span>
                <span
                  className={
                    w.live
                      ? "label rounded-full bg-accent px-3 py-1 text-[0.65rem] text-ink"
                      : "label rounded-full border border-ink/30 px-3 py-1 text-[0.65rem] text-ink/70"
                  }
                >
                  {w.status}
                </span>
              </div>
              <h3 className="mt-5 text-xl font-semibold tracking-tight">{w.title}</h3>
              <p className="mt-3 flex-1 text-ink/75">{w.text}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {w.stack.map((t) => (
                  <li key={t} className="label normal-case rounded-full bg-primary px-3 py-1.5 text-[0.7rem] text-surface">
                    {t}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
