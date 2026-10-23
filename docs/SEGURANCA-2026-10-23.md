# Análise de segurança: site novo (`next-app/`) e site atual

**Data:** 23/10/2026.

**Âmbito:**
- `next-app/`: a versão Next.js que ainda não está no ar;
- a configuração do site atual (Vite, `vercel.json` da raiz).

**Método:**
- `npm audit --omit=dev` nas duas apps;
- leitura do código: injeção de HTML, leitura de ficheiros, segredos, formulários e cabeçalhos;
- build;
- arranque local do `next-app`, com verificação dos cabeçalhos e dos 404.

## Achados

| # | Severidade | Onde | Achado | Estado |
|---|---|---|---|---|
| 1 | **Crítica** | `next-app` | Next.js `15.5.24` com 3 avisos: execução remota de código na otimização de imagens com SVG (GHSA-2464-fhr4-w9xw) e dois de envenenamento da cache SSG/ISR (GHSA-4jqv-mc3x-m676, GHSA-mcj8-r9mp-w47p) | **Corrigido:** `next@15.5.28`, fixo |
| 2 | Alta | `next-app` | `sharp` (librsvg), `postcss` (XSS no stringify e leitura de ficheiros pelo `sourceMappingURL`), `source-map-js` (DoS) | **Corrigido:** `npm audit` = **0**. O `postcss` fica forçado a `8.5.26` por `overrides` (o Next 15 fixa o `8.4.31`; só o Next 16 o resolve) |
| 3 | **Alta** | `next-app` | **Sem cabeçalhos de segurança:** nem CSP, nem HSTS, nem X-Frame-Options, nem nosniff. O site atual tem-nos; ao passar para o Next, perdiam-se | **Corrigido** em `next.config.js`: CSP sem Google (esta versão não usa GA nem Google Fonts), `connect-src` para o Web3Forms, `object-src 'none'`, `base-uri`, `form-action`, `frame-ancestors 'none'`, HSTS, `X-Frame-Options: DENY`, nosniff, Referrer-Policy, Permissions-Policy e `poweredByHeader: false`. Verificado com `next start` |
| 4 | **Alta (provável)** | Site atual | O CSP de produção (`vercel.json`) não incluía `https://api.web3forms.com` no `connect-src`, e o formulário de contacto faz `fetch` para lá. **O browser deve estar a bloquear os envios.** Não consegui confirmar ao vivo (a rede desta sessão não chega ao domínio) | **Corrigido** no `vercel.json`, e juntei `object-src 'none'` e `base-uri 'self'`. **Confirmar:** abrir `/contato`, F12 → Console, e enviar um teste antes e depois do deploy |
| 5 | Média | `next-app` | O JSON-LD (`lib/schema.ts`) era feito com `JSON.stringify` sem escape: um texto do conteúdo com `</script>` fechava a tag e injetava HTML | **Corrigido:** escape de `<`, U+2028 e U+2029 |
| 6 | Baixa | `next-app` | `/blog/[slug]` e `/cidadania-portuguesa/[slug]` aceitavam qualquer slug e iam ler `content/blog/<slug>.mdx` ao disco | **Corrigido:** `dynamicParams = false`. Só existem os slugs gerados no build; `/blog/..%2F..%2Fpackage` e slugs inventados dão 404 |
| 7 | Informativa | As duas apps | A `access_key` do Web3Forms está no código do cliente. É assim por desenho do Web3Forms (a chave é pública), mas qualquer pessoa pode usá-la para enviar spam para o email da Kathia. Já existe o honeypot `botcheck` | **Ação no painel do Web3Forms:** restringir aos domínios `viannalegal.com.br` (e ao do `next-app`, quando existir) e ativar o captcha (hCaptcha grátis) |
| 8 | Informativa | `next-app` | O conteúdo `.mdx` passa a HTML pelo `marked`, sem sanitização | Aceite: o conteúdo é nosso e passa por PR; nenhum utilizador escreve conteúdo |
| 9 | Baixa | Site atual | `npm audit`: `postcss-selector-parser` (moderada, CPU) e `source-map-js` (alta, DoS), por via do Tailwind 3 | Só afetam o build (processar o nosso próprio CSS); o site publicado é estático, por isso **não são exploráveis em produção**. Desaparecem com o Tailwind 4, numa migração própria |

## O que não encontrei

- Segredos de servidor no repositório.
- APIs próprias, sessões ou bases de dados.
- Redirects abertos: todos os 301 têm destino fixo.

## Próximos passos (maestro)

1. Fazer o merge deste PR. Depois, testar o formulário de contacto do site atual (achado 4).
2. No Web3Forms: restrição de domínio e captcha (achado 7).
3. Antes de pôr o `next-app` no ar: domínio, Vercel e o mesmo teste do formulário.
