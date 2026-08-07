import { Variants } from "framer-motion";
import { precisionTransition } from "./transitions";

// Section reveal variant
export const fadeInUpVariant: Variants = {
  hidden: {
    opacity: 0,
    y: 16,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: precisionTransition,
  },
};

// Fade down variant (for Navbar, badges)
export const fadeInDownVariant: Variants = {
  hidden: {
    opacity: 0,
    y: -12,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: precisionTransition,
  },
};

// Scale fade variant (for cards, popups)
export const scaleFadeVariant: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: precisionTransition,
  },
};

// Stagger container variant
export const staggerContainerVariant: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.05,
    },
  },
};

// Stagger child item variant
export const staggerItemVariant: Variants = {
  hidden: {
    opacity: 0,
    y: 12,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: precisionTransition,
  },
};
