import { SITE_CONFIG } from "@/constants/site";

export default function Contact() {
  const rows = [
    { k: "Email", v: SITE_CONFIG.email, href: `mailto:${SITE_CONFIG.email}` },
    { k: "WhatsApp", v: SITE_CONFIG.whatsappNumber, href: SITE_CONFIG.whatsappUrl },
    ...SITE_CONFIG.socials.map((s) => ({ k: s.name, v: s.url.replace(/^https?:\/\/(www\.)?/, ""), href: s.url })),
  ];

  return (
    <section id="contact" className="on-deep bg-deep text-surface">
      <div className="mx-auto max-w-6xl px-5 pb-10 pt-20 sm:px-8 md:pt-28">
        <p className="label text-accent">04 — Contact</p>
        <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
          Tell me what&apos;s eating your team&apos;s time.
        </h2>
        <p className="mt-6 max-w-xl text-lg text-surface/80">
          Send a message about the task you&apos;d like to hand off. I reply {SITE_CONFIG.replyTime?.toLowerCase()}.
        </p>

        <div className="mt-9 flex flex-wrap gap-3">
          <a href={SITE_CONFIG.whatsappUrl} className="btn btn-accent">
            DM to automate <span aria-hidden="true">→</span>
          </a>
          <a href={`mailto:${SITE_CONFIG.email}`} className="btn btn-outline-light">
            Send an email
          </a>
        </div>

        <ul className="mt-16 divide-y divide-surface/15 border-y border-surface/15">
          {rows.map((r) => (
            <li key={r.k}>
              <a
                href={r.href}
                className="grid gap-1 py-4 transition hover:text-accent sm:grid-cols-[10rem_1fr_auto] sm:items-center sm:gap-6"
              >
                <span className="label text-surface/60">{r.k}</span>
                <span className="break-all">{r.v}</span>
                <span aria-hidden="true" className="hidden sm:block">
                  ↗
                </span>
              </a>
            </li>
          ))}
        </ul>

        <footer className="mt-12 flex flex-col justify-between gap-3 border-t border-surface/15 pt-6 text-sm text-surface/60 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {SITE_CONFIG.name} · {SITE_CONFIG.company}
          </p>
          <p>{SITE_CONFIG.location}</p>
        </footer>
      </div>
    </section>
  );
}
