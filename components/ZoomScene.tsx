"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { GROUPS } from "@/data/skills";

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
  const avatarScale = 2.3 - 1.98 * e;
  const mapScale = 2.2 - 1.2 * e;
  const spin = -34 * (1 - e);
  const iris = 34 + 118 * ease(clamp((p - 0.1) / 0.78));
  const caption = clamp((p - 0.74) / 0.2);
  const draw = clamp((p - 0.3) / 0.45);

  return (
    <section
      ref={wrap}
      id="skills"
      aria-label="Zoom out from the avatar to the skills"
      className={`on-deep relative bg-deep text-surface ${still ? "" : "h-[270vh]"}`}
    >
      <div className={`${still ? "relative h-[34rem]" : "sticky top-16 h-[calc(100vh-4rem)]"} overflow-hidden`}>
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{ background: "radial-gradient(circle at 50% 50%, #1b5e57 0%, #0E2E2B 55%, #0a2421 100%)" }}
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
              <pattern id="grid2" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M50 0H0V50" fill="none" stroke="#EFFAF6" strokeOpacity="0.05" />
              </pattern>
              <radialGradient id="glow2" cx="50%" cy="55%" r="55%">
                <stop offset="0" stopColor="#10847E" stopOpacity="0.4" />
                <stop offset="1" stopColor="#10847E" stopOpacity="0" />
              </radialGradient>
              <filter id="soft2" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="10" stdDeviation="12" floodColor="#000" floodOpacity="0.4" />
              </filter>
            </defs>
            <rect x="0" y="-45" width="1600" height="900" fill="url(#grid2)" />

            {/* orbit stage: concentric rings, ticks and spokes */}
            <circle cx="800" cy="445" r="620" fill="url(#glow2)" />
            <g fill="none" stroke="#B7E85A">
              {[170, 270, 370, 470, 570].map((r, i) => (
                <circle
                  key={r}
                  cx="800"
                  cy="445"
                  r={r}
                  strokeWidth={i % 2 ? 2 : 3}
                  strokeOpacity={i % 2 ? 0.28 : 0.55}
                  strokeDasharray={i % 2 ? "3 14" : undefined}
                  pathLength={i % 2 ? undefined : 1}
                  style={i % 2 ? undefined : { strokeDasharray: 1, strokeDashoffset: 1 - draw }}
                />
              ))}
              <path d="M964.2 489.0L1340.9 589.9 M920.2 565.2L1196.0 841.0 M844.0 609.2L944.9 985.9 M756.0 609.2L655.1 985.9 M679.8 565.2L404.0 841.0 M635.8 489.0L259.1 589.9 M635.8 401.0L259.1 300.1 M679.8 324.8L404.0 49.0 M756.0 280.8L655.1 -95.9 M844.0 280.8L944.9 -95.9 M920.2 324.8L1196.0 49.0 M964.2 401.0L1340.9 300.1" strokeWidth="1.5" strokeOpacity="0.16" />
              <path d="M1375.0 445.0L1401.0 445.0 M1372.8 495.1L1380.8 495.8 M1366.3 544.8L1374.1 546.2 M1355.4 593.8L1368.9 597.4 M1340.3 641.7L1347.8 644.4 M1321.1 688.0L1328.4 691.4 M1298.0 732.5L1320.5 745.5 M1271.0 774.8L1277.6 779.4 M1240.5 814.6L1246.6 819.7 M1206.6 851.6L1216.5 861.5 M1169.6 885.5L1174.7 891.6 M1129.8 916.0L1134.4 922.6 M1087.5 943.0L1100.5 965.5 M1043.0 966.1L1046.4 973.4 M996.7 985.3L999.4 992.8 M948.8 1000.4L952.4 1013.9 M899.8 1011.3L901.2 1019.1 M850.1 1017.8L850.8 1025.8 M800.0 1020.0L800.0 1046.0 M749.9 1017.8L749.2 1025.8 M700.2 1011.3L698.8 1019.1 M651.2 1000.4L647.6 1013.9 M603.3 985.3L600.6 992.8 M557.0 966.1L553.6 973.4 M512.5 943.0L499.5 965.5 M470.2 916.0L465.6 922.6 M430.4 885.5L425.3 891.6 M393.4 851.6L383.5 861.5 M359.5 814.6L353.4 819.7 M329.0 774.8L322.4 779.4 M302.0 732.5L279.5 745.5 M278.9 688.0L271.6 691.4 M259.7 641.7L252.2 644.4 M244.6 593.8L231.1 597.4 M233.7 544.8L225.9 546.2 M227.2 495.1L219.2 495.8 M225.0 445.0L199.0 445.0 M227.2 394.9L219.2 394.2 M233.7 345.2L225.9 343.8 M244.6 296.2L231.1 292.6 M259.7 248.3L252.2 245.6 M278.9 202.0L271.6 198.6 M302.0 157.5L279.5 144.5 M329.0 115.2L322.4 110.6 M359.5 75.4L353.4 70.3 M393.4 38.4L383.5 28.5 M430.4 4.5L425.3 -1.6 M470.2 -26.0L465.6 -32.6 M512.5 -53.0L499.5 -75.5 M557.0 -76.1L553.6 -83.4 M603.3 -95.3L600.6 -102.8 M651.2 -110.4L647.6 -123.9 M700.2 -121.3L698.8 -129.1 M749.9 -127.8L749.2 -135.8 M800.0 -130.0L800.0 -156.0 M850.1 -127.8L850.8 -135.8 M899.8 -121.3L901.2 -129.1 M948.8 -110.4L952.4 -123.9 M996.7 -95.3L999.4 -102.8 M1043.0 -76.1L1046.4 -83.4 M1087.5 -53.0L1100.5 -75.5 M1129.8 -26.0L1134.4 -32.6 M1169.6 4.5L1174.7 -1.6 M1206.6 38.4L1216.5 28.5 M1240.5 75.4L1246.6 70.3 M1271.0 115.2L1277.6 110.6 M1298.0 157.5L1320.5 144.5 M1321.1 202.0L1328.4 198.6 M1340.3 248.3L1347.8 245.6 M1355.4 296.2L1368.9 292.6 M1366.3 345.2L1374.1 343.8 M1372.8 394.9L1380.8 394.2" strokeWidth="2" strokeOpacity="0.45" />
            </g>
            <g opacity={draw}><circle cx="1029.8" cy="637.8" r="7" fill="#B7E85A" /><circle cx="499.3" cy="554.4" r="7" fill="#B7E85A" /><circle cx="760.8" cy="893.3" r="5" fill="#B7E85A" /><circle cx="683.5" cy="10.3" r="5" fill="#B7E85A" /><circle cx="521.5" cy="250.0" r="7" fill="#B7E85A" /><circle cx="1326.2" cy="636.5" r="5" fill="#B7E85A" /><circle cx="273.8" cy="253.5" r="5" fill="#B7E85A" /><circle cx="925.0" cy="228.5" r="7" fill="#B7E85A" /></g>

            {/* the figure stands in the centre */}
            <circle cx="800" cy="445" r="128" fill="#0E2E2B" fillOpacity="0.9" stroke="#B7E85A" strokeWidth="3" />
            <circle cx="800" cy="445" r="156" fill="none" stroke="#EFFAF6" strokeOpacity="0.22" strokeDasharray="4 10" />
          </svg>
        </div>

        {/* matches the hero's bottom fade so the two sections join without a line */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 z-20 h-40"
          style={{ background: "linear-gradient(to bottom, #0a2421 0%, rgba(10,36,33,0.7) 45%, rgba(10,36,33,0) 100%)", opacity: clamp(1 - p * 6) }}
        />

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
              transform: `translateY(${(1 - e) * 0.2 * 100 + e * 24}%) scale(${avatarScale})`,
              transformOrigin: "52% 30%",
              filter: `drop-shadow(0 ${14 * e}px ${30 * e}px rgba(0,0,0,0.45))`,
            }}
          >
            <Image src="/images/avatar-jprim3.webp" alt="Illustrated avatar of Umma Habiba Tuly" fill sizes="34rem" className="object-contain object-bottom" />
          </div>
        </div>

        {/* thin lines from every skill card to the figure */}
        <svg aria-hidden="true" viewBox="0 0 100 100" preserveAspectRatio="none" className="pointer-events-none absolute inset-0 hidden h-full w-full md:block">
          {[0, 1, 2, 3, 4, 5].map((k) => {
            const left = k < 3;
            const y = [33, 50, 67][k % 3];
            const x1 = left ? 27 : 73, x2 = left ? 45.5 : 54.5, y2 = 52;
            const vis = clamp((p - (0.8 + k * 0.025)) / 0.12);
            return (
              <path
                key={k}
                d={`M${x1} ${y} C${left ? 36 : 64} ${y} ${left ? 38 : 62} ${y2} ${x2} ${y2}`}
                fill="none"
                stroke="#B7E85A"
                strokeOpacity={0.6 * vis}
                strokeWidth="1.6"
                strokeDasharray="6 7"
                vectorEffect="non-scaling-stroke"
              />
            );
          })}
        </svg>

        {/* skills: left and right of the stage (desktop) */}
        <div className="pointer-events-none absolute inset-0 hidden md:block">
          {[GROUPS.slice(0, 3), GROUPS.slice(3, 6)].map((col, ci) => (
            <div
              key={ci}
              className={`absolute top-4 bottom-4 flex w-[min(21rem,24vw)] flex-col justify-center gap-3 ${ci === 0 ? "left-4 lg:left-8" : "right-4 lg:right-8"}`}
            >
              {col.map((g, i) => {
                const vis = clamp((p - (0.74 + (ci * 3 + i) * 0.03)) / 0.14);
                return (
                  <div
                    key={g.n}
                    className={`pointer-events-auto rounded-2xl p-4 shadow-xl ${g.look}`}
                    style={{ opacity: vis, transform: `translateX(${(1 - vis) * (ci === 0 ? -40 : 40)}px)` }}
                  >
                    <p className="flex items-baseline gap-2">
                      <span className="font-display text-sm font-bold opacity-60">{g.n}</span>
                      <span className="font-display text-xl font-extrabold leading-tight tracking-[-0.01em]">{g.title}</span>
                    </p>
                    <p className="mt-2 text-[13px] font-medium leading-snug opacity-90">{g.skills.join(" · ")}</p>
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        <div
          className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink via-ink/85 to-transparent px-5 pb-6 pt-16 text-center sm:pb-9"
          style={{ opacity: caption, transform: `translateY(${(1 - caption) * 16}px)` }}
        >
          <p className="font-display mx-auto max-w-2xl text-2xl font-bold leading-tight tracking-tight sm:text-4xl">
            Zoom out. <span className="text-accent">This is what I work with.</span>
          </p>
          <p className="mx-auto mt-1 text-sm text-surface/65">
            Away from the screen: acrylic painting.
          </p>
        </div>
      </div>
    </section>
  );
}
