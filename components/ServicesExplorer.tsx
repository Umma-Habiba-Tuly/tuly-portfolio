"use client";

import Image from "next/image";
import { useState } from "react";
import { SERVICES } from "@/data/content";

const BADGES = ["b-smile", "b-think", "b-wink", "b-cool", "b-laugh", "b-wow"];

const ICONS = [
  <path key="chat" d="M4 5h16v11H10l-5 4v-4H4z" />,
  <g key="doc">
    <path d="M6 3h8l4 4v6M6 3v18h6" />
    <circle cx="16" cy="17" r="3" />
    <path d="m18.2 19.2 2.3 2.3" />
  </g>,
  <g key="flow">
    <circle cx="5" cy="6" r="2" />
    <circle cx="19" cy="6" r="2" />
    <circle cx="12" cy="18" r="2" />
    <path d="M7 6h10M6 8l5 8M18 8l-5 8" />
  </g>,
  <g key="layers">
    <path d="M12 3 3 8l9 5 9-5z" />
    <path d="m3 12 9 5 9-5M3 16l9 5 9-5" />
  </g>,
  <g key="browser">
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <path d="M3 9h18M7 6.5h.01M10 6.5h.01" />
  </g>,
  <g key="grid">
    <rect x="3" y="3" width="8" height="8" rx="1" />
    <rect x="13" y="3" width="8" height="5" rx="1" />
    <rect x="13" y="10" width="8" height="11" rx="1" />
    <rect x="3" y="13" width="8" height="8" rx="1" />
  </g>,
];

export default function ServicesExplorer() {
  const [active, setActive] = useState(0);
  const s = SERVICES[active];

  return (
    <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_1.1fr] lg:gap-12">
      <div
        role="tablist"
        aria-label="Services"
        className="-mx-5 flex snap-x gap-2 overflow-x-auto px-5 pb-1 [scrollbar-width:none] lg:mx-0 lg:block lg:overflow-visible lg:border-t-2 lg:border-ink lg:px-0 lg:pb-0"
      >
        {SERVICES.map((item, i) => {
          const on = i === active;
          return (
            <button
              key={item.name}
              role="tab"
              id={`svc-tab-${i}`}
              aria-selected={on}
              aria-controls="svc-panel"
              tabIndex={on ? 0 : -1}
              onClick={() => setActive(i)}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              onKeyDown={(e) => {
                if (e.key === "ArrowDown") {
                  e.preventDefault();
                  setActive((i + 1) % SERVICES.length);
                  (document.getElementById(`svc-tab-${(i + 1) % SERVICES.length}`) as HTMLElement | null)?.focus();
                }
                if (e.key === "ArrowUp") {
                  e.preventDefault();
                  const n = (i - 1 + SERVICES.length) % SERVICES.length;
                  setActive(n);
                  (document.getElementById(`svc-tab-${n}`) as HTMLElement | null)?.focus();
                }
              }}
              className={`group shrink-0 snap-start whitespace-nowrap rounded-full border px-4 py-2 text-left transition-colors lg:flex lg:w-full lg:items-baseline lg:gap-5 lg:rounded-none lg:border-0 lg:border-b lg:border-ink/20 lg:bg-transparent lg:px-0 lg:py-3 ${on ? "border-ink bg-ink text-surface lg:text-ink" : "border-ink/25 text-ink/75"}`}
            >
              <span className={`font-display hidden w-8 text-base font-bold transition-colors lg:block ${on ? "text-primary" : "text-ink/35"}`}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <span
                className={`text-sm font-semibold transition-all duration-300 lg:font-display lg:flex-1 lg:text-[1.9rem] lg:font-extrabold lg:leading-tight lg:tracking-[-0.02em] ${
                  on ? "lg:translate-x-2 lg:text-ink" : "lg:text-ink/35 lg:group-hover:text-ink/60"
                }`}
              >
                {item.name}
              </span>
              <span
                aria-hidden="true"
                className={`hidden text-2xl transition-all duration-300 lg:block ${on ? "translate-x-0 text-primary opacity-100" : "-translate-x-2 opacity-0"}`}
              >
                →
              </span>
            </button>
          );
        })}
      </div>

      <div
        id="svc-panel"
        role="tabpanel"
        aria-labelledby={`svc-tab-${active}`}
        className="on-deep relative overflow-hidden rounded-3xl bg-deep p-6 text-surface sm:p-7 lg:sticky lg:top-24 lg:self-start"
      >
        <span
          aria-hidden="true"
          className="font-display pointer-events-none absolute -right-3 -top-8 select-none text-[11rem] font-extrabold leading-none text-surface/[0.05]"
        >
          {String(active + 1).padStart(2, "0")}
        </span>

        <div key={active} className="anim-rise relative" style={{ animationDuration: "0.5s" }}>
          <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-accent/60 text-accent">
            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              {ICONS[active]}
            </svg>
          </span>

          <h3 className="font-display mt-4 text-2xl font-extrabold tracking-[-0.02em] sm:text-3xl">{s.name}</h3>
          <p className="mt-2 max-w-md text-base leading-snug text-surface/85">{s.text}</p>

          <ul className="mt-4 space-y-2 text-[0.95rem]">
            {s.points.map((p) => (
              <li key={p} className="flex gap-3 text-surface/90">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                {p}
              </li>
            ))}
          </ul>

          <p className="mt-5 border-t border-surface/20 pt-4 text-sm text-surface/70">
            <span className="mr-3 font-semibold text-accent">Built with</span>
            {s.stack}
          </p>

          <div className="mt-5 flex items-end justify-between gap-4">
            <a href="#contact" className="btn btn-accent">
              Talk about this
            </a>
            <Image
              key={`b-${active}`}
              src={`/images/tuly/${BADGES[active % BADGES.length]}.webp`}
              alt=""
              width={120}
              height={135}
              unoptimized
              className="anim-pop -mb-2 -mr-2 h-20 w-auto drop-shadow-lg sm:-mr-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
