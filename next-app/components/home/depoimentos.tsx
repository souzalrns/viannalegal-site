import { Quote } from "lucide-react";
import { DEPOIMENTOS } from "@/content/home-data";

export function Depoimentos() {
  return (
    <section className="bg-muted/60 py-16 sm:py-20">
      <div className="container-width">
        <p className="eyebrow text-center">Casos reais</p>
        <h2 className="text-center font-display text-3xl text-primary sm:text-[34px]">
          Quem já passou por isto
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-[15px] text-muted-foreground">
          Resultados com prazos reais. O que aconteceu depois de estas famílias darem o
          primeiro passo.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {DEPOIMENTOS.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-xl border border-border bg-card p-6"
            >
              {/* O resultado vem primeiro: é o que faz ler o resto. */}
              <div className="mb-4 flex items-start justify-between gap-3">
                <span className="rounded-md bg-primary/10 px-3 py-1.5 text-[12.5px] font-semibold text-primary">
                  {t.result}
                </span>
                <Quote className="h-6 w-6 shrink-0 text-gold/50" aria-hidden="true" />
              </div>

              <blockquote className="flex-1 text-[15px] leading-relaxed text-foreground/90">
                {t.text}
              </blockquote>

              <figcaption className="mt-5 flex flex-wrap items-end justify-between gap-3 border-t border-border pt-4">
                <div>
                  <p className="font-display text-[15px] text-primary">{t.name}</p>
                  <p className="mt-0.5 text-[13px] text-muted-foreground">{t.location}</p>
                </div>
                <span className="rounded-full bg-gold/15 px-3 py-1 text-[12px] font-semibold text-gold-dark">
                  {t.service}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
