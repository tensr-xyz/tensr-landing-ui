import Link from 'next/link';
import { APP_LOGIN, Arrow, PaperShell, SectionRule } from '@/components/paper/shell';

const cards: {
  mark: string;
  markClass: string;
  badge: string;
  kicker: string;
  title: string;
  body: string;
}[] = [
  {
    mark: 'Q',
    markClass: 'bg-[#7895A8] text-[#F9F4EB]',
    badge: 'File import',
    kicker: 'Survey platform',
    title: 'Qualtrics',
    body: 'Import a Qualtrics CSV or a definition file. Question text and labels come with the file.',
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
    body: 'Open Stata datasets directly, no conversion step in between.',
  },
  {
    mark: 'SSS',
    markClass: 'bg-[#C9B48F] text-[#14473A]',
    badge: 'Import',
    kicker: 'File',
    title: 'Triple-S',
    body: 'The survey interchange format, with metadata and data arriving together.',
  },
  {
    mark: 'PQ',
    markClass: 'bg-[#14473A] text-[#F9F4EB]',
    badge: 'Import',
    kicker: 'File',
    title: 'Parquet',
    body: 'Large columnar files, loaded as they are stored.',
  },
  {
    mark: 'XL',
    markClass: 'bg-[#5E8A74] text-[#F9F4EB]',
    badge: 'Import · Export',
    kicker: 'File',
    title: 'Excel & CSV',
    body: 'Bring in raw exports, send out tables to Excel with value labels kept.',
  },
  {
    mark: 'PP',
    markClass: 'bg-[#3E6B5A] text-[#F9F4EB]',
    badge: 'Export',
    kicker: 'Deliverable',
    title: 'PowerPoint',
    body: 'Charts and tables for the client deck. Excel is the audit record.',
  },
  {
    mark: 'PDF',
    markClass: 'bg-[#5E8A74] text-[#F9F4EB]',
    badge: 'Print',
    kicker: 'Deliverable',
    title: 'Print',
    body: 'Print the write-up from the browser, with the test tables and a plain-language read.',
  },
  {
    mark: 'Fn',
    markClass: 'bg-[#14473A] text-[#F9F4EB]',
    badge: 'In the product',
    kicker: 'Plugins',
    title: 'Plugins',
    body: 'Plugins run inside Tensr, with no network access. They show up in ⌘K and the agent can call them.',
  },
  {
    mark: '.sps',
    markClass: 'bg-[#C9B48F] text-[#14473A]',
    badge: 'Export',
    kicker: 'File',
    title: '.sav with weights',
    body: 'Send the data back as .sav with an .sps file that applies your weight.',
  },
  {
    mark: 'R',
    markClass: 'bg-[#5E8A74] text-[#F9F4EB]',
    badge: 'Export',
    kicker: 'Script',
    title: 'R script',
    body: 'Take the R script for a run with you.',
  },
  {
    mark: 'W',
    markClass: 'bg-[#3E6B5A] text-[#F9F4EB]',
    badge: 'Export',
    kicker: 'Deliverable',
    title: 'Word',
    body: 'The methodology note comes out as a Word document.',
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
            Open a .sav, .dta, CSV, Excel, Triple-S or Parquet file, and send the banner to Excel or PowerPoint. Prolific fielding, live Qualtrics, Decipher and Alchemer are coming soon.
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
          <h2 className="w-205 shrink-0 text-[56px] leading-14.5 tracking-[-0.04em]">Data comes in from where it&apos;s collected and goes out where it&apos;s read</h2>
          <p className="w-105 shrink-0 text-[18px] leading-6.75 text-[#3D6A5E]">
            Labels, value codes and missing values travel with the data, so nothing has to be rebuilt by hand. A recode saves a new version.
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
          <article className="flex h-[330px] w-[calc(25%-6px)] flex-col justify-between bg-[#14473A] p-7 text-[#F9F4EB]">
            <p className="text-[15px] leading-4.5 opacity-80">On the roadmap</p>
            <div className="flex flex-col gap-2.5">
              <h3 className="text-[30px] leading-9 tracking-[-0.02em]">Coming next</h3>
              <p className="text-[16px] leading-6 opacity-85">Prolific: coming soon. Live Qualtrics: coming soon. Decipher: coming soon. Alchemer: coming soon. Tell us which tool you use.</p>
            </div>
          </article>
        </div>
      </section>

      <section className="flex flex-col gap-12 px-10 pb-30">
        <SectionRule left="Data handling" right="Your respondents, your data" />
        <div className="flex items-end justify-between gap-10">
          <h2 className="w-205 shrink-0 text-[56px] leading-14.5 tracking-[-0.04em]">Your respondents, your data</h2>
          <p className="w-105 shrink-0 text-[18px] leading-6.75 text-[#3D6A5E]">
            Respondent data is sensitive. Here is what happens to a file once it is in Tensr.
          </p>
        </div>
        <div className="flex gap-2">
          <article className="flex h-80 grow basis-0 flex-col justify-between bg-[#14473A] p-7 text-[#F9F4EB]">
            <p className="text-[15px] leading-4.5 opacity-80">At rest</p>
            <div>
              <h3 className="text-[36px] leading-10 tracking-[-0.03em]">Encrypted at rest</h3>
              <p className="mt-2.5 text-[16px] leading-5.75 opacity-85">Encrypted at rest with AES-256 and in transit over HTTPS, hosted in AWS US East.</p>
            </div>
          </article>
          <article className="flex h-80 grow basis-0 flex-col justify-between bg-[#C9B48F] p-7">
            <p className="text-[15px] leading-4.5">Private mode</p>
            <div>
              <h3 className="text-[36px] leading-10 tracking-[-0.03em]">Names and types</h3>
              <p className="mt-2.5 text-[16px] leading-5.75">Private mode sends the AI only column names and types, never your respondents&apos; answers.</p>
            </div>
          </article>
          <article className="flex h-80 grow basis-0 flex-col justify-between bg-[#EEE8DC] p-7">
            <p className="text-[15px] leading-4.5 text-[#3D6A5E]">The upload</p>
            <div>
              <h3 className="text-[36px] leading-10 tracking-[-0.03em]">A new version</h3>
              <p className="mt-2.5 text-[16px] leading-5.75 text-[#3D6A5E]">A recode, a rake, or a merge saves a new version. The file you uploaded stays.</p>
            </div>
          </article>
          <article className="flex h-80 grow basis-0 flex-col justify-between bg-[#EEE8DC] p-7">
            <p className="text-[15px] leading-4.5 text-[#3D6A5E]">Access</p>
            <div>
              <h3 className="text-[36px] leading-10 tracking-[-0.03em]">Teams shares a workspace</h3>
              <p className="mt-2.5 text-[16px] leading-5.75 text-[#3D6A5E]">Teams includes shared workspaces and presence. Sign in with an email code.</p>
            </div>
          </article>
        </div>
      </section>

      <section className="flex flex-col gap-10 bg-[#14473A] px-10 pb-26 pt-24 text-[#F9F4EB]">
        <h2 className="w-275 text-[120px] leading-28 tracking-[-0.055em]">Bring a file. Leave with the tables.</h2>
        <div className="flex items-end justify-between gap-10">
          <p className="w-130 shrink-0 text-[20px] leading-7.5 opacity-85">
            <Link href={APP_LOGIN} className="underline decoration-1 underline-offset-2">Start a 30-day free trial</Link>
            , or book a call and we&apos;ll walk through a file you already have.
          </p>
          <Link href="/demo" className="flex h-14 items-center bg-[#F9F4EB] px-6 text-[17px] leading-5.5 text-[#14473A]">
            Book a demo →
          </Link>
        </div>
      </section>
    </PaperShell>
  );
}
