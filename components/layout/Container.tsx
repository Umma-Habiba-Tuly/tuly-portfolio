import React from "react";
import { cn } from "@/lib/utils";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  maxWidth?: "sm" | "md" | "lg" | "xl";
  children: React.ReactNode;
}

const maxWidthMap = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-6xl",
  xl: "max-w-7xl",
};

export const Container: React.FC<ContainerProps> = ({
  maxWidth = "xl",
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        "w-[92%] md:w-[90%] lg:w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1280px]",
        maxWidthMap[maxWidth],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
