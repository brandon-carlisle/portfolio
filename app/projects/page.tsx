import { type Metadata } from 'next';

import Header from '@/components/Header';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Projects',
  description: 'View my personal web dev projects I have worked on.',
};

export default async function Projects() {
  return (
    <>
      <Header title="Projects"></Header>

      {/* <Section>
        {!projects || !projects.length ? (
          <p className="text-center">No projects yet, come back later.</p>
        ) : (
          <div className="grid auto-rows-fr grid-cols-1 gap-4 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.slug?.current} project={project} />
            ))}
          </div>
        )}
      </Section> */}
    </>
  );
}
