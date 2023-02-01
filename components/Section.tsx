import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
}

function Section({ children }: SectionProps) {
  return <section>{children}</section>;
}
export default Section;
