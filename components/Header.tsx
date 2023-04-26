import type { ReactNode } from 'react';

interface HeaderProps {
  title?: ReactNode | string;
  children?: ReactNode;
}

export default function Header({ title, children }: HeaderProps) {
  return (
    <header className="mb-16 flex flex-col gap-8 border-b-2 pb-8">
      <h1 className="text-3xl font-semibold sm:text-4xl md:text-5xl">
        {title}
      </h1>

      {children}
    </header>
  );
}
