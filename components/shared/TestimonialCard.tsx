"use client";

import React from "react";
import { m } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { TestimonialItem } from "@/types/common";
import { hoverTransition } from "@/lib/motion/transitions";
import { Quote, Star, UserCheck, Award } from "lucide-react";

interface TestimonialCardProps {
  testimonial: TestimonialItem;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <m.div whileHover={{ y: -4 }} transition={hoverTransition} className="h-full">
      <Card
        variant="interactive"
        className="flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-card/90 border-white/10 hover:border-emerald-500/40 hover:shadow-emerald-500/10 transition-all duration-300 h-full group relative overflow-hidden"
      >
        {/* Subtle Accent Glow */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />

        <div>
          {/* Header Row: Quote Icon & Rating / Metric Badge (Green Accent Rule for Stats/Metrics) */}
          <div className="flex items-center justify-between gap-3 mb-4">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <Quote className="w-4 h-4" />
            </div>

            {testimonial.highlightMetric && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-400 font-semibold">
                <Award className="w-3.5 h-3.5 text-emerald-400" />
                {testimonial.highlightMetric}
              </span>
            )}
          </div>

          {/* Quote Text */}
          <p className="text-[15px] sm:text-base text-slate-200 leading-[1.6] italic font-normal">
            "{testimonial.quote}"
          </p>
        </div>

        {/* Client Meta Info Footer */}
        <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center gap-3.5">
          {/* Avatar / Placeholder */}
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500 to-emerald-400 p-[1.5px] shrink-0">
            <div className="w-full h-full rounded-full bg-[#090B0E] flex items-center justify-center text-slate-300 font-bold font-mono text-xs">
              {testimonial.name
                .split(" ")
                .map((n) => n[0])
                .join("")
                .substring(0, 2)}
            </div>
          </div>

          <div className="overflow-hidden">
            <h4 className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
              {testimonial.name}
            </h4>
            <p className="text-xs text-slate-400 font-mono truncate">
              {testimonial.role} • <span className="text-indigo-400">{testimonial.company}</span>
            </p>
          </div>
        </div>
      </Card>
    </m.div>
  );
};
