import { generateSchema } from "@/lib/schema";
import { getBlogPost, getBlogSlugs } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  return buildMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${slug}`,
  });
}

export async function generateStaticParams() {
  const slugs = getBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  const schema = generateSchema({
    type: 'BlogPosting',
    url: `https://viannalegal.com.br/blog/${slug}`,
    title: post.title,
    description: post.description,
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    author: post.author || 'Kathia Vianna',
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <article className="prose prose-lg max-w-none">
          <h1>{post.title}</h1>
          <p className="text-gray-600">{post.description}</p>
          <div className="prose">{post.body}</div>
        </article>
      </main>
    </>
  );
}