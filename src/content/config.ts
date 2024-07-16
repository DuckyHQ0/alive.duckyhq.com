import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    image: z.string(),
    author: z.string(),
    date: z.string(),
    tags: z.array(z.string()),
  }),
});

const docs = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    colour: z.string(),
    type: z.string(),
    category: z.string(),
    directory: z.boolean(),
  }),
});

export const collections = {
  blog: blog,
  docs: docs,
};
