import { getMDXComponents } from '@/components/mdx';
import { changelogSlug, getChangelogEntries } from '@/lib/source';
import { siteUrl } from '@/lib/site';
import { DocsBody, DocsDescription, DocsPage, DocsTitle } from 'fumadocs-ui/layouts/docs/page';
import type { TOCItemType } from 'fumadocs-core/toc';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Changelog',
  description: 'What changed in Tensr, newest first.',
  alternates: {
    canonical: `${siteUrl}/changelog`,
  },
};

const tagLabel = {
  feature: 'Feature',
  fix: 'Fix',
  improvement: 'Improvement',
} as const;

export default function ChangelogPage() {
  const entries = getChangelogEntries();
  const components = getMDXComponents();
  const toc: TOCItemType[] = entries.map(entry => ({
    title: entry.title,
    url: `#${changelogSlug(entry)}`,
    depth: 2,
  }));

  return (
    <DocsPage toc={toc}>
      <DocsTitle>Changelog</DocsTitle>
      <DocsDescription>What changed in Tensr, newest first.</DocsDescription>
      <div className="flex flex-row items-center gap-2 border-b border-fd-border pt-2 pb-6">
        <p className="text-[13px] text-text-muted">Product updates</p>
        <Link
          href="/changelog/rss.xml"
          className="ms-auto text-[13px] text-text-secondary underline-offset-4 hover:text-text-primary hover:underline"
        >
          RSS
        </Link>
      </div>
      <DocsBody>
        <p className="max-w-xl text-[15px] leading-relaxed text-text-secondary">
          Newest changes first. Each note is what shipped and why it matters for a live job.
        </p>
        <ol className="mt-10 space-y-14">
          {entries.map(entry => {
            const MDX = entry.body;
            const slug = changelogSlug(entry);

            return (
              <li
                key={slug}
                id={slug}
                className="scroll-mt-24 border-t border-border-default pt-10"
              >
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[13px] text-text-muted">
                  <time dateTime={entry.date}>
                    {new Date(`${entry.date}T00:00:00Z`).toLocaleDateString('en-GB', {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric',
                      timeZone: 'UTC',
                    })}
                  </time>
                  <span className="font-mono text-text-secondary">v{entry.version}</span>
                  <span className="flex flex-wrap gap-1.5">
                    {entry.tags.map(tag => (
                      <span
                        key={tag}
                        className="rounded-full border border-border-default px-2 py-0.5 text-[11px] tracking-wide text-text-secondary uppercase"
                      >
                        {tagLabel[tag]}
                      </span>
                    ))}
                  </span>
                </div>
                <h2 className="mt-3 text-2xl font-medium tracking-tight text-text-primary">
                  {entry.title}
                </h2>
                <div className="prose prose-sm mt-4 max-w-none">
                  <MDX components={components} />
                </div>
              </li>
            );
          })}
        </ol>
      </DocsBody>
    </DocsPage>
  );
}
