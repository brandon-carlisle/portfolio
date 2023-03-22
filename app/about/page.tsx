import { type Metadata } from 'next';
import {
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';

import Contact from '@components/Contact';
import Header from '@components/Header';
import Prose from '@components/Prose';
import Section from '@components/Section';

export const metadata: Metadata = {
  title: 'About',
  description: 'Read more about me.',
};

export default function About() {
  return (
    <>
      <Header title="About Me" />

      <Section>
        <Prose>
          <p>
            Hi, I&apos;m Brandon - a frontend web developer based in the UK with
            1+ years experience working on both frontend and backend development
            projects. I&apos;m passionate about creating modern and engaging web
            applications that provide great user experiences.
          </p>
          <p>
            I&apos;m actively seeking frontend web developer roles and open to
            freelance projects. If you&apos;re interested in collaborating or
            have any questions, please don&apos;t hesitate to get in touch!
          </p>
        </Prose>
      </Section>

      <Section title="Tech I love to use">
        <ul className="flex flex-col gap-2 text-lg">
          <li>
            <SiJavascript className="mr-2 inline-block" />
            JavaScript
          </li>
          <li>
            <SiTypescript className="mr-2 inline-block" />
            TypeScript
          </li>
          <li>
            <SiTailwindcss className="mr-2 inline-block" />
            Tailwind CSS
          </li>
          <li>
            <SiReact className="mr-2 inline-block" />
            React
          </li>
          <li>
            <SiNextdotjs className="mr-2 inline-block" />
            Next.js
          </li>
        </ul>
      </Section>

      <Contact />
    </>
  );
}
