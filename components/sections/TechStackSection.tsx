"use client";

import React from "react";
import { Container } from "@/components/layout/Container";
import { TechBadge } from "@/components/shared/TechBadge";
import { TRUSTED_TECH } from "@/data/skills";
import { MotionSection } from "@/components/motion/MotionSection";
import { MotionStagger } from "@/components/motion/MotionStagger";
import { MotionItem } from "@/components/motion/MotionItem";
import {
  Cpu,
  Bot,
  Sparkles,
  Workflow,
  Database,
  Layers,
  Zap,
  Code,
  Server,
  Box,
  Globe,
  FileCode,
  Palette,
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Cpu: <Cpu className="w-4 h-4" />,
  Bot: <Bot className="w-4 h-4" />,
  Sparkles: <Sparkles className="w-4 h-4" />,
  Workflow: <Workflow className="w-4 h-4" />,
  Database: <Database className="w-4 h-4" />,
  Layers: <Layers className="w-4 h-4" />,
  Zap: <Zap className="w-4 h-4" />,
  Code: <Code className="w-4 h-4" />,
  Server: <Server className="w-4 h-4" />,
  Box: <Box className="w-4 h-4" />,
  Globe: <Globe className="w-4 h-4" />,
  FileCode: <FileCode className="w-4 h-4" />,
  Palette: <Palette className="w-4 h-4" />,
};

export const TechStackSection: React.FC = () => {
  return (
    <MotionSection
      id="tech-stack"
      className="relative py-8 md:py-12 bg-background border-t border-white/[0.06]"
    >
      <Container maxWidth="xl">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          {/* Section Heading */}
          <div className="shrink-0">
            <h3 className="font-mono text-xs text-slate-300 font-semibold tracking-[0.03em] uppercase">
              Technology Stack
            </h3>
          </div>

          {/* Horizontal Tech Badges Stagger Container */}
          <MotionStagger className="flex flex-wrap items-center gap-2.5">
            {TRUSTED_TECH.map((tech) => (
              <MotionItem key={tech.id} hoverEffect>
                <TechBadge
                  name={tech.name}
                  category={tech.category}
                  icon={tech.iconName ? iconMap[tech.iconName] : undefined}
                />
              </MotionItem>
            ))}
          </MotionStagger>
        </div>
      </Container>
    </MotionSection>
  );
};

export default TechStackSection;
