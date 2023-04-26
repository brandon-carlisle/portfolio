import Section from './Section';

export default function Contact() {
  return (
    <Section>
      <p className="mb-4 text-xl font-semibold leading-tight sm:text-4xl">
        Get in touch
      </p>
      <div className="flex flex-col gap-2">
        <p className="text-lg font-light">
          You can email me at{' '}
          <a
            className="font-semibold underline"
            href="mailto:brandon@carlisle.dev"
          >
            brandon@carlisle.dev
          </a>{' '}
          or you can view my{' '}
          <a
            className="font-semibold underline"
            href="https://github.com/brandon-carlisle"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>{' '}
          to reach out there.
        </p>
      </div>
    </Section>
  );
}
