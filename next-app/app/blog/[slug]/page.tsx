import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBlogPost, getBlogSlugs } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { AuthorBio } from "@/components/author-bio";
import { blogPostingSchema, breadcrumbSchema, faqSchema, jsonLd } from "@/lib/schema";

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
    <main className="container-width py-10 sm:py-14">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(postingSchema)} />
      {content.faq.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLd(faqSchema(content.faq))}
        />
      )}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          breadcrumbSchema([
            { name: "Início", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: content.title, path: content.routePath },
          ])
        )}
      />

      <p className="meta-line">
        <a href="/">Início</a> / <a href="/blog">Blog</a>
      </p>

      <h1 className="mb-5 text-3xl leading-tight text-primary sm:text-4xl">{content.h1}</h1>
      <p className="meta-line">
        Por {content.author ?? "ViannaLegal"} · Actualizado em{" "}
        {content.dateModified ?? content.datePublished}
      </p>
      <div className="answer-block">{content.answerBlock}</div>

      <article className="article-body" dangerouslySetInnerHTML={{ __html: content.bodyHtml }} />

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
