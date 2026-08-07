"use client";

import React, { useState } from "react";
import Link from "next/link";
import { m } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/shared/Logo";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { NAV_ITEMS } from "@/constants/navigation";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { useActiveSection } from "@/hooks/useActiveSection";
import { fadeInDownVariant } from "@/lib/motion/variants";
import { smoothTransition } from "@/lib/motion/transitions";

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const isScrolled = useScrollPosition(20);

  const sectionIds = NAV_ITEMS.map((item) => item.id);
  const activeSection = useActiveSection(sectionIds);

  return (
    <m.header
      initial="hidden"
      animate={{
        opacity: 1,
        y: 0,
        backgroundColor: isScrolled ? "rgba(9, 11, 14, 0.85)" : "rgba(9, 11, 14, 0.6)",
        backdropFilter: "blur(16px)",
        borderBottomColor: isScrolled ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0.05)",
        paddingTop: isScrolled ? "0.75rem" : "1.1rem",
        paddingBottom: isScrolled ? "0.75rem" : "1.1rem",
      }}
      variants={fadeInDownVariant}
      transition={smoothTransition}
      className="fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-md shadow-xl transition-all duration-300"
    >
      <Container maxWidth="xl">
        <div className="flex items-center justify-between">
          {/* Left: Brand Identity */}
          <Logo />

          {/* Center: Desktop Navigation with Glass Capsule & Animated Active Pill */}
          <nav
            className="hidden lg:flex items-center gap-1 bg-card/60 border border-white/10 rounded-full p-1.5 backdrop-blur-md shadow-lg shadow-black/20"
            aria-label="Main Navigation"
            onMouseLeave={() => setHoveredNav(null)}
          >
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              const isHovered = hoveredNav === item.id;

              return (
                <Link
                  key={item.id}
                  href={item.href}
                  onMouseEnter={() => setHoveredNav(item.id)}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-white font-bold"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  {/* Hover Capsule Highlight */}
                  {isHovered && !isActive && (
                    <m.span
                      layoutId="hoverNavTab"
                      className="absolute inset-0 bg-white/[0.08] rounded-full"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}

                  {/* Active Capsule Highlight */}
                  {isActive && (
                    <m.span
                      layoutId="activeNavTab"
                      className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-purple-500/20 to-emerald-500/20 border border-emerald-500/30 rounded-full shadow-md shadow-emerald-500/10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}

                  <span className="relative z-10">{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right: CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <m.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button
                variant="primary"
                size="sm"
                className="hidden sm:inline-flex bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 font-bold shadow-md shadow-emerald-500/20"
                onClick={() => {
                  window.location.href = "#contact";
                }}
              >
                Get in Touch
              </Button>
            </m.div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              aria-label="Open navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Navigation Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navItems={NAV_ITEMS}
        activeSection={activeSection}
      />
    </m.header>
  );
};

export default Navbar;
