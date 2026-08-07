"use client";

import React from "react";
import { m } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { MotionSection } from "@/components/motion/MotionSection";
import { MotionStagger } from "@/components/motion/MotionStagger";
import { MotionItem } from "@/components/motion/MotionItem";
import { Button } from "@/components/ui/Button";
import { hoverTransition } from "@/lib/motion/transitions";
import { SITE_CONFIG } from "@/constants/site";
import {
  Sparkles,
  Bot,
  Zap,
  FolderGit2,
  Database,
  Lightbulb,
  ExternalLink,
  ArrowRight,
} from "lucide-react";

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

export const BuildingInPublicSection: React.FC = () => {
  const linkedinUrl =
    SITE_CONFIG.socials.find((s) => s.name.toLowerCase() === "linkedin")?.url ||
    "https://www.linkedin.com/in/umma-habiba-tuly-cse/";

  const topics = [
    {
      title: "AI Automation Builds",
      desc: "Multi-agent orchestration & support engines",
      icon: Bot,
      color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    },
    {
      title: "n8n Workflows",
      desc: "Visual event automation & API pipelines",
      icon: Zap,
      color: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    },
    {
      title: "Client Case Studies",
      desc: "Real-world production results & ROI",
      icon: FolderGit2,
      color: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
    },
    {
      title: "RAG Systems",
      desc: "Vector databases & document search",
      icon: Database,
      color: "text-sky-400 bg-sky-500/10 border-sky-500/20",
    },
    {
      title: "Engineering Insights",
      desc: "Lessons on building non-brittle AI agents",
      icon: Lightbulb,
      color: "text-violet-400 bg-violet-500/10 border-violet-500/20",
    },
  ];

  return (
    <section className="py-8 relative z-10 bg-background">
      <Container maxWidth="xl">
        <MotionSection>
          <m.div
            whileHover={{ y: -2 }}
            transition={hoverTransition}
            className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-card via-[#0A1224] to-card border border-sky-500/30 relative overflow-hidden shadow-2xl group"
          >
            {/* Top Glowing Beam */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-sky-500 via-indigo-500 to-emerald-400" />

            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-6 border-b border-white/10 pb-6">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-mono text-purple-300 font-semibold tracking-wide uppercase mb-3">
                  <LinkedinIcon className="w-3.5 h-3.5 fill-purple-300" />
                  Building in Public on LinkedIn
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Follow My Engineering Journey & Live Builds
                </h3>
                <p className="mt-2 text-[15px] sm:text-base text-slate-300 leading-[1.6]">
                  I regularly post architecture breakdowns, live n8n workflow walkthroughs, RAG vector retrieval benchmarks, and client implementation insights.
                </p>
              </div>

              <m.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="shrink-0">
                <Button
                  variant="primary"
                  size="md"
                  className="gap-2.5 font-bold bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-lg shadow-emerald-500/20"
                  onClick={() => window.open(linkedinUrl, "_blank")}
                >
                  <LinkedinIcon className="w-4 h-4 fill-slate-950" />
                  Follow on LinkedIn
                  <ExternalLink className="w-3.5 h-3.5" />
                </Button>
              </m.div>
            </div>

            {/* 5 Topic Badges Grid */}
            <MotionStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {topics.map((topic) => {
                const Icon = topic.icon;
                return (
                  <MotionItem key={topic.title} hoverEffect>
                    <div
                      onClick={() => window.open(linkedinUrl, "_blank")}
                      className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-emerald-500/40 transition-all duration-300 cursor-pointer flex flex-col justify-between h-full group/item"
                    >
                      <div className="flex items-center gap-2.5 mb-2">
                        <div className={`w-8 h-8 rounded-lg border flex items-center justify-center shrink-0 ${topic.color}`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-xs font-bold text-white group-hover/item:text-emerald-300 transition-colors">
                          {topic.title}
                        </span>
                      </div>
                      <p className="text-xs text-slate-300 leading-normal">
                        {topic.desc}
                      </p>
                    </div>
                  </MotionItem>
                );
              })}
            </MotionStagger>
          </m.div>
        </MotionSection>
      </Container>
    </section>
  );
};

export default BuildingInPublicSection;
