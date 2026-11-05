// ViannaLegal — Tabela Central de Prazos IRN
// Os números vêm de prazos-irn.json (FONTE ÚNICA); as frases, de prazos-core.ts.
// Para actualizar os prazos, mude só o prazos-irn.json. Nada aqui tem números escritos à mão.
import { PRAZOS_DADOS, PRAZO_TEXTO, textoFila } from './prazos-core';

export { PRAZO_TEXTO, resolvePrazos, resolvePrazosDeep } from './prazos-core';

export interface PrazoIRN {
  via: string;
  slug: string;
  chave?: string; // chave em prazos-irn.json (filas)
  prazo: string;
  prazoMin: number; // meses
  prazoMax: number; // meses
  porto?: number; // meses de espera no Arquivo Central do Porto
  lisboa?: number; // meses de espera na Conservatória dos Registos Centrais
  taxa: string;
  complexidade: 'baixa' | 'media' | 'alta';
  nota?: string;
}

const F = PRAZOS_DADOS.filas as Record<string, { porto?: number; lisboa?: number }>;

function fila(chave: string, extra: Omit<PrazoIRN, 'prazo' | 'prazoMin' | 'prazoMax' | 'porto' | 'lisboa' | 'chave'>, sufixo = ''): PrazoIRN {
  const f = F[chave];
  const vals = [f.porto, f.lisboa].filter((v): v is number => v !== undefined);
  return { ...extra, chave, prazo: textoFila(f) + sufixo, prazoMin: Math.min(...vals), prazoMax: Math.max(...vals), porto: f.porto, lisboa: f.lisboa };
}

export const PRAZOS_IRN: PrazoIRN[] = [
  fila('filhos_menores', { via: 'Filho(a) menor de português', slug: 'filhos-menores', taxa: 'Isento', complexidade: 'baixa',
    nota: `Por transcrição: ${PRAZO_TEXTO.filhos_menores_transcricao}.` }, ' (inscrição)'),
  fila('filhos_maiores', { via: 'Filho(a) maior de português', slug: 'filhos-maiores', taxa: '€175', complexidade: 'baixa',
    nota: `Por transcrição: ${PRAZO_TEXTO.filhos_maiores_transcricao}.` }, ' (inscrição)'),
  fila('netos_menores', { via: 'Neto(a) menor de português', slug: 'netos', taxa: '€175', complexidade: 'media' }),
  fila('netos_maiores', { via: 'Neto(a) maior de português', slug: 'netos', taxa: '€175', complexidade: 'alta',
    nota: 'Requer comprovação de vínculo efetivo.' }),
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
  fila('casamento', { via: 'Casamento / União de facto', slug: 'conjuges', taxa: '€250', complexidade: 'alta',
    nota: `Só a Conservatória dos Registos Centrais publica esta fila. União de facto tem fila própria: ${PRAZO_TEXTO.uniao_facto_lisboa}. Sujeito a verificação de vínculo efetivo.` }, ' (casamento)'),
  {
    via: 'Transcrição de casamento',
    slug: 'transcricao-casamento',
    prazo: PRAZO_TEXTO.transcricao,
    prazoMin: 2,
    prazoMax: 3,
    taxa: '€120',
    complexidade: 'baixa',
  },
  fila('naturalizacao', { via: 'Naturalização por residência (CPLP/Brasil)', slug: 'residencia', taxa: '€175', complexidade: 'alta',
    nota: 'Após 7 anos de residência legal. Prazo conta a partir da emissão do cartão de residência válido.' }),
];

// Metadata da fonte
export const PRAZOS_META = {
  fonte: 'IRN — Instituto dos Registos e do Notariado',
  referencia: `${PRAZOS_DADOS.fonte}, ${PRAZOS_DADOS.quadrosTexto}. Espera = tempo desde a data dos processos em análise.`,
  aviso: 'Prazos médios. Divergências documentais suspendem a contagem.',
  ultimaActualizacao: PRAZOS_DADOS.atualizacao,
};

/** Prazo de uma fila pela chave de prazos-irn.json (ex.: 'netos_maiores'). */
export const prazoDe = (chave: string): string => PRAZO_TEXTO[chave] ?? 'A confirmar';

// Helper — buscar prazo por slug
export const getPrazo = (slug: string): PrazoIRN | undefined =>
  PRAZOS_IRN.find(p => p.slug === slug);

// Helper — prazo formatado para exibição
export const formatPrazo = (slug: string): string => {
  const p = getPrazo(slug);
  return p ? p.prazo : 'A confirmar';
};
