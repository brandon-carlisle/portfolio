// import { type Metadata } from 'next';
import Section from '@/components/Section';
import UnderlineLink from '@/components/UnderlineLink';

// This is currently ignored by Next lol
// export const metadata: Metadata = {
//   title: '404',
// };

export default function NotFound() {
  return (
    <Section>
      <p className="mb-3">Could not find that...</p>

      <UnderlineLink href="/">Go home</UnderlineLink>
    </Section>
  );
}
