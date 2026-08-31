import type { Metadata } from "next";
import { getPage } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { blogPostingSchema, faqSchema, jsonLd } from "@/lib/schema";

const content = getPage("prazos-e-acompanhamento");

export const metadata: Metadata = buildMetadata({
  path: content.routePath,
  title: content.title,
  description: content.description,
  ogType: content.ogType,
});

export default function PrazosEAcompanhamentoPage() {
  const postingSchema = blogPostingSchema({
    headline: content.title,
    description: content.description,
    path: content.routePath,
    author: content.author ?? "ViannaLegal",
    datePublished: content.datePublished ?? "",
    dateModified: content.dateModified ?? content.datePublished ?? "",
  });

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(postingSchema)} />
      {content.faq.length > 0 && (
        <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(faqSchema(content.faq))} />
      )}

      <h1>{content.h1}</h1>
      <p className="meta-line">
        Por {content.author ?? "ViannaLegal"} · Actualizado em {content.dateModified ?? content.datePublished}
      </p>
      <div className="answer-block">{content.answerBlock}</div>
      <article dangerouslySetInnerHTML={{ __html: content.bodyHtml }} />

      {content.faq.length > 0 && (
        <section aria-label="Perguntas frequentes">
          <h2>Perguntas frequentes</h2>
          {content.faq.map((item) => (
            <div className="faq-item" key={item.q}>
              <h3>{item.q}</h3>
              <p>{item.a}</p>
            </div>
          ))}
        </section>
      )}
    </main>
  );
}

