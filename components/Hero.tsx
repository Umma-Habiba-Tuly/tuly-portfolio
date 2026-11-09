import Image from "next/image";
import { SITE_CONFIG } from "@/constants/site";

const FACTS = [
  { value: "24/7", text: "Support assistants on three channels" },
  { value: "n8n · Qdrant", text: "The stack behind the live systems" },
  { value: "< 24h", text: "Typical first reply to a new enquiry" },
];

export default function Hero() {
  return (
    <section id="top" className="on-deep bg-deep text-surface">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 pt-14 sm:px-8 md:pt-20 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16 lg:pb-20">
        <div>
          <p className="label inline-flex items-center gap-2 text-accent">
            <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
            {SITE_CONFIG.professionalTitle} · {SITE_CONFIG.company}
          </p>

          <h1 className="mt-6 text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
            Automate the busywork.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-surface/80">
            I&apos;m Tuly. I build AI support assistants, lead pipelines and knowledge bases with n8n,
            Qdrant and LangChain, so your team spends its time on the work only people can do.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a href={SITE_CONFIG.whatsappUrl} className="btn btn-accent">
              DM to automate <span aria-hidden="true">→</span>
            </a>
            <a href="#work" className="btn btn-outline-light">
              See the work
            </a>
          </div>
        </div>

        <div className="mx-auto w-full max-w-sm lg:max-w-none">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-primary">
            <Image
              src="/images/tuly-portrait.jpg"
              alt={`Portrait of ${SITE_CONFIG.name}`}
              fill
              priority
              sizes="(min-width: 1024px) 380px, 90vw"
              className="object-cover object-top"
            />
            <div className="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-2xl bg-ink/85 px-4 py-3 backdrop-blur">
              <span className="text-sm font-medium">{SITE_CONFIG.name}</span>
              <span className="label inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-[0.65rem] text-ink">
                Open for projects
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-surface/15">
        <dl className="mx-auto grid max-w-6xl divide-y divide-surface/15 px-5 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-8">
          {FACTS.map((fact) => (
            <div key={fact.value} className="py-6 sm:px-6 sm:first:pl-0 sm:last:pr-0">
              <dt className="text-2xl font-semibold tracking-tight">{fact.value}</dt>
              <dd className="mt-1 text-sm text-surface/70">{fact.text}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
