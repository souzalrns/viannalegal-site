/**
 * Footer do lab — paridade com src/components/sections/Footer.tsx (Vite).
 * Inclui o Livro de Reclamações electrónico, obrigatório para prestadores
 * de serviços em Portugal.
 */
const vias = [
  { href: "/cidadania-portuguesa/filhos-menores", label: "Filhos menores" },
  { href: "/cidadania-portuguesa/filhos-maiores", label: "Filhos maiores" },
  { href: "/cidadania-portuguesa/netos", label: "Netos" },
  { href: "/cidadania-portuguesa/bisnetos", label: "Bisnetos" },
  { href: "/cidadania-portuguesa/conjuges", label: "Cônjuges" },
  { href: "/cidadania-portuguesa/residencia", label: "Residência" },
  { href: "/cidadania-portuguesa/transcricao-casamento", label: "Transcrição de casamento" },
];

const site = [
  { href: "/cidadania-portuguesa", label: "Cidadania portuguesa" },
  { href: "/quanto-custa", label: "Quanto custa" },
  { href: "/documentos", label: "Documentos" },
  { href: "/confirmacao-de-sentenca-estrangeira", label: "Confirmação de sentença estrangeira" },
  { href: "/prazos-e-acompanhamento", label: "Prazos e acompanhamento" },
  { href: "/lei-da-nacionalidade-2026", label: "Lei da Nacionalidade 2026" },
  { href: "/quiz-elegibilidade", label: "Quiz de elegibilidade" },
  { href: "/blog", label: "Blog" },
  { href: "/quem-somos", label: "Quem somos" },
  { href: "/contato", label: "Contacto" },
];

const legal = [
  { href: "/politica-privacidade", label: "Política de Privacidade" },
  { href: "/termos-uso", label: "Termos de Uso" },
  { href: "/informacoes-legais", label: "Informações Legais" },
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <nav aria-label="Vias de cidadania">
        <h2>Vias de cidadania</h2>
        <ul>
          {vias.map((l) => (
            <li key={l.href}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>
      </nav>

      <nav aria-label="Navegação do site">
        <h2>Site</h2>
        <ul>
          {site.map((l) => (
            <li key={l.href}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>
      </nav>

      <nav aria-label="Informação legal">
        <h2>Legal</h2>
        <ul>
          {legal.map((l) => (
            <li key={l.href}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
          <li>
            <a href="https://www.livroreclamacoes.pt" target="_blank" rel="noopener noreferrer">
              Livro de Reclamações
            </a>
          </li>
        </ul>
      </nav>

      <nav aria-label="Redes sociais">
        <h2>Redes</h2>
        <ul>
          <li>
            <a href="https://instagram.com/kathiavianna.adv" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </li>
          <li>
            <a href="https://facebook.com/kathiavianna.advogada" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
          </li>
          <li>
            <a href="https://pt.linkedin.com/in/kathiavianna" target="_blank" rel="noopener noreferrer">
              LinkedIn de Kathia Vianna
            </a>
          </li>
        </ul>
      </nav>

      <p>
        ViannaLegal — Kathia Vianna, Advogada inscrita na Ordem dos Advogados de Portugal,
        n.º 56666p
      </p>
      <p className="footer-note">
        Conteúdo informativo — não constitui aconselhamento jurídico para um caso concreto.
      </p>
    </footer>
  );
}
