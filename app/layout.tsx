import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zhao Tsang | AI Forest Portfolio",
  description: "Mobile-first personal portfolio with an AI, green, and forest-inspired design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
