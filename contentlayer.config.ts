import { defineDocumentType, makeSource } from '@contentlayer/source-files';

export const Project = defineDocumentType(() => ({
  name: 'Project',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    featured: { type: 'boolean', required: true },
    tags: {
      type: 'list',
      of: {
        type: 'string',
        options: ['Next.js', 'TypeScript', 'React', 'Tailwind', 'Astro'],
      },
      required: true,
    },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => `/${doc._raw.flattenedPath}`,
    },
    slugAsParams: {
      type: 'string',
      resolve: (doc) => doc._raw.flattenedPath.split('/').slice(1).join('/'),
    },
  },
}));

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Project],
});
