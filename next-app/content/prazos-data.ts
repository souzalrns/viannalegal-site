// ViannaLegal — Tabela Central de Prazos IRN (lab / Next.js)
// FONTE ÚNICA DE VERDADE — alterar aqui actualiza TODO o site.
//
// Migrada de src/config/prazos.ts (Vite). No lab é consumida de duas formas:
//   1. import directo em TS (vias-data.ts, quiz-nodes-data.ts, páginas)
//   2. tokens {{prazo:slug}} / {{taxa:slug}} no MDX, resolvidos em lib/content.ts
//      no momento do build. Ver resolveTokens().
//
// Nunca escrever um prazo à mão numa página ou artigo. Usar sempre o token.

export interface PrazoIRN {
  /** Chave do token: {{prazo:key}} */
  key: string;
  via: string;
  /** Slug da via no site, quando existe página dedicada */
  slug: string;
  prazo: string;
  prazoMin: number; // meses
  prazoMax: number; // meses
  taxa: string;
  /** Verba do artigo 18.º do Regulamento Emolumentar que fixa a taxa */
  verba?: string;
  /** Só onde a lei/prática distingue a forma do acto (filho: transcrição vs inscrição) */
  modalidade?: "transcrição" | "inscrição";
  complexidade: "baixa" | "media" | "alta";
  nota?: string;
}

export const PRAZOS_IRN: PrazoIRN[] = [
  {
    // Chave agregada — usada em ~20 sítios do conteúdo.
    key: "filhos-menores",
    via: "Filho(a) menor de português",
    slug: "filhos-menores",
    prazo: "2 a 10 meses",
    prazoMin: 2,
    prazoMax: 10,
    taxa: "Isento",
    verba: "art. 10.º/1 g) e h)",
    complexidade: "baixa",
    nota: "Amplitude real das filas do IRN. A via por inscrição é a mais rápida de todo o sistema.",
  },
  {
    key: "filhos-menores-inscricao",
    via: "Filho(a) menor — por inscrição",
    slug: "filhos-menores",
    modalidade: "inscrição",
    prazo: "2 a 3 meses",
    prazoMin: 2,
    prazoMax: 3,
    taxa: "Isento",
    verba: "art. 10.º/1 g) e h)",
    complexidade: "baixa",
    nota: "A fila mais rápida de todo o IRN",
  },
  {
    key: "filhos-menores-transcricao",
    via: "Filho(a) menor — por transcrição",
    slug: "filhos-menores",
    modalidade: "transcrição",
    prazo: "8 a 10 meses",
    prazoMin: 8,
    prazoMax: 10,
    taxa: "Isento",
    verba: "art. 10.º/1 g) e h)",
    complexidade: "baixa",
  },
  {
    // Chave agregada — mantida porque é a usada em ~24 sítios do conteúdo.
    // Cobre as duas modalidades; para o detalhe por fila usar FILAS_IRN.
    key: "filhos-maiores",
    via: "Filho(a) maior de português",
    slug: "filhos-maiores",
    prazo: "5 a 52 meses",
    prazoMin: 5,
    prazoMax: 52,
    taxa: "€175",
    verba: "18.º/2.1.1",
    complexidade: "baixa",
    nota: "Amplitude real das filas do IRN: depende da modalidade (inscrição ou transcrição) e do órgão instrutor.",
  },
  {
    key: "filhos-maiores-inscricao",
    via: "Filho(a) maior — por inscrição",
    slug: "filhos-maiores",
    modalidade: "inscrição",
    prazo: "5 a 32 meses",
    prazoMin: 5,
    prazoMax: 32,
    taxa: "€175",
    verba: "18.º/2.1.1",
    complexidade: "baixa",
    nota: "5 meses no Arquivo Central do Porto, 32 na Conservatória dos Registos Centrais",
  },
  {
    key: "filhos-maiores-transcricao",
    via: "Filho(a) maior — por transcrição",
    slug: "filhos-maiores",
    modalidade: "transcrição",
    prazo: "14 a 52 meses",
    prazoMin: 14,
    prazoMax: 52,
    taxa: "€175",
    verba: "18.º/2.1.1",
    complexidade: "media",
    nota: "14 meses no Arquivo Central do Porto, 52 na Conservatória dos Registos Centrais",
  },
  {
    key: "netos-menores",
    via: "Neto(a) menor de português",
    slug: "netos",
    prazo: "3 a 4 meses",
    prazoMin: 3,
    prazoMax: 4,
    taxa: "€175",
    verba: "18.º/2.1.1",
    complexidade: "media",
  },
  {
    key: "netos-maiores",
    via: "Neto(a) maior de português",
    slug: "netos",
    prazo: "34 a 53 meses",
    prazoMin: 34,
    prazoMax: 53,
    taxa: "€175",
    verba: "18.º/2.1.1",
    complexidade: "alta",
    nota: "Requer comprovação de vínculo efetivo. 34 meses no Arquivo Central do Porto, 53 na Conservatória dos Registos Centrais.",
  },
  {
    key: "bisnetos",
    via: "Bisneto(a) — naturalização (art. 6.º n.º 8)",
    slug: "bisnetos",
    prazo: "30 meses",
    prazoMin: 30,
    prazoMax: 30,
    taxa: "€250",
    verba: "18.º/2.2.1",
    complexidade: "alta",
    nota:
      "Naturalização discricionária (o Governo PODE conceder), não atribuição. Exige 5 anos de residência legal em Portugal. Fila da Conservatória dos Registos Centrais.",
  },
  {
    key: "conjuges",
    via: "Casamento / União de facto",
    slug: "conjuges",
    prazo: "56 meses",
    prazoMin: 56,
    prazoMax: 56,
    taxa: "€250",
    verba: "18.º/2.2.1",
    complexidade: "alta",
    nota: "Sujeito a verificação de vínculo efetivo",
  },
  {
    key: "transcricao-casamento",
    via: "Transcrição de casamento",
    slug: "transcricao-casamento",
    prazo: "2 a 3 meses",
    prazoMin: 2,
    prazoMax: 3,
    taxa: "€120",
    verba: "18.º/3.1",
    complexidade: "baixa",
  },
  {
    key: "residencia",
    via: "Naturalização por residência (CPLP/Brasil)",
    slug: "residencia",
    prazo: "27 a 33 meses",
    prazoMin: 27,
    prazoMax: 33,
    taxa: "€250",
    verba: "18.º/2.2.1",
    complexidade: "alta",
    nota:
      "Após 7 anos de residência legal. A contagem começa na emissão do cartão de residência válido.",
  },
];

