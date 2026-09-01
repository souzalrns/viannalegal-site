import { ChevronDown } from "lucide-react";
import { FAQ_HOME } from "@/content/home-data";

// Acordeão sem JavaScript: <details>/<summary> nativos.
// Mantém a página como Server Component e o conteúdo visível aos crawlers.
export function Faq() {
  return (
    <section className="container-width py-16 sm:py-20">
      <h2 className="font-display text-3xl text-primary sm:text-4xl">Perguntas frequentes</h2>

      <div className="mt-12 space-y-10">
        {FAQ_HOME.map((grupo) => (
          <div key={grupo.categoria}>
            <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-gold-dark">
              {grupo.categoria}
            </h3>
            <div className="space-y-3">
              {grupo.perguntas.map((p) => (
                <details
                  key={p.q}
                  className="group rounded-xl border border-border bg-card px-6 py-4 shadow-sm open:shadow-md"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-primary marker:hidden">
                    {p.q}
                    <ChevronDown
                      className="h-5 w-5 shrink-0 text-gold transition-transform group-open:rotate-180"
                      aria-hidden="true"
                    />
                  </summary>
                  <div
                    className="mt-4 border-t border-border pt-4 leading-relaxed text-muted-foreground [&_a]:font-medium [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-2"
                    dangerouslySetInnerHTML={{ __html: p.a }}
                  />
                </details>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
