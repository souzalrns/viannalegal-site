import { Link } from 'react-router-dom';
import { ArrowRight, BadgeCheck } from 'lucide-react';

interface AuthorBioProps {
  authorName: string;
}

// Bio box de autor — exibida no fim de cada artigo do blog.
// Hoje só existe um autor (Kathia); se o site vier a ter outros
// colaboradores, isto passa a ser um lookup por nome.
export function AuthorBio({ authorName }: AuthorBioProps) {
  if (authorName !== 'Kathia Vianna') return null;

  return (
    <aside
      className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row gap-5 items-start"
      aria-label="Sobre a autora"
    >
      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-portugal-green/20 to-gold/20 flex items-center justify-center shrink-0 font-display text-xl font-bold text-primary">
        KV
      </div>
      <div>
        <div className="flex items-center gap-2 mb-1">
          <h3 className="font-display text-lg font-bold text-foreground">
            Kathia Vianna
          </h3>
          <span className="inline-flex items-center gap-1 text-xs bg-gold/10 text-gold px-2 py-0.5 rounded-full">
            <BadgeCheck className="w-3 h-3" aria-hidden="true" />
            OA n.º 56666p
          </span>
        </div>
        <p className="text-sm text-muted-foreground mb-3">
          Advogada inscrita na Ordem dos Advogados de Portugal, especialista em
          cidadania portuguesa. Mais de 10 anos de actuação presencial em
          Portugal e 1.200+ casos acompanhados.
        </p>
        <Link
          to="/quem-somos"
          className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-gold active:scale-95 transition-[color,transform]"
        >
          Conhecer a Kathia
          <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
        </Link>
      </div>
    </aside>
  );
}
