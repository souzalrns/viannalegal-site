import { PRAZOS_IRN, PRAZOS_META } from '@/config/prazos';
import { TAXAS_IRN, TAXAS_APOSTILA, TAXAS_META } from '@/config/taxas';
import { useEffect, useState, useMemo } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/sections/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, Calendar, Clock, User, Share2 } from 'lucide-react';
import { QuizBanner } from '@/components/ui/QuizBanner';
import { allBlogPostsMeta as blogPosts } from '@/data/allBlogPostsMeta';
import { SchemaArticle, SchemaBreadcrumb, SchemaFAQ, SchemaHowTo } from '@/components/seo/SchemaMarkup';
import { allBlogPostsContent, loadArtigoPilar } from '@/data/allBlogPostsContent';
import { useAnalytics } from '@/hooks/useAnalytics';
import { SITE_CONFIG } from '@/config/site';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const { trackArticleView } = useAnalytics();

  const postMeta = blogPosts.find(p => p.slug === slug);
  const isPilar = slug === 'como-tirar-cidadania-portuguesa';

  // Artigo pilar (407KB) — carregado on-demand para não bloquear bundle inicial
  const [pilarContent, setPilarContent] = useState<string>('');
  useEffect(() => {
    if (isPilar) {
      loadArtigoPilar().then(setPilarContent);
    }
  }, [isPilar]);

  const postContent = isPilar
    ? pilarContent
    : allBlogPostsContent[slug ?? ''] || '';

  const post = postMeta
    ? { ...postMeta, content: postContent }
    : undefined;

  // Rastrear visualização do artigo
  useEffect(() => {
    if (post) trackArticleView(post.slug, post.category);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [post?.slug]);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const currentIndex = blogPosts.findIndex(p => p.slug === slug);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  const parseDate = (dateStr: string) => {
    const monthMap: Record<string, string> = {
      'Jan': '01', 'Fev': '02', 'Mar': '03', 'Abr': '04', 'Mai': '05', 'Jun': '06',
      'Jul': '07', 'Ago': '08', 'Set': '09', 'Out': '10', 'Nov': '11', 'Dez': '12'
    };
    const parts = dateStr.split(' ');
    const day = parts[0]?.padStart(2, '0') || '01';
    const month = monthMap[parts[1] || ''] || '01';
    const year = parts[2] || '2024';
    return `${year}-${month}-${day}`;
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.metaDescription || post.excerpt,
    "author": {
      "@type": "Person",
      "name": post.author,
      "url": "https://viannalegal.com.br"
    },
    "publisher": {
      "@type": "Organization",
      "name": "ViannaLegal",
      "logo": {
        "@type": "ImageObject",
        "url": "https://viannalegal.com.br/logo.png"
      }
    },
    "datePublished": parseDate(post.date),
    "dateModified": parseDate(post.date),
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://viannalegal.com.br/blog/${post.slug}`
    },
    "url": `https://viannalegal.com.br/blog/${post.slug}`,
    "articleBody": post.content,
    "wordCount": post.content?.split(/\s+/).length || 0,
    "inLanguage": "pt-BR"
  };

  const shareUrl = `https://viannalegal.com.br/blog/${post.slug}`;
  
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: shareUrl,
        });
      } catch (err) {
        console.log('Share cancelled');
      }
    } else {
      navigator.clipboard.writeText(shareUrl);
      alert('Link copiado!');
    }
  };

  // Escapa caracteres HTML perigosos antes de processar markdown
  const escapeHtml = (str: string): string =>
    str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#x27;');

  // Convert markdown-like content to HTML (com sanitização XSS)
  // Resolver placeholders de prazos a partir da tabela central
  const resolvePlaceholders = (text: string): string => {
    const get = (slug: string, max?: number) => {
      const p = max
        ? PRAZOS_IRN.find(p => p.slug === slug && p.prazoMax === max)
        : PRAZOS_IRN.find(p => p.slug === slug);
      return p?.prazo || '';
    };
    return text
      .replace(/{{prazo_filhos_menores}}/g, get('filhos-menores') || '3 a 5 meses')
      .replace(/{{prazo_filhos_maiores}}/g, get('filhos-maiores') || '4 a 6 meses')
      .replace(/{{prazo_netos_maiores}}/g,  get('netos', 48)     || '42 a 48 meses')
      .replace(/{{prazo_casamento}}/g,      get('conjuges')      || '50 a 54 meses')
      .replace(/{{prazo_naturalizacao}}/g,  get('residencia')    || '27 a 30 meses')
      .replace(/{{prazo_transcricao}}/g,    get('transcricao-casamento') || '2 a 3 meses');
  };

  const formatContent = (content: string) => {
    content = resolvePlaceholders(content);
    if (!content) return '';

    const applyInline = (line: string): string => {
      // Links internos
      line = line.replace(
        /\[([^\]]{1,120})\]\((\/blog\/[a-z0-9\-]{1,100})\)/g,
        '<a href="$2" class="text-primary underline underline-offset-2 hover:text-gold transition-colors font-medium">$1</a>'
      );
      line = line.replace(
        /\[([^\]]{1,120})\]\((\/[a-z][a-z0-9\-/]{0,60})\)/g,
        '<a href="$2" class="text-primary underline underline-offset-2 hover:text-gold transition-colors font-medium">$1</a>'
      );
      // Links externos
      line = line.replace(
        /\[([^\]]{1,120})\]\((https:\/\/[^\)]{1,200})\)/g,
        '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-primary underline underline-offset-2 hover:text-gold transition-colors font-medium">$1</a>'
      );
      // mailto
      line = line.replace(
        /\[([^\]]{1,120})\]\((mailto:[^\)]{1,100})\)/g,
        '<a href="$2" class="text-primary underline underline-offset-2 hover:text-gold transition-colors font-medium">$1</a>'
      );
      // Bold + italic
      line = line.replace(/\*\*\*(.*?)\*\*\*/g, '<strong class="font-semibold text-foreground"><em>$1</em></strong>');
      line = line.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-foreground">$1</strong>');
      line = line.replace(/\*(.*?)\*/g, '<em class="italic">$1</em>');
      // Inline code
      line = line.replace(/`([^`]+)`/g, '<code class="bg-muted px-1 py-0.5 rounded text-sm font-mono text-foreground">$1</code>');
      return line;
    };

    // Processar tabelas como bloco antes de dividir por linhas
    const processTableBlock = (rows: string[]): string => {
      const dataRows = rows.filter(r => !r.replace(/\|/g, '').trim().replace(/-/g, '').trim() === '');
      const validRows = rows.filter(r => !r.replace(/[|\s-]/g, '') === '');
      
      let headerDone = false;
      let html = '<div class="overflow-x-auto my-4"><table class="w-full border-collapse text-sm">';
      
      for (const row of rows) {
        // Linha separadora (---|---|---)
        if (/^\|[\s|:-]*-{2,}[\s|:-]*\|?$/.test(row.trim()) || row.replace(/[|\s-:]/g, '') === '') {
          if (!headerDone) {
            html = html.replace('</thead-placeholder>', '</tr></thead><tbody>');
            headerDone = true;
          }
          continue;
        }
        const cells = row.split('|').slice(1, -1);
        if (!headerDone) {
          if (html.includes('thead-placeholder')) {
            // já tem header
            html += `<tr class="border-b-2 border-border">${cells.map(c => `<th class="px-3 py-2 text-left font-semibold text-foreground bg-muted/50">${applyInline(escapeHtml(c.trim()))}</th>`).join('')}</thead-placeholder>`;
          } else {
            html += `<thead><tr class="border-b-2 border-border">${cells.map(c => `<th class="px-3 py-2 text-left font-semibold text-foreground bg-muted/50">${applyInline(escapeHtml(c.trim()))}</th>`).join('')}</thead-placeholder>`;
          }
        } else {
          html += `<tr class="border-b border-border/40 hover:bg-muted/20">${cells.map(c => `<td class="px-3 py-2 text-muted-foreground">${applyInline(escapeHtml(c.trim()))}</td>`).join('')}</tr>`;
        }
      }
      
      if (!headerDone) {
        // Sem separador — tratar tudo como dados
        html = '<div class="overflow-x-auto my-4"><table class="w-full border-collapse text-sm"><tbody>';
        for (const row of rows) {
          const cells = row.split('|').slice(1, -1);
          html += `<tr class="border-b border-border/40">${cells.map(c => `<td class="px-3 py-2 text-muted-foreground">${applyInline(escapeHtml(c.trim()))}</td>`).join('')}</tr>`;
        }
      }
      
      html += '</tbody></table></div>';
      return html.replace('</thead-placeholder>', '</tr></thead><tbody>');
    };

    // Pré-processar: agrupar blocos de tabela
    const rawLines = content.split('\n');
    const segments: Array<{type: 'table' | 'text', lines: string[]}> = [];
    let i = 0;
    while (i < rawLines.length) {
      if (rawLines[i].trim().startsWith('|')) {
        const tableLines: string[] = [];
        while (i < rawLines.length && (rawLines[i].trim().startsWith('|') || rawLines[i].trim() === '')) {
          if (rawLines[i].trim().startsWith('|')) tableLines.push(rawLines[i]);
          else if (tableLines.length > 0 && i + 1 < rawLines.length && rawLines[i+1].trim().startsWith('|')) tableLines.push(rawLines[i]);
          else break;
          i++;
        }
        if (tableLines.length > 0) segments.push({type: 'table', lines: tableLines});
      } else {
        if (segments.length === 0 || segments[segments.length-1].type !== 'text') {
          segments.push({type: 'text', lines: []});
        }
        segments[segments.length-1].lines.push(rawLines[i]);
        i++;
      }
    }

    const parts: string[] = [];

    for (const seg of segments) {
      if (seg.type === 'table') {
        parts.push(processTableBlock(seg.lines));
        continue;
      }

      const html = seg.lines.map(rawLine => {
        let line = escapeHtml(rawLine);

        if (line.startsWith('## ')) return `<h2 class="text-2xl font-display font-bold text-foreground mt-8 mb-3">${applyInline(line.slice(3))}</h2>`;
        if (line.startsWith('### ')) return `<h3 class="text-xl font-display font-semibold text-foreground mt-6 mb-2">${applyInline(line.slice(4))}</h3>`;
        if (line.startsWith('#### ')) return `<h4 class="text-lg font-display font-semibold text-foreground mt-4 mb-2">${applyInline(line.slice(5))}</h4>`;

        // Blockquote
        if (line.startsWith('&gt; ')) {
          return `<blockquote class="border-l-4 border-gold pl-4 my-3 text-muted-foreground italic">${applyInline(line.slice(5))}</blockquote>`;
        }

        // Code block marker
        if (line.startsWith('\`\`\`')) return '';

        // HR
        if (line.trim() === '---') return '<hr class="my-6 border-border" />';

        // Listas checkboxes
        if (line.startsWith('- [ ] ') || line.startsWith('[ ] ')) {
          const text = line.startsWith('- [ ] ') ? line.slice(6) : line.slice(4);
          return `<li class="ml-4 text-muted-foreground flex items-start gap-2 my-1"><span class="mt-0.5 text-muted-foreground border border-border rounded w-4 h-4 flex-shrink-0 inline-block"></span><span>${applyInline(text)}</span></li>`;
        }
        if (line.startsWith('☐ ')) return `<li class="ml-4 text-muted-foreground flex items-start gap-2 my-1"><span class="text-gold">☐</span><span>${applyInline(line.slice(2))}</span></li>`;
        if (line.startsWith('✓ ') || line.startsWith('✅ ')) return `<li class="ml-4 text-muted-foreground flex items-start gap-2 my-1"><span class="text-green-600">✓</span><span>${applyInline(line.slice(2))}</span></li>`;
        if (line.startsWith('✗ ') || line.startsWith('❌ ')) return `<li class="ml-4 text-muted-foreground flex items-start gap-2 my-1"><span class="text-red-500">✗</span><span>${applyInline(line.slice(2))}</span></li>`;

        // Lista normal
        if (line.startsWith('- ') || line.startsWith('* ')) {
          return `<li class="ml-5 list-disc text-muted-foreground my-0.5">${applyInline(line.slice(2))}</li>`;
        }
        // Lista numerada
        if (/^\d+\.\s/.test(line)) {
          return `<li class="ml-5 list-decimal text-muted-foreground my-0.5">${applyInline(line.replace(/^\d+\.\s/, ''))}</li>`;
        }

        // Linha vazia
        if (line.trim() === '') return '';

        return `<p class="text-muted-foreground leading-relaxed mb-2">${applyInline(line)}</p>`;
      }).join('\n');

      parts.push(html);
    }

    return parts.join('\n');
  };

  const formattedContent = useMemo(() => formatContent(post.content), [post.content, post.slug]);

  const Icon = post.icon;

  return (
    <>
      <Helmet>
        <title>{post.title} | ViannaLegal</title>
        <meta name="description" content={post.metaDescription || post.excerpt} />
        <meta name="keywords" content={`cidadania portuguesa, ${post.category.toLowerCase()}, ${post.title.toLowerCase().split(' ').slice(0, 5).join(', ')}`} />
        <link rel="canonical" href={`https://viannalegal.com.br/blog/${post.slug}`} />
        
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.metaDescription || post.excerpt} />
        <meta property="og:url" content={`https://viannalegal.com.br/blog/${post.slug}`} />
        <meta property="article:published_time" content={parseDate(post.date)} />
        <meta property="article:author" content={post.author} />
        
        <meta property="og:image" content="https://viannalegal.com.br/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://viannalegal.com.br/og-image.jpg" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.metaDescription || post.excerpt} />
        
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        {post.slug === 'como-tirar-cidadania-portuguesa' && <SchemaHowTo />}
        <SchemaArticle
        title={post.title}
        description={post.excerpt}
        slug={post.slug}
        date={post.date}
        author={post.author}
        content={post.content}
      />
      {/* FAQPage schema — extrai perguntas frequentes do conteúdo do artigo */}
      {post.content && (() => {
        const faqSection = post.content.split('Perguntas frequentes')[1] || '';
        const pairs = [...faqSection.matchAll(/\*\*([^*\n]{10,}\?)\*\*\s+([^\n*>]{30,})/g)]
          .map(m => ({ question: m[1].trim(), answer: m[2].trim().slice(0, 400) }))
          .filter(p => p.answer.length > 20)
          .slice(0, 6);
        return pairs.length > 0 ? <SchemaFAQ items={pairs} /> : null;
      })()}
      <SchemaBreadcrumb items={[
        { name: 'Início', url: 'https://viannalegal.com.br' },
        { name: 'Blog', url: 'https://viannalegal.com.br/blog' },
        { name: post.title, url: `https://viannalegal.com.br/blog/${post.slug}` },
      ]} />
      <Header />
        
        <main className="pt-24">
          {/* Breadcrumb */}
          <div className="bg-muted/30 py-4">
            <div className="container-width">
              <nav className="flex items-center gap-2 text-sm text-muted-foreground">
                <Link to="/" className="hover:text-foreground transition-colors">Início</Link>
                <span>/</span>
                <Link to="/blog" className="hover:text-foreground transition-colors">Blog</Link>
                <span>/</span>
                <span className="text-foreground truncate max-w-[200px]">{post.title}</span>
              </nav>
            </div>
          </div>

          {/* Article Header */}
          <article className="py-12">
            <div className="container-width max-w-4xl">
              <header
                className="mb-8"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs bg-portugal-green/10 text-portugal-green px-3 py-1 rounded-full flex items-center gap-1">
                    <Icon className="w-3 h-3" />
                    {post.category}
                  </span>
                  {post.featured && (
                    <span className="text-xs bg-gold/10 text-gold px-3 py-1 rounded-full">
                      Destaque
                    </span>
                  )}
                </div>

                <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                  {post.title}
                </h1>

                <p className="text-xl text-muted-foreground mb-6">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground border-y border-border py-4">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime} de leitura</span>
                  </div>
                  <button 
                    onClick={handleShare}
                    className="flex items-center gap-2 hover:text-foreground transition-colors ml-auto"
                  >
                    <Share2 className="w-4 h-4" />
                    <span>Compartilhar</span>
                  </button>
                </div>
              </header>

              {/* Article Content */}
              <div
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: formatContent(post.content || '') }}
              />

              {/* CTA Box */}
              <div
                className="mt-12 p-8 bg-gradient-to-br from-portugal-green/10 to-gold/10 rounded-2xl border border-border"
              >
                <h3 className="font-display text-2xl font-semibold text-foreground mb-3">
                  Precisa de ajuda com seu processo?
                </h3>
                <p className="text-muted-foreground mb-6">
                  A ViannaLegal avalia o seu caso com um especialista dedicado. 
                  pode orientar você em cada etapa do processo de cidadania portuguesa.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button variant="gold" size="lg" asChild>
                    <a href={SITE_CONFIG.whatsapp.url} target="_blank" rel="noopener noreferrer">
                      Avaliar o meu caso
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link to="/blog">
                      Ver mais artigos
                    </Link>
                  </Button>
                </div>
              </div>


              {/* ── Artigos Relacionados ─────────────────────── */}
              {(() => {
                const related = blogPosts.filter(p =>
                  post.relatedSlugs?.includes(p.slug)
                ).slice(0, 3);
                if (!related.length) return null;
                return (
                  <aside className="mt-12 pt-10 border-t border-border" aria-label="Artigos relacionados">
                    <h2 className="font-display text-xl font-bold text-foreground mb-6">
                      Leia também
                    </h2>
                    <div className="grid sm:grid-cols-3 gap-4">
                      {related.map(r => {
                        const Icon = r.icon;
                        return (
                          <Link
                            key={r.slug}
                            to={`/blog/${r.slug}`}
                            className="group block bg-muted/50 hover:bg-card border border-border hover:border-gold/40 rounded-xl p-4 transition-all duration-200"
                          >
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-xs bg-gold/10 text-gold px-2 py-0.5 rounded-full flex items-center gap-1">
                                <Icon className="w-3 h-3" aria-hidden="true" />
                                {r.category}
                              </span>
                            </div>
                            <h3 className="font-semibold text-sm text-foreground leading-snug group-hover:text-primary transition-colors line-clamp-3">
                              {r.title}
                            </h3>
                            <div className="flex items-center gap-1 mt-3 text-xs text-gold font-medium">
                              <span>Ler artigo</span>
                              <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </aside>
                );
              })()}

              {/* Navigation */}
              <nav className="mt-12 pt-8 border-t border-border">
                <div className="flex flex-col sm:flex-row justify-between gap-4">
                  {prevPost ? (
                    <Link 
                      to={`/blog/${prevPost.slug}`}
                      className="flex items-center gap-3 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors group flex-1"
                    >
                      <ArrowLeft className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                      <div className="min-w-0">
                        <span className="text-xs text-muted-foreground">Artigo anterior</span>
                        <p className="font-medium text-foreground truncate">{prevPost.title}</p>
                      </div>
                    </Link>
                  ) : <div className="flex-1" />}
                  
                  {nextPost ? (
                    <Link 
                      to={`/blog/${nextPost.slug}`}
                      className="flex items-center gap-3 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors group flex-1 text-right sm:flex-row-reverse"
                    >
                      <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                      <div className="min-w-0">
                        <span className="text-xs text-muted-foreground">Próximo artigo</span>
                        <p className="font-medium text-foreground truncate">{nextPost.title}</p>
                      </div>
                    </Link>
                  ) : <div className="flex-1" />}
                </div>
              </nav>
            </div>
          </article>
        </main>

        <div className="container-width pb-8"><QuizBanner /></div>
        {/* Internal links — SEO e conversão */}
      <section className="bg-muted/30 py-12">
        <div className="container-width px-4">
          <h2 className="font-display text-xl font-bold text-foreground mb-6">
            Saiba mais sobre cidadania portuguesa
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { label: 'Cidadania para Filhos', href: '/cidadania-portuguesa/filhos-maiores' },
              { label: 'Cidadania para Netos', href: '/cidadania-portuguesa/netos' },
              { label: 'Cidadania para Bisnetos', href: '/cidadania-portuguesa/bisnetos' },
              { label: 'Cidadania por Casamento', href: '/cidadania-portuguesa/conjuges' },
              { label: 'Pesquisa Genealógica', href: '/busca-documentos' },
              { label: 'Fazer o Quiz', href: '/quiz' },
            ].map(link => (
              <Link
                key={link.href}
                to={link.href}
                className="flex items-center gap-2 p-4 bg-card rounded-xl border border-border hover:border-primary/40 hover:bg-primary/5 transition-all text-sm font-medium text-foreground group"
              >
                <span className="w-2 h-2 rounded-full bg-gold flex-shrink-0" />
                {link.label}
                <span className="ml-auto text-muted-foreground group-hover:text-primary transition-colors">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
      </div>
    </>
  );
}
