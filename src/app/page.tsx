"use client";

import React, { useState, useEffect } from "react";
import { ThemeProvider } from "next-themes";
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

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [locale, setLocale] = useState("fr"); // Default language is French
  const [isLoading, setIsLoading] = useState(true);

  // Fix hydration issues with next-themes
  useEffect(() => {
    setMounted(true);

    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  // Change language function
  const changeLanguage = (newLocale: string) => {
    setLocale(newLocale);
  };

  // Don't render until mounted (to prevent theme flashing)
  if (!mounted) return null;

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      {isLoading && <LoadingScreen />}

      <div className="min-h-screen bg-lightBg dark:bg-darkBg transition-colors duration-300">
        <Navbar locale={locale} changeLanguage={changeLanguage} />

        <main>
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
  );
}
