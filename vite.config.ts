import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [react()],
  base: "/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom"],
  },
  optimizeDeps: {
    include: ["react", "react-dom", "react/jsx-runtime", "react-router-dom"],
  },
  build: {
    outDir: "dist",
    cssCodeSplit: true,
    // Aumentar limite de chunk para reduzir warnings mas manter splitting
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks(id) {
          // React core — carrega primeiro
          if (id.includes("node_modules/react/") ||
              id.includes("node_modules/react-dom/") ||
              id.includes("node_modules/scheduler/")) {
            return "vendor-react";
          }
          // Router
          if (id.includes("node_modules/react-router-dom/") ||
              id.includes("node_modules/react-router/")) {
            return "vendor-router";
          }
          // Artigo pilar — chunk separado (416KB)
          if (id.includes("artigoPilar")) {
            return "data-pilar";
          }
          // Dados do blog partes — chunks separados
          if (id.includes("blogContentPart1")) return "data-blog-1";
          if (id.includes("blogContentPart2")) return "data-blog-2";
          if (id.includes("blogContentPart3")) return "data-blog-3";
          // Meta e índice — carrega com o blog listing
          if (id.includes("allBlogPostsMeta") ||
              id.includes("allBlogPostsContent") ||
              id.includes("allBlogPosts")) {
            return "data-blog-meta";
          }
          // Config central (prazos/taxas) — pequeno, vai com app
          if (id.includes("/config/")) {
            return "app-config";
          }
          // Radix UI — componentes shadcn
          if (id.includes("node_modules/@radix-ui/")) {
            return "vendor-radix";
          }
          // Lucide icons
          if (id.includes("node_modules/lucide-react/")) {
            return "vendor-lucide";
          }
          // Restantes node_modules
          if (id.includes("node_modules/")) {
            return "vendor-misc";
          }
        },
      },
    },
  },
});
