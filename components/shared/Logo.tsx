import React from "react";
import Link from "next/link";
import { SITE_CONFIG } from "@/constants/site";
import { cn } from "@/lib/utils";

export interface LogoProps {
  className?: string;
  showSubtitle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className, showSubtitle = true }) => {
  return (
    <Link
      href="/"
      className={cn(
        "inline-flex items-center gap-2.5 group transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-lg p-0.5",
        className
      )}
      aria-label={`${SITE_CONFIG.name} Home`}
    >
      <div className="w-8 h-8 rounded-lg bg-card border border-white/10 flex items-center justify-center text-indigo-400 font-mono font-bold text-sm group-hover:border-indigo-500/40 transition-colors shadow-sm">
        AI
      </div>
      <div className="flex flex-col">
        <span className="font-sans font-bold text-base tracking-tight text-white leading-none">
          {SITE_CONFIG.name || "Portfolio"}
        </span>
        {showSubtitle && SITE_CONFIG.professionalTitle && (
          <span className="font-mono text-[11px] text-slate-400 leading-none mt-1">
            {SITE_CONFIG.professionalTitle}
          </span>
        )}
      </div>
    </Link>
  );
};

export default Logo;