export const PRAZOS_META = {
  fonte: "IRN — Instituto dos Registos e do Notariado",
  referencia: "Quadros do Arquivo Central do Porto e da Conservatória dos Registos Centrais",
  aviso:
    "Valores retirados dos quadros publicados pelo IRN, não estimativas de mercado. Cada amplitude reflecte a diferença entre os dois órgãos instrutores e, no caso dos filhos, entre as vias por inscrição e por transcrição. Divergências documentais suspendem a contagem.",
  ultimaActualizacao: "2026-07",
  ultimaActualizacaoLabel: "julho de 2026",
};

const byKey = new Map(PRAZOS_IRN.map((p) => [p.key, p]));

export function getPrazo(key: string): PrazoIRN | undefined {
  return byKey.get(key);
}

/** Prazo formatado. Lança no build se a chave não existir — evita silêncio. */
export function formatPrazo(key: string): string {
  const p = byKey.get(key);
  if (!p) throw new Error(`[prazos] chave desconhecida: "${key}"`);
  return p.prazo;
}

export function formatTaxa(key: string): string {
  const p = byKey.get(key);
  if (!p) throw new Error(`[prazos] chave desconhecida: "${key}"`);
  return p.taxa;
}

/** Tabela em markdown, para injectar via {{prazos:tabela}}. */
export function tabelaPrazosMarkdown(): string {
  const linhas = PRAZOS_IRN.map(
    (p) =>
      `| ${p.via} | ${p.prazo} | ${p.taxa}${p.verba ? ` (${p.verba})` : ""} | ${p.nota ?? "—"} |`
  );
  return [
    "| Via | Prazo indicativo | Taxa | Notas |",
    "|---|---|---|---|",
    ...linhas,
  ].join("\n");
}

