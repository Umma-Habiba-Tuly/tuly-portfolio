import Reveal from "@/components/Reveal";
import { SITE_CONFIG } from "@/constants/site";

function PillIcon() {
  return (
    <span
      className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-accent text-[0.7rem] font-bold leading-none text-ink"
      aria-hidden="true"
    >
      ↗
    </span>
  );
}

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
          <a href={SITE_CONFIG.whatsappUrl} className="btn btn-accent">
            DM on WhatsApp <span aria-hidden="true">→</span>
          </a>
        </div>

        <p className="mt-16 text-lg font-semibold">Contact me</p>
        <ul className="mx-auto mt-4 flex max-w-2xl flex-wrap justify-center gap-3 rounded-3xl border border-surface/20 bg-surface/5 p-4">
          {links.map((l, i) => (
            <Reveal as="li" key={l.k} delay={i * 70}>
              <a
                href={l.href}
                className="inline-flex items-center gap-2 rounded-full border border-surface/25 py-1.5 pl-2 pr-4 text-sm font-medium transition hover:border-accent hover:text-accent"
              >
                <PillIcon />
                {l.k}
              </a>
            </Reveal>
          ))}
        </ul>
        <p className="mt-5 text-sm text-surface/70">
          {SITE_CONFIG.email} · {SITE_CONFIG.whatsappNumber}
        </p>

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
