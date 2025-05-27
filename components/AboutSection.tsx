import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface AboutSectionProps {
  locale: string;
  // Nouvelle prop pour définir l'intervalle de changement d'image (en millisecondes)
  imageSwapInterval?: number;
}

const AboutSection: React.FC<AboutSectionProps> = ({
  locale,
  // Valeur par défaut de 5000ms (5 secondes)
  imageSwapInterval = 5000,
}) => {
  // État pour suivre quelle image afficher (0 ou 1)
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Tableau des images à alterner
  const profileImages = [
    "/images/placeholder-profile.jpg",
    "/images/placeholder-profile-2.jpg",
  ];

  // Effet pour changer l'image à intervalle régulier
  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveImageIndex((current) => (current === 0 ? 1 : 0));
    }, imageSwapInterval);

    // Nettoyage de l'intervalle lors du démontage du composant
    return () => clearInterval(intervalId);
  }, [imageSwapInterval]);

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="about"
      className="min-h-screen py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300 flex items-center"
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <motion.h2
            className="text-3xl font-bold text-gray-800 dark:text-white mb-2"
            variants={itemVariants}
          >
            {locale === "fr" ? "À Propos" : "About Me"}
          </motion.h2>
          <motion.div
            className="h-1 w-20 bg-primary mx-auto rounded"
            variants={itemVariants}
          ></motion.div>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center justify-between">
          <motion.div
            className="w-full lg:w-1/3 mb-10 lg:mb-0 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-primary">
              {/* Utilisation d'AnimatePresence pour les transitions entre images */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeImageIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={profileImages[activeImageIndex]}
                    alt={
                      activeImageIndex === 0
                        ? "Landry Tido, développeur full-stack spécialisé en React et Spring Boot, portrait professionnel"
                        : "Landry Tido au travail, développeur passionné par les technologies web modernes"
                    }
                    fill
                    className="object-cover"
                    priority={activeImageIndex === 0}
                    sizes="(max-width: 768px) 256px, 256px"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          <motion.div
            className="w-full lg:w-2/3 lg:pl-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
          >
            <motion.h3
              className="text-2xl font-semibold text-gray-800 dark:text-white mb-4"
              variants={itemVariants}
            >
              {locale === "fr"
                ? "Passionné par le développement web et l'innovation"
                : "Passionate about web development and innovation"}
            </motion.h3>

            <motion.p
              className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed"
              variants={itemVariants}
            >
              {locale === "fr"
                ? "Passionné par le développement web et l'innovation technologique, je conçois des applications performantes et ergonomiques en utilisant les dernières technologies. Avec une expertise en React, Spring Boot, TypeScript et GraphQL, je crée des solutions robustes et scalables."
                : "Passionate about web development and technological innovation, I design high-performance and ergonomic applications using the latest technologies. With expertise in React, Spring Boot, TypeScript, and GraphQL, I create robust and scalable solutions."}
            </motion.p>

            <motion.p
              className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed"
              variants={itemVariants}
            >
              {locale === "fr"
                ? "Actuellement, je travaille en entreprise sur des outils numériques avancés, tout en poursuivant mon bachelier en informatique de gestion."
                : "Currently, I work in a company on advanced digital tools, while pursuing my bachelor's degree in business computing."}
            </motion.p>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
              variants={itemVariants}
            >
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                <span className="text-gray-700 dark:text-gray-300">
                  {locale === "fr"
                    ? "Basé à Bruxelles, Belgique"
                    : "Based in Brussels, Belgium"}
                </span>
              </div>

              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                <span className="text-gray-700 dark:text-gray-300">
                  {locale === "fr"
                    ? "Disponible pour des projets freelance"
                    : "Available for freelance projects"}
                </span>
              </div>

              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                <span className="text-gray-700 dark:text-gray-300">
                  {locale === "fr"
                    ? "Amateur de nouvelles technologies"
                    : "Technology enthusiast"}
                </span>
              </div>

              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                <span className="text-gray-700 dark:text-gray-300">
                  {locale === "fr"
                    ? "Apprentissage continu"
                    : "Continuous learning"}
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
