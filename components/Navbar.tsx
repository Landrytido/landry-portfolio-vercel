import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";

interface NavbarProps {
  locale: string;
  changeLanguage: (locale: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ locale, changeLanguage }) => {
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const navItems = [
    { id: "about", labelFr: "À propos", labelEn: "About" },
    { id: "skills", labelFr: "Compétences", labelEn: "Skills" },
    { id: "projects", labelFr: "Projets", labelEn: "Projects" },
    { id: "experience", labelFr: "Expérience", labelEn: "Experience" },
    { id: "education", labelFr: "Formation", labelEn: "Education" },
    { id: "contact", labelFr: "Contact", labelEn: "Contact" },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const navbarHeight = 80; // hauteur approximative de la navbar
      const elementPosition = section.offsetTop - navbarHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
      setIsMenuOpen(false);
    }
  };
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  if (!mounted) return null;

  return (
    <motion.header
      className="fixed top-0 left-0 w-full z-40 bg-lightBg dark:bg-darkBg shadow-md transition-colors duration-300"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <motion.div
            className="font-bold text-xl text-primary"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-primary">L</span>
            <span className="text-black dark:text-white">T</span>
          </motion.div>

          <nav className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors font-medium"
              >
                {locale === "fr" ? item.labelFr : item.labelEn}
              </button>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <div className="flex space-x-2 text-sm">
              <button
                onClick={() => changeLanguage("fr")}
                className={`${
                  locale === "fr"
                    ? "text-primary font-bold"
                    : "text-gray-600 dark:text-gray-400"
                }`}
              >
                FR
              </button>
              <span className="text-gray-600 dark:text-gray-400">|</span>
              <button
                onClick={() => changeLanguage("en")}
                className={`${
                  locale === "en"
                    ? "text-primary font-bold"
                    : "text-gray-600 dark:text-gray-400"
                }`}
              >
                EN
              </button>
            </div>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <FiSun className="text-yellow-400 w-5 h-5" />
              ) : (
                <FiMoon className="text-gray-700 w-5 h-5" />
              )}
            </button>

            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <FiX className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              ) : (
                <FiMenu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <motion.nav
            className="md:hidden pt-4 pb-2"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors font-medium py-2"
                >
                  {locale === "fr" ? item.labelFr : item.labelEn}
                </button>
              ))}
            </div>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
};

export default Navbar;
