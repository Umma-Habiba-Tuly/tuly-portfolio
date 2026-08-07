import React from "react";
import { cn } from "@/lib/utils";

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: "h1" | "h2" | "h3" | "h4";
  size?: "display2xl" | "displayXl" | "lg" | "md" | "sm";
  children: React.ReactNode;
}

const sizeStyles = {
  display2xl:
    "text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-extrabold tracking-tight leading-[1.1]",
  displayXl:
    "text-2xl sm:text-3xl md:text-[36px] font-bold tracking-tight leading-[1.2]",
  lg: "text-xl sm:text-2xl md:text-[28px] font-bold tracking-snug leading-[1.25]",
  md: "text-[18px] sm:text-[20px] font-semibold tracking-snug leading-[1.35]",
  sm: "text-[16px] sm:text-[18px] font-semibold tracking-normal leading-[1.4]",
};

export const Heading: React.FC<HeadingProps> = ({
  as: Component = "h2",
  size = "lg",
  children,
  className,
  ...props
}) => {
  return (
    <Component
      className={cn("text-foreground font-sans", sizeStyles[size], className)}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Heading;
