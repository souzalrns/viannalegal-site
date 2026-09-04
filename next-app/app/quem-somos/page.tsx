import type { Metadata } from "next";
import Image from "next/image";
import {
  Scale,
  GraduationCap,
  MapPin,
  FileCheck,
  Check,
  ArrowRight,
} from "lucide-react";
import { getPage } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { personSchema, breadcrumbSchema, jsonLd } from "@/lib/schema";
import { METRICAS, FORMACAO, DIFERENCA } from "@/content/quem-somos-data";

const ICONS = { Scale, GraduationCap, MapPin, FileCheck } as const;

const WHATSAPP =
  "https://wa.me/351913134260?text=" +
  encodeURIComponent("Olá Kathia! Vim pelo site e quero avaliar o meu caso.");

const content = getPage("quem-somos");

export const metadata: Metadata = buildMetadata({
  path: content.routePath,
  title: content.title,
  description: content.description,
  ogType: content.ogType,
});

export default function QuemSomosPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(personSchema())} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          breadcrumbSchema([
            { name: "Início", path: "/" },
            { name: "Quem Somos", path: "/quem-somos" },
          ])
        )}
      />

      {/* Hero */}
      <section className="bg-primary text-primary-foreground">
        <div className="container-width py-14 sm:py-16">
          <p className="eyebrow !text-gold">Quem trata do seu processo</p>
          <h1 className="font-display text-4xl font-bold sm:text-5xl">{content.h1}</h1>
          <p className="mt-5 max-w-3xl text-[16px] leading-relaxed text-primary-foreground/80">
            {content.answerBlock}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[50px] items-center gap-2 rounded-lg bg-gold px-7 font-bold text-primary transition-all hover:-translate-y-0.5 hover:shadow-gold"
            >
              Falar com a Kathia
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="/quiz-elegibilidade"
              className="inline-flex min-h-[50px] items-center rounded-lg border-[1.5px] border-primary-foreground/30 px-7 font-semibold transition-colors hover:border-gold hover:text-gold"
            >
              Veja se tem direito
            </a>
          </div>
        </div>
      </section>

      {/* Métricas de autoridade */}
      <section className="border-b border-border bg-card">
        <dl className="container-width grid grid-cols-2 gap-6 py-8 text-center lg:grid-cols-4">
          {METRICAS.map((m) => (
            <div key={m.valor}>
              <dt className="font-display text-2xl text-primary sm:text-[28px]">{m.valor}</dt>
              <dd className="mt-1 text-[13px] text-muted-foreground">{m.label}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Retrato + credenciais */}
      <section className="container-width grid gap-10 py-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <figure className="relative overflow-hidden rounded-xl shadow-lg">
          <Image
            src="/consultant.webp"
            alt="Kathia Vianna, advogada inscrita na Ordem dos Advogados de Portugal"
            width={720}
            height={860}
            priority
            className="h-[420px] w-full object-cover"
          />
          <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary via-primary/85 to-transparent px-6 pb-5 pt-16 text-primary-foreground">
            <p className="font-display text-lg font-bold">Kathia Vianna</p>
            <p className="mt-0.5 text-[13px] text-primary-foreground/85">
              Advogada · Ordem dos Advogados de Portugal, n.º 56666p
            </p>
            <p className="text-[13px] text-gold">Portugal · actuação presencial desde 2016</p>
          </figcaption>
        </figure>

        <div>
          <h2 className="font-display text-3xl leading-tight text-primary">
            Kathia Vianna — advogada especialista em cidadania portuguesa
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Actua presencialmente em Portugal, nas Conservatórias e Tribunais onde os
            processos correm. Conhece o IRN por dentro, antecipa os problemas antes que
            apareçam e acompanha cada família do primeiro contacto até à certidão de
            nascimento portuguesa.
          </p>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex min-h-[48px] items-center gap-2 rounded-lg bg-gold px-6 font-bold text-primary transition-all hover:-translate-y-0.5 hover:shadow-gold"
          >
            Falar com a Kathia
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </section>

      {/* Formação e actuação */}
      <section className="bg-muted/60 py-16">
        <div className="container-width">
          <p className="eyebrow text-center">Credenciais</p>
          <h2 className="text-center font-display text-3xl text-primary sm:text-[34px]">
            Formação e actuação
          </h2>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {FORMACAO.map((f) => {
              const Icon = ICONS[f.icon as keyof typeof ICONS] ?? Scale;
              return (
                <div key={f.title} className="rounded-xl border border-border bg-card p-6">
                  <Icon className="mb-3 h-5 w-5 text-gold" aria-hidden="true" />
                  <h3 className="font-display text-[16px] text-primary">{f.title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">
                    {f.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Por que a ViannaLegal */}
      <section className="container-width py-16">
        <p className="eyebrow text-center">A diferença</p>
        <h2 className="text-center font-display text-3xl text-primary sm:text-[34px]">
          Por que a ViannaLegal
        </h2>

        <ul className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2">
          {DIFERENCA.map((d) => (
            <li key={d} className="flex items-start gap-3">
              <Check className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
              <span className="text-[15px] leading-relaxed text-foreground/90">{d}</span>
            </li>
          ))}
        </ul>

        <div className="mt-10 text-center">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[50px] items-center gap-2 rounded-lg bg-primary px-7 font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-primary/90"
          >
            Avaliar o meu caso
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </section>
    </main>
  );
}
