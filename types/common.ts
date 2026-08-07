export type StatusType = "active" | "available" | "busy" | "offline";

export interface SocialLink {
  name: string;
  url: string;
  iconName?: string;
}

export interface MetricItem {
  id: string;
  label: string;
  value: string;
  description?: string;
}

export interface TechItem {
  id: string;
  name: string;
  category: string;
  iconName?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  category?: string;
  description: string;
  iconName?: string;
  tags: string[];
  bullets?: string[];
  featured?: boolean;
  platforms?: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  slug: string;
  category?: string;
  client?: string;
  summary: string;
  description: string;
  challenge?: string;
  solution?: string;
  outcomes?: string[];
  metrics?: MetricItem[];
  technologies: string[];
  image?: string;
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
  status?: "in-development" | "live" | "completed";
  statusText?: string;
  platforms?: string[];
  architectureSteps?: {
    step: string;
    title: string;
    desc: string;
    tech: string;
  }[];
  highlights?: {
    title: string;
    desc: string;
    iconName: string;
  }[];
  businessImpact?: {
    metric: string;
    label: string;
    detail: string;
  }[];
}

export interface WorkflowStep {
  id: string;
  stepNumber: number;
  title: string;
  category: string;
  description: string;
  tools: string[];
  logMessage: string;
  iconName?: string;
}

export interface WorkflowItem {
  id: string;
  title: string;
  description: string;
  steps: WorkflowStep[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  avatarUrl?: string;
  rating?: number;
  highlightMetric?: string;
}

