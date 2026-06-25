import { Header } from '@/components/layout/Header';
import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { About } from '@/components/sections/About';
import { Benefits } from '@/components/sections/Benefits';
import { Process } from '@/components/sections/Process';
import { Testimonials } from '@/components/sections/Testimonials';
import { FAQ } from '@/components/sections/FAQ';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';
import { Helmet } from 'react-helmet-async';
import { QuizBanner } from '@/components/ui/QuizBanner';
import { SchemaHomepage } from '@/components/seo/SchemaMarkup';

const Index = () => {
  return (
    <div>
      <SchemaHomepage />
      <Helmet><title>ViannaLegal — Cidadania Portuguesa</title></Helmet>
      <Header />
      <Hero />
      <QuizBanner />
      <Services />
      <About />
      <Benefits />
      <Process />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
