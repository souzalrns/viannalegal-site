// Dados estruturados da home, extraidos do site Vite (Index.tsx, About.tsx,
// Process.tsx, Testimonials.tsx, FAQ.tsx). Os prazos vem da tabela central.

export const MODALIDADES = [
  {
    icon: "Baby",
    emoji: "\u{1F468}\u200D\u{1F469}\u200D\u{1F467}",
    tagColor: "#10b981",
    title: "Filho(a) de português(a)",
    tag: "Mais rápido",
    desc: "O caminho mais directo e rápido. Não precisa comprovar vínculo com Portugal. Pode ser feito 100% do Brasil.",
    prazoKey: "filhos-maiores",
    prazoFallback: "4 a 6 meses",
    prazoLabel: "processos novos",
    href: "/cidadania-portuguesa/filhos-maiores",
  },
  {
    icon: "Users",
    emoji: "\u{1F474}\u{1F475}",
    tagColor: "#3b82f6",
    title: "Neto(a) de português(a)",
    tag: "Estratégia recomendada",
    desc: "Se o teu pai ou mãe ainda é vivo, existe uma via muito mais rápida — apenas 8 a 12 meses no total, em vez de 42 a 48.",
    prazoKey: "netos-maiores",
    prazoFallback: "42 a 48 meses",
    prazoLabel: "via directa",
    href: "/cidadania-portuguesa/netos",
  },
  {
    icon: "GitBranch",
    emoji: "\u{1F9D3}",
    tagColor: "#f59e0b",
    title: "Bisneto(a) de português(a)",
    tag: "Lei 1/2026",
    desc: "Nova via criada pela Lei Orgânica 1/2026. Requer residência em Portugal ou cadeia de ascendentes vivos.",
    prazoKey: "bisnetos",
    prazoFallback: "28 a 36 meses",
    prazoLabel: "via Lei 1/2026",
    href: "/cidadania-portuguesa/bisnetos",
  },
  {
    icon: "Heart",
    emoji: "\u{1F48D}",
    tagColor: "#ec4899",
    title: "Cônjuge de português(a)",
    tag: "Por casamento",
    desc: "Para casados ou em união de facto com cidadão(ã) português(a) há 3 ou mais anos.",
    prazoKey: "conjuges",
    prazoFallback: "50 a 54 meses",
    prazoLabel: "após protocolo",
    href: "/cidadania-portuguesa/conjuges",
  },
  {
    icon: "Home",
    emoji: "\u{1F3E1}",
    tagColor: "#8b5cf6",
    title: "Naturalização por residência",
    tag: "Por residência",
    desc: "Para quem vive legalmente em Portugal há 7 anos (brasileiros/CPLP) ou 10 anos (outros países).",
    prazoKey: "residencia",
    prazoFallback: "27 a 30 meses",
    prazoLabel: "após protocolo",
    href: "/cidadania-portuguesa/residencia",
  },
  {
    icon: "Search",
    emoji: "\u{1F50D}",
    tagColor: "#64748b",
    title: "Pesquisa genealógica",
    tag: "Especializado",
    desc: "Localização de certidões antigas em arquivos paroquiais e distritais portugueses. Essencial para netos sem documentação.",
    prazoKey: null,
    prazoFallback: "Sob consulta",
    prazoLabel: "conforme caso",
    href: "/documentos",
  },
] as const;

export const CREDENCIAIS = [
  { icon: "Scale", title: "Ordem dos Advogados de Portugal", description: "Inscrição activa na OA. Representação de estrangeiros em processos de nacionalidade portuguesa em Tribunais e Conservatórias." },
  { icon: "GraduationCap", title: "Universidade de Lisboa + Portucalense", description: "Licenciada pela Universidade de Lisboa. Formação especializada em Registos e Notariado pela Universidade Portucalense." },
  { icon: "MapPin", title: "Portugal — desde 2016", description: "Actua presencialmente em Portugal, em Conservatórias e Tribunais. Conhece o IRN por dentro — não por descrição." },
  { icon: "FileCheck", title: "10 anos · 1.200+ casos", description: "Foco exclusivo em cidadania portuguesa e direito da nacionalidade. Actualizada com a Lei Orgânica 1/2026 em vigor desde Maio de 2026." },
] as const;

