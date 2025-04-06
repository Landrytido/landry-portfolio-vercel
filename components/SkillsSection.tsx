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
  SiPostman,
  SiJira,
  SiCanva,
  SiPython,
  SiVite,
} from "react-icons/si";

// SVG pour Apollo
const ApolloIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    fill="currentColor"
    className="w-6 h-6"
  >
    <path d="M128 0C57.31 0 0 57.31 0 128s57.31 128 128 128 128-57.31 128-128S198.69 0 128 0zm0 240c-61.76 0-112-50.24-112-112S66.24 16 128 16s112 50.24 112 112-50.24 112-112 112zm-8-176h16v96h-16zm0 112h16v16h-16z" />
  </svg>
);

// SVG pour AWS
const AwsIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    fill="currentColor"
    className="w-6 h-6"
  >
    <path d="M4.91 16.36a.5.5 0 0 0-.82.57 11.5 11.5 0 0 0 18.82 2.1.5.5 0 0 0-.74-.67 10.5 10.5 0 0 1-17.26-2zm22.18-.72a.5.5 0 0 0-.82-.57 10.5 10.5 0 0 1-17.26 2 .5.5 0 0 0-.74.67 11.5 11.5 0 0 0 18.82-2.1zM16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2zm0 26a12 12 0 1 1 12-12 12 12 0 0 1-12 12z" />
  </svg>
);

// SVG pour VS Code
const VsCodeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    fill="currentColor"
    className="w-6 h-6"
  >
    <path d="M29.49 6.37 23.5 3.1a2.5 2.5 0 0 0-2.5.09L3.6 14.2a1 1 0 0 0 0 1.6l17.4 11a2.5 2.5 0 0 0 2.5.09l6-3.27a2.5 2.5 0 0 0 1.26-2.18V8.55a2.5 2.5 0 0 0-1.27-2.18zM21.5 25.5 5.6 15.5l15.9-10zm7-2.77-5 2.73V6.54l5 2.73z" />
  </svg>
);

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
        { name: "Vite", icon: <SiVite />, color: "#646CFF" },
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
        { name: "Apollo", icon: <ApolloIcon />, color: "#311C87" },
      ],
    },
    {
      id: "database",
      titleFr: "Bases de données",
      titleEn: "Databases",
      skills: [
        { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
        { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791" },
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
        { name: "AWS", icon: <AwsIcon />, color: "#FF9900" },
        { name: "VS Code", icon: <VsCodeIcon />, color: "#007ACC" },
        { name: "Canva", icon: <SiCanva />, color: "#00C4CC" },
        { name: "Python", icon: <SiPython />, color: "#3776AB" },
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
      className="py-20 bg-gray-100 dark:bg-darkBg transition-colors duration-300"
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
