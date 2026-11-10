"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type ReactNode } from "react";

type Kind = "in" | "route" | "agent" | "data" | "out";
type N = { id: string; x: number; y: number; w: number; h?: number; label: string; sub: string; kind: Kind; icon: ReactNode };

const S = { fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" } as const;
const ICON = {
  chat: <g {...S}><path d="M4 5h16v11H10l-5 4v-4H4z" /></g>,
  send: <g {...S}><path d="M21 4 3 11l7 3 3 7z" /><path d="m10 14 11-10" /></g>,
  camera: <g {...S}><rect x="3" y="6" width="18" height="14" rx="3" /><circle cx="12" cy="13" r="3.5" /><path d="M8 6l1.5-2h5L16 6" /></g>,
  bolt: <g {...S}><path d="M13 3 5 14h6l-1 7 8-11h-6z" /></g>,
  flow: <g {...S}><circle cx="5" cy="6" r="2" /><circle cx="19" cy="6" r="2" /><circle cx="12" cy="18" r="2" /><path d="M7 6h10M6 8l5 8M18 8l-5 8" /></g>,
  brain: <g {...S}><path d="M12 3v18M7 6a3 3 0 0 0-3 3 3 3 0 0 0 1 5 3 3 0 0 0 3 4M17 6a3 3 0 0 1 3 3 3 3 0 0 1-1 5 3 3 0 0 1-3 4" /></g>,
  layers: <g {...S}><path d="M12 3 3 8l9 5 9-5z" /><path d="m3 12 9 5 9-5" /></g>,
  db: <g {...S}><ellipse cx="12" cy="6" rx="7" ry="3" /><path d="M5 6v12c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12c0 1.7 3.1 3 7 3s7-1.3 7-3" /></g>,
  sheet: <g {...S}><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M4 10h16M4 15h16M10 4v16" /></g>,
  reply: <g {...S}><path d="M10 8 4 13l6 5v-3.5c5 0 8 1 10 4-.5-5-3.5-8-10-8z" /></g>,
  user: <g {...S}><circle cx="12" cy="8" r="3.5" /><path d="M5 20c0-4 3-6 7-6s7 2 7 6" /></g>,
};

const NODES: N[] = [
  { id: "in", x: 190, y: 330, w: 280, h: 118, label: "Customer", sub: "Web, Messenger, IG", kind: "in", icon: ICON.chat },
  { id: "n8n", x: 590, y: 330, w: 240, h: 118, label: "n8n", sub: "Routes it", kind: "route", icon: ICON.flow },
  { id: "agent", x: 1000, y: 330, w: 300, h: 140, label: "AI agent", sub: "Decides what to do", kind: "agent", icon: ICON.brain },
  { id: "rep", x: 1400, y: 330, w: 230, h: 118, label: "Reply", sub: "Sent back", kind: "out", icon: ICON.reply },
  { id: "mem", x: 1000, y: 135, w: 420, h: 118, label: "Memory", sub: "Qdrant, PostgreSQL, Sheets", kind: "data", icon: ICON.layers },
  { id: "human", x: 1130, y: 555, w: 300, h: 118, label: "Handoff", sub: "To a person", kind: "out", icon: ICON.user },
];
const EDGES: { a: string; b: string; label?: string }[] = [
  { a: "in", b: "n8n", label: "message" },
  { a: "n8n", b: "agent", label: "context" },
  { a: "agent", b: "rep", label: "answer" },
  { a: "agent", b: "mem", label: "looks up" },
  { a: "agent", b: "human", label: "if unsure" },
];
const ZONES: { x: number; t: string }[] = [];

const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const ease = (t: number) => t * t * (3 - 2 * t);
const H = (n: N) => n.h ?? 64;

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
  const avatarScale = 2.3 - 1.98 * e;
  const mapScale = 2.2 - 1.2 * e;
  const spin = -34 * (1 - e);
  const iris = 34 + 118 * ease(clamp((p - 0.1) / 0.78));
  const caption = clamp((p - 0.74) / 0.2);
  const draw = clamp((p - 0.38) / 0.4);          // edges draw themselves
  const nodesIn = clamp((p - 0.3) / 0.3);
  const live = p > 0.8 || still;                  // message packets start flowing
  const byId = Object.fromEntries(NODES.map((n) => [n.id, n]));

  const path = (a: N, b: N) => {
    if (Math.abs(a.x - b.x) < 40) {
      const down = b.y > a.y;
      const y1 = a.y + (down ? 1 : -1) * H(a) / 2, y2 = b.y + (down ? -1 : 1) * H(b) / 2;
      return `M${a.x} ${y1} L${b.x} ${y2}`;
    }
    const x1 = a.x + a.w / 2, y1 = a.y, x2 = b.x - b.w / 2, y2 = b.y;
    return `M${x1} ${y1} L${x2} ${y2}`;
  };

  return (
    <section
      ref={wrap}
      id="scene"
      aria-label="Zoom out from the avatar to the whole workflow"
      className={`on-deep relative bg-deep text-surface ${still ? "" : "h-[270vh]"}`}
    >
      <div className={`${still ? "relative h-[34rem]" : "sticky top-16 h-[calc(100vh-4rem)]"} overflow-hidden`}>
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{ background: "radial-gradient(circle at 50% 50%, #1b5e57 0%, #0E2E2B 55%, #08201e 100%)" }}
        />

        <div
          className="absolute inset-0"
          style={{ clipPath: `circle(${iris}vmin at 50% 50%)`, WebkitClipPath: `circle(${iris}vmin at 50% 50%)` }}
        >
          <div className="absolute inset-0 bg-ink" />
          <svg
            viewBox="0 -45 1600 900"
            preserveAspectRatio="xMidYMid slice"
            className="absolute inset-0 h-full w-full"
            style={{ transform: `rotate(${spin}deg) scale(${mapScale})`, transformOrigin: "50% 52%" }}
            aria-hidden="true"
          >
            <defs>
              <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M50 0H0V50" fill="none" stroke="#EFFAF6" strokeOpacity="0.055" />
              </pattern>
              <radialGradient id="glow" cx="50%" cy="55%" r="55%">
                <stop offset="0" stopColor="#10847E" stopOpacity="0.45" />
                <stop offset="1" stopColor="#10847E" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="card" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#14423e" />
                <stop offset="1" stopColor="#0E2E2B" />
              </linearGradient>
              <filter id="soft" x="-30%" y="-30%" width="160%" height="160%">
                <feDropShadow dx="0" dy="8" stdDeviation="10" floodColor="#000" floodOpacity="0.35" />
              </filter>
            </defs>
            <rect width="1600" height="900" fill="url(#grid)" />
            <rect width="1600" height="900" fill="url(#glow)" />

            {/* column captions */}
            <g opacity={nodesIn}>
              {ZONES.map((z) => (
                <g key={z.t}>
                  <text x={z.x} y="112" textAnchor="middle" fontSize="15" fontWeight="700" letterSpacing="3" fill="#B7E85A" fillOpacity="0.85">
                    {z.t}
                  </text>
                  <line x1={z.x - 40} x2={z.x + 40} y1="126" y2="126" stroke="#B7E85A" strokeOpacity="0.35" />
                </g>
              ))}
            </g>

            {/* edges */}
            {EDGES.map(({ a, b, label }, i) => {
              const A = byId[a], B = byId[b];
              const d = path(A, B);
              const vert = Math.abs(A.x - B.x) < 40;
              const mx = vert ? A.x : (A.x + A.w / 2 + B.x - B.w / 2) / 2, my = vert ? (A.y + B.y) / 2 : (A.y + B.y) / 2 - 2;
              return (
                <g key={a + b}>
                  <path d={d} fill="none" stroke="#EFFAF6" strokeOpacity="0.12" strokeWidth="2" />
                  <path
                    d={d}
                    fill="none"
                    stroke="#B7E85A"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    pathLength={1}
                    strokeDasharray="1"
                    strokeDashoffset={1 - draw}
                    strokeOpacity="0.9"
                  />
                  {label && draw > 0.9 && (
                    <g transform={`translate(${mx} ${my})`}>
                      <rect x={-label.length * 5.4 - 14} y="-18" width={label.length * 10.8 + 28} height="34" rx="17" fill="#0E2E2B" stroke="#B7E85A" strokeOpacity="0.5" />
                      <text textAnchor="middle" y="5" fontSize="18" fontWeight="700" fill="#EFFAF6">
                        {label}
                      </text>
                    </g>
                  )}
                  {live &&
                    [0, 1].map((k) => (
                      <circle key={k} r="6" fill="#B7E85A">
                        <animateMotion dur={`${3.2 + (i % 3) * 0.6}s`} begin={`${(i * 0.45 + k * 1.6).toFixed(2)}s`} repeatCount="indefinite" path={d} />
                        <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.9;1" dur={`${3.2 + (i % 3) * 0.6}s`} begin={`${(i * 0.45 + k * 1.6).toFixed(2)}s`} repeatCount="indefinite" />
                      </circle>
                    ))}
                </g>
              );
            })}

            {/* nodes */}
            {NODES.map((n) => {
              const h = H(n);
              const k = h / 64;
              const lime = n.kind === "agent";
              const teal = n.kind === "out";
              const fill = lime ? "#B7E85A" : teal ? "#10847E" : "url(#card)";
              const fg = lime ? "#10201D" : "#EFFAF6";
              const sub = lime ? "#10201D" : "#EFFAF6";
              return (
                <g key={n.id} transform={`translate(${n.x - n.w / 2} ${n.y - h / 2})`} opacity={nodesIn} filter="url(#soft)">
                  {lime && live && (
                    <rect x="-8" y="-8" width={n.w + 16} height={h + 16} rx="30" fill="none" stroke="#B7E85A" strokeWidth="2">
                      <animate attributeName="opacity" values="0.7;0;0.7" dur="2.4s" repeatCount="indefinite" />
                      <animate attributeName="stroke-width" values="2;8;2" dur="2.4s" repeatCount="indefinite" />
                    </rect>
                  )}
                  <rect width={n.w} height={h} rx={20 + 6 * (k - 1)} fill={fill} stroke="#EFFAF6" strokeOpacity={lime || teal ? 0 : 0.22} />
                  <circle cx={22 + h * 0.27} cy={h / 2} r={h * 0.27} fill={lime ? "#10201D" : "#EFFAF6"} fillOpacity={lime ? 1 : 0.1} />
                  <g transform={`translate(${22 + h * 0.27 - 12 * (h * 0.27 / 21)} ${h / 2 - 12 * (h * 0.27 / 21)}) scale(${h * 0.27 / 21})`} color="#B7E85A">
                    {n.icon}
                  </g>
                  <text x={22 + h * 0.54 + 18} y={h / 2 - 2} fontSize={16 + h * 0.12} fontWeight="800" fill={fg}>
                    {n.label}
                  </text>
                  <text x={22 + h * 0.54 + 18} y={h / 2 + 26} fontSize={13 + h * 0.035} fontWeight="500" fill={sub} fillOpacity="0.78">
                    {n.sub}
                  </text>
                </g>
              );
            })}

            {/* centre pad where the figure stands */}
            <circle cx="800" cy="650" r="92" fill="#0E2E2B" stroke="#B7E85A" strokeWidth="3" />
            <circle cx="800" cy="650" r="122" fill="none" stroke="#EFFAF6" strokeOpacity="0.25" strokeDasharray="4 10" />
            <circle cx="800" cy="650" r="60" fill="none" stroke="#10847E" strokeOpacity="0.8" strokeWidth="2" />
          </svg>
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 rounded-full border-[3px] border-accent/70"
          style={{
            width: `${iris * 2}vmin`,
            height: `${iris * 2}vmin`,
            transform: "translate(-50%, -50%)",
            opacity: clamp(1 - (p - 0.12) / 0.45),
            boxShadow: "0 0 60px 6px rgba(183,232,90,0.35), inset 0 0 50px 4px rgba(183,232,90,0.18)",
          }}
        />

        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div
            className="relative"
            style={{
              height: "min(70vh, 34rem)",
              aspectRatio: "584 / 661",
              transform: `translateY(${(1 - e) * 0.2 * 100 + e * 37}%) scale(${avatarScale})`,
              transformOrigin: "52% 30%",
              filter: `drop-shadow(0 ${14 * e}px ${30 * e}px rgba(0,0,0,0.45))`,
            }}
          >
            <Image src="/images/avatar-jprim3.webp" alt="Illustrated avatar of Umma Habiba Tuly" fill sizes="34rem" className="object-contain object-bottom" />
          </div>
        </div>

        <div
          className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink via-ink/85 to-transparent px-5 pb-6 pt-16 text-center sm:pb-9"
          style={{ opacity: caption, transform: `translateY(${(1 - caption) * 16}px)` }}
        >
          <p className="font-display mx-auto max-w-2xl text-2xl font-bold leading-tight tracking-tight sm:text-4xl">
            One message in. <span className="text-accent">The whole workflow</span> behind it.
          </p>
          <p className="mx-auto mt-2 max-w-md text-sm text-surface/70">A sketch of the support pipeline I built for Wear Inspired.</p>
        </div>
      </div>
    </section>
  );
}
