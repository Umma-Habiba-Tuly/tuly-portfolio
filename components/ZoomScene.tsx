"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type N = { id: string; x: number; y: number; w: number; label: string; tone?: "lime" | "teal" | "ink" };

// A sketch of the real Wear Inspired pipeline.
const NODES: N[] = [
  { id: "web", x: 150, y: 250, w: 170, label: "Website chat" },
  { id: "msg", x: 150, y: 400, w: 170, label: "Messenger" },
  { id: "ig", x: 150, y: 550, w: 170, label: "Instagram" },
  { id: "hook", x: 470, y: 400, w: 150, label: "Webhook", tone: "teal" },
  { id: "n8n", x: 720, y: 250, w: 130, label: "n8n", tone: "lime" },
  { id: "agent", x: 1030, y: 400, w: 160, label: "AI agent", tone: "lime" },
  { id: "qd", x: 1030, y: 170, w: 150, label: "Qdrant" },
  { id: "pg", x: 1280, y: 300, w: 170, label: "PostgreSQL" },
  { id: "gs", x: 1300, y: 520, w: 190, label: "Google Sheets" },
  { id: "rep", x: 1340, y: 620, w: 150, label: "Reply", tone: "teal" },
  { id: "human", x: 330, y: 620, w: 190, label: "Human handoff" },
];
const EDGES: [string, string][] = [
  ["web", "hook"], ["msg", "hook"], ["ig", "hook"], ["hook", "n8n"], ["n8n", "agent"],
  ["agent", "qd"], ["agent", "pg"], ["agent", "gs"], ["agent", "rep"], ["agent", "human"],
];

const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const ease = (t: number) => t * t * (3 - 2 * t);

export default function ZoomScene() {
  const wrap = useRef<HTMLElement | null>(null);
  const [p, setP] = useState(0);
  const [still, setStill] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setStill(true);
      setP(1);
      return;
    }
    let raf = 0;
    const update = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const el = wrap.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        const total = r.height - window.innerHeight;
        setP(clamp(-r.top / Math.max(total, 1)));
      });
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const e = ease(p);
  const avatarScale = 3.6 - 3.28 * e;            // face close-up -> small figure
  const mapScale = 2.6 - 1.6 * e;                 // map starts huge, settles
  const iris = 22 + 130 * ease(clamp((p - 0.08) / 0.8)); // circular opening, in vmin
  const caption = clamp((p - 0.72) / 0.2);
  const byId = Object.fromEntries(NODES.map((n) => [n.id, n]));

  return (
    <section
      ref={wrap}
      id="scene"
      aria-label="Zoom out from the avatar to the whole workflow"
      className={`on-deep relative bg-deep text-surface ${still ? "" : "h-[270vh]"}`}
    >
      <div className={`${still ? "relative h-[34rem]" : "sticky top-16 h-[calc(100vh-4rem)]"} overflow-hidden`}>
        {/* map, revealed through a growing circle */}
        <div
          className="absolute inset-0"
          style={{ clipPath: `circle(${iris}vmin at 50% 50%)`, WebkitClipPath: `circle(${iris}vmin at 50% 50%)` }}
        >
          <div className="absolute inset-0 bg-ink" />
          <svg
            viewBox="0 0 1600 900"
            preserveAspectRatio="xMidYMid slice"
            className="absolute inset-0 h-full w-full"
            style={{ transform: `scale(${mapScale})`, transformOrigin: "50% 52%" }}
            aria-hidden="true"
          >
            <defs>
              <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M50 0H0V50" fill="none" stroke="#EFFAF6" strokeOpacity="0.06" />
              </pattern>
              <radialGradient id="glow" cx="50%" cy="52%" r="55%">
                <stop offset="0" stopColor="#10847E" stopOpacity="0.45" />
                <stop offset="1" stopColor="#10847E" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="1600" height="900" fill="url(#grid)" />
            <rect width="1600" height="900" fill="url(#glow)" />
            {EDGES.map(([a, b]) => {
              const A = byId[a], B = byId[b];
              const x1 = A.x + A.w / 2, y1 = A.y, x2 = B.x - B.w / 2, y2 = B.y;
              const mx = (x1 + x2) / 2;
              return (
                <path
                  key={a + b}
                  d={`M${x1} ${y1} C${mx} ${y1} ${mx} ${y2} ${x2} ${y2}`}
                  fill="none"
                  stroke="#B7E85A"
                  strokeOpacity="0.55"
                  strokeWidth="2"
                  strokeDasharray="6 8"
                />
              );
            })}
            {NODES.map((n) => {
              const fill = n.tone === "lime" ? "#B7E85A" : n.tone === "teal" ? "#10847E" : "#0E2E2B";
              const text = n.tone === "lime" ? "#10201D" : "#EFFAF6";
              return (
                <g key={n.id} transform={`translate(${n.x - n.w / 2} ${n.y - 26})`}>
                  <rect width={n.w} height="52" rx="14" fill={fill} stroke="#EFFAF6" strokeOpacity={n.tone ? 0 : 0.28} />
                  <text x={n.w / 2} y="32" textAnchor="middle" fontSize="20" fontWeight="700" fill={text} fontFamily="inherit">
                    {n.label}
                  </text>
                </g>
              );
            })}
            {/* centre pad where the figure stands */}
            <circle cx="800" cy="590" r="92" fill="#0E2E2B" stroke="#B7E85A" strokeWidth="3" />
            <circle cx="800" cy="590" r="122" fill="none" stroke="#EFFAF6" strokeOpacity="0.25" strokeDasharray="4 10" />
            <circle cx="800" cy="590" r="60" fill="none" stroke="#10847E" strokeOpacity="0.8" strokeWidth="2" />
          </svg>
        </div>

        {/* rim of the "planet" at the start */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 rounded-full border-2 border-accent/60"
          style={{
            width: `${iris * 2}vmin`,
            height: `${iris * 2}vmin`,
            transform: "translate(-50%, -50%)",
            opacity: clamp(1 - (p - 0.1) / 0.35),
          }}
        />

        {/* avatar: face close-up -> small standing figure */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div
            className="relative"
            style={{
              height: "min(70vh, 34rem)",
              aspectRatio: "584 / 661",
              transform: `translateY(${(1 - e) * 0.2 * 100 + e * 27}%) scale(${avatarScale})`,
              transformOrigin: "52% 30%",
              filter: `drop-shadow(0 ${14 * e}px ${30 * e}px rgba(0,0,0,0.45))`,
            }}
          >
            <Image
              src="/images/avatar-jlime.webp"
              alt="Illustrated avatar of Umma Habiba Tuly"
              fill
              sizes="34rem"
              className="object-contain object-bottom"
            />
          </div>
        </div>

        <div
          className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink via-ink/85 to-transparent px-5 pb-6 pt-16 text-center sm:pb-9"
          style={{ opacity: caption, transform: `translateY(${(1 - caption) * 16}px)` }}
        >
          <p className="font-display mx-auto max-w-2xl text-2xl font-bold leading-tight tracking-tight sm:text-4xl">
            One message in. <span className="text-accent">The whole workflow</span> behind it.
          </p>
          <p className="mx-auto mt-2 max-w-md text-sm text-surface/70">
            A sketch of the support pipeline I built for Wear Inspired.
          </p>
        </div>
      </div>
    </section>
  );
}
