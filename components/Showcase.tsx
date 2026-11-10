import CurvedGallery from "@/components/CurvedGallery";
import Mascot from "@/components/Mascot";
import Reveal from "@/components/Reveal";

export default function Showcase() {
  return (
    <section id="showcase" className="on-deep starfield relative overflow-hidden bg-ink text-surface">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(60% 50% at 50% 100%, rgba(16,132,126,0.35), transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-[1200px] px-5 pt-16 sm:px-8 md:pt-24">
        <Mascot className="right-8 top-24 hidden w-44 lg:block" ledge="dark" bubble="Hi, I'm Tuly" />
        <div className="relative mx-auto max-w-4xl text-center">
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-surface/20 bg-surface/5 px-4 py-1.5 text-sm text-surface/85">
              <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
              Open for projects
              <span className="text-surface/40">—</span>
              Build with me
            </p>
            <h2
              className="font-display mt-6 font-bold leading-[1.04] tracking-[-0.035em]"
              style={{ fontSize: "clamp(2.2rem, 5.2vw, 4.2rem)" }}
            >
              <span className="block">From idea to production.</span>
              <span className="block bg-gradient-to-b from-surface to-surface/35 bg-clip-text text-transparent">
                Without the busywork.
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-surface/75">
              AI agents, automation, full-stack software and interfaces, built end to end for growing businesses.
            </p>
          </Reveal>
        </div>

        <CurvedGallery />
      </div>
    </section>
  );
}
