import Contact from '../../components/Contact';
import Header from '../../components/Header';
import ProjectCard from '../../components/ProjectCard';
import Section from '../../components/Section';
import { sanityClient } from '../../lib/sanity';
import { groq } from 'next-sanity';

export type ProjectData = {
  title?: string;
  slug?: { current: string };
  description?: string;
  content?: any[];
  date?: string;
  isFeatured?: boolean;
};

export default async function Projects() {
  const projects: ProjectData[] = await sanityClient.fetch(
    groq`*[_type == 'project']{title, description, slug{current}, isFeatured}`
  );

  return (
    <>
      <Header title="Projects" />
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 auto-rows-fr">
          {projects.map((project) => (
            <ProjectCard key={project.slug?.current} project={project} />
          ))}
        </div>
      </Section>
      <Contact />
    </>
  );
}
