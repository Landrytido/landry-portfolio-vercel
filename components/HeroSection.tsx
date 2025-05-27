import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

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
      className="min-h-screen flex flex-col items-center justify-center relative bg-lightBg dark:bg-darkBg transition-colors duration-300 overflow-hidden"
      initial="hidden"
      animate="visible"
    >
      {/* Background code et gradients */}
      <div className="absolute inset-0 z-0">
        {/* ... garde le background existant ... */}
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col items-center text-center">
          {/* Amélioration SEO : H1 plus descriptif */}
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6 flex items-center justify-center"
            variants={titleVariants}
          >
            {/* Structure H1 optimisée pour SEO */}
            <span className="sr-only">
              {locale === "fr"
                ? "Landry Tido, Développeur Full-stack spécialisé en React et Spring Boot"
                : "Landry Tido, Full-stack Developer specialized in React and Spring Boot"}
            </span>

            {/* Partie visuelle du titre */}
            <span aria-hidden="true" className="flex items-center">
              {locale === "fr" ? "S" : "H"}
              <motion.div
                className="inline-flex w-16 h-16 md:w-20 md:h-20 bg-secondary rounded-full justify-center items-center mx-2 md:mx-3 shadow-lg"
                animate={emojiControls}
              >
                <span
                  role="img"
                  aria-label={
                    locale === "fr" ? "emoji intelligent" : "smart emoji"
                  }
                  className="text-2xl md:text-3xl"
                >
                  🤓
                </span>
              </motion.div>
              <span className="bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text">
                {locale === "fr" ? "alut!" : "ello!"}
              </span>
            </span>
          </motion.h1>

          <motion.h2
            className="text-2xl md:text-4xl font-semibold text-primary dark:text-primary mb-4"
            variants={subtitleVariants}
          >
            {locale === "fr"
              ? "Développeur Full-stack"
              : "Full-stack Developer"}
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl"
            variants={textVariants}
          >
            {locale === "fr"
              ? "Développeur passionné spécialisé en React, Spring Boot, TypeScript et GraphQL. Basé à Bruxelles, disponible pour vos projets."
              : "Passionate developer specialized in React, Spring Boot, TypeScript and GraphQL. Based in Brussels, available for your projects."}
            <br />
            <span className="text-secondary font-medium mt-2 inline-block">
              React • Spring Boot • TypeScript • GraphQL
            </span>
          </motion.p>

          {/* Ajouter schema.org pour l'action de téléchargement */}
          <motion.div
            className="flex flex-col items-center space-y-8"
            variants={buttonsVariants}
          >
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              <motion.a
                href="/CV.pdf"
                download="Landry-Tido-CV-Developpeur-Fullstack.pdf"
                className="flex items-center justify-center w-20 h-20 bg-primary rounded-full shadow-md hover:shadow-lg text-white font-bold text-xl"
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

              {/* Amélioration des liens sociaux avec rel appropriés */}
              <div className="flex space-x-5">
                <motion.a
                  href="https://github.com/Landrytido"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors shadow-md"
                  variants={iconVariants}
                  custom={0}
                  whileHover="hover"
                  aria-label={
                    locale === "fr"
                      ? "Voir mon profil GitHub"
                      : "View my GitHub profile"
                  }
                >
                  <FiGithub className="w-6 h-6" />
                </motion.a>

                <motion.a
                  href="https://linkedin.com/in/landry-tido-atikeng"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors shadow-md"
                  variants={iconVariants}
                  custom={1}
                  whileHover="hover"
                  aria-label={
                    locale === "fr"
                      ? "Voir mon profil LinkedIn"
                      : "View my LinkedIn profile"
                  }
                >
                  <FiLinkedin className="w-6 h-6" />
                </motion.a>

                <motion.a
                  href="mailto:landrytido727@gmail.com"
                  className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors shadow-md"
                  variants={iconVariants}
                  custom={2}
                  whileHover="hover"
                  aria-label={
                    locale === "fr" ? "M'envoyer un email" : "Send me an email"
                  }
                >
                  <FiMail className="w-6 h-6" />
                </motion.a>

                <motion.a
                  href="https://wa.me/+32465362609"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors shadow-md"
                  variants={iconVariants}
                  custom={3}
                  whileHover="hover"
                  aria-label={
                    locale === "fr"
                      ? "Me contacter sur WhatsApp"
                      : "Contact me on WhatsApp"
                  }
                >
                  <FaWhatsapp className="w-6 h-6" />
                </motion.a>
              </div>
            </div>

            <motion.button
              onClick={() => {
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="flex flex-col items-center text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors group mt-4"
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
              <span className="text-base mb-2">
                {locale === "fr" ? "Voir mes projets" : "View my projects"}
              </span>
              <FiArrowDown className="w-5 h-5 group-hover:text-primary" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
