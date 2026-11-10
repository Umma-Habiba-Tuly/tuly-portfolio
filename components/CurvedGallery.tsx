"use client";

import Image from "next/image";
import { useRef, useState, type ReactNode } from "react";
import Reveal from "@/components/Reveal";

type Card = { title: string; sub: string; tone: string; art?: ReactNode; center?: boolean };

const CARDS: Card[] = [
  {
    title: "Support assistants",
    sub: "Website, Messenger, Instagram",
    tone: "from-deep to-primary text-surface",
    art: (
      <g>
        <rect x="26" y="40" width="104" height="66" rx="22" fill="#B7E85A" />
        <path d="M52 104 40 128 78 106z" fill="#B7E85A" />
        <rect x="82" y="86" width="96" height="62" rx="22" fill="#EFFAF6" />
        <path d="M148 146 162 168 124 148z" fill="#EFFAF6" />
        <circle cx="62" cy="73" r="5" fill="#10201D" />
        <circle cx="80" cy="73" r="5" fill="#10201D" />
        <circle cx="98" cy="73" r="5" fill="#10201D" />
      </g>
    ),
  },
  {
    title: "Automation",
    sub: "n8n, APIs, webhooks",
    tone: "from-accent to-surface text-ink",
    art: (
      <g stroke="#10201D" strokeWidth="5" strokeLinecap="round">
        <path d="M44 56 156 56M44 56 100 146M156 56 100 146" fill="none" />
        <circle cx="44" cy="56" r="20" fill="#10847E" stroke="none" />
        <circle cx="156" cy="56" r="20" fill="#0E2E2B" stroke="none" />
        <circle cx="100" cy="146" r="22" fill="#EFFAF6" />
      </g>
    ),
  },
  { title: "AI agents and RAG", sub: "Agents, knowledge, SaaS", tone: "from-primary to-deep text-surface", center: true },
  {
    title: "Full-stack software",
    sub: "Web apps, front to back",
    tone: "from-ink to-primary text-surface",
    art: (
      <g>
        <path d="M100 30 28 68l72 38 72-38z" fill="#B7E85A" />
        <path d="m28 96 72 38 72-38" fill="none" stroke="#EFFAF6" strokeWidth="14" strokeLinejoin="round" />
        <path d="m28 128 72 38 72-38" fill="none" stroke="#10847E" strokeWidth="14" strokeLinejoin="round" />
      </g>
    ),
  },
  {
    title: "UI/UX design",
    sub: "Interfaces, dashboards",
    tone: "from-surface to-[#c9ece1] text-ink",
    art: (
      <g>
        <rect x="26" y="30" width="70" height="70" rx="16" fill="#0E2E2B" />
        <rect x="106" y="30" width="68" height="40" rx="16" fill="#10847E" />
        <rect x="106" y="80" width="68" height="70" rx="16" fill="#B7E85A" />
        <rect x="26" y="110" width="70" height="40" rx="16" fill="#10201D" />
      </g>
    ),
  },
];

function Face({ c }: { c: Card }) {
  return (
    <div className={`relative h-full w-full overflow-hidden rounded-[1.75rem] bg-gradient-to-b p-5 shadow-2xl ${c.tone}`}>
      <p className="font-display relative z-10 text-2xl font-bold leading-tight">{c.title}</p>
      <p className="relative z-10 mt-1 text-sm opacity-75">{c.sub}</p>

      {c.center ? (
        <>
          <div className="absolute inset-x-0 bottom-0 top-28 overflow-hidden">
            <Image
              src="/images/avatar-person2.webp"
              alt="Illustrated avatar of Umma Habiba Tuly"
              fill
              sizes="240px"
              className="object-cover"
              style={{ objectPosition: "80% 100%", transform: "scale(1.3)", transformOrigin: "80% 100%" }}
            />
          </div>
          <a
            href="#contact"
            className="absolute inset-x-4 bottom-4 z-10 inline-flex items-center justify-between gap-3 rounded-full bg-surface py-1.5 pl-5 pr-1.5 text-sm font-semibold text-ink shadow-lg"
          >
            Get started
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-ink" aria-hidden="true">
              ↗
            </span>
          </a>
        </>
      ) : (
        <svg viewBox="0 0 200 200" className="absolute -bottom-3 left-1/2 h-48 w-48 -translate-x-1/2" aria-hidden="true">
          {c.art}
        </svg>
      )}
    </div>
  );
}

export default function CurvedGallery() {
  const stage = useRef<HTMLDivElement | null>(null);
  const [tilt, setTilt] = useState(0);

  const onMove = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse") return;
    const r = stage.current?.getBoundingClientRect();
    if (!r) return;
    setTilt(((e.clientX - r.left) / r.width - 0.5) * 14);
  };

  return (
    <Reveal className="mt-14 md:mt-20" delay={150}>
      {/* desktop: curved 3D gallery */}
      <div
        ref={stage}
        onPointerMove={onMove}
        onPointerLeave={() => setTilt(0)}
        className="relative hidden h-[30rem] md:block"
        style={{ perspective: "1500px" }}
      >
        <div
          className="absolute inset-0 transition-transform duration-500 ease-out"
          style={{ transformStyle: "preserve-3d", transform: `rotateY(${tilt}deg)` }}
        >
          {CARDS.map((c, i) => {
            const p = i - 2;
            const z = -(2 - Math.abs(p)) * 130;
            return (
              <div
                key={c.title}
                className="absolute left-1/2 top-1/2"
                style={{
                  width: "15rem",
                  height: "22rem",
                  marginTop: "-11rem",
                  marginLeft: "-7.5rem",
                  transform: `translateX(${p * 212}px) translateZ(${z}px) rotateY(${-p * 32}deg)`,
                  transformStyle: "preserve-3d",
                  backfaceVisibility: "hidden",
                }}
              >
                <div className="h-full w-full transition-transform duration-300 ease-out hover:-translate-y-3 hover:scale-[1.04]">
                  <Face c={c} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* mobile: swipeable row */}
      <ul className="-mx-5 flex snap-x gap-4 overflow-x-auto px-5 pb-8 md:hidden">
        {CARDS.map((c) => (
          <li key={c.title} className="h-[21rem] w-[14.5rem] shrink-0 snap-center">
            <Face c={c} />
          </li>
        ))}
      </ul>
    </Reveal>
  );
}
