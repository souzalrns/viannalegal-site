import type { Metadata } from "next";
import { listBlogPosts } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

const posts = listBlogPosts();

export const metadata: Metadata = buildMetadata({
  path: "/blog",
  title: "Blog — Cidadania Portuguesa | ViannaLegal",
  description:
    "Artigos sobre cidadania portuguesa para brasileiros: requisitos por via, documentos, prazos reais do IRN, custos e as alterações da Lei Orgânica 1/2026.",
  ogType: "website",
});

export default function BlogIndexPage() {
  return (
    <main>
      <h1>Blog — Cidadania Portuguesa</h1>
      <div className="answer-block">
        Artigos sobre cidadania portuguesa para brasileiros, escritos pela advogada Kathia
        Vianna (Ordem dos Advogados de Portugal, n.º 56666p): requisitos por via, documentos,
        prazos reais do IRN, custos e o que mudou com a Lei Orgânica 1/2026.
      </div>

      <p className="meta-line">{posts.length} artigos publicados</p>

      <ul className="blog-index">
        {posts.map((post) => (
          <li key={post.slug}>
            <h2>
              <a href={post.routePath}>{post.title}</a>
            </h2>
            <p className="meta-line">
              {post.author ?? "ViannaLegal"}
              {post.datePublished ? ` · ${post.datePublished}` : ""}
            </p>
            <p>{post.answerBlock}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
