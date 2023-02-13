import Prose from '../../../components/Prose';
import Section from '../../../components/Section';
import { sanityClient } from '../../../lib/sanity';
import type { ProjectData } from '../page';
import { groq } from 'next-sanity';
import { notFound } from 'next/navigation';

export const revalidate = 60;

export async function generateStaticParams() {
  const projects: ProjectData[] = await sanityClient.fetch(
    groq`*[_type == 'project']{slug{current}}`
  );

  return projects.map((project) => {
    return { slug: project.slug?.current };
  });
}

async function getProject({ slug }: { slug: string }) {
  const [project]: ProjectData[] = await sanityClient.fetch(
    groq`*[_type == "project" && slug.current == "${slug}"]{title, content, repo, site}`
  );

  return project;
}

type ProjectProps = {
  params: {
    slug: string;
  };
};

export default async function Project({ params }: ProjectProps) {
  const project = await getProject({ slug: params.slug });

  if (!project) notFound();

  return (
    <>
      <Section>
        {project.site && project.repo && (
          <div className="mb-12 flex items-center justify-between gap-2 text-gray-200 underline underline-offset-1">
            <a href={project.site} target="_blank" rel="noreferrer">
              Live site
            </a>
            <div className="h-[1px] w-1/2 bg-blue-500/20"></div>
            <a href={project.repo} target="_blank" rel="noreferrer">
              Github repo
            </a>
          </div>
        )}

        <Prose content={project.content} />
      </Section>
    </>
  );
}
