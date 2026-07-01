import { ArrowRight, CheckCircle, Sparkles, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { SITE_CONFIG, waUrl } from '@/config/site';
import kvLogo from '@/assets/kv-logo.png';
import kvLogoWebp from '@/assets/kv-logo.webp';

const trustMarkers = [
  '+1.200+ casos acompanhados',
  'Processo 100% online',
  '10 anos de experiência em Portugal',
];

export function Hero() {
  return (
    <section className="relative flex items-center overflow-hidden bg-primary">
      <div className="w-full max-w-7xl mx-auto pl-4 md:pl-8 pr-8 md:pr-16 pt-28 pb-12 md:pt-32 md:pb-16">
        <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-0">

          {/* Conteúdo — 58% */}
          <div className="flex-1 lg:pr-12">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/30 px-4 py-2 rounded-full text-gold mb-5">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Atualizado com a Lei Orgânica 1/2026</span>
            </div>

            {/* ViannaLegal — nome em destaque como na OG image */}
            <p className="font-display text-2xl font-bold mb-1">
              <span className="text-primary-foreground">Vianna</span><span className="text-gold">Legal</span>
            </p>

            {/* Tagline dourada */}
            <p className="text-gold/80 italic font-display text-lg mb-4">
              Cidadania Portuguesa — A herança que nenhum inventário divide.
            </p>

            {/* H1 */}
            <h1 className="font-display text-5xl md:text-6xl font-bold text-primary-foreground leading-tight mb-5">
              A herança que nenhum<br />
              <span className="text-gold">inventário divide.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-base md:text-lg text-primary-foreground/75 mb-4 leading-relaxed">
              A dupla cidadania é o presente que você deixa para os filhos,
              passando de geração em geração — e nunca perde o valor.
            </p>

            {/* Urgency */}
            <div className="flex items-center gap-2 text-sm font-medium mb-7">
              <Clock className="w-4 h-4 text-gold shrink-0" />
              <span className="text-primary-foreground/70">A fila do IRN não para.{' '}</span>
              <strong className="text-gold">Quem entra hoje, sai na frente.</strong>
            </div>

            {/* Trust markers — dourado */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 mb-9">
              {trustMarkers.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-gold shrink-0" />
                  <span className="text-sm text-primary-foreground/80">{item}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                variant="gold"
                size="xl"
                className="shadow-gold text-base font-bold"
                onClick={() => window.open(waUrl(SITE_CONFIG.whatsappMessages.default), '_blank', 'noopener,noreferrer')}
              >
                Falar com especialista
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="xl" asChild className="border-white/25 text-white hover:bg-white/10">
                <Link to="/quiz">Veja se tem direito</Link>
              </Button>
            </div>
          </div>

          {/* Logo KV — 42%, só desktop */}
          <div className="hidden lg:flex items-center justify-center lg:w-[42%] shrink-0">
            <picture>
              <source srcSet={kvLogoWebp} type="image/webp" />
              <img
                src={kvLogo}
                alt="Kathia Vianna — Advogada Especialista em Nacionalidade Portuguesa"
                className="w-full opacity-90"
                loading="eager"
                fetchPriority="high"
                width={420}
                height={420}
              />
            </picture>
          </div>

        </div>
      </div>
    </section>
  );
}
