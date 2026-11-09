import { PROCESS, SERVICES } from "@/data/content";

export default function Services() {
  return (
    <section id="services" className="on-deep bg-deep text-surface">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        <p className="label text-accent">02 — Services</p>
        <h2 className="mt-4 max-w-2xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
          What I can build for you.
        </h2>

        <ul className="mt-12 border-t border-surface/20">
          {SERVICES.map((s, i) => (
            <li
              key={s.title}
              className="grid gap-4 border-b border-surface/20 py-8 md:grid-cols-[4rem_1fr_1.2fr_auto] md:items-baseline md:gap-8"
            >
              <span className="label text-accent">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="text-2xl font-semibold tracking-tight">{s.title}</h3>
              <p className="text-surface/75">{s.text}</p>
              <ul className="flex flex-wrap gap-2 md:justify-end">
                {s.tags.map((t) => (
                  <li key={t} className="label normal-case rounded-full border border-surface/30 px-3 py-1.5 text-[0.7rem] text-surface/85">
                    {t}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <div className="mt-20">
          <p className="label text-accent">How it works</p>
          <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((p) => (
              <li key={p.step} className="rounded-3xl bg-primary p-6 text-surface">
                <span className="label text-surface/80">{p.step}</span>
                <h3 className="mt-6 text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-surface/90">{p.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
