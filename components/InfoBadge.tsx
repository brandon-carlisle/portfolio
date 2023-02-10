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
        'px-4 py-2 rounded-full border-2 border-green-500 text-gray-400 font-semibold text-sm flex align-center w-max mt-4',
        styleColors[style].borderColor
      )}
    >
      {text}
    </span>
  );
}
