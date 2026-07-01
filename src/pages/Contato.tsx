import { Helmet } from 'react-helmet-async';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/sections/Footer';
import { Contact } from '@/components/sections/Contact';

export default function ContatoPage() {
  return (
    <>
      <Helmet>
        <title>Contato — ViannaLegal | Assessoria em Cidadania Portuguesa</title>
        <meta name="description" content="Fale com Kathia Vianna, advogada especialista em cidadania portuguesa. Atendimento via WhatsApp ou formulário. Resposta em até 24 horas." />
        <link rel="canonical" href="https://viannalegal.com.br/contato" />
        <meta property="og:title" content="Contato — ViannaLegal | Cidadania Portuguesa" />
        <meta property="og:description" content="Fale com Kathia Vianna, advogada especialista em cidadania portuguesa. Atendimento via WhatsApp ou formulário." />
        <meta property="og:url" content="https://viannalegal.com.br/contato" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://viannalegal.com.br/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contato — ViannaLegal",
          "description": "Entre em contacto com a advogada Kathia Vianna para assessoria em cidadania portuguesa.",
          "url": "https://viannalegal.com.br/contato",
          "mainEntity": {
            "@type": "LegalService",
            "name": "ViannaLegal",
            "telephone": "+351939060960",
            "email": "kathia.vianna-56666p@adv.oa.pt",
            "url": "https://viannalegal.com.br",
            "areaServed": ["BR", "PT"],
            "availableLanguage": "Portuguese"
          }
        })}} />
      </Helmet>

      <Header />
      <main>
        <section className="bg-primary section-padding">
          <div className="container-width">
            <div className="max-w-2xl">
              <span className="text-gold font-medium text-sm uppercase tracking-wider mb-4 block">
                Fale connosco
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
                Entre em contacto
              </h1>
              <p className="text-white/80 text-lg leading-relaxed">
                Fale directamente com a Kathia Vianna — advogada inscrita na OA n.º 56666p, 
                especialista em cidadania portuguesa. Resposta em até 24 horas.
              </p>
            </div>
          </div>
        </section>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
