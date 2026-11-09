import Reveal from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";
import { ABOUT } from "@/data/content";

export default function About() {
  return (
    <section id="about" className="on-deep relative overflow-hidden bg-ink text-surface">
      <span
        aria-hidden="true"
        className="orb hidden md:block"
        style={{ right: "6%", top: "9%", width: "7.5rem", height: "7.5rem", ["--orb-a" as string]: "#b7e85a", ["--orb-b" as string]: "#4c7a1d", ["--orb-glow" as string]: "rgba(183,232,90,0.25)" }}
      />
      <span
        aria-hidden="true"
        className="orb hidden md:block"
        style={{ right: "18%", top: "26%", width: "3.5rem", height: "3.5rem", animationDelay: "-3s", ["--orb-a" as string]: "#10847e", ["--orb-b" as string]: "#07302d", ["--orb-glow" as string]: "rgba(16,132,126,0.35)" }}
      />
      <span
        aria-hidden="true"
        className="orb hidden lg:block"
        style={{ left: "3%", top: "18%", width: "5rem", height: "5rem", animationDelay: "-5s", ["--orb-a" as string]: "#10847e", ["--orb-b" as string]: "#07302d", ["--orb-glow" as string]: "rgba(16,132,126,0.35)" }}
      />
      <div className="mx-auto max-w-[1200px] px-5 py-20 sm:px-8 md:py-28">
        <Reveal className="mb-10">
          <p
            aria-hidden="true"
            className="outline-fill font-display font-extrabold leading-[0.9] tracking-[-0.04em]"
            style={{ fontSize: "clamp(4rem, 15vw, 12rem)" }}
          >
            About me
          </p>
        </Reveal>
        <SectionHead label="About" title={ABOUT.statement} tone="dark" />

        <Reveal className="mt-12 grid gap-10 md:grid-cols-[13rem_1fr] md:gap-10" delay={120}>
          <div className="hidden md:block" />
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-5 text-lg leading-relaxed text-surface/85">
              {ABOUT.bio.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>

            <dl className="space-y-8">
              <div className="border-t border-surface/25 pt-4">
                <dt className="label">Tools</dt>
                <dd className="mono mt-2 leading-relaxed">{ABOUT.tools}</dd>
              </div>
              <div className="border-t border-surface/25 pt-4">
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
