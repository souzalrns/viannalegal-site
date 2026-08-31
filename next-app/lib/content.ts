import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDir = path.join(process.cwd(), 'content');

export function getPage(slug: string) {
  const filePath = path.join(contentDir, ${slug}.mdx);
  if (!fs.existsSync(filePath)) return null;
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContent);
  return {
    title: data.title || slug,
    description: data.description || '',
    body: content,
    ...data
  };
}

export function getBlogSlugs() {
  const blogDir = path.join(contentDir, 'blog');
  if (!fs.existsSync(blogDir)) return [];
  return fs.readdirSync(blogDir).filter(file => file.endsWith('.mdx')).map(file => file.replace(/\.mdx$/, ''));
}

export function getBlogPost(slug: string) {
  const filePath = path.join(contentDir, 'blog', ${slug}.mdx);
  if (!fs.existsSync(filePath)) return null;
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContent);
  return {
    title: data.title || slug,
    description: data.description || '',
    body: content,
    datePublished: data.datePublished || new Date().toISOString(),
    dateModified: data.dateModified || new Date().toISOString(),
    author: data.author || 'Kathia Vianna',
    ...data
  };
}

export function getViaSlugs() {
  const viasDir = path.join(contentDir, 'vias');
  if (!fs.existsSync(viasDir)) return [];
  return fs.readdirSync(viasDir).filter(file => file.endsWith('.mdx')).map(file => file.replace(/\.mdx$/, ''));
}

export function getViaContent(slug: string) {
  const filePath = path.join(contentDir, 'vias', ${slug}.mdx);
  if (!fs.existsSync(filePath)) return null;
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContent);
  return {
    title: data.title || slug,
    description: data.description || '',
    body: content,
    ...data
  };
}

export type FaqItem = { q: string; a: string };
