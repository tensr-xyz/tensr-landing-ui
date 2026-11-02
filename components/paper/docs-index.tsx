import Link from 'next/link';
import type { ReactNode } from 'react';
import { PaperShell } from '@/components/paper/shell';

const guides = [
  ['/docs/quickstart', 'Quickstart', 'A file, a weight, a banner.'],
  ['/docs/import', 'Import', 'CSV, Excel, .sav, .dta, Triple-S, Parquet.'],
  ['/docs/merging', 'Merging', 'Join or stack two files. Fuse for three or more.'],
  ['/docs/weights', 'Weights', 'Raking a new version, not SPSS Weight Cases.'],
  ['/docs/agent', 'The agent', 'Ask, Plan, and Agent.'],
  ['/docs/significance', 'Significance', 'Letters, the low-base skip, click-through.'],
  ['/docs/export', 'Export', 'Excel, .sav with the .sps weight file, PowerPoint.'],
  ['/docs/r-script', 'The R script', 'What is emitted and what the badges mean.'],
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
    <PaperShell>
      <section className="grid grid-cols-[280px_1fr] gap-12 px-10 pb-24 pt-14">
        <nav className="flex flex-col gap-2 border-r border-[#14473A33] pr-6">
          <p className="pb-3 text-[15px] leading-5 text-[#3D6A5E]">Guides</p>
          {guides.map(([href, label]) => (
            <Link key={href} href={href} className="py-1.5 text-[16px] leading-6 hover:underline">
              {label}
            </Link>
          ))}
        </nav>
        <div className="max-w-[760px]">
          <h1 className="text-[64px] leading-none tracking-[-0.04em]">{title}</h1>
          {description ? <p className="mt-5 text-[20px] leading-7 text-[#3D6A5E]">{description}</p> : null}
          <div className="mt-8 flex flex-col gap-4 text-[17px] leading-7 text-[#3D6A5E] [&_a]:underline [&_h2]:mt-8 [&_h2]:text-[28px] [&_h2]:leading-9 [&_h2]:tracking-[-0.02em] [&_h2]:text-[#14473A] [&_li]:ml-5 [&_li]:list-disc">
            {body}
          </div>
          <ul className="mt-10 grid grid-cols-2 gap-3">
            {guides.map(([href, label, note]) => (
              <li key={href}>
                <Link href={href} className="flex h-full flex-col gap-1 bg-[#EEE8DC] p-5">
                  <span className="text-[18px] leading-6">{label}</span>
                  <span className="text-[15px] leading-5 text-[#3D6A5E]">{note}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </PaperShell>
  );
}
