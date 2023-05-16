import clsx from 'clsx';
import Link from 'next/link';

export default function ProjectCard({ project }) {
  return (
    <Link
      key={project.slug?.current}
      href={`/projects/${project.slug?.current}`}
      className="group relative flex flex-col justify-between overflow-hidden rounded-md border-2 border-blue-800/50 p-8 transition-all duration-500 hover:border-blue-900"
    >
      <div className="transition-all ease-in-out group-hover:scale-[1.02]">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase text-zinc-400">
            Project title
          </p>
          <p className="mb-2">Description</p>
        </div>
        <div className="flex flex-wrap gap-x-2">
          <InfoBadge text="Featured" style="primary" />
        </div>
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
