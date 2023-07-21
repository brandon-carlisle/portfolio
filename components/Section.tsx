interface SectionProps {
  children: React.ReactNode;
  title?: string;
}

export default function Section({ children, title }: SectionProps) {
  return (
    <section className="mb-24">
      {title && (
        <h2 className="mb-8 text-3xl font-bold leading-tight text-neutral-300 sm:text-4xl">
          {title}
        </h2>
      )}
      {children}
    </section>
  );
}
