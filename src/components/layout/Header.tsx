import { useState, useEffect, useCallback } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { SITE_CONFIG } from '@/config/site';

const navItems = [
  { label: 'Quem Somos',           href: '/#quem-somos'         },
  { label: 'Cidadania Portuguesa', href: '/cidadania-portuguesa' },
  { label: 'Busca de Documentos',  href: '/busca-documentos'     },
  { label: 'Blog',                 href: '/blog'                  },
  { label: 'Quiz — Descubra seu direito', href: '/quiz', highlight: true },
  { label: 'Contato',              href: '/#contato'              },
];

const WA_URL = SITE_CONFIG.whatsapp.url;
const WA_MSG = encodeURIComponent('Olá! Vim pelo site e quero avaliar o meu caso para cidadania portuguesa.');

export function Header() {
  const [isScrolled, setIsScrolled]         = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location   = useLocation();
  const navigate   = useNavigate();
  const isHomePage = location.pathname === '/';
  const isDark     = isScrolled || !isHomePage;

  useEffect(() => {
    const fn = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const scrollTo = useCallback((hash: string) => {
    const id = hash.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      navigate('/');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 350);
    }
  }, [navigate]);

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderItem = (item: typeof navItems[0], mobile = false) => {
    const cls = cn(
      'font-medium transition-colors duration-300 hover:text-gold',
      mobile
        ? 'text-foreground py-3 min-h-[44px] flex items-center text-base'
        : 'text-sm',
      !mobile && (isDark ? 'text-foreground' : 'text-primary-foreground'),
      item.highlight && 'text-gold font-semibold'
    );
    if (item.href.startsWith('/#')) {
      return (
        <button
          key={item.label}
          className={cls}
          onClick={() => { scrollTo(item.href.replace('/', '')); if (mobile) setMobileMenuOpen(false); }}
        >
          {item.label}
        </button>
      );
    }
    return (
      <Link
        key={item.label}
        to={item.href}
        className={cls}
        onClick={() => { if (mobile) setMobileMenuOpen(false); }}
      >
        {item.label}
      </Link>
    );
  };

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled ? 'bg-card/95 backdrop-blur-md shadow-medium py-3' : 'bg-transparent py-5'
    )}>
      <div className="container-width">
        <nav aria-label="Navegação principal" className="flex items-center justify-between">

          {/* Logo */}
          <Link to="/" onClick={handleLogoClick} aria-label="ViannaLegal, página inicial"
            className="shrink-0">
            <span className={cn(
              'font-display text-2xl font-bold transition-colors duration-300',
              isDark ? 'text-primary' : 'text-primary-foreground'
            )}>
              Vianna<span className="text-gold">Legal</span>
            </span>
          </Link>

          {/* Desktop nav — gap-5 para caber melhor */}
          <div className="hidden lg:flex items-center gap-5 mx-4">
            {navItems.map((item) => renderItem(item))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4 shrink-0">
            <a
              href={`${WA_URL}?text=${WA_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'flex items-center gap-1.5 text-xs transition-colors hover:text-gold whitespace-nowrap',
                isDark ? 'text-muted-foreground' : 'text-primary-foreground/70'
              )}
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Já sou cliente</span>
            </a>
            <Button
              variant={isDark ? 'gold' : 'heroOutline'}
              size="sm"
              className="whitespace-nowrap"
              onClick={() => window.open(`${WA_URL}?text=${WA_MSG}`, '_blank', 'noopener,noreferrer')}
            >
              Avaliar o meu caso
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-3 -mr-1 min-h-[44px] min-w-[44px] flex items-center justify-center"
            onClick={() => setMobileMenuOpen(o => !o)}
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen
              ? <X className={cn('w-6 h-6', isDark ? 'text-foreground' : 'text-primary-foreground')} />
              : <Menu className={cn('w-6 h-6', isDark ? 'text-foreground' : 'text-primary-foreground')} />
            }
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-card border-t border-border">
          <div className="container-width py-6 flex flex-col gap-2">
            {navItems.map((item) => renderItem(item, true))}
            <div className="pt-4 border-t border-border flex flex-col gap-3">
              <Button
                variant="gold"
                className="w-full"
                onClick={() => { window.open(`${WA_URL}?text=${WA_MSG}`, '_blank', 'noopener,noreferrer'); setMobileMenuOpen(false); }}
              >
                Avaliar o meu caso
              </Button>
              <a
                href={`${WA_URL}?text=${WA_MSG}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-gold transition-colors py-1"
              >
                <Phone className="w-4 h-4" />
                Já sou cliente
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
