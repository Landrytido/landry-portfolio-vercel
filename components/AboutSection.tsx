import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface AboutSectionProps {
  locale: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ locale }) => {
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
          {/* Photo/Avatar */}
          <motion.div
            className="w-full lg:w-1/3 mb-10 lg:mb-0 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-primary">
              <Image
                src="/images/placeholder-profile.jpg"
                alt="Landry Tido"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* Bio */}
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
