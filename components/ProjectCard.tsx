import type { ProjectData } from '../app/projects/page';
import Container from './Container';
import InfoBadge from './InfoBadge';
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
          {project.isFeatured && <InfoBadge text="Featured" style="primary" />}
        </Container>
      </Link>
    </div>
  );
}
