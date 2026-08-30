const WA_URL = "https://wa.me/351913134260";
const WA_MSG = encodeURIComponent("Olá! Vim pelo site e quero avaliar o meu caso para cidadania portuguesa.");

const servicos = [
  { label: "Cidadania para Netos", href: "/cidadania-portuguesa/netos" },
  { label: "Cidadania para Filhos", href: "/cidadania-portuguesa/filhos-menores" },
  { label: "Cidadania para Bisnetos", href: "/cidadania-portuguesa/bisnetos" },
  { label: "Cidadania por Casamento", href: "/cidadania-portuguesa/conjuges" },
  { label: "Pesquisa Genealógica", href: "/documentos" },
  { label: "Transcrição de Casamento", href: "/cidadania-portuguesa/transcricao-casamento" },
];

const empresa = [
  { label: "Quem Somos", href: "/quem-somos" },
  { label: "Quiz — Descubra seu direito", href: "/quiz-elegibilidade", highlight: true },
  { label: "Quanto Custa", href: "/quanto-custa" },
  { label: "Prazos e Acompanhamento", href: "/prazos-e-acompanhamento" },
  { label: "Fale Conosco", href: "/contato" },
];

const legal = [
  { label: "Política de Privacidade", href: "https://viannalegal.com.br/politica-privacidade" },
  { label: "Termos de Uso", href: "https://viannalegal.com.br/termos-uso" },
  { label: "Livro de Reclamações", href: "https://www.livroreclamacoes.pt" },
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-cta-strip">
        <div>
          <h2>Pronto para conquistar sua cidadania europeia?</h2>
          <p>Avalie o seu caso, sem compromisso, em poucos minutos no WhatsApp.</p>
        </div>
        <a href={`${WA_URL}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer" className="btn-gold">
          Avaliar o meu caso no WhatsApp
        </a>
      </div>

      <div className="footer-main">
        <div className="brand-col">
          <p className="brand">
            Vianna<span className="gold">Legal</span>
          </p>
          <p style={{ fontSize: "0.85rem", lineHeight: 1.6, marginBottom: "1rem" }}>
            Assessoria especializada em cidadania portuguesa para brasileiros. Actualizado com a Lei
            Orgânica 1/2026.
          </p>
          <p style={{ fontSize: "0.85rem", marginBottom: "0.35rem" }}>Lisboa, Portugal</p>
          <a href={WA_URL} target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.85rem" }}>
            +351 913 134 260
          </a>
        </div>

        <div>
          <h3>Serviços</h3>
          <ul>
            {servicos.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Empresa</h3>
          <ul>
            {empresa.map((item) => (
              <li key={item.href}>
                <a href={item.href} style={item.highlight ? { color: "var(--gold)", fontWeight: 600 } : undefined}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Legal</h3>
          <ul>
            {legal.map((item) => (
              <li key={item.href}>
                <a href={item.href} target="_blank" rel="noopener noreferrer">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} ViannaLegal. Todos os direitos reservados.</p>
        <p>Este site é informativo e não constitui aconselhamento jurídico.</p>
      </div>
    </footer>
  );
}