/** Rodapé de proveniência, para injectar via {{prazos:meta}}. */
export function metaPrazosMarkdown(): string {
  return `> **Fonte:** ${PRAZOS_META.fonte} — ${PRAZOS_META.referencia}. Última actualização: ${PRAZOS_META.ultimaActualizacaoLabel}. ${PRAZOS_META.aviso}`;
}

// ---------------------------------------------------------------------------
// FILAS REAIS DO IRN
// ---------------------------------------------------------------------------
// O IRN não tem "prazo médio": tem filas por artigo da lei, e cada uma anda ao
// seu ritmo. Filho divide-se em DUAS vias distintas — por transcrição e por
// inscrição — cada uma com linhas separadas para maiores e menores, em cada um
// dos dois órgãos. É por isso que um "prazo de filho" isolado não existe.
//
// Origem: quadros que o Arquivo Central do Porto e a Conservatória dos Registos
// Centrais divulgam nas respostas automáticas. Actualizar em bloco a cada quadro
// novo — e actualizar FILAS_META na mesma passagem.

export type Orgao = "Arquivo Central do Porto" | "Conservatória dos Registos Centrais";
export type Idade = "maiores" | "menores" | "todos";

export interface FilaIRN {
  via: string;
  /** Só existe onde a lei/prática distingue a forma do acto (filho: transcrição vs inscrição) */
  modalidade?: "transcrição" | "inscrição";
  artigo: string;
  orgao: Orgao;
  idade: Idade;
  /** Data de entrada dos processos que o órgão está a analisar */
  dataAnalise: string;
  esperaMeses: number;
}

export const FILAS_IRN: FilaIRN[] = [
  { via: "Filho(a) de português(a)", modalidade: "transcrição", artigo: "1.º/1 c)", orgao: "Arquivo Central do Porto", idade: "maiores", dataAnalise: "1.ª quinzena de maio de 2025", esperaMeses: 14 },
  { via: "Filho(a) de português(a)", modalidade: "transcrição", artigo: "1.º/1 c)", orgao: "Arquivo Central do Porto", idade: "menores", dataAnalise: "2.ª quinzena de novembro de 2025", esperaMeses: 8 },
  { via: "Filho(a) de português(a)", modalidade: "transcrição", artigo: "1.º/1 c)", orgao: "Conservatória dos Registos Centrais", idade: "maiores", dataAnalise: "1.ª quinzena de março de 2022", esperaMeses: 52 },
  { via: "Filho(a) de português(a)", modalidade: "transcrição", artigo: "1.º/1 c)", orgao: "Conservatória dos Registos Centrais", idade: "menores", dataAnalise: "2.ª quinzena de setembro de 2025", esperaMeses: 10 },
  { via: "Filho(a) de português(a)", modalidade: "inscrição", artigo: "1.º/1 c)", orgao: "Arquivo Central do Porto", idade: "maiores", dataAnalise: "2.ª quinzena de fevereiro de 2026", esperaMeses: 5 },
  { via: "Filho(a) de português(a)", modalidade: "inscrição", artigo: "1.º/1 c)", orgao: "Arquivo Central do Porto", idade: "menores", dataAnalise: "1.ª quinzena de maio de 2026", esperaMeses: 2 },
  { via: "Filho(a) de português(a)", modalidade: "inscrição", artigo: "1.º/1 c)", orgao: "Conservatória dos Registos Centrais", idade: "maiores", dataAnalise: "1.ª quinzena de novembro de 2023", esperaMeses: 32 },
  { via: "Filho(a) de português(a)", modalidade: "inscrição", artigo: "1.º/1 c)", orgao: "Conservatória dos Registos Centrais", idade: "menores", dataAnalise: "2.ª quinzena de março de 2026", esperaMeses: 3 },
  { via: "Neto(a) de português(a)", artigo: "1.º/1 d)", orgao: "Arquivo Central do Porto", idade: "maiores", dataAnalise: "1.ª quinzena de setembro de 2023", esperaMeses: 34 },
  { via: "Neto(a) de português(a)", artigo: "1.º/1 d)", orgao: "Arquivo Central do Porto", idade: "menores", dataAnalise: "1.ª quinzena de abril de 2026", esperaMeses: 3 },
  { via: "Neto(a) de português(a)", artigo: "1.º/1 d)", orgao: "Conservatória dos Registos Centrais", idade: "maiores", dataAnalise: "1.ª quinzena de fevereiro de 2022", esperaMeses: 53 },
  { via: "Neto(a) de português(a)", artigo: "1.º/1 d)", orgao: "Conservatória dos Registos Centrais", idade: "menores", dataAnalise: "1.ª quinzena de março de 2026", esperaMeses: 4 },
  { via: "Casamento com português(a)", artigo: "3.º/1", orgao: "Conservatória dos Registos Centrais", idade: "todos", dataAnalise: "1.ª quinzena de novembro de 2021", esperaMeses: 56 },
  { via: "União estável com português(a)", artigo: "3.º/3", orgao: "Conservatória dos Registos Centrais", idade: "todos", dataAnalise: "2.ª quinzena de maio de 2026", esperaMeses: 2 },
  { via: "Residência em Portugal", artigo: "6.º/1", orgao: "Arquivo Central do Porto", idade: "todos", dataAnalise: "1.ª quinzena de outubro de 2023", esperaMeses: 33 },
  { via: "Residência em Portugal", artigo: "6.º/1", orgao: "Conservatória dos Registos Centrais", idade: "todos", dataAnalise: "1.ª quinzena de abril de 2024", esperaMeses: 27 },
  { via: "Menor nascido em Portugal", artigo: "6.º/2 e 3", orgao: "Arquivo Central do Porto", idade: "todos", dataAnalise: "1.ª quinzena de fevereiro de 2026", esperaMeses: 5 },
  { via: "Menor nascido em Portugal", artigo: "6.º/2 e 3", orgao: "Conservatória dos Registos Centrais", idade: "todos", dataAnalise: "2.ª quinzena de abril de 2026", esperaMeses: 3 },
  { via: "Bisneto(a) de português(a)", artigo: "6.º/8", orgao: "Conservatória dos Registos Centrais", idade: "todos", dataAnalise: "1.ª quinzena de janeiro de 2024", esperaMeses: 30 },
  { via: "Filho(a) menor de quem se naturalizou", artigo: "2.º", orgao: "Conservatória dos Registos Centrais", idade: "todos", dataAnalise: "2.ª quinzena de outubro de 2022", esperaMeses: 45 },
  { via: "Descendente de judeus sefarditas", artigo: "6.º/7", orgao: "Arquivo Central do Porto", idade: "todos", dataAnalise: "2.ª quinzena de maio de 2022", esperaMeses: 50 },
  { via: "Descendente de judeus sefarditas", artigo: "6.º/7", orgao: "Conservatória dos Registos Centrais", idade: "todos", dataAnalise: "1.ª quinzena de junho de 2021", esperaMeses: 61 },
];

