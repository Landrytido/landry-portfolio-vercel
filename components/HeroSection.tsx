import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { CodeBackground } from "./CodeBackground";

interface HeroSectionProps {
  locale: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ locale }) => {
  const emojiControls = useAnimation();

  useEffect(() => {
    const animateEmoji = async () => {
      await emojiControls.start({
        rotate: [0, -15, 15, 0],
        transition: { duration: 1, times: [0, 0.25, 0.75, 1] },
      });
    };

    animateEmoji();
    const interval = setInterval(animateEmoji, 3000);
    return () => clearInterval(interval);
  }, [emojiControls]);

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
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        delay: 0.3,
        ease: "easeOut",
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        delay: 0.5,
        ease: "easeOut",
      },
    },
  };

  const buttonsVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.7,
        ease: "easeOut",
      },
    },
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (custom: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 0.8 + custom * 0.1,
        ease: "easeOut",
      },
    }),
    hover: {
      y: -5,
      color: "#10B981",
      filter: "drop-shadow(0 5px 10px rgba(16, 185, 129, 0.4))",
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  const cvButtonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 0.8,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.1,
      boxShadow: "0 8px 20px rgba(16, 185, 129, 0.6)",
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.section
      className="min-h-screen flex flex-col items-center justify-center relative bg-lightBg dark:bg-darkBg transition-colors duration-300 overflow-hidden px-4"
      initial="hidden"
      animate="visible"
    >
      {/* Background code animé et gradients */}
      <div className="absolute inset-0 z-0">
        <CodeBackground />
        {/* Gradient overlay pour la lisibilité */}
        <div className="absolute inset-0 bg-gradient-to-br from-lightBg/90 via-lightBg/95 to-lightBg/90 dark:from-darkBg/90 dark:via-darkBg/95 dark:to-darkBg/90"></div>
      </div>

      <div className="container mx-auto z-10 max-w-5xl">
        <div className="flex flex-col items-center text-center">
          {/* TITRE PRINCIPAL - Espacement amélioré */}
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 md:mb-12 flex items-center justify-center"
            variants={titleVariants}
          >
            <span className="sr-only">
              {locale === "fr"
                ? "Landry Tido, Développeur Full-stack spécialisé en React et Spring Boot"
                : "Landry Tido, Full-stack Developer specialized in React and Spring Boot"}
            </span>

            <span aria-hidden="true" className="flex items-center">
              <span className="mr-2">{locale === "fr" ? "S" : "H"}</span>
              <motion.div
                className="inline-flex w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-secondary rounded-full justify-center items-center mx-1 md:mx-2 shadow-lg"
                animate={emojiControls}
              >
                <span
                  role="img"
                  aria-label={
                    locale === "fr" ? "emoji intelligent" : "smart emoji"
                  }
                  className="text-2xl md:text-3xl lg:text-4xl"
                >
                  🤓
                </span>
              </motion.div>
              <span className="bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text ml-2">
                {locale === "fr" ? "lut!" : "llo!"}
              </span>
            </span>
          </motion.h1>

          {/* SOUS-TITRE - Espacement amélioré */}
          <motion.h2
            className="text-2xl md:text-4xl lg:text-5xl font-semibold text-primary dark:text-primary mb-6 md:mb-8"
            variants={subtitleVariants}
          >
            {locale === "fr"
              ? "Développeur Full-stack"
              : "Full-stack Developer"}
          </motion.h2>

          {/* DESCRIPTION - Espacement et largeur améliorés */}
          <motion.div
            className="text-lg md:text-xl lg:text-2xl text-gray-700 dark:text-gray-300 mb-10 md:mb-16 max-w-4xl leading-relaxed"
            variants={textVariants}
          >
            <p className="mb-4 md:mb-6">
              {locale === "fr"
                ? "Développeur passionné spécialisé en React, Spring Boot, TypeScript et GraphQL. Basé à Bruxelles, disponible pour vos projets."
                : "Passionate developer specialized in React, Spring Boot, TypeScript and GraphQL. Based in Brussels, available for your projects."}
            </p>
            <span className="text-secondary font-medium text-base md:text-lg lg:text-xl inline-block">
              React • Spring Boot • TypeScript • GraphQL
            </span>
          </motion.div>

          {/* SECTION BOUTONS ET RÉSEAUX - Espacement considérablement amélioré */}
          <motion.div
            className="flex flex-col items-center space-y-12 md:space-y-16"
            variants={buttonsVariants}
          >
            {/* Container bouton CV et réseaux sociaux */}
            <div className="flex flex-col sm:flex-row items-center gap-8 md:gap-12 lg:gap-16">
              {/* Bouton CV */}
              <motion.a
                href="/CV.pdf"
                download="Landry-Tido-CV-Developpeur-Fullstack.pdf"
                className="flex items-center justify-center w-24 h-24 md:w-28 md:h-28 bg-primary rounded-full shadow-lg hover:shadow-xl text-white font-bold text-xl md:text-2xl transition-all duration-300"
                variants={cvButtonVariants}
                whileHover="hover"
                whileTap={{ scale: 0.95 }}
                animate={{
                  scale: [1, 1.05, 1],
                  boxShadow: [
                    "0 5px 15px rgba(16, 185, 129, 0.4)",
                    "0 8px 20px rgba(16, 185, 129, 0.6)",
                    "0 5px 15px rgba(16, 185, 129, 0.4)",
                  ],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  times: [0, 0.5, 1],
                }}
                aria-label={
                  locale === "fr"
                    ? "Télécharger le CV de Landry Tido au format PDF"
                    : "Download Landry Tido's resume as PDF"
                }
              >
                CV
              </motion.a>

              {/* Réseaux sociaux */}
              <div className="flex space-x-6 md:space-x-8">
                <motion.a
                  href="https://github.com/Landrytido"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="p-4 md:p-5 rounded-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary transition-colors shadow-lg hover:shadow-xl border border-gray-200 dark:border-gray-700"
                  variants={iconVariants}
                  custom={0}
                  whileHover="hover"
                  aria-label={
                    locale === "fr"
                      ? "Voir mon profil GitHub"
                      : "View my GitHub profile"
                  }
                >
                  <FiGithub className="w-6 h-6 md:w-7 md:h-7" />
                </motion.a>

                <motion.a
                  href="https://linkedin.com/in/landry-tido-atikeng"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="p-4 md:p-5 rounded-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary transition-colors shadow-lg hover:shadow-xl border border-gray-200 dark:border-gray-700"
                  variants={iconVariants}
                  custom={1}
                  whileHover="hover"
                  aria-label={
                    locale === "fr"
                      ? "Voir mon profil LinkedIn"
                      : "View my LinkedIn profile"
                  }
                >
                  <FiLinkedin className="w-6 h-6 md:w-7 md:h-7" />
                </motion.a>

                <motion.a
                  href="mailto:landrytido727@gmail.com"
                  className="p-4 md:p-5 rounded-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary transition-colors shadow-lg hover:shadow-xl border border-gray-200 dark:border-gray-700"
                  variants={iconVariants}
                  custom={2}
                  whileHover="hover"
                  aria-label={
                    locale === "fr" ? "M'envoyer un email" : "Send me an email"
                  }
                >
                  <FiMail className="w-6 h-6 md:w-7 md:h-7" />
                </motion.a>

                <motion.a
                  href="https://wa.me/+32465362609"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="p-4 md:p-5 rounded-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary transition-colors shadow-lg hover:shadow-xl border border-gray-200 dark:border-gray-700"
                  variants={iconVariants}
                  custom={3}
                  whileHover="hover"
                  aria-label={
                    locale === "fr"
                      ? "Me contacter sur WhatsApp"
                      : "Contact me on WhatsApp"
                  }
                >
                  <FaWhatsapp className="w-6 h-6 md:w-7 md:h-7" />
                </motion.a>
              </div>
            </div>

            {/* Call to action - Espacement généreux */}
            <motion.button
              onClick={() => {
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="flex flex-col items-center text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors group mt-8 md:mt-12"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
                times: [0, 0.5, 1],
              }}
              aria-label={
                locale === "fr"
                  ? "Aller à la section projets"
                  : "Go to projects section"
              }
            >
              <span className="text-base md:text-lg mb-3 md:mb-4">
                {locale === "fr" ? "Voir mes projets" : "View my projects"}
              </span>
              <FiArrowDown className="w-5 h-5 md:w-6 md:h-6 group-hover:text-primary" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
