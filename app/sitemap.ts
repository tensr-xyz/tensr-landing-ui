import { getChangelogEntries, source } from '@/lib/source';
import { siteUrl } from '@/lib/site';
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteUrl;
  const latestChangelog = getChangelogEntries()[0]?.date;

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/features`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/enterprise`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/changelog`,
      lastModified: latestChangelog ? new Date(`${latestChangelog}T00:00:00Z`) : new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    ...source.getPages().map(page => ({
      url: `${baseUrl}${page.url}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: page.url === '/docs' ? 0.8 : 0.6,
    })),
  ];
}
