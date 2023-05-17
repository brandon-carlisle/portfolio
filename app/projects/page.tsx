import { allProjects } from 'contentlayer/generated';
import { type Metadata } from 'next';

import Header from '@/components/Header';
import ProjectCard from '@/components/ProjectCard';
import Section from '@/components/Section';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Projects',
  description: 'View my personal web dev projects I have worked on.',
};

export default async function Projects() {
  return (
    <>
      <Header title="Projects"></Header>

      <Section>
        {!allProjects.length ? (
          <p className="text-center">No projects yet, come back later.</p>
        ) : (
          <div className="grid auto-rows-fr grid-cols-1 gap-4 md:grid-cols-2">
            {allProjects.map((project) => (
              <ProjectCard key={project._id} project={project} />
            ))}
          </div>
        )}
      </Section>
    </>
  );
}
