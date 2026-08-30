import type { Metadata } from "next";
import { getPage } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { organizationSchema, jsonLd } from "@/lib/schema";

const content = getPage("home");

export const metadata: Metadata = buildMetadata({
  path: content.routePath,
  title: content.title,
  description: content.description,
  ogType: content.ogType,
});

const WA_URL = "https://wa.me/351913134260";
const WA_MSG = encodeURIComponent("Olá! Vim pelo site e quero avaliar o meu caso para cidadania portuguesa.");

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(organizationSchema())} />

      <section className="hero-section">
        <img src="/images/hero-lisbon.webp" alt="" className="hero-bg" />
        <div className="hero-inner">
          <span className="hero-badge">✨ Atualizado com a Lei Orgânica 1/2026</span>
          <p className="hero-eyebrow">Cidadania Portuguesa — A herança que nenhum inventário divide.</p>
          <h1>
            A herança que nenhum <span className="gold">inventário divide.</span>
          </h1>
          <p className="hero-sub">
            A dupla cidadania é o presente que você deixa para os filhos, passando de geração em
            geração — e nunca perde o valor.
          </p>
          <div className="hero-trust">
            <span>1.200+ casos acompanhados</span>
            <span>Actuação presencial em Portugal</span>
            <span>10 anos de experiência</span>
          </div>
          <div className="hero-ctas">
            <a href={`${WA_URL}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer" className="btn-gold">
              Falar com especialista →
            </a>
            <a href="/quiz-elegibilidade" className="btn-outline-light">
              Veja se tem direito
            </a>
          </div>
        </div>
      </section>

      <main>
        <div className="answer-block">{content.answerBlock}</div>
        <article dangerouslySetInnerHTML={{ __html: content.bodyHtml }} />
      </main>
    </>
  );
}
