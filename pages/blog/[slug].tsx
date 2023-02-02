import Section from '../../components/Section';
import { urlFor } from '../../lib/helpers';
import { sanityClient } from '../../lib/sanity';
import { PortableText } from '@portabletext/react';
import { GetStaticPropsContext } from 'next';
import { groq } from 'next-sanity';
import Head from 'next/head';

type Post = {
  title: string;
  author: { name: string };
  content: any[];
};

interface BlogPostProps {
  post: Post;
}

const myPortableTextComponents = {
  types: {
    image: ({ value }) => <img src={urlFor(value)} />,
  },
};

function BlogPost({ post }: BlogPostProps) {
  console.log(post.content);

  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Section>
        <div className="prose prose-invert max-w-none md:prose-lg lg:prose-xl">
          <PortableText
            value={post.content}
            components={myPortableTextComponents}
          />
        </div>
      </Section>
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
