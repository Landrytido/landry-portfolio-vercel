import React from "react";

interface SEOContentProps {
  locale: string;
}

const SEOContent: React.FC<SEOContentProps> = ({ locale }) => {
  return (
    <div className="sr-only">
      {/* Contenu invisible pour les moteurs de recherche */}
      <h2>
        {locale === "fr"
          ? "Landry Tido - Développeur Full-stack et Analyste Fonctionnel"
          : "Landry Tido - Full-stack Developer and Functional Analyst"}
      </h2>

      <p>
        {locale === "fr"
          ? "Landry Tido est un informaticien de gestion basé à Bruxelles, orienté développement full-stack et analyse fonctionnelle, avec React, Spring Boot, TypeScript et GraphQL. Il cherche un premier poste dans ces domaines."
          : "Landry Tido is a business IT graduate based in Brussels, focused on full-stack development and functional analysis, working with React, Spring Boot, TypeScript and GraphQL. He is looking for a first role in these fields."}
      </p>

      <h3>{locale === "fr" ? "Compétences techniques" : "Technical skills"}</h3>

      <ul>
        <li>
          {locale === "fr"
            ? "Développement d'applications React avec TypeScript"
            : "React application development with TypeScript"}
        </li>
        <li>
          {locale === "fr"
            ? "Création d'APIs REST et GraphQL avec Spring Boot"
            : "REST and GraphQL API creation with Spring Boot"}
        </li>
        <li>
          {locale === "fr"
            ? "Conception de bases de données MySQL et PostgreSQL"
            : "MySQL and PostgreSQL database design"}
        </li>
        <li>
          {locale === "fr"
            ? "Développement full-stack avec Next.js et Prisma"
            : "Full-stack development with Next.js and Prisma"}
        </li>
        <li>
          {locale === "fr"
            ? "Analyse fonctionnelle et modélisation UML et Merise"
            : "Functional analysis and UML and Merise modeling"}
        </li>
      </ul>
    </div>
  );
};

export default SEOContent;
