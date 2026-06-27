// ViannaLegal — Tabela Central de Taxas e Valores
// FONTE ÚNICA DE VERDADE — alterar aqui actualiza todo o site
// Última actualização: junho de 2026

// ── TAXAS IRN (Portugal) ─────────────────────────────────────────
export const TAXAS_IRN = {
  filhos_menores:        { valor: 0,   label: 'Isento',  descricao: 'Filhos menores de português' },
  filhos_maiores:        { valor: 175, label: '€175',    descricao: 'Filhos maiores de português' },
  netos:                 { valor: 175, label: '€175',    descricao: 'Netos de português' },
  bisnetos:              { valor: 175, label: '€175',    descricao: 'Bisnetos — via directa (Art. 6.º n.º 8)' },
  conjuges:              { valor: 250, label: '€250',    descricao: 'Cônjuges / União de facto' },
  naturalizacao:         { valor: 175, label: '€175',    descricao: 'Naturalização por residência' },
  transcricao_casamento: { valor: 120, label: '€120',    descricao: 'Transcrição de casamento' },
  averbamento_divorcio:  { valor: 0,   label: 'Isento',  descricao: 'Averbamento de divórcio' },
  averbamento_obito:     { valor: 0,   label: 'Isento',  descricao: 'Averbamento de óbito' },
  certidao_nascimento:   { valor: 10,  label: '€10–€22', descricao: 'Certidão de nascimento portuguesa', valorMax: 22 },
} as const;

// ── APOSTILA DE HAIA (Brasil) ────────────────────────────────────
export const TAXAS_APOSTILA = {
  referencia: '2026',
  nota: 'Valor por documento apostilado. Cobrado pelo Tribunal de Justiça do Estado emissor.',
  estados: [
    { estado: 'São Paulo',        sigla: 'SP', valor: 158.15 },
    { estado: 'Rio de Janeiro',   sigla: 'RJ', valor: 132.97 },
    { estado: 'Rio Grande do Sul',sigla: 'RS', valor: 73.11  },
    { estado: 'Minas Gerais',     sigla: 'MG', valor: 98.50  },
    { estado: 'Bahia',            sigla: 'BA', valor: 87.20  },
    { estado: 'Outros estados',   sigla: '—',  valor: null, nota: 'Consultar TJ do estado emissor' },
  ],
} as const;

// ── CARTÃO DE CIDADÃO (Portugal) ────────────────────────────────
export const TAXAS_CARTAO_CIDADAO = {
  referencia: '2026',
  fonte: 'gov.pt / IRN',
  modalidades: [
    { tipo: 'Normal (até 25 anos)',    valor: 15,  prazo: '5 a 10 dias úteis' },
    { tipo: 'Normal (mais de 25 anos)',valor: 17,  prazo: '5 a 10 dias úteis' },
    { tipo: 'Urgente / Expresso',      valor: 52,  prazo: '2 dias úteis', nota: '€17 base + €35 urgência' },
    { tipo: '2.ª via (perda/roubo)',   valor: 30,  prazo: '5 a 10 dias úteis' },
  ],
  agendamento: 'https://irn.justica.gov.pt',
  telefone: '211 950 500',
} as const;

// ── PASSAPORTE ELETRÓNICO (Portugal) ────────────────────────────
export const TAXAS_PASSAPORTE = {
  referencia: '2026',
  fonte: 'gov.pt / IRN',
  nota: 'Requer Cartão de Cidadão válido. Pedido obrigatoriamente presencial.',
  modalidades: [
    { tipo: 'Normal',              prazo: '5 a 10 dias úteis', nota: 'Conservatória ou Loja do Cidadão' },
    { tipo: 'Urgente',             prazo: '1 dia útil',        nota: 'Pedido até às 11h' },
    { tipo: 'Urgência aeroporto',  prazo: 'No próprio dia',    nota: 'Pedido até às 11h · levantamento a partir das 17h45 no aeroporto de Lisboa · apenas com agendamento prévio' },
  ],
  agendamentoAeroporto: 'lojaahd.agendamentos@irn.mj.pt',
} as const;

// ── TRADUÇÃO JURAMENTADA ─────────────────────────────────────────
export const TAXAS_TRADUCAO = {
  nota: 'Documentos em português do Brasil não requerem tradução. Outros idiomas sim.',
  valorMedio: 500,
  moeda: 'BRL',
  referencia: '2026',
} as const;

// ── METADATA ─────────────────────────────────────────────────────
export const TAXAS_META = {
  ultimaActualizacao: '2026-06',
  fontes: [
    'IRN — Instituto dos Registos e do Notariado (irn.justica.gov.pt)',
    'Portal do Governo de Portugal (gov.pt)',
    'Tribunais de Justiça estaduais (apostila)',
  ],
  aviso: 'Valores sujeitos a actualização. Confirmar sempre com a fonte oficial antes do pagamento.',
  iof: 'Pagamento via cartão internacional sujeito a IOF de 4,38% (cartões brasileiros).',
};

// ── HELPERS ──────────────────────────────────────────────────────
export const getTaxaIRN = (via: keyof typeof TAXAS_IRN) =>
  TAXAS_IRN[via]?.label ?? '—';

export const getTaxaApostila = (sigla: string) =>
  TAXAS_APOSTILA.estados.find(e => e.sigla === sigla);

export const formatTaxaIRN = (via: keyof typeof TAXAS_IRN): string => {
  const t = TAXAS_IRN[via];
  return t ? t.label : '—';
};
