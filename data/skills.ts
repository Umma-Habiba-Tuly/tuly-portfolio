import { TechItem } from "@/types/common";

export interface SkillCategory {
  id: string;
  title: string;
  skills: TechItem[];
}

export const TRUSTED_TECH: TechItem[] = [
  { id: "openai", name: "OpenAI", category: "LLMs & Models", iconName: "Cpu" },
  { id: "anthropic", name: "Anthropic", category: "LLMs & Models", iconName: "Bot" },
  { id: "gemini", name: "Google Gemini", category: "LLMs & Models", iconName: "Sparkles" },
  { id: "langchain", name: "LangChain", category: "Frameworks", iconName: "Workflow" },
  { id: "llamaindex", name: "LlamaIndex", category: "Frameworks", iconName: "Database" },
  { id: "pinecone", name: "Pinecone", category: "Vector Databases", iconName: "Layers" },
  { id: "qdrant", name: "Qdrant", category: "Vector Databases", iconName: "Server" },
  { id: "n8n", name: "n8n", category: "Automation Platforms", iconName: "Zap" },
  { id: "python", name: "Python", category: "Core Stack", iconName: "Code" },
  { id: "fastapi", name: "FastAPI", category: "Backend APIs", iconName: "Server" },
  { id: "docker", name: "Docker", category: "Infrastructure", iconName: "Box" },
  { id: "nextjs", name: "Next.js", category: "Frontend Framework", iconName: "Globe" },
  { id: "typescript", name: "TypeScript", category: "Languages", iconName: "FileCode" },
  { id: "tailwindcss", name: "Tailwind CSS", category: "Styling", iconName: "Palette" },
  { id: "postgresql", name: "PostgreSQL", category: "Databases", iconName: "Database" },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "ai-orchestration",
    title: "AI & Agent Frameworks",
    skills: TRUSTED_TECH.slice(0, 5),
  },
  {
    id: "automation-backend",
    title: "Backend & Automation",
    skills: TRUSTED_TECH.slice(5),
  },
];
