"use client";

import React, { useState, useEffect } from "react";
import { m, AnimatePresence } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { Card } from "@/components/ui/Card";
import { WORKFLOW_STEPS } from "@/data/workflow";
import { MotionSection } from "@/components/motion/MotionSection";
import { MotionStagger } from "@/components/motion/MotionStagger";
import { MotionItem } from "@/components/motion/MotionItem";
import { precisionTransition, smoothTransition } from "@/lib/motion/transitions";
import {
  User,
  MessageSquare,
  Webhook,
  Workflow,
  Bot,
  Database,
  Zap,
  Send,
  Terminal,
  Pause,
  Play,
  CheckCircle2,
  Sparkles,
  Layers,
  Activity,
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  User: <User className="w-5 h-5 text-indigo-400" />,
  MessageSquare: <MessageSquare className="w-5 h-5 text-sky-400" />,
  Webhook: <Webhook className="w-5 h-5 text-amber-400" />,
  Workflow: <Workflow className="w-5 h-5 text-violet-400" />,
  Bot: <Bot className="w-5 h-5 text-emerald-400" />,
  Database: <Database className="w-5 h-5 text-teal-400" />,
  Zap: <Zap className="w-5 h-5 text-yellow-400" />,
  Send: <Send className="w-5 h-5 text-emerald-300" />,
};

interface ExecutionLogItem {
  time: string;
  event: string;
  stepName: string;
  status: "success" | "info";
}

