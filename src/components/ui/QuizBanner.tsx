import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight } from 'lucide-react';

export function QuizBanner() {
  return (
    <div
      className="my-10 rounded-2xl bg-gradient-to-r from-primary to-primary/80 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-5 shadow-elevated border border-primary/20"
    >
      <div className="flex items-start gap-4">
        <div className="w-11 h-11 rounded-xl bg-gold/20 flex items-center justify-center flex-shrink-0">
          <Sparkles className="w-5 h-5 text-gold" />
        </div>
        <div>
          <p className="text-xs font-bold text-gold uppercase tracking-wider mb-1">
            Não sabe se tem direito?
          </p>
          <h3 className="font-display text-lg md:text-xl font-bold text-primary-foreground leading-snug">
            Descubra em 2 minutos com nosso quiz de elegibilidade
          </h3>
          <p className="text-primary-foreground/65 text-sm mt-1">
            6 perguntas · Resultado imediato · Atualizado com a Lei 1/2026
          </p>
        </div>
      </div>
      <Link
        to="/quiz"
        className="flex-shrink-0 inline-flex items-center gap-2 bg-gold hover:bg-gold/90 transition-colors text-primary font-bold text-sm px-6 py-3 rounded-xl shadow-gold"
      >
        Fazer o quiz
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}
