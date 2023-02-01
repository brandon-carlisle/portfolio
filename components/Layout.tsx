import Navbar from './navbar';
import { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-screen-md pt-16 md:pt-32">{children}</main>
    </>
  );
}

export default Layout;
