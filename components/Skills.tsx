import Reveal from "@/components/Reveal";

import { GROUPS } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills-list" className="bg-surface text-ink md:hidden">
      <div className="mx-auto max-w-[1200px] px-5 py-12 sm:px-8 md:py-28">
        <Reveal className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <div className="mb-6 h-px w-16 bg-primary" />
            <h2
              className="font-display font-extrabold leading-[0.95] tracking-[-0.04em]"
              style={{ fontSize: "clamp(3rem, 9vw, 7rem)" }}
            >
              Skills<span className="text-primary">.</span>
            </h2>
          </div>
          <p className="max-w-sm text-lg leading-snug text-ink/75">
            Everything I have worked with, from my GitHub, my LinkedIn and my projects.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-3 md:grid-cols-6">
          {GROUPS.map((g, i) => (
            <Reveal
              key={g.n}
              delay={(i % 3) * 80}
              className={`flex flex-col rounded-[1.5rem] p-5 sm:p-8 ${g.span} ${g.look}`}
            >
              <div className="flex items-baseline justify-between gap-4">
                <span className="font-display text-lg font-bold opacity-70">{g.n}</span>
              </div>
              <h3 className="font-display mt-2 text-2xl font-extrabold leading-tight tracking-[-0.02em] sm:text-4xl">
                {g.title}
              </h3>
              <p className={`mt-1.5 text-sm leading-snug ${g.muted}`}>{g.blurb}</p>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {g.skills.map((s) => (
                  <li key={s} className="rounded-full bg-current/10 px-3 py-1 text-[0.82rem] font-semibold ring-1 ring-current/20">
                    {s}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}

          <Reveal
            delay={160}
            className="flex flex-col justify-between rounded-[1.75rem] border-2 border-dashed border-ink/30 p-7 sm:p-8 md:col-span-2"
          >
            <span className="font-display text-lg font-bold opacity-70">07</span>
            <div className="mt-4">
              <h3 className="font-display text-2xl font-extrabold leading-tight tracking-[-0.02em]">Away from the screen</h3>
              <p className="mt-2 text-lg font-medium">Acrylic painting</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
