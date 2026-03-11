import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ZhaoFeng Zeng | AI-Powered Web Applications & Design Systems",
  description: "Software Engineer specializing in scalable web applications, AI-powered tools, and design systems. Expert in React, Next.js, and cloud technologies with a focus on solving complex challenges and delivering user-centric products.",
  keywords: [
    "AI-powered UI",
    "React",
    "Next.js",
    "TypeScript",
    "design systems",
    "frontend architecture",
    "scalable web applications",
    "AI tools",
    "software engineer",
    "cloud technologies",
    "performance optimization",
  ],
  authors: [{ name: "Zhao Feng Zeng", url: "https://www.zk-craft.com" }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "ZhaoFeng Zeng | AI-Powered Web Applications & Design Systems",
    description: "Crafting elegant AI-powered web experiences with scalable architecture, design systems, and modern frontend frameworks.",
    url: "https://www.zk-craft.com",
    siteName: "ZhaoFeng Zeng - Software Engineer",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AI Forest Portfolio - Scalable web applications and design systems",
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
        <meta name="keywords" content="AI-powered UI, React, Next.js, TypeScript, design systems, frontend architecture, scalable web applications, cloud technologies" />
        <meta name="author" content="Zhao Feng Zeng" />
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
          "description": "Specializing in scalable web applications, AI-powered tools, and design systems. Expert in React, Next.js, TypeScript, and cloud technologies.",
          "skills": [
            "React",
            "Next.js",
            "TypeScript",
            "AI-powered UI",
            "Design Systems",
            "Frontend Architecture",
            "Performance Optimization"
          ],
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
