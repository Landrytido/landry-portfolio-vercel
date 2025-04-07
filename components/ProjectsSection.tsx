import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FiGithub, FiExternalLink, FiX } from "react-icons/fi";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  const [activeTab, setActiveTab] = useState<"features" | "tech">("features");
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // Effet pour détecter la taille d'écran
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    // Vérification initiale
    checkMobile();

    // Écouter les changements de taille
    window.addEventListener("resize", checkMobile);

    // Nettoyage
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // // Configuration de toast à l'initialisation
  // useEffect(() => {
  //   toast.configure();
  // }, []);

  const projects: Project[] = [
    {
      id: "web-companion",
      titleFr: "My Web Companion",
      titleEn: "My Web Companion",
      descriptionFr:
        "Application web et mobile pour optimiser la gestion du quotidien numérique (bloc-notes, agenda, météo connectée, etc.).",
      descriptionEn:
        "Web and mobile application to optimize daily digital management (notepad, calendar, connected weather, etc.).",
      technologies: ["React", "NestJS", "GraphQL", "Prisma"],
      imageSrc: "/images/MyWeb.png",
      githubLink: "https://github.com/",
      demoLink: "https://example.com/",
      featuresFr: [
        "Chronomètre interactif avec notifications",
        "Widget météo connecté à une API externe",
        "Bloc-notes, agenda, gestion de sites web",
      ],
      featuresEn: [
        "Interactive timer with notifications",
        "Weather widget connected to an external API",
        "Notepad, calendar, website management",
      ],
      type: "stage",
    },
    {
      id: "ecommerce",
      titleFr: "Application Web de Vente de T-shirts",
      titleEn: "T-shirt E-commerce Website",
      descriptionFr:
        "Un site de commerce en ligne permettant la gestion de produits, commandes et paiements.",
      descriptionEn:
        "An online commerce site allowing product, order, and payment management.",
      technologies: ["React", "Spring Boot", "MySQL", "JWT"],
      imageSrc: "/images/Tshirt.png",
      githubLink: "https://github.com/",
      demoLink: "https://example.com/",
      featuresFr: ["Catalogue produit, panier, commandes", "Paiement sécurisé"],
      featuresEn: ["Product catalog, cart, orders", "Secure payment"],
      type: "universite",
    },
    {
      id: "tennis-reservation",
      titleFr: "Application de Réservation de Terrains de Tennis",
      titleEn: "Tennis Court Reservation App",
      descriptionFr:
        "Plateforme de réservation en ligne avec gestion des créneaux horaires.",
      descriptionEn: "Online reservation platform with time slot management.",
      technologies: ["HTML", "CSS", "Bootstrap", "Spring Boot"],
      imageSrc: "/images/Tennis.png",
      githubLink: "https://github.com/",
      demoLink: "https://example.com/",
      featuresFr: [
        "Réservation avec créneaux horaires",
        "Interface calendrier",
      ],
      featuresEn: ["Reservation with time slots", "Calendar interface"],
      type: "personnel",
    },
    {
      id: "hotel-website",
      titleFr: "Site Internet pour l'Hôtel Le Printemps",
      titleEn: "Hotel Le Printemps Website",
      descriptionFr:
        "Site vitrine présentant les chambres et services de l'hôtel.",
      descriptionEn:
        "Showcase website presenting the hotel's rooms and services.",
      technologies: ["HTML", "CSS", "JavaScript"],
      imageSrc: "/images/hotel.png",
      githubLink: "https://github.com/",
      demoLink: "https://example.com/",
      featuresFr: [
        "Présentation des chambres et services",
        "Formulaire de contact",
      ],
      featuresEn: ["Presentation of rooms and services", "Contact form"],
      type: "personnel",
    },
    {
      id: "aws-deployment",
      titleFr: "Déploiement d'Applications sur AWS",
      titleEn: "Application Deployment on AWS",
      descriptionFr:
        "Projet de mise en production cloud avec hébergement scalable.",
      descriptionEn:
        "Cloud production deployment project with scalable hosting.",
      technologies: ["Amazon EC2", "Amazon RDS"],
      imageSrc: "/images/AWS.png",
      githubLink: "https://github.com/",
      demoLink: "https://example.com/",
      featuresFr: [
        "Hébergement scalable",
        "Connexion base de données en cloud",
      ],
      featuresEn: ["Scalable hosting", "Cloud database connection"],
      type: "universite",
    },
    {
      id: "time-tracking",
      titleFr: "Application Web d'Enregistrement de Feuilles de Temps",
      titleEn: "Time Tracking Web Application",
      descriptionFr:
        "Application pour le suivi du temps de travail des employés.",
      descriptionEn: "Application for tracking employee work hours.",
      technologies: ["Spring Boot", "Java", "Thymeleaf", "React"],
      imageSrc: "/images/TempsEmployes.png",
      githubLink: "https://github.com/",
      demoLink: "https://example.com/",
      featuresFr: [
        "Saisie et suivi du temps des employés",
        "Interface utilisateur interactive",
      ],
      featuresEn: ["Employee time tracking", "Interactive user interface"],
      type: "universite",
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

  const githubMessage =
    locale === "fr"
      ? "Lien GitHub indisponible pour le moment."
      : "GitHub link unavailable at the moment.";

  const demoMessage =
    locale === "fr"
      ? "Lien Demo indisponible pour le moment."
      : "Demo link unavailable at the moment.";

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
      className="py-12 sm:py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-10 sm:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <motion.h2
            className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-2"
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
          >
            {locale === "fr" ? "Projets" : "Projects"}
          </motion.h2>
          <motion.div
            className="h-1 w-16 sm:w-20 bg-primary mx-auto rounded"
            variants={{
              hidden: { opacity: 0, width: 0 },
              visible: { opacity: 1, width: 80, transition: { duration: 0.6 } },
            }}
          ></motion.div>
          <motion.p
            className="mt-4 text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionVariants}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-gray-200 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg cursor-pointer"
              variants={projectVariants}
              whileHover="hover"
              onClick={() => setSelectedProject(project)}
              custom={index}
            >
              <div className="relative h-36 sm:h-48 overflow-hidden">
                <Image
                  src={project.imageSrc}
                  alt={locale === "fr" ? project.titleFr : project.titleEn}
                  fill
                  className="object-cover transition-transform duration-300 transform hover:scale-110"
                />
                <div className="absolute top-2 left-2 sm:top-3 sm:left-3">
                  <span className="bg-primary text-white text-xs px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-xs">
                    {getProjectTypeLabel(project.type)}
                  </span>
                </div>
              </div>

              <div className="p-3 sm:p-6">
                <h3 className="text-base sm:text-xl font-semibold text-gray-800 dark:text-white mb-1 sm:mb-3">
                  {locale === "fr" ? project.titleFr : project.titleEn}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm mb-2 sm:mb-4 line-clamp-2 sm:line-clamp-3">
                  {locale === "fr"
                    ? project.descriptionFr
                    : project.descriptionEn}
                </p>
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {project.technologies
                    .slice(0, isMobile ? 3 : project.technologies.length)
                    .map((tech, techIndex) => (
                      <motion.span
                        key={`${project.id}-${tech}`}
                        className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-[10px] sm:text-xs px-1.5 py-0.5 sm:px-2 sm:py-1 rounded"
                        variants={tagVariants}
                        custom={techIndex}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  {isMobile && project.technologies.length > 3 && (
                    <span className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 self-center">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black bg-opacity-70"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            onClick={() => setSelectedProject(null)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto"
              variants={modalVariants}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <div className="h-40 sm:h-60 relative">
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
                    className="absolute top-2 right-2 sm:top-4 sm:right-4 p-1.5 sm:p-2 bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-70 transition-all duration-200"
                    onClick={() => setSelectedProject(null)}
                    aria-label={locale === "fr" ? "Fermer" : "Close"}
                  >
                    <FiX className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </div>

                <div className="p-4 sm:p-6">
                  <h3
                    id="modal-title"
                    className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white mb-2"
                  >
                    {locale === "fr"
                      ? selectedProject.titleFr
                      : selectedProject.titleEn}
                  </h3>
                  <div className="flex items-center mb-3 sm:mb-4">
                    <span className="bg-primary text-white text-xs px-2 py-0.5 sm:px-3 sm:py-1 rounded-full">
                      {getProjectTypeLabel(selectedProject.type)}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 sm:mb-6">
                    {locale === "fr"
                      ? selectedProject.descriptionFr
                      : selectedProject.descriptionEn}
                  </p>

                  {/* Interface d'onglets pour mobile */}
                  {isMobile ? (
                    <div className="mb-4">
                      <div className="flex border-b border-gray-200 dark:border-gray-700 mb-4">
                        <button
                          className={`py-1.5 px-3 text-sm ${
                            activeTab === "features"
                              ? "border-b-2 border-primary font-medium"
                              : "text-gray-500"
                          }`}
                          onClick={() => setActiveTab("features")}
                        >
                          {locale === "fr" ? "Fonctionnalités" : "Features"}
                        </button>
                        <button
                          className={`py-1.5 px-3 text-sm ${
                            activeTab === "tech"
                              ? "border-b-2 border-primary font-medium"
                              : "text-gray-500"
                          }`}
                          onClick={() => setActiveTab("tech")}
                        >
                          {locale === "fr" ? "Technologies" : "Tech"}
                        </button>
                      </div>

                      {activeTab === "features" &&
                        (locale === "fr"
                          ? selectedProject.featuresFr
                          : selectedProject.featuresEn) && (
                          <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-400">
                            {(locale === "fr"
                              ? selectedProject.featuresFr
                              : selectedProject.featuresEn
                            )?.map((feature, index) => (
                              <li key={index} className="mb-1">
                                {feature}
                              </li>
                            ))}
                          </ul>
                        )}

                      {activeTab === "tech" && (
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.technologies.map((tech, index) => (
                            <span
                              key={index}
                              className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full text-xs"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    // Version desktop originale
                    <>
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
                    </>
                  )}

                  <div className="flex space-x-3 sm:space-x-4">
                    {selectedProject.githubLink && (
                      <button
                        onClick={() => toast.info(githubMessage)}
                        className="flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-gray-800 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors text-xs sm:text-sm"
                      >
                        <FiGithub className="mr-1 sm:mr-2 w-3 h-3 sm:w-4 sm:h-4" />
                        GitHub
                      </button>
                    )}

                    {selectedProject.demoLink && (
                      <button
                        onClick={() => toast.info(demoMessage)}
                        className="flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-primary text-white rounded-lg hover:bg-opacity-90 transition-colors text-xs sm:text-sm"
                      >
                        <FiExternalLink className="mr-1 sm:mr-2 w-3 h-3 sm:w-4 sm:h-4" />
                        Demo
                      </button>
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
