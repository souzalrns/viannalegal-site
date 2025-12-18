import { Helmet } from 'react-helmet-async';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/sections/Footer';
import { Button } from '@/components/ui/button';
import { useScrollToHash } from '@/hooks/useScrollToHash';
import { ArrowRight, Calendar, Clock, User, TrendingUp, FileText, Scale } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const blogPosts = [
  {
    id: 1,
    slug: 'veto-tribunal-constitucional-dezembro-2025',
    title: 'Veto do Tribunal Constitucional Dez/2025: Residência em 5 Anos Mantida',
    excerpt: 'URGENTE: O Tribunal Constitucional vetou quatro normas da nova Lei da Nacionalidade. O prazo de residência permanece em 5 anos, não subindo para 7/10 anos como previsto. Entenda o que isso significa para brasileiros.',
    date: '17 Dez 2024',
    readTime: '10 min',
    author: 'Kathia Vianna',
    category: 'Legislação',
    icon: Scale,
    featured: true,
    content: `
      O Tribunal Constitucional português decidiu, em dezembro de 2025, vetar quatro normas fundamentais da Lei da Nacionalidade que havia sido aprovada em outubro. Esta decisão tem impacto direto e positivo para brasileiros que buscam a cidadania portuguesa.

      ## O que foi vetado?

      1. **Aumento do prazo de residência**: O prazo permanece em 5 anos, não subindo para 7 anos (CPLP) ou 10 anos (outros países)
      2. **Perda automática por crimes**: Rejeitada a perda automática de cidadania por condenações
      3. **Aplicação retroativa**: Não haverá aplicação retroativa das novas regras
      4. **Conceitos vagos de fraude**: Definições imprecisas foram consideradas inconstitucionais

      ## Impacto para brasileiros

      Esta é uma **excelente notícia** para cidadãos brasileiros. O prazo de residência legal de 5 anos continua válido, facilitando significativamente o processo de naturalização para quem já vive em Portugal.

      ## Próximos passos

      A lei retorna ao Parlamento para correções. Enquanto isso, as regras atuais permanecem em vigor. Este é o momento ideal para iniciar seu processo de cidadania portuguesa.
    `,
  },
  {
    id: 2,
    slug: 'guia-completo-cidadania-portuguesa-2025',
    title: 'Guia Completo 2025: Cidadania Portuguesa por Descendência',
    excerpt: 'Tudo sobre o processo de cidadania portuguesa para filhos, netos e bisnetos. Documentos obrigatórios, prazos atualizados com backlog IRN, custos e comprovação de vínculo efetivo explicados passo a passo.',
    date: '15 Dez 2024',
    readTime: '15 min',
    author: 'Kathia Vianna',
    category: 'Guias',
    icon: FileText,
    featured: true,
    content: `
      Este guia completo aborda todos os aspectos do processo de cidadania portuguesa por descendência em 2025.

      ## Tipos de Cidadania por Descendência

      ### Filhos de Portugueses
      - Direito automático independente do local de nascimento
      - Filhos menores: 6-12 meses
      - Filhos maiores: 12-24 meses

      ### Netos de Portugueses
      - Necessário comprovar vínculo efetivo
      - Prazo: 24-42 meses (backlog IRN)
      - Documentação mais extensiva

      ### Bisnetos de Portugueses
      - Processo sequencial (neto deve obter primeiro)
      - Planejamento de longo prazo necessário

      ## Documentos Necessários

      1. Certidões portuguesas em inteiro teor
      2. Certidões brasileiras apostiladas
      3. Documentos de identificação
      4. Comprovação de vínculo (para netos)

      ## Custos e Prazos

      Os custos variam conforme complexidade. Oferecemos análise gratuita para orçamento personalizado.
    `,
  },
  {
    id: 3,
    slug: 'vinculo-efetivo-como-comprovar',
    title: 'Vínculo Efetivo: Como Comprovar Ligação com Portugal',
    excerpt: 'Descubra as 6 formas aceitas de comprovação de vínculo efetivo com a comunidade portuguesa, essencial para netos e bisnetos. Dicas práticas e exemplos reais de documentação aceita.',
    date: '12 Dez 2024',
    readTime: '8 min',
    author: 'Kathia Vianna',
    category: 'Dicas',
    icon: TrendingUp,
    featured: false,
  },
  {
    id: 4,
    slug: 'backlog-irn-prazos-reais-2025',
    title: 'Backlog IRN: Prazos Reais da Cidadania Portuguesa em 2025',
    excerpt: 'Análise atualizada dos tempos de espera nas conservatórias portuguesas. Como o backlog do IRN afeta seu processo e estratégias para otimizar o tempo de aprovação.',
    date: '10 Dez 2024',
    readTime: '6 min',
    author: 'Kathia Vianna',
    category: 'Análise',
    icon: Clock,
    featured: false,
  },
  {
    id: 5,
    slug: 'dupla-cidadania-brasil-portugal-vantagens',
    title: 'Vantagens da Dupla Cidadania Brasil-Portugal em 2025',
    excerpt: 'Descubra os benefícios exclusivos do passaporte português: acesso a 190+ países, trabalho na Europa, saúde e educação de qualidade, e transmissão para futuras gerações.',
    date: '8 Dez 2024',
    readTime: '7 min',
    author: 'Kathia Vianna',
    category: 'Benefícios',
    icon: TrendingUp,
    featured: false,
  },
  {
    id: 6,
    slug: 'documentos-cidadania-portuguesa-lista-completa',
    title: 'Lista Completa de Documentos para Cidadania Portuguesa',
    excerpt: 'Checklist definitivo de documentos por tipo de processo: filhos, netos, cônjuges e naturalização. Saiba exatamente o que providenciar antes de iniciar.',
    date: '5 Dez 2024',
    readTime: '10 min',
    author: 'Kathia Vianna',
    category: 'Guias',
    icon: FileText,
    featured: false,
  },
];

