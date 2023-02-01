import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
}

function Section({ children }: SectionProps) {
  return <section className="mb-8">{children}</section>;
}
export default Section;
