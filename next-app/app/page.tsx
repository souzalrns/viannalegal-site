import type { Metadata } from "next";
import { getPage } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { organizationSchema, faqSchema, jsonLd } from "@/lib/schema";

const content = getPage("home");

export const metadata: Metadata = buildMetadata({
  path: content.routePath,
  title: content.title,
  description: content.description,
  ogType: content.ogType,
});

export default function HomePage() {
  return (
    <main className="container-width py-10 sm:py-14">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(organizationSchema())} />
      {content.faq.length > 0 && (
        <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(faqSchema(content.faq))} />
      )}
      <h1 className="mb-5 text-3xl leading-tight text-primary sm:text-4xl">{content.h1}</h1>
      <div className="answer-block">{content.answerBlock}</div>
      <article className="article-body" dangerouslySetInnerHTML={{ __html: content.bodyHtml }} />
    </main>
  );
}
