import { ReactNode } from 'react';

type SectionProps = {
  children: ReactNode;
};

function Section({ children }: SectionProps) {
  return <section className="mb-8">{children}</section>;
}
export default Section;
