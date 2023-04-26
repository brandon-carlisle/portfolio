import clsx from 'clsx';
import type { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  type: 'button' | 'submit' | 'reset';
  styles?: string[];
}

export default function Button(props: ButtonProps) {
  return (
    <button
      type={props.type}
      className={clsx([props.styles, 'underline underline-offset-2'])}
    >
      {props.children}
    </button>
  );
}
