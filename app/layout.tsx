import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zhao Zeng | AI Forest Portfolio",
  description: "Mobile-first personal portfolio with an AI, green, and forest-inspired design.",
  keywords: [
    "AI",
    "frontend",
    "portfolio",
    "forest",
    "design systems",
    "software engineer",
  ],
  authors: [{ name: "ZhaoFeng Zeng", url: "https://www.zk-craft.com" }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Zhao Zeng | AI Forest Portfolio",
    description: "Mobile-first personal portfolio featuring AI‑powered design with a forest aesthetic.",
    url: "https://www.zk-craft.com",
    siteName: "AI Forest Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AI Forest Portfolio preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Mobile-first personal portfolio with an AI, green, and forest-inspired design." />
        <meta name="keywords" content="AI, green, forest, portfolio, personal, frontend, engineering" />
        <meta name="author" content="ZhaoFeng Zeng" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <link rel="canonical" href="https://www.zk-craft.com/" />
        <meta name="google" content="notranslate" />
        <link rel="icon" href="/favicon.ico" />

        {/* JSON‑LD structured data for Person */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Zhao Feng Zeng",
          "url": "https://www.zk-craft.com",
          "sameAs": [
            "https://github.com/zeng83",
            "https://linkedin.com/in/zhaofeng-zeng"
          ],
          "jobTitle": "Software Engineer Lead",
          "worksFor": {
            "@type": "Organization",
            "name": "Walmart Global Tech"
          }
        }) }} />
      </head>

      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
