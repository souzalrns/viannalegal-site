// Prazos do IRN: gera as frases a partir de prazos-irn.json (fonte única).
// Usado pelo site Vite (src/) e pelo next-app (via experimental.externalDir).
// Sem imports de alias: tem de compilar nos dois projectos.
import dados from './prazos-irn.json';

type Fila = { porto?: number; lisboa?: number };
const F = dados.filas as Record<string, Fila>;

export const PRAZOS_DADOS = dados;

/** "36 meses no Porto e 55 em Lisboa"; uma só conservatória: "58 meses em Lisboa". */
export function textoFila(f: Fila): string {
  if (f.porto !== undefined && f.lisboa !== undefined) {
    return f.porto === f.lisboa
      ? `${f.porto} meses no Porto e em Lisboa`
      : `${f.porto} meses no Porto e ${f.lisboa} em Lisboa`;
  }
  if (f.lisboa !== undefined) return `${f.lisboa} meses em Lisboa`;
  if (f.porto !== undefined) return `${f.porto} meses no Porto`;
  return 'a confirmar';
}

function soma(...filas: Fila[]): Fila {
  return {
    porto: filas.reduce((s, f) => s + (f.porto ?? 0), 0),
    lisboa: filas.reduce((s, f) => s + (f.lisboa ?? 0), 0),
  };
}

function anos(meses: number): string {
  const v = Math.round((meses / 12) * 2) / 2; // ao meio ano
  return Number.isInteger(v) ? `${v}` : `${v}`.replace('.', ',');
}

/** Processo completo de neto maior: organização + análise + registo, ao meio ano. */
function totalNetos(): string {
  const e = dados.etapasProcessoNetos;
  const n = F.netos_maiores;
  const medio = (x: number) => (e.organizacaoMin + x + e.registoMin + e.organizacaoMax + x + e.registoMax) / 2;
  return `cerca de ${anos(medio(n.porto!))} anos no Porto e ${anos(medio(n.lisboa!))} anos em Lisboa`;
}

const cerca = (f: Fila) => `cerca de ${textoFila(f)}`;

/** Texto de cada marcador {{prazo_<chave>}}. */
export const PRAZO_TEXTO: Record<string, string> = {
  ...Object.fromEntries(Object.entries(F).map(([k, f]) => [k, textoFila(f)])),
  // uma conservatória de cada vez (tabelas Porto | Lisboa)
  ...Object.fromEntries(Object.entries(F).flatMap(([k, f]) => [
    [`${k}_porto`, f.porto !== undefined ? `${f.porto} meses` : 'sem fila publicada'],
    [`${k}_lisboa`, f.lisboa !== undefined ? `${f.lisboa} meses` : 'sem fila publicada'],
  ])),
  // filhos: o prazo publicado por omissão é o da inscrição (a transcrição tem marcador próprio)
  filhos_menores: `${textoFila(F.filhos_menores)} (inscrição)`,
  filhos_maiores: `${textoFila(F.filhos_maiores)} (inscrição)`,
  filhos_menores_transcricao: `${textoFila(F.filhos_menores_transcricao)} (transcrição)`,
  filhos_maiores_transcricao: `${textoFila(F.filhos_maiores_transcricao)} (transcrição)`,
  transcricao: `${dados.outros.transcricao_casamento.min} a ${dados.outros.transcricao_casamento.max} meses`,
  total_casamento: `cerca de ${dados.outros.transcricao_casamento.min + F.casamento.lisboa!} a ${dados.outros.transcricao_casamento.max + F.casamento.lisboa!} meses em Lisboa`,
  // totais calculados: nunca escritos à mão
  total_dois_filhos: cerca(soma(F.filhos_maiores, F.filhos_maiores)),
  total_tres_filhos: cerca(soma(F.filhos_maiores, F.filhos_maiores, F.filhos_maiores)),
  total_neto_e_filho: cerca(soma(F.netos_maiores, F.filhos_maiores)),
  total_processo_netos: totalNetos(),
  quadros: dados.quadrosTexto,
  atualizacao: dados.atualizacaoTexto,
};

const MARCADOR = /\{\{prazo_([a-z_]+)\}\}/g;

/** Troca cada {{prazo_x}}; um marcador desconhecido faz falhar (o build apanha-o). */
export function resolvePrazos(texto: string): string {
  return texto.replace(MARCADOR, (_m, chave: string) => {
    const v = PRAZO_TEXTO[chave];
    if (v === undefined) throw new Error(`Marcador de prazo desconhecido: {{prazo_${chave}}}`);
    return v;
  });
}

/** Resolve os marcadores em todas as strings de um objecto ou lista (dados de páginas, FAQ, quiz). */
export function resolvePrazosDeep<T>(valor: T): T {
  if (typeof valor === 'string') return resolvePrazos(valor) as unknown as T;
  if (Array.isArray(valor)) return valor.map(resolvePrazosDeep) as unknown as T;
  // só objectos simples: elementos React, classes e funções passam intactos
  if (valor && typeof valor === 'object' && Object.getPrototypeOf(valor) === Object.prototype && !('$$typeof' in valor)) {
    return Object.fromEntries(Object.entries(valor).map(([k, v]) => [k, resolvePrazosDeep(v)])) as T;
  }
  return valor;
}
