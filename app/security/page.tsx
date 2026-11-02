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
    title: 'S3 SSE-S3, not a customer key',
    body: 'The datasets bucket uses BucketEncryption.S3_MANAGED and enforce_ssl. That is Amazon S3-managed AES-256 (SSE-S3). The table definition does not set a customer-managed KMS key. The data-trust note says the same.',
  },
  {
    kicker: 'Region',
    title: 'AWS us-east-1',
    body: 'The data-trust note and the CDK app put datasets, exports, and the business table in us-east-1.',
  },
  {
    kicker: 'Retention',
    title: 'What the bucket and the table expire',
    body: 'Noncurrent dataset versions expire after 30 days. Incomplete multipart uploads abort after 7 days. Dataset Lambda logs are kept for 90 days. The business table has point-in-time recovery, and an item with a ttl attribute expires on that clock.',
  },
  {
    kicker: 'In transit',
    title: 'HTTPS',
    body: 'The API stack is an API Gateway HTTP API. The datasets bucket sets enforce_ssl.',
  },
  {
    kicker: 'The agent',
    title: 'Anthropic, and OpenAI where v1 still runs',
    body: (
      <>
        The v2 agent defaults to Anthropic. The v1 agent still calls OpenAI, and those requests set store to false. The data-trust note says Tensr does not train models on customer data.{' '}
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
    kicker: 'Schema-only',
    title: 'Names and ranges, not the cells',
    body: 'When privacy_mode is schema_only, the model payload keeps column names, types, missing counts, and numeric ranges. Category levels, value labels, sample rows, and the full table stay out. The user still sees the full table. Open-end coding does not call the model and uses keywords. Category-label suggestions do not call the model. A report sent for synthesis leaves out the prep log, chart assets, and execution summary.',
  },
  {
    kicker: 'Plugins',
    title: 'No network from a plugin',
    body: 'The plugin isolation note says network access is disabled. Manifests that ask for network are rejected. The executor Lambda is in private isolated subnets with no NAT and no internet route.',
  },
  {
    kicker: 'Sign-in',
    title: 'Not SAML',
    body: 'Organisation roles in the API are owner or member. SAML SSO and SCIM are not in that role model, and this page does not claim them.',
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
              What the stack and the plugin note actually say. Anything that is not in those sources is left off this page.
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
        <SectionRule left="What is in the stack" right="Checked against the code" />
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
