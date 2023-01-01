import Head from 'next/head';

function Profile() {
  return (
    <>
      <Head>
        <title>Brandon Carlisle | Profile</title>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section>
        <h1 className="mb-8">Profile</h1>

        <p>
          I&apos;m Brandon, a frontend web developer interested in making cool
          and interesting web apps using modern technologies. I am based in
          York, England, currently self teaching myself web development (using
          good ol YouTube and docs).
        </p>

        <div>
          <p>Here are some technologies I like to use currently:</p>

          <ul>
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
      </section>
    </>
  );
}

export default Profile;
