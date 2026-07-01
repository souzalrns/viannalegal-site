import { Star, Quote, Shield, Award, CheckCircle } from 'lucide-react';

const testimonials = [
  {
    name: 'Mariana Santos',
    location: 'São Paulo, SP',
    text: 'Eu e meus dois filhos recebemos a cidadania em 9 meses. A Kathia avisava cada movimentação — nunca fiquei no escuro sobre o andamento do processo.',
    rating: 5,
    service: 'Filhos de Português',
    result: 'Aprovado em 9 meses',
  },
  {
    name: 'Carlos Eduardo Lima',
    location: 'Belo Horizonte, MG',
    text: 'Achava que sem documentos do meu avô seria impossível. A ViannaLegal localizou a certidão em Portugal e conduziu todo o processo. Hoje tenho dupla cidadania.',
    rating: 5,
    service: 'Neto de Português',
    result: 'Aprovado com busca documental',
  },
  {
    name: 'Henrique Silva',
    location: 'Florianópolis, SC',
    text: 'A transcrição de casamento ficou pronta em 2 meses. Agora seguimos com o processo de cidadania da minha esposa, já sabendo exactamente o que esperar.',
    rating: 5,
    service: 'Transcrição de Casamento',
    result: 'Concluído em 2 meses',
  },
  {
    name: 'Roberto Mendes',
    location: 'Porto Alegre, RS',
    text: 'Encontraram registros do meu bisavô de 1890 que nem a minha família sabia que existiam. Sem essa busca documental, o processo teria sido impossível.',
    rating: 5,
    service: 'Busca de Documentos',
    result: 'Registo localizado em arquivo histórico',
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
        <div
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-gold font-medium text-sm uppercase tracking-wider mb-4 block">
            Depoimentos
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Casos reais,{' '}
            <span className="text-primary">resultados comprovados</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Resultados reais, com prazos reais. Veja o que aconteceu depois que essas
            famílias decidiram dar o primeiro passo.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-card rounded-2xl p-6 shadow-subtle border border-border/50 relative ${
                index < 2 ? 'lg:col-span-2' : ''
              }`}
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-gold/20">
                <Quote className="w-8 h-8" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>

              {/* Result badge */}
              <div className="inline-block text-xs font-semibold text-portugal-green bg-portugal-green/10 px-2.5 py-1 rounded-full mb-3">
                {testimonial.result}
              </div>

              {/* Text */}
              <p className="text-foreground text-sm mb-4 leading-relaxed">"{testimonial.text}"</p>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-foreground text-sm">{testimonial.name}</div>
                  <div className="text-muted-foreground text-xs">{testimonial.location}</div>
                </div>
                <div className="text-xs text-gold bg-gold/10 px-2 py-1 rounded-full">
                  {testimonial.service}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          <div className="flex items-center gap-3 bg-muted/50 px-4 py-4 rounded-xl">
            <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center shrink-0">
              <span className="text-gold font-bold text-lg">+99%</span>
            </div>
            <div className="text-sm">
              <div className="font-semibold text-foreground">Histórico de Aprovações</div>
              <div className="text-muted-foreground text-xs">Consistente em 10 anos</div>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-muted/50 px-4 py-4 rounded-xl">
            <div className="w-12 h-12 bg-portugal-green/10 rounded-full flex items-center justify-center shrink-0">
              <Award className="w-6 h-6 text-portugal-green" />
            </div>
            <div className="text-sm">
              <div className="font-semibold text-foreground">Advogados OA</div>
              <div className="text-muted-foreground text-xs">Ordem dos Advogados</div>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-muted/50 px-4 py-4 rounded-xl">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <div className="text-sm">
              <div className="font-semibold text-foreground">Segurança LGPD</div>
              <div className="text-muted-foreground text-xs">Dados protegidos</div>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-muted/50 px-4 py-4 rounded-xl">
            <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center shrink-0">
              <CheckCircle className="w-6 h-6 text-gold" />
            </div>
            <div className="text-sm">
              <div className="font-semibold text-foreground">Atualizado 2026</div>
              <div className="text-muted-foreground text-xs">Lei da Nacionalidade</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
