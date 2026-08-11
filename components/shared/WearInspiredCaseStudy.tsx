"use client";

import React, { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { VideoDemoPlayer } from "@/components/shared/VideoDemoPlayer";
import { WorkflowArchitectureDiagram } from "@/components/shared/WorkflowArchitectureDiagram";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { MotionStagger } from "@/components/motion/MotionStagger";
import { MotionItem } from "@/components/motion/MotionItem";
import { precisionTransition, hoverTransition } from "@/lib/motion/transitions";
import { ProjectItem } from "@/types/common";
import {
  Play,
  ArrowRight,
  Sparkles,
  Check,
  MessageSquare,
  Zap,
  Database,
  ShieldAlert,
  Layers,
  TrendingUp,
  Cpu,
  X,
  ExternalLink,
  Bot,
  Activity,
  Workflow,
  CheckCircle2,
} from "lucide-react";

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

const highlightIconMap: Record<string, React.ReactNode> = {
  MessageSquare: <MessageSquare className="w-5 h-5 text-emerald-400" />,
  ShieldAlert: <ShieldAlert className="w-5 h-5 text-indigo-400" />,
  Database: <Database className="w-5 h-5 text-sky-400" />,
  Zap: <Zap className="w-5 h-5 text-amber-400" />,
};

interface WearInspiredCaseStudyProps {
  project: ProjectItem;
}

export const WearInspiredCaseStudy: React.FC<WearInspiredCaseStudyProps> = ({ project }) => {
  const [activeTab, setActiveTab] = useState<"demo" | "architecture" | "features" | "impact">("demo");
  const [isDeepDiveOpen, setIsDeepDiveOpen] = useState<boolean>(false);

  return (
    <div className="w-full">
      {/* Enterprise Case Study Card Container */}
      <m.div
        whileHover={{ y: -2 }}
        transition={hoverTransition}
        className="w-full"
      >
        <Card
          variant="feature"
          className="p-4 xs:p-6 sm:p-8 md:p-10 border-emerald-500/30 bg-gradient-to-br from-[#0B132B] via-card to-[#0F172A] relative overflow-hidden group shadow-2xl transition-all duration-300 hover:shadow-emerald-500/15"
        >
          {/* Glowing Top Beam */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-500 via-indigo-500 to-sky-400" />
          
          {/* Header Row: Enterprise Badges & Client Tag */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-400 font-semibold tracking-wide uppercase">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Featured Enterprise Case Study
              </span>
              <span className="text-xs font-mono text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-2.5 py-1 rounded-full">
                {project.client}
              </span>
            </div>

            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-800/80 border border-white/10 text-xs font-mono text-slate-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              {project.statusText}
            </span>
          </div>

          {/* Title & Tagline Storytelling */}
          <div className="max-w-4xl mb-8">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight group-hover:text-emerald-300 transition-colors duration-200">
              {project.title}
            </h3>
            <p className="mt-3 text-base sm:text-lg text-slate-300 leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* Supported Multi-Channel Badges */}
          {project.platforms && (
            <div className="mb-8 p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span className="font-semibold text-white">Unified Multi-Channel Integration:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.platforms.map((platform) => (
                  <span
                    key={platform}
                    className="px-3.5 py-1 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs font-medium text-emerald-300 shadow-sm"
                  >
                    {platform}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Interactive Navigation Tabs for Case Study Modules */}
          <div className="relative w-full mb-8">
            {/* Subtle Right Fade Gradient on Mobile to indicate scrollability */}
            <div className="absolute right-0 top-0 bottom-4 w-10 bg-gradient-to-l from-[#0B132B] via-[#0B132B]/80 to-transparent pointer-events-none z-20 sm:hidden" />

            <div className="w-full flex items-center gap-1.5 sm:gap-2 border-b border-white/10 pb-4 overflow-x-auto no-scrollbar touch-pan-x relative z-10">
              {[
                { id: "demo", label: "Video Walkthrough & Metrics", icon: Play },
                { id: "architecture", label: "System Architecture Flow", icon: Workflow },
                { id: "features", label: "Core AI Capabilities", icon: Sparkles },
                { id: "impact", label: "Business ROI & Impact", icon: TrendingUp },
              ].map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`flex items-center gap-1.5 px-3 xs:px-4 py-2 rounded-xl text-[11px] xs:text-xs font-mono font-medium transition-all duration-200 shrink-0 whitespace-nowrap cursor-pointer ${
                      isActive
                        ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/25 ring-1 ring-indigo-400"
                        : "bg-white/[0.04] text-slate-400 hover:text-white hover:bg-white/[0.08]"
                    }`}
                  >
                    <Icon className={`w-3.5 h-3.5 shrink-0 ${isActive ? "text-white" : "text-slate-400"}`} />
                    <span className="whitespace-nowrap">{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Dynamic Tab Panel Content */}
          <AnimatePresence mode="wait">
            {activeTab === "demo" && (
              <m.div
                key="demo"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-6 sm:gap-8 items-start mb-6"
              >
                {/* Left Column (Phone Demo only, top-aligned with Metrics card) */}
                <div className="w-full lg:w-[360px] flex flex-col items-center justify-start self-start">
                  <VideoDemoPlayer
                    posterImage="/images/wear-inspired-poster.png"
                    title="Wear Inspired AI Customer Support Assistant"
                  />
                </div>

                {/* Right Column (Remaining 1fr width): Stacked Enterprise Metrics Card & AI Execution Pipeline Card */}
                <div className="w-full flex flex-col gap-5 justify-start">
                  {/* Card 1: Verified Enterprise Metrics */}
                  <div className="p-5 sm:p-6 rounded-2xl bg-[#090B0E]/90 border border-white/10 shadow-xl">
                    <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                      <span className="text-xs font-mono text-slate-300 font-semibold uppercase flex items-center gap-2">
                        <Activity className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                        Verified Enterprise Metrics
                      </span>
                      <span className="text-xs font-mono text-emerald-400 px-2.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 font-semibold">
                        Production
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2.5 sm:gap-3.5 mb-4">
                      {project.metrics?.map((mItem) => (
                        <div key={mItem.id} className="p-2.5 xs:p-3 sm:p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] text-center hover:border-emerald-500/30 transition-colors flex flex-col items-center justify-center min-w-0">
                          <p className="text-base xs:text-lg min-[360px]:text-xl min-[410px]:text-2xl sm:text-[28px] font-extrabold font-mono text-emerald-400 leading-tight whitespace-nowrap tracking-tight">
                            {mItem.value}
                          </p>
                          <p className="text-[10px] xs:text-[11px] sm:text-xs text-slate-300 font-mono font-medium mt-1 text-center leading-snug break-words max-w-full">
                            {mItem.label}
                          </p>
                        </div>
                      ))}
                    </div>

                    <ul className="space-y-2 border-t border-white/10 pt-3 text-xs sm:text-[13px] text-slate-300">
                      {project.outcomes?.slice(0, 3).map((outcome, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <span className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-2.5 h-2.5" />
                          </span>
                          <span className="leading-[1.5] text-slate-300">{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card 2: AI Execution Pipeline */}
                  <div className="p-5 sm:p-6 rounded-2xl bg-[#090B0E]/90 border border-white/10 shadow-xl flex flex-col gap-3.5">
                    {/* Card Header */}
                    <div className="flex items-center justify-between border-b border-white/10 pb-3">
                      <span className="text-xs font-mono text-slate-300 font-semibold uppercase flex items-center gap-2">
                        <Workflow className="w-3.5 h-3.5 text-indigo-400" />
                        AI Execution Pipeline
                      </span>
                      <span className="text-[10px] font-mono text-emerald-400 px-2.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-1.5 font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        SVG Diagram
                      </span>
                    </div>

                    {/* Custom SVG Architecture Diagram Container (Zero scrollbar, fully visible inline) */}
                    <div className="relative w-full max-w-[92%] mx-auto rounded-2xl border border-white/5 bg-black/40 p-2 sm:p-3 shadow-inner overflow-hidden">
                      <div className="w-full flex items-center justify-center scale-95 sm:scale-100 transform-gpu origin-top">
                        <WorkflowArchitectureDiagram className="bg-transparent border-0 shadow-none p-1 my-0" />
                      </div>
                    </div>

                    {/* Pipeline Execution Step Bullets */}
                    <div className="space-y-2 border-t border-white/10 pt-3 text-xs font-mono text-slate-300">
                      <p className="text-[10.5px] font-mono text-slate-400 uppercase tracking-wider mb-2 font-semibold">Pipeline Steps</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {[
                          "Meta Messenger Webhook",
                          "Image OCR + AI Vision",
                          "AI Agent",
                          "Qdrant RAG Search",
                          "PostgreSQL Memory",
                          "Google Sheets Product Database",
                          "Context-aware Response",
                        ].map((stepText) => (
                          <div key={stepText} className="flex items-center gap-2 text-xs text-slate-300">
                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
                            <span className="truncate">{stepText}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Core Tech Stack Row */}
                    <div className="border-t border-white/10 pt-3">
                      <p className="text-[10.5px] font-mono text-slate-400 uppercase tracking-wider mb-2 font-semibold">Core Tech Stack</p>
                      <div className="flex flex-wrap gap-2">
                        {["n8n", "OpenRouter", "Qdrant", "PostgreSQL", "Meta API", "Google Sheets", "AI Vision"].map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-[11px] font-mono rounded-md bg-white/[0.04] border border-white/10 text-slate-300 hover:border-indigo-500/40 hover:shadow-indigo-500/10 transition-all duration-200 cursor-default"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </m.div>
            )}

            {activeTab === "architecture" && (
              <m.div
                key="architecture"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="mb-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {project.architectureSteps?.map((archStep) => (
                    <div
                      key={archStep.step}
                      className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-indigo-500/40 transition-all duration-300 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span className="w-8 h-8 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-mono font-bold flex items-center justify-center">
                            {archStep.step}
                          </span>
                          <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                            Active Stage
                          </span>
                        </div>
                        <h4 className="text-sm font-bold text-white mb-2">{archStep.title}</h4>
                        <p className="text-xs text-slate-400 leading-relaxed mb-4">{archStep.desc}</p>
                      </div>
                      <div className="pt-3 border-t border-white/[0.06] text-[11px] font-mono text-indigo-300">
                        {archStep.tech}
                      </div>
                    </div>
                  ))}
                </div>
              </m.div>
            )}

            {activeTab === "features" && (
              <m.div
                key="features"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="mb-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.highlights?.map((hl, idx) => (
                    <div key={idx} className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 flex items-start gap-4 hover:border-emerald-500/30 transition-colors">
                      <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center shrink-0">
                        {highlightIconMap[hl.iconName] || <Sparkles className="w-5 h-5 text-emerald-400" />}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white mb-1">{hl.title}</h4>
                        <p className="text-xs text-slate-300 leading-relaxed">{hl.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </m.div>
            )}

            {activeTab === "impact" && (
              <m.div
                key="impact"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="mb-8"
              >
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {project.businessImpact?.map((impact, idx) => (
                    <div key={idx} className="p-6 rounded-2xl bg-gradient-to-b from-indigo-950/30 to-card border border-indigo-500/20 text-center">
                      <p className="text-3xl sm:text-4xl font-extrabold text-emerald-400 font-mono">{impact.metric}</p>
                      <p className="text-sm font-bold text-white mt-2">{impact.label}</p>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed">{impact.detail}</p>
                    </div>
                  ))}
                </div>
              </m.div>
            )}
          </AnimatePresence>

          {/* Bottom Action Footer */}
          <div className="pt-6 border-t border-white/[0.1] flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-1.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md bg-white/[0.05] text-xs font-mono text-slate-300 border border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Button
                variant="primary"
                size="md"
                className="gap-2 shrink-0 group font-medium"
                onClick={() => setIsDeepDiveOpen(true)}
              >
                Explore Enterprise Case Study
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>

              <Button
                variant="outline"
                size="md"
                className="gap-2 shrink-0 border-sky-500/30 text-sky-300 hover:bg-sky-500/10 hover:border-sky-400/60 font-medium"
                onClick={() => window.open("https://www.linkedin.com/in/umma-habiba-tuly-cse/", "_blank")}
              >
                <LinkedinIcon className="w-4 h-4 fill-sky-400" />
                Read the full development story on LinkedIn
              </Button>
            </div>
          </div>
        </Card>
      </m.div>

      {/* Enterprise Case Study Deep Dive Modal */}
      <AnimatePresence>
        {isDeepDiveOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 pointer-events-auto">
            {/* Backdrop */}
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
              onClick={() => setIsDeepDiveOpen(false)}
            />

            {/* Modal Dialog */}
            <m.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-4xl max-h-[90vh] bg-card border border-emerald-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 flex flex-col gap-6 overflow-y-auto scrollbar-thin"
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between border-b border-white/10 pb-5">
                <div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-400 font-semibold tracking-wide uppercase mb-2">
                    Enterprise Deep-Dive Case Study
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {project.title}
                  </h2>
                  <p className="text-xs text-indigo-400 font-mono mt-1">
                    Client: {project.client} • Multi-Channel Web, Messenger & Instagram AI Infrastructure
                  </p>
                </div>

                <button
                  onClick={() => setIsDeepDiveOpen(false)}
                  className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Story Narrative Sections */}
              <div className="space-y-6 text-sm leading-relaxed text-slate-300">
                {/* 1. Operational Challenge */}
                <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10">
                  <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-400" />
                    1. The Operational Challenge
                  </h3>
                  <p>{project.challenge}</p>
                </div>

                {/* 2. Technical Solution & Engineering Architecture */}
                <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10">
                  <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-indigo-400" />
                    2. The AI Engineering Solution
                  </h3>
                  <p>{project.solution}</p>
                </div>

                {/* 3. System Pipeline Steps */}
                <div>
                  <h3 className="text-base font-bold text-white mb-3">3. 4-Stage Architectural Event Pipeline</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.architectureSteps?.map((step) => (
                      <div key={step.step} className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                        <div className="flex items-center justify-between text-xs font-mono text-emerald-400 font-bold mb-1">
                          <span>STAGE {step.step}</span>
                          <span className="text-slate-400 font-normal">{step.tech}</span>
                        </div>
                        <h4 className="text-sm font-bold text-white mb-1">{step.title}</h4>
                        <p className="text-xs text-slate-400">{step.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 4. Business Impact */}
                <div className="p-5 rounded-2xl bg-gradient-to-r from-indigo-950/40 via-card to-emerald-950/30 border border-emerald-500/30">
                  <h3 className="text-base font-bold text-white mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    4. Verified Business Impact & ROI
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {project.businessImpact?.map((bi, idx) => (
                      <div key={idx} className="p-3.5 rounded-xl bg-black/40 border border-white/10 text-center">
                        <p className="text-2xl font-extrabold text-emerald-400 font-mono">{bi.metric}</p>
                        <p className="text-xs font-bold text-white mt-1">{bi.label}</p>
                        <p className="text-[11px] text-slate-400 mt-1">{bi.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Actions */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                <Button variant="outline" size="sm" onClick={() => setIsDeepDiveOpen(false)}>
                  Close Case Study
                </Button>
                <div className="flex flex-wrap items-center gap-2.5">
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-2 border-sky-500/30 text-sky-300 hover:bg-sky-500/10"
                    onClick={() => window.open("https://www.linkedin.com/in/umma-habiba-tuly-cse/", "_blank")}
                  >
                    <LinkedinIcon className="w-3.5 h-3.5 fill-sky-400" />
                    Read full development story on LinkedIn
                  </Button>
                  <Button
                    variant="primary"
                    size="sm"
                    className="gap-2"
                    onClick={() => {
                      setIsDeepDiveOpen(false);
                      window.location.href = "#contact";
                    }}
                  >
                    Discuss Similar AI Solution
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Button>
                </div>
              </div>
            </m.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default WearInspiredCaseStudy;
