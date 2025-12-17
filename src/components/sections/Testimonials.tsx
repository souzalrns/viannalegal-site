import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Mariana Santos',
    location: 'São Paulo, SP',
    text: 'Processo rápido e totalmente transparente. Em menos de 1 ano, eu e meus filhos já tínhamos a cidadania portuguesa. A equipe da ViannaLegal foi excepcional em todas as etapas!',
    rating: 5,
    service: 'Cidadania por Descendência',
  },
  {
    name: 'Carlos Eduardo Lima',
    location: 'Rio de Janeiro, RJ',
    text: 'Meu avô era português e eu achava que seria impossível conseguir a cidadania. A ViannaLegal encontrou todos os documentos necessários e me guiou em cada passo.',
    rating: 5,
    service: 'Cidadania para Netos',
  },
  {
    name: 'Ana Paula Ferreira',
    location: 'Belo Horizonte, MG',
    text: 'Atendimento humanizado e profissional. Sempre me mantiveram informada sobre o andamento do processo. Hoje já tenho meu passaporte português!',
    rating: 5,
    service: 'Cidadania por Casamento',
  },
  {
    name: 'Roberto Mendes',
    location: 'Curitiba, PR',
    text: 'A pesquisa genealógica que fizeram foi impressionante. Descobriram registros do meu bisavô que eu nem sabia que existiam. Muito profissionais!',
    rating: 5,
    service: 'Pesquisa Genealógica',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export function Testimonials() {
  return (
    <section id="depoimentos" className="section-padding bg-background">
      <div className="container-width">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-gold font-medium text-sm uppercase tracking-wider mb-4 block">
            Depoimentos
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            O que nossos{' '}
            <span className="text-primary">clientes dizem</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Mais de 2.000 famílias já realizaram o sonho da cidadania europeia com nossa assessoria.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-card rounded-2xl p-8 shadow-subtle border border-border/50 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-gold/20">
                <Quote className="w-10 h-10" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-muted-foreground text-sm">{testimonial.location}</div>
                </div>
                <div className="text-xs text-gold bg-gold/10 px-3 py-1 rounded-full">
                  {testimonial.service}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-wrap justify-center gap-6 md:gap-12"
        >
          <div className="flex items-center gap-3 bg-muted/50 px-6 py-4 rounded-xl">
            <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
              <span className="text-gold font-bold text-lg">98%</span>
            </div>
            <div className="text-sm">
              <div className="font-semibold text-foreground">Taxa de Aprovação</div>
              <div className="text-muted-foreground">Processos deferidos</div>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-muted/50 px-6 py-4 rounded-xl">
            <div className="w-12 h-12 bg-portugal-green/10 rounded-full flex items-center justify-center">
              <span className="text-portugal-green font-bold text-lg">OA</span>
            </div>
            <div className="text-sm">
              <div className="font-semibold text-foreground">Advogados Registrados</div>
              <div className="text-muted-foreground">Ordem dos Advogados</div>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-muted/50 px-6 py-4 rounded-xl">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <span className="text-primary font-bold text-lg">🔒</span>
            </div>
            <div className="text-sm">
              <div className="font-semibold text-foreground">Segurança LGPD</div>
              <div className="text-muted-foreground">Dados protegidos</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
