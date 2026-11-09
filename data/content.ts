export const FEATURED_WORK = {
  label: "Live in production",
  sector: "E-commerce / Apparel",
  title: "Wear Inspired — AI customer support",
  summary:
    "One assistant that answers sizing, order and policy questions across Website Chat, Facebook Messenger and Instagram, and hands the conversation to a person when it matters.",
  channels: ["Website Chat", "Messenger", "Instagram"],
  pipeline: [
    { step: "01", title: "Message arrives", text: "A webhook receives the message from any of the three channels." },
    { step: "02", title: "n8n routes it", text: "Session, history and message type are sorted before the AI sees it." },
    { step: "03", title: "Agent + Qdrant", text: "The agent searches the product and policy knowledge base, reads images if sent, and decides what to do." },
    { step: "04", title: "Reply or handoff", text: "A grounded answer goes back, or a human takes over with the full context." },
  ],
  outcomes: [
    "Answers customers around the clock on three channels",
    "One ingestion pipeline instead of three separate inboxes",
    "Human handoff keeps the whole conversation context",
  ],
  stack: ["n8n", "OpenRouter", "Qdrant", "PostgreSQL", "Meta API", "Google Sheets"],
};

export const OTHER_WORK = [
  {
    status: "Completed",
    live: false,
    sector: "Internal operations",
    title: "Knowledge base (RAG)",
    text: "Search across company SOPs, manuals and documents, with answers that point back to the source.",
    stack: ["Qdrant", "Python", "FastAPI"],
  },
  {
    status: "Completed",
    live: false,
    sector: "Process efficiency",
    title: "Lead & workflow automation",
    text: "Web leads are validated, stored in PostgreSQL and sent to the team instantly, with no copy-pasting between tools.",
    stack: ["n8n", "Python", "PostgreSQL"],
  },
  {
    status: "In development",
    live: true,
    sector: "Hospitality",
    title: "Hotel AI receptionist",
    text: "A guest-facing agent for room availability, pricing, booking questions and service requests.",
    stack: ["LangChain", "FastAPI", "WhatsApp"],
  },
];

export const SERVICES = [
  {
    title: "AI customer support",
    text: "Assistants that handle questions on your website, Messenger and Instagram, and pass hard cases to your team with context.",
    tags: ["n8n", "LangChain", "FastAPI"],
  },
  {
    title: "Lead & sales automation",
    text: "Pipelines that capture, qualify and route inbound leads, update your records and trigger follow-ups on time.",
    tags: ["n8n", "Python", "PostgreSQL"],
  },
  {
    title: "Knowledge bases (RAG)",
    text: "Your documents made searchable, so your team and your assistants get accurate answers with sources.",
    tags: ["Qdrant", "Python", "FastAPI"],
  },
  {
    title: "Workflow & agent pipelines",
    text: "Custom multi-step automations and agents for the repetitive work that connects your tools together.",
    tags: ["n8n", "LangChain", "Docker"],
  },
];

export const PROCESS = [
  { step: "01", title: "Listen", text: "We map where time is lost: the questions, the copy-pasting, the handoffs." },
  { step: "02", title: "Build", text: "A working pipeline on your channels and tools, with logging at every step." },
  { step: "03", title: "Test", text: "Real messages and edge cases, before customers see anything." },
  { step: "04", title: "Run & improve", text: "Live monitoring and adjustments based on what people actually ask." },
];

export const ABOUT = {
  bio: [
    "I build practical AI automation for businesses: support assistants, lead pipelines and knowledge systems that remove repetitive work.",
    "Instead of a generic chatbot, I design the whole flow around how your team already works, using n8n, Qdrant and LangChain.",
  ],
  principles: [
    { title: "Reliable first", text: "Systems that keep answering real customers, every day, not just in a demo." },
    { title: "Easy to inspect", text: "Clear workflows with step-by-step logs, so you can see what happened and why." },
    { title: "Judged by time saved", text: "Every build starts from a task that costs your team hours." },
  ],
  timeline: [
    "Founded AT Sync for AI automation and agentic workflows",
    "Built multi-channel AI support for Website Chat, Messenger and Instagram",
    "Built RAG knowledge systems on Qdrant",
    "Developing an AI receptionist for hotels",
  ],
  industries: ["E-commerce & apparel", "Hospitality", "Startups & SMBs", "Agencies & operations", "Education"],
  stack: ["OpenAI", "Anthropic", "Gemini", "LangChain", "Qdrant", "n8n", "Python", "FastAPI", "PostgreSQL", "Docker", "Next.js", "TypeScript"],
};
