import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Link from 'next/link';
import { PaperShell, SectionRule } from '@/components/paper/shell';

const ANTHROPIC_POLICY = 'https://privacy.claude.com/en/articles/7996868-is-my-data-used-for-model-training';
const OPENAI_POLICY = 'https://developers.openai.com/api/docs/guides/your-data';

export const metadata: Metadata = {
  title: { absolute: "Your client's data stays your client's · Tensr" },
};

const blocks: { kicker: string; title: string; body: ReactNode }[] = [
  {
    kicker: 'Encryption',
    title: 'AES-256 at rest',
    body: 'Encrypted at rest with AES-256 and in transit over HTTPS, hosted in AWS US East.',
  },
  {
    kicker: 'Region',
    title: 'AWS US East',
    body: 'Datasets, exports, and account data are hosted in AWS US East (us-east-1).',
  },
  {
    kicker: 'Retention',
    title: 'Older copies drop off',
    body: 'Older copies of a file drop after 30 days. Unfinished uploads are cleared after 7 days. Dataset logs are kept for 90 days.',
  },
  {
    kicker: 'Private mode',
    title: 'Column names and types',
    body: 'Private mode sends the AI only column names and types, never your respondents’ answers. You still see the full table. Open ends are coded with keywords, and category suggestions stay in Tensr.',
  },
  {
    kicker: 'The agent',
    title: 'Anthropic, and OpenAI on the earlier agent',
    body: (
      <>
        The current agent calls Anthropic. The earlier agent still calls OpenAI. The data-trust note says Tensr does not train models on customer data.{' '}
        <a className="underline" href={ANTHROPIC_POLICY}>
          See Anthropic&apos;s policy
        </a>
        .{' '}
        <a className="underline" href={OPENAI_POLICY}>
          See OpenAI&apos;s policy
        </a>
        .
      </>
    ),
  },
  {
    kicker: 'Plugins',
    title: 'No network from a plugin',
    body: 'Plugins run inside Tensr, with no network access.',
  },
  {
    kicker: 'Sign-in',
    title: 'Email codes',
    body: 'Sign in with an email code. A workspace has an owner and members.',
  },
];

export default function SecurityPage() {
  return (
    <PaperShell>
      <section className="flex flex-col gap-7 px-10 pb-16 pt-14">
        <p className="w-fit rounded-[999px] border border-[#14473A] px-3.5 py-1.5 text-[16px] leading-5">Security</p>
        <div className="flex items-end justify-between gap-10">
          <div className="flex flex-col gap-7">
            <h1 className="whitespace-pre-wrap text-[96px] leading-24 tracking-[-0.045em]">
              Your client&apos;s data{'\n'}stays your client&apos;s
            </h1>
            <p className="w-180 text-[22px] leading-8 text-[#3D6A5E]">
              Encrypted at rest with AES-256 and in transit over HTTPS, hosted in AWS US East. Private mode sends the AI only column names and types, never your respondents&apos; answers.
            </p>
          </div>
          <dl className="w-90 shrink-0 border-t border-[#14473A]">
            {[
              ['At rest', 'SSE-S3 AES-256'],
              ['Region', 'us-east-1'],
              ['In transit', 'HTTPS'],
              ['Plugin network', 'None'],
            ].map(([label, value]) => (
              <div key={label} className="flex justify-between border-b border-[#14473A33] py-3 text-[16px] leading-5">
                <dt className="text-[#3D6A5E]">{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
      <section className="flex flex-col gap-2 px-10 pb-24">
        <SectionRule left="How it is kept" right="Security" />
        {blocks.map((block) => (
          <article key={block.kicker} className="grid grid-cols-[280px_1fr] gap-10 border-t border-[#14473A] py-8">
            <p className="text-[15px] leading-5 text-[#3D6A5E]">{block.kicker}</p>
            <div>
              <h2 className="text-[32px] leading-10 tracking-[-0.03em]">{block.title}</h2>
              <p className="mt-3 max-w-[720px] text-[17px] leading-7 text-[#3D6A5E]">{block.body}</p>
            </div>
          </article>
        ))}
      </section>
      <section className="flex flex-col gap-8 bg-[#14473A] px-10 pb-26 pt-24 text-[#F9F4EB]">
        <h2 className="max-w-[900px] text-[72px] leading-none tracking-[-0.045em]">Questions from your client&apos;s IT team?</h2>
        <Link href="mailto:help@tensr.xyz?subject=Security%20questions" className="w-fit bg-[#F9F4EB] px-6 py-4 text-[17px] leading-5.5 text-[#14473A]">
          Email help@tensr.xyz
        </Link>
      </section>
    </PaperShell>
  );
}
