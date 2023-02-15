import Header from '../../components/Header';
import ProjectCard from '../../components/ProjectCard';
import Section from '../../components/Section';
import { sanityClient } from '../../lib/sanity';
import { groq } from 'next-sanity';

export const revalidate = 60;

export type ProjectData = {
  title?: string;
  slug?: { current: string };
  description?: string;
  content?: any[];
  date?: string;
  isFeatured?: boolean;
  tech?: { link: string; title: string }[];
  repo?: string;
  site?: string;
};

export default async function Projects() {
  const projects: ProjectData[] = await sanityClient.fetch(
    groq`*[_type == 'project'] | order(isFeatured desc){title, description, slug{current}, isFeatured,  tech[]->{title}}`
  );

  if (!projects || !projects.length)
    return <p className="text-center">No projects yet, come back later.</p>;

  return (
    <>
      <Header title="Projects" />
      <Section>
        <div className="grid auto-rows-fr grid-cols-1 gap-2 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug?.current} project={project} />
          ))}
        </div>
      </Section>
    </>
  );
}
