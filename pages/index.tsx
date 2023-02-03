import Contact from '../components/Contact';
import Header from '../components/Header';
import Head from 'next/head';
import Link from 'next/link';

const pageTitle = 'Web developer';

function Home() {
  return (
    <>
      <Head>
        <title>Brandon Carlisle | {pageTitle}</title>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header
        title="Web developer interested in modern tools, and making cool
          stuff on the web."
      >
        <div>
          <p className="mb-2">
            Hey there I&apos;m Brandon, a web developer based in England. I love
            working with JavaScript, React and TailwindCSS.
          </p>
          <Link href="/profile">Read more about me &rarr;</Link>
        </div>
      </Header>

      <Contact />
    </>
  );
}

export default Home;
