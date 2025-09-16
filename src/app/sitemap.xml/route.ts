import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = process.env.SITE_URL || "https://landry-portfolio.vercel.app";
  const currentDate = new Date().toISOString();

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
        xmlns:xhtml="http://www.w3.org/1999/xhtml">

  <!-- Page d'accueil FR -->
  <url>
    <loc>${baseUrl}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/en"/>
    <xhtml:link rel="alternate" hreflang="fr" href="${baseUrl}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}"/>
  </url>

  <!-- Page d'accueil EN -->
  <url>
    <loc>${baseUrl}/en</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
    <xhtml:link rel="alternate" hreflang="fr" href="${baseUrl}"/>
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/en"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}"/>
  </url>

  <!-- Pages de développement et services -->
  <url>
    <loc>${baseUrl}/developpeur-react-bruxelles</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

  <url>
    <loc>${baseUrl}/developpeur-spring-boot-belgique</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

  <!-- Sections avec ancres -->
  <url>
    <loc>${baseUrl}/#about</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

  <url>
    <loc>${baseUrl}/#skills</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>

  <url>
    <loc>${baseUrl}/#projects</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>

  <url>
    <loc>${baseUrl}/#experience</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>

  <url>
    <loc>${baseUrl}/#education</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>quarterly</changefreq>
    <priority>0.6</priority>
  </url>

  <url>
    <loc>${baseUrl}/#contact</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>

</urlset>`;

  return new NextResponse(sitemap, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=86400, stale-while-revalidate", // 24h cache
    },
  });
}
