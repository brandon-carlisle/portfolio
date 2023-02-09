import Link from 'next/link';

type LinkButtonProps = {
  path: string;
  text: string;
  children?: React.ReactNode;
};

export default function LinkButton({ path, text, children }: LinkButtonProps) {
  return (
    <Link
      href={`/${path}`}
      className="bg-blue-300 text-blue-900 font-semibold py-2 px-4 rounded-md group"
    >
      {text} {children}
    </Link>
  );
}
