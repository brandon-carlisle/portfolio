import Header from '../../components/Header';
import Section from '../../components/Section';
import { parseDate } from '../../lib/helpers';
import { sanityClient } from '../../lib/sanity';
import { groq } from 'next-sanity';
import Link from 'next/link';

export type BlogPostData = {
  title?: string;
  slug?: { current: string };
  content?: any[];
  date?: string;
  author?: { name: string };
};

export default async function Blog() {
  const posts: BlogPostData[] = await sanityClient.fetch(
    groq`*[_type == 'post']{title, date, slug{current}}`
  );

  return (
    <>
      <Header title="Blog" />

      <Section>
        <div className="flex flex-col gap-5">
          {posts.map((post) => (
            <div key={post.slug?.current}>
              <Link href={`/blog/${post.slug?.current}`}>
                <p>{post.title}</p>

                {post.date && (
                  <p className="text-base">{parseDate(post.date)}</p>
                )}
              </Link>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
