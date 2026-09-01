/**
 * Header do lab — portado de src/components/layout/Header.tsx (Vite),
 * convertido para Server Component: mesma marca, mesma navegação, mesmo CTA,
 * sem react-router nem estado de scroll.
 * O menu mobile usa <details>, que não precisa de JavaScript.
 */
const WA_URL =
  "https://wa.me/351913134260?text=" +
  encodeURIComponent(
    "Olá! Vim pelo site e quero avaliar o meu caso para cidadania portuguesa."
  );

const navItems = [
  { label: "Quem Somos", href: "/quem-somos" },
  { label: "Cidadania", href: "/cidadania-portuguesa" },
  { label: "Lei 2026", href: "/lei-da-nacionalidade-2026" },
  { label: "Documentos", href: "/documentos" },
  { label: "Artigos", href: "/blog" },
  { label: "Quiz — Descubra seu direito", href: "/quiz-elegibilidade", highlight: true },
  { label: "Contato", href: "/contato" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-medium">
      <div className="container-width">
        <div className="flex items-center justify-between h-16 md:h-20 gap-4">
          <a href="/" className="font-display text-xl md:text-2xl font-semibold tracking-tight shrink-0">
            Vianna<span className="text-gold">Legal</span>
          </a>

          <nav aria-label="Navegação principal" className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={
                  item.highlight
                    ? "text-sm font-semibold text-gold hover:text-gold-light transition-colors"
                    : "text-sm font-medium text-primary-foreground/90 hover:text-gold transition-colors"
                }
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center rounded-lg bg-gold px-4 py-2 text-sm font-semibold text-primary shadow-gold hover:bg-gold-light transition-colors"
          >
            Avaliar o meu caso
          </a>

          <details className="lg:hidden relative">
            <summary className="list-none cursor-pointer p-2 -mr-2" aria-label="Abrir menu">
              <span className="block w-6 h-0.5 bg-current mb-1.5" />
              <span className="block w-6 h-0.5 bg-current mb-1.5" />
              <span className="block w-6 h-0.5 bg-current" />
            </summary>
            <nav
              aria-label="Navegação principal (móvel)"
              className="absolute right-0 top-full mt-2 w-64 rounded-lg bg-primary shadow-elevated border border-primary-foreground/10 py-2"
            >
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={
                    "block px-4 py-2.5 text-sm hover:bg-primary-foreground/10 transition-colors " +
                    (item.highlight ? "font-semibold text-gold" : "text-primary-foreground/90")
                  }
                >
                  {item.label}
                </a>
              ))}
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2.5 text-sm font-semibold text-gold border-t border-primary-foreground/10 mt-1"
              >
                Avaliar o meu caso no WhatsApp
              </a>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
