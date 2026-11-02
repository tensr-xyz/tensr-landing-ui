import type { Metadata } from 'next';
import Link from 'next/link';
import { PaperShell, SectionRule } from '@/components/paper/shell';
import { changelogSlug, getChangelogEntries } from '@/lib/source';

export const metadata: Metadata = {
  title: { absolute: 'Changelog · Tensr' },
  description: 'What changed in Tensr, newest first.',
};

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

  return (
    <PaperShell>
      <section className="flex items-end justify-between gap-10 px-10 pb-16 pt-14">
        <div className="flex flex-col gap-7">
          <p className="w-fit rounded-[999px] border border-[#14473A] px-3.5 py-1.5 text-[16px] leading-5">Changelog</p>
          <h1 className="text-[96px] leading-24 tracking-[-0.045em]">Changelog</h1>
          <p className="w-175 text-[22px] leading-8 text-[#3D6A5E]">
            What we shipped and when. Mostly fixes and features researchers asked for, with the statistics checked against R before they go out. Newest first. Subscribe with RSS.
          </p>
        </div>
        <Link href="/changelog/rss.xml" className="shrink-0 border border-[#14473A] bg-[#14473A] px-5.5 py-3.75 text-[17px] leading-5.5 text-[#F9F4EB]">
          RSS
        </Link>
      </section>
      <section className="flex flex-col gap-8 px-10 pb-24">
        <SectionRule left="Shipped" right={`${entries.length} notes`} />
        <ol className="flex flex-col">
          {entries.map((entry) => {
            const MDX = entry.body;
            const slug = changelogSlug(entry);
            return (
              <li key={slug} id={slug} className="border-t border-[#14473A] py-8">
                <p className="text-[15px] leading-5 text-[#3D6A5E]">
                  <time dateTime={entry.date}>{formatDate(entry.date)}</time>
                  <span className="px-3">·</span>
                  v{entry.version}
                </p>
                <h2 className="mt-3 text-[32px] leading-10 tracking-[-0.03em]">{entry.title}</h2>
                <div className="mt-4 max-w-[760px] text-[17px] leading-7 text-[#3D6A5E]">
                  <MDX />
                </div>
              </li>
            );
          })}
        </ol>
      </section>
    </PaperShell>
  );
}
