import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = buildMetadata({
  path: "/contato",
  title: "Contacto — ViannaLegal | Cidadania Portuguesa",
  description:
    "Fale com a ViannaLegal sobre o seu processo de cidadania portuguesa. Resposta em até 24 horas por e-mail ou WhatsApp.",
  ogType: "website",
});

export default function ContatoPage() {
  return (
    <main className="container-width py-10 sm:py-14">
      <h1>Entre em contacto</h1>
      <div className="answer-block">
        Como posso falar com a ViannaLegal? Preencha o formulário abaixo com o seu caso — a Kathia
        Vianna responde pessoalmente em até 24 horas. Para urgências, use o WhatsApp directo.
      </div>

      <h2>WhatsApp</h2>
      <p>
        <a href="https://wa.me/351913134260" target="_blank" rel="noopener noreferrer">
          +351 913 134 260
        </a>{" "}
        — Segunda a sexta, 9h às 18h.
      </p>

      <h2>Formulário</h2>
      <ContactForm />
    </main>
  );
}
