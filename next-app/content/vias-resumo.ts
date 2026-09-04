// Resumo de cada via para o hub /cidadania-portuguesa.
// Prazos e taxas vêm da tabela central; aqui só o texto e os requisitos.
import { formatPrazo, formatTaxa } from "./prazos-data";

export interface ViaResumo {
  slug: string;
  titulo: string;
  subtitulo: string;
  descricao: string;
  requisitos: string[];
  destaque?: string;
  prazo: string;
  taxa: string;
  nota?: string;
}

export const VIAS_RESUMO: ViaResumo[] = [
  {
    slug: "filhos-maiores",
    titulo: "Cidadania para Filhos Maiores",
    subtitulo: "Filhos maiores de idade de cidadãos portugueses",
    descricao:
      "Processo destinado a filhos maiores de idade de cidadãos portugueses. A nacionalidade é atribuída por filiação, sendo necessário comprovar o vínculo parental com o ascendente português. Não exige prova de vínculo efetivo.",
    requisitos: [
      "Certidão de nascimento do requerente",
      "Certidão de nascimento do pai ou da mãe português",
      "Documentos de identificação válidos",
      "Procuração para a advogada",
    ],
    destaque: "Mais rápido",
    prazo: formatPrazo("filhos-maiores"),
    taxa: formatTaxa("filhos-maiores"),
    nota: "O prazo varia com a modalidade — por inscrição ou por transcrição — e com o órgão instrutor.",
  },
  {
    slug: "filhos-menores",
    titulo: "Cidadania para Filhos Menores",
    subtitulo: "Processo célere para menores de 18 anos",
    descricao:
      "Trâmite próprio para filhos menores de idade de cidadãos portugueses, sem exigência de vínculo efetivo. É a fila mais rápida de todo o sistema e o acto é isento de emolumento no IRN.",
    requisitos: [
      "Certidão de nascimento do menor",
      "Certidão de nascimento do pai ou da mãe português",
      "Documentos de identificação dos pais",
      "Autorização de ambos os progenitores",
    ],
    destaque: "Isento de taxa",
    prazo: formatPrazo("filhos-menores"),
    taxa: formatTaxa("filhos-menores"),
  },
  {
    slug: "netos",
    titulo: "Cidadania para Netos",
    subtitulo: "Descendentes de avós portugueses",
    descricao:
      "Para netos de cidadãos portugueses é necessário demonstrar vínculo efetivo com a comunidade portuguesa. A Lei Orgânica 1/2026 acrescentou requisitos de conhecimento cultural e cívico a esta via.",
    requisitos: [
      "Certidão de nascimento do requerente",
      "Certidão de nascimento do pai ou da mãe",
      "Certidão de nascimento do avô ou avó português",
      "Comprovação de vínculo efetivo com Portugal",
    ],
    destaque: "Estratégia recomendada",
    prazo: formatPrazo("netos-maiores"),
    taxa: formatTaxa("netos-maiores"),
    nota: "Se o pai ou a mãe ainda é vivo, o encadeamento por duas vias de filho costuma ser muito mais rápido — e nenhuma delas exige prova de vínculo efetivo.",
  },
  {
    slug: "bisnetos",
    titulo: "Cidadania para Bisnetos",
    subtitulo: "Via de naturalização criada pela Lei Orgânica 1/2026",
    descricao:
      "O artigo 6.º n.º 8 prevê que o Governo pode conceder a nacionalidade a descendentes em 3.º grau na linha recta de portugueses originários com residência legal em território nacional há pelo menos cinco anos. É naturalização, não atribuição.",
    requisitos: [
      "Cadeia completa de filiação documentada (quatro gerações)",
      "Residência legal em Portugal há pelo menos cinco anos",
      "Requisitos de conhecimento cultural e cívico da Lei 1/2026",
      "Declaração de adesão aos princípios do Estado de direito",
    ],
    destaque: "Lei 1/2026",
    prazo: formatPrazo("bisnetos"),
    taxa: formatTaxa("bisnetos"),
    nota: "Não funciona a partir do Brasil: a via exige residência legal em Portugal. Quem vive no Brasil deve avaliar o encadeamento pelos ascendentes vivos.",
  },
  {
    slug: "conjuges",
    titulo: "Cidadania para Cônjuges",
    subtitulo: "Casados ou em união de facto com portugueses",
    descricao:
      "Cônjuges com um mínimo de três anos de casamento civil, ou em união de facto reconhecida, com cidadão português podem requerer a nacionalidade. A transcrição do casamento é pré-requisito.",
    requisitos: [
      "Certidão de casamento transcrita em Portugal",
      "Mínimo de três anos de casamento ou união de facto",
      "Documentos de identificação de ambos",
      "Declaração de não separação de facto",
    ],
    prazo: formatPrazo("conjuges"),
    taxa: formatTaxa("conjuges"),
    nota: "A união de facto exige decisão judicial de reconhecimento pelo tribunal competente — não basta a escritura brasileira.",
  },
  {
    slug: "residencia",
    titulo: "Nacionalidade por Residência",
    subtitulo: "Para residentes legais em Portugal",
    descricao:
      "Para quem reside legalmente em Portugal. Com a Lei Orgânica 1/2026 o prazo mínimo subiu de cinco para sete anos para brasileiros e cidadãos da CPLP, e o tempo de espera pelo título deixou de contar.",
    requisitos: [
      "Residência legal em Portugal há sete anos ou mais (CPLP e brasileiros)",
      "Conhecimento da língua portuguesa",
      "Requisitos culturais e cívicos da Lei 1/2026",
      "Ausência das condenações previstas na lei",
    ],
    prazo: formatPrazo("residencia"),
    taxa: formatTaxa("residencia"),
    nota: "O prazo indicado é o da análise do IRN, contado depois do protocolo — não inclui os sete anos de residência.",
  },
  {
    slug: "transcricao-casamento",
    titulo: "Transcrição de Casamento",
    subtitulo: "Registo do casamento brasileiro em Portugal",
    descricao:
      "Para cidadãos portugueses casados no Brasil. A transcrição regista o casamento nos livros civis portugueses e é pré-requisito obrigatório para o pedido de cidadania por casamento.",
    requisitos: [
      "Certidão de casamento brasileira apostilada",
      "Documentos de identificação dos cônjuges",
      "Certidão de nascimento do cônjuge português",
      "Procuração para a advogada",
    ],
    destaque: "Pré-requisito",
    prazo: formatPrazo("transcricao-casamento"),
    taxa: formatTaxa("transcricao-casamento"),
  },
];
