import { changelogSlug, getChangelogEntries, summarizeMarkdown } from '@/lib/source';
import { siteUrl } from '@/lib/site';

const limit = 10;

export async function GET() {
  const entries = getChangelogEntries();
  const latest = await Promise.all(
    entries.slice(0, limit).map(async entry => {
      const slug = changelogSlug(entry);
      return {
        title: entry.title,
        date: entry.date,
        version: entry.version,
        tags: entry.tags,
        url: `${siteUrl}/changelog#${slug}`,
        summary: summarizeMarkdown(await entry.getText('processed')),
      };
    })
  );

  return Response.json({
    success: true,
    data: latest,
    error: null,
    meta: {
      total: entries.length,
      page: 1,
      limit,
    },
  });
}
