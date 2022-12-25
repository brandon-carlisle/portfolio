import Navbar from './navbar';

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-screen-md">{children}</main>
    </>
  );
}

export default Layout;
