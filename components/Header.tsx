import { ReactNode } from 'react';

type HeaderProps = {
  title: string;
  children?: ReactNode;
};

function Header({ title, children }: HeaderProps) {
  return (
    <header className="mb-16 flex flex-col gap-8 border-b-2 border-blue-800/30 pb-8">
      <h1 className="text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
        {title}
      </h1>

      {children}
    </header>
  );
}
export default Header;
