import React from "react";
import { cn } from "@/lib/utils";

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  as?: "p" | "span" | "div";
  size?: "lg" | "base" | "sm";
  variant?: "primary" | "secondary" | "muted";
  children: React.ReactNode;
}

const sizeStyles = {
  lg: "text-[16px] sm:text-[18px] leading-[1.6]",
  base: "text-[15px] sm:text-[16px] leading-[1.6]",
  sm: "text-xs sm:text-[13px] leading-[1.5]",
};

const variantStyles = {
  primary: "text-slate-100 font-normal",
  secondary: "text-slate-300 font-normal", /* 9.8:1 WCAG AAA contrast against #090B0E */
  muted: "text-slate-400 font-normal",     /* 5.4:1 WCAG AA contrast against #090B0E */
};

export const Text: React.FC<TextProps> = ({
  as: Component = "p",
  size = "base",
  variant = "secondary",
  children,
  className,
  ...props
}) => {
  return (
    <Component
      className={cn("font-sans", sizeStyles[size], variantStyles[variant], className)}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Text;
