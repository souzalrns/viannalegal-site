import { Header } from '@/components/layout/Header';
import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { About } from '@/components/sections/About';
import { Benefits } from '@/components/sections/Benefits';
import { Process } from '@/components/sections/Process';
import { Testimonials } from '@/components/sections/Testimonials';
import { FAQ } from '@/components/sections/FAQ';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';
import { Helmet } from 'react-helmet-async';
import { useScrollToHash } from '@/hooks/useScrollToHash';

const Index = () => {
  useScrollToHash();
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "ViannaLegal",
    "description": "Assessoria especializada em cidadania portuguesa para brasileiros. Auxiliamos na obtenção de dupla cidadania para filhos, netos e cônjuges de portugueses. Atualizado com as mudanças da Lei de 2025.",
    "url": "https://viannalegal.com.br",
    "logo": "https://viannalegal.com.br/logo.png",
    "telephone": "+351913134260",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lisboa",
      "addressCountry": "PT"
    },
    "areaServed": ["Brasil", "Portugal"],
    "serviceType": [
      "Cidadania Portuguesa para Netos",
      "Cidadania Portuguesa para Filhos",
      "Cidadania Portuguesa por Casamento",
      "Pesquisa Genealógica",
      "Busca de Documentos Portugueses"
    ],
    "priceRange": "$$",
    "openingHours": "Mo-Fr 09:00-18:00",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "2000"
    }
  };

  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "ViannaLegal - Assessoria em Cidadania Portuguesa",
    "image": "https://viannalegal.com.br/logo.png",
    "telephone": "+351913134260",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lisboa",
      "addressCountry": "PT"
    },
    "url": "https://viannalegal.com.br",
    "priceRange": "$$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "O que mudou na Lei da Nacionalidade Portuguesa em 2025?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "As alterações de 2025 trouxeram maior rigor para netos de portugueses, exigindo comprovação mais robusta de vínculo efetivo com Portugal. Os prazos de análise aumentaram e a naturalização por residência agora exige maior tempo de permanência legal."
        }
      },
      {
        "@type": "Question",
        "name": "Quem tem direito à cidadania portuguesa em 2025?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Filhos, netos e bisnetos de portugueses, cônjuges de cidadãos portugueses casados há mais de 3 anos, e residentes legais em Portugal há 5+ anos podem solicitar a cidadania portuguesa. Netos precisam comprovar vínculo efetivo."
        }
      },
      {
        "@type": "Question",
        "name": "Neto de português tem direito à cidadania portuguesa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sim, netos de portugueses têm direito à cidadania portuguesa, desde que comprovem vínculo efetivo com a comunidade portuguesa através de conhecimento do idioma, visitas documentadas a Portugal, ou outros laços culturais."
        }
      },
      {
        "@type": "Question",
        "name": "Quanto tempo demora o processo de cidadania portuguesa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Os prazos variam: filhos menores 6-8 meses, filhos maiores 12-14 meses, netos e cônjuges 40-48 meses. Os prazos dependem da conservatória responsável e podem variar com as mudanças de 2025."
        }
      },
      {
        "@type": "Question",
        "name": "Preciso morar em Portugal para obter a cidadania?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Não necessariamente. Descendentes diretos de portugueses podem solicitar a cidadania mesmo morando no Brasil. Apenas a naturalização por residência exige morar em Portugal por 5 anos."
        }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>ViannaLegal: Assessoria em Cidadania Portuguesa para Brasileiros | Dupla Cidadania Rápida e Segura</title>
        <meta 
          name="description" 
          content="Obtenha sua cidadania portuguesa por descendência, casamento ou residência. Processo 100% online, especialistas em Portugal. Agende consulta gratuita! Taxa de aprovação 98%. Atualizado Lei 2025." 
        />
        <meta name="keywords" content="cidadania portuguesa, cidadania portuguesa para netos, cidadania portuguesa para filhos, dupla cidadania brasil portugal, passaporte português, nacionalidade portuguesa, como tirar cidadania portuguesa, cidadania europeia, assessoria cidadania portuguesa, lei nacionalidade 2025, vínculo efetivo portugal" />
        <link rel="canonical" href="https://viannalegal.com.br" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="ViannaLegal: Assessoria em Cidadania Portuguesa para Brasileiros" />
        <meta property="og:description" content="Obtenha sua cidadania portuguesa por descendência, casamento ou residência. Processo 100% online, taxa de aprovação 98%!" />
        <meta property="og:url" content="https://viannalegal.com.br" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:site_name" content="ViannaLegal" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ViannaLegal: Assessoria em Cidadania Portuguesa" />
        <meta name="twitter:description" content="Cidadania portuguesa 100% online. Taxa de aprovação 98%. Consulta gratuita!" />
        
        {/* Additional SEO */}
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="author" content="ViannaLegal" />
        <meta name="geo.region" content="PT-11" />
        <meta name="geo.placename" content="Lisboa" />
        <meta name="language" content="pt-BR" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(localBusinessData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqStructuredData)}
        </script>
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <Services />
          <About />
          <Benefits />
          <Process />
          <Testimonials />
          <FAQ />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
