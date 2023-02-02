import { sanityClient } from './sanity';
import imageUrlBuilder from '@sanity/image-url';
import { format, parseISO } from 'date-fns';

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source) {
  return builder.image(source);
}

export function parseDate(date: string) {
  return format(parseISO(date), 'LLL d, yyyy');
}
