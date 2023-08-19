import { defineCollection, z } from "astro:content";

const projectsCollection = defineCollection({
  type: "content",
  schema: z.object({
    published: z.boolean(),
    title: z.string(),
    description: z.string(),
    tags: z
      .enum(["Next", "Typescript", "React", "Tailwind", "Javascript"])
      .array(),
    order: z.number(),
    featured: z.boolean(),
  }),
});

export const collections = {
  projects: projectsCollection,
};
