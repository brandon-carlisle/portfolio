import { type Metadata } from 'next';
import {
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';

import Contact from '@/components/Contact';
import Header from '@/components/Header';
import Prose from '@/components/Prose';
import Section from '@/components/Section';

export const metadata: Metadata = {
  title: 'About',
  description: 'Read more about me.',
};

export default function AboutPage() {
  return (
    <>
      <Header title="About me"></Header>

      <Section>
        <Prose>
          <div className="text-center text-4xl">📝</div>
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

          <p>
            You can also view my CV{' '}
            <a
              target="_blank"
              href="https://docs.google.com/document/d/e/2PACX-1vQE_ijBMvo6JKk7n7Hhk0bR9JwmB6xHMxV56dycpD9gRMR_bPu9nWXc8dQ2y0XkU_L5TuVpIUDKf5vA/pub"
            >
              here.
            </a>
          </p>
        </Prose>
      </Section>

      <Section title="Tech that I use">
        <ul className="flex flex-col gap-2 text-lg">
          <li>
            <SiJavascript className="mr-2 inline-block text-yellow-300" />
            JavaScript
          </li>
          <li>
            <SiTypescript className="mr-2 inline-block text-blue-300" />
            TypeScript
          </li>
          <li>
            <SiTailwindcss className="mr-2 inline-block text-sky-300" />
            Tailwind CSS
          </li>
          <li>
            <SiReact className="mr-2 inline-block text-sky-400" />
            React
          </li>
          <li>
            <SiNextdotjs className="mr-2 inline-block text-white" />
            Next.js
          </li>
        </ul>
      </Section>

      <Contact />
    </>
  );
}
