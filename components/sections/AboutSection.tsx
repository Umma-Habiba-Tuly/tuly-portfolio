"use client";

import React from "react";
import { m } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { ABOUT_DATA } from "@/data/about";
import { MotionSection } from "@/components/motion/MotionSection";
import { MotionStagger } from "@/components/motion/MotionStagger";
import { MotionItem } from "@/components/motion/MotionItem";
import { precisionTransition } from "@/lib/motion/transitions";
import {
  User,
  ShieldCheck,
  Eye,
  TrendingUp,
  ShoppingBag,
  Building2,
  Rocket,
  Workflow,
  GraduationCap,
  Sparkles,
  CheckCircle2,
  Briefcase,
  ExternalLink,
  FileDown,
} from "lucide-react";

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

const industryIconMap: Record<string, React.ReactNode> = {
  ShoppingBag: <ShoppingBag className="w-4 h-4 text-emerald-400" />,
  Building2: <Building2 className="w-4 h-4 text-sky-400" />,
  Rocket: <Rocket className="w-4 h-4 text-amber-400" />,
  Workflow: <Workflow className="w-4 h-4 text-violet-400" />,
  GraduationCap: <GraduationCap className="w-4 h-4 text-indigo-400" />,
};

const principleIconMap: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
  Eye: <Eye className="w-5 h-5 text-indigo-400" />,
  TrendingUp: <TrendingUp className="w-5 h-5 text-sky-400" />,
};

