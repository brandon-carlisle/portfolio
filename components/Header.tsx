import type { ReactNode } from 'react';

interface HeaderProps {
  title: ReactNode | string;
  children?: ReactNode;
}

export default function Header({ title, children }: HeaderProps) {
  return (
    <header className="mb-16 flex flex-col gap-8 border-b-2 border-zinc-400 pb-8 dark:border-zinc-200">
      <h1 className="text-3xl font-bold sm:text-3xl md:text-4xl">{title}</h1>

      {children}
    </header>
  );
}
