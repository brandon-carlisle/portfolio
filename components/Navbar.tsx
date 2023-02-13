'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { useSelectedLayoutSegments } from 'next/navigation';

const menu = [
  { title: 'About', pathname: '/about' },
  { title: 'Projects', pathname: '/projects' },
  { title: 'Blog', pathname: '/blog' },
];

export default function Navbar() {
  const segments = useSelectedLayoutSegments();

  return (
    <nav className="mx-auto flex max-w-screen-md items-center justify-between text-lg">
      <Link href="/" className="py-2 tracking-wide">
        Brandon Carlisle
      </Link>

      <ul className="flex gap-2">
        {menu.map((item) => (
          <li key={item.pathname}>
            <Link
              className={clsx(
                'rounded-md py-2 px-4 font-normal transition-all hover:bg-blue-900/40',
                item.pathname.slice(1) === segments[0] && 'bg-blue-900/30'
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
