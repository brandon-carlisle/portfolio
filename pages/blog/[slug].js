import Head from 'next/head';
import Image from 'next/image';
import { fetchPostData, transformPostData } from '../../lib/helpers';
import { PortableText } from '@portabletext/react';

function BlogPost({ post }) {
  return (
    <>
      <Head>
        <title>Brandon Carlisle | Blog</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section>
        <h1 className="mb-8">{post.title}</h1>
        <PortableText value={post.content} />
      </section>
    </>
  );
}

export default BlogPost;

export async function getStaticProps({ params }) {
  const { slug } = params;
  const res = await fetchPostData(
    `*[_type == "post" && slug.current == "${slug}"]`
  );

  if (res.length === 0) {
    return {
      notFound: true,
    };
  }

  const post = await transformPostData(res[0]);

  return {
    props: { post },
    revalidate: 60,
  };
}

export async function getStaticPaths() {
  const res = await fetchPostData('*[_type == "post"] {slug{current}}');
  const paths = res.map((slug) => {
    return { params: { slug: slug.slug.current } };
  });

  return {
    paths,
    fallback: 'blocking',
  };
}
