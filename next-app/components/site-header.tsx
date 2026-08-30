export function SiteHeader() {
  const waUrl = "https://wa.me/351913134260";
  const waMsg = encodeURIComponent("Olá! Vim pelo site e quero avaliar o meu caso para cidadania portuguesa.");

  return (
    <header className="site-header">
      <div className="header-inner">
        <a href="/" className="brand" aria-label="ViannaLegal, página inicial">
          <img src="/images/kv-logo.webp" alt="" width={32} height={32} />
          Vianna<span className="gold">Legal</span>
        </a>

        <nav aria-label="Navegação principal" className="nav-links">
          <a href="/quem-somos">Quem Somos</a>
          <a href="/cidadania-portuguesa">Cidadania</a>
          <a href="/documentos">Documentos</a>
          <a href="/blog/como-tirar-cidadania-portuguesa">Artigos</a>
          <a href="/quiz-elegibilidade" className="highlight">Quiz — Descubra seu direito</a>
          <a href="/contato">Contato</a>
        </nav>

        <a
          href={`${waUrl}?text=${waMsg}`}
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button"
        >
          Avaliar o meu caso
        </a>
      </div>
    </header>
  );
}
