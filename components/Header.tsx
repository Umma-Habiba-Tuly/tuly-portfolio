import { NAV_ITEMS, SITE_CONFIG } from "@/constants/site";

function Mark() {
  return (
    <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-ink">
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5 text-accent"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M7 17 17 7M8 7h9v9" />
      </svg>
    </span>
  );
}

export default function Header() {
  return (
    <header className="on-deep sticky top-0 z-50 border-b border-surface/10 bg-deep/95 text-surface backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-3">
          <Mark />
          <span className="leading-tight">
            <span className="block text-sm font-semibold">{SITE_CONFIG.name}</span>
            <span className="label block text-[0.65rem] text-surface/60">{SITE_CONFIG.professionalTitle}</span>
          </span>
        </a>

        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href} className="label text-surface/75 transition hover:text-accent">
              {item.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="btn btn-accent hidden !py-2.5 md:inline-flex">
          Get in touch
        </a>

        <details className="group relative md:hidden">
          <summary className="label flex cursor-pointer list-none items-center gap-2 rounded-full border border-surface/30 px-4 py-2 text-surface [&::-webkit-details-marker]:hidden">
            Menu
          </summary>
          <div className="absolute right-0 top-12 w-56 rounded-2xl border border-surface/15 bg-deep p-3 shadow-xl">
            {NAV_ITEMS.map((item) => (
              <a key={item.href} href={item.href} className="label block rounded-lg px-3 py-3 text-surface/85 hover:bg-surface/10">
                {item.label}
              </a>
            ))}
          </div>
        </details>
      </div>
    </header>
  );
}
