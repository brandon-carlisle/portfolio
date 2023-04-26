import { PortableText } from '@portabletext/react';
import type { PortableTextBlock } from '@portabletext/types';

import PortableTextComponents from './PortableTextComponents';

interface ProseProps {
  content?: PortableTextBlock;
  children?: React.ReactNode;
}

export default function Prose({ content, children }: ProseProps) {
  return (
    <div className="prose prose-invert max-w-none transition-all md:prose-lg lg:prose-xl prose-p:text-gray-100 prose-a:underline-offset-2 prose-img:mx-auto prose-img:aspect-auto prose-img:h-auto prose-img:w-auto prose-img:rounded-md">
      {content && (
        <PortableText value={content} components={PortableTextComponents} />
      )}
      {children && children}
    </div>
  );
}
