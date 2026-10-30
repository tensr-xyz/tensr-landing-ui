import type { Metadata } from 'next';
import { PaperPage } from '@/components/paper/chrome';

export const metadata: Metadata = { title: 'Book a demo' };

export default function DemoPage() {
  return (
    <PaperPage
      title="Book a demo."
      lede="Tell us what you want to see. This sends an email. It does not create an account."
    >
      <form className="flex max-w-md flex-col gap-3" action="mailto:help@tensr.xyz" method="post" encType="text/plain">
        <label className="text-[14px]" htmlFor="name">
          Name
        </label>
        <input id="name" name="name" className="h-12 border border-[#14473A] bg-[#FCFAF5] px-3" />
        <label className="text-[14px]" htmlFor="email">
          Email
        </label>
        <input id="email" name="email" type="email" className="h-12 border border-[#14473A] bg-[#FCFAF5] px-3" />
        <label className="text-[14px]" htmlFor="note">
          What do you want to cover?
        </label>
        <textarea id="note" name="note" className="min-h-28 border border-[#14473A] bg-[#FCFAF5] px-3 py-2" />
        <button type="submit" className="h-12 bg-[#14473A] text-[#F9F4EB]">
          Email the team
        </button>
      </form>
    </PaperPage>
  );
}
