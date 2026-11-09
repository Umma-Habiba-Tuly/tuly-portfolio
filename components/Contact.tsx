import Reveal from "@/components/Reveal";
import { SITE_CONFIG } from "@/constants/site";

export default function Contact() {
  const links = [
    { k: "Email", handle: SITE_CONFIG.email, href: `mailto:${SITE_CONFIG.email}` },
    { k: "WhatsApp", handle: SITE_CONFIG.whatsappNumber, href: SITE_CONFIG.whatsappUrl },
    ...SITE_CONFIG.socials.map((s) => ({ k: s.name, handle: s.handle, href: s.url })),
  ];

  return (
    <section id="contact" className="on-deep bg-deep text-surface">
      <div className="mx-auto max-w-[1200px] px-5 pb-10 pt-20 sm:px-8 md:pt-28">
        <div className="text-center">
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
              Message me on WhatsApp
            </a>
          </div>
        </div>

        <Reveal className="mt-20">
          <p className="text-lg font-semibold">Contact me</p>
          <ul className="mt-5 grid border-t-2 border-surface/30 sm:grid-cols-2 sm:gap-x-12">
            {links.map((l) => (
              <li key={l.k} className="border-b border-surface/20">
                <a
                  href={l.href}
                  className="group flex items-baseline justify-between gap-4 py-5 transition hover:text-accent"
                >
                  <span className="font-display text-2xl font-bold tracking-tight">{l.k}</span>
                  <span className="flex min-w-0 items-baseline gap-3 text-sm text-surface/65 transition group-hover:text-accent">
                    <span className="truncate">{l.handle}</span>
                    <span
                      aria-hidden="true"
                      className="text-base transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    >
                      ↗
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

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
