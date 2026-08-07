"use client";

import React, { useState, useEffect, useRef } from "react";
import { m, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Play, Sparkles, Film, Activity, X, Maximize2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

export interface VideoDemoPlayerProps {
  teaserVideoUrl?: string;
  fullVideoUrl?: string;
  posterImage?: string;
  className?: string;
  title?: string;
  onOpenModal?: () => void;
}

export const VideoDemoPlayer: React.FC<VideoDemoPlayerProps> = ({
  teaserVideoUrl = "/videos/wear-inspired-demo.mp4",
  fullVideoUrl = "/videos/wear-inspired-demo.mp4",
  posterImage,
  className,
  title = "Wear Inspired AI Customer Support Assistant",
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Lock background scroll when full video modal is active
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  // Force autoplay attempt on mount
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.defaultMuted = true;
      video.muted = true;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.warn("Autoplay promise rejected:", err);
        });
      }
    }
  }, []);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isModalOpen) {
        setIsModalOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen]);

  return (
    <>
      {/* 1. Messenger Phone Demo (Width 340-360px, Height 640-660px) */}
      <div className="w-full flex flex-col items-center justify-start">
        {/* Floating Glass Badge above Phone */}
        <div className="mb-4 w-full max-w-[340px] sm:max-w-[360px] flex items-center justify-start pointer-events-none">
          <div className="px-3.5 py-1.5 rounded-full bg-[#090B0E]/90 backdrop-blur-md border border-emerald-500/30 shadow-lg flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
            <div className="flex items-center gap-2 text-xs font-mono">
              <span className="font-bold text-emerald-300">LIVE CUSTOMER DEMO</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-300 text-[11px]">Facebook Messenger AI</span>
            </div>
          </div>
        </div>

        <div
          className={cn(
            "relative w-full max-w-[340px] sm:max-w-[360px] h-[760px] lg:h-[780px] rounded-[42px] overflow-hidden bg-[#090B0E] border-2 border-white/20 shadow-2xl group/video transition-all duration-300 hover:border-indigo-500/50 hover:shadow-indigo-500/20 cursor-pointer p-2 shrink-0",
            className
          )}
          onClick={() => setIsModalOpen(true)}
        >
          {/* Inner Phone Screen Frame */}
          <div className="relative w-full h-full rounded-[34px] overflow-hidden bg-black flex flex-col justify-between">
            {/* Top Speaker / Dynamic Island Notch */}
            <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-20 h-3.5 rounded-full bg-black/90 border border-white/10 z-30 pointer-events-none flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-slate-800 border border-white/20" />
            </div>

            {/* Top Video Overlay Badges: LIVE DEMO + Facebook Messenger */}
            <div className="absolute top-8 left-2.5 right-2.5 z-20 flex items-center justify-between gap-1.5 pointer-events-none">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-emerald-500/30 text-[10px] font-mono text-emerald-300">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>LIVE DEMO</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-600/20 backdrop-blur-md border border-blue-500/40 text-[10px] font-mono text-blue-300">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                <span>Messenger</span>
              </div>
            </div>

            {/* Center Play Icon on Hover */}
            <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
              <div className="w-12 h-12 rounded-full bg-indigo-600/90 border border-indigo-400/40 text-white flex items-center justify-center shadow-2xl backdrop-blur-md opacity-0 group-hover/video:opacity-100 group-hover/video:scale-110 transition-all duration-300">
                <Play className="w-5 h-5 fill-current text-white translate-x-0.5" />
              </div>
            </div>

            {/* Loading Skeleton */}
            {!isLoaded && !hasError && !prefersReducedMotion && (
              <div className="absolute inset-0 bg-[#090B0E] flex flex-col items-center justify-center gap-2 z-10 p-4 rounded-[34px]">
                <div className="w-8 h-8 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 animate-spin text-emerald-400" />
                </div>
                <span className="text-[11px] font-mono text-slate-400">Loading Messenger...</span>
              </div>
            )}

            {/* Bottom Action Overlay: "Watch Full Demo" Button */}
            <div className="absolute bottom-3 left-2.5 right-2.5 z-20 flex justify-center">
              <m.button
                id="watch-full-demo-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsModalOpen(true);
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-600/90 hover:bg-indigo-500 text-white text-[11px] font-semibold shadow-lg backdrop-blur-md border border-indigo-400/40 transition-all duration-200 cursor-pointer w-full justify-center"
                aria-label="Watch Full Demo Video (85s)"
              >
                <Play className="w-3 h-3 fill-current text-white" />
                <span>Watch Full Demo</span>
              </m.button>
            </div>

            {/* Messenger Chat Demo Video Element: Autoplay, Muted, Loop, PlaysInline, Preload Auto */}
            <video
              ref={videoRef}
              src={teaserVideoUrl}
              poster={posterImage}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              controls={false}
              onLoadedData={() => setIsLoaded(true)}
              onCanPlay={() => {
                setIsLoaded(true);
                if (videoRef.current) {
                  videoRef.current.play().catch(() => {});
                }
              }}
              onError={() => {
                setHasError(true);
                setIsLoaded(true);
              }}
              className={cn(
                "absolute inset-0 w-full h-full object-cover object-top rounded-[34px] transition-opacity duration-500 cursor-pointer",
                isLoaded ? "opacity-100" : "opacity-0"
              )}
            />
          </div>
        </div>
      </div>

      {/* 2. Full Demo Video Modal with Playback Controls */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 pointer-events-auto">
            {/* Backdrop Blur */}
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
              onClick={() => setIsModalOpen(false)}
            />

            {/* Modal Dialog Window */}
            <m.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-4xl bg-card border border-white/15 rounded-2xl p-5 sm:p-6 shadow-2xl z-10 flex flex-col gap-4 overflow-hidden"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                      {title} — Complete Product Walkthrough
                    </h3>
                    <p className="text-xs text-slate-400 font-mono">
                      Full Duration: 85 Seconds • Full playback controls enabled
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 cursor-pointer"
                  aria-label="Close demo modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Full Video Element: Controls Enabled */}
              <div className="relative w-full aspect-video rounded-xl bg-black overflow-hidden border border-white/10 shadow-lg">
                <video
                  src={fullVideoUrl}
                  poster={posterImage}
                  controls
                  autoPlay
                  preload="metadata"
                  className="w-full h-full object-contain rounded-xl"
                />
              </div>

              {/* Modal Footer Controls Bar */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 text-xs font-mono text-slate-400">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Multi-channel Web, Messenger, & Instagram AI Assistant Flow
                </span>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsModalOpen(false)}
                  className="w-full sm:w-auto"
                >
                  Close Video
                </Button>
              </div>
            </m.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default VideoDemoPlayer;
