"use client";

import React, { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { PROJECTS } from "@/data/projects";
import { MotionSection } from "@/components/motion/MotionSection";
import { MotionStagger } from "@/components/motion/MotionStagger";
import { MotionItem } from "@/components/motion/MotionItem";
import { precisionTransition, hoverTransition } from "@/lib/motion/transitions";
import { WearInspiredCaseStudy } from "@/components/shared/WearInspiredCaseStudy";
import {
  FolderGit2,
  Check,
  ArrowRight,
  Sparkles,
  Clock,
  CheckCircle2,
  Bot,
  Building2,
  Database,
  Workflow,
  X,
} from "lucide-react";

const projectIconMap: Record<string, React.ReactNode> = {
  "wear-inspired-ai-support": <Bot className="w-6 h-6 text-emerald-400" />,
  "hotel-ai-receptionist": <Building2 className="w-6 h-6 text-amber-400" />,
  "knowledge-base-rag": <Database className="w-6 h-6 text-sky-400" />,
  "business-workflow-automation": <Workflow className="w-6 h-6 text-violet-400" />,
};

export const ProjectsSection: React.FC = () => {
  const featuredProject = PROJECTS.find((p) => p.featured) || PROJECTS[0];
  const regularProjects = PROJECTS.filter((p) => p.id !== featuredProject.id);
  const [selectedProject, setSelectedProject] = useState<typeof regularProjects[0] | null>(null);

  return (
    <Section id="work" variant="default" className="py-20 md:py-28 relative bg-[#090B10]">
      {/* Background Radial Glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-950/20 via-transparent to-transparent opacity-80" />

      <Container maxWidth="xl" className="relative z-10">
        {/* Section Header */}
        <MotionSection className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14 md:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-mono text-purple-300 font-semibold tracking-wide uppercase mb-4">
            <FolderGit2 className="w-3.5 h-3.5" />
            Case Studies & Architecture
          </div>

          <Heading as="h2" size="displayXl" className="tracking-tight text-white text-2xl sm:text-3xl md:text-[36px] font-bold">
            Featured Case Studies
          </Heading>

          <Text size="base" variant="secondary" className="mt-4 text-slate-300 leading-[1.6]">
            In-depth technical case studies featuring live video walkthroughs, system architecture event pipelines, and verified operational outcomes.
          </Text>
        </MotionSection>

        {/* Featured Case Study Hero Card */}
        {featuredProject && (
          <MotionSection className="mb-12">
            <WearInspiredCaseStudy project={featuredProject} />
          </MotionSection>
        )}

        {/* Additional Projects Grid */}
        <MotionStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {regularProjects.map((project) => {
            const isInDevelopment = project.status === "in-development";

            return (
              <MotionItem key={project.id}>
                <m.div
                  whileHover={{ y: -4 }}
                  transition={hoverTransition}
                  className="h-full cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <Card
                    variant="interactive"
                    className={`flex flex-col justify-between p-6 rounded-2xl relative group h-full transition-all duration-300 ${
                      isInDevelopment
                        ? "border-amber-500/30 hover:border-amber-400/60 bg-card/90"
                        : "hover:border-purple-500/40 hover:shadow-purple-500/10"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-3 mb-4">
                        <div className="flex items-center gap-2.5">
                          <m.div
                            initial={{ scale: 0.85, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1, ...precisionTransition }}
                            className="w-9 h-9 rounded-lg bg-white/[0.05] border border-white/10 flex items-center justify-center shrink-0 group-hover:border-purple-400/40 transition-colors"
                          >
                            {projectIconMap[project.id] || <Sparkles className="w-4 h-4 text-purple-400" />}
                          </m.div>
                          {project.category && (
                            <span className="text-xs font-mono text-slate-300 font-semibold uppercase tracking-wider">
                              {project.category}
                            </span>
                          )}
                        </div>

                        {isInDevelopment ? (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-mono text-amber-400 font-semibold tracking-wide">
                            <Clock className="w-3.5 h-3.5 animate-spin" />
                            In Development
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400 font-semibold">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            Completed
                          </span>
                        )}
                      </div>

                      <h3 className="text-[18px] sm:text-[20px] font-semibold text-white group-hover:text-emerald-400 transition-colors duration-200 leading-[1.35]">
                        {project.title}
                      </h3>

                      <p className="mt-2.5 text-[15px] sm:text-base text-slate-300 leading-[1.6]">
                        {project.summary}
                      </p>

                      {project.platforms && project.platforms.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-1.5">
                          {project.platforms.map((platform) => (
                            <span
                              key={platform}
                              className="px-2.5 py-1 rounded bg-white/[0.04] border border-white/[0.06] text-xs font-mono text-slate-300 font-medium"
                            >
                              {platform}
                            </span>
                          ))}
                        </div>
                      )}

                      {project.outcomes && project.outcomes.length > 0 && (
                        <ul className="mt-4 space-y-2 border-t border-white/[0.06] pt-3.5">
                          {project.outcomes.map((outcome, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-xs sm:text-[13px] text-slate-300 leading-[1.5]">
                              <span className="w-3.5 h-3.5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                                <Check className="w-2 h-2" />
                              </span>
                              <span>{outcome}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>

                    <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between gap-3">
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 rounded bg-white/[0.04] text-[10px] font-mono text-slate-400 border border-white/[0.06]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedProject(project);
                        }}
                        className="inline-flex items-center gap-1 text-xs font-medium text-indigo-400 hover:text-emerald-400 transition-colors shrink-0 group/link cursor-pointer"
                      >
                        <span>View Details</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform duration-200" />
                      </button>
                    </div>
                  </Card>
                </m.div>
              </MotionItem>
            );
          })}
        </MotionStagger>

        {/* Regular Project Details Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 pointer-events-auto">
              <m.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-black/80 backdrop-blur-md"
                onClick={() => setSelectedProject(null)}
              />
              <m.div
                initial={{ opacity: 0, scale: 0.95, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 16 }}
                transition={{ duration: 0.25 }}
                className="relative w-full max-w-2xl bg-card border border-indigo-500/30 rounded-2xl p-6 shadow-2xl z-10 flex flex-col gap-4 overflow-hidden"
              >
                <div className="flex items-start justify-between border-b border-white/10 pb-4">
                  <div>
                    <span className="text-xs font-mono text-indigo-400 uppercase tracking-wider block mb-1">
                      {selectedProject.category}
                    </span>
                    <h3 className="text-xl font-bold text-white">{selectedProject.title}</h3>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  <div>
                    <h4 className="font-mono text-xs uppercase text-slate-400 tracking-wider mb-1">Project Overview</h4>
                    <p>{selectedProject.description}</p>
                  </div>

                  {selectedProject.challenge && (
                    <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                      <h4 className="font-mono text-xs uppercase text-amber-400 tracking-wider mb-1">The Challenge</h4>
                      <p>{selectedProject.challenge}</p>
                    </div>
                  )}

                  {selectedProject.solution && (
                    <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                      <h4 className="font-mono text-xs uppercase text-emerald-400 tracking-wider mb-1">The AI Solution</h4>
                      <p>{selectedProject.solution}</p>
                    </div>
                  )}

                  <div>
                    <h4 className="font-mono text-xs uppercase text-slate-400 tracking-wider mb-2">Technologies Used</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedProject.technologies.map((t) => (
                        <span key={t} className="px-2.5 py-1 rounded bg-white/[0.05] border border-white/10 font-mono text-xs text-indigo-300">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <Button variant="outline" size="sm" onClick={() => setSelectedProject(null)}>
                    Close
                  </Button>
                  <Button
                    variant="primary"
                    size="sm"
                    className="gap-2"
                    onClick={() => {
                      setSelectedProject(null);
                      window.location.href = "#contact";
                    }}
                  >
                    Discuss Solution
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Button>
                </div>
              </m.div>
            </div>
          )}
        </AnimatePresence>
      </Container>
    </Section>
  );
};

export default ProjectsSection;
