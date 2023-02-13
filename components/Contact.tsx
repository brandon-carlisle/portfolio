import Container from './Container';
import Section from './Section';

function Contact() {
  return (
    <Section>
      <Container>
        <h2 className="mb-2 text-center text-2xl font-light underline">
          Contact
        </h2>
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
      </Container>
    </Section>
  );
}

export default Contact;
