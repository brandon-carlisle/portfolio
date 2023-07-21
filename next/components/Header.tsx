import type { ReactNode } from 'react';

interface HeaderProps {
  title: ReactNode | string;
  children?: ReactNode;
}

export default function Header({ title, children }: HeaderProps) {
  return (
    <header className="mb-16 flex flex-col dark:border-neutral-800">
      <h1 className="text-3xl font-bold text-neutral-200 sm:text-4xl md:text-5xl">
        {title}
      </h1>
      <div>{children}</div>
    </header>
  );
}
