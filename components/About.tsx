import SectionHead from "@/components/SectionHead";
import { ABOUT } from "@/data/content";

export default function About() {
  return (
    <section id="about" className="bg-surface text-ink">
      <div className="mx-auto max-w-[1200px] px-5 py-20 sm:px-8 md:py-28">
        <SectionHead label="About" title={ABOUT.statement} />

        <div className="mt-12 grid gap-10 md:grid-cols-[13rem_1fr] md:gap-10">
          <div className="hidden md:block" />
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-5 text-lg leading-relaxed text-ink/85">
              {ABOUT.bio.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>

            <dl className="space-y-8">
              <div className="border-t border-ink/30 pt-4">
                <dt className="label">Tools</dt>
                <dd className="mono mt-2 leading-relaxed">{ABOUT.tools}</dd>
              </div>
              <div className="border-t border-ink/30 pt-4">
                <dt className="label">Works with</dt>
                <dd className="mt-2 leading-relaxed">{ABOUT.worksWith}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
