import Link from 'next/link';

function Navbar({}) {
  return (
    <nav className="mx-auto flex max-w-screen-md items-center justify-between pt-2 text-lg">
      <div>
        <Link href="/" className="no-underline">
          Brandon Carlisle
        </Link>
      </div>

      <ul className="flex gap-3">
        <li>
          <Link href="/profile" className="no-underline">
            Profile
          </Link>
        </li>
        <li>
          <Link href="/work" className="no-underline">
            Work
          </Link>
        </li>
        <li>
          <Link href="/blog" className="no-underline">
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
