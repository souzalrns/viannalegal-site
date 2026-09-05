import type { Metadata } from "next";
import {
  Search,
  GitBranch,
  ScrollText,
  FileCheck,
  Check,
  Quote,
  ArrowRight,
  AlertTriangle,
} from "lucide-react";
import { getPage } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, faqSchema, jsonLd } from "@/lib/schema";

const WHATSAPP =
  "https://wa.me/351913134260?text=" +
  encodeURIComponent("Olá! Preciso de localizar documentos portugueses da minha família.");

const content = getPage("documentos");

const SERVICOS = [
  {
    icon: Search,
    titulo: "Busca de Documentos",
    quando: "Quando já sabe quem é o seu ascendente português",
    desc: "Com nome completo, data aproximada e localidade, fazemos a busca directa nos arquivos e conservatórias portuguesas.",
    pontos: [
      "Processo mais rápido e económico",
      "Ideal quando há informações específicas",
      "Localização de certidões de nascimento, baptismo, casamento e óbito",
    ],
  },
  {
    icon: GitBranch,
    titulo: "Pesquisa Genealógica",
    quando: "Quando a família só tem fragmentos",
    desc: "Um nome mal escrito, uma aldeia que já não existe, uma data aproximada. Reconstruímos a linha a partir de múltiplas fontes até chegar ao registo.",
    pontos: [
      "Investigação completa de ascendência",
      "Pesquisa em múltiplos arquivos e fontes",
      "Reconstrução da linha de descendência",
    ],
  },
];

const PASSOS = [
  {
    titulo: "Partilha o que sabe",
    desc: "Nome, datas aproximadas, localidade, ou qualquer coisa que a família tenha guardado. Mesmo pouco costuma chegar para começar.",
  },
  {
    titulo: "Avaliamos a viabilidade",
    desc: "Dizemos se é caso de busca directa ou de pesquisa genealógica, e o que é realista esperar antes de qualquer compromisso.",
  },
  {
    titulo: "Localizamos e lemos os documentos",
    desc: "Acedemos aos arquivos portugueses e, quando o registo é anterior a 1911, fazemos a leitura paleográfica do manuscrito.",
  },
  {
    titulo: "Entrega do resultado",
    desc: "Recebe as certidões, ou a localização exacta de onde estão, prontas para instruir o processo de nacionalidade.",
  },
];

const LOCALIZAMOS = [
  ["Certidões de Baptismo", "registos paroquiais com valor legal para comprovação de nacionalidade"],
  ["Certidões de Nascimento", "registos civis a partir de 1911 nas conservatórias"],
  ["Certidões de Casamento", "essenciais para comprovar filiação e linha de descendência"],
  ["Certidões de Óbito", "quando necessário para completar a linha genealógica"],
];

const FAQ = [
  {
    q: "Quanto tempo demora uma busca de documentos?",
    a: "Depende de onde está o registo. Quando há dados concretos e o registo é posterior a 1911, costuma ser rápido. Registos paroquiais antigos, em arquivos distritais, exigem mais tempo — dizemos a estimativa depois de avaliar o caso.",
  },
  {
    q: "Os documentos encontrados servem para o processo de cidadania?",
    a: "Sim. As certidões são emitidas pelos órgãos oficiais portugueses e têm valor legal para instruir o pedido de nacionalidade.",
  },
  {
    q: "Preciso de já ter o processo de cidadania aberto?",
    a: "Não. Muita gente faz a busca documental antes de iniciar o processo, precisamente para não protocolar com documentação incompleta.",
  },
  {
    q: "E se o registo simplesmente não existir?",
    a: "Acontece — incêndios, arquivos perdidos, paróquias extintas. Nesse caso dizemo-lo com franqueza e avaliamos que outras provas a lei admite para a situação.",
  },
];

export const metadata: Metadata = buildMetadata({
  path: content.routePath,
  title: content.title,
  description: content.description,
  ogType: content.ogType,
});

