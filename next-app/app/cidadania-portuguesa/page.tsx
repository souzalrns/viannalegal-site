import type { Metadata } from "next";
import { Check, Clock, Euro, ArrowRight, Search, HelpCircle } from "lucide-react";
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

      {/* Uma via por cartão, largura toda. O painel lateral repetido saiu:
          eram 7 caixas com o mesmo texto e deixavam vazios grandes quando o
          cartão ao lado era curto. O botão passou para dentro do cartão. */}
      <section className="bg-muted/40 py-16">
        <div className="container-width space-y-5">
          {VIAS_RESUMO.map((v) => (
            <article
              key={v.slug}
              className="rounded-xl border border-border bg-card p-7 transition-shadow hover:shadow-md"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h2 className="font-display text-2xl text-primary">{v.titulo}</h2>
                  <p className="mt-1 text-[14px] text-gold-dark">{v.subtitulo}</p>
                </div>
                {v.destaque && (
                  <span className="rounded-md bg-gold/15 px-3 py-1.5 text-[11.5px] font-bold uppercase tracking-wide text-gold-dark">
                    {v.destaque}
                  </span>
                )}
              </div>

              <dl className="mt-5 flex flex-wrap gap-x-10 gap-y-2 border-y border-border py-3.5 text-[14px]">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-gold" aria-hidden="true" />
                  <dt className="text-muted-foreground">Prazo do IRN:</dt>
                  <dd className="font-semibold text-foreground">{v.prazo}</dd>
                </div>
                <div className="flex items-center gap-2">
                  <Euro className="h-4 w-4 text-gold" aria-hidden="true" />
                  <dt className="text-muted-foreground">Emolumento:</dt>
                  <dd className="font-semibold text-foreground">{v.taxa}</dd>
                </div>
              </dl>

              <div className="mt-5 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                <div>
                  <p className="leading-relaxed text-muted-foreground">{v.descricao}</p>
                  {v.nota && (
                    <p className="mt-4 border-l-[3px] border-gold/60 pl-4 text-[13.5px] leading-relaxed text-muted-foreground">
                      {v.nota}
                    </p>
                  )}
                </div>

                <div>
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
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-border pt-5">
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[46px] items-center gap-2 rounded-lg bg-gold px-6 font-bold text-primary transition-all hover:-translate-y-0.5 hover:shadow-gold"
                >
                  Solicitar análise
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href={`/cidadania-portuguesa/${v.slug}`}
                  className="text-[14px] font-semibold text-primary underline underline-offset-4 hover:text-gold"
                >
                  Ver guia completo, documentos e perguntas frequentes
                </a>
              </div>
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
