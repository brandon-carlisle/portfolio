'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { useSelectedLayoutSegments } from 'next/navigation';

const menu = [
  { title: 'About', pathname: '/about' },
  { title: 'Projects', pathname: '/projects' },
];

export default function Navbar() {
  const segments = useSelectedLayoutSegments();

  return (
    <nav className="mx-auto max-w-screen-md items-center justify-between gap-2 flex">
      <Link href="/" className="py-2 tracking-wide">
        Brandon Carlisle
      </Link>

      <ul className="flex gap-[2px] md:gap-2">
        {menu.map((item) => (
          <li key={item.pathname}>
            <Link
              className={clsx(
                'rounded-md py-2 px-2 md:px-4 font-normal transition-colors hover:bg-blue-900/40 text-sm md:text-base',
                item.pathname.slice(1) === segments[0] && 'bg-blue-900/30',
              )}
              href={item.pathname}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
