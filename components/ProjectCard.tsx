import type { ProjectData } from '../app/projects/page';
import Container from './Container';
import Link from 'next/link';

type ProjectCardProps = {
  project: ProjectData;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div>
      <Link
        key={project.slug?.current}
        href={`/projects/${project.slug?.current}`}
      >
        <Container styles={['hover:bg-blue-900/30 transition-all']}>
          <p className="text-xl font-semibold mb-2">{project.title}</p>
          <p>{project.description}</p>
          {project.isFeatured && (
            <span className="px-4 py-2 rounded-full border-2 border-green-500 text-gray-400 font-semibold text-sm flex align-center w-max mt-4">
              Featured
            </span>
          )}
        </Container>
      </Link>
    </div>
  );
}
