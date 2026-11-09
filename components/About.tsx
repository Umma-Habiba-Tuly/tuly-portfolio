import Reveal from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";
import { ABOUT } from "@/data/content";

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-surface text-ink">
      <div className="mx-auto max-w-[1200px] px-5 py-20 sm:px-8 md:py-28">
        <Reveal className="mb-10">
          <h2
            className="font-display font-extrabold leading-[0.9] tracking-[-0.04em]"
            style={{ fontSize: "clamp(4rem, 15vw, 12rem)" }}
          >
            About <span className="text-primary">me</span>
          </h2>
        </Reveal>
        <SectionHead label="About" title={ABOUT.statement}  />

        <Reveal className="mt-12 grid gap-10 md:grid-cols-[13rem_1fr] md:gap-10" delay={120}>
          <div className="hidden md:block" />
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-5 text-lg leading-relaxed text-ink/85">
              {ABOUT.bio.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>

            <dl className="space-y-8">
              <div className="border-t border-ink/25 pt-4">
                <dt className="label">Tools</dt>
                <dd className="mono mt-2 leading-relaxed">{ABOUT.tools}</dd>
              </div>
              <div className="border-t border-ink/25 pt-4">
                <dt className="label">Works with</dt>
                <dd className="mt-2 leading-relaxed">{ABOUT.worksWith}</dd>
              </div>
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
