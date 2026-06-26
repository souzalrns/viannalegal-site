import { ArrowRight, GraduationCap, Scale, MapPin, FileCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import consultantImage from '@/assets/consultant.jpg';
import consultantImageWebp from '@/assets/consultant.webp';
import { SITE_CONFIG, waUrl } from '@/config/site';
import { useAnalytics } from '@/hooks/useAnalytics';

const credentials = [
  {
    icon: Scale,
    title: 'Ordem dos Advogados de Portugal',
    description: 'Inscrição activa na OA. Representação de estrangeiros em processos de nacionalidade portuguesa em Tribunais e Conservatórias.',
  },
  {
    icon: GraduationCap,
    title: 'Universidade de Lisboa + Portucalense',
    description: 'Licenciada pela Universidade de Lisboa. Formação especializada em Registos e Notariado pela Universidade Portucalense.',
  },
  {
    icon: MapPin,
    title: 'Porto, Portugal — desde 2016',
    description: 'Actua presencialmente em Portugal, em Conservatórias e Tribunais. Conhece o IRN por dentro — não por descrição.',
  },
  {
    icon: FileCheck,
    title: '10 anos · 2.000+ processos',
    description: 'Especialista em nacionalidade portuguesa, escrituras, registos, análise de contratos e representação de investidores estrangeiros em Portugal.',
  },
];

export function About() {
  const { trackWhatsAppClick } = useAnalytics();

  return (
    <section id="quem-somos" className="section-padding">
      <div className="container-width">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Image Side */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-elevated">
              <picture>
                <source srcSet={consultantImageWebp} type="image/webp" />
                <img
                  src={consultantImage}
                  alt="Kathia Vianna, advogada especialista em cidadania portuguesa para brasileiros, inscrita na Ordem dos Advogados de Portugal, Porto"
                  className="w-full h-[500px] object-cover"
                  loading="lazy"
                  width={800}
                  height={1000}
                />
              </picture>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <p className="font-display text-2xl font-bold">Kathia Vianna</p>
                <p className="text-sm text-white/80">Advogada · Ordem dos Advogados de Portugal</p>
                <p className="text-xs text-white/60 mt-1">Porto, Portugal · 10 anos de actuação presencial</p>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <span className="text-gold font-medium text-sm uppercase tracking-wider mb-4 block">
              Quem trata do seu processo
            </span>

            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Kathia Vianna —{' '}
              <span className="text-primary">advogada especialista em cidadania portuguesa</span>
            </h2>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              A Kathia Vianna actua presencialmente em Portugal, em Conservatórias e
              Tribunais onde os processos correm. Conhece o IRN por dentro,
              antecipa os problemas antes que apareçam e acompanha cada família
              do primeiro contacto até à certidão de nascimento portuguesa.
            </p>

            {/* Credenciais em cards */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {credentials.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="flex gap-3 p-4 rounded-xl border border-border bg-card hover:border-primary/30 transition-colors"
                  >
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-0.5 text-sm leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <Button
              variant="gold"
              size="lg"
              onClick={() => {
                trackWhatsAppClick('about');
                window.open(
                  waUrl(SITE_CONFIG.whatsappMessages.about),
                  '_blank',
                  'noopener,noreferrer'
                );
              }}
            >
              Começar a construir essa herança
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
