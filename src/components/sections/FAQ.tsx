import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'O que mudou na Lei da Nacionalidade Portuguesa em 2025?',
    answer: 'As alterações de 2025 trouxeram maior rigor para netos de portugueses, exigindo comprovação mais robusta de vínculo efetivo com Portugal (conhecimento do idioma, visitas, laços culturais). Os prazos de análise também aumentaram e a naturalização por residência agora exige maior tempo de permanência legal. Recomendamos iniciar o processo o quanto antes.',
  },
  {
    question: 'Quem tem direito à cidadania portuguesa em 2025?',
    answer: 'A cidadania portuguesa pode ser obtida por descendência (filhos, netos e bisnetos de portugueses), naturalização (residentes legais em Portugal com 5+ anos) ou aquisição (casamento com cidadão português há mais de 3 anos). Filhos têm direito automático; netos precisam comprovar vínculo efetivo com Portugal.',
  },
  {
    question: 'Neto de português tem direito à cidadania portuguesa?',
    answer: 'Sim! Netos de cidadãos portugueses têm direito à cidadania portuguesa, desde que comprovem vínculo efetivo com a comunidade portuguesa. Com as mudanças de 2025, a comprovação ficou mais rigorosa: conhecimento do idioma português, visitas documentadas a Portugal, participação em comunidades lusófonas ou outros laços culturais comprovados.',
  },
  {
    question: 'Bisneto de português tem direito à cidadania?',
    answer: 'Bisnetos podem ter direito à cidadania portuguesa, mas o processo é mais complexo. É necessário primeiro que o neto (pai/mãe do bisneto) obtenha a cidadania portuguesa para então transmitir ao bisneto. Recomendamos uma análise detalhada do caso para avaliar a viabilidade.',
  },
  {
    question: 'Preciso morar em Portugal para obter a cidadania?',
    answer: 'Não necessariamente. Descendentes diretos de portugueses (filhos, netos, bisnetos) podem solicitar a cidadania morando no Brasil. Apenas a naturalização por residência exige residência legal em Portugal por 5 anos. Todo o processo pode ser conduzido remotamente com nossa assessoria.',
  },
  {
    question: 'Quanto tempo demora o processo de cidadania portuguesa?',
    answer: 'Os prazos médios atualizados são: filhos menores 6-8 meses; filhos maiores 12-14 meses; netos de portugueses 40-48 meses; cônjuges 40-48 meses; transcrição de casamento 1-4 meses; naturalização por residência 24-32 meses. Prazos podem variar conforme a conservatória e complexidade.',
  },
  {
    question: 'O que é vínculo efetivo e como comprovar?',
    answer: 'Vínculo efetivo é a ligação demonstrável com a comunidade portuguesa, exigida principalmente para netos. Pode ser comprovado através de: domínio do idioma português (certificados ou entrevista), visitas a Portugal (passaportes carimbados, reservas), participação em associações lusófonas, consumo de cultura portuguesa, ou laços familiares mantidos.',
  },
  {
    question: 'Quais documentos são necessários para cidadania portuguesa?',
    answer: 'Os documentos básicos incluem: certidões de nascimento, casamento e óbito dos ancestrais portugueses em inteiro teor, certidões brasileiras atualizadas com Apostila de Haia, documentos de identificação e procuração. Para netos, inclui-se comprovação de vínculo efetivo. A documentação específica varia conforme o tipo de processo.',
  },
  {
    question: 'Posso ter dupla cidadania Brasil e Portugal?',
    answer: 'Sim! Tanto o Brasil quanto Portugal permitem dupla cidadania. Você mantém sua cidadania brasileira e adquire a portuguesa, usufruindo dos benefícios de ambas: viajar com dois passaportes, trabalhar e morar na Europa, manter direitos no Brasil, e transmitir a cidadania aos filhos.',
  },
  {
    question: 'Quais são as vantagens do passaporte português?',
    answer: 'O passaporte português (4º mais poderoso do mundo) oferece: acesso sem visto a 185+ países, livre circulação e trabalho em toda União Europeia, acesso a sistemas de saúde e educação europeus, facilidades para financiamento e investimento imobiliário, e transmissão da cidadania para filhos e netos.',
  },
  {
    question: 'Cidadania por casamento: quais os requisitos?',
    answer: 'Cônjuges de portugueses podem solicitar a cidadania após 3 anos de casamento ou união estável reconhecida. É necessário comprovar o casamento, a cidadania do cônjuge, e manter o vínculo matrimonial durante o processo. O prazo médio é de 40-48 meses.',
  },
  {
    question: 'O que é pesquisa genealógica e quando é necessária?',
    answer: 'A pesquisa genealógica é uma investigação especializada para localizar registros de nascimento, casamento e óbito dos seus ancestrais portugueses. É necessária quando não há informações concretas sobre os registros, quando documentos foram perdidos, ou quando precisamos confirmar a linha de descendência até o ancestral português.',
  },
];

export function FAQ() {
  return (
    <section id="faq" className="section-padding bg-muted/50">
      <div className="container-width">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column - Header */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-32 lg:self-start"
          >
            <span className="text-gold font-medium text-sm uppercase tracking-wider mb-4 block">
              Dúvidas Frequentes
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Principais questões sobre{' '}
              <span className="text-primary">Cidadania Portuguesa</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Encontre respostas para as perguntas mais comuns sobre o processo 
              de obtenção da cidadania portuguesa.
            </p>
            <div className="p-6 bg-card rounded-2xl border border-border shadow-subtle">
              <h4 className="font-semibold text-foreground mb-2">
                Ainda tem dúvidas?
              </h4>
              <p className="text-muted-foreground text-sm mb-4">
                Nossa equipe está pronta para esclarecer todas as suas questões.
              </p>
              <a 
                href="#contato" 
                className="text-gold hover:text-gold-dark font-medium text-sm transition-colors"
              >
                Falar com especialista →
              </a>
            </div>
          </motion.div>

          {/* Right Column - FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card rounded-xl border border-border shadow-subtle px-6 overflow-hidden"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-5 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
