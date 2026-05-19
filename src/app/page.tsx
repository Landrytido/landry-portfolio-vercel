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
import SEOContent from "../../components/SEOContent";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const [locale, setLocale] = useState("fr");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      window.scrollTo(0, 0);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const changeLanguage = (newLocale: string) => {
    setLocale(newLocale);
  };

  return (
    <>
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
            <SEOContent locale={locale} />
          </main>

          <Footer locale={locale} />
        </div>
      </ThemeProvider>
    </>
  );
}
