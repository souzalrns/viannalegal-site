import {
  MessageCircle,
  FileSearch,
  AlertCircle,
  HelpCircle,
  FileText,
  Handshake,
  CheckCircle,
  FolderOpen,
  Send,
  Eye,
  PartyPopper,
  ArrowRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SITE_CONFIG, waUrl } from '@/config/site';

const stepsPartOne = [
  {
    number: 1,
    icon: MessageCircle,
    title: 'Você conta a história da família',
    description: 'Uma conversa simples. Onde nasceu o avô ou o pai, o que a família sabe, o que tem guardado. A partir daí identificamos o caminho certo — e o que falta para o processo.',
  },
  {
    number: 2,
    icon: FileSearch,
    title: 'A gente localiza o que falta',
    description: 'Certidões em Portugal, documentos antigos, registros paroquiais — buscamos nos arquivos portugueses o que a família não tem em mãos.',
  },
  {
    number: 3,
    icon: AlertCircle,
    title: 'Antecipamos os problemas antes que apareçam',
    description: 'A maioria dos processos atrasam por erros evitáveis. Verificamos cada detalhe antes de protocolar — para entrar na fila do IRN sem diligências.',
  },
  {
    number: 4,
    icon: HelpCircle,
    title: 'Todas as suas dúvidas respondidas',
    description: 'Prazos reais, custos totais, o que esperar em cada etapa. Sem surpresas, sem letra pequena.',
  },
  {
    number: 5,
    icon: FileText,
    title: 'Proposta clara, sem surpresas',
    description: 'Honorários detalhados, escopo definido, sem custos escondidos. Você decide com informação completa na mão.',
  },
];

const stepsPartTwo = [
  {
    number: 6,
    icon: Handshake,
    title: 'Começa o trabalho de verdade',
    description: 'Procuração assinada, especialista dedicado ao seu caso. Do protocolo até à certidão de nascimento portuguesa — sem você precisar correr atrás.',
  },
  {
    number: 7,
    icon: CheckCircle,
    title: 'Montamos o processo sem deixar brecha',
    description: 'Cada certidão verificada, cada apostila conferida, cada prazo controlado. O processo chega ao IRN completo e correto na primeira vez.',
  },
  {
    number: 8,
    icon: FolderOpen,
    title: 'Protocolo e entrada na fila do IRN',
    description: 'A contagem de tempo começa aqui. A posição na fila é conquistada — e acompanhamos cada movimentação até a aprovação.',
  },
  {
    number: 9,
    icon: Eye,
    title: 'Monitoramento até a aprovação',
    description: 'Acompanhamos o processo no sistema do IRN. Se aparecer uma diligência, respondemos no prazo — sem você precisar se preocupar.',
  },
  {
    number: 10,
    icon: PartyPopper,
    title: 'Aprovado. Agora é só buscar o passaporte',
    description: 'Cidadania aprovada. Enviamos os dados de registo do seu nascimento português. Com isso poderá solicitar o seu Cartão de Cidadão e passaporte português junto ao consulado.',
  },
];

function TimelineStep({
  step,
  index,
  isLeft,
}: {
  step: typeof stepsPartOne[number];
  index: number;
  isLeft: boolean;
}) {
  const Icon = step.icon;
  return (
    <div
      className={`relative flex items-center lg:items-stretch ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
    >
      <div className={`flex-1 ${isLeft ? 'lg:pr-12 lg:text-right' : 'lg:pl-12'}`}>
        <div className={`bg-card p-6 rounded-2xl shadow-subtle border border-border/50 inline-block ${isLeft ? 'lg:ml-auto' : ''}`}>
          <div className={`flex items-center gap-4 mb-3 ${isLeft ? 'lg:flex-row-reverse' : ''}`}>
            <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
              <Icon className="w-5 h-5 text-gold" />
            </div>
            <h3 className="font-display text-lg font-semibold text-foreground">{step.title}</h3>
          </div>
          <p className="text-muted-foreground text-sm max-w-sm">{step.description}</p>
        </div>
      </div>

      <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-primary text-primary-foreground items-center justify-center font-display font-bold text-lg shadow-medium z-10">
        {step.number}
      </div>

      <div className="lg:hidden w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-display font-bold text-sm shrink-0 mr-4">
        {step.number}
      </div>

      <div className="hidden lg:block flex-1" />
    </div>
  );
}

export function Process() {
  return (
    <section id="processo" className="section-padding">
      <div className="container-width">
        {/* Section Header */}
        <div
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-gold font-medium text-sm uppercase tracking-wider mb-4 block">
            Como Funciona
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Fale com um <span className="text-primary">Especialista</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Ao entrar em contato conosco, seguimos uma série de passos para garantir
            o melhor entendimento e sucesso no processo de obtenção da cidadania.
          </p>
        </div>

        {/* Timeline part 1 */}
        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border hidden lg:block transform -translate-x-1/2" />
          <div className="space-y-8 lg:space-y-0">
            {stepsPartOne.map((step, index) => (
              <TimelineStep key={step.number} step={step} index={index} isLeft={index % 2 === 0} />
            ))}
          </div>
        </div>

        {/* Mid-timeline CTA — captures leads who decided after seeing the process is clear */}
        <div
          className="my-12 max-w-2xl mx-auto text-center bg-gold/10 rounded-2xl p-8 border border-gold/20"
        >
          <h3 className="font-display text-xl font-semibold text-foreground mb-2">
            Sem compromisso. A fila do IRN começa quando você protocola.
          </h3>
          <p className="text-muted-foreground text-sm mb-5">
            Fale agora com um especialista e descubra se o seu caso está pronto para avançar.
          </p>
          <Button
            variant="gold"
            size="lg"
            onClick={() => window.open(
                '${SITE_CONFIG.whatsapp.url}?text=${encodeURIComponent("Olá! Vi o processo completo e quero avaliar o meu caso para cidadania portuguesa.")}',
                '_blank',
                'noopener,noreferrer'
)
            }
          >
            Falar com especialista
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>

        {/* Timeline part 2 */}
        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border hidden lg:block transform -translate-x-1/2" />
          <div className="space-y-8 lg:space-y-0">
            {stepsPartTwo.map((step, index) => (
              <TimelineStep key={step.number} step={step} index={index} isLeft={index % 2 === 0} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
