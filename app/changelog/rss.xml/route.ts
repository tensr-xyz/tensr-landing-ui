import { changelogSlug, getChangelogEntries } from '@/lib/source';
import { siteUrl } from '@/lib/site';

function escapeXml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

export async function GET() {
  const entries = getChangelogEntries();
  const items = await Promise.all(
    entries.map(async entry => {
      const slug = changelogSlug(entry);
      const url = `${siteUrl}/changelog#${slug}`;
      const body = await entry.getText('processed');

      return `    <item>
      <title>${escapeXml(entry.title)}</title>
      <link>${escapeXml(url)}</link>
      <guid isPermaLink="false">${escapeXml(`${entry.version}-${slug}`)}</guid>
      <pubDate>${new Date(`${entry.date}T00:00:00Z`).toUTCString()}</pubDate>
      ${entry.tags.map(tag => `<category>${escapeXml(tag)}</category>`).join('\n      ')}
      <description><![CDATA[${body.replaceAll(']]>', ']]]]><![CDATA[>')}]]></description>
    </item>`;
    })
  );

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Tensr Changelog</title>
    <link>${siteUrl}/changelog</link>
    <description>What changed in Tensr, newest first.</description>
    <language>en-gb</language>
${items.join('\n')}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
    },
  });
}
