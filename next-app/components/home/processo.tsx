import { PASSOS } from "@/content/home-data";

const WHATSAPP =
  "https://wa.me/351913134260?text=" +
  encodeURIComponent("Olá! Vim pelo site e quero avaliar o meu caso para cidadania portuguesa.");

export function Processo() {
  return (
    <section className="container-width py-16 sm:py-20">
      <p className="eyebrow">Como trabalhamos</p>
      <h2 className="font-display text-3xl text-primary sm:text-4xl">
        Como funciona, do primeiro contacto à aprovação
      </h2>

      <ol className="mt-12 space-y-0">
        {PASSOS.map((p, i) => (
          <li key={p.title} className="relative flex gap-6 pb-10 last:pb-0">
            {i < PASSOS.length - 1 && (
              <span
                aria-hidden="true"
                className="absolute left-[19px] top-11 h-[calc(100%-2.75rem)] w-px bg-border"
              />
            )}
            <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary font-display text-sm font-bold text-primary-foreground">
              {i + 1}
            </span>
            <div className="pt-1.5">
              <h3 className="font-display text-lg text-primary">{p.title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{p.description}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-4 rounded-xl border border-gold/40 bg-gold/10 px-7 py-7 text-center">
        <p className="font-display text-lg text-primary">
          Sem compromisso. A fila do IRN começa quando protocola.
        </p>
        <p className="mx-auto mt-2 max-w-xl text-[15px] text-muted-foreground">
          Fale agora com a Kathia e descubra se o seu caso já está pronto para avançar.
        </p>
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex min-h-[48px] items-center gap-2 rounded-lg bg-gold px-7 font-bold text-primary transition-all hover:-translate-y-0.5 hover:shadow-gold"
        >
          Falar com especialista
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}
