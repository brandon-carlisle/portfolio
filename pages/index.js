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

      <section className="mb-16 border-b-2 border-blue-800/30 pb-16">
        <h1 className="mb-10 text-center sm:text-left">
          A front end web developer interested in modern tools, and making cool
          stuff on the web.
        </h1>

        <div className="mb-2 flex gap-1 text-2xl">
          <span>👋</span>
          <p className="text-2xl font-light text-blue-100">
            Hey there I&apos;m Brandon, a front end web developer based in
            England. I love working with JavaScript, React and TailwindCSS.
          </p>
        </div>

        <div className="flex gap-1 text-2xl">
          <span>🤝</span>
          <p className="text-2xl font-light text-blue-100 underline">
            <Link href="/profile">Read more about me &rarr;</Link>
          </p>
        </div>
      </section>

      <section>
        <Contact />
      </section>
    </>
  );
}

export default Home;
