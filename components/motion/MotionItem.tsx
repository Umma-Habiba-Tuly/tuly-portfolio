"use client";

import React from "react";
import { m } from "framer-motion";
import { staggerItemVariant } from "@/lib/motion/variants";

interface MotionItemProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const MotionItem: React.FC<MotionItemProps> = ({
  children,
  className = "",
  hoverEffect = false,
}) => {
  return (
    <m.div
      variants={staggerItemVariant}
      whileHover={
        hoverEffect
          ? {
              y: -3,
              transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] },
            }
          : undefined
      }
      className={className}
    >
      {children}
    </m.div>
  );
};

export default MotionItem;
