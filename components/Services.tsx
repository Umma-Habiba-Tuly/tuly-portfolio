import SectionHead from "@/components/SectionHead";
import { PROCESS, SERVICES } from "@/data/content";

export default function Services() {
  return (
    <section id="services" className="on-deep bg-deep text-surface">
      <div className="mx-auto max-w-[1200px] px-5 py-20 sm:px-8 md:py-28">
        <SectionHead
          label="Services"
          tone="dark"
          title={
            <>
              I build <span className="text-accent">assistants</span> that answer your customers,{" "}
              <span className="text-accent">workflows</span> that move data between your tools, and{" "}
              <span className="text-accent">search</span> that finds the answer inside your own documents.
            </>
          }
        />

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {SERVICES.map((s, i) => (
            <div key={s.name} className="border-t-2 border-primary bg-primary/15 p-6 sm:p-8">
              <span className="font-display text-lg font-bold text-accent">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="font-display mt-3 text-2xl font-bold tracking-tight">{s.name}</h3>
              <p className="mt-3 max-w-md leading-relaxed text-surface/90">{s.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 border-t-2 border-surface/30 pt-5">
          <p className="label">How a project goes</p>
          <ol className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((p) => (
              <li key={p.n}>
                <span className="font-display block text-6xl font-bold leading-none tracking-tighter text-accent">{p.n}</span>
                <p className="mt-4 max-w-[16rem] leading-snug">{p.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
