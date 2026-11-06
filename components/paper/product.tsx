import Link from 'next/link';
import type { ReactNode } from 'react';
import { mobile } from '@/components/paper/mobile';
import { MobileWorkspace } from '@/components/paper/mobile-workspace';
import {
  EvidencePhone,
  ResponsesPhone,
  TablesPhone,
  ThemesPhone,
} from '@/components/paper/mobile-product-screens';
import { SwipeRow } from '@/components/paper/swipe-row';
import { APP_LOGIN, Arrow, PaperShell, SectionRule } from '@/components/paper/shell';

const analyses = [
  ['01', 'Tabulation', 'Crosstabs, banner books, nets, means and Top 2 / Bottom 2 box on scales.'],
  ['02', 'Significance', 'Column proportions, t-tests, chi-square, ANOVA and post-hoc.'],
  ['03', 'Regression', 'Linear, logistic and ordinal models with diagnostics.'],
  ['04', 'Drivers', 'Key driver and relative importance analysis.'],
  [
    '05',
    'Choice modelling',
    'MaxDiff and conjoint, as counts, multinomial logit, and hierarchical Bayes.',
  ],
  ['06', 'Segmentation', 'Factor, cluster and correspondence analysis.'],
  ['07', 'Pricing', 'Van Westendorp and Gabor-Granger curves.'],
] as const;

const details = [
  [
    'Analysis report',
    'Checked, then explained',
    'Assumption checks, effect sizes, post-hoc tests and a plain-language read.',
  ],
  [
    'Exports',
    'Out in the shapes that exist',
    'Banners go to Excel or PowerPoint. A write-up goes to CSV, Markdown, or the browser print dialog. A .sav comes back with an .sps weight file.',
  ],
  [
    'Weights',
    'Versions, not overwrites',
    'Rake to targets as a new weight version. The one you uploaded stays, and so does the earlier weight.',
  ],
  ['Charts', 'From the table', 'Bar charts from a table, and a chart you can export.'],
  [
    'Notebook',
    'R, on the open file',
    'R cells load the open dataset. An R script is there for the analyses that have one.',
  ],
  [
    'Collaboration',
    'The team, live',
    'Live presence. Comment on a cell, a chart, or a section, reply, and resolve. Share a session by link as a viewer or an editor.',
  ],
  [
    'Plugins',
    'Build, publish, earn',
    'Write a toolkit in Python, R, JavaScript or TypeScript. The agent and ⌘K can use it, and you can charge for it. Plugins run with no network access.',
  ],
] as const;

function PaperScreen({
  src,
  caption,
  mobile,
  stage,
}: {
  src: string;
  caption: string;
  mobile: ReactNode;
  stage: string;
}) {
  return (
    <figure className="overflow-hidden rounded-[12px] border border-[#14473A33] bg-white mobile:-mx-5 mobile:rounded-none mobile:border-0">
      <img src={src} alt="" className="block w-full mobile:hidden" />
      <div className="hidden px-4 py-4 mobile:block" style={{ backgroundColor: stage }}>
        {mobile}
      </div>
      <figcaption className="bg-[#EEE8DC] px-5 py-3 text-[15px] leading-5 text-[#3D6A5E] mobile:hidden">
        {caption}
      </figcaption>
    </figure>
  );
}

