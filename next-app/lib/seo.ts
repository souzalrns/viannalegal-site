import type { Metadata } from "next";

export const SITE_URL = "https://viannalegal.com.br";

interface PageMeta {
  path: string;
  title: string;
  description: string;
  ogType?: "website" | "article" | "profile";
}

/**
 * Canonical derivado SEMPRE do path da própria rota — nunca escrito à mão.
 * É isto que torna estruturalmente impossível repetir o bug actual
 * (canonical da home em todas as rotas do SPA).
 */
export function buildMetadata({ path, title, description, ogType = "website" }: PageMeta): Metadata {
  const url = `${SITE_URL}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: "ViannaLegal",
      locale: "pt_BR",
      type: ogType,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
