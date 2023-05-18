import { useMDXComponent } from 'next-contentlayer/hooks';

import Prose from './Prose';

interface MdxProps {
  code: string;
}

export default function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return (
    <Prose>
      <Component />
    </Prose>
  );
}
