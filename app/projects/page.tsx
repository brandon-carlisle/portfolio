import Contact from '../../components/Contact';
import Container from '../../components/Container';
import Header from '../../components/Header';
import Section from '../../components/Section';
import { sanityClient } from '../../lib/sanity';
import { groq } from 'next-sanity';
import Link from 'next/link';

export const metadata = {
  title: 'Projects',
};

type Project = {
  title: string;
  description: string;
  slug: { current: string };
};

export default async function Projects() {
  const projects: Project[] = await sanityClient.fetch(
    groq`*[_type == 'project']{title, description, slug{current}}`
  );

  return (
    <>
      <Header title="Projects" />

      <Section>
        <div className="flex flex-col gap-5">
          {projects.map((project) => (
            <div key={project.slug.current}>
              <Link href={`/projects/${project.slug.current}`}>
                <Container>
                  <p>{project.title}</p>
                  <p>{project.description}</p>
                </Container>
              </Link>
            </div>
          ))}
        </div>
      </Section>

      <Contact />
    </>
  );
}
