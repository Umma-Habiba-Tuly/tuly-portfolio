import React from "react";
import { cn } from "@/lib/utils";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  variant?: "default" | "muted" | "dark" | "alternate";
  children: React.ReactNode;
}

const variantStyles = {
  default: "bg-background",
  muted: "bg-muted border-y border-white/[0.05]",
  dark: "bg-[#050608]",
  alternate: "bg-[#07090E] border-y border-white/[0.04]",
};

export const Section: React.FC<SectionProps> = ({
  id,
  variant = "default",
  children,
  className,
  ...props
}) => {
  return (
    <section
      id={id}
      className={cn(
        "relative py-[56px] md:py-[72px] lg:py-[96px] overflow-hidden",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
};

export default Section;
