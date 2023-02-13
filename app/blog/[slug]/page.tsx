import Prose from '../../../components/Prose';
import Section from '../../../components/Section';
import { parseDate } from '../../../lib/helpers';
import { sanityClient } from '../../../lib/sanity';
import type { BlogPostData } from '../page';
import { groq } from 'next-sanity';

export const revalidate = 60;

export async function generateStaticParams() {
  const blogPosts: BlogPostData[] = await sanityClient.fetch(
    groq`*[_type == 'project']{slug{current}}`
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
    groq`*[_type == "post" && slug.current == "${params.slug}"]{title, author -> {name}, date, content}`
  );

  return (
    <>
      <Section>
        <div className="mb-12 flex items-center justify-between gap-2 text-gray-200/50">
          <p>{blogPost.author?.name}</p>
          <div className="h-[1px] w-1/2 bg-blue-500/20"></div>
          <p>{blogPost.date && parseDate(blogPost.date)}</p>
        </div>

        <Prose content={blogPost.content} />
      </Section>
    </>
  );
}
