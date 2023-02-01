import { sanityClient } from '../../lib/sanity';
import { PortableText } from '@portabletext/react';
import { GetStaticPropsContext } from 'next';
import { groq } from 'next-sanity';
import Head from 'next/head';
import Image from 'next/image';

type TPost = {
  title: string;
  author: { name: string };
  content: any[];
};

type BlogPostProps = {
  post: TPost;
};

function BlogPost({ post }: BlogPostProps) {
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="mx-auto">
        <div className="mb-8">
          <p className="mt-2 text-base">By {post.author.name} on</p>
        </div>

        <div className="prose prose-invert max-w-none rounded-md bg-slate-900/50 p-8 md:prose-lg lg:prose-xl">
          <PortableText value={post.content} />
        </div>
      </section>
    </>
  );
}

export default BlogPost;

export async function getStaticProps(context: GetStaticPropsContext) {
  const slug = context.params?.slug;

  const data = await sanityClient.fetch(
    groq`*[_type == "post" && slug.current == "${slug}"]{title, author -> {name}, content}`
  );

  if (data.length === 0) {
    return {
      notFound: true,
    };
  }

  const post = data[0];

  console.log(post);

  return {
    props: {
      post,
    },
    revalidate: 60,
  };
}

type TPostPath = {
  slug: { current: string };
};

export async function getStaticPaths() {
  const posts: TPostPath[] = await sanityClient.fetch(groq`
    *[_type == 'post']{slug{current}}`);

  const paths = posts.map((post) => ({ params: { slug: post.slug.current } }));

  return {
    paths,
    fallback: 'blocking',
  };
}
