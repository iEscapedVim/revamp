import { deselectScripts } from 'astro/virtual-modules/transitions-swap-functions.js';
import { defineCollection, reference, z } from 'astro:content';

const projects = defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
      title: z.string(),
      pubDate: z.date(),
      description: z.string(),
      image: image(),
	  imagealt: z.string(),
	  category: z.string().optional(),
    })
});

const blog = defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
      title: z.string(),
      pubDate: z.date(),
      description: z.string(),
      image: image(),
	  imagealt: z.string(),
      tags: z.array(z.string()),
	  category: z.string().optional(),
    })
});

const policies = defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
      title: z.string(),
      pubDate: z.date(),
	  lastUpdated: z.date(),
      image: image(),
	  imagealt: z.string(),
    })
});

const clients = defineCollection ({
	type: "content",
	schema: ({image}) => z.object ({
		headshot: image().optional(),
		clientname: z.string(),
		country: z.string().optional(),
	}),
});

const testimonials = defineCollection({
	type: "content",
    schema: ({image}) => 
	z.object({
		clientref: z.string(reference("clients")).optional(),
		message: z.string(),
		project: z.string().optional(),
		rating: z.string().optional(),
    }),
});

export const collections = {blog, policies, projects, testimonials, clients};