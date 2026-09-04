import type { Metadata } from "next";
import { Check, Clock, ArrowRight, Search, HelpCircle } from "lucide-react";
import { getPage } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { serviceSchema, breadcrumbSchema, jsonLd } from "@/lib/schema";
import { VIAS_RESUMO } from "@/content/vias-resumo";

const WHATSAPP =
  "https://wa.me/351913134260?text=" +
  encodeURIComponent("Olá! Vim pelo site e quero avaliar qual via de cidadania se aplica ao meu caso.");

const content = getPage("cidadania-portuguesa");

export const metadata: Metadata = buildMetadata({
  path: content.routePath,
  title: content.title,
  description: content.description,
  ogType: content.ogType,
});

export default function CidadaniaPortuguesaPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          serviceSchema({
            name: "Assessoria em Cidadania Portuguesa",
            description:
              "Assessoria jurídica em todas as vias de atribuição e aquisição da nacionalidade portuguesa para brasileiros.",
            path: content.routePath,
          })
        )}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          breadcrumbSchema([
            { name: "Início", path: "/" },
            { name: "Cidadania Portuguesa", path: content.routePath },
          ])
        )}
      />

      {/* Hero */}
      <section className="bg-primary text-center text-primary-foreground">
        <div className="container-width py-14 sm:py-16">
          <p className="eyebrow !text-gold">Cidadania Portuguesa</p>
          <h1 className="mx-auto max-w-3xl font-display text-4xl font-bold leading-tight sm:text-5xl">
            {content.h1}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-[16px] leading-relaxed text-primary-foreground/80">
            Assessoria especializada em todas as modalidades de aquisição da nacionalidade
            portuguesa, actualizada com a Lei Orgânica 1/2026.
          </p>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex min-h-[50px] items-center gap-2 rounded-lg bg-gold px-7 font-bold text-primary transition-all hover:-translate-y-0.5 hover:shadow-gold"
          >
            Falar com especialista
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </section>

      {/* Resposta directa */}
      <section className="border-b border-border bg-muted/50">
        <div className="container-width py-7">
          <p className="mx-auto max-w-4xl text-[15px] leading-relaxed text-muted-foreground">
            {content.answerBlock}
          </p>
        </div>
      </section>

      {/* Tabela comparativa */}
      <section className="container-width py-16">
        <p className="eyebrow text-center">Comparação rápida</p>
        <h2 className="text-center font-display text-3xl text-primary sm:text-[34px]">
          As sete vias lado a lado
        </h2>

        <div className="mt-8 overflow-x-auto">
          <table className="w-full min-w-[560px] border-collapse text-[14.5px]">
            <thead className="bg-primary text-primary-foreground">
              <tr>
                <th className="px-4 py-3 text-left font-semibold">Via</th>
                <th className="px-4 py-3 text-left font-semibold">Prazo do IRN</th>
                <th className="px-4 py-3 text-left font-semibold">Emolumento</th>
                <th className="px-4 py-3 text-left font-semibold">Destaque</th>
              </tr>
            </thead>
            <tbody>
              {VIAS_RESUMO.map((v, i) => (
                <tr key={v.slug} className={i % 2 ? "bg-muted/50" : "bg-card"}>
                  <td className="border-b border-border px-4 py-3">
                    <a
                      href={`/cidadania-portuguesa/${v.slug}`}
                      className="font-semibold text-primary underline underline-offset-2 hover:text-gold"
                    >
                      {v.titulo.replace("Cidadania para ", "").replace("Nacionalidade por ", "")}
                    </a>
                  </td>
                  <td className="whitespace-nowrap border-b border-border px-4 py-3">{v.prazo}</td>
                  <td className="whitespace-nowrap border-b border-border px-4 py-3">{v.taxa}</td>
                  <td className="border-b border-border px-4 py-3 text-muted-foreground">
                    {v.destaque ?? "—"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-[13px] text-muted-foreground">
          Prazos dos quadros do IRN. Cada amplitude reflecte a diferença entre os órgãos
          instrutores.
        </p>
      </section>

      {/* Cartões alternados, um por via */}
      <section className="bg-muted/40 py-16">
        <div className="container-width space-y-6">
          {VIAS_RESUMO.map((v, i) => (
            <article
              key={v.slug}
              className={`grid gap-6 lg:grid-cols-[1.6fr_0.9fr] lg:items-stretch ${
                i % 2 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="rounded-xl border border-border bg-card p-7">
                <p className="mb-3 flex flex-wrap items-center gap-3 text-[13px]">
                  <span className="inline-flex items-center gap-1.5 text-muted-foreground">
                    <Clock className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
                    Prazo do IRN: <strong className="text-foreground">{v.prazo}</strong>
                  </span>
                  {v.destaque && (
                    <span className="rounded-md bg-gold/15 px-2.5 py-1 text-[11.5px] font-bold uppercase tracking-wide text-gold-dark">
                      {v.destaque}
                    </span>
                  )}
                </p>

                <h2 className="font-display text-2xl text-primary">{v.titulo}</h2>
                <p className="mt-1 text-[14px] text-gold-dark">{v.subtitulo}</p>
                <p className="mt-4 leading-relaxed text-muted-foreground">{v.descricao}</p>

                <div className="mt-6 rounded-lg border border-border bg-muted/60 p-5">
                  <p className="mb-3 font-display text-[15px] text-primary">
                    Requisitos principais
                  </p>
                  <ul className="space-y-2">
                    {v.requisitos.map((r) => (
                      <li key={r} className="flex items-start gap-2.5 text-[14px]">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                        <span className="text-foreground/90">{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {v.nota && (
                  <p className="mt-4 border-l-[3px] border-gold/60 pl-4 text-[13.5px] leading-relaxed text-muted-foreground">
                    {v.nota}
                  </p>
                )}

                <a
                  href={`/cidadania-portuguesa/${v.slug}`}
                  className="mt-5 inline-flex items-center gap-1.5 text-[14px] font-semibold text-primary underline underline-offset-4 hover:text-gold"
                >
                  Ver guia completo, documentos e perguntas frequentes
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </div>

              <aside className="flex flex-col items-center justify-center rounded-xl border border-border bg-muted/70 p-7 text-center">
                <p className="font-display text-lg text-primary">Interessado nesta via?</p>
                <p className="mt-2 text-[14px] text-muted-foreground">
                  Avalie o seu caso, sem compromisso.
                </p>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex min-h-[46px] items-center gap-2 rounded-lg bg-gold px-6 font-bold text-primary transition-all hover:-translate-y-0.5 hover:shadow-gold"
                >
                  Solicitar análise
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <p className="mt-4 text-[12.5px] text-muted-foreground">
                  Emolumento do IRN: <strong className="text-foreground">{v.taxa}</strong>
                </p>
              </aside>
            </article>
          ))}
        </div>
      </section>

      {/* Apoio */}
      <section className="container-width grid gap-5 py-16 md:grid-cols-2">
        <a
          href="/quiz-elegibilidade"
          className="group rounded-xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-gold/60 hover:shadow-md"
        >
          <HelpCircle className="mb-3 h-6 w-6 text-gold" aria-hidden="true" />
          <h2 className="font-display text-xl text-primary">Não sabe qual é o seu caso?</h2>
          <p className="mt-2 text-[14.5px] leading-relaxed text-muted-foreground">
            Cinco perguntas, dois minutos, e sabe qual das sete vias se aplica a si.
          </p>
          <span className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-semibold text-primary group-hover:text-gold">
            Fazer o quiz
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </span>
        </a>

        <a
          href="/documentos"
          className="group rounded-xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-gold/60 hover:shadow-md"
        >
          <Search className="mb-3 h-6 w-6 text-gold" aria-hidden="true" />
          <h2 className="font-display text-xl text-primary">Precisa de documentos portugueses?</h2>
          <p className="mt-2 text-[14.5px] leading-relaxed text-muted-foreground">
            Localização de certidões anteriores a 1911 em arquivos paroquiais e distritais,
            com leitura paleográfica.
          </p>
          <span className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-semibold text-primary group-hover:text-gold">
            Ver o serviço
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </span>
        </a>
      </section>
    </main>
  );
}
