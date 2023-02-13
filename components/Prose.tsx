import type { ProjectData } from '../app/projects/page';
import PortableTextComponents from './PortableTextComponents';
import { PortableText } from '@portabletext/react';

export default function Prose({ content }: ProjectData) {
  return (
    <div className="prose prose-invert max-w-none prose-img:mx-auto prose-img:aspect-auto prose-img:h-auto prose-img:w-auto prose-img:rounded-md md:prose-lg lg:prose-xl">
      <PortableText value={content} components={PortableTextComponents} />
    </div>
  );
}
