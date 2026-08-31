import { generateSchema } from "@/lib/schema";
import { getViaContent, getViaSlugs } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const content = getViaContent(slug);
  return buildMetadata({
    title: content.title,
    description: content.description,
    path: `/cidadania-portuguesa/${slug}`,
  });
}

export async function generateStaticParams() {
  const slugs = getViaSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function ViaPage({ params }: Props) {
  const { slug } = await params;
  const content = getViaContent(slug);

  const schema = generateSchema({
    type: 'Service',
    url: `https://viannalegal.com.br/cidadania-portuguesa/${slug}`,
    title: content.title,
    description: content.description,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <article className="prose prose-lg max-w-none">
          <h1>{content.title}</h1>
          <p className="text-gray-600">{content.description}</p>
          <div className="prose">{content.body}</div>
        </article>
      </main>
    </>
  );
}