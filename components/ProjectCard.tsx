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
          <p className="mb-2 text-xl font-semibold">{project.title}</p>
          <p className="mb-2">{project.description}</p>
          <div className="flex flex-wrap gap-x-2">
            {project.isFeatured && (
              <InfoBadge text="Featured" style="primary" />
            )}
            {project.tech &&
              project.tech.map((tech) => (
                <InfoBadge
                  key={tech.title}
                  text={tech.title}
                  style="secondary"
                />
              ))}
          </div>
        </Container>
      </Link>
    </div>
  );
}
