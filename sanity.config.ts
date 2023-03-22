import { visionTool } from '@sanity/vision';
import { deskTool } from 'sanity/desk';
import { defineConfig } from 'sanity/lib/exports';

import { schemaTypes } from './sanity';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? '';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? '';

export default defineConfig({
  title: 'Brandon Carlisle',
  basePath: '/studio',

  projectId,
  dataset,

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
});
