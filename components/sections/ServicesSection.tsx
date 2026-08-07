"use client";

import React from "react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { SERVICES } from "@/data/services";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { MotionSection } from "@/components/motion/MotionSection";
import { MotionStagger } from "@/components/motion/MotionStagger";
import { MotionItem } from "@/components/motion/MotionItem";
import { Sparkles } from "lucide-react";

export const ServicesSection: React.FC = () => {
  return (
    <Section id="services" variant="alternate" className="py-20 md:py-28 relative bg-[#07090E]">
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-indigo-950/20 via-transparent to-transparent opacity-70" />

      <Container maxWidth="xl" className="relative z-10">
        {/* Section Header */}
        <MotionSection className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14 md:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-mono text-purple-300 font-semibold tracking-wide uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Core Capabilities
          </div>

          <Heading as="h2" size="displayXl" className="tracking-tight text-white text-2xl sm:text-3xl md:text-[36px] font-bold">
            Practical AI Systems & Automation Services
          </Heading>

          <Text size="base" variant="secondary" className="mt-4 text-slate-300 leading-[1.6]">
            High-level overview of core AI engineering services designed to eliminate manual labor and streamline customer & internal workflows.
          </Text>
        </MotionSection>

        {/* Services Grid (6 Concise Cards) */}
        <MotionStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {SERVICES.map((service) => (
            <MotionItem key={service.id}>
              <ServiceCard service={service} />
            </MotionItem>
          ))}
        </MotionStagger>
      </Container>
    </Section>
  );
};

export default ServicesSection;
