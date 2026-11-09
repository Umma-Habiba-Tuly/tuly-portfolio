type PhoneFrameProps = {
  videoSrc?: string;
  poster?: string;
};

/**
 * A phone mock-up. With no `videoSrc` the screen stays blank,
 * ready for the demo video to be added later.
 */
export default function PhoneFrame({ videoSrc, poster }: PhoneFrameProps) {
  return (
    <div className="mx-auto w-[240px] sm:w-[270px]">
      <div className="relative rounded-[2.6rem] bg-ink p-2.5 ring-1 ring-surface/25">
        <div className="absolute left-1/2 top-4 z-10 h-5 w-20 -translate-x-1/2 rounded-full bg-ink" aria-hidden="true" />
        <div className="relative aspect-[9/19] overflow-hidden rounded-[2.1rem] bg-primary">
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
