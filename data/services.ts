import { ServiceItem } from "@/types/common";

export const SERVICES: ServiceItem[] = [
  {
    id: "ai-customer-support",
    title: "AI Customer Support",
    category: "Customer Experience",
    description:
      "24/7 multi-channel support assistants that handle inquiries across Website Chat, Facebook Messenger, and Instagram with seamless human handoff.",
    iconName: "Bot",
    tags: ["OpenAI", "LangChain", "n8n", "FastAPI"],
  },
  {
    id: "ai-sales-automation",
    title: "AI Sales & Lead Automation",
    category: "Revenue Operations",
    description:
      "Intelligent pipelines that qualify inbound leads, enrich prospect data, update CRMs, and trigger timely automated follow-ups.",
    iconName: "Zap",
    tags: ["n8n", "HubSpot", "Python", "OpenAI"],
  },
  {
    id: "hotel-ai-receptionist",
    title: "Hotel AI Receptionist",
    category: "Hospitality & Booking",
    description:
      "Automated guest service agents that manage room inquiries, pricing FAQs, amenity details, and booking requests round-the-clock.",
    iconName: "Building2",
    tags: ["WhatsApp", "LangChain", "OpenAI", "FastAPI"],
  },
  {
    id: "knowledge-base-rag",
    title: "Knowledge Base (RAG)",
    category: "Internal Operations",
    description:
      "Retrieval-Augmented Generation systems enabling team members to instantly search internal SOPs and documents with accurate source citations.",
    iconName: "Database",
    tags: ["Pinecone", "Qdrant", "LlamaIndex", "Python"],
  },
  {
    id: "workflow-automation",
    title: "Business Workflow Automation",
    category: "Process Efficiency",
    description:
      "Custom trigger-based automated workflows connecting your app stack to eliminate manual copy-pasting and data synchronization errors.",
    iconName: "Workflow",
    tags: ["n8n", "Docker", "FastAPI", "PostgreSQL"],
  },
  {
    id: "custom-ai-agents",
    title: "Custom AI Agent Pipelines",
    category: "Agentic Systems",
    description:
      "Specialized multi-step AI pipelines designed for document parsing, intelligent decision making, scraping, and custom operational tasks.",
    iconName: "Cpu",
    tags: ["Python", "LangChain", "Docker", "FastAPI"],
  },
];
