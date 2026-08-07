import React from "react";
import { m, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

export interface TechBadgeProps extends HTMLMotionProps<"div"> {
  name: string;
  icon?: React.ReactNode;
  category?: string;
  tooltip?: string;
}

export const TechBadge: React.FC<TechBadgeProps> = ({
  name,
  icon,
  category,
  tooltip,
  className,
  ...props
}) => {
  return (
    <m.div
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "group relative inline-flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-card/60 border border-white/[0.08] text-slate-300 hover:text-white hover:border-indigo-500/40 hover:bg-card-hover transition-all duration-200 cursor-default select-none shadow-sm hover:shadow-md hover:shadow-indigo-500/10",
        className
      )}
      title={tooltip || category || name}
      {...props}
    >
      {icon && (
        <span className="text-slate-400 group-hover:text-indigo-400 transition-colors shrink-0">
          {icon}
        </span>
      )}
      <span className="font-mono text-xs font-medium tracking-tight">
        {name}
      </span>

      {/* Placeholder for future tooltip expansion */}
      {tooltip && (
        <span className="sr-only">{tooltip}</span>
      )}
    </m.div>
  );
};

export default TechBadge;
