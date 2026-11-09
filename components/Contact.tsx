import { SITE_CONFIG } from "@/constants/site";

export default function Contact() {
  const rows = [
    { k: "Email", v: SITE_CONFIG.email, href: `mailto:${SITE_CONFIG.email}` },
    { k: "WhatsApp", v: SITE_CONFIG.whatsappNumber, href: SITE_CONFIG.whatsappUrl },
    ...SITE_CONFIG.socials.map((s) => ({ k: s.name, v: s.url.replace(/^https?:\/\/(www\.)?/, ""), href: s.url })),
  ];

  return (
    <section id="contact" className="on-deep bg-deep text-surface">
      <div className="mx-auto max-w-[1200px] px-5 pb-8 pt-20 sm:px-8 md:pt-28">
        <p className="label border-t-2 border-surface/30 pt-5">Contact</p>
        <h2
          className="font-display mt-6 max-w-4xl font-semibold leading-[0.98] tracking-[-0.03em]"
          style={{ fontSize: "clamp(2.6rem, 8vw, 6.5rem)" }}
        >
          Got a task your team <span className="italic text-accent">hates doing?</span>
        </h2>
        <p className="mt-6 max-w-xl text-xl leading-snug">
          Message me what it is. I reply {SITE_CONFIG.replyTime?.toLowerCase()}.
        </p>

        <div className="mt-9 flex flex-wrap gap-3">
          <a href={SITE_CONFIG.whatsappUrl} className="btn btn-accent">
            DM on WhatsApp <span aria-hidden="true">→</span>
          </a>
          <a href={`mailto:${SITE_CONFIG.email}`} className="btn btn-outline-light">
            Send an email
          </a>
        </div>

        <ul className="mt-16 divide-y divide-surface/20 border-y-2 border-surface/30">
          {rows.map((r) => (
            <li key={r.k}>
              <a
                href={r.href}
                className="grid gap-1 py-4 transition hover:pl-2 sm:grid-cols-[10rem_1fr_auto] sm:items-center sm:gap-6"
              >
                <span className="label">{r.k}</span>
                <span className="break-all">{r.v}</span>
                <span aria-hidden="true" className="hidden sm:block">
                  ↗
                </span>
              </a>
            </li>
          ))}
        </ul>

        <footer className="mt-10 flex flex-col justify-between gap-2 text-sm sm:flex-row">
          <p>
            © {new Date().getFullYear()} {SITE_CONFIG.name} · {SITE_CONFIG.company}
          </p>
          <p>{SITE_CONFIG.location}</p>
        </footer>
      </div>
    </section>
  );
}
