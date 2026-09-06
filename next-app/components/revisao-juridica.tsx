import { ShieldCheck } from "lucide-react";

/**
 * Assinatura editorial para páginas de conteúdo jurídico.
 * Torna explícitos autoria, credencial e data de revisão — o que os motores
 * e os sistemas de resposta usam para aferir confiança num tema regulado.
 */
export function RevisaoJuridica({ data = "5 de setembro de 2026" }: { data?: string }) {
  return (
    <aside className="mt-12 rounded-xl border border-border bg-muted/60 p-6">
      <p className="flex items-center gap-2 font-display text-[15px] text-primary">
        <ShieldCheck className="h-4 w-4 text-gold" aria-hidden="true" />
        Revisão jurídica
      </p>
      <p className="mt-3 text-[14px] leading-relaxed text-muted-foreground">
        Conteúdo elaborado e revisto por{" "}
        <a href="/quem-somos" className="font-semibold text-primary underline underline-offset-2 hover:text-gold">
          Kathia Vianna
        </a>
        , advogada inscrita na Ordem dos Advogados de Portugal, cédula n.º 56666p, com
        actuação presencial nas Conservatórias e Tribunais portugueses desde 2016.
      </p>
      <p className="mt-3 text-[13.5px] text-muted-foreground">
        <strong className="text-foreground">Última revisão:</strong> {data}. Actualizado com
        a Lei Orgânica n.º 1/2026. A aplicação da lei depende dos factos e documentos de
        cada caso — este conteúdo é informativo e não substitui análise individual.
      </p>
      <p className="mt-3 text-[13px] text-muted-foreground">
        <strong className="text-foreground">Fontes:</strong>{" "}
        <a href="https://diariodarepublica.pt" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2 hover:text-gold">
          Diário da República
        </a>{" "}
        ·{" "}
        <a href="https://irn.justica.gov.pt" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2 hover:text-gold">
          IRN — Instituto dos Registos e do Notariado
        </a>
      </p>
    </aside>
  );
}
