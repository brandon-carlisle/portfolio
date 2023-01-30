import Head from 'next/head';
import Link from 'next/link';
import Contact from '../components/contact';

function Home() {
  return (
    <>
      <Head>
        <title>Brandon Carlisle | Web Developer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="mb-16 border-b-2 border-blue-800/30">
        <h1 className="text-left">
          A front end web developer interested in modern tools, and making cool
          stuff on the web.
        </h1>

        <div className="my-8 flex flex-col gap-4">
          <div className="flex gap-1 text-2xl">
            <span>👋</span>
            <p>
              Hey there I&apos;m Brandon, a front end web developer based in
              England. I love working with JavaScript, React and TailwindCSS.
            </p>
          </div>

          <div className="flex gap-1 text-2xl">
            <span>🤝</span>
            <Link href="/profile">Read more about me &rarr;</Link>
          </div>
        </div>
      </section>

      <section>
        <Contact />
      </section>
    </>
  );
}

export default Home;
