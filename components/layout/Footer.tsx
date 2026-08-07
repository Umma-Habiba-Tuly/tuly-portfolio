"use client";

import React from "react";
import Link from "next/link";
import { m } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Logo } from "@/components/shared/Logo";
import { SITE_CONFIG } from "@/constants/site";
import { NAV_ITEMS } from "@/constants/navigation";
import { ArrowUp, Mail, MapPin } from "lucide-react";

const WhatsappIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.147 4.187 4.25-1.116z" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H7.5v-3H10V9.5C10 7.01 11.49 5.6 13.78 5.6c1.1 0 2.25.2 2.25.2v2.47h-1.27c-1.23 0-1.61.77-1.61 1.56V12h2.77l-.44 3h-2.33v6.8c4.56-.93 8-4.96 8-9.8z" />
  </svg>
);

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
  </svg>
);

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const whatsappSocial = SITE_CONFIG.socials.find(
    (s) => s.name.toLowerCase() === "whatsapp"
  );
  const linkedinSocial = SITE_CONFIG.socials.find(
    (s) => s.name.toLowerCase() === "linkedin"
  );
  const facebookSocial = SITE_CONFIG.socials.find(
    (s) => s.name.toLowerCase() === "facebook"
  );
  const githubSocial = SITE_CONFIG.socials.find(
    (s) => s.name.toLowerCase() === "github"
  );

  return (
    <footer className="bg-[#06080B] border-t border-white/[0.08] relative z-10 pt-16 pb-12">
      <Container maxWidth="xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/[0.06]">
          {/* Brand Column */}
          <div className="md:col-span-5 flex flex-col items-center sm:items-start text-center sm:text-left space-y-4">
            <Logo />
            <p className="text-[15px] text-slate-300 max-w-sm leading-[1.6]">
              Engineering practical AI automation systems, multi-channel support assistants, and agentic workflows. Follow my public build updates on LinkedIn.
            </p>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 pt-2 text-xs font-mono text-slate-300">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                {SITE_CONFIG.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-emerald-400" />
                {SITE_CONFIG.email}
              </span>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="md:col-span-4 flex flex-col items-center sm:items-start text-center sm:text-left space-y-3">
            <span className="font-mono text-xs text-slate-300 font-semibold uppercase tracking-[0.03em] mb-1">
              Navigation
            </span>
            <div className="flex flex-wrap sm:grid sm:grid-cols-2 justify-center sm:justify-start gap-3 text-sm">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className="text-slate-300 hover:text-white transition-colors duration-200"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Connect & Social Links Column */}
          <div className="md:col-span-3 flex flex-col items-center sm:items-start text-center sm:text-left space-y-3">
            <span className="font-mono text-xs text-slate-400 uppercase tracking-wider mb-1 flex items-center justify-between w-full">
              <span>Primary Platform</span>
              <span className="text-[10px] text-sky-400 font-bold">LINKEDIN</span>
            </span>

            {/* LinkedIn Highlight Pill */}
            <a
              href={linkedinSocial?.url || "https://www.linkedin.com/in/umma-habiba-tuly-cse/"}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full px-3.5 py-2 rounded-xl bg-sky-500/10 border border-sky-500/30 text-xs font-medium text-sky-300 hover:bg-sky-500/20 hover:border-sky-400 transition-all flex items-center justify-between group shadow-sm mb-1"
            >
              <div className="flex items-center gap-2">
                <LinkedinIcon className="w-4 h-4 fill-sky-400" />
                <span className="font-semibold">Follow on LinkedIn</span>
              </div>
              <span className="text-[10px] font-mono opacity-80 group-hover:translate-x-0.5 transition-transform">→</span>
            </a>

            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5 pt-1">
              <a
                href={whatsappSocial?.url || SITE_CONFIG.whatsappUrl || "https://wa.me/8801954664733"}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-card border border-white/10 flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:border-emerald-500/30 transition-all duration-200"
                aria-label="WhatsApp"
              >
                <WhatsappIcon className="w-3.5 h-3.5" />
              </a>

              <a
                href={facebookSocial?.url || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-card border border-white/10 flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-500/30 transition-all duration-200"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-3.5 h-3.5" />
              </a>

              <a
                href={githubSocial?.url || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-card border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/30 transition-all duration-200"
                aria-label="GitHub"
              >
                <GithubIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back To Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400 text-center sm:text-left">
          <p>© {new Date().getFullYear()} Umma Habiba Tuly • AT Sync. All rights reserved.</p>

          <m.button
            onClick={scrollToTop}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-card/80 border border-white/10 text-slate-400 hover:text-white hover:border-white/20 transition-colors cursor-pointer"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-indigo-400" />
          </m.button>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
