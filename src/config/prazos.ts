// ViannaLegal — Tabela Central de Prazos IRN
// FONTE ÚNICA DE VERDADE — alterar aqui actualiza todo o site
// Última actualização: junho de 2026 (dados IRN abr/mai 2026)

export interface PrazoIRN {
  via: string;
  slug: string;
  prazo: string;
  prazoMin: number; // meses
  prazoMax: number; // meses
  taxa: string;
  complexidade: 'baixa' | 'media' | 'alta';
  nota?: string;
}

export const PRAZOS_IRN: PrazoIRN[] = [
  {
    via: 'Filho(a) menor de português',
    slug: 'filhos-menores',
    prazo: '3 a 5 meses',
    prazoMin: 3,
    prazoMax: 5,
    taxa: 'Isento',
    complexidade: 'baixa',
  },
  {
    via: 'Filho(a) maior de português',
    slug: 'filhos-maiores',
    prazo: '4 a 6 meses',
    prazoMin: 4,
    prazoMax: 6,
    taxa: '€175',
    complexidade: 'baixa',
    nota: 'Processos novos pós-Lei 1/2026',
  },
  {
    via: 'Neto(a) menor de português',
    slug: 'netos',
    prazo: '3 a 5 meses',
    prazoMin: 3,
    prazoMax: 5,
    taxa: '€175',
    complexidade: 'media',
  },
  {
    via: 'Neto(a) maior de português',
    slug: 'netos',
    prazo: '42 a 48 meses',
    prazoMin: 42,
    prazoMax: 48,
    taxa: '€175',
    complexidade: 'alta',
    nota: 'Requer comprovação de vínculo efetivo',
  },
  {
    via: 'Bisneto(a) — via directa (Art. 6.º n.º 8)',
    slug: 'bisnetos',
    prazo: 'A confirmar',
    prazoMin: 0,
    prazoMax: 0,
    taxa: '€175',
    complexidade: 'alta',
    nota: 'Regulamentação pendente até agosto de 2026. Exige 5 anos residência em Portugal.',
  },
  {
    via: 'Casamento / União de facto',
    slug: 'conjuges',
    prazo: '50 a 54 meses',
    prazoMin: 50,
    prazoMax: 54,
    taxa: '€250',
    complexidade: 'alta',
    nota: 'Sujeito a verificação de vínculo efetivo',
  },
  {
    via: 'Transcrição de casamento',
    slug: 'transcricao-casamento',
    prazo: '2 a 3 meses',
    prazoMin: 2,
    prazoMax: 3,
    taxa: '€120',
    complexidade: 'baixa',
  },
  {
    via: 'Naturalização por residência (CPLP/Brasil)',
    slug: 'residencia',
    prazo: '27 a 30 meses',
    prazoMin: 27,
    prazoMax: 30,
    taxa: '€175',
    complexidade: 'alta',
    nota: 'Após 7 anos de residência legal. Prazo conta a partir da emissão do cartão de residência válido.',
  },
];

// Metadata da fonte
export const PRAZOS_META = {
  fonte: 'IRN — Instituto dos Registos e do Notariado',
  referencia: 'Dados de atendimento abril/maio 2026',
  aviso: 'Prazos médios. Divergências documentais suspendem a contagem.',
  ultimaActualizacao: '2026-06',
};

// Helper — buscar prazo por slug
export const getPrazo = (slug: string): PrazoIRN | undefined =>
  PRAZOS_IRN.find(p => p.slug === slug);

// Helper — prazo formatado para exibição
export const formatPrazo = (slug: string): string => {
  const p = getPrazo(slug);
  return p ? p.prazo : 'A confirmar';
};
