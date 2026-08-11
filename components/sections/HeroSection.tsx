"use client";

import React, { useState, useEffect } from "react";
import { m, AnimatePresence } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import {
  ArrowRight,
  Sparkles,
  Zap,
  Bot,
  Database,
  Workflow,
  ShieldCheck,
  CheckCircle2,
  Cpu,
  BrainCircuit,
  MessageSquare,
  FileDown,
} from "lucide-react";
import { fadeInUpVariant, scaleFadeVariant } from "@/lib/motion/variants";

// All 10 Tech Badges displayed simultaneously & tightly aligned around the Profile Photo
const ALL_TECH_BADGES = [
  { name: "LangChain", icon: <Bot className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-cyan-400" />, border: "border-cyan-500/40", text: "text-cyan-300", position: "top-0 sm:top-4 left-1/2 -translate-x-1/2", floatDuration: "3.8s", floatDelay: "0s" },
  { name: "MCP Protocol", icon: <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-400" />, border: "border-amber-500/40", text: "text-amber-300", position: "top-4 sm:top-10 left-0.5 sm:left-8", floatDuration: "4.2s", floatDelay: "0.4s" },
  { name: "n8n Engine", icon: <Workflow className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-sky-400" />, border: "border-sky-500/40", text: "text-sky-300", position: "top-4 sm:top-10 right-0.5 sm:right-8", floatDuration: "4.0s", floatDelay: "0.8s" },
  { name: "Qdrant", icon: <Database className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-400" />, border: "border-emerald-500/40", text: "text-emerald-300", position: "top-[72px] sm:top-32 left-[-2px] sm:left-3", floatDuration: "4.5s", floatDelay: "1.2s" },
  { name: "OpenRouter", icon: <BrainCircuit className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-purple-400" />, border: "border-purple-500/40", text: "text-purple-300", position: "top-[72px] sm:top-32 right-[-2px] sm:right-3", floatDuration: "3.6s", floatDelay: "1.6s" },
  { name: "FastAPI", icon: <Zap className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-teal-400" />, border: "border-teal-500/40", text: "text-teal-300", position: "bottom-[72px] sm:bottom-32 left-[-2px] sm:left-3", floatDuration: "4.3s", floatDelay: "2.0s" },
  { name: "AI Agent", icon: <Bot className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-violet-400" />, border: "border-violet-500/40", text: "text-violet-300", position: "bottom-[72px] sm:bottom-32 right-[-2px] sm:right-3", floatDuration: "4.1s", floatDelay: "2.4s" },
  { name: "PostgreSQL", icon: <Cpu className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-indigo-400" />, border: "border-indigo-500/40", text: "text-indigo-300", position: "bottom-4 sm:bottom-14 left-0.5 sm:left-8", floatDuration: "4.6s", floatDelay: "2.8s" },
  { name: "RAG Pipeline", icon: <Database className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-cyan-400" />, border: "border-cyan-500/40", text: "text-cyan-300", position: "bottom-4 sm:bottom-14 right-0.5 sm:right-8", floatDuration: "3.9s", floatDelay: "3.2s" },
  { name: "Messenger API", icon: <MessageSquare className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-blue-400" />, border: "border-blue-500/40", text: "text-blue-300", position: "bottom-0 sm:bottom-5 left-1/2 -translate-x-1/2", floatDuration: "4.4s", floatDelay: "3.6s" },
];

export const HeroSection: React.FC = () => {
  return (
    <Section id="hero" variant="default" className="pt-20 sm:pt-28 md:pt-36 lg:pt-40 pb-12 sm:pb-16 md:pb-24 overflow-hidden relative">
      {/* Gentle Floating, Circular Rotating & Background Keyframe Animations */}
      <style jsx global>{`
        @keyframes heroBadgeFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-7px); }
        }
        @keyframes heroBlobDrift1 {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          50% { transform: translate(45px, -30px) scale(1.1); }
        }
        @keyframes heroBlobDrift2 {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          50% { transform: translate(-40px, 35px) scale(1.08); }
        }
        @keyframes heroCircleRotateCW {
          0% { transform: translate(-50%, -50%) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes heroCircleRotateCCW {
          0% { transform: translate(-50%, -50%) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(-360deg); }
        }
        @keyframes heroCirclePulse {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.35; }
          50% { transform: translate(-50%, -50%) scale(1.08); opacity: 0.75; }
        }
      `}</style>

      {/* 1. Live AI Background Layer: 3 Soft Drifting Gradient Blobs */}
      <div
        className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[500px] bg-gradient-to-tr from-purple-600/15 via-emerald-500/12 to-violet-600/10 rounded-full blur-[140px] pointer-events-none opacity-80"
        style={{ animation: "heroBlobDrift1 18s ease-in-out infinite" }}
      />
      <div
        className="absolute bottom-10 right-10 w-[550px] h-[480px] bg-gradient-to-br from-emerald-500/14 via-teal-500/10 to-purple-600/12 rounded-full blur-[130px] pointer-events-none"
        style={{ animation: "heroBlobDrift2 22s ease-in-out infinite" }}
      />
      <div
        className="absolute top-1/3 right-1/4 w-[420px] h-[420px] bg-gradient-to-tr from-indigo-500/10 via-purple-500/10 to-emerald-400/10 rounded-full blur-[120px] pointer-events-none"
        style={{ animation: "heroBlobDrift1 25s ease-in-out infinite reverse" }}
      />

      {/* 2. Precision Dot-Grid Background Mesh Overlay */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(#ffffff0c_1px,transparent_1px)] [background-size:28px_28px] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_20%,#000_70%,transparent_100%)] opacity-75" />

      {/* 3. Live AI Automation Workflow Background Lines & Flowing Data Particles */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-[0.07] select-none">
        <svg
          className="w-full h-full"
          viewBox="0 0 1200 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <path
            id="hero-path-1"
            d="M 80 200 Q 300 120 540 200 T 1020 200"
            stroke="url(#hero-wf-grad-1)"
            strokeWidth="1.5"
            strokeDasharray="5 5"
          />
          <path
            id="hero-path-2"
            d="M 120 420 Q 420 480 720 380 T 1080 440"
            stroke="url(#hero-wf-grad-2)"
            strokeWidth="1.2"
            strokeDasharray="4 4"
          />

          {/* Fixed Workflow Node Junctions */}
          <circle cx="80" cy="200" r="4" fill="#10B981" />
          <circle cx="300" cy="160" r="3" fill="#38BDF8" />
          <circle cx="540" cy="200" r="5" fill="#A855F7" />
          <circle cx="780" cy="180" r="3" fill="#C084FC" />
          <circle cx="1020" cy="200" r="4" fill="#10B981" />

          {/* Smooth 60fps Flowing Data Particles */}
          <circle r="4" fill="#10B981" filter="drop-shadow(0 0 6px #10B981)">
            <animateMotion dur="8s" repeatCount="indefinite" path="M 80 200 Q 300 120 540 200 T 1020 200" />
          </circle>
          <circle r="3.5" fill="#A855F7" filter="drop-shadow(0 0 6px #A855F7)">
            <animateMotion dur="11s" repeatCount="indefinite" path="M 120 420 Q 420 480 720 380 T 1080 440" begin="2s" />
          </circle>

          <defs>
            <linearGradient id="hero-wf-grad-1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10B981" />
              <stop offset="50%" stopColor="#38BDF8" />
              <stop offset="100%" stopColor="#A855F7" />
            </linearGradient>
            <linearGradient id="hero-wf-grad-2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="100%" stopColor="#10B981" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <Container maxWidth="xl" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20 items-center">
          
          {/* Left Column: Identity, Value Proposition & Conversion CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Eyebrow Status Badge (Purple Accent Rule) */}
            <m.div
              initial="hidden"
              animate="visible"
              variants={scaleFadeVariant}
              transition={{ delay: 0.1, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2.5 px-3 sm:px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/25 text-[11px] sm:text-xs font-mono text-purple-300 font-semibold tracking-wide uppercase mb-4 sm:mb-6 shadow-lg shadow-purple-500/5 backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span>Founder @ AT Sync • AI Automation Engineer</span>
            </m.div>

            {/* Main Headline H1 */}
            <m.div
              initial="hidden"
              animate="visible"
              variants={fadeInUpVariant}
              transition={{ delay: 0.2, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1
                style={{ fontFamily: "var(--font-geist-sans), 'Geist', 'Inter', system-ui, sans-serif" }}
                className="text-[35px] sm:text-[48px] md:text-[56px] lg:text-[72px] font-bold text-[#F8FAFC] tracking-[-0.04em] leading-[0.98] sm:leading-[0.95] whitespace-nowrap"
              >
                Hi, I'm{" "}
                <span className="font-bold text-[#8B5CF6]">
                  Tuly.
                </span>
              </h1>
            </m.div>

            {/* Sub-headline H2 */}
            <m.div
              initial="hidden"
              animate="visible"
              variants={fadeInUpVariant}
              transition={{ delay: 0.3, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2
                style={{ fontFamily: "var(--font-geist-sans), 'Geist', 'Inter', system-ui, sans-serif" }}
                className="mt-3 sm:mt-4 w-full max-w-none lg:max-w-[760px] text-[23px] sm:text-[19px] md:text-[25px] lg:text-[39px] font-bold text-[#F8FAFC] tracking-[-0.025em] sm:tracking-[-0.025em] leading-[1.2] sm:leading-[1.18]"
              >
                <span className="whitespace-nowrap">Building Autonomous AI Systems</span>
                <br />
                <span className="whitespace-nowrap">That Scale Your Business</span>
              </h2>
            </m.div>

            {/* Subtitle Description */}
            <m.div
              initial="hidden"
              animate="visible"
              variants={fadeInUpVariant}
              transition={{ delay: 0.4, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <p
                style={{ fontFamily: "var(--font-manrope), 'Manrope', 'Plus Jakarta Sans', sans-serif" }}
                className="mt-4 sm:mt-5 max-w-[560px] text-[rgba(255,255,255,0.72)] font-normal text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] tracking-[-0.01em] leading-[1.6]"
              >
                I build AI customer support assistants, sales agents, and intelligent n8n automations that help businesses save time and scale faster.
              </p>
            </m.div>

            {/* Feature Chips */}
            <m.div
              initial="hidden"
              animate="visible"
              variants={fadeInUpVariant}
              transition={{ delay: 0.5, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="mt-5 sm:mt-7 flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm font-medium text-slate-200"
            >
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-3 h-3" />
                </span>
                <span>24/7 Multi-Channel Support</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-3 h-3" />
                </span>
                <span>n8n & Qdrant RAG Pipelines</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-3 h-3" />
                </span>
                <span>Automated Human Handoff</span>
              </div>
            </m.div>

            {/* Upgraded CTAs */}
            <m.div
              initial="hidden"
              animate="visible"
              variants={fadeInUpVariant}
              transition={{ delay: 0.6, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-4 w-full sm:w-auto"
            >
              {/* Primary CTA */}
              <m.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Button
                  variant="primary"
                  size="lg"
                  className="group relative overflow-hidden gap-2.5 w-full sm:w-auto min-h-[48px] font-bold bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 shadow-xl shadow-emerald-500/20 border border-emerald-300/40 rounded-xl h-12 px-6 text-sm sm:text-base transition-all duration-300 ease-out"
                  onClick={() => { window.location.href = "#contact"; }}
                >
                  <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/35 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-700 pointer-events-none" />
                  <span>Schedule AI Consultation</span>
                  <span className="w-6 h-6 rounded-full bg-slate-950 text-emerald-400 flex items-center justify-center shrink-0 shadow-sm group-hover:translate-x-0.5 transition-transform duration-200">
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
                  </span>
                </Button>
              </m.div>

              {/* Secondary CTA */}
              <m.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Button
                  variant="outline"
                  size="lg"
                  className="group gap-2.5 w-full sm:w-auto min-h-[48px] border-white/20 hover:border-emerald-400/60 hover:bg-emerald-500/10 font-bold rounded-xl h-12 px-6 text-sm sm:text-base transition-all duration-300 shadow-md"
                  onClick={() => { window.location.href = "#work"; }}
                >
                  <span>Explore Case Studies</span>
                  <span className="w-6 h-6 rounded-full border border-white/20 text-slate-300 flex items-center justify-center shrink-0 shadow-sm group-hover:border-emerald-400 group-hover:text-emerald-300 transition-colors">
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
                  </span>
                </Button>
              </m.div>
            </m.div>

            {/* Availability Status Pill */}
            <m.div
              initial="hidden"
              animate="visible"
              variants={fadeInUpVariant}
              transition={{ delay: 0.7, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 sm:mt-8 flex flex-wrap items-center gap-4 text-slate-300 text-xs sm:text-sm font-mono"
            >
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-emerald-400 font-medium">Available for new client projects</span>
              </div>
              <span className="hidden sm:inline text-slate-600">•</span>
              <div className="flex items-center gap-1.5 text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Response within 24 hours</span>
              </div>
            </m.div>
          </div>

          {/* Right Column: Concentric Upright Orbiting Badges System */}
          <m.div
            initial="hidden"
            animate="visible"
            variants={scaleFadeVariant}
            transition={{ delay: 0.4, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative w-full max-w-full h-[360px] sm:h-[580px] flex items-center justify-center overflow-visible px-1 sm:px-0"
          >
            {/* 1. Organic Ambient Blurred Blob Shape behind Portrait */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] sm:w-[300px] md:w-[350px] h-[180px] sm:h-[300px] md:h-[350px] bg-gradient-to-tr from-emerald-500/30 via-purple-500/30 to-teal-400/25 rounded-[45%_55%_60%_40%/50%_45%_55%_50%] blur-3xl pointer-events-none opacity-90" />

            {/* 2. Concentric Pulsing Circular Aura Rings ("Gol Animation 1") */}
            <m.div
              animate={{ scale: [1, 1.08, 1], opacity: [0.35, 0.75, 0.35] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-500/40 w-[160px] sm:w-[270px] md:w-[300px] h-[160px] sm:h-[270px] md:h-[300px] pointer-events-none z-0 shadow-[0_0_20px_rgba(16,185,129,0.2)]"
            />
            <m.div
              animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-500/30 w-[210px] sm:w-[340px] md:w-[380px] h-[210px] sm:h-[340px] md:h-[380px] pointer-events-none z-0 shadow-[0_0_25px_rgba(56,189,248,0.15)]"
            />
            <m.div
              animate={{ scale: [1, 1.08, 1], opacity: [0.25, 0.65, 0.25] }}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-purple-500/25 w-[260px] sm:w-[410px] md:w-[460px] h-[260px] sm:h-[410px] md:h-[460px] pointer-events-none z-0 shadow-[0_0_30px_rgba(168,85,247,0.15)]"
            />

            {/* 3. Rotating Circular Gradient Orbits with Glowing Orbiting Nodes ("Gol Animation 2") */}
            <m.div
              animate={{ rotate: 360 }}
              transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-emerald-400/50 w-[175px] sm:w-[290px] md:w-[320px] h-[175px] sm:h-[290px] md:h-[320px] pointer-events-none z-0 shadow-[0_0_25px_rgba(16,185,129,0.2)]"
            >
              <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-emerald-400 shadow-[0_0_14px_#10B981] animate-pulse" />
              <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-teal-400 shadow-[0_0_10px_#14B8A6]" />
            </m.div>

            <m.div
              animate={{ rotate: -360 }}
              transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-purple-500/40 w-[225px] sm:w-[360px] md:w-[400px] h-[225px] sm:h-[360px] md:h-[400px] pointer-events-none z-0 shadow-[0_0_30px_rgba(168,85,247,0.2)]"
            >
              <div className="absolute top-1/2 -left-1.5 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-purple-400 shadow-[0_0_14px_#A855F7] animate-pulse" />
              <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-3 h-3 rounded-full bg-indigo-400 shadow-[0_0_10px_#6366F1]" />
            </m.div>

            <m.div
              animate={{ rotate: 360 }}
              transition={{ duration: 48, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dotted border-cyan-400/40 w-[270px] sm:w-[430px] md:w-[480px] h-[270px] sm:h-[430px] md:h-[480px] pointer-events-none z-0"
            >
              <div className="absolute top-10 left-12 w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_12px_#38BDF8] animate-pulse" />
              <div className="absolute bottom-10 right-12 w-2.5 h-2.5 rounded-full bg-sky-300 shadow-[0_0_10px_#7DD3FC]" />
            </m.div>

            {/* 4. Soft Animated Rotating Conic-Gradient Rim Border */}
            <m.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140px] sm:w-[205px] md:w-[235px] h-[140px] sm:h-[205px] md:h-[235px] rounded-full p-[2.5px] bg-gradient-to-tr from-emerald-400 via-purple-500 to-teal-400 shadow-2xl shadow-emerald-500/25 pointer-events-none z-10"
            />

            {/* 5. Circular Portrait Container */}
            <m.div
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 w-[135px] sm:w-[195px] md:w-[225px] h-[135px] sm:h-[195px] md:h-[225px] rounded-full overflow-hidden border border-purple-500/40 bg-[#090B0E] flex items-center justify-center shadow-2xl shadow-purple-500/20 pointer-events-none"
            >
              <div className="relative w-full h-full">
                <Image
                  src="/images/tuly-portrait.jpg"
                  alt="Umma Habiba Tuly — AI Automation Engineer"
                  fill
                  priority
                  loading="eager"
                  quality={95}
                  sizes="(max-width: 768px) 100vw, 220px"
                  className="object-cover object-[center_12%] scale-[1.05] filter brightness-[1.04] contrast-[1.03]"
                />
              </div>
            </m.div>

            {/* 4. All 10 Tech Badges Displayed Simultaneously (Zero Rotation, 100% Horizontal) */}
            <div className="absolute inset-0 w-full h-full pointer-events-auto z-20">
              {ALL_TECH_BADGES.map((badge, index) => (
                <m.div
                  key={badge.name}
                  animate={{ y: [0, -9, 0], scale: [1, 1.03, 1] }}
                  transition={{
                    duration: parseFloat(badge.floatDuration) || 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.35,
                  }}
                  whileHover={{ scale: 1.12, zIndex: 40 }}
                  className={`absolute ${badge.position}`}
                >
                  <div
                    className={`flex items-center gap-1 sm:gap-1.5 px-2 min-[360px]:px-2.5 sm:px-3.5 py-0.5 min-[360px]:py-1 sm:py-1.5 rounded-full bg-[#090B0E]/90 backdrop-blur-md border ${badge.border} text-[9px] min-[360px]:text-[10px] sm:text-xs font-mono ${badge.text} shadow-xl select-none cursor-pointer whitespace-nowrap shadow-indigo-500/10 hover:border-emerald-400 hover:text-white transition-colors duration-200`}
                  >
                    {badge.icon}
                    <span>{badge.name}</span>
                  </div>
                </m.div>
              ))}
            </div>

            {/* Status Pill (Positioned under portrait with verified status) */}
            <m.div
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-7 sm:-bottom-6 left-1/2 -translate-x-1/2 z-30 px-2 min-[360px]:px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-xl bg-[#090B0E]/95 backdrop-blur-md border border-white/10 flex items-center gap-1 min-[360px]:gap-1.5 sm:gap-2 text-[9px] min-[360px]:text-[10px] sm:text-xs font-mono shadow-2xl whitespace-nowrap"
            >
              <div className="flex items-center gap-1.5 whitespace-nowrap">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
                <span className="text-white font-medium whitespace-nowrap">Umma Habiba Tuly</span>
              </div>
              <span className="text-slate-600 flex-shrink-0 mx-0.5">|</span>
              <span className="text-emerald-400 font-semibold whitespace-nowrap">Production AI Architect</span>
            </m.div>
          </m.div>

        </div>
      </Container>
    </Section>
  );
};

export default HeroSection;
