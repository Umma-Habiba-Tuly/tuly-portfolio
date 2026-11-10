import { ICONS } from "@/components/icons";
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
      <div className="mx-auto max-w-[1200px] px-5 pb-10 pt-20 sm:px-8 md:pt-28">
        <Reveal className="flex items-center gap-5">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent to-surface/40" />
          <h2 className="font-display text-center text-3xl font-bold tracking-tight sm:text-5xl">Contact me</h2>
          <span className="h-px flex-1 bg-gradient-to-l from-transparent to-surface/40" />
        </Reveal>

        <div className="mt-12 grid gap-4 lg:grid-cols-[24rem_1fr]">
          <div className="flex flex-col gap-4">
            <Reveal className="relative rounded-3xl bg-accent p-7 pt-9 text-ink">
              <span className="font-display absolute left-5 top-2 text-6xl font-extrabold leading-none" aria-hidden="true">
                “
              </span>
              <h3 className="font-display relative text-3xl font-extrabold leading-[1.05] tracking-[-0.02em] sm:text-4xl">
                Got a task your team hates doing?
              </h3>
              <p className="relative mt-3 text-lg leading-snug">
                Message me what it is. I reply {SITE_CONFIG.replyTime?.toLowerCase()}.
              </p>
            </Reveal>

            <Reveal delay={90} className="rounded-3xl bg-ink p-6">
              <dl className="space-y-5 text-sm">
                {facts.map((f) => (
                  <div key={f.k} className="flex justify-between gap-6 border-b border-surface/15 pb-4 last:border-0 last:pb-0">
                    <dt className="shrink-0 whitespace-nowrap font-bold">{f.k}</dt>
                    <dd className="text-right text-surface/75">{f.v}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <Reveal delay={140} className="flex flex-col rounded-3xl bg-ink p-5 sm:p-7">
            <div className="flex items-center justify-between gap-4">
              <h3 className="font-display text-2xl font-bold">Find me here</h3>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-accent">
                <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
                Open for projects
              </span>
            </div>

            <ul className="mt-5 grid flex-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {tiles.map((t) => (
                <li key={t.k}>
                  <a
                    href={t.href}
                    className="group flex h-full min-h-[8.5rem] flex-col justify-between rounded-2xl bg-deep p-4 transition duration-300 hover:-translate-y-1 hover:bg-accent hover:text-ink"
                  >
                    <span className="flex items-start justify-between">
                      <svg viewBox="0 0 24 24" className="h-8 w-8 text-accent group-hover:text-ink" aria-hidden="true">
                        {ICONS[t.k]}
                      </svg>
                      <span aria-hidden="true" className="text-lg transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                        ↗
                      </span>
                    </span>
                    <span>
                      <span className="block text-lg font-bold">{t.k}</span>
                      <span className="mt-0.5 block truncate text-xs text-surface/65 group-hover:text-ink/75">{t.handle}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <a
              href={SITE_CONFIG.whatsappUrl}
              className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-surface px-7 py-4 text-base font-semibold text-ink transition hover:bg-accent"
            >
              Message me on WhatsApp <span aria-hidden="true">↗</span>
            </a>
          </Reveal>
        </div>

        <footer className="mt-14 flex flex-col items-center justify-between gap-2 border-t border-surface/15 pt-6 text-sm text-surface/60 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {SITE_CONFIG.name} · {SITE_CONFIG.company}
          </p>
          <p>{SITE_CONFIG.location}</p>
        </footer>
      </div>
    </section>
  );
}
