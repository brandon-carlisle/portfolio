import Head from 'next/head';
import Contact from '../components/contact';
import TechCard from '../components/tech-card';

type CardLinks = { title: string; href: string }[];

const cardOneLinks: CardLinks = [
  {
    title: 'JavaScript',
    href: 'https://javascript.info/',
  },
  {
    title: 'React',
    href: 'https://reactjs.org/',
  },
  {
    title: 'Tailwind',
    href: 'https://tailwindcss.com/',
  },
  {
    title: 'Figma',
    href: 'https://www.figma.com/',
  },
  {
    title: 'NextJS',
    href: 'https://nextjs.org/',
  },
];

const cardTwoLinks: CardLinks = [
  {
    title: 'Supabase',
    href: 'https://supabase.com/',
  },
  {
    title: 'Firebase',
    href: 'https://firebase.google.com/',
  },
  {
    title: 'Framer Motion',
    href: 'https://www.framer.com/motion/',
  },
];

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

        <TechCard title="Tech I use currently:" links={cardOneLinks} />
        <TechCard
          title="Tech I want to learn / am currently learing:"
          links={cardTwoLinks}
        />
      </section>

      <section>
        <Contact />
      </section>
    </>
  );
}

export default Profile;
