import PortableTextComponents from './PortableTextComponents';
import { PortableText } from '@portabletext/react';

interface ProseProps {
  content?: any;
  children?: React.ReactNode;
}

export default function Prose({ content, children }: ProseProps) {
  return (
    <div className="prose prose-invert max-w-none prose-p:text-gray-100 prose-img:mx-auto prose-img:aspect-auto prose-img:h-auto prose-img:w-auto prose-img:rounded-md md:prose-lg lg:prose-xl">
      {content && (
        <PortableText value={content} components={PortableTextComponents} />
      )}
      {children && children}
    </div>
  );
}
