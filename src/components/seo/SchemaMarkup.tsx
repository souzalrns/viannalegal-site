// Schema Markup centralizado — ViannaLegal
// FAQPage + Organization + WebSite + LegalService + Article + Quiz + Breadcrumb

import { Helmet } from 'react-helmet-async';

// ── FAQ Schema — 20 perguntas (rich snippets no Google) ────────
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
  {
    "@type": "Question",
    "name": "O que mudou na Lei da Nacionalidade Portuguesa em 2026?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "A Lei Orgânica 1/2026 entrou em vigor a 19 de maio de 2026. As principais mudanças: naturalização de brasileiros passou de 5 para 7 anos de residência; bisnetos de portugueses passaram a ter via directa com 5 anos de residência em Portugal; regime sefardita foi extinto para novos pedidos; filhos nascidos em Portugal passam a exigir 5 anos de residência dos pais (antes 2 anos)."
    }
  },
  {
    "@type": "Question",
    "name": "O veto do Tribunal Constitucional de dezembro de 2025 ainda vale?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Não. O Tribunal Constitucional vetou a versão anterior da lei em dezembro de 2025, mantendo prazos de 5 anos. A Assembleia da República aprovou uma nova versão (Lei Orgânica 1/2026) que entrou em vigor a 19 de maio de 2026 com prazos de 7 anos para brasileiros/CPLP."
    }
  },
  {
    "@type": "Question",
    "name": "Processos protocolados antes de 19 de maio de 2026 seguem qual regime?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Os processos já protocolados antes de 19/05/2026 mantêm o regime anterior da lei. A Lei 1/2026 não tem efeito retroactivo sobre pedidos já apresentados."
    }
  },
  {
    "@type": "Question",
    "name": "O regime sefardita acabou?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Sim. A Lei Orgânica 1/2026 extinguiu o regime especial para descendentes de judeus sefarditas para novos pedidos. Processos já em curso antes da lei continuam a ser analisados pelo regime anterior."
    }
  },
  {
    "@type": "Question",
    "name": "Quando sai a regulamentação complementar da Lei 1/2026?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "A regulamentação complementar está prevista para ser publicada até agosto de 2026. Alguns aspectos práticos, como os critérios exactos de vínculo efetivo para bisnetos, ainda dependem desta regulamentação."
    }
  },
  {
    "@type": "Question",
    "name": "Quem tem direito à cidadania portuguesa em 2026?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Têm direito: filhos de pai ou mãe portuguesa (natos); netos de avô/avó portuguesa com vínculo efetivo a Portugal; bisnetos com 5 anos de residência em Portugal (Lei 1/2026); cônjuges ou unidos de facto de portugueses com 3 anos de união; naturalizados com 7 anos de residência legal (brasileiros/CPLP) ou 10 anos (outros países)."
    }
  },
  {
    "@type": "Question",
    "name": "Neto de português tem direito à cidadania portuguesa?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Sim, desde que comprove vínculo efetivo a Portugal. O vínculo pode ser demonstrado através de conhecimento da língua portuguesa, laços familiares, visitas a Portugal, pertença a associações culturais portuguesas, entre outros critérios avaliados pelo IRN."
    }
  },
  {
    "@type": "Question",
    "name": "Bisneto de português tem direito à cidadania portuguesa?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Sim, com a Lei Orgânica 1/2026. O bisneto passou a ter via directa mediante 5 anos de residência legal em Portugal. A regulamentação específica está prevista para agosto de 2026."
    }
  },
  {
    "@type": "Question",
    "name": "Filho de português nascido no Brasil tem direito automático?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Não é automático — é necessário formalizar o pedido de atribuição da nacionalidade junto ao IRN. Mas o direito existe desde o nascimento e basta protocolar o pedido com os documentos correctos."
    }
  },
  {
    "@type": "Question",
    "name": "Posso pedir cidadania portuguesa se meu pai era português mas já faleceu?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Sim. O direito à cidadania por filiação não depende de o progenitor estar vivo. É necessário provar o vínculo familiar através das certidões de nascimento e documentação pertinente."
    }
  },
  {
    "@type": "Question",
    "name": "Filho de português adoptado tem direito à cidadania?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Sim, desde que a adopção seja plena e reconhecida. Os filhos adoptivos têm os mesmos direitos que os filhos biológicos para efeitos de transmissão da nacionalidade portuguesa."
    }
  },
  {
    "@type": "Question",
    "name": "Posso pedir cidadania portuguesa pelo avô materno?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Sim. A cidadania por descendência pode ser pedida tanto pela linha paterna como pela materna. O que importa é que o avô ou avó seja português e que exista vínculo efetivo a Portugal."
    }
  },
  {
    "@type": "Question",
    "name": "Preciso morar em Portugal para obter a cidadania?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Não, para as vias de filiação e descendência. O processo é conduzido em Portugal por advogada com procuração, não sendo necessário que o requerente se desloque a Portugal durante o processo. A deslocação só é necessária para solicitar o Cartão de Cidadão e o Passaporte após aprovação."
    }
  },
  {
    "@type": "Question",
    "name": "Posso ter dupla cidadania Brasil e Portugal?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Sim. O Brasil permite dupla cidadania com Portugal e Portugal permite manter a cidadania brasileira. Após obter a cidadania portuguesa, não é necessário renunciar à brasileira."
    }
  },
  {
    "@type": "Question",
    "name": "Quanto tempo demora o processo de cidadania portuguesa?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "O prazo médio actual é de 18 a 24 meses para processos de filhos de português, e 24 a 36 meses para netos. O IRN tem um backlog histórico de mais de 700.000 processos. Processos bem instruídos tendem a ter menos diligências e tramitar mais rapidamente."
    }
  },
  {
    "@type": "Question",
    "name": "Quais documentos são necessários para a cidadania portuguesa?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Os documentos variam conforme a via. Em geral: certidão de nascimento do requerente em inteiro teor apostilada; certidão de nascimento do progenitor ou ascendente português; documento de identidade válido; registo criminal da Polícia Federal apostilado. Para netos, também é necessária a certidão de nascimento do pai/mãe que liga ao avô português."
    }
  },
  {
    "@type": "Question",
    "name": "O que é vínculo efetivo e como comprovar?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Vínculo efetivo é a ligação real à comunidade nacional portuguesa. Para netos, pode ser comprovado por: conhecimento da língua portuguesa, visitas regulares a Portugal, participação em associações culturais portuguesas, carta de intenção detalhada, ou outros elementos que demonstrem ligação genuína a Portugal."
    }
  },
  {
    "@type": "Question",
    "name": "Quanto custa o processo de cidadania portuguesa?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "A taxa do IRN para registo de nascimento é de 175€. Os honorários de assessoria jurídica variam conforme a complexidade do caso. Há ainda custos com certidões, apostilas e traduções no Brasil, que dependem do estado e cartório."
    }
  },
  {
    "@type": "Question",
    "name": "O que são as 7 fases internas do IRN?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "O processo de cidadania portuguesa passa por 7 fases internas no IRN: 1) Receção e distribuição; 2) Análise documental; 3) Instrução; 4) Projecto de decisão; 5) Revisão; 6) Decisão; 7) Notificação. O acompanhamento em cada fase permite identificar e resolver problemas atempadamente."
    }
  },
  {
    "@type": "Question",
    "name": "O que é uma diligência no processo de cidadania?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Uma diligência é um pedido do Conservador para apresentação de documentos adicionais ou esclarecimentos. Pode ser um documento em falta, uma tradução necessária ou uma explicação sobre divergências nos nomes. Responder rapidamente às diligências é crucial para não atrasar o processo."
    }
  },
  {
    "@type": "Question",
    "name": "O que é o IRN?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "O IRN (Instituto dos Registos e do Notariado) é o organismo português responsável pelos processos de cidadania e nacionalidade. A Conservatória dos Registos Centrais (CRC), em Lisboa, é onde os processos de cidadania são instruídos e decididos."
    }
  },
  {
    "@type": "Question",
    "name": "O que é uma certidão em inteiro teor?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "É a certidão de nascimento completa, com todos os campos preenchidos, incluindo a filiação e demais averbamentos. É diferente da certidão de nascimento simplificada. O IRN exige o inteiro teor para os processos de cidadania. Existem dois formatos: digitada (transcrição em texto) e reprográfica (fotografia do registo original)."
    }
  },
  {
    "@type": "Question",
    "name": "Qual a diferença entre certidão digitada e reprográfica?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "A certidão digitada é uma transcrição em texto do registo original — é o formato padrão exigido na maioria dos casos. A certidão reprográfica é uma fotografia da folha original do livro de registos — solicitada quando o original é de leitura difícil ou quando o IRN precisa confrontar a grafia histórica exacta."
    }
  },
  {
    "@type": "Question",
    "name": "O que é a Apostila de Haia?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "A Apostila de Haia é um selo de autenticação que valida documentos brasileiros para uso em Portugal. É emitida pelos Tribunais de Justiça estaduais no Brasil. Todos os documentos brasileiros apresentados ao IRN devem ser apostilados, com excepção de documentos emitidos directamente em Portugal."
    }
  },
  {
    "@type": "Question",
    "name": "Qual a certidão criminal exigida para a cidadania portuguesa?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "A certidão exigida é a da Polícia Federal brasileira. Deve ser emitida recentemente (válida por 3 meses) e apostilada com a Apostila de Haia."
    }
  },
  {
    "@type": "Question",
    "name": "A certidão de nascimento tem prazo de validade para o IRN?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "A certidão de nascimento em si não tem prazo de validade. Contudo, o registo criminal tem validade de 3 meses, pelo que deve ser solicitado próximo da data de protocolo do processo."
    }
  },
  {
    "@type": "Question",
    "name": "O que é uma procuração e como funciona no processo?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "A procuração é o documento que autoriza a advogada a representar o cliente junto ao IRN. Deve ser assinada pelo requerente no Brasil, com reconhecimento de firma em cartório, apostilada e enviada para Portugal. Permite que todo o processo seja conduzido sem que o requerente precise de se deslocar a Portugal."
    }
  },
  {
    "@type": "Question",
    "name": "Preciso traduzir os documentos brasileiros para português?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Os documentos brasileiros já estão em português, pelo que não é necessária tradução. Contudo, se houver documentos noutros idiomas (por exemplo, de outros países onde o ascendente viveu), estes precisam de ser traduzidos por tradutor certificado."
    }
  },
  {
    "@type": "Question",
    "name": "Meus documentos brasileiros servem directamente para o processo?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Sim, desde que estejam em inteiro teor e devidamente apostilados. O Brasil e Portugal têm uma relação histórica que facilita o reconhecimento de documentos, mas a apostila é sempre necessária para uso oficial em Portugal."
    }
  },
  {
    "@type": "Question",
    "name": "O que é pesquisa genealógica e quando é necessária?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "A pesquisa genealógica é a busca de registos históricos de nascimento, casamento ou óbito de ascendentes portugueses em arquivos de Portugal. É necessária quando o cliente não tem acesso à certidão de nascimento do pai/mãe ou avô/avó português, ou quando o registo foi feito há muitas décadas em conservatórias locais."
    }
  },
  {
    "@type": "Question",
    "name": "Como localizar certidões antigas de Portugal?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "As certidões antigas estão nos arquivos das Conservatórias de Registo Civil portuguesas e, para registos anteriores ao século XX, também nos arquivos paroquiais. A ViannaLegal realiza pesquisa presencial em arquivos portugueses para localizar registos históricos necessários ao processo."
    }
  },
  {
    "@type": "Question",
    "name": "É possível localizar registos do século XIX em Portugal?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Sim. Portugal tem registos civis desde 1832 e registos paroquiais anteriores a essa data. Com experiência em paleografia (leitura de escrita histórica), é possível localizar e transcrever registos muito antigos necessários para processos de cidadania."
    }
  },
  {
    "@type": "Question",
    "name": "O que é paleografia?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Paleografia é o estudo e leitura de escritas históricas. No contexto dos processos de cidadania, é a competência necessária para ler e transcrever registos do século XIX e anteriores, escritos em caligrafia histórica que pode ser de difícil leitura para quem não tem formação específica."
    }
  },
  {
    "@type": "Question",
    "name": "Cidadania por casamento: quais os requisitos?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Para obter cidadania portuguesa por casamento com cidadão português, é necessário: casamento ou união de facto legalmente reconhecida há pelo menos 3 anos; não ter sido condenado por crime com pena de prisão superior a 3 anos; conhecimento da língua portuguesa. O processo é feito por aquisição, não por atribuição."
    }
  },
  {
    "@type": "Question",
    "name": "O que é transcrição de casamento e quando é necessária?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "A transcrição de casamento é o registo em Portugal de um casamento realizado no Brasil entre um brasileiro e um português. É necessária para que o casamento produza efeitos jurídicos plenos em Portugal e é um pré-requisito para o processo de cidadania por casamento."
    }
  },
  {
    "@type": "Question",
    "name": "Quanto tempo demora a transcrição de casamento?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "A transcrição de casamento demora entre 2 a 4 meses dependendo da Conservatória e da completude da documentação apresentada."
    }
  },
  {
    "@type": "Question",
    "name": "União de facto dá direito à cidadania portuguesa?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Sim. A união de facto legalmente reconhecida há mais de 3 anos confere o direito de pedir a cidadania portuguesa por aquisição, com os mesmos requisitos do casamento."
    }
  },
  {
    "@type": "Question",
    "name": "Quanto tempo de residência preciso para naturalização?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Com a Lei 1/2026: brasileiros e cidadãos da CPLP precisam de 7 anos de residência legal em Portugal; outros países precisam de 10 anos. A residência deve ser legal e contínua, com título de residência válido."
    }
  },
  {
    "@type": "Question",
    "name": "Posso somar períodos de residência para naturalização?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Sim, desde que os períodos sejam com autorização legal de residência. Ausências temporárias do território português não interrompem necessariamente a contagem, desde que não ultrapassem os limites legais."
    }
  },
  {
    "@type": "Question",
    "name": "Preciso de conhecer português para naturalização?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Sim. O conhecimento da língua portuguesa é um requisito para a naturalização. É necessário apresentar comprovativo de conhecimento equivalente ao nível A2 do Quadro Europeu Comum de Referência para as Línguas, ou habilitações escolares em português."
    }
  },
  {
    "@type": "Question",
    "name": "O que acontece após a aprovação da cidadania portuguesa?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Após a aprovação, é emitida a certidão de nascimento portuguesa. Com ela, o novo cidadão pode solicitar o Cartão de Cidadão e o Passaporte Português no Consulado de Portugal no Brasil ou em Portugal."
    }
  },
  {
    "@type": "Question",
    "name": "Como solicitar o Cartão de Cidadão português?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "O Cartão de Cidadão é solicitado presencialmente no Consulado de Portugal mais próximo no Brasil ou nos serviços de registo em Portugal. É necessário apresentar a certidão de nascimento portuguesa e documentos de identificação. O custo é de aproximadamente 15€."
    }
  },
  {
    "@type": "Question",
    "name": "Quanto custa o Passaporte Português?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "O passaporte português custa 65€ para adultos e 35€ para menores de 25 anos. É solicitado no Consulado de Portugal no Brasil ou em Portugal, com validade de 10 anos para adultos e 5 anos para menores."
    }
  },
  {
    "@type": "Question",
    "name": "Com o passaporte português posso trabalhar em toda a Europa?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Sim. O passaporte português, como documento de cidadão da União Europeia, permite viver e trabalhar livremente em qualquer um dos 27 países da UE, bem como na Islândia, Noruega, Liechtenstein e Suíça, sem necessidade de visto."
    }
  },
  {
    "@type": "Question",
    "name": "A cidadania portuguesa transmite-se aos meus filhos?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Sim. Os filhos de cidadão português têm direito à cidadania portuguesa por filiação, independentemente do país onde nasceram. Após obter a cidadania, pode formalizar a cidadania dos filhos menores."
    }
  },
  {
    "@type": "Question",
    "name": "Posso perder a cidadania portuguesa após obtê-la?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "A perda é excepcional. Pode ocorrer em casos de renúncia voluntária, aquisição de outra cidadania com intenção de renunciar à portuguesa, ou condenação por crime com pena superior a 5 anos com determinação judicial específica."
    }
  },
  {
    "@type": "Question",
    "name": "Quais são as vantagens do passaporte português?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "O passaporte português dá acesso sem visto a mais de 190 países, incluindo todos os países da União Europeia, Reino Unido, Estados Unidos, Canadá, Japão e Austrália. Permite também acesso à fila da UE em aeroportos europeus e ao mercado de trabalho europeu sem necessidade de visto de trabalho."
    }
  },
  {
    "@type": "Question",
    "name": "Posso estudar em universidades europeias com a cidadania portuguesa?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Sim. Como cidadão europeu, tem acesso às universidades de toda a UE com taxas de estudante europeu, significativamente inferiores às taxas para estudantes extra-comunitários. Países como Alemanha têm ensino universitário público praticamente gratuito para cidadãos europeus."
    }
  },
  {
    "@type": "Question",
    "name": "A cidadania portuguesa tem custo de manutenção?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Não existe custo de manutenção da cidadania. O único custo recorrente é a renovação do Cartão de Cidadão (a cada 10 anos) e do Passaporte (a cada 10 anos para adultos)."
    }
  },
  {
    "@type": "Question",
    "name": "Qual o prazo legal do IRN para decidir sobre o pedido?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "O Código do Procedimento Administrativo estabelece 90 dias como prazo para decisão, prorrogável por mais 90 dias. Na prática, dado o volume de processos no IRN (mais de 700.000 pendentes), os prazos reais são significativamente superiores."
    }
  },
  {
    "@type": "Question",
    "name": "O que é o backlog do IRN?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "O backlog do IRN refere-se ao acúmulo histórico de processos de cidadania pendentes. Com mais de 700.000 processos em fila, os prazos reais de decisão ultrapassam largamente os prazos legais. O IRN tem feito esforços de reforço de meios para reduzir este backlog."
    }
  },
  {
    "@type": "Question",
    "name": "Existe taxa de urgência para o processo de cidadania?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Não existe taxa de urgência oficial no IRN. O que realmente acelera o processo é a correcta instrução documental logo no início — processos sem divergências e com documentação completa tendem a ter menos diligências e tramitar com mais fluidez."
    }
  },
  {
    "@type": "Question",
    "name": "Quanto custa a apostila no Brasil?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "O custo da Apostila de Haia varia por estado. Em média, entre R$60 e R$90 por documento. O prazo de emissão é geralmente de 2 a 5 dias úteis nos Tribunais de Justiça estaduais."
    }
  }
]
};

