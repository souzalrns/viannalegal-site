import { ChevronDown } from "lucide-react";
import { FAQ_HOME } from "@/content/home-data";

const WHATSAPP =
  "https://wa.me/351913134260?text=" +
  encodeURIComponent("Olá! Tenho uma dúvida sobre cidadania portuguesa que não está no site.");

// Acordeão sem JavaScript: <details>/<summary> nativos.
// Mantém a página como Server Component e o conteúdo visível aos crawlers.
export function Faq() {
  return (
    <section className="container-width grid gap-10 py-16 sm:py-20 lg:grid-cols-[0.9fr_1.6fr] lg:items-start">
      {/* Coluna fixa com o título e a saída para quem não encontra a resposta */}
      <div className="lg:sticky lg:top-28">
        <p className="eyebrow">Dúvidas frequentes</p>
        <h2 className="font-display text-3xl leading-tight text-primary sm:text-[34px]">
          Principais questões sobre cidadania portuguesa
        </h2>
        <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
          Respostas às perguntas mais comuns do processo, actualizadas com a Lei
          Orgânica 1/2026.
        </p>

        <div className="mt-6 rounded-xl border border-border bg-card p-6">
          <p className="font-display text-[16px] text-primary">
            A sua dúvida não está aqui?
          </p>
          <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">
            Cada caso tem particularidades. Fale com a Kathia e receba uma resposta
            sobre o seu caso, não uma resposta genérica.
          </p>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-gold px-5 text-[14px] font-bold text-primary transition-all hover:-translate-y-0.5 hover:shadow-gold"
          >
            Falar com especialista
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>

      <div className="space-y-9">
        {FAQ_HOME.map((grupo) => (
          <div key={grupo.categoria}>
            <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-gold-dark">
              {grupo.categoria}
            </h3>
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
    </section>
  );
}
