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
import { SITE_CONFIG } from "@/constants/site";
import { MotionSection } from "@/components/motion/MotionSection";
import { MotionStagger } from "@/components/motion/MotionStagger";
import { MotionItem } from "@/components/motion/MotionItem";
import { precisionTransition } from "@/lib/motion/transitions";
import {
  Mail,
  MapPin,
  Clock,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Send,
} from "lucide-react";

const WhatsappIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.147 4.187 4.25-1.116z" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H7.5v-3H10V9.5C10 7.01 11.49 5.6 13.78 5.6c1.1 0 2.25.2 2.25.2v2.47h-1.27c-1.23 0-1.61.77-1.61 1.56V12h2.77l-.44 3h-2.33v6.8c4.56-.93 8-4.96 8-9.8z" />
  </svg>
);

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
  </svg>
);

export const ContactSection: React.FC = () => {
  const emailUrl =
    SITE_CONFIG.email && SITE_CONFIG.email !== "#"
      ? `mailto:${SITE_CONFIG.email}`
      : "mailto:";

  const whatsappUrl = SITE_CONFIG.whatsappUrl || "https://wa.me/8801954664733";

  const linkedinSocial = SITE_CONFIG.socials.find(
    (s) => s.name.toLowerCase() === "linkedin"
  );
  const facebookSocial = SITE_CONFIG.socials.find(
    (s) => s.name.toLowerCase() === "facebook"
  );
  const githubSocial = SITE_CONFIG.socials.find(
    (s) => s.name.toLowerCase() === "github"
  );

  const servicesList = [
    "AI Customer Support",
    "AI Sales Automation",
    "Hotel AI Receptionist",
    "RAG Knowledge Bases",
    "Workflow Automation",
    "Custom AI Agents",
  ];

  return (
    <Section id="contact" variant="default" className="py-20 md:py-28 relative">
      {/* Subtle Background Radial Glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-indigo-900/20 via-transparent to-transparent opacity-80" />

      <Container maxWidth="xl" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Details & Methods */}
          <MotionSection className="lg:col-span-6 flex flex-col items-start">
            <div className="flex flex-col sm:flex-row sm:items-center gap-5 mb-6">
              {/* Premium Circular Portrait Avatar (96–120px) with Indigo/Emerald Gradient Ring */}
              <div className="relative shrink-0">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-tr from-indigo-500 via-emerald-400 to-sky-400 p-[2.5px] shadow-xl shadow-indigo-500/20 overflow-hidden relative">
                  <div className="w-full h-full rounded-full relative overflow-hidden bg-[#090B0E]">
                    <Image
                      src="/images/tuly-portrait.jpg"
                      alt="Umma Habiba Tuly"
                      fill
                      quality={95}
                      sizes="112px"
                      className="object-cover object-top filter brightness-[1.03]"
                    />
                  </div>
                </div>
                {/* Green Pulsing Online Status Indicator */}
                <span className="absolute bottom-1 right-1 flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-background shadow-md" />
                </span>
              </div>

              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-mono text-purple-300 font-semibold tracking-wide uppercase mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  LET'S BUILD SOMETHING
                </div>

                <Heading as="h2" size="displayXl" className="tracking-tight text-white text-2xl sm:text-3xl md:text-[36px] font-bold">
                  Ready to Automate Your Business?
                </Heading>
              </div>
            </div>

            <Text size="base" variant="secondary" className="mt-4 text-slate-300 leading-[1.6] max-w-xl">
              I build custom AI systems, multi-channel support assistants, and automated workflow pipelines for businesses looking to eliminate manual tasks and scale efficiently.
            </Text>

            <div className="mt-6 inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for new projects</span>
            </div>

            {/* Contact Methods List with Staggering */}
            <MotionStagger className="mt-10 w-full space-y-4 max-w-lg">
              {/* Primary LinkedIn Banner Card */}
              <MotionItem hoverEffect>
                <m.div
                  whileHover={{ y: -2, scale: 1.01 }}
                  transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="p-3.5 sm:p-5 rounded-2xl bg-gradient-to-r from-sky-950/60 via-card to-sky-950/40 border border-sky-500/40 flex flex-wrap sm:flex-nowrap items-center justify-between gap-3 sm:gap-4 group shadow-xl shadow-sky-500/10 hover:border-sky-400 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                    <m.div
                      whileHover={{ scale: 1.1 }}
                      className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-sky-500/20 border border-sky-400/40 flex items-center justify-center text-sky-400 shrink-0 shadow-inner"
                    >
                      <LinkedinIcon className="w-5 h-5 sm:w-6 sm:h-6 fill-sky-400" />
                    </m.div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] sm:text-xs font-mono text-sky-300 font-bold uppercase tracking-wider block">
                          Primary Platform • LinkedIn
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse shrink-0" />
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-white font-mono block mt-0.5 truncate">
                        Follow My Engineering & Build Posts
                      </span>
                      <span className="text-[11px] sm:text-xs text-slate-400 block mt-0.5 line-clamp-1 sm:line-clamp-none">
                        Live AI agent walk-throughs, n8n blueprints & case studies
                      </span>
                    </div>
                  </div>
                  <a
                    href={linkedinSocial?.url || "https://www.linkedin.com/in/umma-habiba-tuly-cse/"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl bg-sky-500/20 border border-sky-400/50 text-xs font-semibold text-sky-300 hover:bg-sky-500/30 transition-all group/link shrink-0 ml-auto sm:ml-0"
                    aria-label="Follow on LinkedIn"
                  >
                    <span>Follow</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform duration-200" />
                  </a>
                </m.div>
              </MotionItem>

              {/* WhatsApp Card */}
              <MotionItem hoverEffect>
                <m.div
                  whileHover={{ y: -2, scale: 1.01 }}
                  transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="p-4 rounded-xl bg-card/70 border border-emerald-500/30 flex items-center justify-between group hover:border-emerald-400/60 hover:shadow-emerald-500/15 transition-all duration-300"
                >
                  <div className="flex items-center gap-3.5">
                    <m.div
                      whileHover={{ scale: 1.1 }}
                      className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0"
                    >
                      <WhatsappIcon className="w-5 h-5 fill-emerald-400" />
                    </m.div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                          WhatsApp
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      </div>
                      <span className="text-sm font-semibold text-white font-mono">
                        {SITE_CONFIG.whatsappNumber || "+8801954664733"}
                      </span>
                    </div>
                  </div>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-xs font-medium text-emerald-300 hover:bg-emerald-500/25 transition-all group/link"
                    aria-label="Chat on WhatsApp"
                  >
                    <span>Chat Now</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform duration-200" />
                  </a>
                </m.div>
              </MotionItem>

              {/* Email Card */}
              <MotionItem hoverEffect>
                <m.div
                  whileHover={{ y: -2, scale: 1.01 }}
                  transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="p-4 rounded-xl bg-card/70 border border-white/10 flex items-center justify-between group hover:border-indigo-500/40 hover:shadow-indigo-500/10 transition-all duration-300"
                >
                  <div className="flex items-center gap-3.5">
                    <m.div
                      whileHover={{ scale: 1.1 }}
                      className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0"
                    >
                      <Mail className="w-5 h-5" />
                    </m.div>
                    <div>
                      <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                        Email
                      </span>
                      <span className="text-sm font-semibold text-white font-mono">
                        {SITE_CONFIG.email && SITE_CONFIG.email !== "#"
                          ? SITE_CONFIG.email
                          : "Available upon inquiry"}
                      </span>
                    </div>
                  </div>
                  {SITE_CONFIG.email && SITE_CONFIG.email !== "#" && (
                    <a
                      href={emailUrl}
                      className="p-2 text-slate-400 hover:text-white transition-colors group/link"
                      aria-label="Send email"
                    >
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-200" />
                    </a>
                  )}
                </m.div>
              </MotionItem>

              {/* Socials Group with Micro Interactions */}
              <MotionItem>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {/* LinkedIn */}
                  <m.a
                    href={linkedinSocial?.url || "#"}
                    target={linkedinSocial?.url && linkedinSocial.url !== "#" ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    whileHover={{ y: -2, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    className="p-3.5 rounded-xl bg-card/70 border border-white/10 flex items-center gap-3 hover:border-sky-500/40 hover:shadow-sky-500/10 transition-all duration-300 group"
                  >
                    <m.div
                      whileHover={{ scale: 1.15 }}
                      className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 shrink-0"
                    >
                      <LinkedinIcon className="w-4 h-4" />
                    </m.div>
                    <div className="overflow-hidden">
                      <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                        LinkedIn
                      </span>
                      <span className="text-xs font-medium text-slate-200 group-hover:text-white truncate block">
                        Connect
                      </span>
                    </div>
                  </m.a>

                  {/* Facebook */}
                  <m.a
                    href={facebookSocial?.url || "#"}
                    target={facebookSocial?.url && facebookSocial.url !== "#" ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    whileHover={{ y: -2, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    className="p-3.5 rounded-xl bg-card/70 border border-white/10 flex items-center gap-3 hover:border-blue-500/40 hover:shadow-blue-500/10 transition-all duration-300 group"
                  >
                    <m.div
                      whileHover={{ scale: 1.15 }}
                      className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0"
                    >
                      <FacebookIcon className="w-4 h-4" />
                    </m.div>
                    <div className="overflow-hidden">
                      <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                        Facebook
                      </span>
                      <span className="text-xs font-medium text-slate-200 group-hover:text-white truncate block">
                        Follow
                      </span>
                    </div>
                  </m.a>

                  {/* GitHub */}
                  <m.a
                    href={githubSocial?.url || "#"}
                    target={githubSocial?.url && githubSocial.url !== "#" ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    whileHover={{ y: -2, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    className="p-3.5 rounded-xl bg-card/70 border border-white/10 flex items-center gap-3 hover:border-slate-400/40 hover:shadow-white/5 transition-all duration-300 group"
                  >
                    <m.div
                      whileHover={{ scale: 1.15 }}
                      className="w-8 h-8 rounded-lg bg-slate-500/10 border border-slate-500/20 flex items-center justify-center text-slate-300 shrink-0"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </m.div>
                    <div className="overflow-hidden">
                      <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                        GitHub
                      </span>
                      <span className="text-xs font-medium text-slate-200 group-hover:text-white truncate block">
                        Repositories
                      </span>
                    </div>
                  </m.a>
                </div>
              </MotionItem>

              {/* Meta details */}
              <MotionItem>
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center gap-3 hover:border-emerald-500/30 transition-colors">
                    <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                    <div>
                      <span className="text-[10px] font-mono text-slate-400 uppercase block">
                        Location
                      </span>
                      <span className="text-xs font-semibold text-slate-200">
                        {SITE_CONFIG.location || "Bangladesh"}
                      </span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center gap-3 hover:border-indigo-500/30 transition-colors">
                    <Clock className="w-4 h-4 text-indigo-400 shrink-0" />
                    <div>
                      <span className="text-[10px] font-mono text-slate-400 uppercase block">
                        Expected Reply
                      </span>
                      <span className="text-xs font-semibold text-slate-200">
                        {SITE_CONFIG.replyTime || "Within 24 hours"}
                      </span>
                    </div>
                  </div>
                </div>
              </MotionItem>
            </MotionStagger>
          </MotionSection>

          {/* Right Column: Premium Glassmorphism Contact Card Entrance */}
          <m.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, ...precisionTransition }}
            className="lg:col-span-6 w-full"
          >
            <Card variant="feature" className="p-4 xs:p-6 sm:p-8 border-indigo-500/30 bg-card/90 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-400 via-indigo-500 to-sky-500" />

              <h3 className="text-xl font-bold text-white tracking-tight mb-2">
                Start a Conversation
              </h3>
              <p className="text-sm text-slate-300 mb-6">
                Direct engagement for custom AI architecture and business automation projects.
              </p>

              {/* Action Buttons with Micro Scale & Arrow Movements */}
              <div className="flex flex-col sm:flex-row items-stretch gap-3 mb-8">
                <m.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1">
                  <Button
                    variant="primary"
                    size="lg"
                    className="group justify-center gap-2 w-full bg-emerald-600 hover:bg-emerald-500 border-emerald-500/30 font-medium"
                    onClick={() => {
                      window.open(whatsappUrl, "_blank");
                    }}
                  >
                    <WhatsappIcon className="w-4 h-4 fill-white" />
                    Chat on WhatsApp
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </Button>
                </m.div>

                <m.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1">
                  <Button
                    variant="outline"
                    size="lg"
                    className="group justify-center gap-2 w-full font-medium"
                    onClick={() => {
                      window.location.href = emailUrl;
                    }}
                  >
                    <Send className="w-4 h-4 text-indigo-400" />
                    Send an Email
                  </Button>
                </m.div>
              </div>

              <div className="pt-6 border-t border-white/10">
                <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-4">
                  Services I can help with:
                </h4>
                <MotionStagger className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {servicesList.map((service, index) => (
                    <MotionItem key={index}>
                      <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.05] text-xs font-medium text-slate-200 hover:border-emerald-500/30 transition-colors">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{service}</span>
                      </div>
                    </MotionItem>
                  ))}
                </MotionStagger>
              </div>
            </Card>
          </m.div>
        </div>
      </Container>
    </Section>
  );
};

export default ContactSection;
