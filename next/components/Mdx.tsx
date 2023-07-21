import { useMDXComponent } from 'next-contentlayer/hooks';
import Image, { type ImageProps } from 'next/image';

import Prose from './Prose';

function MdxImage(props: ImageProps) {
  return (
    <Image
      src={props.src}
      alt={props.alt}
      width={props.width}
      height={props.height}
      priority={props.priority}
    />
  );
}

interface LinksProps {
  github: string;
  site: string;
}

function Links({ github, site }: LinksProps) {
  return (
    <div className="mb-12 flex items-center justify-between gap-2 dark:text-gray-200/50">
      <a
        href={site}
        target="_blank"
        rel="noreferrer"
        className="underline underline-offset-2 dark:text-gray-200"
      >
        Live Site
      </a>
      <div className="h-[1px] w-1/4 bg-zinc-800/20 dark:bg-zinc-500/20 md:w-1/2"></div>
      <a
        href={github}
        target="_blank"
        rel="noreferrer"
        className="underline underline-offset-2 dark:text-gray-200"
      >
        Source Code
      </a>
    </div>
  );
}

const components = {
  Image: MdxImage,
  Links: Links,
};

interface MdxProps {
  code: string;
}

export default function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return (
    <Prose>
      <Component components={{ ...components }} />
    </Prose>
  );
}
