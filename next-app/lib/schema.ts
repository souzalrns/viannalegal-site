import { SITE_URL } from "./seo";
import type { FaqItem } from "./content";

/** Organization + WebSite — só na home. */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LegalService",
        "@id": `${SITE_URL}/#organization`,
        name: "ViannaLegal",
        alternateName: "Kathia Vianna — Cidadania Portuguesa",
        url: SITE_URL,
        logo: `${SITE_URL}/og-image.jpg`,
        image: `${SITE_URL}/og-image.jpg`,
        description:
          "Assessoria jurídica especializada em cidadania portuguesa para brasileiros, conduzida pela advogada Kathia Vianna (OA n.º 56666p), com actuação presencial em Portugal.",
        telephone: "+351-913-134-260",
        email: "contato@viannalegal.com.br",
        priceRange: "$$",
        areaServed: [
          { "@type": "Country", name: "Brazil" },
          { "@type": "Country", name: "Portugal" },
        ],
        availableLanguage: "Portuguese",
        knowsAbout: [
          "Cidadania Portuguesa",
          "Nacionalidade Portuguesa",
          "Lei Orgânica 1/2026",
          "Dupla Cidadania Brasil Portugal",
          "Passaporte Europeu",
        ],
        founder: { "@id": `${SITE_URL}/#kathia` },
        sameAs: [
          "https://wa.me/351913134260",
          "https://instagram.com/kathiavianna.adv",
          "https://facebook.com/kathiavianna.advogada",
          "https://pt.linkedin.com/in/kathiavianna",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "ViannaLegal",
        publisher: { "@id": `${SITE_URL}/#organization` },
        inLanguage: "pt-BR",
      },
    ],
  };
}

/** Person — Kathia Vianna. Apenas dados públicos já presentes no site actual. */
export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/#kathia`,
    name: "Kathia Vianna",
    jobTitle: "Advogada",
    worksFor: { "@type": "Organization", name: "ViannaLegal" },
    memberOf: { "@type": "Organization", name: "Ordem dos Advogados de Portugal" },
    identifier: "OA n.º 56666p",
    alumniOf: [
      { "@type": "CollegeOrUniversity", name: "Universidade de Lisboa" },
      { "@type": "CollegeOrUniversity", name: "Universidade Portucalense" },
    ],
    knowsAbout: ["Direito da Nacionalidade Portuguesa", "Cidadania Portuguesa", "Registos e Notariado"],
    url: `${SITE_URL}/quem-somos`,
    telephone: "+351-913-134-260",
    email: "contato@viannalegal.com.br",
    sameAs: [
      "https://wa.me/351913134260",
      "https://instagram.com/kathiavianna.adv",
      "https://facebook.com/kathiavianna.advogada",
      "https://pt.linkedin.com/in/kathiavianna",
    ],
  };
}

/** Service — hub de cidadania e futuras sub-vias. */
export function serviceSchema(opts: { name: string; description: string; path: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: opts.name,
    name: opts.name,
    description: opts.description,
    url: `${SITE_URL}${opts.path}`,
    provider: { "@type": "Organization", name: "ViannaLegal" },
    areaServed: ["BR", "PT"],
  };
}

/**
 * FAQPage — só deve ser chamado quando a FAQ está de facto renderizada
 * na página. As páginas usam a mesma lista do frontmatter para render e
 * para schema, por isso não podem divergir.
 */
export function faqSchema(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

/** BlogPosting — posts do blog. */
export function blogPostingSchema(opts: {
  headline: string;
  description: string;
  path: string;
  author: string;
  datePublished: string;
  dateModified: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: opts.headline,
    description: opts.description,
    url: `${SITE_URL}${opts.path}`,
    author: { "@type": "Person", "@id": `${SITE_URL}/#kathia`, name: opts.author },
    publisher: { "@id": `${SITE_URL}/#organization` },
    image: `${SITE_URL}/og-image.jpg`,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    datePublished: opts.datePublished,
    dateModified: opts.dateModified,
    inLanguage: "pt-BR",
  };
}

/** Utilitário: injecta JSON-LD no HTML inicial. */
export function jsonLd(schema: object) {
  return { __html: JSON.stringify(schema) };
}

/** BreadcrumbList — usado no blog e nas vias. */
export function breadcrumbSchema(trail: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}
