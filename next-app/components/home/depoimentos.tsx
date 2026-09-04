import { Quote } from "lucide-react";
import { DEPOIMENTOS } from "@/content/home-data";

export function Depoimentos() {
  return (
    <section className="bg-muted/60 py-16 sm:py-20">
      <div className="container-width">
        <p className="eyebrow">Casos reais</p>
        <h2 className="text-center font-display text-3xl text-primary sm:text-4xl">
          Quem já passou por isto
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {DEPOIMENTOS.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-xl border border-border bg-card p-7 shadow-sm"
            >
              <Quote className="h-7 w-7 text-gold/60" aria-hidden="true" />
              <blockquote className="mt-4 flex-1 leading-relaxed text-foreground/90">
                {t.text}
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-4">
                <p className="font-display text-base text-primary">{t.name}</p>
                <p className="mt-1 text-sm text-muted-foreground">{t.location}</p>
                <p className="mt-2 inline-block rounded-full bg-gold/15 px-3 py-1 text-xs font-semibold text-gold-dark">
                  {t.service} · {t.result}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
