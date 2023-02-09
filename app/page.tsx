import Contact from '../components/Contact';
import Header from '../components/Header';
import LinkButton from '../components/LinkButton';
import ProjectCard from '../components/ProjectCard';
import Section from '../components/Section';
import { sanityClient } from '../lib/sanity';
import { ProjectData } from './projects/page';
import { groq } from 'next-sanity';
import Link from 'next/link';

export default async function Home() {
  // *[_type == "project" && isFeatured == true]{title, content, isFeatured}

  const projects: ProjectData[] = await sanityClient.fetch(
    groq`*[_type == "project" && isFeatured == true]{title, slug{current}, content, isFeatured, description}`
  );

  return (
    <>
      <Header
        title="Web developer interested in modern tools, and making cool
          stuff on the web."
      >
        <div>
          <p className="mb-7 text-lg">
            Hey there I&apos;m Brandon, a web developer based in England. I love
            working with JavaScript, React and TailwindCSS.
          </p>

          <LinkButton path="about" text="Read more about me">
            <span className="group-hover:translate-x-1 transition-all inline-block">
              &rarr;
            </span>
          </LinkButton>
        </div>
      </Header>

      <Section title="Featured Projects">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 auto-rows-fr">
          {projects.map((project) => (
            <ProjectCard key={project.slug?.current} project={project} />
          ))}
        </div>
      </Section>

      <Contact />
    </>
  );
}
