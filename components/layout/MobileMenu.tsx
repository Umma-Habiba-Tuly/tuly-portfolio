"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { m, AnimatePresence } from "framer-motion";
import { NavItem } from "@/types/navigation";
import { Button } from "@/components/ui/Button";
import { MotionStagger } from "@/components/motion/MotionStagger";
import { MotionItem } from "@/components/motion/MotionItem";
import { precisionTransition } from "@/lib/motion/transitions";

export interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItem[];
  activeSection?: string;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  navItems,
  activeSection,
}) => {
  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 lg:hidden pointer-events-auto"
          aria-hidden={!isOpen}
        >
          {/* Backdrop Blur Fade */}
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            onClick={onClose}
          />

          {/* Slide-in Drawer */}
          <m.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-0 right-0 bottom-0 w-full max-w-xs bg-background border-l border-white/10 p-6 flex flex-col justify-between shadow-2xl"
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <span className="font-mono text-xs text-slate-400 uppercase tracking-wider">
                  Navigation
                </span>
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                  aria-label="Close navigation menu"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Staggered Links Stream */}
              <nav className="py-6" aria-label="Mobile Navigation">
                <MotionStagger className="flex flex-col gap-2">
                  {navItems.map((item) => {
                    const isActive = activeSection === item.id;
                    return (
                      <MotionItem key={item.id}>
                        <Link
                          href={item.href}
                          onClick={onClose}
                          aria-current={isActive ? "page" : undefined}
                          className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                            isActive
                              ? "text-white bg-white/10 font-semibold"
                              : "text-slate-300 hover:text-white hover:bg-white/5"
                          }`}
                        >
                          {item.label}
                        </Link>
                      </MotionItem>
                    );
                  })}
                </MotionStagger>
              </nav>
            </div>

            {/* Footer CTA */}
            <m.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, ...precisionTransition }}
              className="pt-6 border-t border-white/10"
            >
              <Button
                variant="primary"
                size="lg"
                className="w-full"
                onClick={() => {
                  onClose();
                  window.location.href = "#contact";
                }}
              >
                Get in Touch
              </Button>
            </m.div>
          </m.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