// ── Organization Schema ─────────────────────────────────────────
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "ViannaLegal",
  "alternateName": "Kathia Vianna — Cidadania Portuguesa",
  "url": "https://viannalegal.com.br",
  "logo": "https://viannalegal.com.br/og-image.jpg",
  "image": "https://viannalegal.com.br/og-image.jpg",
  "description": "Assessoria especializada em cidadania portuguesa para brasileiros. Filhos, netos e bisnetos de portugueses. Assessoria com actuação presencial em Portugal.",
  "telephone": "+351-913-134-260",
  "priceRange": "$$",
  "areaServed": { "@type": "Country", "name": "Brazil" },
  "availableLanguage": "Portuguese",
  "knowsAbout": [
    "Cidadania Portuguesa", "Nacionalidade Portuguesa",
    "Lei Orgânica 1/2026", "Dupla Cidadania Brasil Portugal", "Passaporte Europeu"
  ],
  "sameAs": ["https://wa.me/351913134260"]
};

// ── WebSite Schema ──────────────────────────────────────────────
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "ViannaLegal",
  "url": "https://viannalegal.com.br",
  "description": "Assessoria especializada em cidadania portuguesa para brasileiros",
  "inLanguage": "pt-BR",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://viannalegal.com.br/blog?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
};

// ── Componente para homepage ────────────────────────────────────
export function SchemaHomepage() {
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
    </Helmet>
  );
}

