import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

interface HeroSectionProps {
  locale: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ locale }) => {
  const emojiControls = useAnimation();

  // Animate emoji every 3 seconds
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
      {/* Background effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-radial from-primary/20 to-transparent opacity-30 dark:opacity-20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(255,255,255,0.03)_0%,rgba(255,255,255,0.03)_0.5%),radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.03)_0%,rgba(255,255,255,0.03)_0.5%),radial-gradient(circle_at_50%_80%,rgba(255,255,255,0.03)_0%,rgba(255,255,255,0.03)_0.5%),radial-gradient(circle_at_70%_10%,rgba(255,255,255,0.03)_0%,rgba(255,255,255,0.03)_0.5%),radial-gradient(circle_at_90%_90%,rgba(255,255,255,0.03)_0%,rgba(255,255,255,0.03)_0.5%)] dark:bg-opacity-100 bg-opacity-0"></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col items-center text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6 flex items-center justify-center"
            variants={titleVariants}
          >
            {locale === "fr" ? "S" : "H"}
            <motion.div
              className="inline-flex w-16 h-16 md:w-20 md:h-20 bg-secondary rounded-full justify-center items-center mx-2 md:mx-3 shadow-lg"
              animate={emojiControls}
            >
              <span
                role="img"
                aria-label="smart emoji"
                className="text-2xl md:text-3xl"
              >
                🤓
              </span>
            </motion.div>
            <span className="bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text">
              {locale === "fr" ? "alut!" : "ello!"}
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
              ? "Passionné par le développement web et l'innovation technologique."
              : "Passionate about web development and technological innovation."}
            <br />
            <span className="text-secondary font-medium mt-2 inline-block">
              {locale === "fr"
                ? "React | Spring Boot | TypeScript | GraphQL"
                : "React | Spring Boot | TypeScript | GraphQL"}
            </span>
          </motion.p>

          <motion.div
            className="flex flex-col items-center space-y-8"
            variants={buttonsVariants}
          >
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              {/* CV Download Button */}
              <motion.a
                href="/CV.pdf"
                download
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
              >
                CV
              </motion.a>

              {/* Social Links */}
              <div className="flex space-x-5">
                <motion.a
                  href="https://github.com/Landrytido"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors shadow-md"
                  variants={iconVariants}
                  custom={0}
                  whileHover="hover"
                  aria-label="GitHub"
                >
                  <FiGithub className="w-6 h-6" />
                </motion.a>

                <motion.a
                  href="https://linkedin.com/in/landry-tido-atikeng"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors shadow-md"
                  variants={iconVariants}
                  custom={1}
                  whileHover="hover"
                  aria-label="LinkedIn"
                >
                  <FiLinkedin className="w-6 h-6" />
                </motion.a>

                <motion.a
                  href="mailto:landrytido727@gmail.com"
                  className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors shadow-md"
                  variants={iconVariants}
                  custom={2}
                  whileHover="hover"
                  aria-label="Email"
                >
                  <FiMail className="w-6 h-6" />
                </motion.a>

                <motion.a
                  href="https://wa.me/+32465362609"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors shadow-md"
                  variants={iconVariants}
                  custom={3}
                  whileHover="hover"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp className="w-6 h-6" />
                </motion.a>
              </div>
            </div>

            {/* Scroll Down Button */}
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
