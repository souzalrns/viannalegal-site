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
      <div className="relative container-width pt-32 pb-20 md:pt-36 md:pb-24 px-6 md:px-12 lg:px-20 mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Conteúdo esquerdo */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/30 px-4 py-2 rounded-full text-gold mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Atualizado com a Lei Orgânica 1/2026</span>
            </div>

            {/* H1 */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-primary-foreground leading-tight mb-5">
              A herança que nenhum<br />
              <span className="text-gold">inventário divide.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-primary-foreground/85 mb-4 leading-relaxed max-w-xl">
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
            <div className="flex flex-wrap gap-x-6 gap-y-2 mb-10">
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

          {/* Logo KV direita — apenas desktop */}
          <div className="hidden lg:flex flex-col items-center justify-center">
            <img
              src={kvLogo}
              alt="Kathia Vianna — Advogada Especialista em Nacionalidade Portuguesa"
              className="w-96 xl:w-[420px] opacity-90 drop-shadow-lg"
              loading="eager"
            />

          </div>

        </div>
      </div>
    </section>
  );
}
