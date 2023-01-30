import Head from 'next/head';
import Link from 'next/link';
import { fetchPostData, transformPostCovers } from '../../lib/helpers';
import { Posts } from '../../lib/helpers';

interface BlogProps {
  posts: Posts;
}

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
              <Link href={`/blog/${post.slug}`}>
                <h3>{post.title}</h3>
                <p className="text-base">{post.date}</p>
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
  const query = await fetchPostData(
    '*[_type == "post"] | order(date desc) {title, slug, date}[0...10]'
  );

  const posts = transformPostCovers(query);

  return {
    props: { posts },
  };
}
