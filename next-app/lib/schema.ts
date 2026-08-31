// lib/schema.ts
export interface SchemaProps {
  type: 'Organization' | 'Person' | 'Service' | 'BlogPosting' | 'FAQPage' | 'BreadcrumbList' | 'WebPage';
  url: string;
  title?: string;
  description?: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
  author?: string;
  faq?: { question: string; answer: string }[];
  breadcrumbs?: { name: string; url: string }[];
}

export function generateSchema(props: SchemaProps): Record<string, any> {
  const base = {
    '@context': 'https://schema.org',
    '@id': props.url,
  };

  switch (props.type) {
    case 'Organization':
      return {
        ...base,
        '@type': 'Organization',
        name: 'ViannaLegal',
        description: 'Assessoria jurídica especializada em cidadania portuguesa para brasileiros',
        url: 'https://viannalegal.com.br',
        logo: 'https://viannalegal.com.br/images/kv-logo.webp',
        founder: {
          '@type': 'Person',
          name: 'Kathia Vianna',
          jobTitle: 'Advogada',
          worksFor: { '@type': 'Organization', name: 'ViannaLegal' }
        },
        sameAs: ['https://www.linkedin.com/in/kathia-vianna-advogada'],
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'Atendimento',
          availableLanguage: ['Português']
        }
      };

    case 'Person':
      return {
        ...base,
        '@type': 'Person',
        name: 'Kathia Vianna',
        jobTitle: 'Advogada especialista em Cidadania Portuguesa',
        worksFor: { '@type': 'Organization', name: 'ViannaLegal' },
        description: 'Advogada portuguesa, inscrita na Ordem dos Advogados de Portugal (OA n.º 56666), com atuação presencial nas Conservatórias e Tribunais portugueses desde 2016.',
        identifier: { '@type': 'PropertyValue', propertyID: 'OA', value: '56666' }
      };

    case 'Service':
      return {
        ...base,
        '@type': 'Service',
        name: props.title || 'Cidadania Portuguesa',
        description: props.description || '',
        provider: { '@type': 'Organization', name: 'ViannaLegal' },
        url: props.url,
        serviceType: 'Assessoria Jurídica',
        areaServed: { '@type': 'Country', name: 'Brasil' }
      };

    case 'BlogPosting':
      return {
        ...base,
        '@type': 'BlogPosting',
        headline: props.title || '',
        description: props.description || '',
        url: props.url,
        image: props.image || 'https://viannalegal.com.br/og-image.jpg',
        datePublished: props.datePublished || new Date().toISOString(),
        dateModified: props.dateModified || new Date().toISOString(),
        author: { '@type': 'Person', name: props.author || 'Kathia Vianna' },
        publisher: { '@type': 'Organization', name: 'ViannaLegal' }
      };

    case 'FAQPage':
      return {
        ...base,
        '@type': 'FAQPage',
        mainEntity: (props.faq || []).map(f => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: { '@type': 'Answer', text: f.answer }
        }))
      };

    case 'BreadcrumbList':
      return {
        ...base,
        '@type': 'BreadcrumbList',
        itemListElement: (props.breadcrumbs || []).map((item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item.name,
          item: item.url
        }))
      };

    default:
      return { ...base, '@type': 'WebPage' };
  }
}