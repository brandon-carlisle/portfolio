interface ProseProps {
  children: React.ReactNode;
}

export default function Prose({ children }: ProseProps) {
  return (
    <div className="prose max-w-none transition-all dark:prose-invert md:prose-lg lg:prose-xl prose-a:underline-offset-2 prose-img:mx-auto prose-img:aspect-auto prose-img:h-auto prose-img:w-auto prose-img:rounded-md dark:prose-p:text-gray-100">
      {children}
    </div>
  );
}
