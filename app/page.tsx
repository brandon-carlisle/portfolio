import Contact from '../components/Contact';
import Header from '../components/Header';
import LinkButton from '../components/LinkButton';
import ProjectCard from '../components/ProjectCard';
import Section from '../components/Section';
import { sanityClient } from '../lib/sanity';
import type { ProjectData } from './projects/page';
import { groq } from 'next-sanity';

export const revalidate = 60;

export default async function Home() {
  const featuredProjects: ProjectData[] = await sanityClient.fetch(
    groq`*[_type == "project" && isFeatured == true]{title, slug{current}, content, isFeatured, description, tech[]->{title}}`
  );

  return (
    <>
      <Header
        title="Frontend web developer interested in modern tools, and making cool
          stuff on the web."
      >
        <div>
          <p className="mb-7 text-lg">
            Hi, I&apos;m Brandon - a frontend web developer based in the UK with
            experience working on both frontend and backend development
            projects.
          </p>

          <LinkButton path="about" text="Read more about me" style="primary">
            <span className="inline-block transition-all group-hover:translate-x-1">
              &rarr;
            </span>
          </LinkButton>
        </div>
      </Header>

      {featuredProjects && featuredProjects.length > 0 && (
        <Section title="Featured projects">
          <div className="mb-8 grid auto-rows-fr grid-cols-1 gap-2 md:grid-cols-2">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug?.current} project={project} />
            ))}
          </div>
          <LinkButton
            path="projects"
            text="View all projects"
            style="tertiary"
          />
        </Section>
      )}

      <Contact />
    </>
  );
}
