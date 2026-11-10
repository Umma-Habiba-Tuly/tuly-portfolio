import Image from "next/image";
import { ICONS } from "@/components/icons";
import Mascot from "@/components/Mascot";
import Reveal from "@/components/Reveal";
import { SITE_CONFIG } from "@/constants/site";

export default function Contact() {
  const tiles = [
    { k: "Email", handle: SITE_CONFIG.email, href: `mailto:${SITE_CONFIG.email}` },
    { k: "WhatsApp", handle: SITE_CONFIG.whatsappNumber, href: SITE_CONFIG.whatsappUrl },
    ...SITE_CONFIG.socials.map((s) => ({ k: s.name, handle: s.handle, href: s.url })),
  ];

  const facts = [
    { k: "Reply time", v: SITE_CONFIG.replyTime },
    { k: "Based in", v: SITE_CONFIG.location },
    { k: "Open to", v: "AI, SaaS, software, automation and UI/UX projects" },
  ];

  return (
    <section id="contact" className="on-deep bg-deep text-surface">
      <div className="mx-auto max-w-[1200px] px-5 pb-6 pt-16 sm:px-8 md:pt-20">
        <Reveal className="flex items-center gap-5">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent to-surface/40" />
          <h2 className="font-display text-center text-3xl font-bold tracking-tight sm:text-5xl">Contact me</h2>
          <span className="h-px flex-1 bg-gradient-to-l from-transparent to-surface/40" />
        </Reveal>

        <div className="mt-10 grid gap-3 lg:grid-cols-[22rem_1fr]">
          <div className="flex flex-col gap-3">
            <Reveal className="relative rounded-3xl bg-accent p-5 pt-7 text-ink">
              <span className="font-display absolute left-4 top-1 text-5xl font-extrabold leading-none" aria-hidden="true">
                “
              </span>
              <h3 className="font-display relative text-2xl font-extrabold leading-[1.05] tracking-[-0.02em] sm:text-[1.7rem]">
                Got a task your team hates doing?
              </h3>
              <p className="relative mt-2 leading-snug">Message me what it is. I reply {SITE_CONFIG.replyTime?.toLowerCase()}.</p>
            </Reveal>

            <Reveal delay={90} className="rounded-3xl bg-ink px-5 py-3">
              <dl className="text-sm">
                {facts.map((f) => (
                  <div key={f.k} className="flex justify-between gap-5 border-b border-surface/15 py-2.5 last:border-0">
                    <dt className="shrink-0 whitespace-nowrap font-bold">{f.k}</dt>
                    <dd className="text-right text-surface/75">{f.v}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <Reveal delay={140} className="relative flex flex-col rounded-3xl bg-ink p-4 sm:p-5">
            <Mascot pose="sip" mode="peek" className="bottom-full right-6 w-28 sm:right-8 sm:w-36" bubble="Say hi" />
            <div className="flex items-center justify-between gap-4">
              <h3 className="font-display text-xl font-bold">Find me here</h3>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-accent">
                <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
                Open for projects
              </span>
            </div>

            <ul className="mt-3 grid flex-1 gap-2 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">
              {tiles.map((t) => (
                <li key={t.k}>
                  <a
                    href={t.href}
                    className="group flex h-full items-center gap-3 rounded-2xl bg-deep px-3.5 py-3 transition duration-300 hover:-translate-y-0.5 hover:bg-accent hover:text-ink"
                  >
                    <svg viewBox="0 0 24 24" className="h-7 w-7 shrink-0 text-accent group-hover:text-ink" aria-hidden="true">
                      {ICONS[t.k]}
                    </svg>
                    <span className="min-w-0 flex-1">
                      <span className="block font-bold leading-tight">{t.k}</span>
                      <span className="block truncate text-xs text-surface/65 group-hover:text-ink/75">{t.handle}</span>
                    </span>
                    <span aria-hidden="true" className="text-base transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      ↗
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <a
              href={SITE_CONFIG.whatsappUrl}
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-surface px-6 py-3 text-base font-semibold text-ink transition hover:bg-accent"
            >
              Message me on WhatsApp <span aria-hidden="true">↗</span>
            </a>
          </Reveal>
        </div>

        <footer className="mt-8 flex flex-col items-center justify-between gap-2 border-t border-surface/15 pt-5 text-sm text-surface/60 sm:flex-row">
          <p className="inline-flex items-center gap-2">
            <Image src="/images/tuly/b-cool.webp" alt="" width={72} height={80} unoptimized className="h-9 w-auto" />
            © {new Date().getFullYear()} {SITE_CONFIG.name} · {SITE_CONFIG.company}
          </p>
          <p>{SITE_CONFIG.location}</p>
        </footer>
      </div>
    </section>
  );
}
