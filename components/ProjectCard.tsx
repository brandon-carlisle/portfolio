import Link from 'next/link';

import type { ProjectData } from '../app/projects/page';
import InfoBadge from './InfoBadge';

interface ProjectCardProps {
  project: ProjectData;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      key={project.slug?.current}
      href={`/projects/${project.slug?.current}`}
      className="flex flex-col justify-between rounded-md border-4 border-zinc-600 p-8"
    >
      <div>
        <p className="mb-4 text-sm font-semibold uppercase text-zinc-400">
          {project.title}
        </p>
        <p className="mb-2">{project.description}</p>
      </div>
      <div className="flex flex-wrap gap-x-2">
        {project.isFeatured && <InfoBadge text="Featured" style="primary" />}
        {project.tech &&
          project.tech.map((tech) => (
            <InfoBadge key={tech.title} text={tech.title} style="secondary" />
          ))}
      </div>
    </Link>
  );
}
