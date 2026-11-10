"use client";

import { useEffect, useState } from "react";

type Item = { label: string; href: string };

/** Navbar pills. The link for the section you are reading turns into a Lime pill. */
export default function NavLinks({ items }: { items: Item[] }) {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const ids = items.map((i) => i.href.replace("#", ""));
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    if (!els.length) return;

    const onScroll = () => {
      const line = window.innerHeight * 0.35;
      let current = "";
      for (const el of els) {
        const r = el.getBoundingClientRect();
        if (r.top <= line && r.bottom > line) current = el.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [items]);

  return (
    <>
      {items.map((item, i) => {
        const on = active === item.href.replace("#", "");
        return (
          <a
            key={item.href}
            href={item.href}
            aria-current={on ? "true" : undefined}
            style={{ animationDelay: `${150 + i * 90}ms` }}
            className={`anim-pop rounded-full px-5 py-2 text-sm font-medium transition ${
              on ? "bg-accent text-ink" : "hover:bg-surface/10 hover:text-accent"
            }`}
          >
            {item.label}
          </a>
        );
      })}
    </>
  );
}
