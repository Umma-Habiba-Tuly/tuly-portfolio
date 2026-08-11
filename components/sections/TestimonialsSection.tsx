"use client";

import React from "react";
import { m } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { Button } from "@/components/ui/Button";
import { TESTIMONIALS } from "@/data/testimonials";
import { TestimonialCard } from "@/components/shared/TestimonialCard";
import { MotionSection } from "@/components/motion/MotionSection";
import { MotionStagger } from "@/components/motion/MotionStagger";
import { MotionItem } from "@/components/motion/MotionItem";
import { MessageSquareQuote, ArrowRight, Sparkles } from "lucide-react";

export const TestimonialsSection: React.FC = () => {
  return (
    <Section id="testimonials" variant="alternate" className="py-20 md:py-28 relative bg-[#06080D]">
      {/* Background Subtle Mesh */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-950/20 via-transparent to-transparent opacity-60" />

      <Container maxWidth="xl" className="relative z-10">
        {/* Section Header */}
        <MotionSection className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14 md:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-mono text-purple-300 font-semibold tracking-wide uppercase mb-4">
            <MessageSquareQuote className="w-3.5 h-3.5" />
            Client Feedback
          </div>

          <Heading as="h2" size="displayXl" className="tracking-tight text-white text-2xl sm:text-3xl md:text-[36px] font-bold">
            Trusted for Reliable AI Automations
          </Heading>

          <Text size="base" variant="secondary" className="mt-4 text-slate-300 leading-[1.6]">
            Real feedback from business founders, hotel managers, and operations leaders using custom AI support & workflow systems.
          </Text>
        </MotionSection>

        {/* Testimonials Grid */}
        <MotionStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <MotionItem key={testimonial.id}>
              <TestimonialCard testimonial={testimonial} />
            </MotionItem>
          ))}
        </MotionStagger>

        {/* Mid-Page Dedicated CTA (Green CTA Rule) */}
        <MotionSection className="mt-12 sm:mt-16 md:mt-20 p-5 xs:p-6 sm:p-8 md:p-10 rounded-2xl bg-gradient-to-r from-card via-[#0F172A] to-indigo-950/50 border border-emerald-500/30 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-xl text-center md:text-left relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-mono text-purple-300 font-semibold tracking-wide uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              Mid-Page Consultation
            </div>
            <h3 className="text-lg xs:text-xl sm:text-2xl md:text-[28px] font-bold text-white tracking-tight">
              Ready to Automate Your Business Operations?
            </h3>
            <p className="mt-2 text-xs xs:text-sm sm:text-[15px] text-slate-300 leading-[1.6]">
              Book a quick 1-on-1 AI strategy session to discuss your workflow bottlenecks, support backlogs, or custom agent requirements.
            </p>
          </div>

          <m.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="relative z-10 shrink-0 w-full sm:w-auto flex justify-center">
            <Button
              variant="primary"
              size="lg"
              className="gap-2.5 font-bold bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-xl shadow-emerald-500/20 w-full sm:w-auto text-xs xs:text-sm sm:text-base px-4 sm:px-6"
              onClick={() => {
                window.location.href = "#contact";
              }}
            >
              Schedule AI Consultation
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </Button>
          </m.div>
        </MotionSection>
      </Container>
    </Section>
  );
};

export default TestimonialsSection;
