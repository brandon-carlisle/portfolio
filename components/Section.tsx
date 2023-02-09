import { ReactNode } from 'react';

type SectionProps = {
  children: ReactNode;
  title?: string;
};

function Section({ children, title }: SectionProps) {
  return (
    <section className="mb-24">
      {title && (
        <h2 className="text-3xl sm:text-4xl leading-tight font-semibold mb-8">
          {title}
        </h2>
      )}
      {children}
    </section>
  );
}
export default Section;
