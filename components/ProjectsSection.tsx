import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FiGithub, FiExternalLink, FiX, FiLock } from "react-icons/fi";

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
  githubLinkBack?: string;
  privateRepo?: boolean;
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

  // 🚀 NOUVELLE FONCTION SEO - Génère des alt texts optimisés
  const getProjectAltText = (project: Project, locale: string): string => {
    const baseText = locale === "fr" ? project.titleFr : project.titleEn;
    const techStack = project.technologies.slice(0, 3).join(", ");

    const typeText =
      locale === "fr"
        ? project.type === "stage"
          ? "projet de stage"
          : project.type === "universite"
            ? "projet universitaire"
            : "projet personnel"
        : project.type === "stage"
          ? "internship project"
          : project.type === "universite"
            ? "university project"
            : "personal project";

    return locale === "fr"
      ? `${baseText} - ${typeText} développé avec ${techStack}`
      : `${baseText} - ${typeText} developed with ${techStack}`;
  };

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
      privateRepo: true,
      demoLink: "https://www.mywebcompanion.com/",
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
      id: "ocontineng-restaurant",
      titleFr: "Site Web Restaurant O'CONTINENG",
      titleEn: "O'CONTINENG Restaurant Website",
      descriptionFr:
        "Site web moderne et responsive pour un restaurant de cuisine africaine et européenne avec système de réservation intégré.",
      descriptionEn:
        "Modern and responsive website for an African and European cuisine restaurant with integrated reservation system.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      imageSrc: "/images/OContineng.png",
      githubLink: "https://github.com/Landrytido/O-CONTINENT",
      demoLink: "https://o-continent.vercel.app/",
      featuresFr: [
        "Interface multilingue (FR/EN) dynamique",
        "Système de réservation avec WhatsApp",
        "Menu interactif avec visualisation PDF",
        "Galerie photos et Google Maps intégrés",
      ],
      featuresEn: [
        "Dynamic multilingual interface (FR/EN)",
        "Reservation system with WhatsApp",
        "Interactive menu with PDF visualization",
        "Photo gallery and Google Maps integration",
      ],
      type: "personnel",
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
      githubLink: "https://github.com/Landrytido/TshirtFrontend",
      githubLinkBack: "https://github.com/Landrytido/TshirtBack",
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
      githubLink: "https://github.com/Landrytido/Tennis",
      featuresFr: [
        "Réservation avec créneaux horaires",
        "Interface calendrier",
      ],
      featuresEn: ["Reservation with time slots", "Calendar interface"],
      type: "personnel",
    },
    {
      id: "aegc-web-platform",
      titleFr: "Plateforme Web AEGC",
      titleEn: "AEGC Web Platform",
      descriptionFr:
        "Plateforme complète pour l'Association des Économistes et Gestionnaires du Cameroun avec gestion des membres, cotisations, working papers, activités et dashboard administrateur.",
      descriptionEn:
        "Full-stack platform for the Association of Economists and Managers of Cameroon with membership management, annual subscriptions, working papers, activities, and an advanced admin dashboard.",
      technologies: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "JWT",
        "Vite",
        "CSS",
      ],
      imageSrc: "/images/AEGChome.png",
      privateRepo: true,
      demoLink: "https://aegc-web.com/home",
      featuresFr: [
        "Authentification complète : inscription, connexion, réinitialisation de mot de passe",
        "Gestion des cotisations avec workflow de validation admin",
        "Soumission et révision de working papers avec système multi-rôles",
        "Réservation d'activités et de formations en ligne",
        "Dashboard admin : membres, cotisations, annonces, médias, FAQ, comité scientifique",
        "Profil utilisateur avec édition et statut de cotisation en temps réel",
        "Annonces planifiées avec épinglage",
        "Paiement par virement bancaire, Orange Money ou MTN MoMo",
      ],
      featuresEn: [
        "Full authentication flow: register, login, password reset",
        "Annual membership management with admin validation workflow",
        "Working papers submission and review with a multi-role system",
        "Online activity and training session booking",
        "Admin dashboard: members, subscriptions, announcements, media, FAQ, scientific committee",
        "User profile with edit mode and real-time membership status",
        "Scheduled announcements with pinning",
        "Payment via bank transfer, Orange Money, or MTN MoMo",
      ],
      type: "personnel",
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
      privateRepo: true,
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
              className="bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg cursor-pointer"
              variants={projectVariants}
              whileHover="hover"
              onClick={() => setSelectedProject(project)}
              custom={index}
            >
              <div className="relative h-36 sm:h-48 overflow-hidden">
                {/* ✅ IMAGE OPTIMISÉE SEO - Grille des projets */}
                <Image
                  src={project.imageSrc}
                  alt={getProjectAltText(project, locale)}
                  fill
                  className="object-cover transition-transform duration-300 transform hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
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
                  {/* ✅ IMAGE OPTIMISÉE SEO - Modal */}
                  <Image
                    src={selectedProject.imageSrc}
                    alt={getProjectAltText(selectedProject, locale)}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 768px"
                    priority={true}
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

                  <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-6">
                    {selectedProject.privateRepo && !selectedProject.githubLink && (
                      <span className="flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-300 rounded-lg text-xs sm:text-sm cursor-default">
                        <FiLock className="mr-1 sm:mr-2 w-3 h-3 sm:w-4 sm:h-4" />
                        {locale === "fr" ? "Repo privé" : "Private repo"}
                      </span>
                    )}

                    {selectedProject.githubLink && (
                      <a
                        href={selectedProject.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-gray-800 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors text-xs sm:text-sm"
                      >
                        <FiGithub className="mr-1 sm:mr-2 w-3 h-3 sm:w-4 sm:h-4" />
                        {selectedProject.githubLinkBack ? "Frontend" : "GitHub"}
                      </a>
                    )}

                    {selectedProject.githubLinkBack && (
                      <a
                        href={selectedProject.githubLinkBack}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-gray-800 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors text-xs sm:text-sm"
                      >
                        <FiGithub className="mr-1 sm:mr-2 w-3 h-3 sm:w-4 sm:h-4" />
                        Backend
                      </a>
                    )}

                    {selectedProject.demoLink && (
                      <a
                        href={selectedProject.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-primary text-white rounded-lg hover:bg-opacity-90 transition-colors text-xs sm:text-sm"
                      >
                        <FiExternalLink className="mr-1 sm:mr-2 w-3 h-3 sm:w-4 sm:h-4" />
                        Demo
                      </a>
                    )}
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
