import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const schema = z.object({
  published: z.boolean(),
  title: z.string().min(1),
  slug: z.string().min(1),
  description: z.string().min(1),
  tags: z
    .enum(["Next", "Typescript", "React", "Tailwind", "Javascript"])
    .array(),
  order: z.number(),
  featured: z.boolean(),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: schema,
});

export const collections = {
  projects,
};
