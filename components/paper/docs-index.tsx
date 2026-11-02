import Link from 'next/link';
import type { ReactNode } from 'react';

const guides = [
  ['/docs/quickstart', 'Quickstart', 'A file, a weight, a banner.'],
  ['/docs/import', 'Import', 'CSV, Excel, .sav, .dta, Triple-S, Parquet.'],
  ['/docs/merging', 'Merging', 'Join or stack two files. Fuse for three or more.'],
  ['/docs/weights', 'Weights', 'Rake a weight, and keep the file you uploaded.'],
  ['/docs/agent', 'The agent', 'Ask, Plan, and Agent.'],
  ['/docs/significance', 'Significance', 'Letters, the low-base skip, and the people behind a cell.'],
  ['/docs/export', 'Export', 'Excel, a .sav with its weight syntax, and PowerPoint.'],
  ['/docs/r-script', 'The R script', 'The script for a run, and what the badges mean.'],
  ['/docs/analyses', 'Analyses', 'The documented analysis pages.'],
] as const;

export function DocsIndex({
  title,
  description,
  body,
}: {
  title: string;
  description?: string;
  body: ReactNode;
}) {
  return (
    <article className="max-w-[760px] pb-8">
      <h1 className="text-[56px] leading-none tracking-[-0.04em]">{title}</h1>
      {description ? <p className="mt-5 text-[20px] leading-7 text-[#3D6A5E]">{description}</p> : null}
      <div className="mt-8 flex flex-col gap-4 text-[17px] leading-7 text-[#3D6A5E] [&_a]:text-[#14473A] [&_a]:underline [&_h2]:mt-8 [&_h2]:text-[28px] [&_h2]:leading-9 [&_h2]:tracking-[-0.02em] [&_h2]:text-[#14473A] [&_li]:ml-5 [&_li]:list-disc">
        {body}
      </div>
      <ul className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {guides.map(([href, label, note]) => (
          <li key={href}>
            <Link href={href} className="flex h-full flex-col gap-1 bg-[#EEE8DC] p-5">
              <span className="text-[18px] leading-6 text-[#14473A]">{label}</span>
              <span className="text-[15px] leading-5 text-[#3D6A5E]">{note}</span>
            </Link>
          </li>
        ))}
      </ul>
    </article>
  );
}