export default function Blog() {
  useScrollToHash();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Blog ViannaLegal - Cidadania Portuguesa",
    "description": "Artigos, guias e novidades sobre cidadania portuguesa para brasileiros. Atualizações sobre Lei da Nacionalidade 2025, veto do TC, prazos IRN.",
    "url": "https://viannalegal.com.br/blog",
    "publisher": {
      "@type": "Organization",
      "name": "ViannaLegal",
      "logo": "https://viannalegal.com.br/logo.png"
    },
    "blogPost": blogPosts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "author": {
        "@type": "Person",
        "name": post.author
      },
      "datePublished": "2024-12-" + post.date.split(' ')[0],
      "publisher": {
        "@type": "Organization",
        "name": "ViannaLegal"
      }
    }))
  };

  const featuredPosts = blogPosts.filter(p => p.featured);
  const regularPosts = blogPosts.filter(p => !p.featured);

  return (
    <>
      <Helmet>
        <title>Blog | Cidadania Portuguesa 2025 - Guias, Lei e Novidades | ViannaLegal</title>
        <meta 
          name="description" 
          content="Artigos sobre cidadania portuguesa: veto do TC Dez/2025, guias completos, backlog IRN, vínculo efetivo e passo a passo. Informações atualizadas para brasileiros." 
        />
        <meta name="keywords" content="blog cidadania portuguesa, lei nacionalidade portuguesa 2025, veto tribunal constitucional portugal, backlog irn, vínculo efetivo portugal, guia cidadania portuguesa" />
        <link rel="canonical" href="https://viannalegal.com.br/blog" />
        
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Blog ViannaLegal - Cidadania Portuguesa 2025" />
        <meta property="og:description" content="Artigos, guias e atualizações sobre cidadania portuguesa. Veto do TC, prazos reais, documentos necessários." />
        <meta property="og:url" content="https://viannalegal.com.br/blog" />
        
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-24">
          {/* Hero Section */}
          <section className="py-16 bg-muted/50">
            <div className="container-width">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center max-w-3xl mx-auto"
              >
                <span className="text-gold font-medium text-sm uppercase tracking-wider mb-4 block">
                  Blog ViannaLegal
                </span>
                <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Guias e Novidades sobre{' '}
                  <span className="text-primary">Cidadania Portuguesa</span>
                </h1>
                <p className="text-muted-foreground text-lg">
                  Mantenha-se atualizado com as últimas mudanças na legislação (incluindo o veto do TC de Dez/2025), 
                  dicas práticas, prazos reais do IRN e guias completos para seu processo.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Featured Posts */}
          <section className="py-12">
            <div className="container-width">
              <h2 className="font-display text-2xl font-bold text-foreground mb-8">
                Destaques
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {featuredPosts.map((post, index) => {
                  const Icon = post.icon;
                  return (
                    <motion.article
                      key={post.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-card rounded-2xl overflow-hidden shadow-subtle border border-border/50 group"
                    >
                      <div className="p-8">
                        <div className="flex items-center gap-2 mb-4">
                          <span className="text-xs bg-portugal-green/10 text-portugal-green px-3 py-1 rounded-full flex items-center gap-1">
                            <Icon className="w-3 h-3" />
                            {post.category}
                          </span>
                          <span className="text-xs bg-gold/10 text-gold px-3 py-1 rounded-full">
                            Destaque
                          </span>
                        </div>
                        
                        <h3 className="font-display text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                          {post.title}
                        </h3>
                        
                        <p className="text-muted-foreground mb-4">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-6">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {post.date}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {post.readTime}
                          </div>
                          <div className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            {post.author}
                          </div>
                        </div>
                        
                        <Button variant="gold" size="sm">
                          Ler artigo completo
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </Button>
                      </div>
                    </motion.article>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Regular Posts */}
          <section className="py-12 bg-muted/30">
            <div className="container-width">
              <h2 className="font-display text-2xl font-bold text-foreground mb-8">
                Mais Artigos
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {regularPosts.map((post, index) => {
                  const Icon = post.icon;
                  return (
                    <motion.article
                      key={post.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-card rounded-2xl overflow-hidden shadow-subtle border border-border/50"
                    >
                      <div className="p-6">
                        <div className="flex items-center gap-2 mb-4">
                          <span className="text-xs bg-gold/10 text-gold px-3 py-1 rounded-full flex items-center gap-1">
                            <Icon className="w-3 h-3" />
                            {post.category}
                          </span>
                        </div>
                        
                        <h3 className="font-display text-lg font-semibold text-foreground mb-3 line-clamp-2">
                          {post.title}
                        </h3>
                        
                        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {post.date}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {post.readTime}
                          </div>
                        </div>
                        
                        <Button variant="ghost" size="sm" className="text-gold hover:text-gold-dark p-0">
                          Ler artigo completo
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </Button>
                      </div>
                    </motion.article>
                  );
                })}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16">
            <div className="container-width">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center p-8 bg-gradient-to-br from-portugal-green/10 to-gold/10 rounded-2xl border border-border"
              >
                <h3 className="font-display text-2xl font-semibold text-foreground mb-3">
                  Quer receber novidades sobre cidadania portuguesa?
                </h3>
                <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                  Atualizações sobre legislação, prazos e dicas direto no seu WhatsApp. 
                  Seja o primeiro a saber das mudanças!
                </p>
                <Button variant="gold" size="lg" asChild>
                  <a href="https://wa.me/351913134260" target="_blank" rel="noopener noreferrer">
                    Receber novidades por WhatsApp
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
