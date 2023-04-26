import type { Metadata } from 'next';
import { groq } from 'next-sanity';
import { notFound } from 'next/navigation';

import { sanityClient } from '@lib/sanity';

import Prose from '@components/Prose';
import Section from '@components/Section';

import type { ProjectData } from '../page';

// TODO: Add dynamic metadata here.

interface ProjectParams {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: ProjectParams): Promise<Metadata> {
  const [project]: { title: string }[] = await sanityClient.fetch(
    groq`*[_type == "project" && slug.current == "${params.slug}"]{title}`,
  );

  return {
    title: project.title,
    description: `${project.title} is a web development project by Brandon Carlisle`,
    openGraph: {
      title: `${project.title} | Brandon Carlisle`,
      description:
        'Frontend web developer interested in modern tools, and making cool stuff on the web',
      images: [
        {
          url: `https://carlisle.dev/api/og?subTitle=${project.title}`,
          width: 1920,
          height: 1080,
        },
      ],
    },
  };
}

export async function generateStaticParams() {
  const projects: ProjectData[] = await sanityClient.fetch(
    groq`*[_type == 'project']{slug{current}}`,
  );

  return projects.map((project) => {
    return { slug: project.slug?.current };
  });
}

async function getProject({ slug }: { slug: string }) {
  const [project]: ProjectData[] = await sanityClient.fetch(
    groq`*[_type == "project" && slug.current == "${slug}"]{title, content, repo, site}`,
  );

  return project;
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

interface DividerProps {
  childLeft: React.ReactNode;
  childRight: React.ReactNode;
}

export function Divider({ childLeft, childRight }: DividerProps) {
  return (
    <div className="mb-12 flex items-center justify-between gap-2 text-gray-200/50">
      {childLeft}
      <div className="h-[1px] w-1/4 bg-blue-500/20 md:w-1/2"></div>
      {childRight}
    </div>
  );
}