export const AboutSection: React.FC = () => {
  return (
    <Section id="about" variant="alternate" className="py-24 md:py-32 relative bg-[#0B0F19]">
      {/* Subtle Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center_left,_var(--tw-gradient-stops))] from-indigo-950/30 via-transparent to-transparent opacity-80" />

      <Container maxWidth="xl" className="relative z-10">
        {/* Section Header */}
        <MotionSection className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-mono text-purple-300 font-semibold tracking-wide uppercase mb-4">
            <User className="w-3.5 h-3.5" />
            Engineering Profile
          </div>

          <Heading as="h2" size="displayXl" className="tracking-tight text-white text-2xl sm:text-3xl md:text-[36px] font-bold">
            Meet the Engineer
          </Heading>

          <Text size="base" variant="secondary" className="mt-4 text-slate-300 leading-[1.6]">
            Designing and deploying practical AI automation systems, multi-agent architectures, and workflow pipelines for growing businesses.
          </Text>
        </MotionSection>

        {/* Main Content 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
          {/* Left Column: Engineer Profile Card + Resume Download (5 cols) */}
          <MotionSection className="lg:col-span-5 flex flex-col gap-6">
            <Card variant="feature" className="p-6 sm:p-8 border-purple-500/30 bg-card/95 text-center flex flex-col items-center relative overflow-hidden shadow-2xl">
              {/* 1. Portrait inside Profile Card */}
              <m.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ scale: 1.03 }}
                className="relative mb-6 group cursor-pointer w-full max-w-[280px] aspect-[3/4] mx-auto"
              >
                <div className="w-full h-full rounded-2xl bg-gradient-to-tr from-purple-500 via-emerald-400 to-sky-500 p-[2.5px] shadow-2xl overflow-hidden">
                  <div className="w-full h-full rounded-[13px] bg-[#090B0E] relative overflow-hidden">
                    <Image
                      src="/images/tuly-portrait.jpg"
                      alt="Umma Habiba Tuly — AI Automation Engineer"
                      fill
                      quality={95}
                      priority
                      sizes="(max-width: 768px) 100vw, 300px"
                      className="object-cover object-top filter brightness-[1.03] transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
                  </div>
                </div>
                <span className="absolute -bottom-2 right-4 px-3 py-1 rounded-full bg-emerald-500 text-slate-950 text-xs font-mono font-bold shadow-lg flex items-center gap-1">
                  <span>✓ Verified AI Engineer</span>
                </span>
              </m.div>

              {/* Founder @ AT Sync Tagline */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-xs font-mono text-purple-300 font-semibold tracking-wide uppercase mb-3">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                {ABOUT_DATA.tagline}
              </div>

              {/* Animated Availability Status Badge */}
              <m.div
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15, ...precisionTransition }}
                className="flex items-center gap-2 text-emerald-400 text-xs font-mono font-medium mb-4"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>{ABOUT_DATA.availabilityStatus}</span>
              </m.div>

              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {ABOUT_DATA.name}
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-emerald-400 font-mono mt-0.5">
                {ABOUT_DATA.role}
              </p>

              {/* Tech Badges */}
              <div className="mt-6 pt-5 border-t border-white/[0.08] w-full flex flex-wrap justify-center gap-1.5">
                {["Python", "n8n", "Qdrant", "LangChain", "OpenAI", "FastAPI"].map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded bg-white/[0.04] border border-white/[0.06] text-xs font-mono text-slate-300 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Card>

            {/* Target Industries Box */}
            <div className="p-6 rounded-2xl bg-card border border-white/10">
              <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-emerald-400" />
                Industries I Work With
              </h4>
              <MotionStagger className="flex flex-wrap gap-2">
                {ABOUT_DATA.industries.map((ind) => (
                  <MotionItem key={ind.id} hoverEffect>
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.06] text-xs font-medium text-slate-200">
                      {industryIconMap[ind.iconName] || <Sparkles className="w-3.5 h-3.5 text-indigo-400" />}
                      <span>{ind.name}</span>
                    </span>
                  </MotionItem>
                ))}
              </MotionStagger>
            </div>

            {/* Compact LinkedIn Engineering Journey Card */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-sky-950/40 via-card to-sky-950/30 border border-sky-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center shrink-0">
                  <LinkedinIcon className="w-5 h-5 fill-sky-400" />
                </div>
                <div>
                  <h4 className="text-xs font-mono text-sky-400 font-bold uppercase tracking-wider">
                    Follow My Engineering Journey
                  </h4>
                  <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">
                    Weekly AI automation breakdowns & n8n blueprints on LinkedIn.
                  </p>
                </div>
              </div>

              <m.a
                href="https://www.linkedin.com/in/umma-habiba-tuly-cse/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-500/20 border border-sky-400/40 text-xs font-medium text-sky-300 hover:bg-sky-500/30 transition-all shrink-0 cursor-pointer"
              >
                <span>Follow</span>
                <ExternalLink className="w-3 h-3" />
              </m.a>
            </div>
          </MotionSection>

          {/* Right Column: Bio Narrative, Principles & Milestones (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <MotionSection className="space-y-4">
              <h3 className="text-lg sm:text-[20px] font-semibold text-white tracking-snug">
                Practical AI Engineering for Scalable Operations
              </h3>
              {ABOUT_DATA.bio.map((paragraph, idx) => (
                <p key={idx} className="text-[15px] sm:text-base text-slate-300 leading-[1.6]">
                  {paragraph}
                </p>
              ))}
            </MotionSection>

            <div>
              <h4 className="text-xs font-mono text-slate-300 font-semibold tracking-[0.03em] uppercase mb-4">
                Core Engineering Principles
              </h4>
              <MotionStagger className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {ABOUT_DATA.principles.map((pr) => (
                  <MotionItem key={pr.id} hoverEffect>
                    <div className="p-4 rounded-xl bg-card/80 border border-white/10 hover:border-purple-500/30 transition-colors duration-200 flex flex-col justify-between h-full">
                      <div className="w-9 h-9 rounded-lg bg-white/[0.05] border border-white/10 flex items-center justify-center mb-3">
                        {principleIconMap[pr.iconName] || <Sparkles className="w-4 h-4 text-purple-400" />}
                      </div>
                      <div>
                        <h5 className="text-sm font-semibold text-white leading-snug">
                          {pr.title}
                        </h5>
                        <p className="mt-1.5 text-xs sm:text-[13px] text-slate-300 leading-[1.5]">
                          {pr.description}
                        </p>
                      </div>
                    </div>
                  </MotionItem>
                ))}
              </MotionStagger>
            </div>

            <div>
              <h4 className="text-xs font-mono text-slate-300 font-semibold tracking-[0.03em] uppercase mb-4">
                Experience & Real Milestones
              </h4>
              <MotionStagger className="space-y-3">
                {ABOUT_DATA.milestones.map((ms) => (
                  <MotionItem key={ms.id}>
                    <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-start gap-3.5">
                      <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <h5 className="text-sm font-semibold text-white">
                          {ms.title}
                        </h5>
                        <p className="mt-1 text-xs sm:text-[13px] text-slate-300 leading-[1.5]">
                          {ms.description}
                        </p>
                      </div>
                    </div>
                  </MotionItem>
                ))}
              </MotionStagger>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default AboutSection;
