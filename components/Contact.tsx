import Reveal from "@/components/Reveal";
import { SITE_CONFIG } from "@/constants/site";

const ICONS: Record<string, React.ReactNode> = {
  Email: (
    <g fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m4 7.5 8 5.5 8-5.5" />
    </g>
  ),
  WhatsApp: (
    <g fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 20l1.2-4.1A8.5 8.5 0 1 1 8.2 18.9z" />
      <path d="M9.2 8.8c-.5 1.6.5 3.7 2.2 5.2 1.6 1.4 3.4 2 4.5 1.4l.5-1.4-2-1-.9.8c-.9-.4-1.9-1.4-2.4-2.3l.7-.9-1-2z" />
    </g>
  ),
  LinkedIn: (
    <g fill="currentColor">
      <rect x="7" y="10" width="2.2" height="7" rx="0.4" />
      <circle cx="8.1" cy="7.4" r="1.3" />
      <path d="M11.5 17v-7h2.1v1c.6-.9 1.5-1.2 2.4-1.2 1.9 0 2.7 1.2 2.7 3.1V17h-2.2v-3.7c0-1-.4-1.6-1.3-1.6-.9 0-1.5.6-1.5 1.7V17z" />
      <rect x="3" y="3" width="18" height="18" rx="4" fill="none" stroke="currentColor" strokeWidth="1.6" />
    </g>
  ),
  GitHub: (
    <path
      fill="currentColor"
      transform="translate(2 2) scale(0.833)"
      d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
    />
  ),
  Instagram: (
    <g fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" />
    </g>
  ),
  Facebook: (
    <path
      fill="currentColor"
      d="M13.6 21v-7.2h2.4l.4-2.9h-2.8V9.1c0-.8.3-1.4 1.4-1.4h1.5V5.1c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2.1H8.2v2.9h2.4V21z"
    />
  ),
};

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
