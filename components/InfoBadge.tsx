import clsx from 'clsx';

type InfoBadgeProps = {
  text: string;
  style: 'primary' | 'secondary';
};

const styleColors = {
  primary: {
    borderColor: 'border-green-500',
  },
  secondary: {
    borderColor: 'border-gray-800',
  },
};

export default function InfoBadge({ text, style }: InfoBadgeProps) {
  return (
    <span
      className={clsx(
        'align-center my-1 flex w-max rounded-full border-2 border-green-500 px-4 py-2 text-sm font-semibold text-gray-400',
        styleColors[style].borderColor
      )}
    >
      {text}
    </span>
  );
}
