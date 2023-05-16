interface ProseProps {
  children?: React.ReactNode;
}

export default function Prose({ children }: ProseProps) {
  return (
    <div className="prose prose-invert max-w-none transition-all md:prose-lg lg:prose-xl prose-p:text-gray-100 prose-a:underline-offset-2 prose-img:mx-auto prose-img:aspect-auto prose-img:h-auto prose-img:w-auto prose-img:rounded-md">
      {children}
    </div>
  );
}
