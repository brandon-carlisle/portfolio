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

const components = {
  Image: MdxImage,
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
