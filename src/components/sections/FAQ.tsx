import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'Quem tem direito à cidadania portuguesa?',
    answer: 'A cidadania portuguesa pode ser obtida por descendência (filhos, netos e bisnetos de portugueses), naturalização (residentes legais em Portugal com mais de 5 anos) ou aquisição (casamento com cidadão português há mais de 3 anos ou união estável reconhecida).',
  },
  {
    question: 'Neto de português tem direito à cidadania portuguesa?',
    answer: 'Sim! Netos de cidadãos portugueses têm direito à cidadania portuguesa, desde que comprovem vínculo efetivo com a comunidade portuguesa. Isso pode ser demonstrado através do conhecimento do idioma, visitas frequentes a Portugal, participação em comunidades lusas ou outros laços culturais.',
  },
  {
    question: 'Preciso morar em Portugal para obter a cidadania?',
    answer: 'Não necessariamente. Se você é descendente direto de um cidadão português (filho, neto, bisneto) ou cônjuge/companheiro, pode solicitar a cidadania portuguesa mesmo vivendo no Brasil. Apenas a naturalização por residência exige residência legal em Portugal por 5 anos.',
  },
  {
    question: 'Quanto tempo demora o processo de cidadania portuguesa?',
    answer: 'Os prazos médios são: filhos menores de portugueses 6-8 meses; filhos maiores 12-14 meses; netos de portugueses 40-48 meses; cônjuges 40-48 meses; transcrição de casamento 1-4 meses. Os prazos dependem da complexidade do caso e da conservatória responsável.',
  },
  {
    question: 'Quais documentos são necessários para cidadania portuguesa?',
    answer: 'Os documentos básicos incluem: certidões de nascimento, casamento e óbito dos ancestrais portugueses em inteiro teor, certidões brasileiras atualizadas com Apostila de Haia, documentos de identificação e procuração. A documentação específica varia conforme o tipo de processo.',
  },
  {
    question: 'O que é pesquisa genealógica e quando é necessária?',
    answer: 'A pesquisa genealógica é uma investigação para localizar registros de nascimento, casamento e óbito dos seus ancestrais portugueses. É necessária quando não há informações concretas sobre os registros ou quando precisamos confirmar a linha de descendência até o ancestral português.',
  },
  {
    question: 'Posso ter dupla cidadania Brasil e Portugal?',
    answer: 'Sim! O Brasil permite a dupla cidadania, assim como Portugal. Você pode manter sua cidadania brasileira e adquirir a portuguesa, usufruindo dos benefícios de ambas sem perder nenhum direito em seu país de origem.',
  },
  {
    question: 'Quais são as vantagens do passaporte português?',
    answer: 'O passaporte português oferece acesso sem visto a 185 países, livre circulação na União Europeia, direito de trabalhar e estudar em qualquer país da UE, acesso a sistemas de saúde e educação europeus, e facilidades para investimento e financiamento imobiliário.',
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
