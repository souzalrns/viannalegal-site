import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { jsonLd } from "@/lib/schema";
import { QuizApp } from "@/components/quiz-app";

export const metadata: Metadata = buildMetadata({
  path: "/quiz-elegibilidade",
  title: "Quiz — Tenho Direito à Cidadania Portuguesa? | ViannaLegal",
  description:
    "Responda 5 perguntas e saiba em 2 minutos se tem direito à cidadania portuguesa e qual é o caminho mais adequado para o seu perfil. Actualizado com a Lei Orgânica 1/2026.",
  ogType: "website",
});

export default function QuizPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Quiz de Elegibilidade para Cidadania Portuguesa",
    description:
      "Ferramenta interactiva que ajuda a identificar a via mais adequada de cidadania portuguesa conforme o perfil do utilizador.",
    url: "https://viannalegal.com.br/quiz-elegibilidade",
  };

  return (
    <main style={{ maxWidth: "640px" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(schema)} />
      <h1>Você tem direito à cidadania portuguesa?</h1>
      <div className="answer-block">
        Responda algumas perguntas e descubra qual é o caminho mais adequado para o seu caso —
        leva cerca de 2 minutos. O resultado é indicativo; a Kathia Vianna confirma o seu caso
        específico depois.
      </div>
      <QuizApp />
    </main>
  );
}
