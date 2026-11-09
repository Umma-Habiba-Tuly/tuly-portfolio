import type { ReactNode } from "react";

type SectionHeadProps = {
  label: string;
  title: ReactNode;
  tone?: "light" | "dark";
};

/** Rule on top, small label on the left, big statement on the right. */
export default function SectionHead({ label, title, tone = "light" }: SectionHeadProps) {
  const rule = tone === "dark" ? "border-surface/50" : "border-ink";
  return (
    <div className={`grid gap-4 border-t-2 pt-5 md:grid-cols-[13rem_1fr] md:gap-10 ${rule}`}>
      <p className="label">{label}</p>
      <h2 className="font-display max-w-3xl text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl md:text-5xl">{title}</h2>
    </div>
  );
}
