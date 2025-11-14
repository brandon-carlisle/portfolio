import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const schema = z.object({
  title: z.string().min(1),
  published: z.boolean(),
  description: z.string().min(1),
  tags: z
    .enum(["Next", "Typescript", "React", "Tailwind", "Javascript"])
    .array(),
  order: z.number(),
  featured: z.boolean(),
  slug: z.string().min(1),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: schema,
});

export const collections = {
  projects,
};
