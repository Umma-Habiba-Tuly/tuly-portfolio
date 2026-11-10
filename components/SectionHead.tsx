import type { ReactNode } from "react";
import Reveal from "@/components/Reveal";

type SectionHeadProps = {
  label?: string;
  title: ReactNode;
  tone?: "light" | "dark";
};

/** Small label above, big left-aligned statement below, on a single rule. */
export default function SectionHead({ label, title, tone = "light" }: SectionHeadProps) {
  const rule = tone === "dark" ? "border-surface/40" : "border-ink";
  const chip = tone === "dark" ? "border-surface/35 text-surface/85" : "border-ink/40 text-ink/80";
  return (
    <Reveal className={`border-t-2 pt-6 ${rule}`}>
      {label ? (
        <p className={`label mb-5 inline-flex items-center gap-2 rounded-full border px-3.5 py-1 ${chip}`}>
          <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
          {label}
        </p>
      ) : null}
      <h2
        className="font-display max-w-5xl text-balance font-bold leading-[1.06] tracking-[-0.03em]"
        style={{ fontSize: "clamp(2rem, 4.1vw, 3.5rem)" }}
      >
        {title}
      </h2>
    </Reveal>
  );
}
