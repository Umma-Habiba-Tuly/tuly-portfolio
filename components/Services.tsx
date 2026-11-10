import Image from "next/image";
import Mascot from "@/components/Mascot";
import Reveal from "@/components/Reveal";
import ServicesExplorer from "@/components/ServicesExplorer";
import { PROCESS } from "@/data/content";

export default function Services() {
  return (
    <section id="services" className="bg-surface text-ink">
      <div className="relative mx-auto max-w-[1200px] px-5 py-12 sm:px-8 md:py-16">
        <Mascot pose="desk" className="right-5 top-6 hidden w-32 sm:right-8 md:top-2 md:block md:w-52" bubble="Pick one" />
        <Reveal>
          <div className="mb-4 h-px w-16 bg-primary" />
          <h2 className="font-display text-4xl font-extrabold tracking-[-0.03em] sm:text-5xl">What I do</h2>
          <p className="mt-2 max-w-xl text-base leading-snug text-ink/75">
            AI agents, automation, full-stack software and the interfaces around them.
          </p>
        </Reveal>

        <ServicesExplorer />

        <div className="mt-10">
          <p className="text-lg font-semibold">How a project goes</p>
          <ol className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((p, i) => (
              <Reveal as="li" key={p.n} delay={i * 110} className="border-t-2 border-ink pt-4">
                <div className="relative h-[4.5rem] w-24">
                  <Image
                    src={`/images/tuly/${["b-think", "b-wink", "b-laugh", "b-cool"][i % 4]}.webp`}
                    alt=""
                    width={96}
                    height={108}
                    unoptimized
                    className="absolute left-0 top-0 h-[4.5rem] w-[4.5rem] object-contain drop-shadow-md"
                  />
                  {/* the number card she "holds" */}
                  <span
                    className="font-display absolute bottom-0 left-12 flex h-9 w-9 -rotate-6 items-center justify-center rounded-lg bg-deep text-xl font-extrabold text-accent shadow-lg ring-2 ring-surface"
                    aria-label={`Step ${p.n}`}
                  >
                    {p.n}
                  </span>
                </div>
                <p className="mt-3 max-w-[16rem] text-sm leading-snug">{p.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
