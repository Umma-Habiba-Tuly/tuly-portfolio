import Reveal from "@/components/Reveal";

type Group = {
  n: string;
  title: string;
  blurb: string;
  skills: string[];
  span: string;
  look: string;
  rule: string;
  muted: string;
};

const GROUPS: Group[] = [
  {
    n: "01",
    title: "AI and agents",
    blurb: "Assistants and knowledge systems, built end to end.",
    skills: ["AI agents", "RAG systems", "LangChain", "LlamaIndex", "Qdrant", "Pinecone", "OpenAI", "Anthropic"],
    span: "md:col-span-3",
    look: "bg-accent text-ink",
    rule: "border-ink/25",
    muted: "text-ink/70",
  },
  {
    n: "02",
    title: "Automation",
    blurb: "Repetitive work turned into hands-free systems.",
    skills: ["n8n", "Make", "APIs and webhooks", "HubSpot", "Airtable", "Notion", "Slack", "Discord"],
    span: "md:col-span-3",
    look: "bg-deep text-surface ring-1 ring-surface/15",
    rule: "border-surface/20",
    muted: "text-surface/65",
  },
  {
    n: "03",
    title: "Languages",
    blurb: "From scripting to systems.",
    skills: ["Python", "JavaScript", "TypeScript", "Java", "C", "C++", "Bash", "PowerShell", "HTML", "CSS"],
    span: "md:col-span-2",
    look: "bg-white/70 text-ink ring-1 ring-ink/15",
    rule: "border-ink/20",
    muted: "text-ink/65",
  },
  {
    n: "04",
    title: "Web",
    blurb: "Fast, responsive interfaces.",
    skills: ["Next.js", "React", "Node.js", "Tailwind CSS", "Bootstrap", "WordPress", "Webflow"],
    span: "md:col-span-2",
    look: "bg-primary text-surface",
    rule: "border-surface/30",
    muted: "text-surface/80",
  },
  {
    n: "05",
    title: "Backend and tools",
    blurb: "Solid foundations behind the screen.",
    skills: ["FastAPI", "PostgreSQL", "MySQL", "Supabase", "Docker", "Linux", "Git and GitHub", "VS Code"],
    span: "md:col-span-2",
    look: "bg-ink text-surface",
    rule: "border-surface/20",
    muted: "text-surface/65",
  },
  {
    n: "06",
    title: "UI/UX design",
    blurb: "Interfaces and dashboards people enjoy using.",
    skills: ["User experience design", "Figma", "Adobe XD", "Photoshop", "Illustrator"],
    span: "md:col-span-4",
    look: "bg-white/70 text-ink ring-1 ring-ink/15",
    rule: "border-ink/20",
    muted: "text-ink/65",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-surface text-ink">
      <div className="mx-auto max-w-[1200px] px-5 py-20 sm:px-8 md:py-28">
        <Reveal className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <div className="mb-6 h-px w-16 bg-primary" />
            <h2
              className="font-display font-extrabold leading-[0.95] tracking-[-0.04em]"
              style={{ fontSize: "clamp(3rem, 9vw, 7rem)" }}
            >
              Skills<span className="text-primary">.</span>
            </h2>
          </div>
          <p className="max-w-sm text-lg leading-snug text-ink/75">
            Everything I have worked with, from my GitHub, my LinkedIn and my projects.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-6">
          {GROUPS.map((g, i) => (
            <Reveal
              key={g.n}
              delay={(i % 3) * 80}
              className={`flex flex-col rounded-[1.75rem] p-7 sm:p-8 ${g.span} ${g.look}`}
            >
              <div className="flex items-baseline justify-between gap-4">
                <span className="font-display text-lg font-bold opacity-70">{g.n}</span>
              </div>
              <h3 className="font-display mt-4 text-3xl font-extrabold leading-tight tracking-[-0.02em] sm:text-4xl">
                {g.title}
              </h3>
              <p className={`mt-2 text-base leading-snug ${g.muted}`}>{g.blurb}</p>
              <ul className={`mt-6 grid border-t ${g.rule} ${g.skills.length > 6 || g.span === "md:col-span-4" ? "sm:grid-cols-2 sm:gap-x-8" : ""}`}>
                {g.skills.map((s) => (
                  <li key={s} className={`border-b py-2.5 text-lg font-medium ${g.rule}`}>
                    {s}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}

          <Reveal
            delay={160}
            className="flex flex-col justify-between rounded-[1.75rem] border-2 border-dashed border-ink/30 p-7 sm:p-8 md:col-span-2"
          >
            <span className="font-display text-lg font-bold opacity-70">07</span>
            <div className="mt-4">
              <h3 className="font-display text-2xl font-extrabold leading-tight tracking-[-0.02em]">Away from the screen</h3>
              <p className="mt-2 text-lg font-medium">Acrylic painting</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
