import { ShieldCheck, MapPin, Clock, ArrowRight } from "lucide-react";

const WHATSAPP =
  "https://wa.me/351913134260?text=" +
  encodeURIComponent("Olá! Vim pelo site e quero avaliar o meu caso para cidadania portuguesa.");

const MARCAS = [
  { icon: ShieldCheck, label: "1.200+ casos acompanhados" },
  { icon: MapPin, label: "Actuação presencial em Portugal" },
  { icon: Clock, label: "Desde 2016 em Portugal" },
];

export function Hero({ h1, answer }: { h1: string; answer: string }) {
  return (
    <section className="relative overflow-hidden bg-gradient-hero text-primary-foreground">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-gold/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-gold/5 blur-3xl"
      />

      <div className="container-width relative py-16 sm:py-24">
        <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-medium tracking-wide text-gold">
          Actualizado com a Lei Orgânica 1/2026
        </p>

        <h1 className="max-w-3xl text-4xl font-bold leading-[1.1] sm:text-5xl lg:text-6xl">
          {h1}
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/85">
          {answer}
        </p>

        <div className="mt-9 flex flex-wrap gap-3">
          <a
            href="/quiz-elegibilidade"
            className="inline-flex min-h-[52px] items-center gap-2 rounded-xl bg-gradient-gold px-7 text-base font-semibold text-primary shadow-gold transition-transform hover:scale-[1.03]"
          >
            Descobrir o meu caminho
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[52px] items-center rounded-xl border border-primary-foreground/25 px-7 text-base font-semibold transition-colors hover:border-gold hover:text-gold"
          >
            Falar com a Kathia
          </a>
        </div>

        <ul className="mt-12 grid gap-4 border-t border-primary-foreground/15 pt-8 sm:grid-cols-3">
          {MARCAS.map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-center gap-3 text-sm text-primary-foreground/80">
              <Icon className="h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
              {label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
