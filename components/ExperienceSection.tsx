import React from "react";
import { motion } from "framer-motion";
import { FiBriefcase } from "react-icons/fi";

interface ExperienceSectionProps {
  locale: string;
}

interface Experience {
  id: string;
  titleFr: string;
  titleEn: string;
  company: string;
  dateFr: string;
  dateEn: string;
  descriptionFr: string[];
  descriptionEn: string[];
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ locale }) => {
  const experiences: Experience[] = [
    {
      id: "hdm",
      titleFr: "Stagiaire Développeur Full-stack",
      titleEn: "Full-stack Developer Intern",
      company: "hdm network",
      dateFr: "03-02-25 au 25-04-25",
      dateEn: "02/03/25 to 04/25/25",
      descriptionFr: [
        "Développement de nouvelles fonctionnalités sur My Web Companion",
        "Implémentation d'un chronomètre avec notifications",
        "Création d'un outil météo intégré à une API externe",
        "Correction de bugs, optimisation des performances",
        "Participation aux code reviews et mises en production",
      ],
      descriptionEn: [
        "Development of new features on My Web Companion",
        "Implementation of a timer with notifications",
        "Creation of a weather tool integrated with an external API",
        "Bug fixes, performance optimization",
        "Participation in code reviews and production deployments",
      ],
    },
  ];

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const experienceVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="experience"
      className="min-h-screen py-20 bg-gray-100 dark:bg-darkBg transition-colors duration-300 flex items-center"
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
            variants={experienceVariants}
          >
            {locale === "fr" ? "Expérience" : "Experience"}
          </motion.h2>
          <motion.div
            className="h-1 w-20 bg-primary mx-auto rounded"
            variants={experienceVariants}
          ></motion.div>
          <motion.p
            className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            variants={experienceVariants}
          >
            {locale === "fr"
              ? "Mon parcours professionnel et mes expériences en développement."
              : "My professional journey and experiences in development."}
          </motion.p>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionVariants}
        >
          <div className="relative pl-8 border-l-2 border-primary">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                className="mb-12 relative"
                variants={experienceVariants}
                custom={index}
              >
                {/* Timeline dot */}
                <div className="absolute -left-[25px] p-2 bg-primary rounded-full text-white">
                  <FiBriefcase className="w-4 h-4" />
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                      {locale === "fr"
                        ? experience.titleFr
                        : experience.titleEn}
                    </h3>
                    <span className="text-primary text-sm font-medium mt-1 sm:mt-0">
                      {locale === "fr" ? experience.dateFr : experience.dateEn}
                    </span>
                  </div>

                  <p className="text-gray-700 dark:text-gray-300 font-medium mb-4">
                    {experience.company}
                  </p>

                  <ul className="space-y-2">
                    {(locale === "fr"
                      ? experience.descriptionFr
                      : experience.descriptionEn
                    ).map((item, idx) => (
                      <motion.li
                        key={idx}
                        className="flex items-start"
                        variants={itemVariants}
                      >
                        <div className="mr-2 text-primary mt-1">•</div>
                        <p className="text-gray-600 dark:text-gray-400">
                          {item}
                        </p>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
