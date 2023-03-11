import Contact from '../../components/Contact';
import Header from '../../components/Header';
import Section from '../../components/Section';
import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiReact,
} from 'react-icons/si';
import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'Read more about me.',
};

export default function About() {
  return (
    <>
      <Header title="About Me" />

      <Section>
        <p className="mb-8 text-xl">
          I&apos;m Brandon, a web developer (mainly frontend but currently
          learning backend). I&apos;m passionate about making cool and
          interesting web apps using modern technologies. I am based in the UK.
        </p>
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
