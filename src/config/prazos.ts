// ViannaLegal — Tabela Central de Prazos IRN
// FONTE ÚNICA DE VERDADE — alterar aqui actualiza todo o site
// Última actualização: novembro de 2026 (quadros IRN de setembro/outubro de 2026: Conservatória dos Registos Centrais e Arquivo Central do Porto)

export interface PrazoIRN {
  via: string;
  slug: string;
  prazo: string;
  prazoMin: number; // meses
  prazoMax: number; // meses
  porto?: number; // meses de espera no Arquivo Central do Porto
  lisboa?: number; // meses de espera na Conservatória dos Registos Centrais
  taxa: string;
  complexidade: 'baixa' | 'media' | 'alta';
  nota?: string;
}

export const PRAZOS_IRN: PrazoIRN[] = [
  {
    via: 'Filho(a) menor de português',
    slug: 'filhos-menores',
    prazo: '4 meses no Porto e 3 em Lisboa (inscrição)',
    porto: 4,
    lisboa: 3,
    prazoMin: 3,
    prazoMax: 11,
    taxa: 'Isento',
    complexidade: 'baixa',
    nota: 'Por transcrição: 11 meses no Porto e em Lisboa.',
  },
  {
    via: 'Filho(a) maior de português',
    slug: 'filhos-maiores',
    prazo: '7 meses no Porto e 34 em Lisboa (inscrição)',
    porto: 7,
    lisboa: 34,
    prazoMin: 7,
    prazoMax: 53,
    taxa: '€175',
    complexidade: 'baixa',
    nota: 'Por transcrição: 15 meses no Porto e 53 em Lisboa.',
  },
  {
    via: 'Neto(a) menor de português',
    slug: 'netos',
    prazo: '6 meses no Porto e 5 em Lisboa',
    porto: 6,
    lisboa: 5,
    prazoMin: 5,
    prazoMax: 6,
    taxa: '€175',
    complexidade: 'media',
  },
  {
    via: 'Neto(a) maior de português',
    slug: 'netos',
    prazo: '36 meses no Porto e 55 em Lisboa',
    porto: 36,
    lisboa: 55,
    prazoMin: 36,
    prazoMax: 55,
    taxa: '€175',
    complexidade: 'alta',
    nota: 'Requer comprovação de vínculo efetivo.',
  },
  {
    via: 'Bisneto(a) — via directa (Art. 6.º n.º 8)',
    slug: 'bisnetos',
    prazo: 'A confirmar',
    prazoMin: 0,
    prazoMax: 0,
    taxa: '€175',
    complexidade: 'alta',
    nota: 'Regulamentação aprovada a 29/10/2026, aguarda publicação. Exige 5 anos residência em Portugal.',
  },
  {
    via: 'Casamento / União de facto',
    slug: 'conjuges',
    prazo: '58 meses (casamento, Lisboa)',
    lisboa: 58,
    prazoMin: 4,
    prazoMax: 58,
    taxa: '€250',
    complexidade: 'alta',
    nota: 'Só a Conservatória dos Registos Centrais publica esta fila. União de facto tem fila própria: 4 meses. Sujeito a verificação de vínculo efetivo.',
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
    prazo: '33 meses no Porto e 27 em Lisboa',
    porto: 33,
    lisboa: 27,
    prazoMin: 27,
    prazoMax: 33,
    taxa: '€175',
    complexidade: 'alta',
    nota: 'Após 7 anos de residência legal. Prazo conta a partir da emissão do cartão de residência válido.',
  },
];

// Metadata da fonte
export const PRAZOS_META = {
  fonte: 'IRN — Instituto dos Registos e do Notariado',
  referencia: 'Quadros publicados pelo IRN (Conservatória dos Registos Centrais e Arquivo Central do Porto), setembro/outubro de 2026. Espera = tempo desde a data dos processos em análise.',
  aviso: 'Prazos médios. Divergências documentais suspendem a contagem.',
  ultimaActualizacao: '2026-11',
};

// Helper — buscar prazo por slug
export const getPrazo = (slug: string): PrazoIRN | undefined =>
  PRAZOS_IRN.find(p => p.slug === slug);

// Helper — prazo formatado para exibição
export const formatPrazo = (slug: string): string => {
  const p = getPrazo(slug);
  return p ? p.prazo : 'A confirmar';
};
