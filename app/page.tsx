import { groq } from 'next-sanity';
import Link from 'next/link';

import { sanityClient } from '@lib/sanity';

import Button from '@components/Button';
import Contact from '@components/Contact';
import Header from '@components/Header';
import ProjectCard from '@components/ProjectCard';
import Section from '@components/Section';

import type { ProjectData } from './projects/page';

export const revalidate = 60;

export default async function Home() {
  const featuredProjects: ProjectData[] = await sanityClient.fetch(
    groq`*[_type == "project" && isFeatured == true]{title, slug{current}, content, isFeatured, description, tech[]->{title}}`,
  );

  return (
    <>
      <Header
        title="Frontend web developer interested in modern tools, and making cool
          stuff on the web."
      >
        <div>
          <p className="mb-7">
            Hi, I&apos;m Brandon - a frontend web developer based in the UK with
            experience working on both frontend and backend development
            projects.
          </p>

          <Button type="button">
            <Link href={'/about'}>Read more about me &rarr;</Link>
          </Button>
        </div>
      </Header>

      {featuredProjects && featuredProjects.length > 0 && (
        <Section title="Featured projects">
          <div className="mb-8 grid auto-rows-fr grid-cols-1 gap-2 md:grid-cols-2">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug?.current} project={project} />
            ))}
          </div>

          <Button type="button">
            <Link href={'/projects'}>View all projects</Link>
          </Button>
        </Section>
      )}

      <Contact />
    </>
  );
}
