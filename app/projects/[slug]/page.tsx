import { allProjects } from 'contentlayer/generated';
import { type Metadata } from 'next';
import Link from 'next/link';

import Button from '@/components/Button';
import Mdx from '@/components/Mdx';
import Section from '@/components/Section';

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = allProjects.find((project) => project.slug === params.slug);

  return (
    <Section>
      {!project && (
        <div>
          <p className="mb-3">No project with that name...</p>
          <Button type="button">
            <Link href="/projects">Go back</Link>
          </Button>
        </div>
      )}

      {project && <Mdx code={project.body.code} />}
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
      title: 'Not found...',
    };

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
  return allProjects.map((project) => ({
    slug: project.slug,
  }));
}
