import PortableTextComponents from '../../components/PortableTextComponents';
import Section from '../../components/Section';
import { parseDate } from '../../lib/helpers';
import { sanityClient } from '../../lib/sanity';
import { PortableText } from '@portabletext/react';
import { GetStaticPropsContext } from 'next';
import { groq } from 'next-sanity';
import Head from 'next/head';

type Post = {
  title: string;
  author: { name: string };
  date: string;
  content: any[];
};

interface BlogPostProps {
  post: Post;
}

function BlogPost({ post }: BlogPostProps) {
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Section>
        <div>
          <p>{post.author.name}</p>
          <span>{parseDate(post.date)}</span>
        </div>

        <div className="prose prose-invert max-w-none md:prose-lg lg:prose-xl prose-img:aspect-auto prose-img:h-auto prose-img:w-auto prose-img:mx-auto">
          <PortableText
            value={post.content}
            components={PortableTextComponents}
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
    groq`*[_type == "post" && slug.current == "${slug}"]{title, author -> {name, picture}, date, content}`
  );

  if (data.length === 0) {
    return {
      notFound: true,
    };
  }

  const [post] = data;

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
