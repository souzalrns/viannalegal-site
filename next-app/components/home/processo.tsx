import { PASSOS } from "@/content/home-data";

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
    </section>
  );
}
