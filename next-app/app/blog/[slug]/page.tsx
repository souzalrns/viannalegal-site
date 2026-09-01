import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBlogPost, getBlogSlugs } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { AuthorBio } from "@/components/author-bio";
import { blogPostingSchema, faqSchema, jsonLd } from "@/lib/schema";

interface Props {
  params: Promise<{ slug: string }>;
}

/**
 * SSG: todo o blog é gerado no build. No M1 só existe 1 ficheiro em
 * content/blog/, mas a rota já está pronta para os restantes 82 posts
 * (M3) sem alterar nenhuma linha aqui — basta acrescentar .mdx.
 */
export function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const content = getBlogPost(slug);
    return buildMetadata({
      path: content.routePath,
      title: content.title,
      description: content.description,
      ogType: content.ogType,
    });
  } catch {
    return {};
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;

  let content;
  try {
    content = getBlogPost(slug);
  } catch {
    notFound();
  }

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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLd(faqSchema(content.faq))}
        />
      )}

      <h1>{content.h1}</h1>
      <p className="meta-line">
        Por {content.author ?? "ViannaLegal"} · Actualizado em{" "}
        {content.dateModified ?? content.datePublished}
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

      <AuthorBio authorName={content.author} />
    </main>
  );
}
