import type { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  title?: string;
}

export default function Section({ children, title }: SectionProps) {
  return (
    <section className="mb-24">
      {title && (
        <h2 className="mb-8 text-3xl font-semibold leading-tight sm:text-4xl">
          {title}
        </h2>
      )}
      {children}
    </section>
  );
}
