import Link from 'next/link';

import Button from '@/components/Button';
import Contact from '@/components/Contact';
import Header from '@/components/Header';

export default async function Home() {
  return (
    <>
      <Header
        title={
          <div className="leading-[1.2]">
            Frontend web developer interested in making{' '}
            <span className="border-b border-dashed text-green-200">tools</span>{' '}
            and great looking user{' '}
            <span className="border-b border-dashed text-blue-300">
              interfaces
            </span>{' '}
            on the web.
          </div>
        }
      >
        <div>
          <p className="mb-7">
            Hi, I&apos;m Brandon - a frontend web developer based in the UK with
            experience working on both frontend and backend development
            projects.
          </p>

          <Button type="button">
            <Link href={'/about'} className="group">
              Read more about me{' '}
              <span className="inline-block transition-all group-hover:translate-x-1">
                &rarr;
              </span>
            </Link>
          </Button>
        </div>
      </Header>

      {/* {featuredProjects && featuredProjects.length > 0 && (
        <Section title="Featured projects">
          <div className="mb-8 grid auto-rows-fr grid-cols-1 gap-2 md:grid-cols-2">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug?.current} project={project} />
            ))}
          </div>

          <Button type="button">
            <Link href={'/projects'} className="group">
              View all projects{' '}
              <span className="inline-block transition-all group-hover:translate-x-1">
                &rarr;
              </span>
            </Link>
          </Button>
        </Section>
      )} */}

      <Contact />
    </>
  );
}
