import Navbar from './navbar';

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-screen-md pt-16 md:pt-32">{children}</main>
    </>
  );
}

export default Layout;