export default function DocumentosPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd({
          "@context": "https://schema.org",
          "@type": "LegalService",
          name: "Busca de Documentos Portugueses e Pesquisa Genealógica",
          description: content.description,
          url: "https://viannalegal.com.br/documentos",
          areaServed: ["PT", "BR"],
          serviceType: "Pesquisa Genealógica e Busca Documental",
          provider: { "@type": "Organization", name: "ViannaLegal" },
        })}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(faqSchema(FAQ))} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          breadcrumbSchema([
            { name: "Início", path: "/" },
            { name: "Documentos", path: content.routePath },
          ])
        )}
      />

      {/* Hero */}
      <section className="bg-primary text-primary-foreground">
        <div className="container-width py-14 sm:py-16">
          <p className="eyebrow !text-gold">Busca documental</p>
          <h1 className="max-w-3xl font-display text-4xl font-bold leading-tight sm:text-5xl">
            {content.h1}
          </h1>
          <p className="mt-5 max-w-2xl text-[16px] leading-relaxed text-primary-foreground/80">
            Quando os documentos do seu ascendente português não estão em casa, nós
            localizamos. Com formação em paleografia e acesso directo aos arquivos
            portugueses.
          </p>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex min-h-[50px] items-center gap-2 rounded-lg bg-gold px-7 font-bold text-primary transition-all hover:-translate-y-0.5 hover:shadow-gold"
          >
            Avaliar a minha busca
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

      {/* Por que isto decide o processo */}
      <section className="container-width py-14">
        <div className="rounded-xl border border-gold/40 bg-gold/10 p-7">
          <AlertTriangle className="mb-3 h-6 w-6 text-gold-dark" aria-hidden="true" />
          <h2 className="font-display text-2xl text-primary">
            É aqui que a maioria dos processos de neto trava
          </h2>
          <p className="mt-3 max-w-3xl leading-relaxed text-muted-foreground">
            Todo o processo de descendência começa no mesmo sítio: o registo do ascendente
            português. Sem essa certidão não há cadeia, não há pedido, não há fila. Muitas
            famílias desistem por assumir que o documento se perdeu — quando na maioria dos
            casos ele existe, está num arquivo paroquial e só precisa de ser encontrado e
            lido.
          </p>
        </div>
      </section>

      {/* Os dois serviços */}
      <section className="container-width pb-14">
        <p className="eyebrow text-center">Dois caminhos</p>
        <h2 className="text-center font-display text-3xl text-primary sm:text-[34px]">
          Busca de documentos ou pesquisa genealógica?
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {SERVICOS.map((s) => (
            <div key={s.titulo} className="rounded-xl border border-border bg-card p-7">
              <s.icon className="mb-4 h-7 w-7 text-gold" aria-hidden="true" />
              <h3 className="font-display text-xl text-primary">{s.titulo}</h3>
              <p className="mt-1 text-[14px] text-gold-dark">{s.quando}</p>
              <p className="mt-4 leading-relaxed text-muted-foreground">{s.desc}</p>
              <ul className="mt-5 space-y-2">
                {s.pontos.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-[14px]">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                    <span className="text-foreground/90">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Paleografia */}
      <section className="bg-muted/60 py-14">
        <div className="container-width grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div>
            <p className="eyebrow">O diferencial</p>
            <h2 className="font-display text-3xl text-primary sm:text-[34px]">
              Paleografia: ler o que já quase ninguém lê
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Os registos portugueses anteriores ao século XX estão escritos em caligrafia
              antiga, muitas vezes ilegível para quem não tem formação. A ViannaLegal tem
              formação em paleografia, o que permite interpretar correctamente certidões de
              baptismo, casamento e óbito de séculos passados — e extrair delas a informação
              exacta que o IRN vai exigir.
            </p>
            <p className="mt-4 rounded-lg border-l-[3px] border-gold pl-4 text-[14.5px] leading-relaxed text-muted-foreground">
              Registos anteriores a 1911 estão frequentemente em paróquias e arquivos
              distritais. A partir de 1911, com o registo civil obrigatório, muitos estão
              digitalizados.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card p-7">
            <ScrollText className="mb-4 h-6 w-6 text-gold" aria-hidden="true" />
            <h3 className="font-display text-lg text-primary">O que localizamos</h3>
            <dl className="mt-4 space-y-4">
              {LOCALIZAMOS.map(([t, d]) => (
                <div key={t}>
                  <dt className="text-[14.5px] font-semibold text-foreground">{t}</dt>
                  <dd className="mt-0.5 text-[13.5px] leading-relaxed text-muted-foreground">
                    {d}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section className="container-width py-14">
        <p className="eyebrow">Como funciona</p>
        <h2 className="font-display text-3xl text-primary sm:text-[34px]">
          Do que a família se lembra até à certidão em mãos
        </h2>

        <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PASSOS.map((p, i) => (
            <li key={p.titulo} className="rounded-xl border border-border bg-card p-6">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary font-display text-sm font-bold text-primary-foreground">
                {i + 1}
              </span>
              <h3 className="mt-4 font-display text-[16px] leading-snug text-primary">
                {p.titulo}
              </h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-muted-foreground">
                {p.desc}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* Caso real */}
      <section className="bg-muted/60 py-14">
        <figure className="container-width max-w-3xl text-center">
          <Quote className="mx-auto h-8 w-8 text-gold/60" aria-hidden="true" />
          <blockquote className="mt-5 font-display text-xl leading-relaxed text-primary sm:text-2xl">
            Encontraram registos do meu bisavô de 1890 que nem a minha família sabia que
            existiam. Sem essa busca documental, o processo teria sido impossível.
          </blockquote>
          <figcaption className="mt-6 text-[14px] text-muted-foreground">
            <span className="font-semibold text-foreground">Roberto Mendes</span> · Porto
            Alegre, RS
            <span className="mt-2 block">
              <span className="rounded-full bg-gold/15 px-3 py-1 text-[12.5px] font-semibold text-gold-dark">
                Registo localizado em arquivo histórico
              </span>
            </span>
          </figcaption>
        </figure>
      </section>

      {/* FAQ */}
      <section className="container-width py-14">
        <p className="eyebrow">Dúvidas frequentes</p>
        <h2 className="font-display text-3xl text-primary sm:text-[34px]">
          Perguntas sobre a busca documental
        </h2>
        <div className="mt-8 space-y-3">
          {FAQ.map((f) => (
            <details
              key={f.q}
              className="group rounded-xl border border-border bg-card px-6 py-4"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-primary marker:hidden">
                {f.q}
                <span className="text-gold transition-transform group-open:rotate-180" aria-hidden="true">
                  ▾
                </span>
              </summary>
              <p className="mt-4 border-t border-border pt-4 leading-relaxed text-muted-foreground">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-width pb-16">
        <div className="rounded-xl border border-gold/40 bg-gold/10 px-7 py-8 text-center">
          <FileCheck className="mx-auto mb-3 h-7 w-7 text-gold-dark" aria-hidden="true" />
          <h2 className="font-display text-2xl text-primary">
            Diga-nos o que a família sabe. Nós dizemos se dá para encontrar.
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-[15px] text-muted-foreground">
            A avaliação de viabilidade não tem custo. Se o registo não existir, dizemos.
          </p>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex min-h-[50px] items-center gap-2 rounded-lg bg-gold px-7 font-bold text-primary transition-all hover:-translate-y-0.5 hover:shadow-gold"
          >
            Avaliar a minha busca
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </section>
    </main>
  );
}
