import { Header } from '@/components/layout/Header';
import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { About } from '@/components/sections/About';
import { Benefits } from '@/components/sections/Benefits';
import { Process } from '@/components/sections/Process';
import { FAQ } from '@/components/sections/FAQ';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';
import { Helmet } from 'react-helmet-async';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Cidadão Legal | Assessoria em Cidadania Portuguesa e Italiana</title>
        <meta 
          name="description" 
          content="Assessoria especializada em cidadania portuguesa e italiana. Tire sua dupla cidadania sem sair do Brasil. Mais de 2000 processos realizados com sucesso." 
        />
        <meta name="keywords" content="cidadania portuguesa, cidadania italiana, dupla cidadania, passaporte europeu, assessoria cidadania" />
        <link rel="canonical" href="https://cidadaolegal.com.br" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <Services />
          <About />
          <Benefits />
          <Process />
          <FAQ />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
