import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

marked.setOptions({ gfm: true, breaks: false });

const CONTENT_DIR = path.join(process.cwd(), "content");

export interface FaqItem {
  q: string;
  a: string;
}

/**
 * Contrato de conteúdo — cada peça editorial preenche estes campos.
 * `answerBlock` e `uniquePromise` são obrigatórios por desenho: é o que
 * impede textos clonados entre URLs (ver plano, secções 6.2 e 6.4).
 */
export interface ContentPiece {
  slug: string;
  routePath: string;
  title: string;
  description: string;
  h1: string;
  answerBlock: string;
  uniquePromise: string;
  ogType: "website" | "article" | "profile";
  faq: FaqItem[];
  author?: string;
  datePublished?: string;
  dateModified?: string;
  bodyHtml: string;
}

function parseFile(fullPath: string, slug: string): ContentPiece {
  const raw = fs.readFileSync(fullPath, "utf-8");
  const { data, content } = matter(raw);

  const required = ["title", "description", "h1", "answer_block", "unique_promise", "route_path"];
  for (const field of required) {
    if (!data[field] || String(data[field]).trim() === "") {
      throw new Error(
        `Conteúdo inválido em ${slug}: campo obrigatório "${field}" em falta. ` +
          `O build falha de propósito — ver plano, secção 6.2.`
      );
    }
  }

  return {
    slug,
    routePath: data.route_path,
    title: data.title,
    description: data.description,
    h1: data.h1,
    answerBlock: data.answer_block,
    uniquePromise: data.unique_promise,
    ogType: data.og_type ?? "website",
    faq: Array.isArray(data.faq) ? data.faq : [],
    author: data.author,
    datePublished: data.date_published,
    dateModified: data.date_modified,
    bodyHtml: marked.parse(content) as string,
  };
}

/** Lê uma peça de conteúdo de nível superior, ex.: "quanto-custa". */
export function getPage(slug: string): ContentPiece {
  return parseFile(path.join(CONTENT_DIR, `${slug}.mdx`), slug);
}

/** Lê um post do blog por slug. */
export function getBlogPost(slug: string): ContentPiece {
  return parseFile(path.join(CONTENT_DIR, "blog", `${slug}.mdx`), slug);
}

/** Alimenta generateStaticParams — todo o blog é estático no build. */
export function getBlogSlugs(): string[] {
  const dir = path.join(CONTENT_DIR, "blog");
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}
