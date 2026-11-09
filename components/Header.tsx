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

export default function Header() {
  return (
    <header className="on-deep sticky top-0 z-50 border-b border-surface/20 bg-deep text-surface">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-3">
          <Mark />
          <span className="text-base font-semibold tracking-tight">{SITE_CONFIG.name}</span>
        </a>

        <nav aria-label="Main" className="hidden items-center gap-9 md:flex">
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href} className="label text-surface/80 transition hover:text-accent">
              {item.label}
            </a>
          ))}
          <a href={SITE_CONFIG.whatsappUrl} className="btn btn-accent !px-4 !py-2.5">
            DM me
          </a>
        </nav>

        <details className="relative md:hidden">
          <summary className="label flex cursor-pointer list-none rounded-md border border-surface/40 px-4 py-2 [&::-webkit-details-marker]:hidden">
            Menu
          </summary>
          <div className="absolute right-0 top-12 w-56 rounded-lg border border-surface/25 bg-deep p-2 shadow-xl">
            {NAV_ITEMS.map((item) => (
              <a key={item.href} href={item.href} className="label block rounded-md px-3 py-3 hover:bg-surface/10">
                {item.label}
              </a>
            ))}
          </div>
        </details>
      </div>
    </header>
  );
}
