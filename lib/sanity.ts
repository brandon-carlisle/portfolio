import { createClient } from 'next-sanity';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION;
const useCdn = false; // SWITCH TO TRUE ON PROD

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,
});
