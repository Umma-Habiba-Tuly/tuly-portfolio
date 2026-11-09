import PhoneFrame from "@/components/PhoneFrame";
import SectionHead from "@/components/SectionHead";
import { WEAR_INSPIRED_POSTER, WEAR_INSPIRED_VIDEO } from "@/constants/site";
import { FEATURED_WORK as F, OTHER_WORK, WORK_INTRO } from "@/data/content";

export default function Work() {
  return (
    <section id="work" className="on-deep bg-deep text-surface">
      <div className="mx-auto max-w-[1200px] px-5 py-20 sm:px-8 md:py-28">
        <SectionHead label="Work" title={WORK_INTRO} tone="dark" />

        <article className="mt-14">
          <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:gap-16">
            <div>
              <p className="label text-accent">
                {F.label} · {F.sector}
              </p>
              <h3 className="mt-5 font-display text-6xl font-extrabold leading-[0.95] tracking-[-0.04em] sm:text-7xl">{F.name}</h3>
              <p className="mt-4 text-xl font-medium leading-snug sm:text-2xl">{F.title}</p>
              <p className="mt-6 max-w-xl text-lg leading-relaxed">{F.summary}</p>

              <dl className="mt-10 border-t border-surface/25">
                {F.flow.map((row) => (
                  <div key={row.k} className="grid gap-1 border-b border-surface/25 py-4 sm:grid-cols-[7.5rem_1fr] sm:gap-6">
                    <dt className="label pt-0.5 text-accent">{row.k}</dt>
                    <dd className="leading-relaxed">{row.v}</dd>
                  </div>
                ))}
              </dl>

              <p className="mt-6 text-sm leading-relaxed">
                <span className="label mr-3 text-accent">Built with</span>
                <span className="mono">{F.builtWith}</span>
              </p>
            </div>

            <div className="flex items-center justify-center lg:justify-end">
              <PhoneFrame videoSrc={WEAR_INSPIRED_VIDEO} poster={WEAR_INSPIRED_POSTER} />
            </div>
          </div>
        </article>

        <ul className="mt-20 border-t-2 border-surface/50">
          {OTHER_WORK.map((w) => (
            <li
              key={w.name}
              className="grid gap-3 border-b border-surface/25 py-7 md:grid-cols-[1fr_1.3fr_1fr_10rem] md:items-baseline md:gap-8"
            >
              <h3 className="font-display text-2xl font-bold tracking-tight">{w.name}</h3>
              <p className="leading-relaxed text-surface/85">{w.text}</p>
              <p className="mono text-sm text-surface/75">{w.stack}</p>
              <p className="label flex items-center gap-2 whitespace-nowrap md:justify-end">
                <span
                  className={`h-2 w-2 rounded-full ${w.live ? "bg-accent" : "border border-surface"}`}
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
