import type { MetadataRoute } from "next";
import { serviceSlugs } from "@/content/vias-data";
import { listBlogPosts } from "@/lib/content";

const SITE_URL = "https://viannalegal.com.br";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE_URL, changeFrequency: "weekly", priority: 1.0 },
    { url: `${SITE_URL}/cidadania-portuguesa`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/quanto-custa`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/quem-somos`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/documentos`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/contato`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/quiz-elegibilidade`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/prazos-e-acompanhamento`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/cidadania-portuguesa/quem-mora-no-brasil`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/blog`, changeFrequency: "weekly", priority: 0.6 },
    { url: `${SITE_URL}/politica-privacidade`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/termos-uso`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/informacoes-legais`, changeFrequency: "yearly", priority: 0.3 },
  ];

  const viaRoutes: MetadataRoute.Sitemap = serviceSlugs.map((slug) => ({
    url: `${SITE_URL}/cidadania-portuguesa/${slug}`,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  const blogRoutes: MetadataRoute.Sitemap = listBlogPosts().map((post) => ({
    url: `${SITE_URL}${post.routePath}`,
    lastModified: post.dateModified ?? post.datePublished,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...viaRoutes, ...blogRoutes];
}
