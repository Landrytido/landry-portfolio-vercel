import React from "react";
import { motion } from "framer-motion";
import { FiBook } from "react-icons/fi";

interface EducationSectionProps {
  locale: string;
}

interface Education {
  id: string;
  degreeFr: string;
  degreeEn: string;
  institution: string;
  dateFr: string;
  dateEn: string;
  descriptionFr?: string;
  descriptionEn?: string;
}

const EducationSection: React.FC<EducationSectionProps> = ({ locale }) => {
  const educations: Education[] = [
    {
      id: "bachelor",
      degreeFr: "Bachelier en Informatique de gestion",
      degreeEn: "Bachelor in Business Computing",
      institution: "EAFC UCCLE",
      dateFr: "2022-2025",
      dateEn: "2022-2025",
      descriptionFr:
        "Formation complète en développement web, programmation orientée objet, bases de données et gestion de projets informatiques.",
      descriptionEn:
        "Comprehensive training in web development, object-oriented programming, databases, and IT project management.",
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

  const educationVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="education"
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
            variants={educationVariants}
          >
            {locale === "fr" ? "Formation" : "Education"}
          </motion.h2>
          <motion.div
            className="h-1 w-20 bg-primary mx-auto rounded"
            variants={educationVariants}
          ></motion.div>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionVariants}
        >
          <div className="relative pl-8 border-l-2 border-primary">
            {educations.map((education, index) => (
              <motion.div
                key={education.id}
                className="mb-8 relative"
                variants={educationVariants}
                custom={index}
              >
                {/* Timeline dot */}
                <div className="absolute -left-[25px] p-2 bg-primary rounded-full text-white">
                  <FiBook className="w-4 h-4" />
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                      {locale === "fr"
                        ? education.degreeFr
                        : education.degreeEn}
                    </h3>
                    <span className="text-primary text-sm font-medium mt-1 sm:mt-0">
                      {locale === "fr" ? education.dateFr : education.dateEn}
                    </span>
                  </div>

                  <p className="text-gray-700 dark:text-gray-300 font-medium mb-3">
                    {education.institution}
                  </p>

                  {(locale === "fr"
                    ? education.descriptionFr
                    : education.descriptionEn) && (
                    <p className="text-gray-600 dark:text-gray-400">
                      {locale === "fr"
                        ? education.descriptionFr
                        : education.descriptionEn}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
