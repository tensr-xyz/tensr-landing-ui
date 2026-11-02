import Link from 'next/link';
import { APP_LOGIN, Arrow, PaperShell, SectionRule } from '@/components/paper/shell';
import { WorkspaceSection } from '@/components/paper/workspace-section';

function PersonDots() {
  return (
    <svg width="380" height="266" viewBox="0 0 380 266" aria-hidden="true" className="h-[238px] w-[340px] shrink-0">
      <circle cx="19" cy="19" r="7" fill="#F9F4EB47" />
      <circle cx="57" cy="19" r="7" fill="#F9F4EB47" />
      <circle cx="95" cy="19" r="7" fill="#F9F4EB47" />
      <circle cx="133" cy="19" r="7" fill="#F9F4EB47" />
      <circle cx="171" cy="19" r="7" fill="#F9F4EB47" />
      <circle cx="209" cy="19" r="7" fill="#F9F4EB47" />
      <circle cx="247" cy="19" r="11" fill="#F9F4EB" />
      <circle cx="285" cy="19" r="7" fill="#F9F4EB47" />
      <circle cx="323" cy="19" r="7" fill="#F9F4EB47" />
      <circle cx="361" cy="19" r="7" fill="#F9F4EB47" />
      <circle cx="19" cy="57" r="7" fill="#F9F4EB47" />
      <circle cx="57" cy="57" r="7" fill="#F9F4EB47" />
      <circle cx="95" cy="57" r="11" fill="#F9F4EB" />
      <circle cx="133" cy="57" r="7" fill="#F9F4EB47" />
      <circle cx="171" cy="57" r="7" fill="#F9F4EB47" />
      <circle cx="209" cy="57" r="7" fill="#F9F4EB47" />
      <circle cx="247" cy="57" r="7" fill="#F9F4EB47" />
      <circle cx="285" cy="57" r="7" fill="#F9F4EB47" />
      <circle cx="323" cy="57" r="7" fill="#F9F4EB47" />
      <circle cx="361" cy="57" r="7" fill="#F9F4EB47" />
      <circle cx="19" cy="95" r="7" fill="#F9F4EB47" />
      <circle cx="57" cy="95" r="7" fill="#F9F4EB47" />
      <circle cx="95" cy="95" r="7" fill="#F9F4EB47" />
      <circle cx="133" cy="95" r="7" fill="#F9F4EB47" />
      <circle cx="171" cy="95" r="7" fill="#F9F4EB47" />
      <circle cx="209" cy="95" r="7" fill="#F9F4EB47" />
      <circle cx="247" cy="95" r="7" fill="#F9F4EB47" />
      <circle cx="285" cy="95" r="7" fill="#F9F4EB47" />
      <circle cx="323" cy="95" r="11" fill="#F9F4EB" />
      <circle cx="361" cy="95" r="7" fill="#F9F4EB47" />
      <circle cx="19" cy="133" r="7" fill="#F9F4EB47" />
      <circle cx="57" cy="133" r="7" fill="#F9F4EB47" />
      <circle cx="95" cy="133" r="7" fill="#F9F4EB47" />
      <circle cx="133" cy="133" r="7" fill="#F9F4EB47" />
      <circle cx="171" cy="133" r="7" fill="#F9F4EB47" />
      <circle cx="209" cy="133" r="11" fill="#F9F4EB" />
      <circle cx="247" cy="133" r="7" fill="#F9F4EB47" />
      <circle cx="285" cy="133" r="7" fill="#F9F4EB47" />
      <circle cx="323" cy="133" r="7" fill="#F9F4EB47" />
      <circle cx="361" cy="133" r="7" fill="#F9F4EB47" />
      <circle cx="19" cy="171" r="7" fill="#F9F4EB47" />
      <circle cx="57" cy="171" r="11" fill="#F9F4EB" />
      <circle cx="95" cy="171" r="7" fill="#F9F4EB47" />
      <circle cx="133" cy="171" r="7" fill="#F9F4EB47" />
      <circle cx="171" cy="171" r="7" fill="#F9F4EB47" />
      <circle cx="209" cy="171" r="7" fill="#F9F4EB47" />
      <circle cx="247" cy="171" r="7" fill="#F9F4EB47" />
      <circle cx="285" cy="171" r="7" fill="#F9F4EB47" />
      <circle cx="323" cy="171" r="7" fill="#F9F4EB47" />
      <circle cx="361" cy="171" r="7" fill="#F9F4EB47" />
      <circle cx="19" cy="209" r="7" fill="#F9F4EB47" />
      <circle cx="57" cy="209" r="7" fill="#F9F4EB47" />
      <circle cx="95" cy="209" r="7" fill="#F9F4EB47" />
      <circle cx="133" cy="209" r="7" fill="#F9F4EB47" />
      <circle cx="171" cy="209" r="7" fill="#F9F4EB47" />
      <circle cx="209" cy="209" r="7" fill="#F9F4EB47" />
      <circle cx="247" cy="209" r="7" fill="#F9F4EB47" />
      <circle cx="285" cy="209" r="7" fill="#F9F4EB47" />
      <circle cx="323" cy="209" r="7" fill="#F9F4EB47" />
      <circle cx="361" cy="209" r="11" fill="#F9F4EB" />
      <circle cx="19" cy="247" r="11" fill="#F9F4EB" />
      <circle cx="57" cy="247" r="7" fill="#F9F4EB47" />
      <circle cx="95" cy="247" r="7" fill="#F9F4EB47" />
      <circle cx="133" cy="247" r="11" fill="#F9F4EB" />
      <circle cx="171" cy="247" r="7" fill="#F9F4EB47" />
      <circle cx="209" cy="247" r="7" fill="#F9F4EB47" />
      <circle cx="247" cy="247" r="7" fill="#F9F4EB47" />
      <circle cx="285" cy="247" r="7" fill="#F9F4EB47" />
      <circle cx="323" cy="247" r="7" fill="#F9F4EB47" />
      <circle cx="361" cy="247" r="7" fill="#F9F4EB47" />
    </svg>
  );
}

