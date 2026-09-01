import { Phone } from "lucide-react";

const WHATSAPP =
  "https://wa.me/351913134260?text=" +
  encodeURIComponent(
    "Olá! Vim pelo site e quero avaliar o meu caso para cidadania portuguesa."
  );

const NAV = [
  { href: "/cidadania-portuguesa", label: "Cidadania" },
  { href: "/quanto-custa", label: "Quanto Custa" },
  { href: "/prazos-e-acompanhamento", label: "Prazos" },
  { href: "/documentos", label: "Documentos" },
  { href: "/lei-da-nacionalidade-2026", label: "Lei 2026" },
  { href: "/blog", label: "Artigos" },
  { href: "/quem-somos", label: "Quem Somos" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-md">
      <div className="container-width">
        <nav
          aria-label="Navegação principal"
          className="flex flex-wrap items-center justify-between gap-3 py-4"
        >
          <a href="/" className="shrink-0 font-display text-xl font-bold tracking-tight">
            Vianna<span className="text-gold">Legal</span>
          </a>

          <div className="order-3 flex w-full flex-wrap items-center gap-x-5 gap-y-2 text-sm lg:order-2 lg:w-auto">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="py-1 text-primary-foreground/90 transition-colors hover:text-gold"
              >
                {item.label}
              </a>
            ))}
          </div>

          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="order-2 inline-flex min-h-[44px] shrink-0 items-center gap-2 rounded-lg bg-gradient-gold px-4 py-2
                       text-sm font-semibold text-primary shadow-gold transition-transform hover:scale-[1.03] lg:order-3"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            Avaliar o meu caso
          </a>
        </nav>
      </div>
    </header>
  );
}
