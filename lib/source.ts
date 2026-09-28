import { changelog, docs } from 'collections/server';
import { createGetUrl, llms, loader } from 'fumadocs-core/source';

export const source = loader({
  baseUrl: '/docs',
  source: docs.toFumadocsSource(),
});

export const docsLlms = llms(source, {
  renderPage: async page => `# ${page.data.title} (${page.url})

${await page.data.getText('processed')}`,
});

const docsContentRoute = '/llms.mdx/docs';
const getContentUrl = createGetUrl(docsContentRoute);

export function getPageMarkdownUrl(page: { slugs: string[]; locale?: string }) {
  const segments = [...page.slugs, 'content.md'];

  return {
    segments,
    url: getContentUrl(segments, page.locale),
  };
}

export type ChangelogEntry = (typeof changelog)[number];

export function changelogSlug(entry: Pick<ChangelogEntry, 'version' | 'title'>) {
  return `${entry.version}-${entry.title}`
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export function getChangelogEntries() {
  return changelog.toSorted((a, b) => {
    const byDate = b.date.localeCompare(a.date);
    if (byDate !== 0) return byDate;
    return b.version.localeCompare(a.version, undefined, { numeric: true });
  });
}

export function summarizeMarkdown(markdown: string, max = 220) {
  const text = markdown
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/!\[[^\]]*]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]+)]\([^)]*\)/g, '$1')
    .replace(/[#>*_`-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  if (text.length <= max) return text;
  return `${text.slice(0, max).trimEnd()}…`;
}
