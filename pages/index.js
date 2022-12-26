import Head from 'next/head';
import Link from 'next/link';

function Home() {
  return (
    <>
      <Head>
        <title>Brandon Carlisle | Web Developer</title>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section>
        <h1 className="font-semi-bold mb-10 text-6xl leading-tight">
          A front end web developer interested in modern tools, and making cool
          stuff on the web.
        </h1>

        <div className="mb-2 flex gap-1 text-2xl">
          <span>👋</span>
          <p className="text-2xl font-light text-blue-100">
            Hey there I&apos;m Brandon, a front end web developer based in
            England. I love working with the latest tools of the web.
          </p>
        </div>

        <div className="flex gap-1 text-2xl">
          <span>🤝</span>
          <p className="text-2xl font-light text-blue-100 underline">
            <Link href="/profile">Read more about me &rarr;</Link>
          </p>
        </div>
      </section>
    </>
  );
}

export default Home;
