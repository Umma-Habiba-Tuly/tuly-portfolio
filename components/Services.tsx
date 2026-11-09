import Reveal from "@/components/Reveal";
import ServicesExplorer from "@/components/ServicesExplorer";
import { PROCESS } from "@/data/content";

export default function Services() {
  return (
    <section id="services" className="bg-surface text-ink">
      <div className="mx-auto max-w-[1200px] px-5 py-20 sm:px-8 md:py-28">
        <Reveal>
          <div className="mb-6 h-px w-16 bg-primary" />
          <h2 className="font-display text-4xl font-extrabold tracking-[-0.03em] sm:text-6xl">What I do</h2>
          <p className="mt-4 max-w-xl text-lg leading-snug text-ink/75">
            AI agents, automation, full-stack software and the interfaces around them.
          </p>
        </Reveal>

        <ServicesExplorer />

        <div className="mt-20">
          <p className="text-lg font-semibold">How a project goes</p>
          <ol className="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((p, i) => (
              <Reveal as="li" key={p.n} delay={i * 110} className="border-t-2 border-ink pt-5">
                <span className="font-display flex h-10 w-10 items-center justify-center rounded-full bg-deep text-lg font-bold text-accent">
                  {p.n}
                </span>
                <p className="mt-4 max-w-[16rem] leading-snug">{p.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
