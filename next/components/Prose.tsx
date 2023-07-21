interface ProseProps {
  children: React.ReactNode;
}

export default function Prose({ children }: ProseProps) {
  return (
    <div className="prose prose-neutral dark:prose-invert md:prose-xl prose-h1:text-4xl prose-img:mx-auto prose-img:aspect-auto prose-img:h-auto prose-img:w-auto prose-img:rounded-md prose-h1:sm:text-4xl prose-h1:md:text-5xl">
      {children}
    </div>
  );
}