export const WorkflowSection: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const activeStep = WORKFLOW_STEPS[activeStepIndex];

  // Auto-cycle every 3 seconds, paused on hover
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveStepIndex((prevIndex) => (prevIndex + 1) % WORKFLOW_STEPS.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [isPaused]);

  const executionLogs: ExecutionLogItem[] = [
    { time: "00:01.04", event: "Webhook received", stepName: "Webhook", status: "info" },
    { time: "00:01.12", event: "Session identified", stepName: "n8n Engine", status: "info" },
    { time: "00:01.28", event: "Knowledge search started", stepName: "Qdrant Vector DB", status: "info" },
    { time: "00:01.45", event: "Relevant documents found", stepName: "Qdrant Vector DB", status: "success" },
    { time: "00:01.82", event: "Response generated", stepName: "AI Agent", status: "success" },
    { time: "00:02.10", event: "Message delivered", stepName: "Messenger / Chat", status: "success" },
  ];

  return (
    <Section id="architecture" variant="default" className="py-20 md:py-28 relative">
      {/* Subtle Background Radial Glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-950/30 via-transparent to-transparent opacity-75" />

      <Container maxWidth="xl" className="relative z-10">
        {/* Section Header */}
        <MotionSection className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14 md:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-mono text-purple-300 font-semibold tracking-wide uppercase mb-4">
            <Layers className="w-3.5 h-3.5" />
            System Architecture
          </div>

          <Heading as="h2" size="displayXl" className="tracking-tight text-white text-2xl sm:text-3xl md:text-[36px] font-bold">
            How My AI Automation Systems Work
          </Heading>

          <Text size="base" variant="secondary" className="mt-4 text-slate-300 leading-[1.6]">
            A step-by-step visual breakdown showing how customer interactions flow through webhooks, n8n orchestration, AI agents, and Qdrant vector retrieval.
          </Text>
        </MotionSection>

        {/* Workflow Diagram & Telemetry Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Flow Steps Graph (7 cols) */}
          <MotionSection className="lg:col-span-7 flex flex-col gap-4">
            <div
              className="flex flex-col gap-4"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Header controls indicator */}
              <div className="flex items-center justify-between px-4 py-2.5 rounded-xl bg-card border border-white/10 text-xs font-mono">
                <div className="flex items-center gap-2 text-slate-300">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>LIVE WORKFLOW ENGINE</span>
                </div>

                <div className="flex items-center gap-3 text-slate-400">
                  <span className="text-[11px] text-slate-400 hidden sm:inline">
                    {isPaused ? "Paused (Hovered)" : "Auto-cycling (3s)"}
                  </span>
                  <button
                    onClick={() => setIsPaused(!isPaused)}
                    className="p-1 rounded hover:bg-white/10 text-slate-300 transition-colors"
                    aria-label={isPaused ? "Play animation" : "Pause animation"}
                  >
                    {isPaused ? <Play className="w-3.5 h-3.5 text-emerald-400" /> : <Pause className="w-3.5 h-3.5 text-indigo-400" />}
                  </button>
                </div>
              </div>

              {/* Interactive Node List with Animated Data Flow */}
              <MotionStagger className="grid grid-cols-1 sm:grid-cols-2 gap-3 relative">
                {WORKFLOW_STEPS.map((step, idx) => {
                  const isActive = idx === activeStepIndex;
                  const isPassed = idx < activeStepIndex;

                  return (
                    <MotionItem key={step.id}>
                      <m.div
                        onClick={() => setActiveStepIndex(idx)}
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        className={`p-4 rounded-xl border text-left cursor-pointer transition-all duration-300 relative overflow-hidden ${
                          isActive
                            ? "bg-gradient-to-r from-indigo-950/70 to-card border-indigo-500 text-white shadow-lg shadow-indigo-500/15 ring-1 ring-indigo-500/50"
                            : isPassed
                            ? "bg-card/90 border-emerald-500/30 text-slate-200 hover:border-emerald-500/50"
                            : "bg-card/50 border-white/[0.06] text-slate-400 hover:border-white/20 hover:text-slate-200"
                        }`}
                      >
                        {/* Animated Data Flow Beam on Active Node */}
                        {isActive && (
                          <m.div
                            layoutId="activeNodeGlow"
                            className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-indigo-500 via-emerald-400 to-sky-400"
                            transition={smoothTransition}
                          />
                        )}

                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <div className="w-7 h-7 rounded-lg bg-white/[0.05] border border-white/10 flex items-center justify-center shrink-0">
                              {step.iconName ? iconMap[step.iconName] : <Sparkles className="w-4 h-4 text-indigo-400" />}
                            </div>
                            <span className="text-[11px] font-mono text-slate-400 font-semibold uppercase">
                              Step 0{step.stepNumber}
                            </span>
                          </div>

                          {isActive ? (
                            <div className="flex items-center gap-1">
                              <Activity className="w-3.5 h-3.5 text-indigo-400 animate-pulse" />
                              <span className="w-2 h-2 rounded-full bg-indigo-400 animate-ping" />
                            </div>
                          ) : isPassed ? (
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                          ) : null}
                        </div>

                        <h4 className="text-sm font-bold text-white">
                          {step.title}
                        </h4>

                        <p className="mt-1 text-xs text-slate-400 line-clamp-2 leading-relaxed">
                          {step.description}
                        </p>
                      </m.div>
                    </MotionItem>
                  );
                })}
              </MotionStagger>
            </div>
          </MotionSection>

          {/* Right Column: Stage Inspector & Progressive Execution Telemetry Logs (5 cols) */}
          <m.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={precisionTransition}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {/* Inspector Panel with AnimatePresence Smooth State Shift */}
            <Card variant="feature" className="p-6 border-indigo-500/30 bg-card relative overflow-hidden">
              <AnimatePresence mode="wait">
                <m.div
                  key={activeStepIndex}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                    <div>
                      <span className="text-xs font-mono text-indigo-400 uppercase tracking-wider">
                        Stage {activeStep.stepNumber} of 8
                      </span>
                      <h3 className="text-lg font-bold text-white mt-0.5">
                        {activeStep.title}
                      </h3>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center shrink-0">
                      {activeStep.iconName ? iconMap[activeStep.iconName] : <Sparkles className="w-5 h-5 text-indigo-400" />}
                    </div>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed mb-4">
                    {activeStep.description}
                  </p>

                  <div className="mb-4">
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-2">
                      Primary Tech / Tools:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {activeStep.tools.map((tool) => (
                        <span
                          key={tool}
                          className="px-2.5 py-1 rounded bg-white/[0.05] text-xs font-mono text-emerald-300 border border-emerald-500/20"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-400">Current Action:</span>
                    <span className="text-emerald-400 font-semibold">{activeStep.logMessage}</span>
                  </div>
                </m.div>
              </AnimatePresence>
            </Card>

            {/* Progressive Telemetry Logs Box */}
            <div className="rounded-2xl border border-white/10 bg-[#07090C] p-4 sm:p-5 font-mono text-xs shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                <div className="flex items-center gap-2 text-slate-300">
                  <Terminal className="w-4 h-4 text-emerald-400" />
                  <span className="font-semibold text-slate-200">Execution Telemetry</span>
                </div>
                <span className="text-[11px] text-slate-400">Live Events</span>
              </div>

              {/* Progressively Streamed Log Items */}
              <MotionStagger className="space-y-2.5">
                {executionLogs.map((log, idx) => (
                  <MotionItem key={idx}>
                    <div className="flex flex-wrap items-center justify-between gap-1.5 text-slate-300 text-[10.5px] xs:text-[11px]">
                      <div className="flex items-center gap-2 truncate min-w-0">
                        <span className="text-slate-400 shrink-0">[{log.time}]</span>
                        <span className={`truncate ${log.status === "success" ? "text-emerald-400 font-medium" : "text-indigo-300"}`}>
                          {log.event}
                        </span>
                      </div>
                      <span className="text-slate-400 shrink-0 text-[9.5px] xs:text-[10px] font-mono">{log.stepName}</span>
                    </div>
                  </MotionItem>
                ))}
              </MotionStagger>
            </div>
          </m.div>
        </div>
      </Container>
    </Section>
  );
};

export default WorkflowSection;
