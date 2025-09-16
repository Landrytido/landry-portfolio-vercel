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
          ? "Landry Tido - Développeur Full-stack Expert"
          : "Landry Tido - Expert Full-stack Developer"}
      </h2>

      <p>
        {locale === "fr"
          ? "Landry Tido est un développeur full-stack expert basé à Bruxelles, spécialisé dans la création d'applications web modernes et performantes. Avec une expertise approfondie en React, Spring Boot, TypeScript et GraphQL, Landry Tido développe des solutions digitales innovantes pour les entreprises et particuliers."
          : "Landry Tido is an expert full-stack developer based in Brussels, specializing in creating modern and performant web applications. With deep expertise in React, Spring Boot, TypeScript and GraphQL, Landry Tido develops innovative digital solutions for businesses and individuals."}
      </p>

      <h3>
        {locale === "fr"
          ? "Services de Développement Web par Landry Tido"
          : "Web Development Services by Landry Tido"}
      </h3>

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
            ? "Architecture de bases de données MySQL et PostgreSQL"
            : "MySQL and PostgreSQL database architecture"}
        </li>
        <li>
          {locale === "fr"
            ? "Développement full-stack avec Next.js et Prisma"
            : "Full-stack development with Next.js and Prisma"}
        </li>
        <li>
          {locale === "fr"
            ? "Optimisation des performances et SEO technique"
            : "Performance optimization and technical SEO"}
        </li>
      </ul>

      <h3>
        {locale === "fr"
          ? "Pourquoi choisir Landry Tido comme développeur ?"
          : "Why choose Landry Tido as developer?"}
      </h3>

      <p>
        {locale === "fr"
          ? "Landry Tido combine passion technologique et excellence technique pour livrer des projets de qualité. Son expertise en développement full-stack, acquise en entreprise et perfectionnée par une formation continue, garantit des solutions robustes et scalables. Basé à Bruxelles, Landry Tido est disponible pour accompagner vos projets web, que ce soit en freelance ou en collaboration d'équipe."
          : "Landry Tido combines technological passion and technical excellence to deliver quality projects. His full-stack development expertise, gained in business and perfected through continuous training, guarantees robust and scalable solutions. Based in Brussels, Landry Tido is available to support your web projects, whether freelance or team collaboration."}
      </p>

      <h3>
        {locale === "fr"
          ? "Contact Landry Tido - Développeur Bruxelles"
          : "Contact Landry Tido - Brussels Developer"}
      </h3>

      <p>
        {locale === "fr"
          ? "Pour discuter de votre projet web avec Landry Tido, développeur full-stack basé à Bruxelles, contactez-le directement via son portfolio. Landry Tido est spécialisé dans les technologies React, Spring Boot, TypeScript et GraphQL pour créer des applications web performantes et modernes."
          : "To discuss your web project with Landry Tido, full-stack developer based in Brussels, contact him directly via his portfolio. Landry Tido specializes in React, Spring Boot, TypeScript and GraphQL technologies to create performant and modern web applications."}
      </p>
    </div>
  );
};

export default SEOContent;
