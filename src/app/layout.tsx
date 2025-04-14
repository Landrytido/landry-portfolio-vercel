import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Landry Tido | Développeur Full-stack",
  description:
    "Portfolio de Landry Tido, développeur Full-stack spécialisé en React et Spring Boot",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        {/* <link rel="icon" href="/atl-logo.svg" /> */}
        <head>
          <link rel="icon" href="/icons/favicon.ico" sizes="32x32" />
          <link rel="icon" href="/icons/favicon.svg" type="image/svg+xml" />
          <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
          <link rel="manifest" href="/icons/site.webmanifest" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </head>
      </head>
      <body className={inter.variable}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
