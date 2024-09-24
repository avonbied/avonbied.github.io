import { defineCollection, z } from 'astro:content';

export const collections = {
	story: defineCollection({
		schema: z.object({
			title: z.string(),
			description: z.string(),
			timestamp: z.coerce.date(),
			tags: z.array(z.string()),
			img: z.string(),
			img_alt: z.string().optional(),
		}),
	}),
};