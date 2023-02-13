import clsx from 'clsx';
import { ReactNode } from 'react';

type ContainerProps = {
  children: ReactNode;
  styles?: string[];
};

export default function Container({ children, styles }: ContainerProps) {
  return (
    <div
      className={clsx(
        'rounded-md bg-slate-900/50 p-8 md:h-full md:w-full',
        styles
      )}
    >
      {children}
    </div>
  );
}
