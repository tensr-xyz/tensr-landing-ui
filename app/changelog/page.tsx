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

export default function ChangelogPage() {
  const entries = getChangelogEntries();
  const components = getMDXComponents();

  return (
    <div className="light-content">
      <div className="mx-auto w-full max-w-3xl px-6 py-16 md:py-24">
        <p className="text-[13px] text-text-muted">Product updates</p>
        <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
          <h1 className="text-4xl font-medium tracking-tight text-text-primary">Changelog</h1>
          <Link
            href="/changelog/rss.xml"
            className="text-[13px] text-text-secondary underline-offset-4 hover:text-text-primary hover:underline"
          >
            RSS
          </Link>
        </div>
        <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-text-secondary">
          Newest changes first. Each note is what shipped and why it matters for a live job.
        </p>

        <ol className="mt-14 space-y-14">
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
      </div>
    </div>
  );
}
