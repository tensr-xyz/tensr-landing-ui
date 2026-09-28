import { metaSchema, pageSchema } from 'fumadocs-core/source/schema';
import { defineCollections, defineConfig, defineDocs } from 'fumadocs-mdx/config';
import { z } from 'zod';

const changelogTag = z.enum(['feature', 'fix', 'improvement']);

export const docs = defineDocs({
  dir: 'content/docs',
  docs: {
    files: ['**/*.{md,mdx}', '!**/_*.mdx', '!**/_*.md'],
    schema: pageSchema.extend({
      category: z.string().optional(),
      nonparametric_alternative: z.string().optional(),
    }),
    postprocess: {
      includeProcessedMarkdown: true,
    },
  },
  meta: {
    schema: metaSchema,
  },
});

export const changelog = defineCollections({
  type: 'doc',
  dir: 'content/changelog',
  files: ['**/*.{md,mdx}', '!**/_*.mdx', '!**/_*.md'],
  schema: z.object({
    title: z.string().min(1),
    date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'date must be YYYY-MM-DD'),
    version: z.string().min(1),
    tags: z.array(changelogTag).min(1),
  }),
  postprocess: {
    includeProcessedMarkdown: true,
  },
});

export default defineConfig({
  mdxOptions: {
    rehypeCodeOptions: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
    },
  },
});
