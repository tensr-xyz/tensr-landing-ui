import type { Metadata } from 'next';
import Link from 'next/link';
import { APP_LOGIN, PaperShell } from '@/components/paper/shell';

export const metadata: Metadata = {
  title: { absolute: 'See it on your own data · Tensr' },
};

export default function DemoPage() {
  return (
    <PaperShell>
      <section className="flex items-start gap-16 px-10 pb-24 pt-14">
        <div className="flex w-150 shrink-0 flex-col gap-10">
          <h1 className="whitespace-pre-wrap text-[80px] leading-20.5 tracking-[-0.045em]">
            See it on your{'\n'}own data
          </h1>
          <p className="text-[22px] leading-8 text-[#3D6A5E]">
            Tell us what you want to see. We&apos;ll write back from help@tensr.xyz.
          </p>
          <ol className="border-t border-[#14473A33]">
            {[
              ['01', 'From a file to weighted tables', 'Import, then rake. The file you uploaded stays. Build a banner with significance letters and nets.'],
              ['02', 'Ask the agent', 'Ask answers from the data. Plan lays out the steps for you to approve. A complete cell opens the respondents behind it.'],
              ['03', 'Out as Excel or PowerPoint', 'Excel is the audit record. PowerPoint is the deck you send. Word is the methodology note.'],
            ].map(([index, title, body]) => (
              <li key={index} className="flex gap-6 border-b border-[#14473A33] py-5.5">
                <span className="w-8 shrink-0 text-[15px] leading-7.5 text-[#3D6A5E]">{index}</span>
                <span>
                  <span className="block text-[24px] leading-7.5 tracking-[-0.02em]">{title}</span>
                  <span className="mt-1.5 block text-[16px] leading-6 text-[#3D6A5E]">{body}</span>
                </span>
              </li>
            ))}
          </ol>
          <p className="bg-[#14473A] px-6 py-5 text-[17px] leading-6 text-[#F9F4EB]">
            Bring a .sav, .dta, CSV, or Excel file and we&apos;ll look at it together.
          </p>
          <p className="text-[15px] leading-5.5 text-[#3D6A5E]">
            Files are encrypted at rest with AES-256 and hosted in AWS US East.
          </p>
        </div>

        <form action="mailto:help@tensr.xyz" method="post" encType="text/plain" className="flex grow flex-col gap-6 bg-[#EEE8DC] p-10">
          <div>
            <h2 className="text-[30px] leading-9 tracking-[-0.02em]">Email the team</h2>
            <p className="mt-2 text-[16px] leading-6 text-[#3D6A5E]">A short note is enough. We&apos;ll reply from help@tensr.xyz.</p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <label className="flex flex-col gap-2 text-[15px] leading-4.5">
              Name
              <input name="name" className="h-13 border border-[#14473A] bg-[#FCFAF5] px-4.5 text-[17px]" />
            </label>
            <label className="flex flex-col gap-2 text-[15px] leading-4.5">
              Work email
              <input name="email" type="email" required className="h-13 border border-[#14473A] bg-[#FCFAF5] px-4.5 text-[17px]" />
            </label>
          </div>
          <label className="flex flex-col gap-2 text-[15px] leading-4.5">
            Company
            <input name="company" className="h-13 border border-[#14473A] bg-[#FCFAF5] px-4.5 text-[17px]" />
          </label>
          <label className="flex flex-col gap-2 text-[15px] leading-4.5">
            What would you like to see?
            <textarea name="note" className="min-h-26 border border-[#14473A] bg-[#FCFAF5] px-4.5 py-3.5 text-[17px] leading-6" />
          </label>
          <button type="submit" className="flex h-15 items-center justify-center bg-[#14473A] text-[18px] leading-5.5 text-[#F9F4EB]">
            Email help@tensr.xyz
          </button>
          <p className="text-[14px] leading-5 text-[#3D6A5E]">
            Prefer to try it yourself? <Link href={APP_LOGIN} className="underline">Start a 30-day free trial</Link>.
          </p>
        </form>
      </section>
    </PaperShell>
  );
}
