import Prose from '../../../components/Prose';
import Section from '../../../components/Section';
import { sanityClient } from '../../../lib/sanity';
import type { ProjectData } from '../page';
import { groq } from 'next-sanity';
import { notFound } from 'next/navigation';
import Divider from '../../../components/Divider';
import type { Metadata } from 'next';

export const revalidate = 60;

async function getProject({ slug }: { slug: string }) {
  const [project]: ProjectData[] = await sanityClient.fetch(
    groq`*[_type == "project" && slug.current == "${slug}"]{title, content, repo, site}`
  );

  return project;
}

// TODO: Add dynamic metadata here.

type ProjectParams = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({
  params,
}: ProjectParams): Promise<Metadata> {
  const [project]: { title: string }[] = await sanityClient.fetch(
    groq`*[_type == "project" && slug.current == "${params.slug}"]{title}`
  );

  console.log(project);

  return { title: project.title };
}

export async function generateStaticParams() {
  const projects: ProjectData[] = await sanityClient.fetch(
    groq`*[_type == 'project']{slug{current}}`
  );

  return projects.map((project) => {
    return { slug: project.slug?.current };
  });
}

export default async function Project({ params }: ProjectParams) {
  const project = await getProject({ slug: params.slug });

  if (!project) notFound();

  return (
    <>
      <Section>
        <Divider
          childLeft={
            <a
              href={project.site}
              target="_blank"
              rel="noreferrer"
              className="text-gray-200 underline underline-offset-1"
            >
              Live Site
            </a>
          }
          childRight={
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="text-gray-200 underline underline-offset-1"
            >
              Source Code
            </a>
          }
        />

        <Prose content={project.content} />
      </Section>
    </>
  );
}
