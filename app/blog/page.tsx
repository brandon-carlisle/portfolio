import BlogPostPreviews from '../../components/BlogPostPreviews';
import Header from '../../components/Header';
import Section from '../../components/Section';
import { sanityClient } from '../../lib/sanity';
import { groq } from 'next-sanity';
import { type Metadata } from 'next';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Read any blog posts about frontend web development I have written.',
};

export type BlogPostData = {
  title?: string;
  slug?: { current: string };
  content?: any[];
  date?: string;
};

export default async function Blog() {
  const posts: BlogPostData[] = await sanityClient.fetch(
    groq`*[_type == 'post'] | order(_createdAt desc){title, date, slug{current}}`
  );

  return (
    <>
      <Header title="Blog" />

      <Section>
        {!posts || !posts.length ? (
          <p className="text-center">No blog posts yet, come back later.</p>
        ) : (
          <BlogPostPreviews posts={posts} />
        )}
      </Section>
    </>
  );
}
