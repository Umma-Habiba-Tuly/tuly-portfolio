import Image from "next/image";
import Mascot from "@/components/Mascot";
import { ICONS } from "@/components/icons";
import PhoneFrame from "@/components/PhoneFrame";
import Reveal from "@/components/Reveal";
import { SITE_CONFIG, WEAR_INSPIRED_POSTER, WEAR_INSPIRED_VIDEO } from "@/constants/site";
import { ABOUT, FEATURED_WORK } from "@/data/content";

const SKILLS = [
  { k: "AI and automation", v: "n8n, Make, LangChain, LlamaIndex, Qdrant, Pinecone, OpenAI, Anthropic" },
  { k: "Software", v: "Python, TypeScript, Next.js, React, Node.js, FastAPI, PostgreSQL, MySQL, Docker" },
  { k: "Design", v: "UI/UX design, Figma, Adobe XD, Photoshop, Illustrator" },
];

const FLOW = ["Webhook", "n8n", "Agent", "Reply"];

export default function About() {
  const links = [
    { k: "Email", href: `mailto:${SITE_CONFIG.email}` },
    { k: "GitHub", href: SITE_CONFIG.socials.find((s) => s.name === "GitHub")?.url ?? "#" },
    { k: "LinkedIn", href: SITE_CONFIG.socials.find((s) => s.name === "LinkedIn")?.url ?? "#" },
    { k: "Instagram", href: SITE_CONFIG.socials.find((s) => s.name === "Instagram")?.url ?? "#" },
    { k: "Facebook", href: SITE_CONFIG.socials.find((s) => s.name === "Facebook")?.url ?? "#" },
    { k: "WhatsApp", href: SITE_CONFIG.whatsappUrl },
  ];

  return (
    <section id="about" className="on-deep bg-ink text-surface">
      <div className="mx-auto max-w-[1200px] px-5 py-12 sm:px-8 md:py-14">
        <Reveal className="flex items-center gap-5">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent to-surface/40" />
          <h2 className="font-display text-center text-3xl font-bold tracking-tight sm:text-5xl">About me</h2>
          <span className="h-px flex-1 bg-gradient-to-l from-transparent to-surface/40" />
        </Reveal>

        <div className="mt-10 grid gap-3 lg:grid-cols-[21rem_1fr]">
          {/* left column */}
          <div className="flex flex-col gap-3">
            <Reveal className="relative h-52 overflow-hidden rounded-3xl bg-gradient-to-b from-deep to-primary/70">
              <Image
                src="/images/tuly/cheer.webp"
                alt="Illustrated avatar of Umma Habiba Tuly"
                fill
                sizes="704px"
                unoptimized
                className="object-contain object-bottom px-10 pt-6"
              />
              <span className="float-y absolute left-6 top-6 text-2xl text-surface" aria-hidden="true">
                ✦
              </span>
              <span className="float-y absolute right-8 top-4 text-lg text-accent" style={{ animationDelay: "-2s" }} aria-hidden="true">
                ✦
              </span>
            </Reveal>

            <Reveal delay={80} className="relative rounded-3xl bg-accent p-5 pt-6 text-ink">
              <span className="font-display absolute left-4 top-1 text-6xl font-extrabold leading-none" aria-hidden="true">
                “
              </span>
              <p className="relative text-xl font-medium">
                Hello, I&apos;m <span className="font-extrabold">Tuly</span>
              </p>
              <p className="relative mt-2 leading-snug">{ABOUT.statement}</p>
            </Reveal>

            <Reveal delay={140} className="rounded-3xl bg-deep p-5">
              <dl className="space-y-3 text-sm">
                <div>
                  <dt className="text-base font-bold">Education</dt>
                  <dd className="mt-1 flex justify-between gap-4 text-surface/75">
                    <span>BSc in Computer Science and Engineering</span>
                    <span className="shrink-0 font-bold text-surface">CGPA 3.70</span>
                  </dd>
                </div>
                {SKILLS.map((s) => (
                  <div key={s.k}>
                    <dt className="text-base font-bold">{s.k}</dt>
                    <dd className="mt-1 leading-snug text-surface/75">{s.v}</dd>
                  </div>
                ))}
                <div>
                  <dt className="text-base font-bold">Based in</dt>
                  <dd className="mt-1 text-surface/75">{SITE_CONFIG.location}</dd>
                </div>
              </dl>
            </Reveal>
          </div>

          {/* right column */}
          <div className="flex flex-col gap-3">
            <Reveal delay={100} className="relative flex flex-1 flex-col rounded-3xl bg-deep p-4 sm:p-5">
              <Mascot pose="notebook" mode="peek" className="bottom-full right-24 hidden w-28 sm:block" bubble="My work" />
              <div className="flex items-center justify-between gap-4">
                <h3 className="font-display text-2xl font-bold">Featured Work</h3>
                <a href="#work" className="text-sm font-semibold text-accent hover:underline">
                  View project ↗
                </a>
              </div>

              <div className="mt-3 grid flex-1 gap-2.5 sm:grid-cols-2 sm:grid-rows-[auto_1fr]">
                <div className="flex min-h-[6.5rem] items-center rounded-2xl bg-surface p-5 text-ink">
                  <p className="text-lg font-semibold leading-snug">
                    A support assistant that hands over to a person when it should.
                  </p>
                </div>

                <div className="flex min-h-[6.5rem] flex-col justify-center gap-3 rounded-2xl bg-accent p-5 text-ink">
                  <p className="text-sm font-semibold">How a message travels</p>
                  <ol className="flex flex-wrap items-center gap-1.5 text-sm font-semibold">
                    {FLOW.map((f, i) => (
                      <li key={f} className="flex items-center gap-1.5">
                        <span className="rounded-full bg-ink px-3 py-1 text-surface">{f}</span>
                        {i < FLOW.length - 1 && <span aria-hidden="true">→</span>}
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="flex min-h-[12rem] flex-col justify-between gap-4 rounded-2xl bg-accent p-5 text-ink">
                  <div>
                    <p className="text-sm font-semibold">{FEATURED_WORK.sector}</p>
                    <p className="font-display mt-1 text-3xl font-extrabold leading-tight">{FEATURED_WORK.name}</p>
                  </div>
                  <p className="flex flex-wrap gap-1.5 text-xs font-semibold">
                    {FEATURED_WORK.builtWith.split(", ").map((t) => (
                      <span key={t} className="rounded-full bg-surface px-2.5 py-1">
                        {t}
                      </span>
                    ))}
                  </p>
                </div>

                <div className="relative min-h-[12rem] overflow-hidden rounded-2xl bg-surface">
                  <div className="absolute left-1/2 top-5 w-[270px] origin-top -translate-x-1/2 scale-[0.6]">
                    <PhoneFrame videoSrc={WEAR_INSPIRED_VIDEO} poster={WEAR_INSPIRED_POSTER} />
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={160} className="flex flex-col items-center justify-between gap-4 rounded-3xl border border-surface/20 p-3 sm:flex-row sm:rounded-full sm:pl-6">
              <ul className="flex flex-wrap justify-center gap-2.5">
                {links.map((l) => (
                  <li key={l.k}>
                    <a
                      href={l.href}
                      aria-label={l.k}
                      className="flex h-11 w-11 items-center justify-center rounded-2xl bg-deep text-surface transition hover:-translate-y-0.5 hover:bg-accent hover:text-ink"
                    >
                      <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
                        {ICONS[l.k]}
                      </svg>
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href={SITE_CONFIG.whatsappUrl}
                className="inline-flex items-center gap-2 rounded-full bg-surface px-6 py-2.5 text-base font-semibold text-ink transition hover:bg-accent"
              >
                Message me <span aria-hidden="true">↗</span>
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
