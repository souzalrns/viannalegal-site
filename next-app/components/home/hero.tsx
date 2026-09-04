import Image from "next/image";
import { Clock, ShieldCheck, MapPin, Sparkles, ArrowRight } from "lucide-react";

const WHATSAPP =
  "https://wa.me/351913134260?text=" +
  encodeURIComponent("Olá! Vim pelo site e quero avaliar o meu caso para cidadania portuguesa.");

const MARCAS = [
  { icon: ShieldCheck, label: "1.200+ casos acompanhados" },
  { icon: MapPin, label: "Processo com actuação presencial em Portugal" },
  { icon: Clock, label: "Em Portugal desde 2016" },
];

export function Hero({ h1 }: { h1: string }) {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="container-width grid items-center gap-10 py-14 lg:grid-cols-[1.15fr_0.85fr] lg:py-16">
        <div>
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/35 bg-gold/15 px-4 py-1.5 text-[13px] font-semibold text-gold">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            Actualizado com a Lei Orgânica 1/2026
          </p>

          <p className="font-display text-[22px] font-bold">
            Vianna<span className="text-gold">Legal</span>
          </p>
          <p className="mb-4 font-display text-[15px] italic text-gold/85">
            Cidadania Portuguesa — A herança que nenhum inventário divide.
          </p>

          <h1 className="max-w-xl font-display text-[38px] font-bold leading-[1.13] sm:text-[46px]">
            {h1}
          </h1>

          <p className="mt-4 max-w-lg text-[16px] leading-relaxed text-primary-foreground/80">
            A dupla cidadania é o presente que se deixa para os filhos, passando de geração
            em geração — e nunca perde o valor.
          </p>

          <p className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-1 text-[14px]">
            <Clock className="h-4 w-4 text-gold" aria-hidden="true" />
            <span className="text-primary-foreground/70">A fila do IRN não para.</span>
            <strong className="text-gold">Quem entra hoje, sai à frente.</strong>
          </p>

          <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
            {MARCAS.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-1.5 text-[13px] text-primary-foreground/75"
              >
                <Icon className="h-3.5 w-3.5 shrink-0 text-gold" aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[50px] items-center gap-2 rounded-lg bg-gold px-7 font-bold text-primary transition-all hover:-translate-y-0.5 hover:shadow-gold"
            >
              Falar com especialista
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="/quiz-elegibilidade"
              className="inline-flex min-h-[50px] items-center rounded-lg border-[1.5px] border-primary-foreground/30 px-7 font-semibold transition-colors hover:border-gold hover:text-gold"
            >
              Veja se tem direito
            </a>
          </div>
        </div>

        {/* Monograma KV, como no site original */}
        <div className="flex flex-col items-center justify-center text-center">
          <Image
            src="/kv-logo.webp"
            alt="Kathia Vianna"
            width={260}
            height={200}
            priority
            className="h-auto w-[220px] max-w-full"
          />
          <p className="mt-4 font-display text-[15px] text-gold">Advogada Especialista</p>
          <p className="font-display text-[15px] text-gold">Nacionalidade Portuguesa</p>
        </div>
      </div>
    </section>
  );
}
