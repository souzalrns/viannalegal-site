import type { Metadata } from "next";
import { getPage } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

const content = getPage("informacoes-legais");

export const metadata: Metadata = buildMetadata({
  path: content.routePath,
  title: content.title,
  description: content.description,
  ogType: content.ogType,
});

export default function InformacoesLegaisPage() {
  return (
    <main>
      <h1>{content.h1}</h1>
      <div className="answer-block">{content.answerBlock}</div>
      <article dangerouslySetInnerHTML={{ __html: content.bodyHtml }} />
    </main>
  );
}
