import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

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
			pinned: z.coerce.boolean().optional(),
			pinnedMainTerm: z.string().optional(),
			pinnedSecondaryTerm: z.string().optional(),
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
			pinned: z.coerce.boolean().optional(),
			pinnedMainTerm: z.string().optional(),
			pinnedSecondaryTerm: z.string().optional(),
			categories: z.array(z.string()),
			// Transform string to Date object
			date: z.coerce.date(),
			coverImage: image().optional(),
		}),
});

const gallery = defineCollection({
	// Load Markdown and MDX files in the `src/content/news/` directory.
	loader: glob({ base: './gallery', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			credit: z.string().optional(),
			isCarousel: z.coerce.boolean().optional(),
			// Transform string to Date object
			date: z.coerce.date(),
			image: image()
		}),
});

export const collections = { 
	news, 
	berita, 
	pengumuman, 
	gallery,
	docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
};