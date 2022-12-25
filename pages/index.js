import Head from 'next/head';

function Home() {
  return (
    <>
      <Head>
        <title>Brandon Carlisle | Web Developer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <h1 className="text-3xl">This is the main tag!</h1>
      </div>
    </>
  );
}

export default Home;
