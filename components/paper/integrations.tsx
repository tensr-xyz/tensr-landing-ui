import Link from 'next/link';
import { APP_LOGIN, Arrow, PaperShell, SectionRule } from '@/components/paper/shell';

const cards: {
  mark: string;
  markClass: string;
  badge: string;
  kicker: string;
  title: string;
  body: string;
  dark?: boolean;
}[] = [
  {
    mark: 'P',
    markClass: 'bg-[#14473A] text-[#F9F4EB]',
    badge: 'Coming soon',
    kicker: 'Panel',
    title: 'Prolific',
    body: 'No live study sync in this version. Quotas, spend, and completes are not pulled in.',
  },
  {
    mark: 'Q',
    markClass: 'bg-[#7895A8] text-[#F9F4EB]',
    badge: 'File today',
    kicker: 'Survey platform',
    title: 'Qualtrics',
    body: 'A Qualtrics CSV or a definition file can be imported. Live survey sync is coming soon.',
  },
  {
    mark: '.sav',
    markClass: 'bg-[#C9B48F] text-[#14473A]',
    badge: 'Import',
    kicker: 'File',
    title: 'SPSS .sav',
    body: 'Variable labels, value labels, measurement level, and missing codes stay on the file.',
  },
  {
    mark: '.dta',
    markClass: 'bg-[#7895A8] text-[#F9F4EB]',
    badge: 'Import',
    kicker: 'File',
    title: 'Stata .dta',
    body: 'Stata variable labels and value labels are kept.',
  },
  {
    mark: 'SSS',
    markClass: 'bg-[#C9B48F] text-[#14473A]',
    badge: 'Import',
    kicker: 'File',
    title: 'Triple-S',
    body: '.sss is on Import Data. A legacy Triple-S import is there too.',
  },
  {
    mark: 'PQ',
    markClass: 'bg-[#14473A] text-[#F9F4EB]',
    badge: 'Import',
    kicker: 'File',
    title: 'Parquet',
    body: 'Columns come through as stored. A Parquet file has no SPSS-style labels.',
  },
  {
    mark: 'XL',
    markClass: 'bg-[#5E8A74] text-[#F9F4EB]',
    badge: 'Import · Export',
    kicker: 'File',
    title: 'Excel & CSV',
    body: 'Bring in a spreadsheet or CSV. Send a signed-off banner out to Excel.',
  },
  {
    mark: 'PP',
    markClass: 'bg-[#3E6B5A] text-[#F9F4EB]',
    badge: 'Export',
    kicker: 'Deliverable',
    title: 'PowerPoint',
    body: 'A banner can go out as PowerPoint. The Excel file is the audit record.',
  },
  {
    mark: 'PDF',
    markClass: 'bg-[#5E8A74] text-[#F9F4EB]',
    badge: 'Print',
    kicker: 'Deliverable',
    title: 'Print',
    body: 'An analysis write-up can be printed from the browser. There is no separate PDF file.',
  },
  {
    mark: 'Fn',
    markClass: 'bg-[#14473A] text-[#F9F4EB]',
    badge: 'In the product',
    kicker: 'Plugins',
    title: 'Plugins',
    body: 'A plugin runs with no network access. This version does not charge for a toolkit.',
  },
  {
    mark: '.sps',
    markClass: 'bg-[#C9B48F] text-[#14473A]',
    badge: 'Export',
    kicker: 'File',
    title: '.sav with weights',
    body: 'The .sav opens unweighted. A companion .sps file applies the weight.',
  },
];

