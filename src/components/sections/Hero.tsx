import { ArrowRight, CheckCircle, Sparkles, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { SITE_CONFIG, waUrl } from '@/config/site';
import kvLogo from '@/assets/kv-logo.png';

const trustMarkers = [
  '+2.000 famílias atendidas',
  'Processo 100% online',
  '10 anos de experiência em Portugal',
];

export function Hero() {
  return (
    <section className="relative flex items-center overflow-hidden bg-primary">
      <div className="w-full max-w-7xl mx-auto px-8 md:px-16 pt-32 pb-20 md:pt-36 md:pb-24">
        <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-0">

          {/* Conteúdo — 60% */}
          <div className="flex-1 lg:pr-16">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/30 px-4 py-2 rounded-full text-gold mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Atualizado com a Lei Orgânica 1/2026</span>
            </div>

            {/* H1 */}
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6">
              A herança que nenhum<br />
              <span className="text-gold">inventário divide.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-primary-foreground/85 mb-4 leading-relaxed">
              A dupla cidadania é o presente que você deixa para os filhos,
              passando de geração em geração. Abrirá portas para você ou
              descendentes que nem imagina — e nunca perde o valor.
            </p>

            {/* Urgency */}
            <div className="flex items-center gap-2 text-gold/90 text-sm font-medium mb-8">
              <Clock className="w-4 h-4 shrink-0" />
              <span>A fila do IRN não para. <strong className="text-gold">Quem entra hoje, sai na frente.</strong></span>
            </div>

            {/* Trust markers */}
            <div className="flex flex-wrap gap-x-8 gap-y-2 mb-10">
              {trustMarkers.map((item) => (
                <div key={item} className="flex items-center gap-2 text-primary-foreground/90">
                  <CheckCircle className="w-4 h-4 text-gold shrink-0" />
                  <span className="text-sm">{item}</span>
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
                Quero deixar essa herança
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="xl" asChild className="border-white/25 text-white hover:bg-white/10">
                <Link to="/quiz">Descobrir se tenho direito</Link>
              </Button>
            </div>
          </div>

          {/* Logo KV — 40%, só desktop */}
          <div className="hidden lg:flex items-center justify-center lg:w-[40%] shrink-0">
            <img
              src={kvLogo}
              alt="Kathia Vianna — Advogada Especialista em Nacionalidade Portuguesa"
              className="w-full max-w-sm xl:max-w-md opacity-90"
              loading="eager"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
