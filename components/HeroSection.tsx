import React from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

interface HeroSectionProps {
  locale: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ locale }) => {
  // Animated text variants
  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.2,
        ease: "easeInOut",
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 0.4,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      backgroundColor: "#0E9F6E", // Darker green on hover
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  const iconVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (custom: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: 0.6 + custom * 0.1,
        ease: "easeOut",
      },
    }),
    hover: {
      y: -5,
      color: "#10B981", // Green on hover
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.section
      className="min-h-screen flex flex-col items-center justify-center bg-lightBg dark:bg-darkBg transition-colors duration-300"
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text"
            variants={titleVariants}
          >
            Landry Tido
          </motion.h1>

          <motion.h2
            className="text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-300 mb-8"
            variants={subtitleVariants}
          >
            {locale === "fr"
              ? "Développeur Full-stack | Spécialiste React & Spring Boot"
              : "Full-stack Developer | React & Spring Boot Specialist"}
          </motion.h2>

          <motion.div
            className="flex space-x-4 mb-10"
            initial="hidden"
            animate="visible"
          >
            <motion.a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
              variants={iconVariants}
              custom={0}
              whileHover="hover"
              aria-label="GitHub"
            >
              <FiGithub className="w-5 h-5" />
            </motion.a>

            <motion.a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
              variants={iconVariants}
              custom={1}
              whileHover="hover"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="w-5 h-5" />
            </motion.a>

            <motion.a
              href="mailto:your-email@example.com"
              className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
              variants={iconVariants}
              custom={2}
              whileHover="hover"
              aria-label="Email"
            >
              <FiMail className="w-5 h-5" />
            </motion.a>
          </motion.div>

          <motion.a
            href="#projects"
            className="px-8 py-3 bg-primary text-white font-semibold rounded-full shadow-md hover:shadow-lg transform transition-transform"
            variants={buttonVariants}
            whileHover="hover"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            {locale === "fr" ? "Voir mes projets" : "View my projects"}
          </motion.a>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
