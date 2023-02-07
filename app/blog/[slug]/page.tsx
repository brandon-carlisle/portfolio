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
  const [blogPost] = await sanityClient.fetch(
    groq`*[_type == "post" && slug.current == "${params.slug}"]{title, author -> {name}, date, content}`
  );

  return (
    <>
      <Section>
        <div>
          <p>{blogPost.author.name}</p>
          <span>{parseDate(blogPost.date)}</span>
        </div>

        <Prose content={blogPost.content} />
      </Section>
    </>
  );
}
