import PhoneFrame from "@/components/PhoneFrame";
import SectionHead from "@/components/SectionHead";
import { WEAR_INSPIRED_POSTER, WEAR_INSPIRED_VIDEO } from "@/constants/site";
import { FEATURED_WORK as F, OTHER_WORK, WORK_INTRO } from "@/data/content";

export default function Work() {
  return (
    <section id="work" className="bg-surface text-ink">
      <div className="mx-auto max-w-[1200px] px-5 py-20 sm:px-8 md:py-28">
        <SectionHead label="Work" title={WORK_INTRO} />

        <article className="on-primary mt-14 bg-primary text-surface">
          <div className="grid gap-12 p-7 sm:p-10 lg:grid-cols-[1.3fr_0.7fr] lg:gap-16 lg:p-14">
            <div>
              <p className="label">
                {F.label} · {F.sector}
              </p>
              <h3 className="mt-5 text-6xl font-bold leading-[0.95] tracking-[-0.04em] sm:text-7xl">{F.name}</h3>
              <p className="mt-4 text-xl font-medium leading-snug sm:text-2xl">{F.title}</p>
              <p className="mt-6 max-w-xl text-lg leading-relaxed">{F.summary}</p>

              <dl className="mt-10 border-t border-surface/50">
                {F.flow.map((row) => (
                  <div key={row.k} className="grid gap-1 border-b border-surface/50 py-4 sm:grid-cols-[7.5rem_1fr] sm:gap-6">
                    <dt className="label pt-0.5">{row.k}</dt>
                    <dd className="leading-relaxed">{row.v}</dd>
                  </div>
                ))}
              </dl>

              <p className="mt-6 text-sm leading-relaxed">
                <span className="label mr-3">Built with</span>
                <span className="mono">{F.builtWith}</span>
              </p>
            </div>

            <div className="flex items-center justify-center lg:justify-end">
              <PhoneFrame videoSrc={WEAR_INSPIRED_VIDEO} poster={WEAR_INSPIRED_POSTER} />
            </div>
          </div>
        </article>

        <ul className="mt-14 border-t-2 border-ink">
          {OTHER_WORK.map((w) => (
            <li
              key={w.name}
              className="grid gap-3 border-b border-ink/25 py-7 md:grid-cols-[1fr_1.3fr_1fr_10rem] md:items-baseline md:gap-8"
            >
              <h3 className="text-2xl font-bold tracking-tight">{w.name}</h3>
              <p className="leading-relaxed text-ink/80">{w.text}</p>
              <p className="mono text-sm text-ink/70">{w.stack}</p>
              <p className="label flex items-center gap-2 whitespace-nowrap md:justify-end">
                <span
                  className={`h-2 w-2 rounded-full ${w.live ? "bg-primary" : "border border-ink"}`}
                  aria-hidden="true"
                />
                {w.status}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
