import Image from "next/image";
import { SITE_CONFIG } from "@/constants/site";

export default function Hero() {
  return (
    <section id="top" className="on-deep bg-deep text-surface">
      <div className="mx-auto max-w-[1200px] px-5 pb-16 pt-8 sm:px-8 md:pb-24">
        <p className="label flex justify-between gap-4 text-surface/70">
          <span>AI automation · {SITE_CONFIG.company}</span>
          <span>{SITE_CONFIG.location}</span>
        </p>

        <h1
          className="font-display mt-8 font-semibold leading-[0.92] tracking-[-0.03em] md:mt-12"
          style={{ fontSize: "clamp(3.4rem, 12.5vw, 10rem)" }}
        >
          Automate
          <br className="hidden sm:block" /> the <span className="italic text-accent">busywork.</span>
        </h1>

        <div className="mt-12 grid gap-10 border-t border-surface/30 pt-8 md:mt-16 md:grid-cols-[1fr_auto] md:items-end md:gap-16">
          <div>
            <p className="max-w-xl text-xl leading-snug sm:text-2xl">
              I&apos;m Tuly. I build the software that answers customer messages, moves lead data between your
              tools and searches your documents, so people stop doing it by hand.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
              <a href={SITE_CONFIG.whatsappUrl} className="btn btn-accent">
                DM to automate <span aria-hidden="true">→</span>
              </a>
              <a href="#work" className="label underline decoration-surface/50 underline-offset-8 font-semibold hover:decoration-accent">
                See what I&apos;ve built
              </a>
            </div>
          </div>

          <figure className="w-44 shrink-0 sm:w-52">
            <div className="relative aspect-[4/5] overflow-hidden bg-primary">
              <Image
                src="/images/tuly-portrait.jpg"
                alt={`Portrait of ${SITE_CONFIG.name}`}
                fill
                priority
                sizes="208px"
                className="object-cover object-top"
              />
            </div>
            <figcaption className="label mt-3 text-surface/70">
              {SITE_CONFIG.name}
              <br />
              Founder, {SITE_CONFIG.company}
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