// ── Componente para artigos do blog ────────────────────────────
interface ArticleSchemaProps {
  title: string;
  description: string;
  slug: string;
  date: string;
  author?: string;
  content?: string;
}

export function SchemaArticle({ title, description, slug, date, author = 'Kathia Vianna', content }: ArticleSchemaProps) {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "url": `https://viannalegal.com.br/blog/${slug}`,
    "datePublished": date,
    "dateModified": new Date().toISOString().split('T')[0],
    "author": {
      "@type": "Person",
      "name": author,
      "jobTitle": "Advogada especialista em cidadania portuguesa",
      "url": "https://viannalegal.com.br"
    },
    "publisher": {
      "@type": "Organization",
      "name": "ViannaLegal",
      "url": "https://viannalegal.com.br",
      "logo": {
        "@type": "ImageObject",
        "url": "https://viannalegal.com.br/og-image.jpg"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://viannalegal.com.br/blog/${slug}`
    },
    "wordCount": content ? content.split(/\s+/).length : undefined,
    "inLanguage": "pt-BR",
    "about": { "@type": "Thing", "name": "Cidadania Portuguesa" }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(articleSchema)}
      </script>
    </Helmet>
  );
}

// ── Componente para página do Quiz ─────────────────────────────
export function SchemaQuiz() {
  const quizSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Quiz Cidadania Portuguesa — Descubra se você tem direito",
    "url": "https://viannalegal.com.br/quiz",
    "description": "Responda algumas perguntas e descubra em minutos se você tem direito à cidadania portuguesa e qual é o caminho mais adequado para o seu perfil.",
    "applicationCategory": "LegalService",
    "inLanguage": "pt-BR",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "BRL" },
    "provider": { "@type": "Organization", "name": "ViannaLegal", "url": "https://viannalegal.com.br" }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(quizSchema)}
      </script>
    </Helmet>
  );
}

