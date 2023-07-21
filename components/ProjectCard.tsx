import clsx from 'clsx';
import { type Project } from 'contentlayer/generated';
import Link from 'next/link';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <>
      <Link
        key={project._id}
        href={`/projects/${project.slug}`}
        className="flex flex-col justify-between rounded-xl border border-neutral-800 bg-neutral-900/90 p-8 shadow transition-all duration-300 hover:border-neutral-600 hover:shadow-lg"
      >
        <div>
          <p className="mb-4 text-sm font-semibold uppercase text-neutral-500">
            {project.title}
          </p>
          <p className="mb-4">{project.description}</p>
        </div>

        <div className="flex flex-wrap gap-x-2">
          {project.featured && <InfoBadge text="Featured" style="primary" />}
          {project.tags.map((tag) => (
            <InfoBadge key={tag} text={tag} style="secondary" />
          ))}
        </div>
      </Link>
    </>
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
        'align-center my-1 flex w-max rounded-full border-2 px-4 py-2 text-xs font-semibold text-gray-600 dark:text-gray-400',
        styleColors[style].borderColor,
      )}
    >
      {text}
    </span>
  );
}
