import { sanityClient } from '../../lib/sanity';
import { format, parseISO } from 'date-fns';
import Head from 'next/head';
import Link from 'next/link';

type BlogProps = {
  posts: {
    date: string;
    slug: { current: string };
    title: string;
  }[];
};

function Blog({ posts }: BlogProps) {
  return (
    <>
      <Head>
        <title>Brandon Carlisle | Blog</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="mb-8">
        <h1 className="mb-8">Blog</h1>

        <div className="flex flex-col gap-5">
          {posts.map((post) => (
            <div key={post.slug.current}>
              <Link href={`/blog/${post.slug.current}`}>
                <h3>{post.title}</h3>
                <p className="text-base">
                  {format(parseISO(post.date), 'LLL d, yyyy')}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Blog;

export async function getServerSideProps() {
  const posts = await sanityClient.fetch(
    "*[_type == 'post']{title, date, slug{current}}"
  );

  return {
    props: { posts },
  };
}
