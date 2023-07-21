// import { useTheme } from 'next-themes';
import Link from 'next/link';

// import { useEffect, useState } from 'react';
// import { TbMoonStars, TbSunLow } from 'react-icons/tb';

const menuItems = [
  { title: 'Home', pathname: '/' },
  { title: 'About', pathname: '/about' },
  { title: 'Projects', pathname: '/projects' },
];

export default function Navbar() {
  return (
    <nav className="sticky top-8 mx-auto mt-8 max-w-screen-sm rounded-xl border border-neutral-800 bg-neutral-900 py-3 shadow">
      <ul className="flex w-full justify-evenly gap-[2px] text-sm text-neutral-400">
        {menuItems.map((item) => (
          <li key={item.pathname}>
            <Link
              className="transition-all hover:text-neutral-300"
              href={item.pathname}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
      {/* 
        <div className="group h-8 w-8 rounded-md bg-zinc-200 dark:bg-zinc-800">
          <ThemeSwitcher />
        </div> */}
    </nav>
  );
}

/*
function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-full w-full p-2">
        <div
          style={{ borderTopColor: 'transparent' }}
          className="h-full w-full animate-spin rounded-full border-2 border-blue-800 dark:border-blue-300"
        ></div>
      </div>
    );
  }

  const handleThemeSwitch = () => {
    if (theme === 'light') {
      setTheme('dark');
    }

    if (theme === 'dark') {
      setTheme('light');
    }
  };

  return (
    <button
      className="flex h-full w-full items-center justify-center p-1"
      onClick={handleThemeSwitch}
    >
      {theme === 'dark' && (
        <TbSunLow className="h-full w-full text-zinc-800 transition-all group-hover:scale-105 group-active:scale-100 dark:text-zinc-100" />
      )}

      {theme === 'light' && (
        <TbMoonStars className="h-[90%] w-[90%] text-zinc-800 transition-all group-hover:scale-105 group-active:scale-100 dark:text-zinc-100" />
      )}
    </button>
  );
}
*/
