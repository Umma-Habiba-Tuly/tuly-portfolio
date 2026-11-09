import SectionHead from "@/components/SectionHead";
import { PROCESS, SERVICES, SERVICES_STATEMENT } from "@/data/content";

export default function Services() {
  return (
    <section id="services" className="on-deep bg-deep text-surface">
      <div className="mx-auto max-w-[1200px] px-5 py-20 sm:px-8 md:py-28">
        <SectionHead label="Services" title={SERVICES_STATEMENT} tone="dark" />

        <div className="mt-14 grid gap-x-12 gap-y-10 md:grid-cols-2">
          {SERVICES.map((s) => (
            <div key={s.name} className="border-t border-surface/30 pt-5">
              <h3 className="font-display text-2xl font-semibold tracking-tight">{s.name}</h3>
              <p className="mt-3 max-w-md leading-relaxed text-surface/85">{s.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 border-t-2 border-surface/30 pt-5">
          <p className="label">How a project goes</p>
          <ol className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((p) => (
              <li key={p.n}>
                <span className="font-display block text-6xl font-semibold italic leading-none tracking-tighter text-accent">{p.n}</span>
                <p className="mt-4 max-w-[16rem] leading-snug">{p.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
