export function SiteHeader() {
  return (
    <header className="site-header">
      <nav aria-label="Navegação principal">
        <span className="brand">
          Vianna<span>Legal</span>
        </span>
        <div className="nav-links">
          <a href="/">Início</a>
          <a href="/cidadania-portuguesa">Cidadania Portuguesa</a>
          <a href="/quanto-custa">Quanto Custa</a>
          <a href="/quem-somos">Quem Somos</a>
        </div>
      </nav>
    </header>
  );
}
