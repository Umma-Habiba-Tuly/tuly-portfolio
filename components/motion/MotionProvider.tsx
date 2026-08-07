"use client";

import React from "react";
import { LazyMotion, domAnimation, MotionConfig } from "framer-motion";
import { globalMotionConfig } from "@/lib/motion/transitions";

interface MotionProviderProps {
  children: React.ReactNode;
}

export const MotionProvider: React.FC<MotionProviderProps> = ({ children }) => {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig transition={globalMotionConfig.transition}>
        {children}
      </MotionConfig>
    </LazyMotion>
  );
};

export default MotionProvider;
