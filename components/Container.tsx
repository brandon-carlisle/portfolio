import clsx from 'clsx';
import { ReactNode } from 'react';

type ContainerProps = {
  children: ReactNode;
  styles?: string[];
};

function Container({ children, styles }: ContainerProps) {
  return (
    <div
      className={clsx(
        'rounded-md bg-slate-900/50 p-8 md:w-full md:h-full',
        styles
      )}
    >
      {children}
    </div>
  );
}

export default Container;
