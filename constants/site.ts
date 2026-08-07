import { SocialLink } from "@/types/common";

export interface SiteConfig {
  name: string;
  professionalTitle: string;
  company: string;
  role: string;
  description: string;
  url: string;
  email: string;
  whatsappNumber?: string;
  whatsappUrl?: string;
  location: string;
  replyTime?: string;
  socials: SocialLink[];
}

export const SITE_CONFIG: SiteConfig = {
  name: "Umma Habiba Tuly",
  professionalTitle: "AI Automation Engineer",
  company: "AT Sync",
  role: "Founder @ AT Sync",
  description: "Building custom AI automation systems, support assistants, and workflow pipelines for growing businesses.",
  url: "https://atsync.tech",
  email: "ummahabibatuly2001@gmail.com",
  whatsappNumber: "+8801954664733",
  whatsappUrl: "https://wa.me/8801954664733",
  location: "Bangladesh",
  replyTime: "Within 24 hours",
  socials: [
    { name: "Email", url: "mailto:ummahabibatuly2001@gmail.com", iconName: "Mail" },
    { name: "WhatsApp", url: "https://wa.me/8801954664733", iconName: "MessageCircle" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/umma-habiba-tuly-cse/", iconName: "Linkedin" },
    { name: "Facebook", url: "https://www.facebook.com/atsync.tech", iconName: "Facebook" },
    { name: "GitHub", url: "https://github.com/Umma-Habiba-Tuly", iconName: "Github" },
  ],
};

