"use client";

import React from "react";
import { m } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { ServiceItem } from "@/types/common";
import { hoverTransition, precisionTransition } from "@/lib/motion/transitions";
import { Bot, Zap, Building2, Database, Workflow, Cpu, Sparkles } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Bot: <Bot className="w-5 h-5 text-indigo-400" />,
  Zap: <Zap className="w-5 h-5 text-amber-400" />,
  Building2: <Building2 className="w-5 h-5 text-sky-400" />,
  Database: <Database className="w-5 h-5 text-emerald-400" />,
  Workflow: <Workflow className="w-5 h-5 text-violet-400" />,
  Cpu: <Cpu className="w-5 h-5 text-teal-400" />,
};

interface ServiceCardProps {
  service: ServiceItem;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <m.div whileHover={{ y: -4 }} transition={hoverTransition} className="h-full">
      <Card
        variant="interactive"
        className="flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-card/90 border-white/10 hover:border-indigo-500/40 hover:shadow-indigo-500/10 transition-all duration-300 h-full group"
      >
        <div>
          {/* Header Row: Icon & Category */}
          <div className="flex items-center justify-between gap-3 mb-4">
            <div className="flex items-center gap-3">
              <m.div
                initial={{ scale: 0.85, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, ...precisionTransition }}
                className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:border-indigo-400/40 transition-all duration-300"
              >
                {service.iconName ? iconMap[service.iconName] : <Sparkles className="w-5 h-5 text-indigo-400" />}
              </m.div>
              {service.category && (
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  {service.category}
                </span>
              )}
            </div>
          </div>

          {/* Service Title H3 */}
          <h3 className="text-[18px] sm:text-[20px] font-semibold text-white group-hover:text-emerald-400 transition-colors duration-200 leading-[1.35]">
            {service.title}
          </h3>

          {/* Description Block */}
          <p className="mt-2.5 text-[15px] sm:text-base text-slate-300 leading-[1.6]">
            {service.description}
          </p>
        </div>

        {/* Tech Tags Footer */}
        <div className="mt-6 pt-4 border-t border-white/[0.06] flex flex-wrap gap-1.5">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded bg-white/[0.04] text-xs font-mono font-medium text-slate-300 border border-white/[0.06]"
            >
              {tag}
            </span>
          ))}
        </div>
      </Card>
    </m.div>
  );
};
