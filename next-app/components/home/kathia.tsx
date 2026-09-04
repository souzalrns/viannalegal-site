import { Scale, GraduationCap, MapPin, FileCheck, ArrowRight } from "lucide-react";
import { CREDENCIAIS } from "@/content/home-data";

const ICONS = { Scale, GraduationCap, MapPin, FileCheck } as const;

export function Kathia() {
  return (
    <section className="bg-muted/60 py-16 sm:py-20">
      <div className="container-width">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="eyebrow">Quem conduz</p>
            <h2 className="font-display text-3xl text-primary sm:text-4xl">
              Quem trata do seu processo
            </h2>
            <p className="mt-5 text-lg font-medium text-foreground">
              Kathia Vianna — advogada especialista em cidadania portuguesa.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Actua presencialmente em Portugal, nas Conservatórias e Tribunais onde os
              processos correm. Conhece o IRN por dentro, antecipa os problemas antes que
              apareçam e acompanha cada família do primeiro contacto até à certidão de
              nascimento portuguesa.
            </p>
            <a
              href="/quem-somos"
              className="mt-7 inline-flex items-center gap-1.5 font-semibold text-primary underline underline-offset-4 hover:text-gold"
            >
              Conhecer a Kathia Vianna
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2">
            {CREDENCIAIS.map((c) => {
              const Icon = ICONS[c.icon as keyof typeof ICONS] ?? Scale;
              return (
                <li key={c.title} className="rounded-xl border border-border bg-card p-6 shadow-sm">
                  <Icon className="mb-3 h-6 w-6 text-gold" aria-hidden="true" />
                  <h3 className="font-display text-base text-primary">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {c.description}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
