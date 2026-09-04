import { ArrowRight, Baby, Users, GitBranch, Heart, Home, Search, FileText } from "lucide-react";
import { MODALIDADES } from "@/content/home-data";
import { formatPrazo } from "@/content/prazos-data";

const ICONS = { Baby, Users, GitBranch, Heart, Home, Search, FileText } as const;

export function ViasGrid() {
  return (
    <section className="container-width py-16 sm:py-20">
      <p className="eyebrow text-center">Caminhos disponíveis</p>
      <h2 className="text-center font-display text-3xl text-primary sm:text-4xl">
        Qual é o seu vínculo com Portugal?
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
        Cada situação tem um caminho diferente, com prazos, documentos e estratégias distintas.
        Escolha a sua para ver todos os detalhes.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {MODALIDADES.map((m) => {
          const Icon = ICONS[m.icon as keyof typeof ICONS] ?? FileText;
          const prazo = m.prazoKey ? formatPrazo(m.prazoKey) : m.prazoFallback;
          return (
            <a
              key={m.title}
              href={m.href}
              className="group flex flex-col rounded-xl border border-border bg-card p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-gold/50 hover:shadow-lg"
            >
              <div className="mb-5 flex items-start justify-between gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <span className="rounded-full bg-gold/15 px-3 py-1 text-xs font-semibold text-gold-dark">
                  {m.tag}
                </span>
              </div>

              <h3 className="font-display text-xl text-primary">{m.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{m.desc}</p>

              <div className="mt-6 border-t border-border pt-4">
                <p className="text-xs uppercase tracking-wider text-muted-foreground">
                  Prazo indicativo
                </p>
                <p className="mt-1 font-display text-lg text-foreground">{prazo}</p>
                <p className="text-xs text-muted-foreground">{m.prazoLabel}</p>
              </div>

              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors group-hover:text-gold">
                Ver detalhes
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </span>
            </a>
          );
        })}
      </div>

      <p className="mt-10 text-center text-muted-foreground">
        Não sabe em qual se encaixa?{" "}
        <a href="/quiz-elegibilidade" className="font-semibold text-primary underline underline-offset-4 hover:text-gold">
          Responda ao quiz em 2 minutos
        </a>
      </p>
    </section>
  );
}
