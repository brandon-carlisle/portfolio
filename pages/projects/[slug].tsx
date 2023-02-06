import Prose from '../../components/Prose';
import Section from '../../components/Section';
import { sanityClient } from '../../lib/sanity';
import { GetStaticPropsContext } from 'next';
import { groq } from 'next-sanity';
import Head from 'next/head';

type Project = {
  title: string;
  content: any[]; // FIXME
};

type ProjectPostProps = {
  project: Project;
};

function Project({ project }: ProjectPostProps) {
  return (
    <>
      <Head>
        <title>{project.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Section>
        <Prose content={project.content} />
      </Section>
    </>
  );
}
export default Project;

export async function getStaticProps(context: GetStaticPropsContext) {
  const slug = context.params?.slug;

  const data = await sanityClient.fetch(
    groq`*[_type == "project" && slug.current == "${slug}"]{title, content}`
  );

  if (data.length === 0) {
    return {
      notFound: true,
    };
  }

  const [project] = data;

  return {
    props: {
      project,
    },
    revalidate: 60,
  };
}

type ProjectPath = {
  slug: { current: string };
};

export async function getStaticPaths() {
  const posts: ProjectPath[] = await sanityClient.fetch(groq`
    *[_type == 'project']{slug{current}}`);

  const paths = posts.map((post) => ({ params: { slug: post.slug.current } }));

  return {
    paths,
    fallback: 'blocking',
  };
}
