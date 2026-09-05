import type { Metadata } from "next";
import {
  MessageCircle,
  Clock,
  ShieldCheck,
  MapPin,
  Scale,
  ArrowRight,
} from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, jsonLd } from "@/lib/schema";
import { ContactForm } from "@/components/contact-form";

const WHATSAPP =
  "https://wa.me/351913134260?text=" +
  encodeURIComponent("Olá! Vim pelo site e quero avaliar o meu caso para cidadania portuguesa.");

const PROVA = [
  { icon: ShieldCheck, label: "1.200+ casos acompanhados" },
  { icon: Scale, label: "Advogada inscrita na OA, n.º 56666p" },
  { icon: MapPin, label: "Actuação presencial em Portugal desde 2016" },
];

export const metadata: Metadata = buildMetadata({
  path: "/contato",
  title: "Contacto — ViannaLegal | Cidadania Portuguesa",
  description:
    "Fale com a ViannaLegal sobre o seu processo de cidadania portuguesa. A Kathia Vianna responde pessoalmente em até 24 horas, por e-mail ou WhatsApp.",
  ogType: "website",
});

export default function ContatoPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          breadcrumbSchema([
            { name: "Início", path: "/" },
            { name: "Contacto", path: "/contato" },
          ])
        )}
      />

      {/* Hero */}
      <section className="bg-primary text-primary-foreground">
        <div className="container-width py-14">
          <p className="eyebrow !text-gold">Entre em contacto</p>
          <h1 className="max-w-3xl font-display text-4xl font-bold leading-tight sm:text-5xl">
            A sua cidadania começa com uma conversa
          </h1>
          <p className="mt-5 max-w-2xl text-[16px] leading-relaxed text-primary-foreground/80">
            A Kathia Vianna analisa o seu caso pessoalmente e responde em até 24 horas em
            dias úteis. Não é um formulário que cai numa caixa genérica.
          </p>

          <ul className="mt-8 flex flex-wrap gap-x-7 gap-y-2.5 border-t border-primary-foreground/15 pt-7">
            {PROVA.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-2 text-[13.5px] text-primary-foreground/80"
              >
                <Icon className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-width grid gap-8 py-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
        {/* Formulário */}
        <div>
          <h2 className="font-display text-2xl text-primary">Conte-nos o seu caso</h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            Quanto mais souber sobre o familiar português — nome, terra, aproximação de
            datas — mais precisa é a resposta. Mas se souber pouco, escreva na mesma:
            começar com pouco é o mais comum.
          </p>

          <div className="mt-7">
            <ContactForm />
          </div>

          {/* O que acontece depois — tira a incerteza de carregar em enviar */}
          <div className="mt-8 rounded-xl border border-border bg-muted/60 p-6">
            <h3 className="font-display text-[16px] text-primary">O que acontece depois</h3>
            <ol className="mt-4 space-y-3 text-[14px] text-muted-foreground">
              <li className="flex gap-3">
                <span className="font-display font-bold text-gold">1.</span>
                A Kathia lê o seu caso e identifica que via se aplica.
              </li>
              <li className="flex gap-3">
                <span className="font-display font-bold text-gold">2.</span>
                Recebe a resposta com os documentos necessários, o prazo realista e em que
                fila do IRN o processo vai entrar.
              </li>
              <li className="flex gap-3">
                <span className="font-display font-bold text-gold">3.</span>
                Só depois disso, e se fizer sentido para si, se fala em proposta.
              </li>
            </ol>
            <p className="mt-4 text-[13px] text-muted-foreground">
              Esta primeira análise não tem custo nem compromisso.
            </p>
          </div>
        </div>

        {/* Canal directo */}
        <aside className="rounded-xl bg-primary p-8 text-primary-foreground lg:sticky lg:top-28">
          <h2 className="font-display text-xl">Prefere falar agora?</h2>
          <p className="mt-3 text-[15px] leading-relaxed text-primary-foreground/80">
            O WhatsApp é o canal mais rápido. A maioria das mensagens tem resposta no mesmo
            dia, em horário comercial de Portugal.
          </p>

          <dl className="mt-7 space-y-5">
            <div className="flex items-start gap-3">
              <MessageCircle className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
              <div>
                <dt className="text-[13px] text-primary-foreground/65">WhatsApp</dt>
                <dd className="font-semibold">+351 913 134 260</dd>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
              <div>
                <dt className="text-[13px] text-primary-foreground/65">Horário</dt>
                <dd className="font-semibold">Segunda a sexta, 9h às 18h</dd>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
              <div>
                <dt className="text-[13px] text-primary-foreground/65">Localização</dt>
                <dd className="font-semibold">Portugal</dd>
              </div>
            </div>
          </dl>

          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex min-h-[50px] w-full items-center justify-center gap-2 rounded-lg bg-gold px-6 font-bold text-primary transition-all hover:-translate-y-0.5 hover:shadow-gold"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Conversar no WhatsApp agora
          </a>

          <p className="mt-6 border-t border-primary-foreground/15 pt-5 text-[13.5px] leading-relaxed text-primary-foreground/75">
            Ainda não sabe se tem direito?{" "}
            <a href="/quiz-elegibilidade" className="font-semibold text-gold hover:underline">
              Faça o quiz em 2 minutos
              <ArrowRight className="ml-1 inline h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </p>
        </aside>
      </section>
    </main>
  );
}
