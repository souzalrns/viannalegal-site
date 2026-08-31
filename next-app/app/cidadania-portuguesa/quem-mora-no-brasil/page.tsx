import type { Metadata } from "next";
import { getPage } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { blogPostingSchema, jsonLd } from "@/lib/schema";

const content = getPage("quem-mora-no-brasil");

export const metadata: Metadata = buildMetadata({
  path: content.routePath,
  title: content.title,
  description: content.description,
  ogType: content.ogType,
});

export default function QuemMoraNoBrasilPage() {
  const schema = blogPostingSchema({
    headline: content.title,
    description: content.description,
    path: content.routePath,
    author: "ViannaLegal",
    datePublished: "2026-06-25",
    dateModified: "2026-06-25",
  });

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(schema)} />
      <p className="meta-line">
        <a href="/cidadania-portuguesa">Cidadania Portuguesa</a> / Morando no Brasil
      </p>
      <h1>{content.h1}</h1>
      <div className="answer-block">{content.answerBlock}</div>
      <article dangerouslySetInnerHTML={{ __html: content.bodyHtml }} />
    </main>
  );
}

