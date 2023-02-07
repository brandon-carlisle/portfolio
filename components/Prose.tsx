import type { ProjectData } from '../app/projects/page';
import PortableTextComponents from './PortableTextComponents';
import { PortableText } from '@portabletext/react';

function Prose({ content }: ProjectData) {
  return (
    <div className="prose prose-invert max-w-none md:prose-lg lg:prose-xl prose-img:aspect-auto prose-img:h-auto prose-img:w-auto prose-img:mx-auto prose-img:rounded-md">
      <PortableText value={content} components={PortableTextComponents} />
    </div>
  );
}
export default Prose;
