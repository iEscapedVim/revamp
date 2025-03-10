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
      modDate: z.date().optional(),
      description: z.string(),
      image: image(),
	    imagealt: z.string(),
      tags: z.array(z.string()),
	    category: z.enum(["Design", "Development", "Marketing", "Technology", "PHP", "WordPress", "Internet", "AstroJS", "Shopify", "Linux", "Other"]).optional(),
      published: z.boolean(),
      // Shcema Options
      supply: z.string().optional(), 
      tools: z.string().optional(),
    })
});

const testimonials = defineCollection({
	type: "content",
    schema: ({image}) => 
	z.object({
        cname: z.string(),
		message: z.string(),
		headshot: image().optional(),
    }),
});

export const collections = {blog, projects, testimonials};