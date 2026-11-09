export const WORK_INTRO = "One system in production, two smaller ones finished, one on the way.";

export const FEATURED_WORK = {
  label: "In production",
  sector: "Clothing brand",
  name: "Wear Inspired",
  title: "Customer support on the website, Messenger and Instagram",
  summary:
    "Customers write to the brand on its website, Messenger and Instagram. The assistant I built answers questions about sizing, orders and returns from the brand's own product and policy data. When it can't, a person takes over with the whole conversation in front of them.",
  flow: [
    { k: "Arrives", v: "A message comes in from the website, Messenger or Instagram through a webhook." },
    { k: "Routed", v: "n8n works out who is writing, loads their history and checks whether it is text or an image." },
    { k: "Answers", v: "The agent looks up product and policy facts in Qdrant, remembers the chat in PostgreSQL, checks the catalogue in Google Sheets and writes the reply." },
    { k: "Hands off", v: "If it shouldn't answer, a person gets the conversation with everything said so far." },
  ],
  builtWith: "n8n, OpenRouter, Qdrant, PostgreSQL, Meta API, Google Sheets",
};

export const OTHER_WORK = [
  {
    name: "Document search",
    text: "Staff ask a question in plain language and get an answer with a link back to the source document.",
    stack: "Qdrant, Python, FastAPI",
    status: "Finished",
    live: false,
  },
  {
    name: "Lead handling",
    text: "New web leads are checked, saved to PostgreSQL and sent to the team straight away.",
    stack: "n8n, Python, PostgreSQL",
    status: "Finished",
    live: false,
  },
  {
    name: "Frontend projects",
    text: "Pioneer Bank, Panda Commerce, Hot Gadgets and Shopping Card. The code is on my GitHub.",
    stack: "HTML, CSS, JavaScript",
    status: "On GitHub",
    live: false,
  },
  {
    name: "Hotel receptionist",
    text: "An assistant for guests: rooms, prices, booking questions and requests.",
    stack: "LangChain, FastAPI, WhatsApp",
    status: "In development",
    live: true,
  },
];

export const SERVICES_STATEMENT =
  "I build assistants that answer your customers, workflows that move data between your tools, and search that finds the answer inside your own documents.";

export const SERVICES = [
  {
    name: "Support assistants",
    text: "On your website, Messenger or Instagram. They answer from your own information and pass the rest to your team.",
  },
  {
    name: "AI agents and RAG",
    text: "AI agents, RAG knowledge systems and SaaS products, built end to end, from idea to production.",
  },
  {
    name: "Automation",
    text: "n8n workflows, APIs and webhooks that turn repetitive business work into hands-free systems.",
  },
  {
    name: "Full-stack software",
    text: "Web apps and custom software, from polished frontends to solid backends.",
  },
  {
    name: "Frontend development",
    text: "Fast, responsive interfaces built with Next.js, TypeScript and Tailwind CSS.",
  },
  {
    name: "UI/UX design",
    text: "Clean, intuitive interfaces and dashboards that people enjoy using.",
  },
];

export const PROCESS = [
  { n: "1", text: "We talk through the task that eats your time." },
  { n: "2", text: "I build it on the tools you already use." },
  { n: "3", text: "We test it on real use before your customers see it." },
  { n: "4", text: "I keep it running and fix what breaks." },
];

export const ABOUT = {
  statement: "I'd rather build one thing that works every day than a demo that looks good once.",
  bio: [
    "I'm Umma Habiba Tuly, founder of AT Sync, based in Khulna, Bangladesh. I have a BSc in CSE from North Western University (CGPA 3.70 / 4.00).",
    "I work mostly in n8n, Qdrant and LangChain, write the glue in Python and FastAPI, and build interfaces in Next.js.",
    "So far: customer support for a clothing brand, document search, lead handling and a handful of web projects. Now: an AI receptionist for hotels.",
  ],
  tools: "OpenAI, Anthropic, Gemini, LangChain, Qdrant, n8n, Python, FastAPI, PostgreSQL, Docker, Next.js, TypeScript, Tailwind CSS",
  worksWith: "AI, SaaS, software and automation collaborations: e-commerce, hospitality, startups, agencies, education",
};
