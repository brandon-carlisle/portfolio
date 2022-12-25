import Head from 'next/head';

function Home() {
  return (
    <>
      <Head>
        <title>Brandon Carlisle | Web Developer</title>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="relative">
        <header>
          <h1 className="font-semi-bold text-6xl leading-tight">
            A front end web developer interested in modern tools, and making
            cool stuff on the web.
          </h1>
        </header>
      </section>
    </>
  );
}

export default Home;
