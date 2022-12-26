import Head from 'next/head';
import Image from 'next/image';
import { sanityClient, urlForImage } from '../lib/sanity';

function Blog({ post }) {
  const { title, image } = post;
  console.log(image);

  return (
    <>
      <Head>
        <title>Brandon Carlisle | Blog</title>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="mb-8">
        <h1>Blog Section</h1>
      </section>

      <section>
        <h2>{title}</h2>
        <Image src={image} alt={title} width={750} height={1125} />
      </section>
    </>
  );
}

export default Blog;

export async function getStaticProps() {
  const posts = await sanityClient.fetch(`*[_type == "post"]`);
  const post = {
    title: posts[0].title,
    image: urlForImage(posts[0].coverImage),
  };

  return {
    props: {
      post,
    },
  };
}
