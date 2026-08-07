import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Manrope, Sora } from "next/font/google";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { SITE_CONFIG } from "@/constants/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export const viewport: Viewport = {
  themeColor: "#050608",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: `${SITE_CONFIG.name} — ${SITE_CONFIG.professionalTitle} & ${SITE_CONFIG.role}`,
  description: SITE_CONFIG.description,
  keywords: [
    "AI Automation Engineer",
    "AT Sync",
    "Umma Habiba Tuly",
    "AI Support Agent",
    "n8n Automation",
    "Qdrant Vector DB",
    "LangChain",
    "RAG Knowledge Systems",
  ],
  icons: {
    icon: "/favicon.ico",
    apple: "/images/tuly-portrait.jpg",
  },
  manifest: "/manifest.webmanifest",
  alternates: {
    canonical: SITE_CONFIG.url,
  },
  openGraph: {
    title: `${SITE_CONFIG.name} — ${SITE_CONFIG.professionalTitle}`,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    siteName: "AT Sync Portfolio",
    images: [
      {
        url: "/images/tuly-portrait.jpg",
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.name} — ${SITE_CONFIG.professionalTitle}`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.name} — ${SITE_CONFIG.professionalTitle}`,
    description: SITE_CONFIG.description,
    images: ["/images/tuly-portrait.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_CONFIG.url}/#person`,
      name: SITE_CONFIG.name,
      givenName: "Umma Habiba",
      familyName: "Tuly",
      jobTitle: SITE_CONFIG.professionalTitle,
      description: SITE_CONFIG.description,
      image: `${SITE_CONFIG.url}/images/tuly-portrait.jpg`,
      worksFor: {
        "@type": "Organization",
        name: SITE_CONFIG.company,
      },
      url: SITE_CONFIG.url,
      sameAs: SITE_CONFIG.socials.map((s) => s.url),
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_CONFIG.url}/#service`,
      name: `${SITE_CONFIG.company} — AI Automation & Support Engineering`,
      url: SITE_CONFIG.url,
      logo: `${SITE_CONFIG.url}/images/tuly-portrait.jpg`,
      image: `${SITE_CONFIG.url}/images/tuly-portrait.jpg`,
      priceRange: "$$",
      description: "Production-ready AI support assistants, sales agents, vector knowledge bases, and n8n visual automation pipelines.",
      address: {
        "@type": "PostalAddress",
        addressCountry: "BD",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_CONFIG.url}/#website`,
      url: SITE_CONFIG.url,
      name: `${SITE_CONFIG.name} — AI Portfolio`,
      description: SITE_CONFIG.description,
      publisher: {
        "@id": `${SITE_CONFIG.url}/#person`,
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${manrope.variable} ${sora.variable} dark h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground antialiased font-sans">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
