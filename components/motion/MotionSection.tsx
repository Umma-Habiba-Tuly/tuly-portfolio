"use client";

import React from "react";
import { m } from "framer-motion";
import { fadeInUpVariant } from "@/lib/motion/variants";
import { defaultViewport } from "@/lib/motion/viewport";

interface MotionSectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  delay?: number;
}

export const MotionSection: React.FC<MotionSectionProps> = ({
  children,
  id,
  className = "",
  delay = 0,
}) => {
  return (
    <m.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      variants={fadeInUpVariant}
      transition={{ delay }}
      className={className}
    >
      {children}
    </m.section>
  );
};

export default MotionSection;
