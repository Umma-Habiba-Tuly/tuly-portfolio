import { Transition } from "framer-motion";

// Global precision transition (Linear / Vercel style fast-start, smooth snap end)
export const precisionTransition: Transition = {
  duration: 0.35,
  ease: [0.16, 1, 0.3, 1],
};

// Fast micro transition for active/tap states
export const microTransition: Transition = {
  duration: 0.15,
  ease: [0.16, 1, 0.3, 1],
};

// Interactive hover transition
export const hoverTransition: Transition = {
  duration: 0.22,
  ease: [0.16, 1, 0.3, 1],
};

// Smooth state transition (navbar, backdrop blurs)
export const smoothTransition: Transition = {
  duration: 0.3,
  ease: [0.4, 0, 0.2, 1],
};

// Spring bounce transition for badges / status pills
export const springTransition: Transition = {
  type: "spring",
  stiffness: 400,
  damping: 30,
};

// Global default MotionConfig object
export const globalMotionConfig = {
  transition: precisionTransition,
};