export const PASSOS = [
  { title: "Você conta a história da família", description: "Uma conversa simples. Onde nasceu o avô ou o pai, o que a família sabe, o que tem guardado. A partir daí identificamos o caminho certo — e o que falta para o processo." },
  { title: "A gente localiza o que falta", description: "Certidões em Portugal, documentos antigos, registros paroquiais — buscamos nos arquivos portugueses o que a família não tem em mãos." },
  { title: "Antecipamos os problemas antes que apareçam", description: "A maioria dos processos atrasam por erros evitáveis. Verificamos cada detalhe antes de protocolar — para entrar na fila do IRN sem diligências." },
  { title: "Todas as suas dúvidas respondidas", description: "Prazos reais, custos totais, o que esperar em cada etapa. Sem surpresas, sem letra pequena." },
  { title: "Proposta clara, sem surpresas", description: "Honorários detalhados, escopo definido, sem custos escondidos. Você decide com informação completa na mão." },
  { title: "Começa o trabalho de verdade", description: "Procuração assinada, especialista dedicado ao seu caso. Do protocolo até à certidão de nascimento portuguesa — sem você precisar correr atrás." },
  { title: "Montamos o processo sem deixar brecha", description: "Cada certidão verificada, cada apostila conferida, cada prazo controlado. O processo chega ao IRN completo e correto na primeira vez." },
  { title: "Protocolo e entrada na fila do IRN", description: "A contagem de tempo começa aqui. A posição na fila é conquistada — e acompanhamos cada movimentação até a aprovação." },
  { title: "Monitoramento até a aprovação", description: "Acompanhamos o processo no sistema do IRN. Se aparecer uma diligência, respondemos no prazo — sem você precisar se preocupar." },
  { title: "Aprovado. Agora é só buscar o passaporte", description: "Cidadania aprovada. Enviamos os dados de registo do seu nascimento português. Com isso poderá solicitar o seu Cartão de Cidadão e passaporte português junto ao consulado." },
] as const;

export const DEPOIMENTOS = [
  { text: "Eu e meus dois filhos recebemos a cidadania em 9 meses. A Kathia avisava cada movimentação — nunca fiquei no escuro sobre o andamento do processo.", name: "Mariana Santos", location: "São Paulo, SP", service: "Filhos de Português", result: "Aprovado em 9 meses" },
  { text: "Achava que sem documentos do meu avô seria impossível. A ViannaLegal localizou a certidão em Portugal e conduziu todo o processo. Hoje tenho dupla cidadania.", name: "Carlos Eduardo Lima", location: "Belo Horizonte, MG", service: "Neto de Português", result: "Aprovado com busca documental" },
  { text: "A transcrição de casamento ficou pronta em 2 meses. Agora seguimos com o processo de cidadania da minha esposa, já sabendo exactamente o que esperar.", name: "Henrique Silva", location: "Florianópolis, SC", service: "Transcrição de Casamento", result: "Concluído em 2 meses" },
  { text: "Encontraram registros do meu bisavô de 1890 que nem a minha família sabia que existiam. Sem essa busca documental, o processo teria sido impossível.", name: "Roberto Mendes", location: "Porto Alegre, RS", service: "Busca de Documentos", result: "Registo localizado em arquivo histórico" },
] as const;

