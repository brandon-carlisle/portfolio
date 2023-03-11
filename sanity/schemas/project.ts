import { defineType, defineField } from 'sanity';
import { format, parseISO } from 'date-fns';

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
        isUnique: (value, context) => context.defaultIsUnique(value, context),
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'repo',
      title: 'Github Repo URL',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'site',
      title: 'Live site URL',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'tech',
      title: 'Tech used',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: { type: 'tech' },
        },
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
        },
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'isFeatured',
      title: 'Featured',
      type: 'boolean',
      initialValue: false,
      validation: (rule) => rule.required(),
      description:
        'If featured set to true, will be displayed on "Featured Section" of homepage',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      date: 'date',
    },
  },
});
