import { generateSchema } from '@/lib/schema';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  // Schemas JSON-LD
  const orgSchema = generateSchema({
    type: 'Organization',
    url: 'https://viannalegal.com.br/',
  });

  const personSchema = generateSchema({
    type: 'Person',
    url: 'https://viannalegal.com.br/',
  });

  const breadcrumbSchema = generateSchema({
    type: 'BreadcrumbList',
    url: 'https://viannalegal.com.br/',
    breadcrumbs: [{ name: 'Início', url: 'https://viannalegal.com.br/' }],
  });

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-4xl font-bold text-[#1a3a5c] mb-6">
          A herança que nenhum inventário divide.
        </h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-gray-700 mb-6">
            Como tirar a cidadania portuguesa sendo brasileiro? A ViannaLegal é uma assessoria
            jurídica especializada em cidadania portuguesa para brasileiros, conduzida pela
            advogada Kathia Vianna (Ordem dos Advogados de Portugal, OA n.º 56666), com atuação
            presencial nas Conservatórias e Tribunais portugueses desde 2016. Já são 1.200+ casos
            acompanhados, com o processo conduzido em Portugal por procuração — o cliente não
            precisa de sair do Brasil. Conteúdo actualizado com a Lei Orgânica 1/2026, em vigor
            desde 19 de maio de 2026.
          </p>

          <p className="text-lg text-gray-700 mb-6">
            A dupla cidadania é o presente que se deixa para os filhos, passando de geração em
            geração — e nunca perde o valor. A fila do IRN não pára: quem entra hoje, sai na
            frente.
          </p>
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-[#1a3a5c] mb-4">
            Qual é o seu vínculo com Portugal?
          </h2>
          <p className="text-gray-700 mb-6">
            Cada situação tem um caminho diferente, com prazos, documentos e estratégias
            distintas: filho, neto, bisneto, cônjuge, união de facto ou residência legal em
            Portugal. Veja o mapa completo das vias.
          </p>
          <Link
            href="/cidadania-portuguesa"
            className="inline-block bg-[#1a3a5c] text-white px-6 py-3 rounded-lg hover:bg-[#2a4a6c] transition-colors"
          >
            Ver todas as vias →
          </Link>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-[#1a3a5c] mb-4">
            Quem trata do seu processo
          </h2>
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <div className="flex items-start gap-4">
              <div className="w-20 h-20 rounded-full bg-[#1a3a5c] flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                KV
              </div>
              <div>
                <p className="text-gray-700 font-medium">Kathia Vianna</p>
                <p className="text-gray-600 text-sm">
                  Advogada portuguesa (OA n.º 56666)
                </p>
                <p className="text-gray-600 text-sm mt-2">
                  Actua presencialmente em Portugal, em Conservatórias e Tribunais onde os
                  processos correm. Conhece o IRN por dentro, antecipa os problemas antes que
                  apareçam e acompanha cada família do primeiro contacto até à certidão de
                  nascimento portuguesa.
                </p>
                <Link
                  href="/quem-somos"
                  className="inline-block mt-3 text-[#1a3a5c] font-medium hover:underline"
                >
                  Conhecer a Kathia Vianna →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}