export const FAQ_HOME = [
  {
    categoria: "Legislação e Mudanças 2026",
    perguntas: [
      { q: "O que mudou na Lei da Nacionalidade Portuguesa em 2026?", a: "A <a href=\"https://dre.pt/dre/legislacao-consolidada/lc/92981\" target=\"_blank\" rel=\"noopener noreferrer\" className=\"text-primary underline\">Lei Orgânica n.º 1/2026</a> foi aprovada em 1/4/2026, promulgada em 3/5 e publicada em 18/5/2026 — já está em vigor. Principais mudanças confirmadas: o regime especial para descendentes de judeus sefarditas foi extinto para novos pedidos (quem já tinha processo protocolado mantém as regras antigas); o prazo de residência para naturalização subiu de 5 para 7 anos para brasileiros e demais cidadãos da CPLP; e bisnetos de portugueses passaram a ter via direta de atribuição da nacionalidade, mediante prova de vínculo efetivo — antes, dependiam de o neto naturalizar primeiro. A via de filhos e netos continua existindo, com maior rigor na análise documental." },
      { q: "O veto do Tribunal Constitucional de dezembro de 2025 ainda vale?", a: "O Acórdão do TC n.º 1133/2025 (dez/2025) invalidou pontos específicos de uma versão anterior do projeto — principalmente a revogação de uma norma que protegia o cidadão contra demora da própria administração pública. Isso obrigou o Parlamento a reformular o texto, mas não impediu a aprovação da lei: a versão final (Lei Orgânica 1/2026) já está em vigor desde maio de 2026, com as mudanças de prazo de residência e fim do regime sefardita confirmadas. Quem já tinha processo formalmente pendente antes da entrada em vigor segue as regras anteriores." },
    ],
  },
  {
    categoria: "Elegibilidade",
    perguntas: [
      { q: "Quem tem direito à cidadania portuguesa em 2026?", a: "A cidadania portuguesa pode ser obtida por descendência (filhos, netos e bisnetos de portugueses), naturalização por residência legal em Portugal (7 anos para brasileiros e CPLP; 10 anos para demais nacionalidades, desde a Lei Orgânica 1/2026) ou aquisição por casamento/união de facto com cidadão português há mais de 3 anos. Filhos têm direito automático; netos e bisnetos precisam comprovar vínculo efetivo com a comunidade portuguesa." },
      { q: "Neto de português tem direito à cidadania portuguesa?", a: "Sim! Netos de cidadãos portugueses têm direito à cidadania portuguesa, desde que comprovem vínculo efetivo com a comunidade portuguesa. A comprovação inclui: conhecimento do idioma português, visitas documentadas a Portugal, participação em comunidades lusófonas ou outros laços culturais. Prazo actual (dados IRN abr/mai 2026): 3 a 5 meses para menores, 42 a 48 meses para maiores." },
      { q: "Bisneto de português tem direito à cidadania?", a: "Bisnetos podem ter direito à cidadania portuguesa, mas o processo é sequencial. É necessário primeiro que o neto (pai/mãe do bisneto) obtenha a cidadania portuguesa para então transmitir ao bisneto. Planejamento antecipado é essencial devido aos prazos envolvidos." },
      { q: "Filho de português nascido no Brasil tem direito automático?", a: "Sim! Filhos de cidadãos portugueses têm direito à cidadania portuguesa independentemente do local de nascimento. Filhos menores: 3 a 5 meses; filhos maiores por inscrição: 4 a 6 meses; por transcrição: 2 a 3 meses. Não é necessário comprovar vínculo efetivo." },
    ],
  },
  {
    categoria: "Processo e Documentos",
    perguntas: [
      { q: "Preciso morar em Portugal para obter a cidadania?", a: "Não necessariamente. Descendentes diretos de portugueses (filhos, netos, bisnetos) podem solicitar a cidadania morando no Brasil. Apenas a naturalização por residência exige morar legalmente em Portugal — 7 anos para brasileiros e demais cidadãos da CPLP desde a <a href=\"https://dre.pt\" target=\"_blank\" rel=\"noopener noreferrer\" className=\"text-primary underline\">Lei Orgânica 1/2026</a> (antes eram 5 anos). Todo o processo de descendência pode ser conduzido com actuação presencial em Portugal com nossa assessoria." },
      { q: "Quanto tempo demora o processo de cidadania portuguesa?", a: "Prazos oficiais <a href=\"https://irn.justica.gov.pt\" target=\"_blank\" rel=\"noopener noreferrer\" className=\"text-primary underline\">IRN</a> (abr/mai 2026): Filhos menores: 3 a 5 meses | Filhos maiores (inscrição): 4 a 6 meses | Transcrição de casamento (registo em PT): 2 a 3 meses | Netos menores: 3 a 5 meses | Netos maiores: 42 a 48 meses | Casamento/UF: 50 a 54 meses | Naturalização CPLP (7 anos): 27 a 30 meses | Bisnetos: 28 a 36 meses. Prazos são estimativas baseadas em dados das conservatórias (abr/mai 2026) com margem ±5% — podem variar. O IRN tem em curso concurso para 485 novos Oficiais de Registos." },
      { q: "Quais documentos são necessários para cidadania portuguesa?", a: "Documentos básicos: certidões de nascimento, casamento e óbito dos ancestrais portugueses em inteiro teor; certidões brasileiras atualizadas com Apostila de Haia; documentos de identificação; procuração. Para netos: comprovação de vínculo efetivo. A documentação específica varia conforme o tipo de processo e linha de descendência." },
      { q: "O que é vínculo efetivo e como comprovar?", a: "Vínculo efetivo é a ligação demonstrável com a comunidade portuguesa, exigida para netos e bisnetos. A Lei Orgânica 1/2026 reforçou este requisito. Formas de comprovação reconhecidas: 1) Domínio do idioma português (certificados CAPLE/CIPLE ou equivalente); 2) Conhecimento da história e cultura portuguesas; 3) Visitas documentadas a Portugal (carimbos de passaporte, reservas, bilhetes); 4) Participação em associações ou comunidades lusófonas; 5) Laços familiares mantidos e documentáveis; 6) Propriedade ou investimento em Portugal. A análise é feita caso a caso — a combinação e solidez das provas importa mais do que o número de itens." },
    ],
  },
  {
    categoria: "Dupla Cidadania e Benefícios",
    perguntas: [
      { q: "Posso ter dupla cidadania Brasil e Portugal?", a: "Sim! Tanto o Brasil quanto Portugal permitem dupla cidadania sem restrições. Você mantém todos os direitos como brasileiro e adquire os de cidadão português/europeu. Pode viajar com dois passaportes, trabalhar na Europa, e transmitir a cidadania para filhos." },
      { q: "Quais são as vantagens do passaporte português?", a: "O passaporte português (4º mais poderoso do mundo) oferece: acesso sem visto a 190+ países incluindo EUA, Canadá e todo Espaço Schengen; livre circulação e trabalho em 27 países da União Europeia; acesso a sistemas de saúde e educação europeus de qualidade; facilidades para financiamento imobiliário; transmissão da cidadania para futuras gerações." },
      { q: "Posso morar e trabalhar em qualquer país da Europa?", a: "Sim! Como cidadão português, você tem direito de residir, trabalhar, estudar e empreender em qualquer um dos 27 países da União Europeia sem necessidade de visto ou autorização de trabalho. Isso inclui Alemanha, França, Espanha, Itália, Holanda e todos os demais membros." },
    ],
  },
  {
    categoria: "Casamento e Cônjuges",
    perguntas: [
      { q: "Cidadania por casamento: quais os requisitos?", a: "Cônjuges ou companheiros de portugueses podem solicitar a cidadania após 3 anos de casamento ou união de facto reconhecida. O pedido está sujeito à verificação de ligação efetiva à comunidade portuguesa — excepto quando o casamento ou união de facto tiver mais de 6 anos, ou quando existirem filhos comuns com nacionalidade portuguesa, ou quando o cônjuge resida legalmente em Portugal. Nestes casos, a oposição por falta de vínculo não se aplica. Prazo actual (dados IRN abr/mai 2026): 50 a 54 meses. A união de facto deve ser reconhecida judicialmente em Portugal." },
      { q: "O que é transcrição de casamento e quando é necessária?", a: "Transcrição é o registro do casamento brasileiro nos livros civis portugueses. É necessária quando um cônjuge é português ou quando o casal pretende usar o casamento para fins legais em Portugal. O processo leva 1-4 meses e é pré-requisito para cidadania por casamento." },
    ],
  },
  {
    categoria: "Pesquisa e Documentos",
    perguntas: [
      { q: "O que é pesquisa genealógica e quando é necessária?", a: "A pesquisa genealógica é uma investigação especializada para localizar registros de nascimento, casamento e óbito dos seus ancestrais portugueses. É necessária quando: não há informações concretas sobre os registros; documentos foram perdidos ou destruídos; precisamos confirmar a linha de descendência; registros são anteriores a 1911 (não digitalizados)." },
      { q: "Como localizar certidões antigas de Portugal?", a: "Certidões anteriores a 1911 geralmente estão em arquivos paroquiais ou distritais de Portugal, não digitalizadas. Com experiência em paleografia (leitura de documentos antigos) e acesso a arquivos em todo o território português. Localizamos registros em igrejas, conservatórias e arquivos históricos." },
      { q: "Meus documentos brasileiros servem para o processo?", a: "Documentos brasileiros devem ser emitidos em inteiro teor (não cópia simples) e apostilados com Apostila de Haia em cartório competente. Certidões de nascimento, casamento e óbito devem ser atualizadas (geralmente emitidas há menos de 12 meses). Documentos antigos precisam de atualização." },
    ],
  },
  {
    categoria: "Custos e Processo",
    perguntas: [
      { q: "Quanto custa o processo de cidadania portuguesa?", a: "Os custos variam conforme o tipo de processo e complexidade. Incluem: taxas consulares/conservatória (valores oficiais), apostilamento de documentos, traduções juramentadas (quando necessário), e honorários de assessoria. Oferecemos análise inicial para orçamento detalhado do seu caso específico." },
      { q: "Como funciona a consultoria de nacionalidade?", a: "Oferecemos uma análise inicial via WhatsApp onde avaliamos: elegibilidade para cidadania portuguesa, documentos que já possui, estimativa de prazo e custos, e próximos passos recomendados. Fale connosco pelo WhatsApp +351 913 134 260." },
    ],
  },
] as const;
