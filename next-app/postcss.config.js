// PostCSS próprio do next-app/, isolado do postcss.config.js da raiz do repo
// (que é ESM, para o Vite/Tailwind, e incompatível com o loader de CSS do Next.js —
// causava "Your custom PostCSS configuration must export a `plugins` key" no build).
// next-app/ não usa Tailwind — sem plugins necessários.
module.exports = {
  plugins: {},
};
