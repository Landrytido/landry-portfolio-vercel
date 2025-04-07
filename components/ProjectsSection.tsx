import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FiGithub, FiExternalLink, FiX } from "react-icons/fi";

interface ProjectsSectionProps {
  locale: string;
}

interface Project {
  id: string;
  titleFr: string;
  titleEn: string;
  descriptionFr: string;
  descriptionEn: string;
  technologies: string[];
  imageSrc: string;
  githubLink?: string;
  demoLink?: string;
  featuresFr?: string[];
  featuresEn?: string[];
  type: "stage" | "universite" | "personnel";
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ locale }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: "web-companion",
      titleFr: "My Web Companion",
      titleEn: "My Web Companion",
      descriptionFr:
        "Application web et mobile pour optimiser la gestion du quotidien numérique (bloc-notes, agenda, météo connectée, etc.).",
      descriptionEn:
        "Web and mobile application to optimize daily digital management (notepad, calendar, connected weather, etc.).",
      technologies: ["React", "NestJS", "GraphQL", "Prisma", "TypeScript"],
      imageSrc: "/images/project-1.jpg",
      githubLink: "https://github.com/",
      demoLink: "https://example.com/",
      featuresFr: [
        "Chronomètre interactif avec notifications",
        "Widget météo connecté à une API externe",
        "Interface fluide et responsive",
      ],
      featuresEn: [
        "Interactive timer with notifications",
        "Weather widget connected to an external API",
        "Fluid and responsive interface",
      ],
      type: "stage",
    },
    {
      id: "ecommerce",
      titleFr: "Site e-commerce de vente de t-shirts",
      titleEn: "T-shirt e-commerce website",
      descriptionFr:
        "Un site de commerce en ligne permettant la gestion de produits, commandes et paiements.",
      descriptionEn:
        "An online commerce site allowing product, order and payment management.",
      technologies: ["React", "Spring Boot", "MySQL", "JWT"],
      imageSrc: "/images/project-2.jpg",
      githubLink: "https://github.com/",
      featuresFr: [
        "Gestion des utilisateurs (inscription, connexion sécurisée)",
        "Panier dynamique et commandes",
        "Interface moderne avec animations",
      ],
      featuresEn: [
        "User management (registration, secure login)",
        "Dynamic cart and orders",
        "Modern interface with animations",
      ],
      type: "universite",
    },
    {
      id: "task-app",
      titleFr: "Application de gestion des tâches",
      titleEn: "Task management application",
      descriptionFr:
        "Une application web pour organiser les tâches quotidiennes avec un système de rappels.",
      descriptionEn:
        "A web application to organize daily tasks with a reminder system.",
      technologies: ["React", "NestJS", "GraphQL", "PostgreSQL"],
      imageSrc: "/images/project-3.jpg",
      githubLink: "https://github.com/",
      demoLink: "https://example.com/",
      type: "personnel",
    },
  ];

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  };

  const tagVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (custom: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.1 * custom,
        duration: 0.4,
      },
    }),
  };

  const getProjectTypeLabel = (type: string): string => {
    if (locale === "fr") {
      switch (type) {
        case "stage":
          return "Stage en entreprise";
        case "universite":
          return "Projet universitaire";
        case "personnel":
          return "Projet personnel";
        default:
          return "";
      }
    } else {
      switch (type) {
        case "stage":
          return "Company internship";
        case "universite":
          return "University project";
        case "personnel":
          return "Personal project";
        default:
          return "";
      }
    }
  };

  return (
    <section
      id="projects"
      className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
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
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
          >
            {locale === "fr" ? "Projets" : "Projects"}
          </motion.h2>
          <motion.div
            className="h-1 w-20 bg-primary mx-auto rounded"
            variants={{
              hidden: { opacity: 0, width: 0 },
              visible: { opacity: 1, width: 80, transition: { duration: 0.6 } },
            }}
          ></motion.div>
          <motion.p
            className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { duration: 0.5, delay: 0.2 },
              },
            }}
          >
            {locale === "fr"
              ? "Une sélection de mes projets récents réalisés en stage, à l'université et par passion personnelle."
              : "A selection of my recent projects carried out during internships, at university, and through personal passion."}
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionVariants}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg cursor-pointer"
              variants={projectVariants}
              whileHover="hover"
              onClick={() => setSelectedProject(project)}
              custom={index}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.imageSrc}
                  alt={locale === "fr" ? project.titleFr : project.titleEn}
                  fill
                  className="object-cover transition-transform duration-300 transform hover:scale-110"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-primary text-white text-xs px-3 py-1 rounded-full">
                    {getProjectTypeLabel(project.type)}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                  {locale === "fr" ? project.titleFr : project.titleEn}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                  {locale === "fr"
                    ? project.descriptionFr
                    : project.descriptionEn}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={`${project.id}-${tech}`}
                      className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs px-2 py-1 rounded"
                      variants={tagVariants}
                      custom={techIndex}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto"
              variants={modalVariants}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <div className="h-60 relative">
                  <Image
                    src={selectedProject.imageSrc}
                    alt={
                      locale === "fr"
                        ? selectedProject.titleFr
                        : selectedProject.titleEn
                    }
                    fill
                    className="object-cover"
                  />
                  <button
                    className="absolute top-4 right-4 p-2 bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-70 transition-all duration-200"
                    onClick={() => setSelectedProject(null)}
                  >
                    <FiX className="w-5 h-5" />
                  </button>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                    {locale === "fr"
                      ? selectedProject.titleFr
                      : selectedProject.titleEn}
                  </h3>

                  <div className="flex items-center mb-4">
                    <span className="bg-primary text-white text-xs px-3 py-1 rounded-full">
                      {getProjectTypeLabel(selectedProject.type)}
                    </span>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {locale === "fr"
                      ? selectedProject.descriptionFr
                      : selectedProject.descriptionEn}
                  </p>

                  {(locale === "fr"
                    ? selectedProject.featuresFr
                    : selectedProject.featuresEn) && (
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                        {locale === "fr"
                          ? "Fonctionnalités clés"
                          : "Key features"}
                      </h4>
                      <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400">
                        {(locale === "fr"
                          ? selectedProject.featuresFr
                          : selectedProject.featuresEn
                        )?.map((feature, index) => (
                          <li key={index} className="mb-1">
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                      {locale === "fr"
                        ? "Technologies utilisées"
                        : "Technologies used"}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    {selectedProject.githubLink && (
                      <a
                        href={selectedProject.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-2 bg-gray-800 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
                      >
                        <FiGithub className="mr-2" />
                        GitHub
                      </a>
                    )}

                    {selectedProject.demoLink && (
                      <a
                        href={selectedProject.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-opacity-90 transition-colors"
                      >
                        <FiExternalLink className="mr-2" />
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
