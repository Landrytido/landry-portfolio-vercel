import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Landry Tido | Développeur Full-stack - React & Spring Boot",
  description:
    "Portfolio de Landry Tido, développeur Full-stack spécialisé en React, Spring Boot, TypeScript et GraphQL. Basé à Bruxelles, disponible pour projets freelance.",
  keywords: [
    "développeur full-stack",
    "React developer",
    "Spring Boot",
    "TypeScript",
    "GraphQL",
    "développeur Bruxelles",
    "freelance developer",
    "portfolio développeur",
    "Java developer",
    "frontend backend",
  ],
  authors: [
    { name: "Landry Tido", url: "https://landry-portfolio.vercel.app" },
  ],
  creator: "Landry Tido",
  publisher: "Landry Tido",

  // Open Graph tags pour Facebook, LinkedIn, etc.
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://landry-portfolio.vercel.app",
    siteName: "Portfolio Landry Tido",
    title: "Landry Tido | Développeur Full-stack - React & Spring Boot",
    description:
      "Portfolio de Landry Tido, développeur Full-stack spécialisé en React, Spring Boot, TypeScript et GraphQL. Basé à Bruxelles, disponible pour projets freelance.",
    images: [
      {
        url: "/images/og-image.jpg", // À créer : 1200x630px
        width: 1200,
        height: 630,
        alt: "Portfolio de Landry Tido - Développeur Full-stack",
        type: "image/jpeg",
      },
    ],
  },

  // Twitter Cards
  twitter: {
    card: "summary_large_image",
    site: "@landrytido", // Remplace par ton handle Twitter si tu en as un
    creator: "@landrytido",
    title: "Landry Tido | Développeur Full-stack",
    description:
      "Portfolio de Landry Tido, développeur Full-stack spécialisé en React, Spring Boot, TypeScript et GraphQL.",
    images: ["/images/twitter-card.jpg"], // À créer : 1200x600px
  },

  // Autres meta tags
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  verification: {
    google: "6C_NU4a0x5wyHo00NEp9KYa01jHuMgFuh0M7QlEp_Sk",
  },

  alternates: {
    canonical: "https://landry-portfolio.vercel.app",
    languages: {
      fr: "https://landry-portfolio.vercel.app/fr",
      en: "https://landry-portfolio.vercel.app/en",
      "x-default": "https://landry-portfolio.vercel.app/fr",
    },
  },

  category: "technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/icons/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/icons/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        <link rel="manifest" href="/icons/site.webmanifest" />

        {/* Meta tags additionnels */}
        <meta name="theme-color" content="#10B981" />
        <meta name="msapplication-TileColor" content="#10B981" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Preconnect pour les performances */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Données structurées JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Landry Tido",
              jobTitle: "Développeur Full-stack",
              description:
                "Développeur Full-stack spécialisé en React, Spring Boot, TypeScript et GraphQL",
              url: "https://landry-portfolio.vercel.app",
              image: "https://landry-portfolio.vercel.app/images/profile.jpg",
              email: "landrytido727@gmail.com",
              telephone: "+32465362609",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Bruxelles",
                addressCountry: "Belgique",
              },
              sameAs: [
                "https://github.com/Landrytido",
                "https://linkedin.com/in/landry-tido-atikeng",
              ],
              worksFor: {
                "@type": "Organization",
                name: "hdm network",
              },
              alumniOf: {
                "@type": "EducationalOrganization",
                name: "EAFC Uccle",
              },
              knowsAbout: [
                "React",
                "Spring Boot",
                "TypeScript",
                "GraphQL",
                "JavaScript",
                "Java",
                "Next.js",
                "Prisma",
                "MySQL",
                "PostgreSQL",
              ],
              hasOccupation: {
                "@type": "Occupation",
                name: "Développeur Full-stack",
                occupationLocation: {
                  "@type": "Place",
                  name: "Bruxelles, Belgique",
                },
                skills: ["React", "Spring Boot", "TypeScript", "GraphQL"],
              },
            }),
          }}
        />
      </head>
      <body className={inter.variable}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
