import NavLinks from "@/components/NavLinks";
import { NAV_ITEMS, SITE_CONFIG } from "@/constants/site";

function Mark() {
  return (
    <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-ink">
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

export default function Header() {
  return (
    <header className="on-deep sticky top-0 z-50 border-b border-surface/15 bg-deep/95 text-surface backdrop-blur">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-3">
          <Mark />
          <span className="font-display text-lg font-bold tracking-tight">{SITE_CONFIG.name}</span>
        </a>

        <nav
          aria-label="Main"
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 rounded-full border border-surface/25 bg-surface/5 p-1.5 md:flex"
        >
          <NavLinks items={NAV_ITEMS} />
        </nav>

        <a
          href={SITE_CONFIG.whatsappUrl}
          className="hidden rounded-full border border-accent/70 px-5 py-2 text-sm font-semibold text-accent transition hover:bg-accent hover:text-ink md:inline-flex"
        >
          Message me
        </a>

        <details className="relative md:hidden">
          <summary className="flex cursor-pointer list-none rounded-full border border-surface/40 px-4 py-2 text-sm font-medium [&::-webkit-details-marker]:hidden">
            Menu
          </summary>
          <div className="absolute right-0 top-12 w-56 rounded-2xl border border-surface/25 bg-deep p-2 shadow-xl">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium hover:bg-surface/10"
              >
                <PillIcon />
                {item.label}
              </a>
            ))}
          </div>
        </details>
      </div>
    </header>
  );
}