// ── Componente BreadcrumbList ───────────────────────────────────
interface BreadcrumbProps {
  items: { name: string; url: string }[];
}

export function SchemaBreadcrumb({ items }: BreadcrumbProps) {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
    </Helmet>
  );
}

// ── FAQSchema separado — para usar na FAQ section ──────────────
interface FAQSchemaProps {
  items: { question: string; answer: string }[];
}

export function SchemaFAQ({ items }: FAQSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": { "@type": "Answer", "text": item.answer }
    }))
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}

export const SchemaHowTo = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Como Tirar Cidadania Portuguesa",
    "description": "Passo a passo completo para obter a cidadania portuguesa, actualizado com a Lei Orgânica 1/2026.",
    "totalTime": "P24M",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "EUR",
      "value": "175"
    },
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Identificar a via correcta",
        "text": "Determinar se tem direito por filiação (filhos), descendência (netos), casamento ou residência."
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Localizar o assento português do ascendente",
        "text": "Obter a certidão de nascimento do pai, mãe ou avô/avó nos registos civis portugueses."
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Reunir e apostilar documentos brasileiros",
        "text": "Emitir certidões em inteiro teor e apostilá-las com a Apostila de Haia no estado emissor."
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Verificar divergências de nomes",
        "text": "Comparar grafias entre documentos portugueses e brasileiros e rectificar antes do protocolo."
      },
      {
        "@type": "HowToStep",
        "position": 5,
        "name": "Submeter o pedido ao IRN",
        "text": "Protocolar o pedido na Conservatória dos Registos Centrais em Lisboa por advogado inscrito na OA."
      },
      {
        "@type": "HowToStep",
        "position": 6,
        "name": "Acompanhar as 7 fases do IRN",
        "text": "Monitorizar o processo no portal nacionalidade.justica.gov.pt e responder a eventuais diligências."
      },
      {
        "@type": "HowToStep",
        "position": 7,
        "name": "Solicitar Cartão de Cidadão e Passaporte",
        "text": "Após aprovação, solicitar o Cartão de Cidadão e o Passaporte Português no consulado de Portugal no Brasil."
      }
    ]
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export const SchemaPerson = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Kathia Vianna",
    "jobTitle": "Advogada especialista em cidadania portuguesa",
    "description": "Advogada inscrita na Ordem dos Advogados de Portugal (OA n.º 56666p). Especialista em cidadania portuguesa, naturalização e processos perante o IRN. Actuação presencial em Portugal desde 2016.",
    "url": "https://viannalegal.com.br/quem-somos",
    "worksFor": {
      "@type": "LegalService",
      "name": "ViannaLegal",
      "url": "https://viannalegal.com.br"
    },
    "alumniOf": [
      { "@type": "CollegeOrUniversity", "name": "Universidade de Lisboa" },
      { "@type": "CollegeOrUniversity", "name": "Universidade Portucalense" }
    ],
    "memberOf": {
      "@type": "Organization",
      "name": "Ordem dos Advogados de Portugal",
      "identifier": "OA n.º 56666p"
    },
    "knowsAbout": [
      "Cidadania portuguesa",
      "Nacionalidade portuguesa",
      "Processos no IRN",
      "Lei Orgânica 1/2026",
      "Direito da Nacionalidade"
    ]
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
