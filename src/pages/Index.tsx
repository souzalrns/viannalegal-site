import { Helmet } from 'react-helmet-async';
import { Header } from '@/components/layout/Header';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Process } from '@/components/sections/Process';
import { Testimonials } from '@/components/sections/Testimonials';
import { FAQ } from '@/components/sections/FAQ';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';
import { SchemaHomepage } from '@/components/seo/SchemaMarkup';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Sparkles } from 'lucide-react';
import { SITE_CONFIG, waUrl } from '@/config/site';

const modalidades = [
  {
    emoji: '👨\u200d👩\u200d👧',
    tag: 'Mais rápido',
    tagColor: '#10b981',
    title: 'Filho(a) de português(a)',
    desc: 'O caminho mais directo e rápido. Não precisa comprovar vínculo com Portugal. Pode ser feito 100% do Brasil.',
    prazo: '4 a 6 meses',
    prazoLabel: 'processos novos',
    link: '/cidadania-portuguesa/filhos-maiores',
    destaque: true,
  },
  {
    emoji: '👴👵',
    tag: 'Estratégia recomendada',
    tagColor: '#3b82f6',
    title: 'Neto(a) de português(a)',
    desc: 'Se o teu pai ou mãe ainda é vivo, existe uma via muito mais rápida — apenas 8 a 12 meses no total, em vez de 42 a 48.',
    prazo: '42 a 48 meses',
    prazoLabel: 'via directa',
    link: '/cidadania-portuguesa/netos',
    destaque: true,
  },
  {
    emoji: '🧓',
    tag: 'Lei 1/2026',
    tagColor: '#f59e0b',
    title: 'Bisneto(a) de português(a)',
    desc: 'Nova via criada pela Lei Orgânica 1/2026. Requer residência em Portugal ou cadeia de ascendentes vivos.',
    prazo: '28 a 36 meses',
    prazoLabel: 'via Lei 1/2026',
    link: '/cidadania-portuguesa/bisnetos',
    destaque: false,
  },
  {
    emoji: '💍',
    tag: 'Por casamento',
    tagColor: '#ec4899',
    title: 'Cônjuge de português(a)',
    desc: 'Para casados ou em união de facto com cidadão(ã) português(a) há 3 ou mais anos.',
    prazo: '50 a 54 meses',
    prazoLabel: 'após protocolo',
    link: '/cidadania-portuguesa/conjuges',
    destaque: false,
  },
  {
    emoji: '🏡',
    tag: 'Por residência',
    tagColor: '#8b5cf6',
    title: 'Naturalização por residência',
    desc: 'Para quem vive legalmente em Portugal há 7 anos (brasileiros/CPLP) ou 10 anos (outros países).',
    prazo: '27 a 30 meses',
    prazoLabel: 'após protocolo',
    link: '/cidadania-portuguesa/residencia',
    destaque: false,
  },
  {
    emoji: '🔍',
    tag: 'Especializado',
    tagColor: '#64748b',
    title: 'Pesquisa genealógica',
    desc: 'Localização de certidões antigas em arquivos paroquiais e distritais portugueses. Essencial para netos sem documentação.',
    prazo: 'Sob consulta',
    prazoLabel: 'conforme caso',
    link: '/busca-documentos',
    destaque: false,
  },
];


function ModalidadesSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-gold font-bold text-xs uppercase tracking-widest mb-3 block">
            Caminhos disponíveis
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Qual é o seu vínculo com Portugal?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Cada situação tem um caminho diferente — com prazos, documentos e estratégias distintas.
            Clica na tua situação para ver todos os detalhes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {modalidades.map((m) => (
            <Link
              key={m.title}
              to={m.link}
              className={`group relative flex flex-col p-6 rounded-2xl border-2 transition-all hover:shadow-lg hover:-translate-y-0.5 ${
                m.destaque
                  ? 'border-primary/40 bg-primary/5 hover:border-primary'
                  : 'border-border bg-card hover:border-primary/40'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <span
                  className="text-xs font-bold text-white px-2.5 py-1 rounded-full"
                  style={{ background: m.tagColor }}
                >
                  {m.tag}
                </span>
                <span className="text-2xl">{m.emoji}</span>
              </div>

              <h3 className="font-display text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {m.title}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">
                {m.desc}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-border/50">
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Clock className="w-3.5 h-3.5 text-primary/60" />
                  <span>{m.prazoLabel}</span>
                </div>
                <span className="text-sm font-bold text-primary">{m.prazo}</span>
              </div>

              <div className="absolute bottom-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowRight className="w-4 h-4 text-primary" />
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-muted-foreground text-sm mb-4">
            Qual é o seu caso?
          </p>
          <Link
            to="/quiz"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-6 py-3 rounded-xl hover:bg-primary/90 transition-colors"
          >
            Descobrir o meu caminho
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

const Index = () => (
  <>
    <SchemaHomepage />
    <Helmet>
        <title>ViannaLegal — Cidadania Portuguesa | Assessoria Jurídica</title>
        <meta name="description" content="Assessoria especializada em cidadania portuguesa. Mais de 1.200+ casos acompanhados. Processo com actuação presencial em Portugal." />
        <link rel="canonical" href="https://viannalegal.com.br/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="ViannaLegal — Cidadania Portuguesa | Assessoria Jurídica" />
        <meta property="og:description" content="Assessoria especializada em cidadania portuguesa. Mais de 1.200+ casos acompanhados. Processo com actuação presencial em Portugal." />
        <meta property="og:url" content="https://viannalegal.com.br/" />
        <meta property="og:image" content="https://viannalegal.com.br/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="pt_BR" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ViannaLegal — Cidadania Portuguesa | Assessoria Jurídica" />
        <meta name="twitter:description" content="Assessoria especializada em cidadania portuguesa. Mais de 1.200+ casos acompanhados." />
        <meta name="twitter:image" content="https://viannalegal.com.br/og-image.jpg" />
      </Helmet>
    <Header />
    <Hero />
    <ModalidadesSection />
    <About />
    <Process />
    <Testimonials />
    <FAQ />
    <Contact />
    <Footer />
  </>
);

export default Index;