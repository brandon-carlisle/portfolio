import BlogPostPreviews from '../../components/BlogPostPreviews';
import Header from '../../components/Header';
import Section from '../../components/Section';
import { sanityClient } from '../../lib/sanity';
import { groq } from 'next-sanity';

export const revalidate = 60;

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

  if (!posts || !posts.length)
    return <p className="text-center">No blog posts yet, come back later.</p>;

  return (
    <>
      <Header title="Blog" />

      <Section>
        <BlogPostPreviews posts={posts} />
      </Section>
    </>
  );
}
