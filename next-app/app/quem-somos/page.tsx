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
    <main className="container-width py-10 sm:py-14">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(personSchema())} />
      <h1 className="mb-5 text-3xl leading-tight text-primary sm:text-4xl">{content.h1}</h1>
      <div className="answer-block">{content.answerBlock}</div>
      <article className="article-body" dangerouslySetInnerHTML={{ __html: content.bodyHtml }} />
    </main>
  );
}
