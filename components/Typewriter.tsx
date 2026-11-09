"use client";

import { useEffect, useState } from "react";

type Part = { text: string; className?: string };

type TypewriterProps = {
  parts: Part[];
  startDelay?: number;
  speed?: number;
  className?: string;
  style?: React.CSSProperties;
};

/** Types the text out once. The full text is always in the layout, so nothing jumps. */
export default function Typewriter({ parts, startDelay = 1300, speed = 70, className = "", style }: TypewriterProps) {
  const full = parts.map((p) => p.text).join("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCount(full.length);
      return;
    }
    let i = 0;
    let timer: ReturnType<typeof setInterval> | undefined;
    const start = setTimeout(() => {
      timer = setInterval(() => {
        i += 1;
        setCount(i);
        if (i >= full.length && timer) clearInterval(timer);
      }, speed);
    }, startDelay);
    return () => {
      clearTimeout(start);
      if (timer) clearInterval(timer);
    };
  }, [full.length, speed, startDelay]);

  let used = 0;
  return (
    <h2 className={className} style={style} aria-label={full}>
      {parts.map((p, idx) => {
        const visible = Math.max(0, Math.min(p.text.length, count - used));
        used += p.text.length;
        return (
          <span key={idx} className={p.className} aria-hidden="true">
            {p.text.slice(0, visible)}
            <span className="opacity-0">{p.text.slice(visible)}</span>
          </span>
        );
      })}
      <span
        aria-hidden="true"
        className={`ml-1 inline-block h-[0.8em] w-[0.06em] translate-y-[0.08em] bg-accent ${count >= full.length ? "caret-blink" : ""}`}
      />
    </h2>
  );
}
