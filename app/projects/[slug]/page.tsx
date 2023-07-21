import { allProjects } from 'contentlayer/generated';
import { type Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { TbArrowBackUp } from 'react-icons/tb';

import Mdx from '@/components/Mdx';
import Section from '@/components/Section';

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = allProjects.find((project) => project.slug === params.slug);

  if (!project) notFound();

  return (
    <>
      <Section>
        <div className="flex translate-y-10 justify-end">
          <div className="group h-8 w-8 rounded-md bg-zinc-200 dark:bg-zinc-800">
            <BackButtonLink href="/projects" />
          </div>
        </div>
        {project && (
          <div>
            <Mdx code={project.body.code} />
          </div>
        )}
      </Section>
    </>
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

export function generateStaticParams() {
  return allProjects.map((project) => ({
    slug: project.slug,
  }));
}

function BackButtonLink({ href }: { href: string }) {
  return (
    <Link
      className="flex h-full w-full items-center justify-center p-1"
      href={href}
    >
      <TbArrowBackUp className="h-[90%] w-[90%] text-zinc-800 transition-all group-hover:scale-105 group-active:scale-100 dark:text-zinc-100" />
    </Link>
  );
}
