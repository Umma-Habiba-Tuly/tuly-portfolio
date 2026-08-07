export interface IndustryItem {
  id: string;
  name: string;
  iconName: string;
}

export interface PrincipleItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface MilestoneItem {
  id: string;
  year?: string;
  title: string;
  description: string;
}

export const ABOUT_DATA = {
  name: "Umma Habiba Tuly",
  role: "AI Automation Engineer",
  company: "AT Sync",
  tagline: "Founder @ AT Sync",
  availabilityStatus: "Available for new projects",
  bio: [
    "I specialize in building practical AI automation systems that streamline business operations, customer support, and internal knowledge access.",
    "Rather than generic chatbots, I design custom AI agents, multi-channel support assistants, and workflow automation pipelines using n8n, Qdrant, and LangChain to solve real operational bottlenecks.",
  ],
  industries: [
    { id: "ind-1", name: "E-commerce & Apparel", iconName: "ShoppingBag" },
    { id: "ind-2", name: "Hospitality & Hotels", iconName: "Building2" },
    { id: "ind-3", name: "Startups & SMBs", iconName: "Rocket" },
    { id: "ind-4", name: "Agencies & Operations", iconName: "Workflow" },
    { id: "ind-5", name: "Education", iconName: "GraduationCap" },
  ],
  principles: [
    {
      id: "pr-1",
      title: "Production Reliability First",
      description: "Building robust, non-brittle AI systems that process real-world customer inquiries consistently 24/7.",
      iconName: "ShieldCheck",
    },
    {
      id: "pr-2",
      title: "Transparent Workflows",
      description: "Constructing clear, observable automation pipelines with step-by-step logging and auditability.",
      iconName: "Eye",
    },
    {
      id: "pr-3",
      title: "Measurable Business Impact",
      description: "Focusing on practical AI applications that eliminate repetitive manual tasks and accelerate response times.",
      iconName: "TrendingUp",
    },
  ],
  milestones: [
    {
      id: "m-1",
      title: "Founded AT Sync",
      description: "Established AT Sync to deliver tailored AI automation engineering and agentic workflows for businesses.",
    },
    {
      id: "m-2",
      title: "Built AI Customer Support Systems",
      description: "Deployed multi-channel AI support assistants integrated across Website Chat, Facebook Messenger, and Instagram.",
    },
    {
      id: "m-3",
      title: "Developed RAG-based Knowledge Systems",
      description: "Engineered Retrieval-Augmented Generation knowledge systems using Qdrant vector retrieval for instant document queries.",
    },
    {
      id: "m-4",
      title: "Building AI Solutions for Hotels & Businesses",
      description: "Developing specialized AI receptionists and custom business workflow automations for hospitality and growing teams.",
    },
  ],
};
