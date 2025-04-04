import React from "react";
import { motion } from "framer-motion";
import { FaJava, FaReact, FaGithub, FaDocker } from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiSpring,
  SiNestjs,
  SiGraphql,
  SiPrisma,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiPostman,
  SiJira,
} from "react-icons/si";

interface SkillsSectionProps {
  locale: string;
}

interface SkillCategory {
  id: string;
  titleFr: string;
  titleEn: string;
  skills: Skill[];
}

interface Skill {
  name: string;
  icon: React.ReactNode;
  color: string;
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ locale }) => {
  const skillCategories: SkillCategory[] = [
    {
      id: "frontend",
      titleFr: "Frontend",
      titleEn: "Frontend",
      skills: [
        { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
        { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
        { name: "React", icon: <FaReact />, color: "#61DAFB" },
        { name: "Next.js", icon: <SiNextdotjs />, color: "#000000" },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4" },
      ],
    },
    {
      id: "backend",
      titleFr: "Backend",
      titleEn: "Backend",
      skills: [
        { name: "Java", icon: <FaJava />, color: "#007396" },
        { name: "Spring Boot", icon: <SiSpring />, color: "#6DB33F" },
        { name: "NestJS", icon: <SiNestjs />, color: "#E0234E" },
        { name: "GraphQL", icon: <SiGraphql />, color: "#E10098" },
        { name: "Prisma", icon: <SiPrisma />, color: "#2D3748" },
      ],
    },
    {
      id: "database",
      titleFr: "Bases de données",
      titleEn: "Databases",
      skills: [
        { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
        { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791" },
        { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
      ],
    },
    {
      id: "tools",
      titleFr: "Outils & Technologies",
      titleEn: "Tools & Technologies",
      skills: [
        { name: "GitHub", icon: <FaGithub />, color: "#181717" },
        { name: "Docker", icon: <FaDocker />, color: "#2496ED" },
        { name: "Postman", icon: <SiPostman />, color: "#FF6C37" },
        { name: "Jira", icon: <SiJira />, color: "#0052CC" },
      ],
    },
  ];

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      id="skills"
      className="py-20 bg-white dark:bg-darkBg transition-colors duration-300"
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
            variants={categoryVariants}
          >
            {locale === "fr" ? "Compétences" : "Skills"}
          </motion.h2>
          <motion.div
            className="h-1 w-20 bg-primary mx-auto rounded"
            variants={categoryVariants}
          ></motion.div>
          <motion.p
            className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            variants={categoryVariants}
          >
            {locale === "fr"
              ? "Mon expertise technique couvre différents domaines du développement web, du frontend au backend."
              : "My technical expertise covers different areas of web development, from frontend to backend."}
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionVariants}
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.id}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-md"
              variants={categoryVariants}
            >
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                {locale === "fr" ? category.titleFr : category.titleEn}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    className="flex flex-col items-center p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                    variants={skillVariants}
                    whileHover="hover"
                  >
                    <div
                      className="text-3xl mb-2"
                      style={{ color: skill.color }}
                    >
                      {skill.icon}
                    </div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
