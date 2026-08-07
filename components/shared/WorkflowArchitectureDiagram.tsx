"use client";

import React from "react";
import { m } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  MessageSquare,
  Zap,
  Sparkles,
  MessageSquareText,
  Bot,
  Database,
  Cpu,
  Layers,
  CheckCircle2,
  Send,
} from "lucide-react";

export const WorkflowArchitectureDiagram: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={cn("relative w-full overflow-x-auto overflow-y-hidden rounded-2xl bg-[#090B0E]/95 border border-white/10 p-3 sm:p-7 shadow-2xl my-1.5 scrollbar-none", className)}>
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 via-purple-500/5 to-emerald-500/5 pointer-events-none" />

      {/* SVG Connecting Lines Layer */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        viewBox="0 0 600 540"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="flowGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#a855f7" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0.8" />
          </linearGradient>

          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* 1. Messenger -> Webhook */}
        <path d="M 300 45 L 300 80" stroke="url(#flowGradient)" strokeWidth="2" strokeDasharray="4 4" className="animate-pulse" />

        {/* 2. Webhook -> Branch (Vision & Text) */}
        <path d="M 300 110 L 300 130 M 300 130 L 180 130 L 180 150" stroke="url(#flowGradient)" strokeWidth="1.5" strokeDasharray="4 4" />
        <path d="M 300 130 L 420 130 L 420 150" stroke="url(#flowGradient)" strokeWidth="1.5" strokeDasharray="4 4" />

        {/* 3. Branch (Vision & Text) -> AI Agent */}
        <path d="M 180 185 L 180 205 L 300 205 L 300 225" stroke="url(#flowGradient)" strokeWidth="1.5" strokeDasharray="4 4" />
        <path d="M 420 185 L 420 205 L 300 205" stroke="url(#flowGradient)" strokeWidth="1.5" strokeDasharray="4 4" />

        {/* 4. AI Agent -> 3 DBs (Qdrant, Postgres, Sheets) */}
        <path d="M 300 260 L 300 280 L 140 280 L 140 300" stroke="url(#flowGradient)" strokeWidth="1.5" strokeDasharray="4 4" />
        <path d="M 300 260 L 300 300" stroke="url(#flowGradient)" strokeWidth="1.5" strokeDasharray="4 4" />
        <path d="M 300 260 L 300 280 L 460 280 L 460 300" stroke="url(#flowGradient)" strokeWidth="1.5" strokeDasharray="4 4" />

        {/* 5. 3 DBs -> Response Generator */}
        <path d="M 140 335 L 140 355 L 300 355 L 300 375" stroke="url(#flowGradient)" strokeWidth="1.5" strokeDasharray="4 4" />
        <path d="M 300 335 L 300 375" stroke="url(#flowGradient)" strokeWidth="1.5" strokeDasharray="4 4" />
        <path d="M 460 335 L 460 355 L 300 355" stroke="url(#flowGradient)" strokeWidth="1.5" strokeDasharray="4 4" />

        {/* 6. Response Generator -> Messenger Reply */}
        <path d="M 300 410 L 300 445" stroke="url(#flowGradient)" strokeWidth="2" strokeDasharray="4 4" className="animate-pulse" />

        {/* Animated Glowing Pulse Motion Dot */}
        <circle r="4" fill="#10b981" filter="url(#glow)">
          <animateMotion path="M 300 45 L 300 80 L 300 130 L 180 130 L 180 150 L 180 185 L 300 205 L 300 225 L 300 260 L 300 300 L 300 335 L 300 375 L 300 410 L 300 445" dur="6s" repeatCount="indefinite" />
        </circle>
      </svg>

      {/* Nodes Container (Responsive Grid / Absolute Positioning) */}
      <div className="relative z-10 w-full max-w-[560px] mx-auto min-h-[500px] flex flex-col justify-between items-center py-2">
        {/* Row 1: Meta Messenger */}
        <m.div
          initial={{ opacity: 0, y: 10, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          whileHover={{ y: -3, scale: 1.03 }}
          className="p-2.5 px-4 rounded-xl bg-white/[0.04] border border-blue-500/40 shadow-lg shadow-blue-500/10 backdrop-blur-md flex items-center gap-2.5 hover:border-blue-400 transition-all cursor-pointer"
        >
          <div className="w-6 h-6 rounded-lg bg-blue-500/20 border border-blue-500/40 text-blue-400 flex items-center justify-center shrink-0">
            <MessageSquare className="w-3.5 h-3.5" />
          </div>
          <div>
            <p className="text-xs font-mono font-bold text-white">Meta Messenger</p>
            <p className="text-[9px] font-mono text-slate-400">Customer Trigger</p>
          </div>
        </m.div>

        {/* Row 2: Webhook & Event Trigger */}
        <m.div
          initial={{ opacity: 0, y: 10, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          whileHover={{ y: -3, scale: 1.03 }}
          className="p-2.5 px-4 rounded-xl bg-white/[0.04] border border-indigo-500/40 shadow-lg shadow-indigo-500/10 backdrop-blur-md flex items-center gap-2.5 hover:border-indigo-400 transition-all cursor-pointer"
        >
          <div className="w-6 h-6 rounded-lg bg-indigo-500/20 border border-indigo-500/40 text-indigo-400 flex items-center justify-center shrink-0">
            <Zap className="w-3.5 h-3.5 text-amber-400" />
          </div>
          <div>
            <p className="text-xs font-mono font-bold text-white">Webhook & Event Trigger</p>
            <p className="text-[9px] font-mono text-slate-400">Receives Events</p>
          </div>
        </m.div>

        {/* Row 3: Branch (Vision & Text) */}
        <div className="w-full flex items-center justify-around gap-2 px-2">
          <m.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            whileHover={{ y: -3, scale: 1.03 }}
            className="p-2 px-3 rounded-xl bg-white/[0.04] border border-purple-500/40 shadow-lg backdrop-blur-md flex items-center gap-2 hover:border-purple-400 transition-all cursor-pointer"
          >
            <div className="w-5 h-5 rounded-lg bg-purple-500/20 border border-purple-500/40 text-purple-400 flex items-center justify-center shrink-0">
              <Sparkles className="w-3 h-3 text-purple-300" />
            </div>
            <div>
              <p className="text-[11px] font-mono font-bold text-white">Image OCR + Vision</p>
              <p className="text-[8.5px] font-mono text-slate-400">Visual Analysis</p>
            </div>
          </m.div>

          <m.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.35 }}
            whileHover={{ y: -3, scale: 1.03 }}
            className="p-2 px-3 rounded-xl bg-white/[0.04] border border-sky-500/40 shadow-lg backdrop-blur-md flex items-center gap-2 hover:border-sky-400 transition-all cursor-pointer"
          >
            <div className="w-5 h-5 rounded-lg bg-sky-500/20 border border-sky-500/40 text-sky-400 flex items-center justify-center shrink-0">
              <MessageSquareText className="w-3 h-3 text-sky-300" />
            </div>
            <div>
              <p className="text-[11px] font-mono font-bold text-white">Text Request</p>
              <p className="text-[8.5px] font-mono text-slate-400">NLP Parsing</p>
            </div>
          </m.div>
        </div>

        {/* Row 4: AI Agent (Center Core) */}
        <m.div
          initial={{ opacity: 0, y: 10, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          whileHover={{ y: -3, scale: 1.04 }}
          className="p-3 px-5 rounded-2xl bg-indigo-600/20 border border-indigo-400/60 shadow-xl shadow-indigo-500/20 backdrop-blur-md flex items-center gap-3 hover:border-indigo-300 transition-all cursor-pointer"
        >
          <div className="w-7 h-7 rounded-xl bg-indigo-500/30 border border-indigo-400/50 text-white flex items-center justify-center shrink-0 shadow-md">
            <Bot className="w-4 h-4 text-emerald-400 animate-pulse" />
          </div>
          <div>
            <p className="text-xs font-mono font-extrabold text-white tracking-wide">AI Agent</p>
            <p className="text-[9.5px] font-mono text-indigo-200">Decision Engine</p>
          </div>
        </m.div>

        {/* Row 5: 3 Databases (Qdrant, Postgres, Sheets) */}
        <div className="w-full flex items-center justify-between gap-1 sm:gap-2">
          <m.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            whileHover={{ y: -3, scale: 1.03 }}
            className="p-1.5 sm:p-2 px-2 sm:px-3 rounded-xl bg-white/[0.04] border border-teal-500/40 shadow-md backdrop-blur-md flex items-center gap-1.5 hover:border-teal-400 transition-all cursor-pointer"
          >
            <div className="w-5 h-5 rounded-lg bg-teal-500/20 border border-teal-500/40 text-teal-400 flex items-center justify-center shrink-0">
              <Database className="w-3 h-3" />
            </div>
            <div>
              <p className="text-[10px] font-mono font-bold text-white">Qdrant RAG</p>
              <p className="text-[8px] font-mono text-slate-400">Knowledge Base</p>
            </div>
          </m.div>

          <m.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.55 }}
            whileHover={{ y: -3, scale: 1.03 }}
            className="p-1.5 sm:p-2 px-2 sm:px-3 rounded-xl bg-white/[0.04] border border-sky-500/40 shadow-md backdrop-blur-md flex items-center gap-1.5 hover:border-sky-400 transition-all cursor-pointer"
          >
            <div className="w-5 h-5 rounded-lg bg-sky-500/20 border border-sky-500/40 text-sky-400 flex items-center justify-center shrink-0">
              <Cpu className="w-3 h-3" />
            </div>
            <div>
              <p className="text-[10px] font-mono font-bold text-white">PostgreSQL</p>
              <p className="text-[8px] font-mono text-slate-400">Chat Memory</p>
            </div>
          </m.div>

          <m.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            whileHover={{ y: -3, scale: 1.03 }}
            className="p-1.5 sm:p-2 px-2 sm:px-3 rounded-xl bg-white/[0.04] border border-emerald-500/40 shadow-md backdrop-blur-md flex items-center gap-1.5 hover:border-emerald-400 transition-all cursor-pointer"
          >
            <div className="w-5 h-5 rounded-lg bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center shrink-0">
              <Layers className="w-3 h-3" />
            </div>
            <div>
              <p className="text-[10px] font-mono font-bold text-white">Google Sheets</p>
              <p className="text-[8px] font-mono text-slate-400">Product DB</p>
            </div>
          </m.div>
        </div>

        {/* Row 6: Response Generator */}
        <m.div
          initial={{ opacity: 0, y: 10, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.65 }}
          whileHover={{ y: -3, scale: 1.03 }}
          className="p-2.5 px-4 rounded-xl bg-white/[0.04] border border-amber-500/40 shadow-lg backdrop-blur-md flex items-center gap-2.5 hover:border-amber-400 transition-all cursor-pointer"
        >
          <div className="w-6 h-6 rounded-lg bg-amber-500/20 border border-amber-500/40 text-amber-400 flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-3.5 h-3.5" />
          </div>
          <div>
            <p className="text-xs font-mono font-bold text-white">Response Generator</p>
            <p className="text-[9px] font-mono text-slate-400">Context Synthesis</p>
          </div>
        </m.div>

        {/* Row 7: Facebook Messenger Reply (Final Output) */}
        <m.div
          initial={{ opacity: 0, y: 10, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.7 }}
          whileHover={{ y: -3, scale: 1.03 }}
          className="p-2.5 px-4 rounded-xl bg-emerald-500/10 border border-emerald-500/40 shadow-lg shadow-emerald-500/10 backdrop-blur-md flex items-center gap-2.5 hover:border-emerald-400 transition-all cursor-pointer"
        >
          <div className="w-6 h-6 rounded-lg bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center shrink-0">
            <Send className="w-3.5 h-3.5" />
          </div>
          <div>
            <p className="text-xs font-mono font-bold text-emerald-300">Messenger Reply</p>
            <p className="text-[9px] font-mono text-emerald-400/80">Customer Response</p>
          </div>
        </m.div>
      </div>
    </div>
  );
};

export default WorkflowArchitectureDiagram;
