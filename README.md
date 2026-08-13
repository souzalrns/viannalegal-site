# ViannaLegal

> Site institucional e motor de conteúdo jurídico para um escritório especializado em cidadania portuguesa para descendentes de brasileiros.

[🔗 Ver Aplicação em Produção](https://viannalegal.com.br)

![Status](https://img.shields.io/badge/Status-Em%20Produção-brightgreen)
![Vite](https://img.shields.io/badge/Vite-React-646CFF)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind](https://img.shields.io/badge/Tailwind-CSS-38B2AC)

---

## O Problema

Processos de cidadania portuguesa por descendência são complexos, mudam com frequência (nova Lei Orgânica em 2026), e a maioria dos escritórios de advocacia não tem presença digital que reflita esse conhecimento técnico. Sem conteúdo educativo claro e atualizado, potenciais clientes ficam à mercê de informação desatualizada ou de intermediários sem formação jurídica.

## Principais Funcionalidades

- **82 artigos técnicos** cobrindo bisnetos, avós, história/cultura e outras rotas de cidadania — cada um com marcação FAQPage (schema.org)
- **Formulário de contacto** integrado (Web3Forms) diretamente ligado à advogada responsável
- **Quiz de elegibilidade** interativo para triagem inicial de potenciais clientes
- **Blog com sistema próprio** de conteúdo (sem depender de CMS externo)

## Stack Técnica

- **Frontend:** Vite + React + TypeScript
- **UI:** Tailwind CSS + shadcn/ui (Radix UI)
- **SEO técnico:** Schema markup próprio (FAQPage, 146 pares pergunta/resposta), sitemap de 96 URLs
- **Formulários:** Web3Forms (sem backend próprio para isto)
- **Infraestrutura:** Vercel

## Destaques Técnicos

1. **SPA com SEO tratado à parte:** sendo uma Single Page Application, o conteúdo que os crawlers recebem por defeito é um `<div id="root">` vazio — resolvido com marcação de schema estruturada por página e sitemap completo, em vez de reescrever o site inteiro para SSR antes de validar o produto. Migração para Next.js (SSR/SSG) fica planeada como evolução futura, não bloqueio inicial.
2. **Conteúdo como dado, não como CMS:** os 82 artigos vivem como dados tipados em TypeScript (`src/data/`), não numa base de dados externa — decisão consciente para manter o site simples de fazer deploy (Vercel, sem backend) enquanto o volume de conteúdo ainda é gerível manualmente.
3. **Atualização legal ativa:** conteúdo revisto para refletir a Lei Orgânica 1/2026 (residência de 7 anos, rota direta para bisnetos, teste de história/cultura) — o site acompanha mudanças legislativas reais, não é conteúdo estático esquecido.

## Como Rodar Localmente

```bash
git clone https://github.com/souzalrns/viannalegal-site.git
cd viannalegal-site
npm install
npm run dev
```

## Estado do Projeto

**Em produção** — 82 artigos publicados, GA4 e Search Console ativos. Próximo passo técnico planeado: migração para Next.js SSR para resolver a limitação de SPA nos crawlers.

---

Feito por Luiz Souza • [LinkedIn](#) • [Portfólio](#)
