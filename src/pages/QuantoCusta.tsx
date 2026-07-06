import { Helmet } from 'react-helmet-async';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/sections/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Euro, FileText, Stamp, CreditCard } from 'lucide-react';
import { SITE_CONFIG, waUrl } from '@/config/site';
import { TAXAS_IRN, TAXAS_APOSTILA } from '@/config/taxas';

const faqCustos = [
  {
    q: 'Quanto custa no total o processo de cidadania portuguesa?',
    a: 'O custo total soma três componentes: a taxa do IRN (0€ a 250€ conforme a via), os custos documentais no Brasil (certidões e apostilas, tipicamente R$400 a R$900) e os honorários de assessoria jurídica, definidos após análise do caso. Cada processo é diferente — a complexidade documental determina o valor final.',
  },
  {
    q: 'Filhos menores pagam taxa ao IRN?',
    a: 'Não. O registo de nascimento de filhos menores de cidadão português é isento de taxa no IRN.',
  },
  {
    q: 'Existe taxa de urgência para acelerar o processo?',
    a: 'Não existe taxa de urgência oficial no IRN. O que realmente acelera é a documentação completa e sem divergências desde o início — processos bem instruídos têm menos diligências.',
  },
  {
    q: 'Os honorários podem ser parcelados?',
    a: 'As condições de pagamento são definidas na proposta, após análise do caso. Fale com a Kathia pelo WhatsApp para receber uma avaliação personalizada.',
  },
  {
    q: 'O que está incluído nos honorários de assessoria?',
    a: 'Análise de elegibilidade, conferência e organização documental, elaboração do requerimento, protocolo junto ao IRN, acompanhamento das 7 fases internas, resposta a diligências e comunicação contínua até à decisão.',
  },
];

export default function QuantoCusta() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqCustos.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a },
    })),
  };

  return (
    <>
      <Helmet>
        <title>Quanto Custa a Cidadania Portuguesa em 2026 | ViannaLegal</title>
        <meta name="description" content="Custos reais da cidadania portuguesa em 2026: taxas do IRN por via (0€ a 250€), apostilas no Brasil e o que compõe os honorários. Valores oficiais actualizados." />
        <link rel="canonical" href="https://viannalegal.com.br/quanto-custa" />
        <meta property="og:title" content="Quanto Custa a Cidadania Portuguesa em 2026" />
        <meta property="og:description" content="Taxas oficiais do IRN por via, custos de apostila por estado brasileiro e componentes do investimento total. Transparência completa." />
        <meta property="og:url" content="https://viannalegal.com.br/quanto-custa" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://viannalegal.com.br/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      </Helmet>

      <Header />
      <main>
        {/* Hero */}
        <section className="bg-primary section-padding">
          <div className="container-width">
            <div className="max-w-3xl">
              <span className="text-gold font-medium text-sm uppercase tracking-wider mb-4 block">
                Transparência de custos
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
                Quanto custa a cidadania portuguesa em 2026
              </h1>
              <p className="text-white/80 text-lg leading-relaxed">
                O investimento total tem três componentes: taxas oficiais do IRN,
                custos documentais no Brasil e honorários de assessoria. Aqui estão
                os valores oficiais — sem surpresas.
              </p>
            </div>
          </div>
        </section>

        {/* Taxas IRN */}
        <section className="section-padding">
          <div className="container-width max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Euro className="w-5 h-5 text-primary" />
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                1. Taxas oficiais do IRN (Portugal)
              </h2>
            </div>
            <p className="text-muted-foreground mb-6">
              Valores fixados pelo Instituto dos Registos e do Notariado, pagos uma única vez por processo.
            </p>
            <div className="overflow-x-auto rounded-2xl border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-muted/50 border-b border-border">
                    <th className="px-4 py-3 text-left font-semibold text-foreground">Via</th>
                    <th className="px-4 py-3 text-right font-semibold text-foreground">Taxa IRN</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.values(TAXAS_IRN).map((t) => (
                    <tr key={t.descricao} className="border-b border-border/40 hover:bg-muted/20">
                      <td className="px-4 py-3 text-muted-foreground">{t.descricao}</td>
                      <td className="px-4 py-3 text-right font-semibold text-foreground">{t.label}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Apostilas */}
        <section className="section-padding bg-muted/30">
          <div className="container-width max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Stamp className="w-5 h-5 text-primary" />
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                2. Apostila de Haia (Brasil)
              </h2>
            </div>
            <p className="text-muted-foreground mb-6">
              {TAXAS_APOSTILA.nota} Cada documento brasileiro apresentado ao IRN precisa de apostila.
            </p>
            <div className="overflow-x-auto rounded-2xl border border-border bg-card">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-muted/50 border-b border-border">
                    <th className="px-4 py-3 text-left font-semibold text-foreground">Estado</th>
                    <th className="px-4 py-3 text-right font-semibold text-foreground">Valor por documento</th>
                  </tr>
                </thead>
                <tbody>
                  {TAXAS_APOSTILA.estados.map((e) => (
                    <tr key={e.estado} className="border-b border-border/40 hover:bg-muted/20">
                      <td className="px-4 py-3 text-muted-foreground">{e.estado}</td>
                      <td className="px-4 py-3 text-right font-semibold text-foreground">
                        {e.valor ? `R$ ${e.valor.toFixed(2).replace('.', ',')}` : e.nota}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-muted-foreground text-sm mt-4">
              Somam-se as certidões em inteiro teor (valor varia por cartório) e o reconhecimento
              de firma da procuração. Em média, os custos documentais no Brasil ficam entre
              R$400 e R$900 por requerente, conforme o estado e o número de documentos.
            </p>
          </div>
        </section>

        {/* Honorários */}
        <section className="section-padding">
          <div className="container-width max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <FileText className="w-5 h-5 text-primary" />
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                3. Honorários de assessoria jurídica
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Os honorários são definidos após análise do caso, porque dependem da complexidade
              real: via aplicável, estado da documentação, necessidade de pesquisa em arquivos
              portugueses, divergências de nomes a resolver e número de requerentes.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              A avaliação inicial do caso identifica exactamente o que o seu processo exige — e a
              proposta apresenta o valor fechado, sem custos ocultos.
            </p>
            <div className="bg-primary rounded-2xl p-8 text-center">
              <h3 className="font-display text-2xl font-bold text-white mb-3">
                Receba uma avaliação personalizada
              </h3>
              <p className="text-white/80 mb-6 max-w-xl mx-auto">
                Fale com a Kathia Vianna pelo WhatsApp, descreva o seu caso e receba a
                indicação da via aplicável e a proposta com valores fechados.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="bg-gold text-primary hover:bg-gold/90 font-semibold">
                  <a href={waUrl(SITE_CONFIG.whatsappMessages.default)} target="_blank" rel="noopener noreferrer">
                    Avaliar o meu caso <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild className="border-white/25 text-white hover:bg-white/10">
                  <Link to="/quiz">Veja se tem direito</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ custos */}
        <section className="section-padding bg-muted/30">
          <div className="container-width max-w-3xl">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              Perguntas frequentes sobre custos
            </h2>
            <div className="space-y-6">
              {faqCustos.map((f) => (
                <div key={f.q} className="bg-card rounded-2xl p-6 border border-border">
                  <h3 className="font-semibold text-foreground mb-2">{f.q}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
