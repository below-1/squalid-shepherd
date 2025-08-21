import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const news = defineCollection({
	// Load Markdown and MDX files in the `src/content/news/` directory.
	loader: glob({ base: './src/content/news', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: image().optional(),
		}),
});

const berita = defineCollection({
	// Load Markdown and MDX files in the `src/content/news/` directory.
	loader: glob({ base: './berita', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			categories: z.array(z.string()),
			// Transform string to Date object
			date: z.coerce.date(),
			coverImage: image().optional(),
		}),
});

const pengumuman = defineCollection({
	// Load Markdown and MDX files in the `src/content/news/` directory.
	loader: glob({ base: './pengumuman', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			categories: z.array(z.string()),
			// Transform string to Date object
			date: z.coerce.date(),
			coverImage: image().optional(),
		}),
});

export const collections = { news, berita, pengumuman };