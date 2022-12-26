import Head from 'next/head';
import Image from 'next/image';
import { fetchPostData, transformPostData } from '../../lib/helpers';

function Blog() {
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
    </>
  );
}

export default Blog;
