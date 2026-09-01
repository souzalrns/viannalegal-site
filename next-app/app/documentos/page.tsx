import type { Metadata } from "next";
import { getPage } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { jsonLd } from "@/lib/schema";

const content = getPage("documentos");

export const metadata: Metadata = buildMetadata({
  path: content.routePath,
  title: content.title,
  description: content.description,
  ogType: content.ogType,
});

export default function DocumentosPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "Busca de Documentos Portugueses e Pesquisa Genealógica",
    description: content.description,
    url: "https://viannalegal.com.br/documentos",
    areaServed: ["PT", "BR"],
    serviceType: "Pesquisa Genealógica e Busca Documental",
    provider: { "@type": "Organization", name: "ViannaLegal" },
  };

  return (
    <main className="container-width py-10 sm:py-14">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(schema)} />
      <h1 className="mb-5 text-3xl leading-tight text-primary sm:text-4xl">{content.h1}</h1>
      <div className="answer-block">{content.answerBlock}</div>
      <article className="article-body" dangerouslySetInnerHTML={{ __html: content.bodyHtml }} />
    </main>
  );
}
