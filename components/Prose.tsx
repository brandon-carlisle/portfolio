import PortableTextComponents from './PortableTextComponents';
import { PortableText } from '@portabletext/react';

interface ProseProps {
  content: any[]; // FIXME
}

function Prose({ content }: ProseProps) {
  return (
    <div className="prose prose-invert max-w-none md:prose-lg lg:prose-xl prose-img:aspect-auto prose-img:h-auto prose-img:w-auto prose-img:mx-auto">
      <PortableText value={content} components={PortableTextComponents} />
    </div>
  );
}
export default Prose;
