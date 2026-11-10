import Mascot from "@/components/Mascot";
import PhoneFrame from "@/components/PhoneFrame";
import Reveal from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";
import { WEAR_INSPIRED_POSTER, WEAR_INSPIRED_VIDEO } from "@/constants/site";
import { FEATURED_WORK as F, OTHER_WORK } from "@/data/content";

export default function Work() {
  return (
    <section id="work" className="on-deep bg-deep text-surface">
      <div className="relative mx-auto max-w-[1200px] px-5 py-20 sm:px-8 md:py-28">
        <Mascot className="right-8 top-24 hidden w-48 md:block" ledge="teal" bubble="Real builds" />
        <Reveal className="pb-12">
          <p
            aria-hidden="true"
            className="echo-text font-display font-extrabold leading-[0.9] tracking-[-0.04em]"
            style={{ fontSize: "clamp(4rem, 15vw, 12rem)" }}
          >
            Work
          </p>
        </Reveal>
        <SectionHead
          label="Work"
          tone="dark"
          title={
            <>
              One system in <span className="text-accent">production</span>, a few smaller builds, and more on
              GitHub.
            </>
          }
        />

        <Reveal as="article" className="mt-14">
          <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:gap-16">
            <div>
              <p className="label text-accent">
                {F.label} · {F.sector}
              </p>
              <h3 className="mt-5 font-display text-6xl font-extrabold leading-[0.95] tracking-[-0.04em] sm:text-7xl">{F.name}</h3>
              <p className="mt-4 text-xl font-medium leading-snug sm:text-2xl">{F.title}</p>
              <p className="mt-6 max-w-xl text-lg leading-relaxed">{F.summary}</p>

              <dl className="mt-10 border-t border-surface/25">
                {F.flow.map((row) => (
                  <div key={row.k} className="grid gap-1 border-b border-surface/25 py-4 sm:grid-cols-[7.5rem_1fr] sm:gap-6">
                    <dt className="label pt-0.5 text-accent">{row.k}</dt>
                    <dd className="leading-relaxed">{row.v}</dd>
                  </div>
                ))}
              </dl>

              <p className="mt-6 text-sm leading-relaxed">
                <span className="label mr-3 text-accent">Built with</span>
                <span className="mono">{F.builtWith}</span>
              </p>
            </div>

            <div className="flex items-center justify-center lg:justify-end">
              <div className="relative flex w-full justify-center">
                <div
                  aria-hidden="true"
                  className="fan fan-left hidden items-start justify-start rounded-[1.6rem] bg-gradient-to-br from-primary to-deep p-5 shadow-xl ring-1 ring-surface/15 md:flex"
                >
                  <span className="font-display text-lg font-bold leading-tight">Website chat</span>
                </div>
                <div
                  aria-hidden="true"
                  className="fan fan-right hidden items-start justify-end rounded-[1.6rem] bg-surface p-5 text-ink shadow-xl md:flex"
                >
                  <span className="font-display text-lg font-bold leading-tight">Instagram</span>
                </div>
                <div className="relative z-10">
                  <PhoneFrame videoSrc={WEAR_INSPIRED_VIDEO} poster={WEAR_INSPIRED_POSTER} />
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-20 grid gap-4 md:grid-cols-6">
          {OTHER_WORK.map((w, i) => {
            const looks = [
              "md:col-span-3 bg-gradient-to-br from-primary to-deep text-surface",
              "md:col-span-3 bg-accent text-ink",
              "md:col-span-2 bg-surface text-ink",
              "md:col-span-4 bg-ink text-surface ring-1 ring-surface/15",
            ];
            return (
              <Reveal
                key={w.name}
                delay={i * 80}
                className={`flex min-h-[15rem] flex-col justify-between rounded-[1.75rem] p-7 ${looks[i % looks.length]}`}
              >
                <div>
                  <p className="inline-flex items-center gap-2 text-sm font-semibold">
                    <span
                      className={`h-2 w-2 rounded-full ${w.live ? "bg-accent ring-2 ring-accent/40" : "border border-current"}`}
                      aria-hidden="true"
                    />
                    {w.status}
                  </p>
                  <h3 className="font-display mt-4 text-3xl font-extrabold leading-tight tracking-[-0.02em]">{w.name}</h3>
                  <p className="mt-3 max-w-md leading-snug opacity-85">{w.text}</p>
                </div>
                <p className="mt-6 text-sm font-medium opacity-75">{w.stack}</p>
              </Reveal>
            );
          })}
        </div>
      </div>

      <div className="marquee mt-4 overflow-hidden bg-accent py-3 text-ink" aria-hidden="true">
        <ul className="marquee-track flex w-max gap-8 text-sm font-bold uppercase tracking-[0.16em]">
          {[...Array(12)].map((_, i) => (
            <li key={i} className="flex items-center gap-8">
              Message me
              <span>✦</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
