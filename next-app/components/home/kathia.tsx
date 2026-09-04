import Image from "next/image";
import { Scale, GraduationCap, MapPin, FileCheck, ArrowRight } from "lucide-react";
import { CREDENCIAIS } from "@/content/home-data";

const ICONS = { Scale, GraduationCap, MapPin, FileCheck } as const;

const WHATSAPP =
  "https://wa.me/351913134260?text=" +
  encodeURIComponent("Olá Kathia! Vim pelo site e quero avaliar o meu caso.");

export function Kathia() {
  return (
    <section className="bg-muted/60 py-16 sm:py-20">
      <div className="container-width grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        {/* Retrato com legenda sobreposta, como no site original */}
        <figure className="relative overflow-hidden rounded-xl shadow-lg">
          <Image
            src="/consultant.webp"
            alt="Kathia Vianna, advogada inscrita na Ordem dos Advogados de Portugal"
            width={720}
            height={860}
            className="h-[420px] w-full object-cover"
          />
          <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary via-primary/85 to-transparent px-6 pb-5 pt-16 text-primary-foreground">
            <p className="font-display text-lg font-bold">Kathia Vianna</p>
            <p className="mt-0.5 text-[13px] text-primary-foreground/85">
              Advogada · Ordem dos Advogados de Portugal, n.º 56666p
            </p>
            <p className="text-[13px] text-gold">Portugal · actuação presencial desde 2016</p>
          </figcaption>
        </figure>

        <div>
          <p className="eyebrow">Quem trata do seu processo</p>
          <h2 className="font-display text-3xl leading-tight text-primary sm:text-[34px]">
            Kathia Vianna — advogada especialista em cidadania portuguesa
          </h2>

          <p className="mt-4 leading-relaxed text-muted-foreground">
            Actua presencialmente em Portugal, nas Conservatórias e Tribunais onde os
            processos correm. Conhece o IRN por dentro, antecipa os problemas antes que
            apareçam e acompanha cada família do primeiro contacto até à certidão de
            nascimento portuguesa.
          </p>

          <ul className="mt-7 grid gap-4 sm:grid-cols-2">
            {CREDENCIAIS.map((c) => {
              const Icon = ICONS[c.icon as keyof typeof ICONS] ?? Scale;
              return (
                <li key={c.title} className="rounded-xl border border-border bg-card p-5">
                  <Icon className="mb-2.5 h-5 w-5 text-gold" aria-hidden="true" />
                  <h3 className="font-display text-[15px] leading-snug text-primary">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">
                    {c.description}
                  </p>
                </li>
              );
            })}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[48px] items-center gap-2 rounded-lg bg-gold px-6 font-bold text-primary transition-all hover:-translate-y-0.5 hover:shadow-gold"
            >
              Falar com a Kathia
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="/quem-somos"
              className="font-semibold text-primary underline underline-offset-4 hover:text-gold"
            >
              Ver percurso completo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
