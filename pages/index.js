import Head from 'next/head';
import Shapes from '../components/shapes';

function Home() {
  return (
    <>
      <Head>
        <title>Brandon Carlisle | Web Developer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="relative mx-auto">
        <header>
          <h1 className="font-semi-bold text-5xl leading-tight">
            A web developer interested in modern tooling and styling using
            React, Next and Tailwind.
          </h1>
        </header>
      </section>
    </>
  );
}

export default Home;
