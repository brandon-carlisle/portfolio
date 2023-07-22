import { defineCollection, z } from "astro:content";

const projectsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.enum(["Salmon", "Tuna", "Trout"]).array(),
    order: z.number(),
    featured: z.boolean(),
  }),
});

export const collections = {
  projects: projectsCollection,
};
