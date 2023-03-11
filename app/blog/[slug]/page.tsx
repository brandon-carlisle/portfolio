import Prose from '../../../components/Prose';
import Section from '../../../components/Section';
import { parseDate } from '../../../lib/helpers';
import { sanityClient } from '../../../lib/sanity';
import type { BlogPostData } from '../page';
import { groq } from 'next-sanity';
import Divider from '../../../components/Divider';
import { notFound } from 'next/navigation';

export const revalidate = 60;

// TODO: Add dynamic metadata here.

export async function generateStaticParams() {
  const blogPosts: BlogPostData[] = await sanityClient.fetch(
    groq`*[_type == 'post']{slug{current}}`
  );

  return blogPosts.map((blogPost) => {
    return { slug: blogPost.slug?.current };
  });
}

type BlogPostProps = {
  params: {
    slug: string;
  };
};

export default async function BlogPost({ params }: BlogPostProps) {
  const [blogPost]: BlogPostData[] = await sanityClient.fetch(
    groq`*[_type == "post" && slug.current == "${params.slug}"]{title, date, content}`
  );

  if (!blogPost) notFound();

  return (
    <>
      <Section>
        <Divider
          childLeft={<p>Brandon Carlisle</p>}
          childRight={<p>{blogPost.date && parseDate(blogPost.date)}</p>}
        />

        <Prose content={blogPost.content} />
      </Section>
    </>
  );
}
