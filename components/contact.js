function Contact({}) {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="mb-2">Feel free to reach out to me</h2>
      <div className="flex gap-1">
        <a href="mailto:brandoncarlisledev@gmail.com">Email</a>
      </div>

      <div className="flex gap-1">
        <a href="https://github.com/beanziii" target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>
    </div>
  );
}

export default Contact;
