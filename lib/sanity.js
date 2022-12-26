import { createClient } from 'next-sanity';
import createImageUrlBuilder from '@sanity/image-url';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION;
const useCdn = true;

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,
});

const imageBuilder = createImageUrlBuilder({ projectId, dataset });

export const urlForImage = (source) =>
  imageBuilder.image(source).url().toString();
