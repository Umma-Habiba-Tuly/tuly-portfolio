"use client";

import React, { useEffect, useState } from "react";
import { m } from "framer-motion";
import { cn } from "@/lib/utils";
import { precisionTransition } from "@/lib/motion/transitions";

// --- Sub-component: StatusPanel ---
export interface StatusPanelProps {
  statusText?: string;
  engineVersion?: string;
  latency?: string;
}

export const StatusPanel: React.FC<StatusPanelProps> = ({
  statusText = "LIVE AGENT WORKFLOW",
  engineVersion = "AUTON-ENGINE v2.4",
  latency = "14ms",
}) => {
  return (
    <div className="flex items-center justify-between px-4 py-3 bg-white/[0.03] border-b border-white/10 text-xs font-mono">
      <div className="flex items-center gap-2">
        <div className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
        </div>
        <span className="text-slate-200 font-semibold tracking-wider uppercase">{statusText}</span>
      </div>
      <div className="flex items-center gap-3 text-slate-400">
        <span className="hidden sm:inline">{engineVersion}</span>
        <span className="text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">
          {latency}
        </span>
      </div>
    </div>
  );
};

// --- Sub-component: WorkflowGraph ---
export interface WorkflowNodeData {
  id: string;
  label: string;
  type: "trigger" | "agent" | "tool" | "output";
  status: "completed" | "active" | "pending";
}

export const WorkflowGraph: React.FC<{ activeStep: number }> = ({ activeStep }) => {
  const nodes: WorkflowNodeData[] = [
    { id: "1", label: "Inbound Trigger", type: "trigger", status: activeStep >= 0 ? (activeStep === 0 ? "active" : "completed") : "pending" },
    { id: "2", label: "Agent Orchestrator", type: "agent", status: activeStep >= 1 ? (activeStep === 1 ? "active" : "completed") : "pending" },
    { id: "3", label: "API Tool Execution", type: "tool", status: activeStep >= 2 ? (activeStep === 2 ? "active" : "completed") : "pending" },
    { id: "4", label: "Automated Action", type: "output", status: activeStep >= 3 ? (activeStep === 3 ? "active" : "completed") : "pending" },
  ];

  return (
    <div className="p-5 bg-card/60 border-b border-white/10">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
        {nodes.map((node, index) => {
          const isActive = node.status === "active";
          const isCompleted = node.status === "completed";

          return (
            <m.div
              key={node.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.08, ...precisionTransition }}
              className={cn(
                "p-3 rounded-xl border text-xs font-mono transition-all duration-300 relative flex flex-col justify-between h-20",
                isActive
                  ? "bg-indigo-500/15 border-indigo-500 text-white shadow-lg shadow-indigo-500/10 ring-1 ring-indigo-500/50"
                  : isCompleted
                  ? "bg-slate-900/60 border-emerald-500/30 text-slate-300"
                  : "bg-slate-900/40 border-white/[0.06] text-slate-500"
              )}
            >
              <div className="flex items-center justify-between text-[10px]">
                <span className="text-slate-400">0{index + 1}</span>
                <span
                  className={cn(
                    "w-2 h-2 rounded-full transition-all duration-300",
                    isActive
                      ? "bg-indigo-400 animate-pulse ring-2 ring-indigo-400/50"
                      : isCompleted
                      ? "bg-emerald-400/90"
                      : "bg-slate-700"
                  )}
                />
              </div>
              <span className="font-sans font-medium text-xs leading-snug line-clamp-2 mt-1">
                {node.label}
              </span>
            </m.div>
          );
        })}
      </div>
    </div>
  );
};

// --- Sub-component: ExecutionLogs ---
export interface LogEntry {
  timestamp: string;
  message: string;
  level: "info" | "success" | "exec";
}

export const ExecutionLogs: React.FC<{ logs: LogEntry[] }> = ({ logs }) => {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4, ...precisionTransition }}
      className="p-4 bg-[#07090C] font-mono text-xs text-slate-300 h-44 overflow-y-auto space-y-2 select-none scrollbar-thin"
    >
      {logs.map((log, idx) => (
        <m.div
          key={idx}
          initial={{ opacity: 0, x: -4 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.45 + idx * 0.05, ...precisionTransition }}
          className="flex items-start gap-2 leading-relaxed"
        >
          <span className="text-slate-400 shrink-0">[{log.timestamp}]</span>
          <span
            className={cn(
              log.level === "success"
                ? "text-emerald-400 font-semibold"
                : log.level === "exec"
                ? "text-indigo-400"
                : "text-slate-300"
            )}
          >
            {log.message}
          </span>
        </m.div>
      ))}
    </m.div>
  );
};

// --- Main Composite Component: WorkflowVisualizer ---
export interface WorkflowVisualizerProps {
  className?: string;
}

export const WorkflowVisualizer: React.FC<WorkflowVisualizerProps> = ({ className }) => {
  const [activeStep, setActiveStep] = useState(0);

  const initialLogs: LogEntry[] = [
    { timestamp: "00:01", message: "Listening for webhook trigger...", level: "info" },
    { timestamp: "00:02", message: "Event received: Lead Intake Payload", level: "success" },
    { timestamp: "00:03", message: "Routing to Multi-Agent Pipeline", level: "exec" },
    { timestamp: "00:04", message: "Executing tool: syncCRM() & notifySlack()", level: "exec" },
    { timestamp: "00:05", message: "Automation complete (200 OK)", level: "success" },
  ];

  // Continuous active step loop
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={cn(
        "bg-card/90 border border-white/10 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-md relative group hover:border-white/20 transition-all duration-300",
        className
      )}
    >
      {/* Decorative top highlight */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />
      
      <StatusPanel />
      <WorkflowGraph activeStep={activeStep} />
      <ExecutionLogs logs={initialLogs} />
    </div>
  );
};

export default WorkflowVisualizer;
