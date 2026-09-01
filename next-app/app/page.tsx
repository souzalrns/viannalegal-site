import type { Metadata } from "next";
import { getPage } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { organizationSchema, faqSchema, jsonLd } from "@/lib/schema";
import { Hero } from "@/components/home/hero";
import { ViasGrid } from "@/components/home/vias-grid";
import { Kathia } from "@/components/home/kathia";
import { Processo } from "@/components/home/processo";
import { Depoimentos } from "@/components/home/depoimentos";
import { Faq } from "@/components/home/faq";

const content = getPage("home");

export const metadata: Metadata = buildMetadata({
  path: content.routePath,
  title: content.title,
  description: content.description,
  ogType: content.ogType,
});

export default function HomePage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(organizationSchema())} />
      {content.faq.length > 0 && (
        <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(faqSchema(content.faq))} />
      )}

      <Hero h1={content.h1} answer={content.answerBlock} />
      <ViasGrid />
      <Kathia />
      <Processo />
      <Depoimentos />
      <Faq />
    </main>
  );
}
