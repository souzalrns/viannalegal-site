import type { Metadata } from "next";
import { getPage } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { personSchema, jsonLd } from "@/lib/schema";

const content = getPage("quem-somos");

export const metadata: Metadata = buildMetadata({
  path: content.routePath,
  title: content.title,
  description: content.description,
  ogType: content.ogType,
});

export default function QuemSomosPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(personSchema())} />
      <h1>{content.h1}</h1>
      <div className="answer-block">{content.answerBlock}</div>
      <article dangerouslySetInnerHTML={{ __html: content.bodyHtml }} />
    </main>
  );
}

