// ViannaLegal — Índice de conteúdo dos artigos
// Artigo pilar carregado via dynamic import — não bloqueia bundle inicial
import { blogContentPart1 } from './blogContentPart1';
import { blogContentPart2 } from './blogContentPart2';
import { blogContentPart3 } from './blogContentPart3';

// Artigo pilar — 407KB, carregado on-demand
export const loadArtigoPilar = (): Promise<string> =>
  import('./artigoPilar').then(m => m.artigoCidadaniaPortuguesa);

export const allBlogPostsContent: Record<string, string> = {
  ...blogContentPart1,
  ...blogContentPart2,
  ...blogContentPart3,
};
