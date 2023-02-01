import { sanityClient } from '../../lib/sanity';
import { PortableText } from '@portabletext/react';
import Head from 'next/head';
import Image from 'next/image';

// Temp?

type Post = {
  title: string;
  author: { name: string };
  content: any[];
};

type BlogPostProps = {
  post: Post;
};

function BlogPost({ post }: BlogPostProps) {
  console.log(post);

  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="mx-auto">
        <div className="mb-8">
          <h1>{post.title}</h1>
          <p className="mt-2 text-base">By {post.author.name} on</p>

          {/* {post.coverImageURL ? (
            <div className="relative mt-8 h-96 w-full">
              <Image
                src={post.coverImageURL}
                alt={`Cover image for ${post.title}`}
                fill
                className="rounded-md object-cover"
                priority
                sizes="768px"
              />
            </div>
          ) : (
            ''
          )} */}
        </div>

        <div className="prose prose-invert max-w-none rounded-md bg-slate-900/50 p-8 md:prose-lg lg:prose-xl">
          <PortableText value={post.content} />
        </div>
      </section>
    </>
  );
}

export default BlogPost;

export async function getStaticProps({ params }) {
  const { slug } = params;

  const data = await sanityClient.fetch(
    `*[_type == "post" && slug.current == "${slug}"]{title, author -> {name}, content}`
  );

  if (data.length === 0) {
    return {
      notFound: true,
    };
  }

  const post = data[0];

  return {
    props: {
      post,
    },
    revalidate: 60,
  };
}

export async function getStaticPaths() {
  const posts = await sanityClient.fetch("*[_type == 'post']{slug{current}}");
  const paths = posts.map((post) => ({ params: { slug: post.slug.current } }));

  return {
    paths,
    fallback: 'blocking',
  };
}
