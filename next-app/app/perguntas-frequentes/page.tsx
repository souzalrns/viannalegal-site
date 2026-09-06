import type { Metadata } from "next";
import { ChevronDown, ArrowRight } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, faqSchema, jsonLd } from "@/lib/schema";
import { RevisaoJuridica } from "@/components/revisao-juridica";
import { FAQ_HOME } from "@/content/home-data";

const WHATSAPP =
  "https://wa.me/351913134260?text=" +
  encodeURIComponent("Olá! Tenho uma dúvida sobre cidadania portuguesa que não está no site.");

const TODAS = FAQ_HOME.flatMap((g) => g.perguntas.map((p) => ({ q: p.q, a: p.a })));

export const metadata: Metadata = buildMetadata({
  path: "/perguntas-frequentes",
  title: "Perguntas Frequentes sobre Cidadania Portuguesa | ViannaLegal",
  description:
    "Respostas às dúvidas mais comuns sobre nacionalidade portuguesa: elegibilidade por via, documentos, prazos do IRN, custos, dupla cidadania e Lei Orgânica 1/2026.",
  ogType: "website",
});

function slugify(s: string) {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export default function PerguntasFrequentesPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(faqSchema(TODAS))} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          breadcrumbSchema([
            { name: "Início", path: "/" },
            { name: "Perguntas frequentes", path: "/perguntas-frequentes" },
          ])
        )}
      />

      <section className="bg-primary text-primary-foreground">
        <div className="container-width py-14">
          <p className="eyebrow !text-gold">Central de respostas</p>
          <h1 className="max-w-3xl font-display text-4xl font-bold leading-tight sm:text-5xl">
            Perguntas frequentes sobre cidadania portuguesa
          </h1>
          <p className="mt-5 max-w-2xl text-[16px] leading-relaxed text-primary-foreground/80">
            {TODAS.length} respostas às dúvidas mais comuns sobre nacionalidade portuguesa,
            organizadas por tema e actualizadas com a Lei Orgânica 1/2026.
          </p>
        </div>
      </section>

      <nav aria-label="Temas" className="border-b border-border bg-card">
        <div className="container-width flex flex-wrap gap-x-5 gap-y-2 py-4 text-[14px]">
          <span className="font-semibold text-muted-foreground">Temas:</span>
          {FAQ_HOME.map((g) => (
            <a
              key={g.categoria}
              href={`#${slugify(g.categoria)}`}
              className="text-primary underline underline-offset-4 hover:text-gold"
            >
              {g.categoria}
            </a>
          ))}
        </div>
      </nav>

      <section className="container-width py-14">
        <div className="space-y-10">
          {FAQ_HOME.map((grupo) => (
            <div key={grupo.categoria} id={slugify(grupo.categoria)}>
              <h2 className="mb-4 font-display text-2xl text-primary">{grupo.categoria}</h2>
              <div className="space-y-3">
                {grupo.perguntas.map((p) => (
                  <details
                    key={p.q}
                    className="group rounded-xl border border-border bg-card px-6 py-4 shadow-sm open:shadow-md"
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-primary marker:hidden">
                      {p.q}
                      <ChevronDown
                        className="h-5 w-5 shrink-0 text-gold transition-transform group-open:rotate-180"
                        aria-hidden="true"
                      />
                    </summary>
                    <div
                      className="mt-4 border-t border-border pt-4 leading-relaxed text-muted-foreground [&_a]:font-medium [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-2"
                      dangerouslySetInnerHTML={{ __html: p.a }}
                    />
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-xl border border-gold/40 bg-gold/10 px-7 py-7 text-center">
          <h2 className="font-display text-xl text-primary">A sua dúvida não está aqui?</h2>
          <p className="mx-auto mt-2 max-w-xl text-[15px] text-muted-foreground">
            Cada caso tem particularidades. Fale com a Kathia e receba uma resposta sobre o
            seu caso, não uma resposta genérica.
          </p>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex min-h-[48px] items-center gap-2 rounded-lg bg-gold px-6 font-bold text-primary transition-all hover:-translate-y-0.5 hover:shadow-gold"
          >
            Falar com especialista
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        <RevisaoJuridica />
      </section>
    </main>
  );
}
