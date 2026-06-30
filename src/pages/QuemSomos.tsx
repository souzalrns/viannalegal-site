import { Helmet } from 'react-helmet-async';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/sections/Footer';
import { About } from '@/components/sections/About';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Scale, GraduationCap, MapPin, FileCheck, Star } from 'lucide-react';
import { SITE_CONFIG, waUrl } from '@/config/site';

const stats = [
  { value: '2.000+', label: 'processos acompanhados' },
  { value: '10 anos', label: 'de actuação em Portugal' },
  { value: 'OA n.º 56666p', label: 'Ordem dos Advogados de Portugal' },
  { value: '100%', label: 'foco em cidadania portuguesa' },
];

const formacao = [
  {
    icon: Scale,
    titulo: 'Ordem dos Advogados de Portugal',
    desc: 'Inscrição activa n.º 56666p. Única forma legal de representar clientes em processos de nacionalidade perante as Conservatórias e Tribunais portugueses.',
  },
  {
    icon: GraduationCap,
    titulo: 'Universidade de Lisboa + Portucalense',
    desc: 'Licenciada pela Universidade de Lisboa. Formação pós-graduada especializada em Registos e Notariado pela Universidade Portucalense.',
  },
  {
    icon: MapPin,
    titulo: 'Actuação presencial em Portugal desde 2016',
    desc: 'Presente nas Conservatórias e Tribunais portugueses. Conhece o IRN por dentro — sabe como os processos se movem, onde travam e como desbloquear.',
  },
  {
    icon: FileCheck,
    titulo: 'Especialista em Direito da Nacionalidade',
    desc: 'Foco exclusivo em processos de cidadania portuguesa: filiação, descendência, casamento, naturalização. Actualizada com a Lei Orgânica 1/2026.',
  },
];

export default function QuemSomos() {
  return (
    <>
      <Helmet>
        <title>Quem Somos — Kathia Vianna | ViannaLegal</title>
        <meta name="description" content="Kathia Vianna, advogada inscrita na OA n.º 56666p, especialista em cidadania portuguesa. 10 anos de actuação presencial em Portugal, 2.000+ processos acompanhados." />
        <link rel="canonical" href="https://viannalegal.com.br/quem-somos" />
        <meta property="og:title" content="Quem Somos — Kathia Vianna | ViannaLegal" />
        <meta property="og:description" content="Kathia Vianna, advogada inscrita na OA n.º 56666p, especialista em cidadania portuguesa. 10 anos de actuação presencial em Portugal." />
        <meta property="og:url" content="https://viannalegal.com.br/quem-somos" />
        <meta property="og:type" content="profile" />
        <meta property="og:image" content="https://viannalegal.com.br/og-image.jpg" />
      </Helmet>

      <Header />

      <main>
        {/* Hero da página */}
        <section className="bg-primary section-padding">
          <div className="container-width">
            <div className="max-w-3xl">
              <span className="text-gold font-medium text-sm uppercase tracking-wider mb-4 block">
                Quem trata do seu processo
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
                Kathia Vianna
              </h1>
              <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-8">
                Advogada inscrita na Ordem dos Advogados de Portugal (OA n.º 56666p), 
                com actuação presencial em Portugal desde 2016. Especialista em 
                cidadania portuguesa, registos civis e processos de nacionalidade 
                perante o IRN e Conservatórias portuguesas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="bg-gold text-primary hover:bg-gold/90 font-semibold">
                  <a href={waUrl(SITE_CONFIG.whatsappMessages.default)} target="_blank" rel="noopener noreferrer">
                    Falar com a Kathia <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild className="border-white/25 text-white hover:bg-white/10">
                  <Link to="/quiz">Veja se tem direito</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-card border-b border-border">
          <div className="container-width py-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((s) => (
                <div key={s.value} className="text-center">
                  <p className="font-display text-2xl md:text-3xl font-bold text-primary mb-1">{s.value}</p>
                  <p className="text-muted-foreground text-sm">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Secção About reutilizada */}
        <About />

        {/* Formação e credenciais */}
        <section className="section-padding bg-muted/30">
          <div className="container-width">
            <div className="text-center mb-12">
              <span className="text-gold font-medium text-sm uppercase tracking-wider mb-3 block">
                Credenciais
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                Formação e actuação
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {formacao.map((item) => (
                <div key={item.titulo} className="bg-card rounded-2xl p-6 border border-border">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">{item.titulo}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Por que a ViannaLegal */}
        <section className="section-padding">
          <div className="container-width max-w-3xl mx-auto text-center">
            <span className="text-gold font-medium text-sm uppercase tracking-wider mb-3 block">
              A diferença
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
              Por que a ViannaLegal
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 text-left mb-12">
              {[
                'Advogada inscrita na OA — única forma de representação legal válida',
                'Actuação presencial nas Conservatórias portuguesas',
                'Acompanhamento das 7 fases internas do IRN',
                'Resposta imediata a diligências — o seu processo não para',
                'Actualizada com a Lei Orgânica 1/2026',
                'Comunicação directa — sem intermediários',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <Star className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                  <p className="text-muted-foreground text-sm">{item}</p>
                </div>
              ))}
            </div>
            <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <a href={waUrl(SITE_CONFIG.whatsappMessages.default)} target="_blank" rel="noopener noreferrer">
                Avaliar o meu caso <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
