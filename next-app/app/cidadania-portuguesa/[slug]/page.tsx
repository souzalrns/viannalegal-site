import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import { faqSchema, jsonLd } from "@/lib/schema";
import { servicesContent, serviceSlugs } from "@/content/vias-data";

interface Props {
  params: Promise<{ slug: string }>;
}

/** SSG — todas as 7 vias geradas no build. */
export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const content = servicesContent[slug];
  if (!content) return {};
  return buildMetadata({
    path: `/cidadania-portuguesa/${content.slug}`,
    title: content.metaTitle,
    description: content.metaDescription,
    ogType: "website",
  });
}

const SITE_URL = "https://viannalegal.com.br";

export default async function ViaPage({ params }: Props) {
  const { slug } = await params;
  const content = servicesContent[slug];
  if (!content) notFound();

  const pagePath = `/cidadania-portuguesa/${content.slug}`;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Cidadania Portuguesa",
        item: `${SITE_URL}/cidadania-portuguesa`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: content.breadcrumbLabel,
        item: `${SITE_URL}${pagePath}`,
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: content.breadcrumbLabel,
    provider: { "@type": "LegalService", name: "ViannaLegal", url: SITE_URL },
    areaServed: ["BR", "PT"],
    description: content.metaDescription,
  };

  // answer-first: primeira frase do intro + a duração, extraível por sistemas de resposta.
  const answerBlock = `${content.whoQualifiesIntro} Prazo estimado: ${content.heroDuration}.`;

  return (
    <main className="container-width py-10 sm:py-14">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(breadcrumbSchema)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(serviceSchema)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(faqSchema(content.faqs.map((f) => ({ q: f.question, a: f.answer }))))} />

      <p className="meta-line">
        <a href="/cidadania-portuguesa">Cidadania Portuguesa</a> / {content.breadcrumbLabel}
      </p>
      <h1>{content.heroTitle}</h1>
      <div className="answer-block">
        {content.heroSubtitle}
        {content.heroDurationNote && (
          <p style={{ marginTop: "0.5rem", fontSize: "0.85rem", opacity: 0.75 }}>
            {content.heroDurationNote}
          </p>
        )}
      </div>

      <p style={{ fontWeight: 600 }}>Prazo estimado: {content.heroDuration}</p>

      {content.intro.map((p, i) => (
        <p key={i}>{p}</p>
      ))}

      <h2>{content.whoQualifiesIntro}</h2>
      <ul>
        {content.whoQualifies.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <h2>Documentos necessários</h2>
      <table>
        <thead>
          <tr>
            <th>Documento</th>
            <th>Observação</th>
          </tr>
        </thead>
        <tbody>
          {content.documentsNeeded.map((doc, i) => (
            <tr key={i}>
              <td>{doc.item}</td>
              <td>{doc.note ?? "—"}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Linha do tempo do processo</h2>
      <table>
        <thead>
          <tr>
            <th>Etapa</th>
            <th>Duração</th>
          </tr>
        </thead>
        <tbody>
          {content.timeline.map((t, i) => (
            <tr key={i}>
              <td>{t.stage}</td>
              <td>{t.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Erros comuns a evitar</h2>
      <ul>
        {content.commonMistakes.map((m, i) => (
          <li key={i}>{m}</li>
        ))}
      </ul>

      <h2>Perguntas frequentes</h2>
      {content.faqs.map((f, i) => (
        <div className="faq-item" key={i}>
          <h3>{f.question}</h3>
          <p dangerouslySetInnerHTML={{ __html: f.answer }} />
        </div>
      ))}

      {content.relatedServices.length > 0 && (
        <>
          <h2>Vias relacionadas</h2>
          <ul>
            {content.relatedServices.map((relSlug) => {
              const rel = servicesContent[relSlug];
              if (!rel) return null;
              return (
                <li key={relSlug}>
                  <a href={`/cidadania-portuguesa/${relSlug}`}>{rel.breadcrumbLabel}</a>
                </li>
              );
            })}
          </ul>
        </>
      )}

      <p>
        <a href="/quiz-elegibilidade">Não sabe qual via se aplica ao seu caso? Faça o quiz de elegibilidade →</a>
      </p>
    </main>
  );
}
