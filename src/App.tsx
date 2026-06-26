import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { lazy, Suspense } from "react";
const Index = lazy(() => import("./pages/Index"));

const CidadaniaPortuguesa = lazy(() => import("./pages/CidadaniaPortuguesa"));
const BuscaDocumentos     = lazy(() => import("./pages/BuscaDocumentos"));
const ServicePage         = lazy(() => import("./pages/ServicePage"));
const Blog                = lazy(() => import("./pages/Blog"));
const BlogPost            = lazy(() => import("./pages/BlogPost"));
const Quiz                = lazy(() => import("./pages/Quiz"));
const PoliticaPrivacidade = lazy(() => import("./pages/PoliticaPrivacidade"));
const TermosUso           = lazy(() => import("./pages/TermosUso"));
const NotFound            = lazy(() => import("./pages/NotFound"));

const PageLoader = () => (
  <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0f2d23' }}>
    <div style={{ width: 32, height: 32, borderRadius: '50%', border: '2px solid #c9a84c', borderTopColor: 'transparent', animation: 'spin 0.8s linear infinite' }} />
  </div>
);

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/"                           element={<Index />} />
            <Route path="/cidadania-portuguesa"       element={<CidadaniaPortuguesa />} />
            <Route path="/cidadania-portuguesa/:slug" element={<ServicePage />} />
            <Route path="/busca-documentos"           element={<BuscaDocumentos />} />
            <Route path="/blog"                       element={<Blog />} />
            <Route path="/blog/:slug"                 element={<BlogPost />} />
            <Route path="/quiz"                       element={<Quiz />} />
            <Route path="/politica-privacidade"       element={<PoliticaPrivacidade />} />
            <Route path="/termos-uso"                 element={<TermosUso />} />
            <Route path="*"                           element={<NotFound />} />
          </Routes>
        </Suspense>
        <WhatsAppButton />
      </BrowserRouter>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
