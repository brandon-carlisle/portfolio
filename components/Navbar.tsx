'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { useSelectedLayoutSegments } from 'next/navigation';
import { TbMenu2 } from 'react-icons/tb';
import { useState } from 'react';
import { RemoveScroll } from 'react-remove-scroll';

const menu = [
  { title: 'About', pathname: '/about' },
  { title: 'Projects', pathname: '/projects' },
  { title: 'Blog', pathname: '/blog' },
];

export default function Navbar() {
  const segments = useSelectedLayoutSegments();

  return (
    <>
      <DesktopMenu segments={segments} />
      <MobileMenu segments={segments} />
    </>
  );
}

function DesktopMenu({ segments }: { segments: string[] }) {
  return (
    <nav className="mx-auto hidden max-w-screen-md items-center justify-between gap-2 text-lg md:flex">
      <Link href="/" className="py-2 tracking-wide">
        Brandon Carlisle
      </Link>

      <ul className="flex">
        {menu.map((item) => (
          <li key={item.pathname}>
            <Link
              className={clsx(
                'rounded-md py-2 px-4 font-normal transition-colors hover:bg-blue-900/40',
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

function MobileMenu({ segments }: { segments: string[] }) {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuIsOpen((prev) => !prev);
  };

  return (
    <>
      <button
        type="button"
        onClick={handleMenuClick}
        className="absolute top-4 right-0 z-50 -translate-x-1/2 transition-all active:translate-y-1 md:hidden"
      >
        <TbMenu2 className="text-2xl" />
      </button>

      {!menuIsOpen && (
        <nav
          className={
            'mx-auto flex max-w-screen-md items-center justify-between text-lg md:hidden'
          }
        >
          <Link href="/" className="tracking-wide">
            Brandon Carlisle
          </Link>
        </nav>
      )}

      {menuIsOpen && (
        <RemoveScroll>
          <nav className="absolute inset-0 min-h-screen min-w-full bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-slate-900 via-blue-900 to-black p-4 md:hidden">
            <div className="place-it relative grid min-h-screen min-w-full">
              <ul className="flex flex-col items-center justify-center gap-8">
                {menu.map((item) => (
                  <li
                    key={item.pathname}
                    className="list-none"
                    onClick={handleMenuClick}
                  >
                    <Link
                      className={clsx(
                        'rounded-md py-2 px-4 text-2xl font-normal transition-all hover:bg-blue-900/40',
                        item.pathname.slice(1) === segments[0] &&
                          'bg-blue-900/30'
                      )}
                      href={item.pathname}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </RemoveScroll>
      )}
    </>
  );
}
