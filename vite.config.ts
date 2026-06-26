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
    rollupOptions: {
      output: {
        manualChunks(id) {
          // React core — carrega primeiro, em separado
          if (id.includes("node_modules/react/") ||
              id.includes("node_modules/react-dom/") ||
              id.includes("node_modules/scheduler/")) {
            return "vendor-react";
          }
          // Router — necessário para navegação
          if (id.includes("node_modules/react-router-dom/") ||
              id.includes("node_modules/react-router/")) {
            return "vendor-router";
          }
          // Dados do blog — muito pesados, lazy
          if (id.includes("allBlogPostsMeta") ||
              id.includes("allBlogPostsContent") ||
              id.includes("allBlogPosts")) {
            return "data-blog";
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