function WaveBars() {
  return (
    <div className="flex flex-col gap-4.5 px-10 pt-10">
      <p className="text-[13px] leading-4 tracking-[0.02em] text-[#F9F4EB]">
        Wave on wave, weighted, tested.
      </p>
      <div className="flex flex-col gap-1.5">
        <div className="h-5.5 w-[62%] shrink-0 bg-[#F9F4EB] opacity-35" />
        <div className="h-5.5 w-[84%] shrink-0 bg-[#F9F4EB]" />
      </div>
      <div className="flex flex-col gap-1.5">
        <div className="h-5.5 w-[76%] shrink-0 bg-[#F9F4EB] opacity-35" />
        <div className="h-5.5 w-[58%] shrink-0 bg-[#F9F4EB]" />
      </div>
      <div className="flex flex-col gap-1.5">
        <div className="h-5.5 w-[70%] shrink-0 bg-[#F9F4EB] opacity-35" />
        <div className="h-5.5 w-[72%] shrink-0 bg-[#F9F4EB]" />
      </div>
      <div className="flex flex-col gap-1.5">
        <div className="h-5.5 w-[48%] shrink-0 bg-[#F9F4EB] opacity-35" />
        <div className="h-5.5 w-[52%] shrink-0 bg-[#F9F4EB]" />
      </div>
    </div>
  );
}

