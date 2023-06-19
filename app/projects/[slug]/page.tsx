import { allProjects } from 'contentlayer/generated';
import { type Metadata } from 'next';
import { notFound } from 'next/navigation';

import Mdx from '@/components/Mdx';
import Section from '@/components/Section';

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = allProjects.find((project) => project.slug === params.slug);

  if (!project) notFound();

  return (
    <Section>
      {project && (
        <div>
          <Divider githubLink={project.github} siteLink={project.site} />
          <Mdx code={project.body.code} />
        </div>
      )}
    </Section>
  );
}

interface MetadataProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: MetadataProps): Promise<Metadata> {
  const project = allProjects.find((project) => project.slug === params.slug);

  if (!project)
    return {
      title: '404',
    };

  return {
    title: project.title,
    description: `${project.title} is a web development project by Brandon Carlisle`,
    openGraph: {
      title: `${project.title} | Brandon Carlisle`,
      description: `${project.description}`,
    },
  };
}

export async function generateStaticParams() {
  return allProjects.map((project) => ({
    slug: project.slug,
  }));
}

interface DividerProps {
  githubLink: string;
  siteLink: string;
}

function Divider({ githubLink, siteLink }: DividerProps) {
  return (
    <div className="mb-12 flex items-center justify-between gap-2 dark:text-gray-200/50">
      <a
        href={siteLink}
        target="_blank"
        rel="noreferrer"
        className="underline underline-offset-2 dark:text-gray-200"
      >
        Live Site
      </a>
      <div className="h-[1px] w-1/4 bg-zinc-800/20 dark:bg-zinc-500/20 md:w-1/2"></div>
      <a
        href={githubLink}
        target="_blank"
        rel="noreferrer"
        className="underline underline-offset-2 dark:text-gray-200"
      >
        Source Code
      </a>
    </div>
  );
}
