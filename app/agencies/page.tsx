import type { Metadata } from 'next';
import Link from 'next/link';
import { PaperPage } from '@/components/paper/chrome';

export const metadata: Metadata = { title: 'Agencies' };

export default function AgenciesPage() {
  return (
    <PaperPage
      title="For the people who deliver the tables."
      lede="Stack waves, weight the file, and hand over a banner book or a deck. Membership on a project is owner, editor, or viewer."
    >
      <Link href="/demo" className="w-fit bg-[#14473A] px-4 py-3 text-[#F9F4EB]">
        Book a demo
      </Link>
    </PaperPage>
  );
}
