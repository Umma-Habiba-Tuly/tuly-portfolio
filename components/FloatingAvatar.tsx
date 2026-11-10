"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { SITE_CONFIG } from "@/constants/site";

/** The avatar's expression follows the section the visitor is reading. */
const MOOD: Record<string, string> = {
  top: "b-smile",
  skills: "b-cool",
  showcase: "b-wink",
  services: "b-think",
  work: "b-wow",
  about: "b-laugh",
};

/**
 * Phones only: a small avatar sits in the bottom corner and opens WhatsApp on tap.
 * It changes expression per section and steps aside on the contact section.
 */
export default function FloatingAvatar() {
  const [section, setSection] = useState("top");
  const [bubble, setBubble] = useState(false);

  useEffect(() => {
    const ids = [...Object.keys(MOOD), "contact"];
    const els = ids.map((id) => document.getElementById(id)).filter((e): e is HTMLElement => !!e);
    if (typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setSection(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const show = setTimeout(() => setBubble(true), 2500);
    const hide = setTimeout(() => setBubble(false), 8000);
    return () => {
      clearTimeout(show);
      clearTimeout(hide);
    };
  }, []);

  const hidden = section === "contact";
  const mood = MOOD[section] ?? "b-smile";

  return (
    <a
      href={SITE_CONFIG.whatsappUrl}
      aria-label="Message me on WhatsApp"
      className={`fixed bottom-4 right-4 z-40 flex items-center gap-2 transition duration-500 md:hidden ${
        hidden ? "pointer-events-none translate-y-6 opacity-0" : "opacity-100"
      }`}
    >
      <span
        aria-hidden="true"
        className={`rounded-full bg-ink px-3 py-1.5 text-xs font-bold text-accent shadow-lg ring-1 ring-accent/40 transition duration-500 ${
          bubble ? "translate-x-0 opacity-100" : "translate-x-3 opacity-0"
        }`}
      >
        Message me
      </span>
      <span className="floating-avatar relative flex h-14 w-14 items-center justify-center rounded-full bg-deep shadow-xl ring-2 ring-accent">
        {Object.values(MOOD).map((m) => (
          <Image
            key={m}
            src={`/images/tuly/${m}.webp`}
            alt=""
            width={112}
            height={126}
            unoptimized
            className="absolute inset-0 h-full w-full rounded-full object-cover object-top transition-opacity duration-300"
            style={{ opacity: m === mood ? 1 : 0 }}
          />
        ))}
      </span>
    </a>
  );
}
