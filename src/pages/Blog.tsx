import { Helmet } from 'react-helmet-async';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/sections/Footer';
import { Button } from '@/components/ui/button';
import { useScrollToHash } from '@/hooks/useScrollToHash';
import { ArrowRight, Calendar, Clock, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const blogPosts = [
  {
    id: 1,
    title: 'Mudanças na Lei de Cidadania Portuguesa 2025: O que Você Precisa Saber',
    excerpt: 'As alterações na Lei da Nacionalidade portuguesa em 2025 trouxeram novas exigências para netos e processos de naturalização. Entenda o que mudou e como isso afeta seu pedido de cidadania.',
    date: '15 Dez 2024',
    readTime: '8 min',
    author: 'Kathia Vianna',
    category: 'Legislação',
    featured: true,
  },
  {
    id: 2,
    title: 'Cidadania Portuguesa para Netos: Guia Completo 2025',
    excerpt: 'Tudo o que você precisa saber sobre o processo de cidadania portuguesa para netos de portugueses, incluindo documentos necessários, prazos e comprovação de vínculo efetivo.',
    date: '10 Dez 2024',
    readTime: '12 min',
    author: 'Kathia Vianna',
    category: 'Guias',
    featured: false,
  },
  {
    id: 3,
    title: 'Vínculo Efetivo: Como Comprovar Ligação com Portugal',
    excerpt: 'Descubra as formas aceitas de comprovação de vínculo efetivo com a comunidade portuguesa, essencial para netos e bisnetos que buscam a cidadania.',
    date: '5 Dez 2024',
    readTime: '6 min',
    author: 'Kathia Vianna',
    category: 'Dicas',
    featured: false,
  },
];

export default function Blog() {
  useScrollToHash();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Blog ViannaLegal - Cidadania Portuguesa",
    "description": "Artigos, guias e novidades sobre cidadania portuguesa para brasileiros",
    "url": "https://viannalegal.com.br/blog",
    "publisher": {
      "@type": "Organization",
      "name": "ViannaLegal",
      "logo": "https://viannalegal.com.br/logo.png"
    }
  };

  return (
    <>
      <Helmet>
        <title>Blog | Cidadania Portuguesa - Guias e Novidades | ViannaLegal</title>
        <meta 
          name="description" 
          content="Artigos, guias completos e atualizações sobre cidadania portuguesa para brasileiros. Fique por dentro das mudanças na lei, dicas e passo a passo." 
        />
        <meta name="keywords" content="blog cidadania portuguesa, lei nacionalidade portuguesa 2025, guia cidadania portuguesa, dicas cidadania europeia" />
        <link rel="canonical" href="https://viannalegal.com.br/blog" />
        
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Blog ViannaLegal - Cidadania Portuguesa" />
        <meta property="og:description" content="Artigos, guias e novidades sobre cidadania portuguesa para brasileiros." />
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
                  Mantenha-se atualizado com as últimas mudanças na legislação, 
                  dicas práticas e guias completos para seu processo de cidadania.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Blog Posts */}
          <section className="py-16">
            <div className="container-width">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`bg-card rounded-2xl overflow-hidden shadow-subtle border border-border/50 ${
                      post.featured ? 'md:col-span-2 lg:col-span-1' : ''
                    }`}
                  >
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-xs bg-gold/10 text-gold px-3 py-1 rounded-full">
                          {post.category}
                        </span>
                        {post.featured && (
                          <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
                            Destaque
                          </span>
                        )}
                      </div>
                      
                      <h2 className="font-display text-xl font-semibold text-foreground mb-3 line-clamp-2">
                        {post.title}
                      </h2>
                      
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
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {post.author}
                        </div>
                      </div>
                      
                      <Button variant="ghost" size="sm" className="text-gold hover:text-gold-dark p-0">
                        Ler artigo completo
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </div>
                  </motion.article>
                ))}
              </div>

              {/* Coming Soon Notice */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-12 text-center p-8 bg-muted/50 rounded-2xl"
              >
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  Novos artigos em breve!
                </h3>
                <p className="text-muted-foreground mb-6">
                  Estamos preparando mais conteúdo para ajudar você no processo de cidadania portuguesa.
                </p>
                <Button variant="gold" asChild>
                  <Link to="/#contato">
                    Receba novidades por WhatsApp
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
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
