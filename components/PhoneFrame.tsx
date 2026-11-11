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
        <div className="relative aspect-[9/19] overflow-hidden rounded-[1.6rem] bg-primary">
          {videoSrc ? (
            <div
              className="pointer-events-none absolute left-1/2 top-[0.8%] z-10 h-[4.4%] w-[46%] -translate-x-1/2 rounded-full bg-black"
              aria-hidden="true"
            />
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
