import { motion } from 'framer-motion';
import { 
  Plane, 
  GraduationCap, 
  Briefcase, 
  Heart, 
  Building, 
  Shield, 
  TrendingUp, 
  Globe2 
} from 'lucide-react';

const benefits = [
  {
    icon: Plane,
    title: 'Acesso a 185 Países',
    description: 'Passaporte português oferece livre acesso a 185 países sem necessidade de visto.',
  },
  {
    icon: Globe2,
    title: 'União Europeia',
    description: 'Liberdade de circular, residir e trabalhar em qualquer país da União Europeia.',
  },
  {
    icon: Briefcase,
    title: 'Oportunidades de Trabalho',
    description: 'Acesso ao mercado de trabalho europeu sem restrições ou autorizações especiais.',
  },
  {
    icon: GraduationCap,
    title: 'Educação de Qualidade',
    description: 'Acesso a universidades europeias reconhecidas mundialmente.',
  },
  {
    icon: Heart,
    title: 'Saúde Pública',
    description: 'Sistema de saúde público eficiente e abrangente em toda a Europa.',
  },
  {
    icon: Shield,
    title: 'Segurança e Estabilidade',
    description: 'Portugal é um dos países mais seguros do mundo, com baixos índices de criminalidade.',
  },
  {
    icon: TrendingUp,
    title: 'Facilidade de Investimento',
    description: 'Incentivos fiscais atrativos e acesso facilitado ao mercado europeu.',
  },
  {
    icon: Building,
    title: 'Financiamento Imobiliário',
    description: 'Financiamentos imobiliários em Portugal com custos até 3x menores que no Brasil.',
  },
];

export function Benefits() {
  return (
    <section id="vantagens" className="section-padding bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gold rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold rounded-full blur-3xl" />
      </div>

      <div className="container-width relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-gold font-medium text-sm uppercase tracking-wider mb-4 block">
            Vantagens
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Por que ter a{' '}
            <span className="text-gold">Cidadania Portuguesa?</span>
          </h2>
          <p className="text-primary-foreground/80 text-lg">
            Descubra as inúmeras vantagens de se tornar um cidadão europeu e 
            transforme sua vida e de sua família.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center mb-4 group-hover:bg-gold/30 transition-colors">
                  <Icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">
                  {benefit.title}
                </h3>
                <p className="text-primary-foreground/70 text-sm">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
