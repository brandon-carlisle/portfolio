import Navbar from './navbar';

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-prose pt-32">{children}</main>
    </>
  );
}

export default Layout;
