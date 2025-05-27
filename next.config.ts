import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configuration i18n pour le SEO multilingue
  i18n: {
    locales: ["fr", "en"],
    defaultLocale: "fr",
  },

  // Headers de sécurité et SEO
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // Security headers
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          // SEO headers
          {
            key: "X-Robots-Tag",
            value:
              "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
          },
        ],
      },
      // Headers spécifiques pour les images
      {
        source: "/images/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      // Headers pour le CV
      {
        source: "/CV.pdf",
        headers: [
          {
            key: "Content-Disposition",
            value:
              'attachment; filename="Landry-Tido-CV-Developpeur-Fullstack.pdf"',
          },
        ],
      },
    ];
  },

  // Redirections SEO
  async redirects() {
    return [
      // Redirection de l'ancienne URL vers la nouvelle (exemple)
      {
        source: "/portfolio",
        destination: "/",
        permanent: true,
      },
      // Redirection des sections vers des ancres
      {
        source: "/about",
        destination: "/#about",
        permanent: true,
      },
      {
        source: "/contact",
        destination: "/#contact",
        permanent: true,
      },
      {
        source: "/projects",
        destination: "/#projects",
        permanent: true,
      },
    ];
  },

  // Optimisation des images
  images: {
    domains: ["landry-tido.com"], // Ton domaine
    formats: ["image/webp", "image/avif"],
    minimumCacheTTL: 31536000, // 1 an
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Optimisation du build
  experimental: {
    optimizePackageImports: ["framer-motion", "react-icons"],
  },

  // Configuration pour le déploiement
  output: "standalone", // Pour Docker/Vercel

  // PWA et manifest
  async rewrites() {
    return [
      {
        source: "/sitemap.xml",
        destination: "/api/sitemap",
      },
    ];
  },

  // Variables d'environnement publiques
  env: {
    SITE_URL: process.env.SITE_URL || "https://landry-tido.com",
  },
};

export default nextConfig;
