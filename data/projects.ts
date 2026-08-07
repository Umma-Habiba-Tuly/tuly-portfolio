import { ProjectItem } from "@/types/common";

export const PROJECTS: ProjectItem[] = [
  {
    id: "wear-inspired-ai-support",
    title: "Wear Inspired AI Customer Support Assistant",
    slug: "wear-inspired-ai-support",
    category: "Multi-Channel Support AI",
    client: "Wear Inspired (E-commerce / Apparel)",
    summary:
      "An enterprise-grade multi-channel AI customer support ecosystem built for Wear Inspired. Operates 24/7 across Website Chat, Facebook Messenger, and Instagram with real-time intent analysis, semantic context retention, and automated human escalation.",
    description:
      "Wear Inspired, a rapidly growing apparel e-commerce brand, faced massive inquiry volumes across multiple channels (Website, Facebook Messenger, Instagram DMs). Inquiries regarding order tracking, sizing guides, return policies, and product availability created support backlogs and slow response times outside business hours.",
    challenge:
      "Inbound messages across Facebook, Instagram, and web chat were fragmented across disparate tools. High operational overhead, missed off-hour buyer queries, delayed support responses, and repetitive manual tier-1 questions degraded customer satisfaction and conversion rates.",
    solution:
      "Engineered an end-to-end AI Customer Support Infrastructure powered by OpenAI, LangChain, n8n orchestration, and FastAPI. The solution unifies inbound streams into a real-time event pipeline, uses semantic RAG for catalog/policy lookups, maintains cross-platform conversation memory, and dynamically routes high-intent or complex queries to human agents with automated ticket generation.",
    platforms: ["Website Chat", "Facebook Messenger", "Instagram"],
    outcomes: [
      "24/7 automated instant inquiry resolution across 3 major channels",
      "Unified message ingestion pipeline eliminating fragmented support queues",
      "Seamless human escalation with zero conversation context loss",
      "Over 75% reduction in tier-1 manual support ticket load",
      "Zero off-hour inquiry drop-off rate",
    ],
    metrics: [
      { id: "m1", label: "Uptime & Availability", value: "24/7" },
      { id: "m2", label: "Unified Platforms", value: "3 Channels" },
      { id: "m3", label: "Response Latency", value: "< 2.1s" },
      { id: "m4", label: "Tier-1 Auto-Resolution", value: "75%+" },
    ],
    technologies: ["OpenAI", "LangChain", "n8n", "FastAPI", "Python", "Docker"],
    featured: true,
    status: "live",
    statusText: "Live in Production",
    architectureSteps: [
      {
        step: "01",
        title: "Multi-Channel Ingestion",
        desc: "Webhooks capture inbound messages in real time from Facebook Messenger API, Instagram Graph API, and Website WebSocket Chat.",
        tech: "HTTPS Webhooks / Meta API",
      },
      {
        step: "02",
        title: "n8n Workflow Routing",
        desc: "n8n orchestrates incoming event payloads, deduplicates queries, checks user session state, and normalizes conversation context.",
        tech: "n8n / Docker / Redis",
      },
      {
        step: "03",
        title: "LangChain & RAG Context Engine",
        desc: "LangChain agent analyzes query intent, runs entity extraction for order numbers, and queries product knowledge vectors for exact policy data.",
        tech: "OpenAI GPT-4o / Qdrant RAG",
      },
      {
        step: "04",
        title: "Automated Action & Handoff",
        desc: "Delivers accurate context-backed answer to customer channel or triggers Slack/CRM human handoff with conversation summary if sentiment is frustrated or intent requires intervention.",
        tech: "FastAPI / Slack Webhook / Zendesk",
      },
    ],
    highlights: [
      {
        title: "Cross-Platform Conversation Memory",
        desc: "Remembers user interactions and context seamlessly across Web Chat, Facebook, and Instagram DMs.",
        iconName: "MessageSquare",
      },
      {
        title: "Smart Escalation & Human Handoff",
        desc: "Automatically detects high-priority cases or negative customer sentiment and alerts human support reps in real time.",
        iconName: "ShieldAlert",
      },
      {
        title: "Semantic Catalog & Policy RAG",
        desc: "Retrieves instant, accurate details on sizing charts, shipping estimates, and return policies with zero hallucination.",
        iconName: "Database",
      },
      {
        title: "Zero Off-Hours Delay",
        desc: "Eliminates overnight buyer waiting times by resolving apparel inquiries 24 hours a day, 365 days a year.",
        iconName: "Zap",
      },
    ],
    businessImpact: [
      {
        metric: "75%+",
        label: "Routine Inquiry Automation",
        detail: "Three out of four tier-1 inquiries resolved automatically without agent intervention.",
      },
      {
        metric: "< 2.1s",
        label: "Average Response Speed",
        detail: "Instant contextual replies delivered across Facebook, Instagram, and Web.",
      },
      {
        metric: "100%",
        label: "Off-Hour Coverage",
        detail: "No customer lead or support query left unanswered overnight or on weekends.",
      },
    ],
  },
  {
    id: "hotel-ai-receptionist",
    title: "Hotel AI Receptionist",
    slug: "hotel-ai-receptionist",
    category: "Hospitality AI",
    client: "Hotels & Vacation Rentals",
    summary:
      "A specialized AI receptionist system currently in development to handle room availability inquiries, pricing, booking FAQs, and guest service requests 24/7.",
    description:
      "Designing a dedicated AI reception agent tailored for hotel properties and resorts to handle guest inquiries round-the-clock via website chat and messaging channels.",
    challenge:
      "Front-desk staff face high volumes of repetitive inquiries regarding room amenities, availability, pricing, check-in policies, and local recommendations.",
    solution:
      "Building a specialized AI hotel receptionist capable of answering booking FAQs, providing room details, and managing guest requests with multi-language support.",
    platforms: ["Website Chat", "WhatsApp"],
    outcomes: [
      "Round-the-clock guest inquiry assistance",
      "Automated room availability & pricing FAQ responses",
      "Streamlined front-desk queue management",
    ],
    metrics: [
      { id: "m4", label: "Project Status", value: "In Development" },
      { id: "m5", label: "Target Coverage", value: "24/7 Guest Support" },
    ],
    technologies: ["LangChain", "OpenAI", "FastAPI", "Python"],
    featured: false,
    status: "in-development",
    statusText: "Coming Soon / In Development",
  },
  {
    id: "knowledge-base-rag",
    title: "Knowledge Base (RAG) System",
    slug: "knowledge-base-rag",
    category: "Internal Operations",
    client: "Internal Operations",
    summary:
      "A Retrieval-Augmented Generation (RAG) system built to query internal company SOPs, manuals, and technical documents with accurate source references.",
    description:
      "Implemented a vector-search RAG pipeline to index company documents and return accurate, context-aware answers to internal operational queries.",
    challenge:
      "Teams spent significant time manually searching through dense PDFs, internal documentation, and scattered files to find operational answers.",
    solution:
      "Constructed a RAG pipeline utilizing Pinecone vector storage and LlamaIndex orchestration to perform semantic searches and generate source-backed answers.",
    outcomes: [
      "Centralized internal document search",
      "Instant accurate source-backed answers",
      "Accelerated team onboarding & workflow speed",
    ],
    metrics: [
      { id: "m6", label: "Retrieval System", value: "Vector RAG" },
      { id: "m7", label: "Document Format", value: "PDFs & SOPs" },
    ],
    technologies: ["Pinecone", "LlamaIndex", "Python", "FastAPI", "Qdrant"],
    featured: false,
    status: "completed",
    statusText: "Completed",
  },
  {
    id: "business-workflow-automation",
    title: "Business Workflow & Lead Automation",
    slug: "business-workflow-automation",
    category: "Process Efficiency",
    client: "Business Operations",
    summary:
      "Automated business workflows built with n8n and Python to process incoming web leads, validate submitted data, and synchronize internal systems.",
    description:
      "Designed custom trigger-based automation workflows connecting software tools to eliminate manual data entry and speed up operational pipelines.",
    challenge:
      "Manual copying and pasting of lead data between web forms, databases, and internal communication channels created operational bottlenecks.",
    solution:
      "Built automated n8n workflows that validate lead submissions, store records in PostgreSQL, and notify team members instantly.",
    outcomes: [
      "Automated data synchronization across tools",
      "Eliminated manual copy-pasting & data entry",
      "Instant lead notification triggers",
    ],
    metrics: [
      { id: "m8", label: "Execution Mode", value: "Trigger-Based" },
      { id: "m9", label: "Data Pipeline", value: "Automated Sync" },
    ],
    technologies: ["n8n", "Python", "FastAPI", "PostgreSQL", "Docker"],
    featured: false,
    status: "completed",
    statusText: "Completed",
  },
];
