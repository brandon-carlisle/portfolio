import Section from './Section';

function Contact() {
  return (
    <Section>
      <div>
        <h2 className="mb-2">Feel free to reach out to me via</h2>
        <div className="flex flex-col">
          <a href="mailto:brandon@carlisle.dev">Email</a>
          <a
            href="https://github.com/beanziii"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </Section>
  );
}

export default Contact;
