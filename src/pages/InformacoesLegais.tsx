import { Helmet } from 'react-helmet-async';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/sections/Footer';
import { useScrollToHash } from '@/hooks/useScrollToHash';
import { SITE_CONFIG } from '@/config/site';

export default function InformacoesLegais() {
  useScrollToHash();

  return (
    <>
      <Helmet>
        <title>Informações Legais | ViannaLegal</title>
        <meta
          name="description"
          content="Identificação legal da ViannaLegal: inscrição na Ordem dos Advogados, regime profissional, resolução alternativa de litígios e Livro de Reclamações."
        />
        <link rel="canonical" href="https://viannalegal.com.br/informacoes-legais" />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main className="pt-24">
          <section className="py-16">
            <div className="container-width max-w-4xl">
              <h1 className="font-display text-4xl font-bold text-foreground mb-8">
                Informações Legais
              </h1>

              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="text-sm text-muted-foreground mb-8">
                  Última atualização: {new Date().toLocaleDateString('pt-BR')}
                </p>

                <p>
                  Em cumprimento do Decreto-Lei n.º 7/2004 (comércio eletrónico) e das regras de publicidade
                  da Ordem dos Advogados aplicáveis a serviços jurídicos promovidos online, disponibilizam-se
                  as seguintes informações de identificação.
                </p>

                <h2 className="font-display text-2xl font-semibold text-foreground mt-8 mb-4">
                  Identificação do titular
                </h2>
                <div className="bg-primary text-primary-foreground rounded-xl p-6 not-prose space-y-3">
                  <div className="flex justify-between border-b border-primary-foreground/10 pb-3">
                    <span className="text-primary-foreground/60 text-sm">Nome</span>
                    <span className="font-mono text-sm">{SITE_CONFIG.lawyer.name}</span>
                  </div>
                  <div className="flex justify-between border-b border-primary-foreground/10 pb-3">
                    <span className="text-primary-foreground/60 text-sm">Ordem dos Advogados</span>
                    <span className="font-mono text-sm">Cédula n.º 56666P</span>
                  </div>
                  <div className="flex justify-between border-b border-primary-foreground/10 pb-3">
                    <span className="text-primary-foreground/60 text-sm">NIF / NIPC</span>
                    <span className="font-mono text-sm">[NIF A PREENCHER]</span>
                  </div>
                  <div className="flex justify-between border-b border-primary-foreground/10 pb-3">
                    <span className="text-primary-foreground/60 text-sm">Morada</span>
                    <span className="font-mono text-sm">[MORADA A PREENCHER]</span>
                  </div>
                  <div className="flex justify-between border-b border-primary-foreground/10 pb-3">
                    <span className="text-primary-foreground/60 text-sm">Email</span>
                    <span className="font-mono text-sm">{SITE_CONFIG.lawyer.email}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-primary-foreground/60 text-sm">WhatsApp</span>
                    <span className="font-mono text-sm">{SITE_CONFIG.whatsapp.display}</span>
                  </div>
                </div>

                <h2 className="font-display text-2xl font-semibold text-foreground mt-8 mb-4">
                  Actividade exercida
                </h2>
                <p>
                  Assessoria jurídica em processos de cidadania portuguesa, transcrição de casamento e
                  registos civis, sob a marca comercial &ldquo;ViannaLegal&rdquo;.
                </p>

                <h2 className="font-display text-2xl font-semibold text-foreground mt-8 mb-4">
                  Regime profissional da advocacia
                </h2>
                <p>
                  A actividade de advocacia exercida pela responsável está sujeita ao Estatuto da Ordem dos
                  Advogados (Lei n.º 145/2015) e ao Código Deontológico dos Advogados Europeus, disponíveis
                  para consulta em{' '}
                  <a href="https://www.oa.pt" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">
                    www.oa.pt
                  </a>
                  . A advogada encontra-se inscrita na Ordem dos Advogados portuguesa sob a cédula
                  profissional n.º 56666P, e exerce a profissão com seguro de responsabilidade civil
                  profissional obrigatório, subscrito através da apólice de grupo da Ordem dos Advogados.
                </p>

                <div className="bg-muted rounded-xl p-6 not-prose my-6">
                  <p className="text-sm">
                    <strong className="text-foreground">Nota sobre publicidade de serviços jurídicos:</strong>{' '}
                    Nos termos do Regulamento de Publicidade da Ordem dos Advogados, a informação
                    disponibilizada neste site tem carácter meramente informativo, não constitui
                    aconselhamento jurídico vinculativo, e não substitui uma consulta jurídica
                    individualizada.
                  </p>
                </div>

                <h2 className="font-display text-2xl font-semibold text-foreground mt-8 mb-4">
                  Enquadramento de protecção de dados — Brasil e Portugal
                </h2>
                <p>
                  Como os clientes se encontram maioritariamente no Brasil e a responsável está estabelecida
                  em Portugal, o tratamento de dados pessoais neste site está sujeito, em simultâneo, à Lei
                  Geral de Proteção de Dados brasileira (LGPD) e ao Regulamento Geral sobre a Proteção de
                  Dados europeu (RGPD) — consulte a nossa{' '}
                  <a href="/politica-privacidade" className="text-gold hover:underline">
                    Política de Privacidade
                  </a>{' '}
                  para mais detalhes.
                </p>

                <h2 className="font-display text-2xl font-semibold text-foreground mt-8 mb-4">
                  Resolução alternativa de litígios de consumo
                </h2>
                <p>
                  Nos termos da Lei n.º 144/2015, em caso de litígio de consumo em Portugal, o cliente pode
                  recorrer a uma Entidade de Resolução Alternativa de Litígios de Consumo. Mais informação em{' '}
                  <a href="https://www.consumidor.gov.pt" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">
                    www.consumidor.gov.pt
                  </a>{' '}
                  e na plataforma europeia{' '}
                  <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">
                    ec.europa.eu/consumers/odr
                  </a>
                  . Para clientes no Brasil, aplicam-se os canais de defesa do consumidor previstos no
                  Código de Defesa do Consumidor brasileiro.
                </p>

                <h2 className="font-display text-2xl font-semibold text-foreground mt-8 mb-4">
                  Livro de Reclamações
                </h2>
                <p>
                  Este prestador de serviços dispõe de Livro de Reclamações Eletrónico, nos termos do
                  Decreto-Lei n.º 74/2017. Pode aceder-lhe em{' '}
                  <a href="https://www.livroreclamacoes.pt" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">
                    www.livroreclamacoes.pt
                  </a>
                  .
                </p>

                <h2 className="font-display text-2xl font-semibold text-foreground mt-8 mb-4">
                  Propriedade intelectual
                </h2>
                <p>
                  Os conteúdos deste site — incluindo textos, guias e identidade visual — são propriedade da
                  responsável identificada acima, salvo indicação em contrário, e não podem ser reproduzidos
                  sem autorização prévia.
                </p>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
