import type { Metadata } from "next";
import { getPage } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { serviceSchema, jsonLd } from "@/lib/schema";

const content = getPage("cidadania-portuguesa");

export const metadata: Metadata = buildMetadata({
  path: content.routePath,
  title: content.title,
  description: content.description,
  ogType: content.ogType,
});

export default function CidadaniaPortuguesaPage() {
  const schema = serviceSchema({
    name: "Assessoria em Cidadania Portuguesa",
    description:
      "Assessoria jurídica em todas as vias de atribuição e aquisição da nacionalidade portuguesa para brasileiros.",
    path: content.routePath,
  });

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(schema)} />
      <h1>{content.h1}</h1>
      <div className="answer-block">{content.answerBlock}</div>
      <article dangerouslySetInnerHTML={{ __html: content.bodyHtml }} />
    </main>
  );
}
