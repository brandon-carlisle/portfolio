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
    weight: 'font-semibold',
  },
  secondary: {
    backgroundColor: 'border-2 border-green-400',
    textColor: 'text-gray-100',
    weight: 'font-normal',
  },
  tertiary: {
    backgroundColor: 'border-2 border-gray-400',
    textColor: 'text-gray-100',
    weight: 'font-normal',
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
        styleColors[style].weight,
        styleColors[style].textColor,
        styleColors[style].backgroundColor
      )}
    >
      {text} {children}
    </Link>
  );
}
