import type { Metadata } from "next";
import { getPage } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

const content = getPage("politica-privacidade");

// Mesma rota e mesmo `noindex, follow` da página do site actual
// (src/pages/PoliticaPrivacidade.tsx): o URL não muda na migração.
export const metadata: Metadata = {
  ...buildMetadata({
    path: content.routePath,
    title: content.title,
    description: content.description,
    ogType: content.ogType,
  }),
  robots: { index: false, follow: true },
};

export default function PoliticaPrivacidadePage() {
  return (
    <main>
      <h1>{content.h1}</h1>
      <div className="answer-block">{content.answerBlock}</div>
      <article dangerouslySetInnerHTML={{ __html: content.bodyHtml }} />
    </main>
  );
}
