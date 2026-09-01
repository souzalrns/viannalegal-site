import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPage } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, faqSchema, jsonLd } from "@/lib/schema";
import { AuthorBio } from "@/components/author-bio";

const LEI_SLUGS = [
  "netos",
  "filhos",
  "bisnetos",
  "residencia",
  "casamento-e-uniao-de-facto",
  "processos-pendentes",
  "regulamentacao",
] as const;

export function generateStaticParams() {
  return LEI_SLUGS.map((slug) => ({ slug }));
}

function load(slug: string) {
  if (!(LEI_SLUGS as readonly string[]).includes(slug)) notFound();
  return getPage(`lei-2026/${slug}`);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const content = load(slug);
  return buildMetadata({
    path: content.routePath,
    title: content.title,
    description: content.description,
    ogType: content.ogType,
  });
}

export default async function LeiSubPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const content = load(slug);

  return (
    <main className="container-width py-10 sm:py-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          breadcrumbSchema([
            { name: "Início", path: "/" },
            { name: "Lei da Nacionalidade 2026", path: "/lei-da-nacionalidade-2026" },
            { name: content.h1, path: content.routePath },
          ])
        )}
      />
      {content.faq.length > 0 && (
        <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(faqSchema(content.faq))} />
      )}

      <p className="meta-line">
        <a href="/">Início</a> /{" "}
        <a href="/lei-da-nacionalidade-2026">Lei da Nacionalidade 2026</a>
      </p>

      <h1 className="mb-5 text-3xl leading-tight text-primary sm:text-4xl">{content.h1}</h1>
      <div className="answer-block">{content.answerBlock}</div>
      <article className="article-body" dangerouslySetInnerHTML={{ __html: content.bodyHtml }} />

      <AuthorBio authorName={content.author} />
    </main>
  );
}
