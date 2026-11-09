import SectionHead from "@/components/SectionHead";
import { PROCESS, SERVICES } from "@/data/content";

export default function Services() {
  return (
    <section id="services" className="bg-surface text-ink">
      <div className="mx-auto max-w-[1200px] px-5 py-20 sm:px-8 md:py-28">
        <SectionHead
          label="Services"
          title={
            <>
              I build <span className="text-primary">assistants</span> that answer your customers,{" "}
              <span className="text-primary">workflows</span> that move data between your tools, and{" "}
              <span className="text-primary">search</span> that finds the answer inside your own documents.
            </>
          }
        />

        <ul className="mt-14 border-t-2 border-ink">
          {SERVICES.map((s, i) => (
            <li
              key={s.name}
              className="grid gap-3 border-b border-ink/25 py-8 md:grid-cols-[4rem_1fr_1.2fr] md:items-baseline md:gap-8"
            >
              <span className="font-display text-lg font-bold text-primary">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="font-display text-3xl font-bold tracking-tight">{s.name}</h3>
              <p className="max-w-md leading-relaxed text-ink/80">{s.text}</p>
            </li>
          ))}
        </ul>

        <div className="mt-20">
          <p className="label">How a project goes</p>
          <ol className="mt-8 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((p) => (
              <li key={p.n} className="border-t-2 border-ink pt-5">
                <span className="font-display flex h-10 w-10 items-center justify-center bg-accent text-lg font-bold text-ink">
                  {p.n}
                </span>
                <p className="mt-5 max-w-[16rem] leading-snug">{p.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
