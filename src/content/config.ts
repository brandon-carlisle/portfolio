import { defineCollection, z } from "astro:content";

const projectsCollection = defineCollection({
  type: "content",
  schema: z.object({
    published: z.boolean(),
    title: z.string(),
    description: z.string(),
    tags: z
      .enum(["Next.js", "TypeScript", "React", "Tailwind", "Astro"])
      .array(),
    order: z.number(),
    featured: z.boolean(),
  }),
});

export const collections = {
  projects: projectsCollection,
};
