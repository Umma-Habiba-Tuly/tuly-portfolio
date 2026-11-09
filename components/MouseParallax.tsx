"use client";

import { useEffect, useRef, type ReactNode } from "react";

/** Moves its child a few pixels toward the cursor, so the avatar seems to follow you. */
export default function MouseParallax({ children, strength = 14, className = "" }: { children: ReactNode; strength?: number; className?: string }) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    let raf = 0;
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const x = (e.clientX / window.innerWidth - 0.5) * 2;
        const y = (e.clientY / window.innerHeight - 0.5) * 2;
        el.style.transform = `translate3d(${(x * strength).toFixed(1)}px, ${(y * strength * 0.6).toFixed(1)}px, 0)`;
      });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
    };
  }, [strength]);

  return (
    <div ref={ref} className={`transition-transform duration-300 ease-out will-change-transform ${className}`}>
      {children}
    </div>
  );
}
