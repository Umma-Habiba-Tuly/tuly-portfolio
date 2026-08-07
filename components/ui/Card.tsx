import React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "interactive" | "feature";
  children: React.ReactNode;
}

const variantStyles = {
  default: "bg-card border border-white/[0.08] text-foreground",
  interactive:
    "bg-card border border-white/[0.08] text-foreground hover:border-white/20 hover:bg-card-hover hover:-translate-y-1 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-indigo-500/5",
  feature:
    "bg-gradient-to-b from-card-hover to-card border border-indigo-500/25 text-foreground shadow-xl relative overflow-hidden before:absolute before:top-0 before:left-0 before:right-0 before:h-[2px] before:bg-gradient-to-r before:from-indigo-500 before:via-sky-400 before:to-indigo-500",
};

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ variant = "default", children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("rounded-2xl p-6 md:p-8", variantStyles[variant], className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

export default Card;
