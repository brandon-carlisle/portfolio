import clsx from 'clsx';
import Link from 'next/link';

type LinkButtonProps = {
  path: string;
  text: string;
  style: 'primary' | 'secondary' | 'tertiary';
  children?: React.ReactNode;
};

const styleColors = {
  primary: {
    backgroundColor: 'bg-blue-300',
    textColor: 'text-blue-900',
  },
  secondary: {
    backgroundColor: 'bg-green-300/90',
    textColor: 'text-green-900',
  },
  tertiary: {
    backgroundColor: 'bg-gray-300',
    textColor: 'text-gray-900',
  },
};

export default function LinkButton({
  path,
  text,
  children,
  style,
}: LinkButtonProps) {
  return (
    <Link
      href={`/${path}`}
      className={clsx(
        'font-semibold py-2 px-4 rounded-md group',
        styleColors[style].textColor,
        styleColors[style].backgroundColor
      )}
    >
      {text} {children}
    </Link>
  );
}
