import { allProjects } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { notFound } from 'next/navigation';

import Prose from '@/components/Prose';
import Section from '@/components/Section';

// export async function generateMetadata({ params }): Promise<Metadata> {
//   return {
//     title: project.title,
//     description: `${project.title} is a web development project by Brandon Carlisle`,
//     openGraph: {
//       title: `${project.title} | Brandon Carlisle`,
//       description:
//         'Frontend web developer interested in modern tools, and making cool stuff on the web',
//       images: [
//         {
//           url: `https://carlisle.dev/api/og?subTitle=${project.title}`,
//           width: 1920,
//           height: 1080,
//         },
//       ],
//     },
//   };
// }

interface ProjectProps {
  params: {
    slug: string;
  };
}

export default async function Project({ params }: ProjectProps) {
  const project = allProjects.find((project) => project.slug === params.slug);
  if (!project) notFound();

  return (
    <Section>
      <Mdx code={project.body.code} />
    </Section>
  );
}

interface MdxProps {
  code: string;
}

function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return (
    <Prose>
      <Component />
    </Prose>
  );
}
