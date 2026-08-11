"use client";

import React, { useRef, useEffect, useState } from "react";
import { m, useInView, useSpring, useTransform } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { MotionSection } from "@/components/motion/MotionSection";
import { MotionStagger } from "@/components/motion/MotionStagger";
import { MotionItem } from "@/components/motion/MotionItem";
import {
  ShieldCheck,
  Bot,
  Workflow,
  Clock,
  Sparkles,
  Zap,
} from "lucide-react";

// Animated Counter component for numeric metrics
interface CounterProps {
  value: number;
  suffix?: string;
}

const AnimatedCounter: React.FC<CounterProps> = ({ value, suffix = "" }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  const spring = useSpring(0, {
    stiffness: 75,
    damping: 20,
    restDelta: 0.001,
  });

  const displayValue = useTransform(spring, (latest) => Math.floor(latest));
  const [currentValue, setCurrentValue] = useState<number>(0);

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, spring, value]);

  useEffect(() => {
    const unsubscribe = displayValue.on("change", (latest) => {
      setCurrentValue(latest);
    });
    return () => unsubscribe();
  }, [displayValue]);

  return (
    <span ref={ref} className="font-extrabold font-mono tracking-tight text-white">
      {currentValue}
      {suffix}
    </span>
  );
};

export const SocialProofSection: React.FC = () => {
  const stats = [
    {
      id: "stat-1",
      numericValue: 20,
      suffix: "+",
      textValue: null,
      label: "AI Systems Built",
      subtext: "Deployed for client workflows",
      icon: <Bot className="w-5 h-5 text-cyan-400" />,
      accentColor: "from-cyan-500/20 via-cyan-500/5 to-transparent",
      borderColor: "group-hover:border-cyan-500/40",
      glowColor: "group-hover:shadow-cyan-500/10",
      iconBg: "bg-cyan-500/10 border-cyan-500/20",
    },
    {
      id: "stat-2",
      numericValue: 8,
      suffix: "+",
      textValue: null,
      label: "Business Workflows",
      subtext: "Orchestrated & automated",
      icon: <Workflow className="w-5 h-5 text-purple-400" />,
      accentColor: "from-purple-500/20 via-purple-500/5 to-transparent",
      borderColor: "group-hover:border-purple-500/40",
      glowColor: "group-hover:shadow-purple-500/10",
      iconBg: "bg-purple-500/10 border-purple-500/20",
    },
    {
      id: "stat-3",
      numericValue: null,
      suffix: "",
      textValue: "24/7",
      label: "Support Automation",
      subtext: "Autonomous agent response",
      icon: <Clock className="w-5 h-5 text-emerald-400" />,
      accentColor: "from-emerald-500/20 via-emerald-500/5 to-transparent",
      borderColor: "group-hover:border-emerald-500/40",
      glowColor: "group-hover:shadow-emerald-500/10",
      iconBg: "bg-emerald-500/10 border-emerald-500/20",
    },
    {
      id: "stat-4",
      numericValue: null,
      suffix: "",
      textValue: "Production",
      label: "Ready Solutions",
      subtext: "Tested & non-brittle",
      icon: <ShieldCheck className="w-5 h-5 text-indigo-400" />,
      accentColor: "from-indigo-500/20 via-indigo-500/5 to-transparent",
      borderColor: "group-hover:border-indigo-500/40",
      glowColor: "group-hover:shadow-indigo-500/10",
      iconBg: "bg-indigo-500/10 border-indigo-500/20",
    },
  ];

  return (
    <section className="py-12 md:py-16 relative bg-[#07090E] border-y border-white/[0.08] overflow-hidden">
      {/* Gentle Radial Accent Glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_0%,_var(--tw-gradient-stops))] from-cyan-950/20 via-transparent to-transparent opacity-60" />

      <Container maxWidth="xl" className="relative z-10">
        {/* Section Header */}
        <MotionSection className="flex flex-col items-center text-center max-w-2xl mx-auto mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-300 font-semibold tracking-wide uppercase mb-3 shadow-md shadow-cyan-500/5">
            <Zap className="w-3.5 h-3.5 text-cyan-400" />
            <span>Trusted AI Automation Engineer</span>
          </div>

          <Heading as="h2" size="lg" className="tracking-tight text-white text-xl sm:text-2xl md:text-3xl font-bold">
            Building production-ready AI systems for modern businesses.
          </Heading>

          <Text size="sm" variant="secondary" className="mt-2 text-slate-300 leading-relaxed max-w-lg">
            Engineering robust, non-brittle multi-agent architectures, n8n visual pipelines, and vector knowledge bases.
          </Text>
        </MotionSection>

        {/* 4 Social Proof Metric Cards Grid */}
        <MotionStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-6">
          {stats.map((stat) => (
            <MotionItem key={stat.id}>
              <m.div
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className={`py-2.5 px-3 sm:p-7 rounded-2xl bg-card/70 border border-white/10 ${stat.borderColor} ${stat.glowColor} transition-all duration-300 relative overflow-hidden group shadow-xl flex flex-row sm:flex-col items-center sm:items-stretch justify-between gap-2.5 sm:gap-0 h-auto sm:h-full`}
              >
                {/* Top Subtle Animated Gradient Beam */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Ambient Card Radial Tint */}
                <div className={`absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br ${stat.accentColor} blur-2xl pointer-events-none rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300`} />

                {/* Mobile Left / Desktop Top Icon & Metric Row */}
                <div className="flex items-center gap-2.5 sm:justify-between sm:mb-5 shrink-0">
                  <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-xl border flex items-center justify-center shrink-0 ${stat.iconBg} group-hover:scale-110 transition-transform duration-300`}>
                    {stat.icon}
                  </div>
                  
                  {/* Metric Display on Mobile (beside Icon) */}
                  <div className="sm:hidden text-xl min-[360px]:text-2xl font-extrabold text-white tracking-tight flex items-baseline shrink-0 font-mono">
                    {stat.numericValue !== null ? (
                      <AnimatedCounter value={stat.numericValue} suffix={stat.suffix} />
                    ) : (
                      <span>{stat.textValue}</span>
                    )}
                  </div>

                  {/* Desktop Status Dot */}
                  <span className="hidden sm:block w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-sm shadow-emerald-400/50" />
                </div>

                {/* Text Content Area */}
                <div className="flex-1 min-w-0 sm:flex-initial">
                  {/* Metric Display on Desktop (above Label) */}
                  <div className="hidden sm:flex text-3xl sm:text-4xl font-extrabold text-white tracking-tight items-baseline gap-1 mb-1.5">
                    {stat.numericValue !== null ? (
                      <AnimatedCounter value={stat.numericValue} suffix={stat.suffix} />
                    ) : (
                      <span className="text-3xl sm:text-4xl font-extrabold font-mono text-white tracking-tight truncate block">
                        {stat.textValue}
                      </span>
                    )}
                  </div>

                  <h3 className="font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-200 truncate">
                    {stat.label}
                  </h3>

                  <p className="mt-0.5 sm:mt-1 text-[11px] sm:text-xs text-slate-300 leading-tight sm:leading-relaxed font-normal truncate">
                    {stat.subtext}
                  </p>
                </div>

                {/* Mobile Status Dot on Far Right */}
                <span className="sm:hidden w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-sm shadow-emerald-400/50 shrink-0 ml-1" />
              </m.div>
            </MotionItem>
          ))}
        </MotionStagger>
      </Container>
    </section>
  );
};

export default SocialProofSection;
