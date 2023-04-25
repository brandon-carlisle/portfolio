import clsx from 'clsx';
import Link from 'next/link';

import type { ProjectData } from '../app/projects/page';

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

interface InfoBadgeProps {
  text: string;
  style: 'primary' | 'secondary';
}

const styleColors = {
  primary: {
    borderColor: 'border-green-500',
  },
  secondary: {
    borderColor: 'border-zinc-600',
  },
};

export function InfoBadge({ text, style }: InfoBadgeProps) {
  return (
    <span
      className={clsx(
        'align-center my-1 flex w-max rounded-full border-2 px-4 py-2 text-sm font-semibold text-gray-400',
        styleColors[style].borderColor,
      )}
    >
      {text}
    </span>
  );
}
