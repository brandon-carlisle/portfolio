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
    <nav className="mx-auto flex max-w-screen-md items-center justify-between px-4">
      <Link href="/" className="py-2">
        Brandon Carlisle
      </Link>

      <ul className="flex gap-[2px] md:gap-1">
        {menu.map((item) => (
          <li key={item.pathname}>
            <Link
              className={clsx(
                'rounded-md px-2 underline-offset-2 hover:underline',
                item.pathname.slice(1) === segments[0] && 'underline',
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
