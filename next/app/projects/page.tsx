import { allProjects } from 'contentlayer/generated';
import { type Metadata } from 'next';

import Header from '@/components/Header';
import ProjectCard from '@/components/ProjectCard';
import Section from '@/components/Section';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'View my personal web dev projects I have worked on.',
};

export default function ProjectsPage() {
  const projectsSortedByOrder = [...allProjects].sort(
    (a, b) => a.position - b.position,
  );

  return (
    <>
      <Header title="All projects" />
      <Section>
        {!projectsSortedByOrder.length ? (
          <p className="text-center">No projects yet, come back later.</p>
        ) : (
          <div className="grid auto-rows-fr grid-cols-1 gap-6">
            {projectsSortedByOrder.map((project) => (
              <ProjectCard key={project._id} project={project} />
            ))}
          </div>
        )}
      </Section>
    </>
  );
}
