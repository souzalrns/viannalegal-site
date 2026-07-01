// Schema Markup centralizado — ViannaLegal
// FAQPage + Organization + WebSite + LegalService + Article + Quiz + Breadcrumb

import { Helmet } from 'react-helmet-async';

// ── FAQ Schema — 20 perguntas (rich snippets no Google) ────────
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{"@type": "Question", "name": "O que mudou na Lei da Nacionalidade Portuguesa em 2026?", "acceptedAnswer": {"@type": "Answer", "text": "A Lei Orgânica 1/2026 entrou em vigor a 19 de maio de 2026. Principais mudanças: naturalização de brasileiros e CPLP passou de 5 para 7 anos; bisnetos ganharam via directa com 5 anos de residência em Portugal; regime sefardita extinto para novos pedidos; filhos nascidos em Portugal exigem 5 anos de residência dos pais."}}, {"@type": "Question", "name": "Quando a Lei Orgânica 1/2026 entrou em vigor?", "acceptedAnswer": {"@type": "Answer", "text": "A Lei Orgânica 1/2026 foi aprovada em 1 de abril de 2026, promulgada em 3 de maio e publicada no Diário da República em 18 de maio de 2026. Está em vigor desde 19 de maio de 2026."}}, {"@type": "Question", "name": "O veto do Tribunal Constitucional de dezembro de 2025 ainda vale?", "acceptedAnswer": {"@type": "Answer", "text": "Não. O Tribunal Constitucional vetou a versão anterior da lei em dezembro de 2025. A Assembleia aprovou nova versão (Lei 1/2026) que entrou em vigor em maio de 2026 com prazos de 7 anos para brasileiros."}}, {"@type": "Question", "name": "Processos protocolados antes de 19 de maio de 2026 seguem qual lei?", "acceptedAnswer": {"@type": "Answer", "text": "Mantêm o regime anterior. A Lei 1/2026 não tem efeito retroactivo sobre pedidos já protocolados."}}, {"@type": "Question", "name": "O regime sefardita acabou definitivamente?", "acceptedAnswer": {"@type": "Answer", "text": "Para novos pedidos sim. A Lei 1/2026 extinguiu o regime especial para descendentes de judeus sefarditas. Processos já em curso continuam a ser analisados pelo regime anterior."}}, {"@type": "Question", "name": "Quando sai a regulamentação da Lei 1/2026?", "acceptedAnswer": {"@type": "Answer", "text": "Está prevista para agosto de 2026. Aspectos como os critérios exactos de vínculo efetivo para bisnetos ainda dependem desta regulamentação."}}, {"@type": "Question", "name": "O que é o artigo 6º da Lei da Nacionalidade?", "acceptedAnswer": {"@type": "Answer", "text": "O artigo 6º regula a aquisição da nacionalidade por naturalização, estabelecendo os requisitos de residência legal, conhecimento de português e ausência de condenações criminais graves."}}, {"@type": "Question", "name": "O que é atribuição vs aquisição da nacionalidade portuguesa?", "acceptedAnswer": {"@type": "Answer", "text": "Atribuição é quando a pessoa é considerada portuguesa desde o nascimento, por direito originário (filhos e netos de portugueses). Aquisição é quando a pessoa passa a ser portuguesa num momento posterior (por casamento ou naturalização)."}}, {"@type": "Question", "name": "Filho de português tem direito à cidadania portuguesa?", "acceptedAnswer": {"@type": "Answer", "text": "Sim. Filho de pai ou mãe portuguesa tem direito à cidadania por atribuição, independentemente do país de nascimento. É necessário formalizar o pedido junto ao IRN com a documentação correcta."}}, {"@type": "Question", "name": "Filho de português nascido no Brasil tem direito automático?", "acceptedAnswer": {"@type": "Answer", "text": "O direito existe desde o nascimento, mas não é automático — é necessário formalizar o pedido de atribuição da nacionalidade junto ao IRN com os documentos correctos."}}, {"@type": "Question", "name": "Filho de português pode pedir cidadania em qualquer idade?", "acceptedAnswer": {"@type": "Answer", "text": "Sim. Não há limite de idade para pedir cidadania por filiação. Tanto menores como adultos podem formalizar o pedido."}}, {"@type": "Question", "name": "Filho de português adoptado tem direito à cidadania?", "acceptedAnswer": {"@type": "Answer", "text": "Sim, desde que a adopção seja plena e reconhecida. Os filhos adoptivos têm os mesmos direitos que os filhos biológicos para efeitos de transmissão da nacionalidade portuguesa."}}, {"@type": "Question", "name": "Filho de pai português não casado com a mãe tem direito à cidadania?", "acceptedAnswer": {"@type": "Answer", "text": "Sim, desde que a filiação esteja estabelecida legalmente — ou seja, o pai português esteja registado na certidão de nascimento. Se não estiver, pode ser necessário um processo de reconhecimento de paternidade primeiro."}}, {"@type": "Question", "name": "Se o pai perdeu a cidadania portuguesa, o filho ainda tem direito?", "acceptedAnswer": {"@type": "Answer", "text": "Depende do momento da perda. Em geral, o direito do filho é avaliado com base na situação jurídica do pai à data do nascimento do filho."}}, {"@type": "Question", "name": "Neto de português tem direito à cidadania portuguesa?", "acceptedAnswer": {"@type": "Answer", "text": "Sim, desde que comprove vínculo efetivo a Portugal. O vínculo pode ser demonstrado através de conhecimento da língua portuguesa, laços familiares, visitas a Portugal, entre outros critérios avaliados pelo IRN."}}, {"@type": "Question", "name": "O que é vínculo efetivo para netos de portugueses?", "acceptedAnswer": {"@type": "Answer", "text": "Vínculo efetivo é a ligação real à comunidade nacional portuguesa. Para netos, pode ser comprovado por: conhecimento da língua portuguesa, visitas regulares a Portugal, participação em associações culturais, carta de intenção detalhada, ou outros elementos que demonstrem ligação genuína a Portugal."}}, {"@type": "Question", "name": "Como provar vínculo efetivo ao IRN?", "acceptedAnswer": {"@type": "Answer", "text": "O vínculo efetivo é comprovado através de documentos como: diploma de curso de português, certificado de nível A2 ou superior, comprovantes de viagens a Portugal, cartas de associações culturais portuguesas, declarações de familiares em Portugal, entre outros."}}, {"@type": "Question", "name": "Neto de avô português já falecido tem direito?", "acceptedAnswer": {"@type": "Answer", "text": "Sim. O direito à cidadania por descendência não depende de o ascendente estar vivo. É necessário provar o vínculo familiar através das certidões de nascimento em cadeia."}}, {"@type": "Question", "name": "Posso pedir cidadania pelo avô materno ou paterno?", "acceptedAnswer": {"@type": "Answer", "text": "Sim, por ambas as linhas. A cidadania por descendência pode ser pedida tanto pela linha paterna como pela materna, desde que o avô ou avó seja português."}}, {"@type": "Question", "name": "Neto de portuguesa que perdeu a cidadania tem direito?", "acceptedAnswer": {"@type": "Answer", "text": "Depende das circunstâncias da perda. Em alguns casos, a perda não afecta o direito dos descendentes. Cada caso deve ser analisado individualmente."}}, {"@type": "Question", "name": "Bisneto de português tem direito à cidadania portuguesa?", "acceptedAnswer": {"@type": "Answer", "text": "Sim, com a Lei Orgânica 1/2026. O bisneto passou a ter via directa mediante 5 anos de residência legal em Portugal. A regulamentação específica está prevista para agosto de 2026."}}, {"@type": "Question", "name": "Bisneto de português precisa morar em Portugal?", "acceptedAnswer": {"@type": "Answer", "text": "Sim. A via directa para bisnetos criada pela Lei 1/2026 exige 5 anos de residência legal em Portugal. Sem residência em Portugal, a via do bisneto não está disponível directamente."}}, {"@type": "Question", "name": "Bisneto pode pedir cidadania portuguesa pela via do neto?", "acceptedAnswer": {"@type": "Answer", "text": "Não directamente. A via de descendência directa para quem não tem residência em Portugal é limitada a filhos e netos. Bisnetos sem residência em Portugal precisam da via de naturalização (7 anos de residência)."}}, {"@type": "Question", "name": "Cidadania por casamento com português: quais os requisitos?", "acceptedAnswer": {"@type": "Answer", "text": "É necessário: casamento ou união de facto legalmente reconhecida há pelo menos 3 anos; não ter sido condenado por crime com pena de prisão superior a 3 anos; conhecimento da língua portuguesa. O cônjuge não perde a própria cidadania."}}, {"@type": "Question", "name": "União de facto dá direito à cidadania portuguesa?", "acceptedAnswer": {"@type": "Answer", "text": "Sim. A união de facto legalmente reconhecida há mais de 3 anos confere direito de pedir cidadania portuguesa, com os mesmos requisitos do casamento."}}, {"@type": "Question", "name": "Quanto tempo de casamento com português para pedir cidadania?", "acceptedAnswer": {"@type": "Answer", "text": "3 anos de casamento ou união de facto reconhecida. O prazo conta desde a data do casamento ou do reconhecimento da união de facto."}}, {"@type": "Question", "name": "O que é transcrição de casamento?", "acceptedAnswer": {"@type": "Answer", "text": "A transcrição de casamento é o registo em Portugal de um casamento celebrado no estrangeiro. Para casamentos entre brasileiros e portugueses realizados no Brasil, a transcrição é necessária para que o casamento produza plenos efeitos jurídicos em Portugal."}}, {"@type": "Question", "name": "Quanto tempo demora a transcrição de casamento?", "acceptedAnswer": {"@type": "Answer", "text": "Entre 2 a 4 meses, dependendo da Conservatória e da completude da documentação apresentada."}}, {"@type": "Question", "name": "Quais documentos são necessários para a transcrição de casamento?", "acceptedAnswer": {"@type": "Answer", "text": "Certidão de casamento em inteiro teor apostilada, documentos de identificação dos cônjuges e procuração se feita por representante. Os documentos exactos podem variar conforme o caso."}}, {"@type": "Question", "name": "Quanto tempo de residência em Portugal para naturalização?", "acceptedAnswer": {"@type": "Answer", "text": "Com a Lei 1/2026: brasileiros e cidadãos da CPLP precisam de 7 anos de residência legal; outros países precisam de 10 anos. A residência deve ser legal e contínua com título válido."}}, {"@type": "Question", "name": "Brasileiro que mora em Portugal precisa esperar 7 anos para cidadania?", "acceptedAnswer": {"@type": "Answer", "text": "Para naturalização sim, 7 anos. Mas se tiver ascendência portuguesa (pai, mãe, avô, avó portugueses), pode pedir cidadania por filiação ou descendência, sem necessidade de residência em Portugal."}}, {"@type": "Question", "name": "Preciso de conhecer português para naturalização?", "acceptedAnswer": {"@type": "Answer", "text": "Sim. É necessário comprovativo de conhecimento equivalente ao nível A2 do QECRL, ou habilitações escolares em língua portuguesa."}}, {"@type": "Question", "name": "Ausências de Portugal interrompem o prazo de naturalização?", "acceptedAnswer": {"@type": "Answer", "text": "Ausências temporárias não interrompem necessariamente a contagem, desde que não ultrapassem os limites legais e o título de residência se mantenha válido."}}, {"@type": "Question", "name": "Como funciona o processo de cidadania portuguesa?", "acceptedAnswer": {"@type": "Answer", "text": "O processo é protocolado junto ao IRN (Instituto dos Registos e do Notariado) por advogada com procuração. Passa por 7 fases internas: receção, análise documental, instrução, projecto de decisão, revisão, decisão e notificação. O prazo médio actual é de 18 a 36 meses."}}, {"@type": "Question", "name": "Quanto tempo demora o processo de cidadania portuguesa?", "acceptedAnswer": {"@type": "Answer", "text": "O prazo médio é de 18 a 24 meses para filhos de português e 24 a 36 meses para netos. O IRN tem um backlog histórico de mais de 700.000 processos pendentes."}}, {"@type": "Question", "name": "O que são as 7 fases internas do IRN?", "acceptedAnswer": {"@type": "Answer", "text": "1) Receção e distribuição; 2) Análise documental; 3) Instrução; 4) Projecto de decisão; 5) Revisão; 6) Decisão; 7) Notificação. O acompanhamento em cada fase permite identificar e resolver problemas atempadamente."}}, {"@type": "Question", "name": "O que é uma diligência no processo de cidadania?", "acceptedAnswer": {"@type": "Answer", "text": "Uma diligência é um pedido do Conservador para documentos adicionais ou esclarecimentos. Pode ser um documento em falta, uma tradução necessária ou explicação sobre divergências de nomes. Responder rapidamente às diligências é crucial para não atrasar o processo."}}, {"@type": "Question", "name": "O que é o IRN?", "acceptedAnswer": {"@type": "Answer", "text": "O IRN (Instituto dos Registos e do Notariado) é o organismo português responsável pelos processos de cidadania. A Conservatória dos Registos Centrais (CRC) em Lisboa é onde os processos de cidadania são instruídos e decididos."}}, {"@type": "Question", "name": "Qual o prazo legal do IRN para decidir sobre o pedido?", "acceptedAnswer": {"@type": "Answer", "text": "O Código do Procedimento Administrativo estabelece 90 dias prorrogáveis por mais 90. Na prática, dado o backlog de mais de 700.000 processos, os prazos reais são significativamente superiores."}}, {"@type": "Question", "name": "O que é o backlog do IRN?", "acceptedAnswer": {"@type": "Answer", "text": "Backlog refere-se ao acúmulo histórico de processos pendentes no IRN. Com mais de 700.000 processos em fila, os prazos reais de decisão ultrapassam largamente os prazos legais."}}, {"@type": "Question", "name": "Existe taxa de urgência para o processo de cidadania?", "acceptedAnswer": {"@type": "Answer", "text": "Não existe taxa de urgência oficial no IRN. O que acelera o processo é a correcta instrução documental desde o início — processos sem divergências e com documentação completa tramitam mais rapidamente."}}, {"@type": "Question", "name": "O que é um pedido de impulso processual?", "acceptedAnswer": {"@type": "Answer", "text": "É um requerimento formal à Conservatória para que decida dentro do prazo legal. Na prática, dado o volume de processos no IRN, tem actualmente efeito limitado. Vale tentar, mas sem expectativa de resolução imediata."}}, {"@type": "Question", "name": "O que é uma acção de intimação para prática de acto devido?", "acceptedAnswer": {"@type": "Answer", "text": "É um recurso judicial que exige a decisão do IRN. Contudo, o sistema judicial também está sobrecarregado com processos de imigração e nacionalidade, e a demora judicial pode ser equivalente à espera passiva."}}, {"@type": "Question", "name": "Preciso morar em Portugal para obter a cidadania?", "acceptedAnswer": {"@type": "Answer", "text": "Não, para as vias de filiação e descendência. O processo é conduzido em Portugal por advogada com procuração. A deslocação a Portugal só é necessária após aprovação, para solicitar o Cartão de Cidadão e o Passaporte."}}, {"@type": "Question", "name": "Posso acompanhar o meu processo online?", "acceptedAnswer": {"@type": "Answer", "text": "Sim, através do portal do IRN (nacionalidade.justica.gov.pt) com o número do processo. A assessoria jurídica também acompanha e informa sobre todas as movimentações."}}, {"@type": "Question", "name": "Quais documentos são necessários para cidadania portuguesa?", "acceptedAnswer": {"@type": "Answer", "text": "Variam conforme a via. Em geral: certidão de nascimento do requerente em inteiro teor apostilada; certidão de nascimento do progenitor ou ascendente português; documento de identidade válido; registo criminal da Polícia Federal apostilado; procuração passada à advogada."}}, {"@type": "Question", "name": "O que é uma certidão em inteiro teor?", "acceptedAnswer": {"@type": "Answer", "text": "É a certidão de nascimento completa com todos os campos preenchidos, incluindo filiação e averbamentos. O IRN exige o inteiro teor, não a certidão simplificada. Existem dois formatos: digitada (transcrição em texto) e reprográfica (fotografia do registo original)."}}, {"@type": "Question", "name": "Qual a diferença entre certidão digitada e reprográfica?", "acceptedAnswer": {"@type": "Answer", "text": "A certidão digitada é uma transcrição em texto do registo original — formato padrão exigido na maioria dos casos. A reprográfica é fotografia da folha original — solicitada quando o original é de leitura difícil ou quando o IRN precisa confrontar a grafia histórica exacta."}}, {"@type": "Question", "name": "O que é a Apostila de Haia?", "acceptedAnswer": {"@type": "Answer", "text": "A Apostila de Haia é um selo de autenticação que valida documentos brasileiros para uso em Portugal. É emitida pelos Tribunais de Justiça estaduais no Brasil. Todos os documentos brasileiros apresentados ao IRN devem ser apostilados."}}, {"@type": "Question", "name": "Quanto custa a apostila no Brasil?", "acceptedAnswer": {"@type": "Answer", "text": "Em média entre R$60 e R$90 por documento, variando por estado. O prazo de emissão é geralmente de 2 a 5 dias úteis nos Tribunais de Justiça estaduais."}}, {"@type": "Question", "name": "Qual a certidão criminal exigida para cidadania portuguesa?", "acceptedAnswer": {"@type": "Answer", "text": "A certidão da Polícia Federal brasileira. Deve ser emitida recentemente (válida 3 meses) e apostilada com a Apostila de Haia."}}, {"@type": "Question", "name": "A certidão de nascimento tem prazo de validade para o IRN?", "acceptedAnswer": {"@type": "Answer", "text": "A certidão de nascimento em si não tem prazo de validade. O registo criminal tem validade de 3 meses e deve ser solicitado próximo da data de protocolo."}}, {"@type": "Question", "name": "O que é uma procuração e como funciona?", "acceptedAnswer": {"@type": "Answer", "text": "A procuração autoriza a advogada a representar o cliente junto ao IRN. Deve ser assinada no Brasil com reconhecimento de firma em cartório, apostilada e enviada para Portugal. Permite que todo o processo seja conduzido sem deslocação a Portugal."}}, {"@type": "Question", "name": "Preciso traduzir os documentos brasileiros?", "acceptedAnswer": {"@type": "Answer", "text": "Os documentos brasileiros já estão em português, pelo que não é necessária tradução. Se houver documentos noutros idiomas, estes precisam de ser traduzidos por tradutor certificado."}}, {"@type": "Question", "name": "Divergências de nome nos documentos são um problema?", "acceptedAnswer": {"@type": "Answer", "text": "Podem ser. Divergências entre a grafia do nome nos documentos portugueses e brasileiros são uma das causas mais comuns de diligências. É importante identificar e explicar qualquer divergência antes do protocolo."}}, {"@type": "Question", "name": "O que fazer se o nome do avô está diferente nos documentos?", "acceptedAnswer": {"@type": "Answer", "text": "É necessário preparar uma declaração explicando a divergência, com documentos de suporte que demonstrem tratar-se da mesma pessoa. Em alguns casos pode ser necessário rectificar o registo civil."}}, {"@type": "Question", "name": "Meus documentos brasileiros servem directamente?", "acceptedAnswer": {"@type": "Answer", "text": "Sim, desde que em inteiro teor e devidamente apostilados. O Brasil e Portugal têm relação histórica que facilita o reconhecimento de documentos, mas a apostila é sempre necessária para uso oficial em Portugal."}}, {"@type": "Question", "name": "O que é pesquisa genealógica?", "acceptedAnswer": {"@type": "Answer", "text": "A pesquisa genealógica é a busca de registos históricos de nascimento, casamento ou óbito de ascendentes portugueses em arquivos de Portugal. É necessária quando o cliente não tem acesso às certidões do ascendente português."}}, {"@type": "Question", "name": "Como localizar certidões antigas de Portugal?", "acceptedAnswer": {"@type": "Answer", "text": "As certidões antigas estão nas Conservatórias de Registo Civil portuguesas e, para registos anteriores ao século XX, nos arquivos paroquiais. A ViannaLegal realiza pesquisa presencial em arquivos portugueses para localizar registos históricos."}}, {"@type": "Question", "name": "É possível localizar registos do século XIX em Portugal?", "acceptedAnswer": {"@type": "Answer", "text": "Sim. Portugal tem registos civis desde 1832 e registos paroquiais anteriores. Com experiência em paleografia, é possível localizar e transcrever registos muito antigos para processos de cidadania."}}, {"@type": "Question", "name": "O que é paleografia?", "acceptedAnswer": {"@type": "Answer", "text": "Paleografia é o estudo e leitura de escritas históricas. No contexto dos processos de cidadania, é a competência para ler e transcrever registos do século XIX escritos em caligrafia histórica."}}, {"@type": "Question", "name": "Quanto tempo demora a busca de documentos em Portugal?", "acceptedAnswer": {"@type": "Answer", "text": "Depende da localização e do estado de conservação dos arquivos. Em média entre 1 a 3 meses para arquivos acessíveis, podendo ser mais demorado para arquivos históricos remotos."}}, {"@type": "Question", "name": "O IRN aceita cópias digitalizadas das certidões?", "acceptedAnswer": {"@type": "Answer", "text": "Para alguns documentos sim, mas em geral o IRN prefere originais ou certidões emitidas directamente pelas Conservatórias portuguesas. Para documentos históricos, fotocópias autenticadas ou certidões reprográficas são geralmente aceites."}}, {"@type": "Question", "name": "Quanto custa o processo de cidadania portuguesa?", "acceptedAnswer": {"@type": "Answer", "text": "A taxa do IRN é de 175€. Há ainda custos com certidões, apostilas (R$60-90 por documento) e procuração no Brasil. Os honorários de assessoria jurídica variam conforme a complexidade do caso."}}, {"@type": "Question", "name": "Qual a taxa do IRN para registo de cidadania?", "acceptedAnswer": {"@type": "Answer", "text": "A taxa é de 175€ para o registo de nascimento no âmbito do processo de cidadania portuguesa."}}, {"@type": "Question", "name": "Quais os custos com documentos para o processo?", "acceptedAnswer": {"@type": "Answer", "text": "Certidão de nascimento em inteiro teor (valor varia por cartório), apostilas (R$60-90 cada), reconhecimento de firma na procuração (valor por cartório), envio internacional de documentos."}}, {"@type": "Question", "name": "Posso parcelar os honorários de assessoria?", "acceptedAnswer": {"@type": "Answer", "text": "As condições de pagamento variam conforme o escritório. A ViannaLegal pode informar as condições disponíveis durante a consulta inicial."}}, {"@type": "Question", "name": "O que acontece após a aprovação da cidadania portuguesa?", "acceptedAnswer": {"@type": "Answer", "text": "É emitida a certidão de nascimento portuguesa. Com ela, o novo cidadão pode solicitar o Cartão de Cidadão e o Passaporte Português no Consulado de Portugal no Brasil ou em Portugal."}}, {"@type": "Question", "name": "Como solicitar o Cartão de Cidadão português?", "acceptedAnswer": {"@type": "Answer", "text": "Presencialmente no Consulado de Portugal no Brasil ou nos serviços de registo em Portugal. É necessário a certidão de nascimento portuguesa e documentos de identificação. Custo aproximado de 15€."}}, {"@type": "Question", "name": "Quanto custa o Passaporte Português?", "acceptedAnswer": {"@type": "Answer", "text": "65€ para adultos e 35€ para menores de 25 anos. Validade de 10 anos para adultos e 5 anos para menores. Solicitado no Consulado de Portugal no Brasil ou em Portugal."}}, {"@type": "Question", "name": "Com o passaporte português posso trabalhar em toda a Europa?", "acceptedAnswer": {"@type": "Answer", "text": "Sim. O passaporte português, como documento de cidadão da UE, permite viver e trabalhar livremente em qualquer um dos 27 países da UE, bem como na Islândia, Noruega, Liechtenstein e Suíça, sem necessidade de visto."}}, {"@type": "Question", "name": "A cidadania portuguesa transmite-se aos meus filhos?", "acceptedAnswer": {"@type": "Answer", "text": "Sim. Os filhos de cidadão português têm direito à cidadania portuguesa por filiação, independentemente do país onde nasceram. Após obter a cidadania, pode formalizar a cidadania dos filhos menores."}}, {"@type": "Question", "name": "Posso perder a cidadania portuguesa após obtê-la?", "acceptedAnswer": {"@type": "Answer", "text": "A perda é excepcional. Pode ocorrer em caso de renúncia voluntária ou condenação por crime com pena superior a 5 anos com determinação judicial. Não existe perda por não usar o passaporte ou por ficar muito tempo fora de Portugal."}}, {"@type": "Question", "name": "A cidadania portuguesa caduca se eu não usar o passaporte?", "acceptedAnswer": {"@type": "Answer", "text": "Não. A cidadania portuguesa não caduca por desuso. O passaporte precisa de ser renovado periodicamente, mas a cidadania em si é vitalícia."}}, {"@type": "Question", "name": "Quais são as vantagens do passaporte português?", "acceptedAnswer": {"@type": "Answer", "text": "Acesso sem visto a mais de 190 países incluindo EUA, Canadá, Japão, Austrália e toda a UE. Direito a viver e trabalhar em qualquer país da UE. Acesso a universidades europeias com propinas de estudante europeu. Serviço consular europeu em países sem representação portuguesa."}}, {"@type": "Question", "name": "Posso estudar em universidades europeias com cidadania portuguesa?", "acceptedAnswer": {"@type": "Answer", "text": "Sim. Como cidadão europeu, tem acesso às universidades de toda a UE com taxas de estudante europeu, significativamente inferiores às extra-comunitárias. Países como Alemanha têm ensino público praticamente gratuito para cidadãos europeus."}}, {"@type": "Question", "name": "A cidadania portuguesa tem custo de manutenção?", "acceptedAnswer": {"@type": "Answer", "text": "Não existe custo de manutenção. O único custo recorrente é a renovação do Cartão de Cidadão e do Passaporte (a cada 10 anos para adultos)."}}, {"@type": "Question", "name": "Posso votar em Portugal com a cidadania portuguesa?", "acceptedAnswer": {"@type": "Answer", "text": "Sim. Com a cidadania portuguesa tem direito a votar nas eleições portuguesas e europeias, mediante inscrição no recenseamento eleitoral."}}, {"@type": "Question", "name": "O passaporte português permite entrada nos EUA sem visto?", "acceptedAnswer": {"@type": "Answer", "text": "Sim. O passaporte português integra o Visa Waiver Program (VWP) dos EUA, permitindo estadias de até 90 dias sem necessidade de visto. É necessário apenas o registo ESTA."}}, {"@type": "Question", "name": "Posso abrir empresa na Europa com cidadania portuguesa?", "acceptedAnswer": {"@type": "Answer", "text": "Sim. Como cidadão europeu, pode criar empresas em qualquer país da UE com os mesmos direitos que um cidadão nacional desse país, sem necessidade de visto de empresário."}}, {"@type": "Question", "name": "A cidadania portuguesa dá acesso ao sistema de saúde europeu?", "acceptedAnswer": {"@type": "Answer", "text": "Permite acesso ao Serviço Nacional de Saúde (SNS) português, com as mesmas condições que um cidadão português. Em viagem pela UE, o Cartão Europeu de Seguro de Doença (CESD) cobre cuidados de saúde de urgência."}}, {"@type": "Question", "name": "Tenho condenação criminal — posso pedir cidadania portuguesa?", "acceptedAnswer": {"@type": "Answer", "text": "Depende do tipo e duração da condenação. Para filhos de português, a lei não prevê impedimento por condenações criminais. Para naturalização e casamento, pode ser impedimento se a pena for superior a 3 anos. Cada caso deve ser avaliado individualmente."}}, {"@type": "Question", "name": "Posso pedir cidadania portuguesa se estiver em situação irregular em Portugal?", "acceptedAnswer": {"@type": "Answer", "text": "A situação migratória em Portugal pode afectar o processo, especialmente para naturalização. Para cidadania por descendência ou filiação, a análise é diferente. Recomenda-se consulta jurídica especializada."}}, {"@type": "Question", "name": "Filho adoptado por português tem direito à cidadania?", "acceptedAnswer": {"@type": "Answer", "text": "Sim, desde que a adopção seja plena e reconhecida. Adopções realizadas no estrangeiro podem precisar de reconhecimento em Portugal."}}, {"@type": "Question", "name": "Posso pedir cidadania portuguesa em nome de filho menor?", "acceptedAnswer": {"@type": "Answer", "text": "Sim. Os pais ou representantes legais podem pedir a cidadania em nome de filhos menores, com procuração adequada."}}, {"@type": "Question", "name": "O que acontece se o pedido for indeferido?", "acceptedAnswer": {"@type": "Answer", "text": "Uma decisão desfavorável pode ser contestada administrativamente junto ao IRN ou judicialmente nos Tribunais Administrativos. O prazo e a via dependem do fundamento do indeferimento."}}, {"@type": "Question", "name": "Posso ter tripla cidadania com Portugal, Brasil e outro país?", "acceptedAnswer": {"@type": "Answer", "text": "Portugal e Brasil permitem a manutenção de múltiplas cidadanias. A viabilidade de ter cidadania de um terceiro país depende da legislação desse país específico."}}, {"@type": "Question", "name": "A cidadania portuguesa afecta os meus impostos no Brasil?", "acceptedAnswer": {"@type": "Answer", "text": "A cidadania portuguesa em si não altera a obrigação fiscal no Brasil. O que pode criar obrigações fiscais internacionais é a residência em Portugal, não a cidadania. Recomenda-se consulta com especialista fiscal."}}, {"@type": "Question", "name": "Preciso de NIF português para o processo de cidadania?", "acceptedAnswer": {"@type": "Answer", "text": "O NIF (Número de Identificação Fiscal português) pode ser necessário em algumas etapas do processo. Pode ser obtido online ou no Consulado de Portugal antes do processo."}}, {"@type": "Question", "name": "Quem é Kathia Vianna?", "acceptedAnswer": {"@type": "Answer", "text": "Kathia Vianna é advogada inscrita na Ordem dos Advogados de Portugal com o número 56666p. Especialista em cidadania portuguesa e direito da nacionalidade, actua presencialmente em Conservatórias e Tribunais portugueses desde 2016. Licenciada pela Universidade de Lisboa com pós-graduação pela Universidade Portucalense."}}, {"@type": "Question", "name": "O que é a ViannaLegal?", "acceptedAnswer": {"@type": "Answer", "text": "A ViannaLegal é um escritório de assessoria jurídica especializado em cidadania portuguesa para brasileiros, liderado pela advogada Kathia Vianna (OA n.º 56666p). Actuação presencial em Portugal com comunicação directa com clientes no Brasil."}}, {"@type": "Question", "name": "A Kathia Vianna está registada na Ordem dos Advogados de Portugal?", "acceptedAnswer": {"@type": "Answer", "text": "Sim. Kathia Vianna está inscrita na Ordem dos Advogados de Portugal com o número 56666p. A inscrição na OA é requisito legal para representar clientes em processos de nacionalidade perante as Conservatórias e Tribunais portugueses."}}, {"@type": "Question", "name": "A assessoria jurídica é importante para o processo de cidadania?", "acceptedAnswer": {"@type": "Answer", "text": "A complexidade documental, a gestão de diligências do IRN e os critérios de vínculo efetivo tornam a assessoria especializada o factor mais determinante para o sucesso e a velocidade do processo."}}, {"@type": "Question", "name": "A ViannaLegal actua presencialmente em Portugal?", "acceptedAnswer": {"@type": "Answer", "text": "Sim. A ViannaLegal actua presencialmente nas Conservatórias e Tribunais portugueses. Conhece o IRN por dentro — sabe como os processos se movem, onde travam e como desbloquear. Esta presença física em Portugal é um diferencial importante."}}, {"@type": "Question", "name": "Como funciona a comunicação com a ViannaLegal estando no Brasil?", "acceptedAnswer": {"@type": "Answer", "text": "A comunicação é feita directamente com a Kathia Vianna via WhatsApp, email ou videochamada. Não há intermediários. O cliente é informado sobre todas as movimentações do processo."}}, {"@type": "Question", "name": "Quanto tempo de experiência tem a Kathia Vianna em cidadania portuguesa?", "acceptedAnswer": {"@type": "Answer", "text": "10 anos de actuação especializada em cidadania portuguesa, com actuação presencial em Portugal desde 2016 e mais de 1.200 casos acompanhados."}}, {"@type": "Question", "name": "Posso ter dupla cidadania Brasil e Portugal?", "acceptedAnswer": {"@type": "Answer", "text": "Sim. O Brasil permite dupla cidadania com Portugal e Portugal permite manter a cidadania brasileira. Após obter a cidadania portuguesa, não é necessário renunciar à brasileira."}}, {"@type": "Question", "name": "Tenho de informar o Brasil que tenho cidadania portuguesa?", "acceptedAnswer": {"@type": "Answer", "text": "Não existe obrigação legal de informar o governo brasileiro. Contudo, em alguns contextos específicos (como concursos públicos), pode ser relevante declarar outra cidadania."}}, {"@type": "Question", "name": "Posso usar o passaporte brasileiro e o português em simultâneo?", "acceptedAnswer": {"@type": "Answer", "text": "Sim. Pode entrar no Brasil com o passaporte brasileiro e na Europa com o português. É uma prática legal e comum entre cidadãos com dupla nacionalidade."}}, {"@type": "Question", "name": "Como saber se tenho direito à cidadania portuguesa?", "acceptedAnswer": {"@type": "Answer", "text": "O quiz de elegibilidade da ViannaLegal permite perceber em 2 minutos qual a via disponível para o seu caso. Responde a perguntas sobre a sua ascendência, situação familiar e residência para receber um diagnóstico personalizado."}}, {"@type": "Question", "name": "Qual a via mais rápida para obter cidadania portuguesa?", "acceptedAnswer": {"@type": "Answer", "text": "Para quem tem pai ou mãe portuguesa, a via de filiação é a mais directa e geralmente mais rápida (18-24 meses). Para netos, a via de descendência demora tipicamente 24-36 meses. A naturalização (7 anos de residência) é a via mais longa."}}, {"@type": "Question", "name": "Existe alguma forma de acelerar o processo no IRN?", "acceptedAnswer": {"@type": "Answer", "text": "Não existe taxa de urgência. O que realmente faz a diferença é ter a documentação completa e correcta desde o início, sem divergências nos nomes e com todos os documentos apostilados. Processos bem instruídos têm menos diligências e tramitam mais rapidamente."}}]
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
