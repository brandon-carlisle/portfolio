import Link from 'next/link';

function Navbar({}) {
  return (
    <nav className="mx-auto flex max-w-screen-md items-center justify-between border-b border-blue-400/50 p-1 text-lg">
      <div>
        <Link href="/">Brandon Carlisle</Link>
      </div>

      <ul className="flex gap-3">
        <li>
          <Link href="/profile">Profile</Link>
        </li>
        <li>
          <Link href="/work">Work</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
