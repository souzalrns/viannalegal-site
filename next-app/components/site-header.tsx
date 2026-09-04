import { Phone } from "lucide-react";

const WHATSAPP =
  "https://wa.me/351913134260?text=" +
  encodeURIComponent(
    "Olá! Vim pelo site e quero avaliar o meu caso para cidadania portuguesa."
  );

const NAV = [
  { href: "/quem-somos", label: "Quem Somos" },
  { href: "/cidadania-portuguesa", label: "Cidadania" },
  { href: "/quanto-custa", label: "Quanto Custa" },
  { href: "/prazos-e-acompanhamento", label: "Prazos" },
  { href: "/documentos", label: "Documentos" },
  { href: "/lei-da-nacionalidade-2026", label: "Lei 2026" },
  { href: "/blog", label: "Artigos" },
  { href: "/quiz-elegibilidade", label: "Quiz — Descubra o seu direito", destaque: true },
  { href: "/contato", label: "Contacto" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-md">
      <div className="container-width">
        <nav
          aria-label="Navegação principal"
          className="flex flex-wrap items-center justify-between gap-x-4 gap-y-3 py-3.5 lg:flex-nowrap"
        >
          <a href="/" className="shrink-0 font-display text-[19px] font-bold tracking-tight">
            Vianna<span className="text-gold">Legal</span>
          </a>

          <div className="order-3 flex w-full flex-wrap items-center gap-x-3 gap-y-2 text-[13px] lg:order-2 lg:w-auto lg:flex-nowrap xl:gap-x-4 xl:text-[13.5px]">
            {NAV.map((item, i) => (
              <span key={item.href} className="flex items-center gap-x-3 whitespace-nowrap xl:gap-x-4">
                {i > 0 && (
                  <span aria-hidden="true" className="hidden h-3.5 w-px bg-primary-foreground/25 lg:block" />
                )}
                <a
                  href={item.href}
                  className={
                    item.destaque
                      ? "py-1 font-semibold text-gold transition-colors hover:text-gold-light"
                      : "py-1 text-primary-foreground/90 transition-colors hover:text-gold"
                  }
                >
                  {item.label}
                </a>
              </span>
            ))}
          </div>

          <div className="order-2 flex shrink-0 items-center gap-4 lg:order-3">
            <a
              href="/contato"
              className="hidden text-[13px] text-primary-foreground/70 transition-colors hover:text-gold sm:inline"
            >
              Já sou cliente
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[42px] items-center gap-2 rounded-lg bg-gold px-4 text-[13.5px]
                         font-bold text-primary transition-all hover:-translate-y-0.5 hover:shadow-gold"
            >
              <Phone className="h-3.5 w-3.5" aria-hidden="true" />
              Avaliar o meu caso
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
