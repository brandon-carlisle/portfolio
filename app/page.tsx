import { allProjects } from 'contentlayer/generated';
import Link from 'next/link';

import Button from '@/components/Button';
import Contact from '@/components/Contact';
import Header from '@/components/Header';
import ProjectCard from '@/components/ProjectCard';
import Section from '@/components/Section';

export default async function HomePage() {
  const featuredProjects = allProjects.filter((project) => project.featured);

  return (
    <>
      <Header
        title={
          <div className="leading-[1.2]">
            Frontend web developer interested in making{' '}
            <span className="border-b border-dashed border-current text-green-500 dark:text-green-200">
              tools
            </span>{' '}
            and great looking user{' '}
            <span className="border-b border-dashed border-current text-blue-500 dark:text-blue-300">
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
            <Link href="/about" className="group">
              Read more about me{' '}
              <span className="inline-block transition-all group-hover:translate-x-1">
                &rarr;
              </span>
            </Link>
          </Button>
        </div>
      </Header>

      <Section title="Featured projects">
        {!featuredProjects.length ? (
          <p className="text-center">No projects yet, come back later.</p>
        ) : (
          <div className="grid auto-rows-fr grid-cols-1 gap-4 md:grid-cols-2">
            {featuredProjects.map((project) => (
              <ProjectCard key={project._id} project={project} />
            ))}
          </div>
        )}

        <div className="mt-7">
          <Button type="button">
            <Link href="/projects" className="group">
              View all{' '}
              <span className="inline-block transition-all group-hover:translate-x-1">
                &rarr;
              </span>
            </Link>
          </Button>
        </div>
      </Section>

      <Contact />
    </>
  );
}