function HeroPanels() {
  return (
    <section className="grid h-[560px] grid-cols-3">
      <div className="flex flex-col justify-between bg-[#5E8A74] p-5">
        <div className="flex h-[306px] flex-col items-center justify-between px-5 pt-6">
          <p className="text-center text-[14px] leading-4 text-[#F9F4EB]">
            Every dot is a person. 9 said price.
          </p>
          <PersonDots />
        </div>
        <div className="flex w-[320px] flex-col gap-2 bg-[#FCFAF5] px-4.5 py-4 text-[#14473A]">
          <p className="text-[14px] leading-4.5">Open-end · coded</p>
          <p className="text-[18px] leading-6.5">&ldquo;Bills went up again and nobody explained why.&rdquo;</p>
          <p className="text-[14px] leading-4.5">Coded to Price · 31% of switchers</p>
        </div>
      </div>
      <div className="flex flex-col justify-between bg-[#7895A8] p-5">
        <div className="h-[328px]">
          <WaveBars />
        </div>
        <div className="flex w-[340px] flex-col gap-2 bg-[#FCFAF5] px-4.5 py-4">
          <p className="text-[14px] leading-4.5">Unaided awareness · W3 → W4</p>
          <div className="flex items-center justify-between text-[15px]">
            <span>Scotland</span>
            <span className="text-[#3D6A5E]">42% A</span>
          </div>
          <div className="h-1.5 bg-[#E7E1D4]">
            <div className="h-full w-[62%] bg-[#14473A]" />
          </div>
          <div className="flex items-center justify-between text-[15px]">
            <span>North East</span>
            <span className="text-[#3D6A5E]">sig letter when it differs</span>
          </div>
          <div className="h-1.5 bg-[#E7E1D4]">
            <div className="h-full w-[40%] bg-[#C9B48F]" />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between bg-[#C9B48F] p-5">
        <div className="flex h-[270px] flex-col justify-end px-6 pb-6">
          <p className="text-[16px] leading-5 text-[#14473A]">Findings written up for you.</p>
        </div>
        <div className="flex w-[300px] flex-col gap-1 bg-[#FCFAF5] px-4.5 py-4">
          <p className="text-[14px] leading-4.5">Report · key finding</p>
          <p className="text-[20px] leading-6">+11 pts</p>
          <p className="text-[14px] leading-4.5">42% in Scotland comes from 89 respondents. Open any one to see their answers.</p>
        </div>
      </div>
    </section>
  );
}

const steps = [
  ['01', 'Upload', 'Drop in a survey file from SPSS, Stata, Excel or a Qualtrics export. Labels and weights come with it.'],
  ['02', 'Clean', 'Speeders, routing faults and missing data get flagged before they reach a table.'],
  ['03', 'Ask', 'Ask for weighted tables, nets, sig tests and coded open ends in plain English.'],
  ['04', 'Deliver', 'Banner books, decks and reports, with every number linked to the respondents behind it.'],
];

const uses = [
  ['01', 'Brand tracking', 'Fuse waves, rake to targets and rerun the book. Wave-on-wave sig flags included.', false],
  ['02', 'Concept testing', 'Monadic or sequential, with top-2 box nets and drivers in minutes.', false],
  ['03', 'Pricing', 'Van Westendorp and Gabor-Granger without the spreadsheet gymnastics.', false],
  ['04', 'MaxDiff & conjoint', 'Run MaxDiff and conjoint on your own data, with no extra tools.', false],
  ['05', 'Open-end coding', 'Open ends coded into themes you can edit, ready to cut by any group.', false],
  ['06', 'Agency tab books', 'Hundreds of tables, Excel and PowerPoint out. Same spec every wave.', true],
] as const;

const releases = [
  ['20 Oct 2026', 'v0.5.1', 'Filters, comparisons, and stacking', 'A filter stays on that run. Stack and append find Merge Datasets.'],
  ['19 Oct 2026', 'v0.5.0', 'The new agent is on for every workspace', 'Microsoft sign-in now asks for your email only once.'],
  ['18 Oct 2026', 'v0.4.9', 'Tables, nets, and the columns you named', 'Nets hold on re-run and tables keep your column names.'],
];

export function LandingPage() {
  return (
    <PaperShell>
      <section className="flex flex-col items-start gap-7 px-10 pt-14 pb-12">
        <p className="rounded-[999px] border border-[#14473A] px-3.5 py-1.5 text-[16px] leading-5">
          Works with SPSS, Stata, Excel, CSV and Qualtrics exports
        </p>
        <h1 className="max-w-[841px] text-[96px] leading-24 tracking-[-0.045em]">
          Every number, traced to the people behind it
        </h1>
        <p className="w-175 text-[22px] leading-8 text-[#3D6A5E]">
          Upload your survey data and ask in plain English. Tensr builds the weighted tables, codes the open ends and writes up the findings, and every number links back to the people who gave it.
        </p>
        <form action={APP_LOGIN} method="get" className="flex w-full max-w-[720px] flex-wrap pt-1.5">
          <label className="sr-only" htmlFor="hero-email">
            Work email
          </label>
          <input
            id="hero-email"
            type="email"
            name="email"
            required
            placeholder="What's your work email?"
            className="h-17 w-110 border border-[#14473A] bg-[#FCFAF5] px-5.5 text-[20px] leading-6 text-[#14473A] placeholder:text-[#14473A]/70"
          />
          <button type="submit" className="flex h-17 items-center gap-3.5 bg-[#14473A] px-6.5 text-[20px] leading-6 text-[#F9F4EB]">
            Start free trial
            <Arrow light />
          </button>
        </form>
      </section>

      <HeroPanels />

      <section className="flex flex-col gap-14 px-10 pt-10 pb-24">
        <SectionRule left="Works with your stack" />
        <h2 className="text-center text-[52px] leading-14.5 tracking-[-0.035em]">
          Bring your data
          <br />
          from anywhere
        </h2>
        <div className="flex gap-2">
          <div className="flex grow basis-0 flex-col gap-2">
            {[
              ['Stata', false],
              ['Qualtrics exports', false],
              ['SPSS', false],
            ].map(([label, soon]) => (
              <div key={String(label)} className="flex h-30 flex-col items-center justify-center bg-[#EEE8DC]">
                <p className="text-[30px] leading-9 tracking-[-0.02em]">{label}</p>
                {soon ? <p className="text-[14px] text-[#3D6A5E]">Coming soon</p> : null}
              </div>
            ))}
          </div>
          <div className="flex grow-2 basis-0 flex-col justify-end gap-2 bg-[#EEE8DC] p-9">
            <p className="text-[120px] leading-27.5 tracking-[-0.05em]">83</p>
            <p className="text-[20px] leading-6">analyses, from crosstabs and nets to regression and SEM</p>
          </div>
          <div className="flex grow basis-0 flex-col gap-2">
            <div className="flex h-30 items-center justify-center bg-[#EEE8DC] text-[30px] tracking-[-0.02em]">
              Excel
            </div>
            <div className="flex h-30 items-center justify-center bg-[#EEE8DC] text-[30px] tracking-[-0.02em]">
              PowerPoint
            </div>
            <div className="flex h-30 flex-col justify-center gap-1 bg-[#14473A] px-6 text-[#F9F4EB]">
              <p className="text-[30px] leading-9 tracking-[-0.02em]">1 project</p>
              <p className="text-[15px] leading-4.5 text-[#BFD3C8]">data to deck</p>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-14 px-10 pb-30">
        <SectionRule left="How it works" />
        <div className="flex gap-10">
          {steps.map(([index, title, body]) => (
            <div key={index} className="flex grow basis-0 flex-col gap-3.5">
              <p className="text-[88px] leading-22 tracking-[-0.05em]">{index}</p>
              <p className="text-[30px] leading-9 tracking-[-0.02em]">{title}</p>
              <p className="text-[18px] leading-6.75 text-[#3D6A5E]">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <WorkspaceSection />

      <section className="flex flex-col gap-12 px-10 pb-30">
        <SectionRule left="Why teams switch" />
        <h2 className="w-205 text-[56px] leading-14.5 tracking-[-0.04em]">
          The rigour of SPSS and Q, without the week of syntax.
        </h2>
        <div className="flex gap-2">
          {[
            ['No syntax', 'Just ask', 'Type the question, get the weighted, sig-tested table and the syntax behind it.', 'bg-[#14473A] text-[#F9F4EB]', 'text-[#F9F4EB]/80'],
            ['Rerun a wave', '1 click', "Last wave's banner book, on this wave's data.", 'bg-[#EEE8DC]', 'text-[#3D6A5E]'],
            ['Traceable', 'Every cell', 'Click any number to see the respondents and the syntax behind it.', 'bg-[#EEE8DC]', 'text-[#3D6A5E]'],
            ['Your files', 'Any file in', 'SPSS, Stata, Excel or CSV. Labels, missing codes and weights come across intact.', 'bg-[#C9B48F]', 'text-[#14473A]'],
          ].map(([kicker, title, body, card, kickerClass]) => (
            <div key={title} className={`flex h-75 grow basis-0 flex-col justify-between p-7 ${card}`}>
              <p className={`text-[15px] leading-4.5 ${kickerClass}`}>{kicker}</p>
              <div className="flex flex-col gap-2.5">
                <p className="text-[72px] leading-18 tracking-[-0.05em]">{title}</p>
                <p className="text-[16px] leading-5.75">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-12 px-10 pb-30">
        <SectionRule left="Use cases" />
        <div className="flex items-end justify-between gap-10">
          <h2 className="w-225 shrink-0 text-[56px] leading-14.5 tracking-[-0.04em]">
            Built for the studies you already run
          </h2>
          <p className="w-95 shrink-0 text-[18px] leading-6.75 text-[#3D6A5E]">
            From a one-off concept test to a tracker on its twentieth wave.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {uses.map(([index, title, body, dark]) => (
            <div
              key={index}
              className={`flex w-[calc(33.33%-6px)] flex-col gap-3.5 px-7 pt-7 pb-8 ${dark ? 'bg-[#14473A] text-[#F9F4EB]' : 'bg-[#EEE8DC]'}`}
            >
              <p className={`text-[15px] leading-4.5 ${dark ? 'text-[#F9F4EB]/80' : 'text-[#3D6A5E]'}`}>{index}</p>
              <p className="text-[30px] leading-9 tracking-[-0.02em]">{title}</p>
              <p className={`text-[16px] leading-6 ${dark ? 'text-[#F9F4EB]/85' : 'text-[#3D6A5E]'}`}>{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-12 px-10 pb-30">
        <SectionRule left="A wave" right="What the product does" />
        <div className="flex h-115 gap-2">
          <div className="flex w-115 shrink-0 flex-col justify-between bg-[#7895A8] p-8 text-[#F9F4EB]">
            <p className="text-[15px] leading-4.5">One project</p>
            <div className="flex flex-col gap-3">
              <p className="text-[56px] leading-14.5 tracking-[-0.04em]">File in. Tables out.</p>
              <p className="text-[18px] leading-6.5">
                A .sav or spreadsheet, weighted and bannered in the same project.
              </p>
            </div>
          </div>
          <ol className="flex grow basis-0 flex-col justify-between bg-[#EEE8DC] p-10">
            {[
              ['01', 'Bring the file in', 'Upload a .sav, .csv, or .xlsx. Labels and missing codes come with a .sav.'],
              ['02', 'Weight it', 'Rake to targets. The file you uploaded stays.'],
              ['03', 'Banner it', 'Column percents, nets, and significance letters when a contrast is significant.'],
              ['04', 'Export it', 'Excel or PowerPoint. Open a cell to see the respondents behind it.'],
            ].map(([index, title, body]) => (
              <li key={index} className="flex gap-6">
                <p className="w-10 shrink-0 text-[15px] leading-5.5 text-[#3D6A5E]">{index}</p>
                <div>
                  <p className="text-[22px] leading-7">{title}</p>
                  <p className="text-[16px] leading-6 text-[#3D6A5E]">{body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="flex flex-col gap-12 px-10 pb-30">
        <SectionRule left="Security" />
        <div className="flex items-end justify-between gap-10">
          <h2 className="w-205 shrink-0 text-[56px] leading-14.5 tracking-[-0.04em]">Your data stays yours.</h2>
          <Link href="/security" className="flex items-center gap-2 pb-2 text-[17px] leading-5.5 underline">
            Read about security
            <Arrow />
          </Link>
        </div>
        <div className="flex gap-2">
          {[
            ['At rest', 'AES-256', 'Every dataset is encrypted where it is stored.', 'bg-[#14473A] text-[#F9F4EB]', 'text-[#F9F4EB]/80'],
            ['In transit', 'HTTPS', 'Files and results only move over encrypted connections.', 'bg-[#EEE8DC]', 'text-[#3D6A5E]'],
            ['Training', 'Private', 'Tensr never trains models on your data.', 'bg-[#EEE8DC]', 'text-[#3D6A5E]'],
            ['Team sign-in', 'By code', 'Team workspaces sign in with an emailed one-time code.', 'bg-[#C9B48F]', 'text-[#14473A]'],
          ].map(([kicker, title, body, card, kickerClass]) => (
            <div key={title} className={`flex h-60 grow basis-0 flex-col justify-between p-7 ${card}`}>
              <p className={`text-[15px] leading-4.5 ${kickerClass}`}>{kicker}</p>
              <div className="flex flex-col gap-2.5">
                <p className="text-[56px] leading-14.5 tracking-[-0.05em]">{title}</p>
                <p className="text-[16px] leading-5.75">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-10 px-10 pb-30">
        <SectionRule left="The latest" right="Changelog" />
        <div className="flex items-end justify-between gap-10">
          <h2 className="w-205 shrink-0 text-[56px] leading-14.5 tracking-[-0.04em]">Shipped this month.</h2>
          <Link href="/changelog" className="flex items-center gap-2 pb-2 text-[17px] leading-5.5 underline">
            See all releases
            <Arrow />
          </Link>
        </div>
        <div className="flex gap-2">
          {releases.map(([date, version, title, body]) => (
            <Link key={version} href="/changelog" className="flex h-58 grow basis-0 flex-col justify-between bg-[#EEE8DC] p-7">
              <div className="flex justify-between text-[15px] leading-4.5 text-[#3D6A5E]">
                <span>{date}</span>
                <span>{version}</span>
              </div>
              <div className="flex flex-col gap-2.5">
                <p className="text-[28px] leading-8 tracking-[-0.03em]">{title}</p>
                <p className="text-[16px] leading-5.75 text-[#3D6A5E]">{body}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-10 bg-[#14473A] px-10 pt-24 pb-26 text-[#F9F4EB]">
        <h2 className="w-275 text-[120px] leading-28 tracking-[-0.055em]">Bring a dataset. Leave with the tables.</h2>
        <div className="flex items-end justify-between gap-10">
          <p className="w-130 shrink-0 text-[20px] leading-7.5 text-[#F9F4EB]/85">
            Send us last wave&apos;s file and we&apos;ll rebuild your tab book in Tensr on the call.
          </p>
          <Link href="/demo" className="flex h-14 items-center bg-[#F9F4EB] px-6 text-[17px] leading-5.5 text-[#14473A]">
            Book a demo →
          </Link>
        </div>
      </section>
    </PaperShell>
  );
}
