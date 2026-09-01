import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";
import {
  formatPrazo,
  formatTaxa,
  tabelaPrazosMarkdown,
  metaPrazosMarkdown,
} from "@/content/prazos-data";

marked.setOptions({ gfm: true, breaks: false });

/**
 * Resolve tokens de dados centralizados no markdown, em tempo de build.
 * Nenhum prazo ou taxa deve ser escrito à mão numa página ou artigo:
 *   {{prazo:netos-maiores}}  -> "42 a 48 meses"
 *   {{taxa:conjuges}}        -> "€250"
 *   {{prazos:tabela}}        -> tabela markdown completa
 *   {{prazos:meta}}          -> rodapé de fonte e data
 * Uma chave desconhecida faz o build falhar, em vez de publicar um vazio.
 */
export function resolveTokens(md: string, origem: string): string {
  return md
    .replace(/\{\{prazos:tabela\}\}/g, () => tabelaPrazosMarkdown())
    .replace(/\{\{prazos:meta\}\}/g, () => metaPrazosMarkdown())
    .replace(/\{\{(prazo|taxa):([a-z0-9-]+)\}\}/g, (_m, tipo, chave) => {
      try {
        return tipo === "prazo" ? formatPrazo(chave) : formatTaxa(chave);
      } catch {
        throw new Error(
          `[content] token {{${tipo}:${chave}}} em "${origem}" não existe em prazos-data.ts`
        );
      }
    });
}

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

  // Os tokens são resolvidos também no frontmatter: description, answer_block e
  // as FAQ alimentam metadados e JSON-LD, e não podem publicar "{{prazo:...}}".
  const tk = (v: unknown) =>
    typeof v === "string" ? resolveTokens(v, slug) : v;

  return {
    slug,
    routePath: data.route_path,
    title: tk(data.title) as string,
    description: tk(data.description) as string,
    h1: tk(data.h1) as string,
    answerBlock: tk(data.answer_block) as string,
    uniquePromise: tk(data.unique_promise) as string,
    ogType: data.og_type ?? "website",
    faq: Array.isArray(data.faq)
      ? data.faq.map((f: { q: string; a: string }) => ({
          q: tk(f.q) as string,
          a: tk(f.a) as string,
        }))
      : [],
    author: data.author,
    datePublished: data.date_published,
    dateModified: data.date_modified,
    bodyHtml: marked.parse(resolveTokens(content, slug)) as string,
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

/** Metadados de todos os posts, para a listagem /blog. Ordenado por data desc. */
export function listBlogPosts(): ContentPiece[] {
  return getBlogSlugs()
    .map((slug) => getBlogPost(slug))
    .sort((a, b) =>
      String(b.datePublished ?? "").localeCompare(String(a.datePublished ?? ""))
    );
}
