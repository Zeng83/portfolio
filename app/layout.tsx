import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zhao Zeng | AI Forest Portfolio",
  description: "Mobile-first personal portfolio with an AI, green, and forest-inspired design.",
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
        <meta name="google" content="notranslate" />
        <meta name="google" content="notranslate" />
        <link rel="icon" href="/favicon.ico" />
      </head>

      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
