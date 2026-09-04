const WHATSAPP =
  "https://wa.me/351913134260?text=" +
  encodeURIComponent(
    "Olá! Vim pelo site e quero avaliar o meu caso para cidadania portuguesa."
  );

const VIAS = [
  { href: "/cidadania-portuguesa/filhos-menores", label: "Filhos menores" },
  { href: "/cidadania-portuguesa/filhos-maiores", label: "Filhos maiores" },
  { href: "/cidadania-portuguesa/netos", label: "Netos" },
  { href: "/cidadania-portuguesa/bisnetos", label: "Bisnetos" },
  { href: "/cidadania-portuguesa/conjuges", label: "Cônjuges" },
  { href: "/cidadania-portuguesa/residencia", label: "Residência" },
  { href: "/cidadania-portuguesa/transcricao-casamento", label: "Transcrição de casamento" },
];

const SITE = [
  { href: "/cidadania-portuguesa", label: "Cidadania portuguesa" },
  { href: "/quanto-custa", label: "Quanto custa" },
  { href: "/documentos", label: "Documentos" },
  { href: "/prazos-e-acompanhamento", label: "Prazos e acompanhamento" },
  { href: "/lei-da-nacionalidade-2026", label: "Lei da Nacionalidade 2026" },
  { href: "/confirmacao-de-sentenca-estrangeira", label: "Confirmação de sentença estrangeira" },
  { href: "/quiz-elegibilidade", label: "Quiz de elegibilidade" },
  { href: "/blog", label: "Artigos" },
  { href: "/quem-somos", label: "Quem somos" },
  { href: "/contato", label: "Contacto" },
];

const LEGAL = [
  { href: "/politica-privacidade", label: "Política de Privacidade" },
  { href: "/termos-uso", label: "Termos de Uso" },
  { href: "/informacoes-legais", label: "Informações Legais" },
];

function Col({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <nav aria-label={title}>
      <h2 className="mb-3 font-display text-sm font-semibold uppercase tracking-wider text-gold">
        {title}
      </h2>
      <ul className="space-y-2 text-sm">
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className="text-primary-foreground/80 transition-colors hover:text-gold"
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
    <footer className="mt-20 bg-primary text-primary-foreground">
      {/* Bloco de conversão, como no site original */}
      <div className="border-b border-primary-foreground/10">
        <div className="container-width py-12 text-center">
          <h2 className="font-display text-2xl sm:text-3xl">
            Pronto para conquistar a sua cidadania europeia?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-primary-foreground/80">
            Avalie o seu caso, sem compromisso, em poucos minutos.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center rounded-lg bg-gradient-gold px-6 py-3
                         font-semibold text-primary shadow-gold transition-transform hover:scale-[1.03]"
            >
              Avaliar o meu caso no WhatsApp
            </a>
            <a
              href="/quiz-elegibilidade"
              className="inline-flex min-h-[44px] items-center rounded-lg border border-gold/60 px-6 py-3
                         font-semibold text-gold transition-colors hover:bg-gold/10"
            >
              Fazer o quiz de elegibilidade
            </a>
          </div>
        </div>
      </div>

      <div className="container-width grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-xl font-bold">
            Vianna<span className="text-gold">Legal</span>
          </p>
          <p className="mt-3 text-sm text-primary-foreground/80">
            Cidadania portuguesa conduzida por advogada inscrita na Ordem dos Advogados
            de Portugal, cédula n.º 56666p, com actuação presencial nas conservatórias.
          </p>
          <p className="mt-4 text-sm">
            <a href={WHATSAPP} className="text-gold hover:underline">
              +351 913 134 260
            </a>
          </p>
          <div className="mt-4 flex gap-4 text-sm">
            <a
              href="https://pt.linkedin.com/in/kathiavianna"
              target="_blank"
              rel="noopener noreferrer me"
              className="text-primary-foreground/80 hover:text-gold"
            >
              LinkedIn
            </a>
            <a
              href="https://instagram.com/kathiavianna.adv"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/80 hover:text-gold"
            >
              Instagram
            </a>
            <a
              href="https://facebook.com/kathiavianna.advogada"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/80 hover:text-gold"
            >
              Facebook
            </a>
          </div>
        </div>

        <Col title="Vias de cidadania" links={VIAS} />
        <Col title="Site" links={SITE} />
        <div>
          <Col title="Legal" links={LEGAL} />
          <div className="mt-6 rounded-lg border border-gold/35 bg-gold/10 p-4">
            <p className="font-display text-[13px] font-bold uppercase tracking-wide text-gold">
              Não sabe se tem direito?
            </p>
            <p className="mt-1.5 text-[13px] text-primary-foreground/75">
              Responda a 5 perguntas e descubra o seu caminho.
            </p>
            <a
              href="/quiz-elegibilidade"
              className="mt-3 inline-flex items-center gap-1.5 text-[13px] font-semibold text-gold hover:underline"
            >
              Fazer o quiz
              <span aria-hidden="true">→</span>
            </a>
          </div>
          <p className="mt-3 text-sm">
            <a
              href="https://www.livroreclamacoes.pt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/80 transition-colors hover:text-gold"
            >
              Livro de Reclamações
            </a>
          </p>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="container-width py-6 text-center text-xs text-primary-foreground/60">
          <p>© 2026 ViannaLegal. Todos os direitos reservados.</p>
          <p className="mt-1">
            Conteúdo informativo — não constitui aconselhamento jurídico para um caso concreto.
          </p>
        </div>
      </div>
    </footer>
  );
}
