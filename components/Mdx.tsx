import { useMDXComponent } from 'next-contentlayer/hooks';
import Image from 'next/image';

import Prose from './Prose';

interface MdxImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

function MdxImage({ src, alt, width, height }: MdxImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      priority
      placeholder="blur"
      width={width}
      height={height}
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
