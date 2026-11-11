type PhoneFrameProps = {
  videoSrc?: string;
  poster?: string;
  size?: "md" | "sm";
};

/**
 * A phone mock-up. With no `videoSrc` the screen stays blank,
 * ready for the demo video to be added later.
 */
export default function PhoneFrame({ videoSrc, poster, size = "md" }: PhoneFrameProps) {
  return (
    <div className={`mx-auto ${size === "sm" ? "w-[150px] sm:w-[165px] lg:w-[250px]" : "w-[240px] sm:w-[270px]"}`}>
      <div className="relative rounded-[2rem] bg-ink p-2 ring-[1.5px] ring-accent/55 shadow-[0_0_36px_rgba(183,232,90,0.16)]">
        {!videoSrc ? (
          <div className="absolute left-1/2 top-3 z-10 h-4 w-14 -translate-x-1/2 rounded-full bg-ink" aria-hidden="true" />
        ) : null}
        <div className="relative aspect-[9/19] overflow-hidden rounded-[1.6rem] bg-primary [container-type:inline-size]">
          {videoSrc ? (
            <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-[5.4%] bg-black" aria-hidden="true">
              <div className="absolute left-1/2 top-[18%] h-[62%] w-[30%] -translate-x-1/2 rounded-full bg-[#0b0b0d] ring-1 ring-white/10" />
              <span className="absolute left-[9%] top-[26%] text-[4.6cqw] font-semibold leading-none text-white">9:41</span>
              <svg viewBox="0 0 40 12" className="absolute right-[8%] top-[30%] h-[42%] w-auto text-white" aria-hidden="true">
                <rect x="0" y="7" width="3" height="5" rx="1" fill="currentColor" />
                <rect x="5" y="4.5" width="3" height="7.5" rx="1" fill="currentColor" />
                <rect x="10" y="2" width="3" height="10" rx="1" fill="currentColor" />
                <rect x="15" y="0" width="3" height="12" rx="1" fill="currentColor" />
                <rect x="22" y="1" width="16" height="10" rx="3" fill="none" stroke="currentColor" strokeWidth="1.2" />
                <rect x="24" y="3" width="11" height="6" rx="1.5" fill="currentColor" />
              </svg>
            </div>
          ) : null}
          {videoSrc ? (
            <video
              src={videoSrc}
              poster={poster || undefined}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="dot-grid h-full w-full" role="img" aria-label="Phone screen reserved for the demo video" />
          )}
        </div>
      </div>
    </div>
  );
}
