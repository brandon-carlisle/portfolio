'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { useSelectedLayoutSegments } from 'next/navigation';

const menu = [
  { title: 'About', pathname: '/about' },
  { title: 'Projects', pathname: '/projects' },
  { title: 'Blog', pathname: '/blog' },
];

function Navbar() {
  const segments = useSelectedLayoutSegments();

  return (
    <nav className="mx-auto flex max-w-screen-md items-center justify-between text-lg">
      <Link href="/" className="tracking-wide py-2">
        Brandon Carlisle
      </Link>

      <ul className="flex gap-2">
        {menu.map((item) => (
          <li key={item.pathname}>
            <Link
              className={clsx(
                'font-normal hover:bg-blue-900/40 transition-all py-2 px-4 rounded-md',
                item.title.toLowerCase() === segments[0] && 'bg-blue-900/30'
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

export default Navbar;
