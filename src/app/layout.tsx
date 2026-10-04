import type { Metadata } from "next";
import { Geist, Inter } from "next/font/google";

import "./globals.css";
import "highlight.js/styles/github-dark.css";

import { cn } from "@/lib/utils";
import { LanguageProvider } from "@/i18n/LanguageProvider";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Jhoan Camilo - Junior Software Engineer",
  description:
    "Software Engineer | Cybersecurity Specialist | AI Builder",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "font-sans",
        geist.variable
      )}
    >
      <body className={inter.variable}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}