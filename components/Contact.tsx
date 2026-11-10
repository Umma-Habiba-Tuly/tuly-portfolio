import { ICONS } from "@/components/icons";
import Reveal from "@/components/Reveal";
import { SITE_CONFIG } from "@/constants/site";

export default function Contact() {
  const links = [
    { k: "Email", href: `mailto:${SITE_CONFIG.email}` },
    { k: "WhatsApp", href: SITE_CONFIG.whatsappUrl },
    ...SITE_CONFIG.socials.map((s) => ({ k: s.name, href: s.url })),
  ];

  return (
    <section id="contact" className="on-deep bg-deep text-surface">
      <div className="mx-auto max-w-[1200px] px-5 pb-10 pt-20 text-center sm:px-8 md:pt-28">
        <div className="mx-auto mb-6 h-px w-16 bg-accent" />
        <h2
          className="font-display mx-auto max-w-3xl font-extrabold leading-[1.02] tracking-[-0.03em]"
          style={{ fontSize: "clamp(2.4rem, 6.5vw, 4.75rem)" }}
        >
          Got a task your team <span className="text-accent">hates doing?</span>
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-lg text-surface/80">
          Message me what it is. I reply {SITE_CONFIG.replyTime?.toLowerCase()}.
        </p>

        <div className="mt-8 flex justify-center">
          <a href={SITE_CONFIG.whatsappUrl} className="btn btn-accent !rounded-full">
            Message me on WhatsApp
          </a>
        </div>

        <Reveal className="mt-20">
          <p className="text-2xl font-semibold">Contact me</p>
          <ul className="mx-auto mt-6 flex max-w-3xl flex-wrap items-start justify-center gap-x-2 gap-y-5 rounded-[2rem] border border-surface/20 bg-surface/5 px-4 py-6 sm:rounded-full sm:px-10">
            {links.map((l) => (
              <li key={l.k}>
                <a href={l.href} className="group flex w-24 flex-col items-center gap-2" aria-label={l.k}>
                  <span className="flex h-14 w-14 items-center justify-center rounded-full border border-surface/25 text-surface transition duration-300 group-hover:-translate-y-1 group-hover:border-accent group-hover:bg-accent group-hover:text-ink">
                    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
                      {ICONS[l.k]}
                    </svg>
                  </span>
                  <span className="text-xs text-surface/65 transition group-hover:text-accent">{l.k}</span>
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-surface/65">
            {SITE_CONFIG.email} · {SITE_CONFIG.whatsappNumber}
          </p>
        </Reveal>

        <footer className="mt-16 flex flex-col items-center justify-between gap-2 border-t border-surface/15 pt-6 text-sm text-surface/60 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {SITE_CONFIG.name} · {SITE_CONFIG.company}
          </p>
          <p>{SITE_CONFIG.location}</p>
        </footer>
      </div>
    </section>
  );
}
