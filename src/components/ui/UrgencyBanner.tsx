import { motion } from 'framer-motion';
import { AlertCircle, X } from 'lucide-react';
import { useState } from 'react';

export function UrgencyBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      className="bg-gradient-to-r from-portugal-green to-portugal-red text-white py-3 px-4 relative"
    >
      <div className="container-width flex items-center justify-center gap-3 text-center">
        <AlertCircle className="w-5 h-5 shrink-0" />
        <p className="text-sm md:text-base font-medium">
          <span className="font-bold">ATUALIZAÇÃO DEZ/2025:</span>{' '}
          <span className="hidden sm:inline">
            Tribunal Constitucional veta endurecimento da Lei da Nacionalidade! Residência mantida em 5 anos.{' '}
          </span>
          <span className="sm:hidden">TC veta endurecimento da Lei! </span>
          <a 
            href="#contato" 
            className="underline hover:no-underline font-semibold"
          >
            Agende análise gratuita →
          </a>
        </p>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-white/20 rounded-full transition-colors"
          aria-label="Fechar banner"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
}
