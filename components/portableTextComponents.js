import Image from 'next/image';
import { urlForImage } from '../lib/sanity';
import { getImageDimensions } from '@sanity/asset-utils';

export const portableTextComponents = {
  types: {
    block: {
      h1: ({ children }) => <h1>{children}</h1>,
      h2: ({ children }) => <h2>{children}</h2>,
      h3: ({ children }) => <h3>{children}</h3>,
      h4: ({ children }) => <h4>{children}</h4>,
      h5: ({ children }) => <h5>{children}</h5>,
    },
  },
};
