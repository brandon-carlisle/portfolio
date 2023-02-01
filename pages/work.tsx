import Contact from '../components/Contact';
import Header from '../components/Header';
import Head from 'next/head';

function Work() {
  return (
    <>
      <Head>
        <title>Brandon Carlisle | Work</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header title="Work Page" />
      <Contact />
    </>
  );
}

export default Work;
