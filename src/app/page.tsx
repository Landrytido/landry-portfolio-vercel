"use client";

import React, { useState, useEffect } from "react";
import { ThemeProvider } from "next-themes";
import Head from "next/head";
import LoadingScreen from "../../components/LoadingScreen";
import Navbar from "../../components/Navbar";
import HeroSection from "../../components/HeroSection";
import AboutSection from "../../components/AboutSection";
import SkillsSection from "../../components/SkillsSection";
import ProjectsSection from "../../components/ProjectsSection";
import ExperienceSection from "../../components/ExperienceSection";
import EducationSection from "../../components/EducationSection";
import ContactSection from "../../components/ContactSection";
import Footer from "../../components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [locale, setLocale] = useState("fr");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const changeLanguage = (newLocale: string) => {
    setLocale(newLocale);
  };

  // Meta tags dynamiques selon la langue
  const getMetaTags = (currentLocale: string) => {
    if (currentLocale === "en") {
      return {
        title: "Landry Tido | Full-stack Developer - React & Spring Boot",
        description:
          "Portfolio of Landry Tido, Full-stack developer specialized in React, Spring Boot, TypeScript and GraphQL. Based in Brussels, available for freelance projects.",
        ogTitle: "Landry Tido | Full-stack Developer - React & Spring Boot",
        ogDescription:
          "Portfolio of Landry Tido, Full-stack developer specialized in React, Spring Boot, TypeScript and GraphQL. Based in Brussels, available for freelance projects.",
      };
    }
    return {
      title: "Landry Tido | Développeur Full-stack - React & Spring Boot",
      description:
        "Portfolio de Landry Tido, développeur Full-stack spécialisé en React, Spring Boot, TypeScript et GraphQL. Basé à Bruxelles, disponible pour projets freelance.",
      ogTitle: "Landry Tido | Développeur Full-stack - React & Spring Boot",
      ogDescription:
        "Portfolio de Landry Tido, développeur Full-stack spécialisé en React, Spring Boot, TypeScript et GraphQL. Basé à Bruxelles, disponible pour projets freelance.",
    };
  };

  const metaTags = getMetaTags(locale);

  if (!mounted) return null;

  return (
    <>
      <Head>
        {/* Meta tags dynamiques selon la langue */}
        <title>{metaTags.title}</title>
        <meta name="description" content={metaTags.description} />
        <meta property="og:title" content={metaTags.ogTitle} />
        <meta property="og:description" content={metaTags.ogDescription} />
        <meta
          property="og:locale"
          content={locale === "fr" ? "fr_FR" : "en_US"}
        />

        {/* Hreflang tags */}
        <link rel="alternate" hrefLang="fr" href="https://landry-tido.com" />
        <link rel="alternate" hrefLang="en" href="https://landry-tido.com/en" />
        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://landry-tido.com"
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href={`https://landry-tido.com${locale === "en" ? "/en" : ""}`}
        />

        {/* Schema.org pour la page spécifique */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "@id": `https://landry-tido.com${
                locale === "en" ? "/en" : ""
              }#webpage`,
              url: `https://landry-tido.com${locale === "en" ? "/en" : ""}`,
              name: metaTags.title,
              description: metaTags.description,
              inLanguage: locale === "fr" ? "fr-FR" : "en-US",
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://landry-tido.com#website",
                url: "https://landry-tido.com",
                name: "Portfolio Landry Tido",
              },
              about: {
                "@type": "Person",
                "@id": "https://landry-tido.com#person",
                name: "Landry Tido",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                "@id": "https://landry-tido.com/images/og-image.jpg",
                url: "https://landry-tido.com/images/og-image.jpg",
                width: 1200,
                height: 630,
              },
              datePublished: "2025-01-20",
              dateModified: new Date().toISOString().split("T")[0],
            }),
          }}
        />
      </Head>

      <ToastContainer />
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
        {isLoading && <LoadingScreen />}

        <div className="min-h-screen bg-lightBg dark:bg-darkBg transition-colors duration-300">
          <Navbar locale={locale} changeLanguage={changeLanguage} />

          <main role="main">
            <HeroSection locale={locale} />
            <AboutSection locale={locale} />
            <SkillsSection locale={locale} />
            <ProjectsSection locale={locale} />
            <ExperienceSection locale={locale} />
            <EducationSection locale={locale} />
            <ContactSection locale={locale} />
          </main>

          <Footer locale={locale} />
        </div>
      </ThemeProvider>
    </>
  );
}
