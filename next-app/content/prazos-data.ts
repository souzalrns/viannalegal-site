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
  complexidade: "baixa" | "media" | "alta";
  nota?: string;
}

export const PRAZOS_IRN: PrazoIRN[] = [
  {
    key: "filhos-menores",
    via: "Filho(a) menor de português",
    slug: "filhos-menores",
    prazo: "3 a 5 meses",
    prazoMin: 3,
    prazoMax: 5,
    taxa: "Isento",
    verba: "art. 10.º/1 g) e h)",
    complexidade: "baixa",
  },
  {
    key: "filhos-maiores",
    via: "Filho(a) maior de português",
    slug: "filhos-maiores",
    prazo: "4 a 6 meses",
    prazoMin: 4,
    prazoMax: 6,
    taxa: "€175",
    verba: "18.º/2.1.1",
    complexidade: "baixa",
    nota: "Processos novos pós-Lei 1/2026",
  },
  {
    key: "netos-menores",
    via: "Neto(a) menor de português",
    slug: "netos",
    prazo: "3 a 5 meses",
    prazoMin: 3,
    prazoMax: 5,
    taxa: "€175",
    verba: "18.º/2.1.1",
    complexidade: "media",
  },
  {
    key: "netos-maiores",
    via: "Neto(a) maior de português",
    slug: "netos",
    prazo: "42 a 48 meses",
    prazoMin: 42,
    prazoMax: 48,
    taxa: "€175",
    verba: "18.º/2.1.1",
    complexidade: "alta",
    nota: "Requer comprovação de vínculo efetivo",
  },
  {
    key: "bisnetos",
    via: "Bisneto(a) — via directa (art. 6.º n.º 8)",
    slug: "bisnetos",
    prazo: "28 a 36 meses",
    prazoMin: 28,
    prazoMax: 36,
    taxa: "€175",
    verba: "18.º/2.1.1",
    complexidade: "alta",
    nota:
      "Regulamentação da Lei 1/2026 aguardada em breve. Exige 5 anos de residência em Portugal.",
  },
  {
    key: "conjuges",
    via: "Casamento / União de facto",
    slug: "conjuges",
    prazo: "50 a 54 meses",
    prazoMin: 50,
    prazoMax: 54,
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
    prazo: "27 a 30 meses",
    prazoMin: 27,
    prazoMax: 30,
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
    "Prazos médios. Divergências documentais suspendem a contagem, e o órgão onde o processo é instruído altera significativamente a espera.",
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
