export type Group = {
  n: string;
  title: string;
  blurb: string;
  skills: string[];
  span: string;
  look: string;
  rule: string;
  muted: string;
};

export const GROUPS: Group[] = [
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

