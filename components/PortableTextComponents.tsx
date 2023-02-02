import { urlFor } from '../lib/helpers';
import { getImageDimensions } from '@sanity/asset-utils';
import Image from 'next/image';

const PortableTextComponents = {
  types: {
    image: ({ value }) => {
      const dimensions = getImageDimensions(value);

      return (
        <Image
          src={urlFor(value).maxWidth(768).maxHeight(432).url()}
          alt="blog image"
          width={dimensions.width}
          height={dimensions.height}
        />
      );
    },
  },
};

export default PortableTextComponents;
