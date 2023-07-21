import { allProjects } from 'contentlayer/generated';

import Contact from '@/components/Contact';
import Header from '@/components/Header';
import ProjectCard from '@/components/ProjectCard';
import Section from '@/components/Section';
import UnderlineLink from '@/components/UnderlineLink';

export default function HomePage() {
  const featuredProjects = allProjects.filter((project) => project.featured);
  const projectsSortedByOrder = [...featuredProjects].sort(
    (a, b) => a.position - b.position,
  );

  return (
    <>
      <Header
        title={
          <div className="leading-[1.2]">
            A developer crafting performant{' '}
            <span className="border-b border-dashed border-current text-green-500 dark:text-sky-200">
              websites
            </span>{' '}
            with up-to-date looking user{' '}
            <span className="border-b border-dashed border-current text-blue-600/90 dark:text-green-200">
              interfaces
            </span>{' '}
            on the web.
          </div>
        }
      >
        <div className="mt-8">
          <p className="mb-7 text-neutral-400">
            Hi, I&apos;m Brandon - a web developer based in the UK with over 1
            years experience working on both frontend and backend development
            projects using TypeScript, React and Next.js.
          </p>

          <UnderlineLink href="/about">
            Read more about me{' '}
            <span className="inline-block transition-all group-hover:translate-x-1">
              &rarr;
            </span>
          </UnderlineLink>
        </div>
      </Header>

      <Section title="Featured projects">
        {!projectsSortedByOrder.length ? (
          <p className="text-center">No projects yet, come back later.</p>
        ) : (
          <div className="grid auto-rows-fr grid-cols-1 gap-6">
            {projectsSortedByOrder.map((project) => (
              <ProjectCard key={project._id} project={project} />
            ))}
          </div>
        )}

        <div className="mt-7">
          <UnderlineLink href="/projects">
            View all{' '}
            <span className="inline-block transition-all group-hover:translate-x-1">
              &rarr;
            </span>
          </UnderlineLink>
        </div>
      </Section>

      <Contact />
    </>
  );
}
