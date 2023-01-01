import Head from 'next/head';
import Contact from '../components/contact';

function Profile() {
  return (
    <>
      <Head>
        <title>Brandon Carlisle | Profile</title>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="mb-16 border-b-2 border-blue-800/30">
        <div className="mb-16 flex flex-col gap-4">
          <h1 className="">Profile</h1>

          <p>
            I&apos;m Brandon, a frontend web developer interested in making cool
            and interesting web apps using modern technologies. I am based in
            York, England, currently self teaching myself web development (using
            good ol YouTube and docs).
          </p>
        </div>

        <div className="mb-8 rounded-md bg-slate-900/50 p-8">
          <p className="mb-4">Tech I use currently:</p>

          <ul className="flex flex-col gap-2">
            <li>
              <a href="https://javascript.info/">JavaScript (duh)</a>
            </li>
            <li>
              <a href="https://reactjs.org/">React</a>
            </li>
            <li>
              <a href="https://tailwindcss.com/">TailwindCSS</a>
            </li>
            <li>
              <a href="https://www.figma.com/">Figma</a>
            </li>
            <li>
              <a href="https://firebase.google.com/">Firebase</a>
            </li>
          </ul>
        </div>

        <div className="mb-8 rounded-md bg-slate-900/50 p-8">
          <p className="mb-4">Tech I want to learn / am currently learing:</p>

          <ul className="flex flex-col gap-2">
            <li>
              <a href="https://supabase.com/">Supabase</a>
            </li>
            <li>
              <a href="https://en.wikipedia.org/wiki/SQL">SQL</a>
            </li>
            <li>
              <a href="https://www.framer.com/motion/">Framer Motion</a>
            </li>
            <li>
              <p>And in general more fullstack tech..</p>
            </li>
          </ul>
        </div>
      </section>

      <section>
        <Contact />
      </section>
    </>
  );
}

export default Profile;