export const FILAS_META = {
  referenciaQuadro: "julho de 2026",
  orgaos: [
    "Arquivo Central do Porto",
    "Conservatória dos Registos Centrais",
  ] as Orgao[],
};

/** Quadro completo das filas, em markdown. Token: {{filas:tabela}} */
export function tabelaFilasMarkdown(): string {
  const linhas = FILAS_IRN.map((f) => {
    const via = f.modalidade ? `${f.via} — por ${f.modalidade}` : f.via;
    const orgao = f.orgao === "Arquivo Central do Porto" ? "Porto" : "Registos Centrais";
    return `| ${via} | art. ${f.artigo} | ${orgao} | ${f.idade} | ${f.dataAnalise} | ${f.esperaMeses} meses |`;
  });
  return [
    "| Tipo de pedido | Artigo | Órgão | Quem | Data em análise | Espera |",
    "|---|---|---|---|---|---|",
    ...linhas,
  ].join("\n");
}

/** Amplitude de espera de uma via, entre órgãos. Token: {{fila:via}} */
export function amplitudeFila(via: string, idade?: Idade): string {
  const f = FILAS_IRN.filter(
    (x) => x.via.toLowerCase().startsWith(via.toLowerCase()) && (!idade || x.idade === idade)
  );
  if (!f.length) throw new Error(`[filas] via desconhecida: "${via}"`);
  const min = Math.min(...f.map((x) => x.esperaMeses));
  const max = Math.max(...f.map((x) => x.esperaMeses));
  return min === max ? `${min} meses` : `${min} a ${max} meses`;
}
