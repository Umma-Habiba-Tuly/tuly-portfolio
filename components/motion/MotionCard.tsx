"use client";

import React from "react";
import { m } from "framer-motion";
import { scaleFadeVariant } from "@/lib/motion/variants";
import { defaultViewport } from "@/lib/motion/viewport";

interface MotionCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  enableHover?: boolean;
}

export const MotionCard: React.FC<MotionCardProps> = ({
  children,
  className = "",
  onClick,
  enableHover = true,
}) => {
  return (
    <m.div
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      variants={scaleFadeVariant}
      whileHover={
        enableHover
          ? {
              y: -3,
              scale: 1.01,
              transition: { duration: 0.22, ease: [0.16, 1, 0.3, 1] },
            }
          : undefined
      }
      whileTap={onClick ? { scale: 0.98 } : undefined}
      onClick={onClick}
      className={className}
    >
      {children}
    </m.div>
  );
};

export default MotionCard;
