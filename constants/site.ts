export interface SocialLink {
  name: string;
  url: string;
  handle: string;
}

export const SITE_CONFIG = {
  name: "Umma Habiba Tuly",
  professionalTitle: "AI Engineer & Full-Stack Developer",
  company: "AT Sync",
  role: "Founder @ AT Sync",
  description:
    "AI agents, automation, full-stack software and UI/UX design for growing businesses.",
  url: "https://tuly.atsync.tech",
  email: "ummahabibatuly2001@gmail.com",
  whatsappNumber: "+8801954664733",
  whatsappUrl: "https://wa.me/8801954664733",
  location: "Khulna, Bangladesh",
  replyTime: "Within 24 hours",
  socials: [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/umma-habiba-tuly-cse/", handle: "umma-habiba-tuly-cse" },
    { name: "GitHub", url: "https://github.com/Umma-Habiba-Tuly", handle: "Umma-Habiba-Tuly" },
    { name: "Instagram", url: "https://www.instagram.com/tuly.cse/", handle: "@tuly.cse" },
    { name: "Facebook", url: "https://www.facebook.com/atsync.tech", handle: "atsync.tech" },
  ] as SocialLink[],
};

export const NAV_ITEMS = [
  { label: "What I do", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

/**
 * Wear Inspired demo video, shown inside the phone frame.
 * Leave empty to keep the phone screen blank. Set to a video URL
 * (e.g. "/videos/wear-inspired-demo.mp4" or a hosted .mp4) to play it.
 */
export const WEAR_INSPIRED_VIDEO = "";
export const WEAR_INSPIRED_POSTER = "";
