import { ABOUT } from "@/data/content";

export default function About() {
  return (
    <section id="about" className="bg-surface text-ink">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 py-20 sm:px-8 md:py-28 lg:grid-cols-[1fr_1fr] lg:gap-20">
        <div>
          <p className="label text-ink/70">03 — About</p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Built to keep running.
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink/80">
            {ABOUT.bio.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <dl className="mt-10 divide-y divide-ink/15 border-y border-ink/15">
            {ABOUT.principles.map((p) => (
              <div key={p.title} className="grid gap-1 py-5 sm:grid-cols-[11rem_1fr] sm:gap-6">
                <dt className="font-semibold">{p.title}</dt>
                <dd className="text-ink/75">{p.text}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="space-y-12">
          <div>
            <p className="label text-ink/70">Milestones</p>
            <ol className="mt-5 space-y-5 border-l-2 border-primary pl-6">
              {ABOUT.timeline.map((t) => (
                <li key={t} className="relative text-ink/85">
                  <span className="absolute -left-[1.95rem] top-2 h-2.5 w-2.5 rounded-full bg-primary" aria-hidden="true" />
                  {t}
                </li>
              ))}
            </ol>
          </div>

          <div>
            <p className="label text-ink/70">Industries</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {ABOUT.industries.map((i) => (
                <li key={i} className="rounded-full border border-ink/25 px-4 py-2 text-sm">
                  {i}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="label text-ink/70">Tools I work with</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {ABOUT.stack.map((t) => (
                <li key={t} className="label normal-case rounded-full bg-deep px-3 py-1.5 text-[0.7rem] text-surface">
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
