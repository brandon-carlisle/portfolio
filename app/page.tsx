import BlogPostPreviews from '../components/BlogPostPreviews';
import Contact from '../components/Contact';
import Header from '../components/Header';
import LinkButton from '../components/LinkButton';
import ProjectCard from '../components/ProjectCard';
import Section from '../components/Section';
import { sanityClient } from '../lib/sanity';
import type { BlogPostData } from './blog/page';
import type { ProjectData } from './projects/page';
import { groq } from 'next-sanity';

export default async function Home() {
  // *[_type == "project" && isFeatured == true]{title, content, isFeatured}

  const featuredProjects: ProjectData[] = await sanityClient.fetch(
    groq`*[_type == "project" && isFeatured == true]{title, slug{current}, content, isFeatured, description, tech[]->{title}}`
  );

  const recentBlogPosts: BlogPostData[] = await sanityClient.fetch(
    // gets last two blog posts - newest first
    groq`*[_type == 'post'] | order(_createdAt desc)[0..1]{title, date, slug{current}}`
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

      {recentBlogPosts && recentBlogPosts.length > 0 && (
        <Section title="Recent blog posts">
          <BlogPostPreviews posts={recentBlogPosts} />

          <LinkButton path="blog" text="View all blog posts" style="tertiary" />
        </Section>
      )}

      <Contact />
    </>
  );
}
