import Contact from '../../components/Contact';
import Container from '../../components/Container';
import Header from '../../components/Header';
import Section from '../../components/Section';
import { sanityClient } from '../../lib/sanity';
import { groq } from 'next-sanity';
import Link from 'next/link';

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
            <Link
              key={project.slug?.current}
              href={`/projects/${project.slug?.current}`}
            >
              <Container styles={['hover:bg-blue-900/30 transition-all']}>
                <p className="text-xl font-semibold mb-2">{project.title}</p>
                <p>{project.description}</p>
                {project.isFeatured && (
                  <span className="px-4 py-2 rounded-full border-2 border-green-500 text-gray-400 font-semibold text-sm flex align-center w-max mt-4">
                    Featured
                  </span>
                )}
              </Container>
            </Link>
          ))}
        </div>
      </Section>
      <Contact />
    </>
  );
}
