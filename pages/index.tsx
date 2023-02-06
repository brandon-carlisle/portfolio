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
          <p className="mb-6">
            Hey there I&apos;m Brandon, a web developer based in England. I love
            working with JavaScript, React and TailwindCSS.
          </p>

          <Link
            href="/profile"
            className="bg-blue-300 text-blue-900 font-semibold py-2 px-4 rounded-md group"
          >
            Read more about me{' '}
            <span className="group-hover:translate-x-1 transition-all inline-block">
              &rarr;
            </span>
          </Link>
        </div>
      </Header>

      <Contact />
    </>
  );
}

export default Home;
