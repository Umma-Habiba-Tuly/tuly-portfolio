import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

const variantStyles = {
  primary:
    "bg-emerald-500 text-slate-950 hover:bg-emerald-400 active:scale-[0.98] shadow-md shadow-emerald-500/20 font-bold",
  secondary:
    "bg-card text-foreground border border-white/15 hover:bg-card-hover hover:border-white/25 active:scale-[0.98] font-semibold",
  outline:
    "bg-transparent text-foreground border border-white/20 hover:border-emerald-400/50 hover:bg-emerald-500/10 active:scale-[0.98] font-semibold",
  ghost:
    "bg-transparent text-slate-300 hover:text-white hover:bg-white/[0.08] font-medium",
  link: "bg-transparent text-emerald-400 hover:text-emerald-300 underline-offset-4 hover:underline p-0 h-auto font-medium",
};

const sizeStyles = {
  sm: "h-8 px-3 text-xs gap-1.5 rounded-lg tracking-wide",
  md: "h-10 px-4 text-xs sm:text-sm gap-2 rounded-xl tracking-wide",
  lg: "h-12 px-6 text-sm sm:text-base gap-2.5 rounded-xl tracking-wide",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      icon,
      iconPosition = "left",
      children,
      className,
      disabled,
      ...props
    },
    ref
  ) => {
    const isLink = variant === "link";

    return (
      <button
        ref={ref}
        disabled={disabled}
        className={cn(
          "inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 disabled:opacity-50 disabled:pointer-events-none cursor-pointer select-none",
          variantStyles[variant],
          !isLink && sizeStyles[size],
          className
        )}
        {...props}
      >
        {icon && iconPosition === "left" && (
          <span className="shrink-0">{icon}</span>
        )}
        {children}
        {icon && iconPosition === "right" && (
          <span className="shrink-0">{icon}</span>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
