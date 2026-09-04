import { MessageCircle, MapPin, Clock, ArrowRight } from "lucide-react";

const WHATSAPP =
  "https://wa.me/351913134260?text=" +
  encodeURIComponent("Olá! Vim pelo site e quero avaliar o meu caso para cidadania portuguesa.");

// Bloco de contacto antes do rodapé, como no site original.
// O formulário vive em /contato; aqui fica o convite e o canal directo.
export function Contacto() {
  return (
    <section className="container-width grid gap-8 py-16 sm:py-20 lg:grid-cols-2 lg:items-start">
      <div>
        <p className="eyebrow">Entre em contacto</p>
        <h2 className="font-display text-3xl leading-tight text-primary sm:text-[34px]">
          A sua cidadania começa com uma conversa de 15 minutos
        </h2>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          A Kathia analisa o seu caso e diz exactamente qual é o caminho mais rápido —
          que via se aplica, que documentos faltam e em que fila o processo vai entrar.
          Sem custo nessa etapa.
        </p>
        <a
          href="/contato"
          className="mt-6 inline-flex min-h-[50px] items-center gap-2 rounded-lg bg-primary px-7 font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-primary/90"
        >
          Quero a minha análise personalizada
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>

      <div className="rounded-xl bg-primary p-8 text-primary-foreground">
        <h3 className="font-display text-xl">Prefere falar agora?</h3>
        <p className="mt-3 text-[15px] leading-relaxed text-primary-foreground/80">
          O WhatsApp é o canal mais rápido. A maioria das análises inicia-se e responde-se
          em poucas horas, em horário comercial de Portugal.
        </p>

        <dl className="mt-7 space-y-5">
          <div className="flex items-start gap-3">
            <MessageCircle className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
            <div>
              <dt className="text-[13px] text-primary-foreground/65">WhatsApp</dt>
              <dd className="font-semibold">+351 913 134 260</dd>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
            <div>
              <dt className="text-[13px] text-primary-foreground/65">Localização</dt>
              <dd className="font-semibold">Portugal</dd>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Clock className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
            <div>
              <dt className="text-[13px] text-primary-foreground/65">Horário</dt>
              <dd className="font-semibold">Segunda a sexta, 9h às 18h</dd>
            </div>
          </div>
        </dl>

        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex min-h-[50px] w-full items-center justify-center gap-2 rounded-lg bg-gold px-6 font-bold text-primary transition-all hover:-translate-y-0.5 hover:shadow-gold"
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          Conversar no WhatsApp agora
        </a>
      </div>
    </section>
  );
}
