import { type Metadata } from "next";
import {
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "About",
  description: "Read more about me.",
};

export default function AboutPage() {
  return (
    <>
      <Header title="About me"></Header>

      <Section>
        <div className="flex flex-col gap-10 text-neutral-400">
          <p>
            Hi, I&apos;m Brandon - a web developer based in the UK with over 1
            years experience working on both frontend and backend development
            projects. I&apos;m passionate about creating modern and engaging web
            applications that provide great user experiences.
          </p>
          <p>
            I&apos;m actively seeking web developer roles and open to freelance
            projects. If you&apos;re interested in collaborating or have any
            questions, please don&apos;t hesitate to get in touch!
          </p>

          <div>
            <h3 className="mb-6 mt-4 text-xl text-neutral-200">
              I love working with these technologies:
            </h3>
            <ul className="flex flex-col gap-4 md:flex-row md:gap-6">
              <li>
                <SiJavascript className="mr-2 inline-block text-yellow-400 dark:text-yellow-300" />
                JavaScript
              </li>
              <li>
                <SiTypescript className="mr-2 inline-block text-blue-400 dark:text-blue-300" />
                TypeScript
              </li>
              <li>
                <SiTailwindcss className="mr-2 inline-block text-sky-400 dark:text-sky-300" />
                Tailwind CSS
              </li>
              <li>
                <SiReact className="mr-2 inline-block text-sky-500 dark:text-sky-400" />
                React
              </li>
              <li>
                <SiNextdotjs className="mr-2 inline-block dark:text-white" />
                Next.js
              </li>
            </ul>
          </div>
        </div>
      </Section>

      <Contact />
    </>
  );
}
