import { getMDXComponents } from '@/components/mdx';
import { changelogSlug, getChangelogEntries } from '@/lib/source';
import { siteUrl } from '@/lib/site';
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

function formatDate(date: string) {
  return new Date(`${date}T00:00:00Z`).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  });
}

export default function ChangelogPage() {
  const entries = getChangelogEntries();
  const components = getMDXComponents();

  return (
    <div className="bg-page">
      <div className="page-pad mx-auto max-w-3xl py-16 md:py-24">
        <header className="flex flex-col gap-4 border-b border-border-default pb-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-4xl font-medium tracking-tight text-text-primary md:text-5xl">
              Changelog
            </h1>
            <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-text-secondary">
              Newest changes first. Each note is what shipped and why it matters for a live job.
            </p>
          </div>
          <Link
            href="/changelog/rss.xml"
            className="text-[13px] text-text-secondary underline-offset-4 hover:text-text-primary hover:underline"
          >
            RSS
          </Link>
        </header>

        <ol className="mt-2">
          {entries.map(entry => {
            const MDX = entry.body;
            const slug = changelogSlug(entry);

            return (
              <li
                key={slug}
                id={slug}
                className="scroll-mt-24 border-b border-border-default py-10 last:border-b-0"
              >
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[13px] text-text-muted">
                  <time dateTime={entry.date}>{formatDate(entry.date)}</time>
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
                <div className="prose prose-sm mt-4 max-w-none text-text-secondary">
                  <MDX components={components} />
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
