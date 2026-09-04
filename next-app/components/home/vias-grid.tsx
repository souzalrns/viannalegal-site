import { Clock } from "lucide-react";
import { MODALIDADES } from "@/content/home-data";
import { formatPrazo } from "@/content/prazos-data";

// Mesmo desenho do site original: etiqueta colorida em cima à esquerda,
// emoji à direita, e o prazo numa linha compacta no rodapé do cartão.
export function ViasGrid() {
  return (
    <section className="container-width py-16 sm:py-20">
      <p className="eyebrow text-center">Caminhos disponíveis</p>
      <h2 className="text-center font-display text-3xl text-primary sm:text-[34px]">
        Qual é o seu vínculo com Portugal?
      </h2>
      <p className="mx-auto mt-3 max-w-2xl text-center text-[15px] text-muted-foreground">
        Cada situação tem um caminho diferente — com prazos, documentos e estratégias
        distintas. Clique na sua situação para ver todos os detalhes.
      </p>

      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {MODALIDADES.map((m) => {
          const prazo = m.prazoKey ? formatPrazo(m.prazoKey) : m.prazoFallback;
          return (
            <a
              key={m.title}
              href={m.href}
              className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-gold/60 hover:shadow-md"
            >
              <div className="mb-4 flex items-start justify-between gap-3">
                <span
                  className="rounded-md px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-white"
                  style={{ backgroundColor: m.tagColor }}
                >
                  {m.tag}
                </span>
                <span className="text-2xl leading-none" aria-hidden="true">
                  {m.emoji}
                </span>
              </div>

              <h3 className="font-display text-[19px] leading-snug text-primary">{m.title}</h3>
              <p className="mt-2.5 flex-1 text-[14px] leading-relaxed text-muted-foreground">
                {m.desc}
              </p>

              <div className="mt-5 flex items-center justify-between gap-3 border-t border-border pt-3.5">
                <span className="flex items-center gap-1.5 text-[12.5px] text-muted-foreground">
                  <Clock className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
                  {m.prazoLabel}
                </span>
                <span className="text-[13.5px] font-bold text-primary">{prazo}</span>
              </div>
            </a>
          );
        })}
      </div>

      <div className="mt-10 text-center">
        <p className="mb-3 text-[15px] text-muted-foreground">Qual é o seu caso?</p>
        <a
          href="/quiz-elegibilidade"
          className="inline-flex min-h-[48px] items-center gap-2 rounded-lg bg-primary px-7 font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-primary/90"
        >
          Descobrir o meu caminho
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}
