/**
 * Footer do lab — portado de src/components/sections/Footer.tsx (Vite).
 * Mesmas três colunas, mesmo CTA, mesmas redes e o Livro de Reclamações
 * (obrigatório para prestadores de serviços em Portugal).
 */
const WA_URL =
  "https://wa.me/351913134260?text=" +
  encodeURIComponent(
    "Olá! Vim pelo site e quero avaliar o meu caso para cidadania portuguesa."
  );

const services = [
  { label: "Cidadania para Netos", href: "/cidadania-portuguesa/netos" },
  { label: "Cidadania para Filhos", href: "/cidadania-portuguesa/filhos-menores" },
  { label: "Cidadania para Bisnetos", href: "/cidadania-portuguesa/bisnetos" },
  { label: "Cidadania por Casamento", href: "/cidadania-portuguesa/conjuges" },
  { label: "Naturalização por Residência", href: "/cidadania-portuguesa/residencia" },
  { label: "Transcrição de Casamento", href: "/cidadania-portuguesa/transcricao-casamento" },
  { label: "Confirmação de Sentença Estrangeira", href: "/confirmacao-de-sentenca-estrangeira" },
  { label: "Pesquisa Genealógica", href: "/documentos" },
];

const company = [
  { label: "Quem Somos", href: "/quem-somos" },
  { label: "Lei da Nacionalidade 2026", href: "/lei-da-nacionalidade-2026" },
  { label: "Quiz — Descubra seu direito", href: "/quiz-elegibilidade" },
  { label: "Quanto Custa", href: "/quanto-custa" },
  { label: "Prazos e Acompanhamento", href: "/prazos-e-acompanhamento" },
  { label: "Artigos", href: "/blog" },
  { label: "Fale Conosco", href: "/contato" },
];

const legal = [
  { label: "Política de Privacidade", href: "/politica-privacidade" },
  { label: "Termos de Uso", href: "/termos-uso" },
  { label: "Informações Legais", href: "/informacoes-legais" },
  { label: "Livro de Reclamações", href: "https://www.livroreclamacoes.pt", external: true },
];

function Column({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string; external?: boolean }[];
}) {
  return (
    <nav aria-label={title}>
      <h2 className="font-display text-base font-semibold mb-4 text-gold">{title}</h2>
      <ul className="space-y-2.5">
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="text-sm text-primary-foreground/80 hover:text-gold transition-colors"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground mt-16">
      <div className="container-width">
        <div className="py-10 border-b border-primary-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h2 className="font-display text-xl font-semibold mb-1">
              Pronto para conquistar sua cidadania europeia?
            </h2>
            <p className="text-sm text-primary-foreground/75">
              Avalie o seu caso, sem compromisso, em poucos minutos no WhatsApp.
            </p>
          </div>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center rounded-lg bg-gold px-6 py-3 text-sm font-semibold text-primary shadow-gold hover:bg-gold-light transition-colors"
          >
            Avaliar o meu caso no WhatsApp
          </a>
        </div>

        <div className="py-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-xl font-semibold mb-3">
              Vianna<span className="text-gold">Legal</span>
            </p>
            <p className="text-sm text-primary-foreground/75 mb-4">
              Kathia Vianna, advogada inscrita na Ordem dos Advogados de Portugal,
              cédula n.º 56666p. Actuação presencial em Conservatórias e Tribunais.
            </p>
            <p className="text-sm text-primary-foreground/75">Porto, Portugal</p>
            <a
              href="https://wa.me/351913134260"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gold hover:text-gold-light transition-colors"
            >
              +351 913 134 260
            </a>
            <div className="flex gap-4 mt-4 text-sm">
              <a href="https://instagram.com/kathiavianna.adv" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-gold transition-colors">Instagram</a>
              <a href="https://facebook.com/kathiavianna.advogada" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-gold transition-colors">Facebook</a>
              <a href="https://pt.linkedin.com/in/kathiavianna" target="_blank" rel="noopener noreferrer me" className="text-primary-foreground/80 hover:text-gold transition-colors">LinkedIn</a>
            </div>
          </div>

          <Column title="Serviços" links={services} />
          <Column title="Empresa" links={company} />
          <Column title="Legal" links={legal} />
        </div>

        <div className="py-6 border-t border-primary-foreground/10 text-center">
          <p className="text-xs text-primary-foreground/60">
            © 2026 ViannaLegal. Todos os direitos reservados.
          </p>
          <p className="text-xs text-primary-foreground/60 mt-1">
            Conteúdo informativo — não constitui aconselhamento jurídico para um caso concreto.
          </p>
        </div>
      </div>
    </footer>
  );
}
