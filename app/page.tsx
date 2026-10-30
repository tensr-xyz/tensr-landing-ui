import type { Metadata } from 'next';
import Link from 'next/link';
import { PaperPage, Soon } from '@/components/paper/chrome';

export const metadata: Metadata = {
  title: 'Banner tables that trace to the respondents › Tensr',
  description:
    'Weighted crosstabs and banner tables for research agencies. Significance letters, Excel and PowerPoint, every number traced to the respondents.',
};

export default function HomePage() {
  return (
    <PaperPage
      title="Banner tables that trace to the respondents."
      lede="Build a crosstab, weight it, and export the deck. The chat agent runs the same analyses. Fielding and live survey sync are not in this version."
    >
      <div className="flex gap-3">
        <Link href="/signin" className="bg-[#14473A] px-4 py-3 text-[#F9F4EB]">
          Sign in
        </Link>
        <Link href="/demo" className="border border-[#14473A] px-4 py-3">
          Book a demo
        </Link>
      </div>
      <ul className="flex flex-col gap-3 text-[16px] leading-6">
        <li>Upload .sav, .csv, and .xlsx, then stack waves with a column map.</li>
        <li>Column percent tables with significance letters when a contrast is significant.</li>
        <li>Rake weights, code frames, and exports to Excel, PowerPoint, and Word.</li>
        <li>
          Prolific fielding <Soon>coming soon</Soon>
        </li>
        <li>
          Live Qualtrics, Decipher, and Alchemer sync <Soon>coming soon</Soon>
        </li>
      </ul>
    </PaperPage>
  );
}
