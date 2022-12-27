import Head from 'next/head';
import { fetchPostData, transformPostData } from '../../lib/helpers';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';

function BlogPost({ post }) {
  return (
    <>
      <Head>
        <title>{post.title} | Brandon Carlisle | Blog</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="mx-auto">
        <div className="mb-8">
          <h1>{post.title}</h1>
          <p className="mt-2 text-base">
            By {post.author.name} on
            <date> {post.date}</date>
          </p>

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
        </div>

        <div className="portable">
          <PortableText value={post.content} />
        </div>
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
    revalidate: 120,
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
