// ViannaLegal — Índice de conteúdo dos artigos
// Dividido em partes para evitar limite de tamanho do TypeScript
import { blogContentPart1 } from './blogContentPart1';
import { blogContentPart2 } from './blogContentPart2';
import { blogContentPart3 } from './blogContentPart3';
import { artigoCidadaniaPortuguesa } from './artigoPilar';

export const allBlogPostsContent: Record<string, string> = {
  'como-tirar-cidadania-portuguesa': artigoCidadaniaPortuguesa,
  ...blogContentPart1,
  ...blogContentPart2,
  ...blogContentPart3,
};
