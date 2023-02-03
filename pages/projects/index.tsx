import Contact from '../../components/Contact';
import Container from '../../components/Container';
import Header from '../../components/Header';
import Section from '../../components/Section';
import { sanityClient } from '../../lib/sanity';
import { groq } from 'next-sanity';
import Head from 'next/head';
import Link from 'next/link';

interface ProjectsProps {
  projects: {
    title: string;
    description: string;
    slug: { current: string };
  }[];
}

const pageTitle = 'Projects';

function Projects({ projects }: ProjectsProps) {
  return (
    <>
      <Head>
        <title>Brandon Carlisle | {pageTitle}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header title={pageTitle} />

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

export default Projects;

export async function getServerSideProps() {
  const projects = await sanityClient.fetch(
    groq`*[_type == 'project']{title, description, slug{current}}`
  );

  return {
    props: { projects },
  };
}
