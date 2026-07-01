import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { lazy, Suspense } from "react";
const Index = lazy(() => import("./pages/Index"));

const QuemSomos = lazy(() => import('./pages/QuemSomos'));
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
  <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#163C2C', gap: '24px' }}>
    {/* Logo ViannaLegal */}
    <div style={{ fontSize: '28px', fontFamily: 'Georgia, serif', fontWeight: 700, letterSpacing: '-0.5px' }}>
      <span style={{ color: '#fff' }}>Vianna</span><span style={{ color: '#B8954F' }}>Legal</span>
    </div>
    {/* Bandeira portuguesa animada */}
    <div style={{ position: 'relative', width: '48px', height: '48px' }}>
      {/* Círculo verde */}
      <div style={{ position: 'absolute', inset: 0, borderRadius: '50%', border: '3px solid #006600', borderTopColor: 'transparent', animation: 'spin 1s linear infinite' }} />
      {/* Círculo vermelho interior */}
      <div style={{ position: 'absolute', inset: '6px', borderRadius: '50%', border: '3px solid #CC0000', borderBottomColor: 'transparent', animation: 'spin 1s linear infinite reverse' }} />
      {/* Ponto dourado central */}
      <div style={{ position: 'absolute', inset: '18px', borderRadius: '50%', background: '#B8954F' }} />
    </div>
    <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
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
<Route path="/quem-somos"                  element={<QuemSomos />} />
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
