#!/usr/bin/env node
// Guarda da fonte única dos prazos do IRN (src/config/prazos-irn.json).
// Corre antes do build dos dois sites (prebuild). Falha se:
//   1. um prazo de fila estiver escrito à mão ("34 em Lisboa", "7 meses no Porto"...) fora da fonte única;
//   2. voltar a aparecer um dos prazos antigos já substituídos;
//   3. um marcador {{prazo_<chave>}} não existir na fonte única.
// Para mudar prazos: edite só src/config/prazos-irn.json.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DADOS = JSON.parse(fs.readFileSync(path.join(ROOT, 'src/config/prazos-irn.json'), 'utf-8'));

// Chaves válidas: as filas do JSON, a versão por conservatória e as derivadas de prazos-core.ts.
// Se acrescentar uma chave derivada em prazos-core.ts, acrescente-a também aqui.
const DERIVADAS = ['transcricao', 'bisnetos', 'total_casamento', 'total_dois_filhos', 'total_tres_filhos',
  'total_neto_e_filho', 'total_processo_netos', 'quadros', 'atualizacao'];
const CHAVES = new Set([
  ...Object.keys(DADOS.filas),
  ...Object.keys(DADOS.filas).flatMap((k) => [`${k}_porto`, `${k}_lisboa`]),
  ...DERIVADAS,
]);

const PASTAS = ['src', 'next-app/content', 'next-app/app', 'next-app/lib', 'next-app/components'];
const IGNORAR = new Set([
  'src/config/prazos-irn.json', 'src/config/prazos-core.ts', 'src/config/prazos.ts',
  // ficheiros antigos que nenhum componente importa (sem efeito no build)
  'src/data/blogPosts.ts', 'src/data/allBlogPosts.ts', 'src/data/blogDataPart1.ts', 'src/data/blogPostsDocx.ts',
]);

const ESCRITO_A_MAO = [
  /\b\d+ meses no Porto\b/,
  /\bno Porto e \d+ em Lisboa\b/,
  /\b\d+ (?:meses )?em Lisboa\b/,
];
const ANTIGOS = [
  /\b4 a 6 meses\b/, /\b42 ?(?:a|–|-) ?48 meses\b/, /\b50 ?(?:a|–|-) ?54 meses\b/, /\b27 ?(?:a|–|-) ?30 meses\b/,
  /\b3 a 5 meses\b/, /\b18 ?(?:a|-) ?36 meses\b/, /\b24 ?(?:a|-) ?36 meses\b/, /\b41–56 meses\b/, /\b27–54 meses\b/,
  /\b36-54 meses\b/, /\b40 a 56 meses\b/, /\b8-14 meses\b/, /\b16-24 meses\b/, /\b24-40 meses\b/, /\b26 a 44 meses\b/,
  /\babr\/mai 2026\b/,
];

const erros = [];
function verificar(rel, texto) {
  texto.split('\n').forEach((linha, i) => {
    const onde = `${rel}:${i + 1}`;
    for (const re of ESCRITO_A_MAO) if (re.test(linha)) erros.push(`${onde}: prazo escrito à mão (${linha.match(re)[0]}): use um marcador {{prazo_...}}`);
    for (const re of ANTIGOS) if (re.test(linha)) erros.push(`${onde}: prazo antigo (${linha.match(re)[0]})`);
    for (const m of linha.matchAll(/\{\{prazo_([a-z_]+)\}\}/g)) {
      if (!CHAVES.has(m[1])) erros.push(`${onde}: marcador desconhecido {{prazo_${m[1]}}}`);
    }
  });
}

function andar(dir) {
  if (!fs.existsSync(dir)) return;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const abs = path.join(dir, e.name);
    const rel = path.relative(ROOT, abs).split(path.sep).join('/');
    if (e.isDirectory()) { if (!['node_modules', '.next'].includes(e.name)) andar(abs); continue; }
    if (!/\.(ts|tsx|mdx|json)$/.test(e.name) || IGNORAR.has(rel)) continue;
    verificar(rel, fs.readFileSync(abs, 'utf-8'));
  }
}

PASTAS.forEach((p) => andar(path.join(ROOT, p)));
if (erros.length) {
  console.error(`check-prazos: ${erros.length} problema(s). Os prazos do IRN só se mudam em src/config/prazos-irn.json.\n` + erros.join('\n'));
  process.exit(1);
}
console.log(`check-prazos: OK (${CHAVES.size} chaves; nenhum prazo escrito à mão fora da fonte única)`);
