/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // 301s aprovados no M0/M4 — ver redirects.json para o histórico completo.
  // NOTA: bisnetos-via1-vs-via2-cidadania-portuguesa foi deixado FORA de
  // propósito — bloqueado por revisão jurídica final da Kathia sobre Via1/Via2,
  // ainda pendente. Não redireccionar nem apagar até essa revisão fechar.
  async redirects() {
    return [
      // Guias gerais duplicados -> hub
      { source: "/blog/guia-completo-cidadania-portuguesa-2025", destination: "/cidadania-portuguesa", permanent: true },
      { source: "/blog/guia-definitivo-todas-as-formas-de-obter-cidadania-portuguesa-em-2026", destination: "/cidadania-portuguesa", permanent: true },

      // Netos duplicados -> hub de netos
      { source: "/blog/cidadania-portuguesa-netos-guia-definitivo-2025", destination: "/cidadania-portuguesa/netos", permanent: true },
      { source: "/blog/nacionalidade-portuguesa-para-netos-guia-completo-2026", destination: "/cidadania-portuguesa/netos", permanent: true },

      // Filhos -> REMOVIDO em 2026-08-30 por decisão explícita: destino não
      // confirmado (filhos-menores vs filhos-maiores). Fica só como PENDENTE
      // no redirects.json de proposta até validação de Luiz/Kathia. NÃO
      // reactivar aqui sem essa confirmação.

      // Casamento/união de facto duplicados -> hub de cônjuges
      { source: "/blog/cidadania-portuguesa-por-casamento-guia-completo", destination: "/cidadania-portuguesa/conjuges", permanent: true },
      { source: "/blog/nacionalidade-portuguesa-por-casamento-uniao-facto-2026", destination: "/cidadania-portuguesa/conjuges", permanent: true },
      { source: "/blog/cidadania-portuguesa-para-casais-em-uniao-de-facto-uniao-estavel", destination: "/cidadania-portuguesa/conjuges", permanent: true },

      // Residência duplicados -> hub de residência
      { source: "/blog/cidadania-portuguesa-por-residencia-passo-a-passo", destination: "/cidadania-portuguesa/residencia", permanent: true },
      { source: "/blog/naturalizacao-por-residencia-em-portugal-requisitos-atualizados-2026", destination: "/cidadania-portuguesa/residencia", permanent: true },

      // Custos duplicado -> página de serviço
      { source: "/blog/quanto-custa-nacionalidade-portuguesa-2026", destination: "/quanto-custa", permanent: true },

      // Acompanhar processo (2 quase-duplicados) -> página fundida nova
      { source: "/blog/como-acompanhar-processo-cidadania-portuguesa", destination: "/prazos-e-acompanhamento", permanent: true },
      { source: "/blog/como-acompanhar-o-andamento-do-processo-de-cidadania-portuguesa", destination: "/prazos-e-acompanhamento", permanent: true },

      // Locais BR (8 posts thin) -> página fundida nova
      { source: "/blog/cidadania-portuguesa-para-brasileiros-que-moram-no-brasil-em-2026", destination: "/cidadania-portuguesa/quem-mora-no-brasil", permanent: true },
      { source: "/blog/cidadania-portuguesa-para-brasileiros-em-sao-paulo", destination: "/cidadania-portuguesa/quem-mora-no-brasil", permanent: true },
      { source: "/blog/cidadania-portuguesa-para-brasileiros-no-rio-de-janeiro", destination: "/cidadania-portuguesa/quem-mora-no-brasil", permanent: true },
      { source: "/blog/cidadania-portuguesa-para-brasileiros-no-sul-do-brasil", destination: "/cidadania-portuguesa/quem-mora-no-brasil", permanent: true },
      { source: "/blog/cidadania-portuguesa-para-brasileiros-em-belo-horizonte-e-minas-gerais", destination: "/cidadania-portuguesa/quem-mora-no-brasil", permanent: true },
      { source: "/blog/cidadania-portuguesa-para-brasileiros-em-curitiba-e-parana", destination: "/cidadania-portuguesa/quem-mora-no-brasil", permanent: true },
      { source: "/blog/cidadania-portuguesa-para-brasileiros-no-nordeste", destination: "/cidadania-portuguesa/quem-mora-no-brasil", permanent: true },
      { source: "/blog/cidadania-portuguesa-para-brasileiros-em-brasilia-e-centro-oeste", destination: "/cidadania-portuguesa/quem-mora-no-brasil", permanent: true },

      // BLOQUEADO — NÃO adicionar sem revisão jurídica da Kathia:
      // { source: "/blog/bisnetos-via1-vs-via2-cidadania-portuguesa", destination: "/cidadania-portuguesa/bisnetos", permanent: true },
    ];
  },
};

module.exports = nextConfig;
