export default function Contact() {
  return (
    <section className="pb-12">
      <h2 className="mb-8 text-3xl font-bold leading-tight text-neutral-300 sm:text-4xl">
        Contact me
      </h2>
      <div className="flex flex-col gap-2">
        <p className="text-lg font-light">
          You can email me at{' '}
          <a
            className="font-semibold text-neutral-200 underline"
            href="mailto:brandon@carlisle.dev"
          >
            brandon@carlisle.dev
          </a>{' '}
          or you can view my{' '}
          <a
            className="font-semibold text-neutral-200 underline"
            href="https://github.com/brandon-carlisle"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>{' '}
          to reach out there.
        </p>
      </div>
    </section>
  );
}
