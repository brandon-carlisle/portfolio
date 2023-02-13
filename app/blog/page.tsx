import BlogPostPreviews from '../../components/BlogPostPreviews';
import Header from '../../components/Header';
import Section from '../../components/Section';
import { sanityClient } from '../../lib/sanity';
import { groq } from 'next-sanity';

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
        <BlogPostPreviews posts={posts} />
      </Section>
    </>
  );
}