export function IntegrationsPage() {
  return (
    <PaperShell>
      <section className="flex flex-col items-start gap-7 px-10 pb-24 pt-14">
        <p className="rounded-[999px] border border-[#14473A] px-3.5 py-1.5 text-[16px] leading-5">
          Integrations · Panels, surveys, files and exports
        </p>
        <h1 className="whitespace-pre-wrap text-[96px] leading-24 tracking-[-0.045em]">
          Connect the survey.{'\n'}Keep the workflow.
        </h1>
        <div className="flex w-full items-end justify-between gap-10">
          <p className="w-175 shrink-0 text-[22px] leading-8 text-[#3D6A5E]">
            Open a .sav, .dta, CSV, Excel, Triple-S, or Parquet file, and send the banner out to Excel or PowerPoint. Live Prolific, Qualtrics, and Decipher sync is coming soon.
          </p>
          <div className="flex shrink-0">
            <Link href={APP_LOGIN} className="flex h-17 items-center gap-3.5 bg-[#14473A] px-6.5 text-[20px] leading-6 text-[#F9F4EB]">
              Start free trial
              <Arrow light />
            </Link>
            <Link href="/demo" className="flex h-17 items-center border-y border-r border-[#14473A] px-6.5 text-[20px] leading-6">
              Request an integration
            </Link>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-12 px-10 pb-30">
        <SectionRule left="Integrations" right="In and out" />
        <div className="flex items-end justify-between gap-10">
          <h2 className="w-205 shrink-0 text-[56px] leading-14.5 tracking-[-0.04em]">Data comes in from the file, and goes out where it is read</h2>
          <p className="w-105 shrink-0 text-[18px] leading-6.75 text-[#3D6A5E]">
            On a .sav, labels, value codes, and missing values travel with the data. A recode does not overwrite the upload.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {cards.map((card) => (
            <article key={card.title} className="flex h-[330px] w-[calc(25%-6px)] flex-col justify-between bg-[#EEE8DC] p-7">
              <div className="flex items-start justify-between gap-3">
                <div className={`flex size-14 shrink-0 items-center justify-center text-[18px] font-semibold leading-5 tracking-[-0.02em] ${card.markClass}`}>
                  {card.mark}
                </div>
                <p className="rounded-[999px] border border-[#14473A] px-2.5 py-1 text-[13px] leading-4">{card.badge}</p>
              </div>
              <div className="flex flex-col gap-2.5">
                <p className="text-[15px] leading-4.5 text-[#3D6A5E]">{card.kicker}</p>
                <h3 className="text-[30px] leading-9 tracking-[-0.02em]">{card.title}</h3>
                <p className="text-[16px] leading-6 text-[#3D6A5E]">{card.body}</p>
              </div>
            </article>
          ))}
          <article className="flex h-[330px] w-[calc(25%-6px)] flex-col justify-between border border-dashed border-[#14473A] p-7">
            <div className="flex size-14 items-center justify-center border border-dashed border-[#14473A] text-[22px]">+</div>
            <div className="flex flex-col gap-2.5">
              <p className="text-[15px] leading-4.5 text-[#3D6A5E]">Missing one?</p>
              <h3 className="text-[30px] leading-9 tracking-[-0.02em]">Request an integration</h3>
              <p className="text-[16px] leading-6 text-[#3D6A5E]">Decipher is on that list. Tell us which tool you use.</p>
            </div>
          </article>
        </div>
      </section>

      <section className="flex flex-col gap-12 px-10 pb-30">
        <SectionRule left="Prolific" right="Coming soon" />
        <div className="flex items-end justify-between gap-10">
          <h2 className="w-205 shrink-0 text-[56px] leading-14.5 tracking-[-0.04em]">Fielding stays in Prolific for now</h2>
          <p className="w-105 shrink-0 text-[18px] leading-6.75 text-[#3D6A5E]">
            Tensr does not sign in to a Prolific study, and it does not show quotas, screen-outs, or spend.
          </p>
        </div>
        <div className="flex gap-10">
          {[
            ['01', 'Not connected', 'There is no Prolific plugin to add to a workspace.'],
            ['02', 'No study link', 'Participant IDs are not matched to survey responses from Prolific.'],
            ['03', 'No live fill', 'Completes do not update a table while fieldwork is open.'],
            ['04', 'Bring the file', 'When the study is done, upload the file you exported.'],
          ].map(([index, title, body]) => (
            <div key={index} className="flex grow basis-0 flex-col gap-3.5">
              <p className="text-[88px] leading-22 tracking-[-0.05em]">{index}</p>
              <h3 className="text-[30px] leading-9 tracking-[-0.02em]">{title}</h3>
              <p className="text-[18px] leading-6.75 text-[#3D6A5E]">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-12 px-10 pb-30">
        <SectionRule left="Qualtrics" right="A file, not a live sync" />
        <div className="flex items-start justify-between gap-16">
          <h2 className="w-80 shrink-0 text-[48px] leading-13 tracking-[-0.04em]">A Qualtrics file can come in. The survey does not stay live.</h2>
          <ol className="flex w-full max-w-[1000px] flex-col">
            {[
              ['01', 'Import the CSV', 'A Qualtrics CSV is detected from the ImportId row. That row is not treated as a case.'],
              ['02', 'Or a definition', 'Qualtrics Definition is a legacy import, not a signed-in connection.'],
              ['03', 'Alchemer', 'Coming soon. An Alchemer import is not in this version. Decipher is not either.'],
              ['04', 'Stack with a .sav', 'Join or stack the file with another upload. That does not pull new completes.'],
            ].map(([index, title, body]) => (
              <li key={index} className="flex gap-5 border-t border-[#14473A33] py-4.5 last:border-b">
                <span className="w-7 shrink-0 text-[18px] leading-6">{index}</span>
                <span>
                  <span className="block text-[18px] leading-6">{title}</span>
                  <span className="mt-1 block text-[16px] leading-6 text-[#3D6A5E]">{body}</span>
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="flex flex-col gap-12 px-10 pb-30">
        <SectionRule left="Data handling" right="Your respondents, your data" />
        <div className="flex items-end justify-between gap-10">
          <h2 className="w-205 shrink-0 text-[56px] leading-14.5 tracking-[-0.04em]">Imported does not mean exposed</h2>
          <p className="w-105 shrink-0 text-[18px] leading-6.75 text-[#3D6A5E]">
            Respondent data is sensitive. Here is what happens to a file once it is in Tensr.
          </p>
        </div>
        <div className="flex gap-2">
          <article className="flex h-80 grow basis-0 flex-col justify-between bg-[#14473A] p-7 text-[#F9F4EB]">
            <p className="text-[15px] leading-4.5 opacity-80">At rest</p>
            <div>
              <h3 className="text-[36px] leading-10 tracking-[-0.03em]">Encrypted at rest</h3>
              <p className="mt-2.5 text-[16px] leading-5.75 opacity-85">Uploaded files and project data are encrypted with S3 SSE-S3 AES-256.</p>
            </div>
          </article>
          <article className="flex h-80 grow basis-0 flex-col justify-between bg-[#C9B48F] p-7">
            <p className="text-[15px] leading-4.5">Training</p>
            <div>
              <h3 className="text-[36px] leading-10 tracking-[-0.03em]">Never used for training</h3>
              <p className="mt-2.5 text-[16px] leading-5.75">Your data is never used to train models.</p>
            </div>
          </article>
          <article className="flex h-80 grow basis-0 flex-col justify-between bg-[#EEE8DC] p-7">
            <p className="text-[15px] leading-4.5 text-[#3D6A5E]">The upload</p>
            <div>
              <h3 className="text-[36px] leading-10 tracking-[-0.03em]">Not overwritten</h3>
              <p className="mt-2.5 text-[16px] leading-5.75 text-[#3D6A5E]">A recode, a rake, or a merge creates a new version. It does not replace the file you uploaded.</p>
            </div>
          </article>
          <article className="flex h-80 grow basis-0 flex-col justify-between bg-[#EEE8DC] p-7">
            <p className="text-[15px] leading-4.5 text-[#3D6A5E]">Access</p>
            <div>
              <h3 className="text-[36px] leading-10 tracking-[-0.03em]">Teams shares a workspace</h3>
              <p className="mt-2.5 text-[16px] leading-5.75 text-[#3D6A5E]">Teams includes shared workspaces and presence. SAML SSO is not available.</p>
            </div>
          </article>
        </div>
      </section>

      <section className="flex flex-col gap-10 bg-[#14473A] px-10 pb-26 pt-24 text-[#F9F4EB]">
        <h2 className="w-275 text-[120px] leading-28 tracking-[-0.055em]">Bring a file. Leave with the tables.</h2>
        <div className="flex items-end justify-between gap-10">
          <p className="w-130 shrink-0 text-[20px] leading-7.5 opacity-85">
            <Link href={APP_LOGIN} className="underline decoration-1 underline-offset-2">Start a 30-day free trial</Link>
            , or book a call. Live Prolific and Qualtrics sync is not on this version.
          </p>
          <div className="flex">
            <div className="flex h-14 w-90 items-center border border-[#F9F4EB] px-5 opacity-90">
              <p className="text-[17px] leading-5.5">What&apos;s your work email?</p>
            </div>
            <Link href="/demo" className="flex h-14 items-center bg-[#F9F4EB] px-6 text-[17px] leading-5.5 text-[#14473A]">
              Book a demo →
            </Link>
          </div>
        </div>
      </section>
    </PaperShell>
  );
}
