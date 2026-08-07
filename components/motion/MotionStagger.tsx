"use client";

import React from "react";
import { m } from "framer-motion";
import { staggerContainerVariant } from "@/lib/motion/variants";
import { defaultViewport } from "@/lib/motion/viewport";

interface MotionStaggerProps {
  children: React.ReactNode;
  className?: string;
}

export const MotionStagger: React.FC<MotionStaggerProps> = ({
  children,
  className = "",
}) => {
  return (
    <m.div
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      variants={staggerContainerVariant}
      className={className}
    >
      {children}
    </m.div>
  );
};

export default MotionStagger;