function WorkspaceFrame() {
  return (
    <section className="bg-[#5E8A74] px-10 pt-10 mobile:px-4 mobile:pt-4">
      <div className="overflow-hidden rounded-t-[12px] bg-[#F1F1EE] shadow-[0_24px_60px_#14473A40] mobile:hidden">
        <img src="/paper/product/5-tables.png" alt="" className="block w-full" />
      </div>
      <div className="hidden mobile:block">
        <MobileWorkspace />
      </div>
      <div className="flex flex-wrap justify-between gap-2 bg-[#14473A] px-2 py-4.5 text-[17px] leading-5.5 text-[#F9F4EB] mobile:justify-start mobile:gap-x-3 mobile:px-3">
        {[
          'Sources',
          'Responses',
          'Chat agent',
          'Tables',
          'Report',
          'Traceability',
          '87 analyses',
        ].map((item, index) => (
          <span
            key={item}
            className="flex flex-1 items-center justify-center gap-4 mobile:min-h-11 mobile:flex-none"
          >
            {index > 0 ? <span className="text-[#BFD3C8] mobile:hidden">·</span> : null}
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}

function FeatureRow({ items }: { items: readonly [string, string][] }) {
  return (
    <div className="flex flex-wrap gap-10 mobile:flex-col mobile:gap-0">
      {items.map(([title, body]) => (
        <div
          key={title}
          className="flex min-w-[260px] grow basis-0 flex-col gap-3 border-t border-[#14473A33] pt-5 mobile:min-w-0 mobile:basis-auto mobile:gap-1 mobile:py-3 mobile:pt-3"
        >
          <h3 className="text-[30px] leading-9 tracking-[-0.02em] text-[#14473A] mobile:text-[17px] mobile:leading-6">
            {title}
          </h3>
          <p className="text-[18px] leading-6.75 text-[#3D6A5E] mobile:text-[15px] mobile:leading-5">
            {body}
          </p>
        </div>
      ))}
    </div>
  );
}

export function ProductPage() {
  return (
    <PaperShell>
      <section className={`flex flex-col items-start gap-7 px-10 pb-16 pt-14 ${mobile.hero}`}>
        <p className="rounded-[999px] border border-[#14473A] px-3.5 py-1.5 text-[16px] leading-5">
          Product · The workspace
        </p>
        <h1
          className={`whitespace-pre-wrap text-[96px] leading-24 tracking-[-0.045em] text-[#14473A] ${mobile.h1}`}
        >
          From raw responses to the{'\n'}client deck, in one place
        </h1>
        <div className={`flex w-full items-end justify-between gap-10 ${mobile.row}`}>
          <p className={`w-175 shrink-0 text-[22px] leading-8 text-[#3D6A5E] ${mobile.lede}`}>
            Tensr is the analysis workspace for survey data. Bring the file in, clean and weight it,
            ask for the tables you need and ship the report, with every number traceable to the
            people who gave it.
          </p>
          <div className={`flex shrink-0 pt-1.5 ${mobile.pair}`}>
            <Link
              href={APP_LOGIN}
              className={`flex h-17 items-center gap-3.5 bg-[#14473A] px-6.5 text-[20px] leading-6 text-[#F9F4EB] ${mobile.primary}`}
            >
              Start free trial
              <Arrow light />
            </Link>
            <Link
              href="/demo"
              className={`flex h-17 items-center border-y border-r border-[#14473A] px-6.5 text-[20px] leading-6 ${mobile.secondary}`}
            >
              Book a demo
            </Link>
          </div>
        </div>
      </section>

      <WorkspaceFrame />

      <section className={`flex flex-col gap-12 px-10 pb-30 pt-16 ${mobile.section} mobile:pt-8`}>
        <SectionRule left="01 · Sources" right="Bring data in" />
        <div className={`flex items-end justify-between gap-10 ${mobile.row}`}>
          <h2 className={`w-205 shrink-0 text-[56px] leading-14.5 tracking-[-0.04em] ${mobile.h2}`}>
            Every wave, every market, one dataset you can trust
          </h2>
          <p className={`w-105 shrink-0 text-[18px] leading-6.75 text-[#3D6A5E] ${mobile.lede}`}>
            Connect the tools you already use, or drop in a file. Tensr reads them. Prolific
            fielding and live Qualtrics sync are coming soon.
          </p>
        </div>
        <FeatureRow
          items={[
            [
              'Bring data in',
              '.sav, .dta, CSV, Excel, Triple-S and Parquet. Labels, missing codes and measurement levels come across intact.',
            ],
            [
              'Merge waves',
              'Join or stack two files, or fuse three or more. You see every variable it re-mapped.',
            ],
            [
              'Levelled data',
              'Loops and hierarchies, like brands per respondent, analysed at the right level without reshaping by hand.',
            ],
            [
              'The file stays the file',
              'A weight, a recode, or a merge saves a new version. The file you uploaded stays.',
            ],
          ]}
        />
      </section>

      <section className={`flex flex-col gap-12 px-10 pb-30 ${mobile.section}`}>
        <SectionRule left="02 · Responses" right="Clean and prepare" />
        <div className={`flex items-end justify-between gap-10 ${mobile.row}`}>
          <h2 className={`w-205 shrink-0 text-[56px] leading-14.5 tracking-[-0.04em] ${mobile.h2}`}>
            Clean it before it reaches a table
          </h2>
          <p className={`w-105 shrink-0 text-[18px] leading-6.75 text-[#3D6A5E] ${mobile.lede}`}>
            A live sheet of your data with the checks already run. Fix it here once and every table
            downstream picks it up.
          </p>
        </div>
        <FeatureRow
          items={[
            ['Sheet and filters', 'Labels or values, click a code to filter.'],
            ['Weighting', 'Rake to targets, see the effective base.'],
            ['Quality checks', 'Speeders and routing faults flagged early.'],
          ]}
        />
        <PaperScreen
          src="/paper/product/4a-responses.png"
          caption="Responses, in a sample project."
          stage="#7895A8"
          mobile={<ResponsesPhone />}
        />
      </section>

      <section className={`flex flex-col gap-12 px-10 pb-30 ${mobile.section}`}>
        <SectionRule left="Open-end coding" right="In about a minute" />
        <div className={`flex items-end justify-between gap-10 ${mobile.row}`}>
          <h2 className={`w-205 shrink-0 text-[56px] leading-14.5 tracking-[-0.04em] ${mobile.h2}`}>
            Codeframes you can edit, usable as a banner
          </h2>
          <p className={`w-105 shrink-0 text-[18px] leading-6.75 text-[#3D6A5E] ${mobile.lede}`}>
            Hundreds of open ends coded into themes in about a minute. The AI proposes a code frame
            you can edit, then the themes are ready to cut by any group.
          </p>
        </div>
        <PaperScreen
          src="/paper/product/4g-themes.png"
          caption="Themes, in a sample project."
          stage="#C9B48F"
          mobile={<ThemesPhone />}
        />
      </section>

      <section className={`flex flex-col gap-12 px-10 pb-30 ${mobile.section}`}>
        <SectionRule left="03 · Chat agent" right="Ask in plain English" />
        <div className={`flex items-end justify-between gap-10 ${mobile.row}`}>
          <h2 className={`w-205 shrink-0 text-[56px] leading-14.5 tracking-[-0.04em] ${mobile.h2}`}>
            An analyst that plans first, asks when it is not sure, and shows its working
          </h2>
          <p className={`w-105 shrink-0 text-[18px] leading-6.75 text-[#3D6A5E] ${mobile.lede}`}>
            Type the question the client asked. The agent picks the method and tells you what it
            did, step by step.
          </p>
        </div>
        <div className="flex gap-2 mobile:hidden">
          {[
            [
              'Mode 1',
              'Ask',
              'Quick answers about the data. Reads, and leaves the file as it is.',
              false,
            ],
            [
              'Mode 2',
              'Plan',
              'Lays out the steps first. You approve or edit before anything runs.',
              false,
            ],
            [
              'Mode 3',
              'Agent',
              'Merges, weights, and builds the book, pausing when a choice is yours.',
              true,
            ],
            [
              'Every mode',
              'Shown',
              'Each step lists the weight, base, and test it used, so you can check it.',
              false,
            ],
          ].map(([kicker, title, body, dark]) => (
            <div
              key={String(title)}
              className={`flex h-65 grow basis-0 flex-col justify-between p-7 ${dark ? 'bg-[#14473A] text-[#F9F4EB]' : 'bg-[#EEE8DC]'}`}
            >
              <p className={`text-[15px] leading-4.5 ${dark ? 'opacity-80' : 'text-[#3D6A5E]'}`}>
                {kicker}
              </p>
              <div className="flex flex-col gap-2.5">
                <p className="text-[56px] leading-14.5 tracking-[-0.05em]">{title}</p>
                <p className={`text-[16px] leading-5.75 ${dark ? 'opacity-85' : 'text-[#3D6A5E]'}`}>
                  {body}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="hidden mobile:-mx-5 mobile:block">
          <SwipeRow>
            {[
              [
                'Mode 1',
                'Ask',
                'Quick answers about the data. Reads, and leaves the file as it is.',
                false,
              ],
              [
                'Mode 2',
                'Plan',
                'Lays out the steps first. You approve or edit before anything runs.',
                false,
              ],
              [
                'Mode 3',
                'Agent',
                'Merges, weights, and builds the book, pausing when a choice is yours.',
                true,
              ],
              [
                'Every mode',
                'Shown',
                'Each step lists the weight, base, and test it used, so you can check it.',
                false,
              ],
            ].map(([kicker, title, body, dark]) => (
              <div
                key={String(title)}
                className={`flex min-h-[220px] flex-col justify-between p-5 ${dark ? 'bg-[#14473A] text-[#F9F4EB]' : 'bg-[#EEE8DC]'}`}
              >
                <p className={`text-[15px] leading-4.5 ${dark ? 'opacity-80' : 'text-[#3D6A5E]'}`}>
                  {kicker}
                </p>
                <div className="flex flex-col gap-2">
                  <p className="text-[40px] leading-none tracking-[-0.05em]">{title}</p>
                  <p className={`text-[15px] leading-5 ${dark ? 'opacity-85' : 'text-[#3D6A5E]'}`}>
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </SwipeRow>
        </div>
      </section>

      <section className={`flex flex-col gap-12 px-10 pb-30 ${mobile.section}`}>
        <SectionRule left="04 · Tables" right="Banner books" />
        <div className={`flex items-end justify-between gap-10 ${mobile.row}`}>
          <h2 className={`w-205 shrink-0 text-[56px] leading-14.5 tracking-[-0.04em] ${mobile.h2}`}>
            The tab book, the way you&apos;d spec it
          </h2>
          <p className={`w-105 shrink-0 text-[18px] leading-6.75 text-[#3D6A5E] ${mobile.lede}`}>
            Drag a stub and a banner or just describe the table. Save the spec and rerun it on the
            next wave&apos;s data. Excel and PowerPoint take the grid you signed off.
          </p>
        </div>
        <PaperScreen
          src="/paper/product/5-tables.png"
          caption="Tables, in a sample project."
          stage="#5E8A74"
          mobile={<TablesPhone />}
        />
      </section>

      <section className={`flex flex-col gap-12 px-10 pb-30 ${mobile.section}`}>
        <SectionRule left="05 · Report" right="Deliver" />
        <div className={`flex items-end justify-between gap-10 ${mobile.row}`}>
          <h2 className={`w-205 shrink-0 text-[56px] leading-14.5 tracking-[-0.04em] ${mobile.h2}`}>
            The book you signed off, ready to send
          </h2>
          <p className={`w-105 shrink-0 text-[18px] leading-6.75 text-[#3D6A5E] ${mobile.lede}`}>
            Excel and PowerPoint for the banner. CSV, Markdown, or print for the write-up. You
            export the banner you signed off.
          </p>
        </div>
      </section>

      <section
        className={`flex flex-col gap-12 px-10 pb-30 mobile:bg-[#14473A] mobile:text-[#F9F4EB] mobile:[&>div:first-child]:border-[#F9F4EB] ${mobile.section}`}
      >
        <SectionRule left="06 · Traceability" right="Check anything" />
        <div className={`flex items-end justify-between gap-10 ${mobile.row}`}>
          <h2 className={`w-205 shrink-0 text-[56px] leading-14.5 tracking-[-0.04em] ${mobile.h2}`}>
            Open a cell. See the people.
          </h2>
          <p
            className={`w-105 shrink-0 text-[18px] leading-6.75 text-[#3D6A5E] mobile:text-[#D5E4DC] ${mobile.lede}`}
          >
            Click any cell and see the respondents, rows, weight and test that produced it.
          </p>
        </div>
        <PaperScreen
          src="/paper/product/4c-evidence.png"
          caption="Evidence, in a sample project."
          stage="#0E3329"
          mobile={<EvidencePhone />}
        />
      </section>

      <section className={`flex flex-col gap-12 px-10 pb-30 ${mobile.section}`}>
        <SectionRule left="87 analyses" right="⌘K or just ask" />
        <div className={`flex items-end justify-between gap-10 ${mobile.row}`}>
          <h2 className={`w-205 shrink-0 text-[56px] leading-14.5 tracking-[-0.04em] ${mobile.h2}`}>
            The methods you reach for, without the syntax
          </h2>
          <p className={`w-105 shrink-0 text-[18px] leading-6.75 text-[#3D6A5E] ${mobile.lede}`}>
            Run any of them from the ⌘K palette, a dialog, or a sentence in chat. The list is the 87
            documented analyses.
          </p>
        </div>
        <div className="flex flex-wrap gap-2 mobile:hidden">
          {analyses.map(([index, title, body]) => (
            <div
              key={title}
              className="flex w-[calc(25%-6px)] flex-col gap-3.5 bg-[#EEE8DC] px-7 pb-8 pt-7"
            >
              <p className="text-[15px] leading-4.5 text-[#3D6A5E]">{index}</p>
              <h3 className="text-[30px] leading-9 tracking-[-0.02em]">{title}</h3>
              <p className="text-[16px] leading-6 text-[#3D6A5E]">{body}</p>
            </div>
          ))}
          <div className="flex w-[calc(25%-6px)] flex-col justify-between gap-3.5 bg-[#14473A] px-7 pb-8 pt-7 text-[#F9F4EB]">
            <p className="text-[15px] leading-4.5 opacity-80">And more</p>
            <div className="flex flex-col gap-1.5">
              <p className="text-[72px] leading-18 tracking-[-0.05em]">87</p>
              <p className="text-[16px] leading-6 opacity-85">
                Weighting, reliability, and the rest of the documented list.
              </p>
            </div>
          </div>
        </div>
        <div className="hidden mobile:-mx-5 mobile:block">
          <SwipeRow>
            {analyses.map(([index, title, body]) => (
              <div key={title} className="flex min-h-[220px] flex-col gap-3 bg-[#EEE8DC] p-5">
                <p className="text-[15px] leading-4.5 text-[#3D6A5E]">{index}</p>
                <h3 className="text-[28px] leading-8 tracking-[-0.02em]">{title}</h3>
                <p className="text-[15px] leading-5 text-[#3D6A5E]">{body}</p>
              </div>
            ))}
            <div className="flex min-h-[220px] flex-col justify-between bg-[#14473A] p-5 text-[#F9F4EB]">
              <p className="text-[15px] leading-4.5 opacity-80">And more</p>
              <div>
                <p className="text-[64px] leading-none tracking-[-0.05em]">87</p>
                <p className="text-[15px] leading-5 opacity-85">
                  Weighting, reliability, and the rest of the documented list.
                </p>
              </div>
            </div>
          </SwipeRow>
        </div>
      </section>

      <section className={`flex flex-col gap-12 px-10 pb-30 ${mobile.section}`}>
        <SectionRule left="The details" right="Everything else in the box" />
        <div className={`flex items-end justify-between gap-10 ${mobile.row}`}>
          <h2 className={`w-205 shrink-0 text-[56px] leading-14.5 tracking-[-0.04em] ${mobile.h2}`}>
            The parts you check before you trust it
          </h2>
          <p className={`w-105 shrink-0 text-[18px] leading-6.75 text-[#3D6A5E] ${mobile.lede}`}>
            Weights, code, and who changed what, in the same project as the tables.
          </p>
        </div>
        <div className="flex flex-wrap gap-2 mobile:hidden">
          {details.map(([kicker, title, body]) => (
            <div
              key={kicker}
              className="flex w-[calc(25%-6px)] flex-col gap-3.5 bg-[#EEE8DC] px-7 pb-8 pt-7"
            >
              <p className="text-[15px] leading-4.5 text-[#3D6A5E]">{kicker}</p>
              <h3 className="text-[30px] leading-9 tracking-[-0.02em]">{title}</h3>
              <p className="text-[16px] leading-6 text-[#3D6A5E]">{body}</p>
            </div>
          ))}
          <div className="flex w-[calc(25%-6px)] flex-col gap-3.5 bg-[#14473A] px-7 pb-8 pt-7 text-[#F9F4EB]">
            <p className="text-[15px] leading-4.5 opacity-80">Security</p>
            <h3 className="text-[30px] leading-9 tracking-[-0.02em]">
              Encrypted, and never for training
            </h3>
            <p className="text-[16px] leading-6 opacity-85">
              AES-256 at rest, HTTPS in transit, hosted in AWS US East. Tensr never trains models on
              your data.
            </p>
          </div>
        </div>
        <div className="hidden mobile:-mx-5 mobile:block">
          <SwipeRow>
            {details.map(([kicker, title, body]) => (
              <div key={kicker} className="flex min-h-[220px] flex-col gap-3 bg-[#EEE8DC] p-5">
                <p className="text-[15px] leading-4.5 text-[#3D6A5E]">{kicker}</p>
                <h3 className="text-[24px] leading-7 tracking-[-0.02em]">{title}</h3>
                <p className="text-[15px] leading-5 text-[#3D6A5E]">{body}</p>
              </div>
            ))}
            <div className="flex min-h-[220px] flex-col gap-3 bg-[#14473A] p-5 text-[#F9F4EB]">
              <p className="text-[15px] leading-4.5 opacity-80">Security</p>
              <h3 className="text-[24px] leading-7 tracking-[-0.02em]">
                Encrypted, and never for training
              </h3>
              <p className="text-[15px] leading-5 opacity-85">
                AES-256 at rest, HTTPS in transit, hosted in AWS US East. Tensr never trains models
                on your data.
              </p>
            </div>
          </SwipeRow>
        </div>
      </section>

      <section className="flex flex-col gap-10 bg-[#14473A] px-10 pb-26 pt-24 text-[#F9F4EB] mobile:gap-8 mobile:px-5 mobile:pt-12 mobile:pb-16">
        <h2 className={`w-275 text-[120px] leading-28 tracking-[-0.055em] ${mobile.display}`}>
          Run your next wave in Tensr.
        </h2>
        <div className={`flex items-end justify-between gap-10 ${mobile.row}`}>
          <p className={`w-130 shrink-0 text-[20px] leading-7.5 opacity-85 ${mobile.lede}`}>
            <Link href={APP_LOGIN} className="underline decoration-1 underline-offset-2">
              Start a 30-day free trial
            </Link>
            , or send us last wave&apos;s file and we&apos;ll rebuild your tab book in Tensr on the
            call.
          </p>
          <Link
            href="/demo"
            className={`flex h-14 items-center bg-[#F9F4EB] px-6 text-[17px] leading-5.5 text-[#14473A] ${mobile.primary}`}
          >
            Book a demo →
          </Link>
        </div>
      </section>
    </PaperShell>
  );
}
