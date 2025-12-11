import { MapPin, Phone, Mail, Instagram, Facebook, Linkedin } from 'lucide-react';

const footerLinks = {
  services: [
    { label: 'Cidadania Portuguesa', href: '#portuguesa' },
    { label: 'Cidadania Italiana', href: '#italiana' },
    { label: 'Pesquisa Genealógica', href: '#pesquisa' },
    { label: 'Transcrição de Documentos', href: '#transcricao' },
  ],
  company: [
    { label: 'Quem Somos', href: '#quem-somos' },
    { label: 'Blog', href: '#blog' },
    { label: 'Lojas', href: '#lojas' },
    { label: 'Contato', href: '#contato' },
  ],
  legal: [
    { label: 'Política de Privacidade', href: '#privacidade' },
    { label: 'Termos de Uso', href: '#termos' },
  ],
};

const socialLinks = [
  { icon: Instagram, href: 'https://instagram.com/cidadaolegal', label: 'Instagram' },
  { icon: Facebook, href: 'https://facebook.com/cidadaolegal', label: 'Facebook' },
  { icon: Linkedin, href: 'https://linkedin.com/company/cidadaolegal', label: 'LinkedIn' },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-width">
        {/* Main Footer */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="font-display text-2xl font-bold mb-4">
              Cidadão<span className="text-gold">Legal</span>
            </div>
            <p className="text-primary-foreground/70 text-sm mb-6">
              Assessoria especializada em cidadania portuguesa e italiana. 
              Transformamos o sonho da cidadania europeia em realidade.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-gold/20 transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-display font-semibold mb-4">Serviços</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-gold transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-display font-semibold mb-4">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-gold transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-display font-semibold mb-4">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <span className="text-primary-foreground/70 text-sm">
                  São Paulo, SP - Brasil
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold shrink-0" />
                <a
                  href="tel:+5511999999999"
                  className="text-primary-foreground/70 hover:text-gold transition-colors text-sm"
                >
                  +55 (11) 99999-9999
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold shrink-0" />
                <a
                  href="mailto:contato@cidadaolegal.com.br"
                  className="text-primary-foreground/70 hover:text-gold transition-colors text-sm"
                >
                  contato@cidadaolegal.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-primary-foreground/60 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Cidadão Legal | Todos os direitos reservados | CNPJ: 53.535.923/0001-04
          </div>
          <div className="flex gap-6">
            {footerLinks.legal.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-primary-foreground/60 hover:text-gold transition-colors text-sm"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="pb-8">
          <p className="text-primary-foreground/40 text-xs text-center">
            A Cidadão Legal é uma empresa de consultoria especializada em orientar e assessorar clientes no processo 
            de obtenção de documentos relacionados à nacionalidade. Não possui autoridade para julgar ou realizar 
            processos de cidadania, tampouco possui qualquer vínculo com consulados ou órgãos governamentais.
          </p>
        </div>
      </div>
    </footer>
  );
}
