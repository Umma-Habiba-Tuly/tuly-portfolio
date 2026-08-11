"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] w-screen h-screen min-h-screen lg:hidden pointer-events-auto overflow-y-auto"
          aria-hidden={!isOpen}
        >
          {/* Deep Opaque Backdrop Layer to block underlying page competition */}
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-[#04060A]/95 backdrop-blur-xl z-0"
            onClick={onClose}
          />

          {/* Slide-in Drawer with Premium Dark Navy/Charcoal Base (#0B0F18 -> #101525) */}
          <m.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-0 right-0 bottom-0 min-h-full w-full max-w-[280px] xs:max-w-xs sm:max-w-sm bg-gradient-to-b from-[#0B0F18] via-[#0E1320] to-[#101525] border-l border-white/10 p-5 xs:p-6 flex flex-col justify-between shadow-2xl z-10 overflow-y-auto relative"
          >
            {/* Subtle Cyan & Emerald Ambient Glow Blobs inside Drawer */}
            <div className="absolute top-1/4 right-0 w-44 h-44 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-10 left-0 w-36 h-36 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10">
              {/* Header */}
              <div className="flex items-center justify-between pb-5 border-b border-white/10">
                <span className="font-mono text-xs text-slate-400 uppercase tracking-wider font-semibold">
                  Navigation
                </span>
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 cursor-pointer"
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
              <nav className="py-5" aria-label="Mobile Navigation">
                <MotionStagger className="flex flex-col gap-1.5">
                  {navItems.map((item) => {
                    const isActive = activeSection === item.id;
                    return (
                      <MotionItem key={item.id}>
                        <Link
                          href={item.href}
                          onClick={onClose}
                          aria-current={isActive ? "page" : undefined}
                          className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                            isActive
                              ? "text-white bg-gradient-to-r from-emerald-500/20 via-teal-500/15 to-emerald-500/10 font-bold border border-emerald-500/30 shadow-md shadow-emerald-500/5"
                              : "text-slate-300 hover:text-white hover:bg-white/[0.06]"
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
              className="pt-5 border-t border-white/10 mt-auto relative z-10"
            >
              <Button
                variant="primary"
                size="lg"
                className="w-full font-bold bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 shadow-lg shadow-emerald-500/20"
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
    </AnimatePresence>,
    document.body
  );
};

export default MobileMenu;
