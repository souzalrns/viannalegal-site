import type { Metadata } from "next";
import { ArrowRight, Star } from "lucide-react";
import { listBlogPosts } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, jsonLd } from "@/lib/schema";

const WHATSAPP =
  "https://wa.me/351913134260?text=" +
  encodeURIComponent("Olá! Li os artigos do site e quero avaliar o meu caso.");

// Ordem em que as secções aparecem. Categorias fora desta lista vão para o fim.
const ORDEM = [
  "Lei 2026",
  "Vias e elegibilidade",
  "Documentos",
  "Prazos e IRN",
  "Depois da aprovação",
] as const;

// Artigos em destaque, por serem os pontos de entrada do tema.
const DESTAQUES = [
  "como-tirar-cidadania-portuguesa",
  "atualizacoes-da-lei-da-nacionalidade-portuguesa-em-2026",
  "700-mil-processos-irn-o-que-significa-para-voce",
  "vinculo-efetivo-como-comprovar",
];

const posts = listBlogPosts();

export const metadata: Metadata = buildMetadata({
  path: "/blog",
  title: "Artigos sobre Cidadania Portuguesa | ViannaLegal",
  description:
    "Artigos sobre cidadania portuguesa para brasileiros: requisitos por via, documentos, prazos reais do IRN, custos e o que mudou com a Lei Orgânica 1/2026.",
  ogType: "website",
});

export default function BlogIndexPage() {
  const destaques = DESTAQUES.map((s) => posts.find((p) => p.slug === s)).filter(
    (p): p is (typeof posts)[number] => Boolean(p)
  );

  const porCategoria = new Map<string, typeof posts>();
  for (const p of posts) {
    if (DESTAQUES.includes(p.slug)) continue;
    const c = p.category ?? "Outros";
    porCategoria.set(c, [...(porCategoria.get(c) ?? []), p]);
  }
  const categorias = [...porCategoria.keys()].sort(
    (a, b) =>
      (ORDEM.indexOf(a as never) + 1 || 99) - (ORDEM.indexOf(b as never) + 1 || 99)
  );

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          breadcrumbSchema([
            { name: "Início", path: "/" },
            { name: "Artigos", path: "/blog" },
          ])
        )}
      />

      {/* Hero */}
      <section className="bg-primary text-primary-foreground">
        <div className="container-width py-14">
          <p className="eyebrow !text-gold">Conteúdo</p>
          <h1 className="font-display text-4xl font-bold sm:text-5xl">
            Artigos sobre cidadania portuguesa
          </h1>
          <p className="mt-4 max-w-3xl text-[16px] leading-relaxed text-primary-foreground/80">
            {posts.length} artigos escritos pela advogada Kathia Vianna, inscrita na Ordem
            dos Advogados de Portugal: requisitos por via, documentos, prazos reais do IRN,
            custos e o que mudou com a Lei Orgânica 1/2026.
          </p>
          <a
            href="/quiz-elegibilidade"
            className="mt-7 inline-flex min-h-[48px] items-center gap-2 rounded-lg bg-gold px-6 font-bold text-primary transition-all hover:-translate-y-0.5 hover:shadow-gold"
          >
            Fazer o quiz de elegibilidade
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </section>

      {/* Índice de categorias */}
      <nav aria-label="Categorias" className="border-b border-border bg-card">
        <div className="container-width flex flex-wrap gap-x-5 gap-y-2 py-4 text-[14px]">
          <span className="font-semibold text-muted-foreground">Temas:</span>
          {categorias.map((c) => (
            <a
              key={c}
              href={`#${slugify(c)}`}
              className="text-primary underline underline-offset-4 hover:text-gold"
            >
              {c} ({porCategoria.get(c)!.length})
            </a>
          ))}
        </div>
      </nav>

      {/* Destaques */}
      <section className="container-width py-14">
        <p className="eyebrow">Comece por aqui</p>
        <h2 className="font-display text-2xl text-primary sm:text-3xl">
          Os quatro artigos essenciais
        </h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {destaques.map((p) => (
            <a
              key={p.slug}
              href={p.routePath}
              className="group rounded-xl border border-gold/40 bg-gold/5 p-6 transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <Star className="mb-3 h-5 w-5 text-gold" aria-hidden="true" />
              <h3 className="font-display text-[18px] leading-snug text-primary group-hover:text-gold-dark">
                {p.title.replace(" | ViannaLegal", "")}
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">
                {p.description}
              </p>
            </a>
          ))}
        </div>
      </section>

      {/* Artigos por categoria */}
      {categorias.map((c, i) => (
        <section
          key={c}
          id={slugify(c)}
          className={i % 2 ? "bg-muted/50 py-14" : "py-14"}
        >
          <div className="container-width">
            <h2 className="font-display text-2xl text-primary sm:text-3xl">{c}</h2>
            <ul className="blog-index mt-7">
              {porCategoria.get(c)!.map((p) => (
                <li key={p.slug}>
                  <h3 className="mb-2 font-display text-[17px] leading-snug">
                    <a href={p.routePath} className="text-primary no-underline hover:text-gold">
                      {p.title.replace(" | ViannaLegal", "")}
                    </a>
                  </h3>
                  <p className="meta-line mb-2">
                    {p.author ?? "ViannaLegal"}
                    {p.datePublished ? ` · ${p.datePublished}` : ""}
                  </p>
                  <p className="text-[14px] leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>
                </li>
              ))}
            </ul>

            {/* Um convite por secção, não por artigo */}
            <div className="mt-8 rounded-xl border border-border bg-card px-6 py-5 text-center">
              <p className="text-[15px] text-muted-foreground">
                Ainda com dúvidas sobre o seu caso?{" "}
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-primary underline underline-offset-4 hover:text-gold"
                >
                  Fale com a Kathia, sem compromisso
                </a>
              </p>
            </div>
          </div>
        </section>
      ))}
    </main>
  );
}

function slugify(s: string) {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
