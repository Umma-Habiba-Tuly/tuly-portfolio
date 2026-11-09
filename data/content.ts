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
    name: "Lead and sales workflows",
    text: "Capture, check, route, follow up. Your records stay up to date without anyone typing them in.",
  },
  {
    name: "Search over your documents",
    text: "Manuals, SOPs, policies. Ask a question and get the answer and where it came from.",
  },
  {
    name: "Custom workflows",
    text: "Any repetitive job that sits between your tools. I'll look at it and tell you honestly if it's worth automating.",
  },
];

export const PROCESS = [
  { n: "1", text: "We talk through the task that eats your time." },
  { n: "2", text: "I build it on the tools you already use." },
  { n: "3", text: "We test it on real messages before customers see it." },
  { n: "4", text: "I keep it running and fix what breaks." },
];

export const ABOUT = {
  statement: "I'd rather build one thing that works every day than a demo that looks good once.",
  bio: [
    "I'm Umma Habiba Tuly, founder of AT Sync. I work mostly in n8n, Qdrant and LangChain, and write the glue in Python and FastAPI.",
    "So far: customer support for a clothing brand, document search, and lead handling. Now: an AI receptionist for hotels.",
  ],
  tools: "OpenAI, Anthropic, Gemini, LangChain, Qdrant, n8n, Python, FastAPI, PostgreSQL, Docker, Next.js, TypeScript",
  worksWith: "E-commerce, hospitality, startups, agencies, education",
};
