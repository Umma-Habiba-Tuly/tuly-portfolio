import { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/constants/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE_CONFIG.name} — ${SITE_CONFIG.professionalTitle}`,
    short_name: "Tuly AI Portfolio",
    description: SITE_CONFIG.description,
    start_url: "/",
    display: "standalone",
    background_color: "#0E2E2B",
    theme_color: "#0E2E2B",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/images/tuly-portrait.jpg",
        sizes: "192x192",
        type: "image/jpeg",
      },
      {
        src: "/images/tuly-portrait.jpg",
        sizes: "512x512",
        type: "image/jpeg",
      },
    ],
  };
}
