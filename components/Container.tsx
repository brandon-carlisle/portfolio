import { ReactNode } from 'react';

type ContainerProps = {
  children: ReactNode;
}

function Container({ children }: ContainerProps) {
  return <div className="mb-8 rounded-md bg-slate-900/50 p-8">{children}</div>;
}

export default Container;
