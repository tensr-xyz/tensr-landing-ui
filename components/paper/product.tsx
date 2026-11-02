import Link from 'next/link';
import { APP_LOGIN, Arrow, PaperShell, SectionRule } from '@/components/paper/shell';

const analyses = [
  ['01', 'Tabulation', 'Crosstabs, banner books, nets, means, and Top 2 box on a 1 to 5, 1 to 7, or 1 to 10 scale.'],
  ['02', 'Significance', 'Column letters on a weighted banner, t-tests, chi-square, and ANOVA.'],
  ['03', 'Regression', 'Linear, logistic, and ordinal models, among the regression pages in the docs.'],
  ['04', 'Drivers', 'Drivers leave out identifiers, free text, and multi-response text.'],
  ['05', 'Choice modelling', 'MaxDiff and conjoint: counts, multinomial logit, and hierarchical Bayes.'],
  ['06', 'Segmentation', 'Factor, cluster, and correspondence analysis.'],
  ['07', 'Pricing', 'Van Westendorp and Gabor-Granger.'],
] as const;

const details = [
  ['Analysis report', 'Checked, then explained', 'A plain-language data quality note, and the test the method prints. Analysis pages include an APA-style write-up.'],
  ['Exports', 'Out in the shapes that exist', 'Banners go to Excel or PowerPoint. A write-up goes to CSV, Markdown, or the browser print dialog. A .sav comes back with an .sps weight file.'],
  ['Weights', 'The file stays put', 'Rake to targets. A weighted table does not change the dataset, and a save keeps the earlier version.'],
  ['Filters', 'On that run', 'A filter used for one analysis stays on that run. Naming two groups keeps a two-group comparison.'],
  ['Notebook', 'R, on the open file', 'R cells load the open dataset. An R script is there for the analyses that have one.'],
  ['Collaboration', 'Teams', 'Teams includes shared workspaces and presence. SAML SSO is not available.'],
  ['Plugins', 'Not a store', 'This version does not charge for a toolkit, and it does not add a method that is not in the product.'],
] as const;

function PaperScreen({ src, caption }: { src: string; caption: string }) {
  return (
    <figure className="overflow-hidden rounded-[12px] border border-[#14473A33] bg-white">
      <img src={src} alt="" className="block w-full" />
      <figcaption className="bg-[#EEE8DC] px-5 py-3 text-[15px] leading-5 text-[#3D6A5E]">{caption}</figcaption>
    </figure>
  );
}

function WorkspaceFrame() {
  return (
    <section className="bg-[#5E8A74] px-10 pt-10">
      <div className="overflow-hidden rounded-t-[12px] bg-[#F1F1EE] shadow-[0_24px_60px_#14473A40]">
        <img src="/paper/product/5-tables.png" alt="" className="block w-full" />
      </div>
      <div className="flex justify-between bg-[#14473A] px-2 py-4.5 text-[17px] leading-5.5 text-[#F9F4EB]">
        {['Sources', 'Responses', 'Chat agent', 'Tables', 'Report', 'Traceability', '83 analyses'].map((item, index) => (
          <span key={item} className="flex flex-1 items-center justify-center gap-4">
            {index > 0 ? <span className="text-[#BFD3C8]">·</span> : null}
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}

function FeatureRow({ items }: { items: readonly [string, string][] }) {
  return (
    <div className="flex gap-10">
      {items.map(([title, body]) => (
        <div key={title} className="flex grow basis-0 flex-col gap-3 border-t border-[#14473A33] pt-5">
          <h3 className="text-[30px] leading-9 tracking-[-0.02em] text-[#14473A]">{title}</h3>
          <p className="text-[18px] leading-6.75 text-[#3D6A5E]">{body}</p>
        </div>
      ))}
    </div>
  );
}

export function ProductPage() {
  return (
    <PaperShell>
      <section className="flex flex-col items-start gap-7 px-10 pb-16 pt-14">
        <p className="rounded-[999px] border border-[#14473A] px-3.5 py-1.5 text-[16px] leading-5">Product · The workspace</p>
        <h1 className="whitespace-pre-wrap text-[96px] leading-24 tracking-[-0.045em] text-[#14473A]">
          From raw responses to the{'\n'}client deck, in one place
        </h1>
        <div className="flex w-full items-end justify-between gap-10">
          <p className="w-175 shrink-0 text-[22px] leading-8 text-[#3D6A5E]">
            Tensr is the analysis workspace for survey data. Bring the file in, clean and weight it, ask for the tables you need and ship the report, with every number traceable to the people who gave it.
          </p>
          <div className="flex shrink-0 pt-1.5">
            <Link href={APP_LOGIN} className="flex h-17 items-center gap-3.5 bg-[#14473A] px-6.5 text-[20px] leading-6 text-[#F9F4EB]">
              Start free trial
              <Arrow light />
            </Link>
            <Link href="/demo" className="flex h-17 items-center border-y border-r border-[#14473A] px-6.5 text-[20px] leading-6">
              Book a demo
            </Link>
          </div>
        </div>
      </section>

      <WorkspaceFrame />

      <section className="flex flex-col gap-12 px-10 pb-30 pt-16">
        <SectionRule left="01 · Sources" right="Bring data in" />
        <div className="flex items-end justify-between gap-10">
          <h2 className="w-205 shrink-0 text-[56px] leading-14.5 tracking-[-0.04em]">Every wave, every market, one dataset you can trust</h2>
          <p className="w-105 shrink-0 text-[18px] leading-6.75 text-[#3D6A5E]">
            Drop in the file you already have. Live Prolific and Qualtrics sync is coming soon. Tensr reads the file. It does not replace the survey tool.
          </p>
        </div>
        <FeatureRow
          items={[
            ['Bring data in', '.sav, .dta, CSV, Excel, Triple-S, and Parquet. Labels, missing codes, and measurement levels come across on a .sav.'],
            ['Merge waves', 'Join or stack files. Stack and append find Merge Datasets, and stacking says when those rows are already in the file.'],
            ['The file stays the file', 'A weight does not change the dataset. A save keeps the earlier version.'],
          ]}
        />
      </section>

      <section className="flex flex-col gap-12 px-10 pb-30">
        <SectionRule left="02 · Responses" right="Clean and prepare" />
        <div className="flex items-end justify-between gap-10">
          <h2 className="w-205 shrink-0 text-[56px] leading-14.5 tracking-[-0.04em]">Clean it before it reaches a table</h2>
          <p className="w-105 shrink-0 text-[18px] leading-6.75 text-[#3D6A5E]">
            The sheet shows the column labels. Blanks stay empty. The data quality note is in plain language.
          </p>
        </div>
        <FeatureRow
          items={[
            ['Labels', 'A .sav keeps variable labels, value labels, and missing codes.'],
            ['Filters', 'A filter used for one analysis stays on that run.'],
            ['Quality', 'The data quality report says what it found, in plain language.'],
          ]}
        />
        <PaperScreen
          src="/paper/product/4a-responses.png"
          caption="Responses layout. The Prolific chip and the cell figures are not on this export. A real capture replaces it later."
        />
      </section>

      <section className="flex flex-col gap-12 px-10 pb-30">
        <SectionRule left="Open ends" right="Keyword lexicon" />
        <div className="flex items-end justify-between gap-10">
          <h2 className="w-205 shrink-0 text-[56px] leading-14.5 tracking-[-0.04em]">An open end stays a keyword match</h2>
          <p className="w-105 shrink-0 text-[18px] leading-6.75 text-[#3D6A5E]">
            Verbatim coding is a keyword lexicon. It is not a model that writes themes. The layout below has the result figures taken off.
          </p>
        </div>
        <PaperScreen
          src="/paper/product/4g-themes.png"
          caption="Themes layout. Percentages, bases, and quotes are omitted."
        />
      </section>

      <section className="flex flex-col gap-12 px-10 pb-30">
        <SectionRule left="03 · Chat agent" right="Ask in plain English" />
        <div className="flex items-end justify-between gap-10">
          <h2 className="w-205 shrink-0 text-[56px] leading-14.5 tracking-[-0.04em]">An analyst that plans first, asks when it is not sure, and shows its working</h2>
          <p className="w-105 shrink-0 text-[18px] leading-6.75 text-[#3D6A5E]">
            Type the question. Ask reads and does not change the file. Plan lays out the steps for you to approve. Agent runs them and pauses when a choice is yours.
          </p>
        </div>
        <div className="flex gap-2">
          {[
            ['Mode 1', 'Ask', 'Quick answers about the data. Reads, and does not change anything.', false],
            ['Mode 2', 'Plan', 'Lays out the steps first. You approve or edit before anything runs.', false],
            ['Mode 3', 'Agent', 'Merges, weights, and builds the book, pausing when a choice is yours.', true],
            ['Every mode', 'Shown', 'Each step lists the weight, base, and test it used, so you can check it.', false],
          ].map(([kicker, title, body, dark]) => (
            <div key={title} className={`flex h-65 grow basis-0 flex-col justify-between p-7 ${dark ? 'bg-[#14473A] text-[#F9F4EB]' : 'bg-[#EEE8DC]'}`}>
              <p className={`text-[15px] leading-4.5 ${dark ? 'opacity-80' : 'text-[#3D6A5E]'}`}>{kicker}</p>
              <div className="flex flex-col gap-2.5">
                <p className="text-[56px] leading-14.5 tracking-[-0.05em]">{title}</p>
                <p className={`text-[16px] leading-5.75 ${dark ? 'opacity-85' : 'text-[#3D6A5E]'}`}>{body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-12 px-10 pb-30">
        <SectionRule left="04 · Tables" right="Banner books" />
        <div className="flex items-end justify-between gap-10">
          <h2 className="w-205 shrink-0 text-[56px] leading-14.5 tracking-[-0.04em]">The banner, with the letters on it</h2>
          <p className="w-105 shrink-0 text-[18px] leading-6.75 text-[#3D6A5E]">
            Column percents, nets, and significance letters. A net stays on that table. Excel and PowerPoint take the grid you signed off.
          </p>
        </div>
        <PaperScreen
          src="/paper/product/5-tables.png"
          caption="Tables layout. Column percents and the side panel are omitted."
        />
      </section>

      <section className="flex flex-col gap-12 px-10 pb-30">
        <SectionRule left="05 · Report" right="Deliver" />
        <div className="flex items-end justify-between gap-10">
          <h2 className="w-205 shrink-0 text-[56px] leading-14.5 tracking-[-0.04em]">The book you signed off, ready to send</h2>
          <p className="w-105 shrink-0 text-[18px] leading-6.75 text-[#3D6A5E]">
            Excel and PowerPoint for the banner. CSV, Markdown, or print for the analysis write-up. There is no live deck that updates while fieldwork is still open.
          </p>
        </div>
      </section>

      <section className="flex flex-col gap-12 px-10 pb-30">
        <SectionRule left="06 · Traceability" right="Check anything" />
        <div className="flex items-end justify-between gap-10">
          <h2 className="w-205 shrink-0 text-[56px] leading-14.5 tracking-[-0.04em]">Open a cell. See the people.</h2>
          <p className="w-105 shrink-0 text-[18px] leading-6.75 text-[#3D6A5E]">
            When provenance is complete, a cell opens the respondents behind that stub and banner. An incomplete run says so.
          </p>
        </div>
        <PaperScreen
          src="/paper/product/4c-evidence.png"
          caption="Evidence layout. The result callout, quotes, and row figures are omitted."
        />
      </section>

      <section className="flex flex-col gap-12 px-10 pb-30">
        <SectionRule left="83 analyses" right="⌘K or just ask" />
        <div className="flex items-end justify-between gap-10">
          <h2 className="w-205 shrink-0 text-[56px] leading-14.5 tracking-[-0.04em]">The methods you reach for, without the syntax</h2>
          <p className="w-105 shrink-0 text-[18px] leading-6.75 text-[#3D6A5E]">
            Run one from the ⌘K palette, a dialog, or a sentence in chat. The list is the 83 documented analyses.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {analyses.map(([index, title, body]) => (
            <div key={title} className="flex w-[calc(25%-6px)] flex-col gap-3.5 bg-[#EEE8DC] px-7 pb-8 pt-7">
              <p className="text-[15px] leading-4.5 text-[#3D6A5E]">{index}</p>
              <h3 className="text-[30px] leading-9 tracking-[-0.02em]">{title}</h3>
              <p className="text-[16px] leading-6 text-[#3D6A5E]">{body}</p>
            </div>
          ))}
          <div className="flex w-[calc(25%-6px)] flex-col justify-between gap-3.5 bg-[#14473A] px-7 pb-8 pt-7 text-[#F9F4EB]">
            <p className="text-[15px] leading-4.5 opacity-80">And more</p>
            <div className="flex flex-col gap-1.5">
              <p className="text-[72px] leading-18 tracking-[-0.05em]">83</p>
              <p className="text-[16px] leading-6 opacity-85">Weighting, reliability, and the rest of the documented list.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-12 px-10 pb-30">
        <SectionRule left="The details" right="Everything else in the box" />
        <div className="flex items-end justify-between gap-10">
          <h2 className="w-205 shrink-0 text-[56px] leading-14.5 tracking-[-0.04em]">The parts you check before you trust it</h2>
          <p className="w-105 shrink-0 text-[18px] leading-6.75 text-[#3D6A5E]">
            Weights, code, and who changed what, in the same project as the tables.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {details.map(([kicker, title, body]) => (
            <div key={kicker} className="flex w-[calc(25%-6px)] flex-col gap-3.5 bg-[#EEE8DC] px-7 pb-8 pt-7">
              <p className="text-[15px] leading-4.5 text-[#3D6A5E]">{kicker}</p>
              <h3 className="text-[30px] leading-9 tracking-[-0.02em]">{title}</h3>
              <p className="text-[16px] leading-6 text-[#3D6A5E]">{body}</p>
            </div>
          ))}
          <div className="flex w-[calc(25%-6px)] flex-col gap-3.5 bg-[#14473A] px-7 pb-8 pt-7 text-[#F9F4EB]">
            <p className="text-[15px] leading-4.5 opacity-80">Security</p>
            <h3 className="text-[30px] leading-9 tracking-[-0.02em]">Encrypted, and never for training</h3>
            <p className="text-[16px] leading-6 opacity-85">AES-256 at rest, HTTPS in transit. Your data is never used to train models.</p>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-10 bg-[#14473A] px-10 pb-26 pt-24 text-[#F9F4EB]">
        <h2 className="w-275 text-[120px] leading-28 tracking-[-0.055em]">Run your next wave in Tensr.</h2>
        <div className="flex items-end justify-between gap-10">
          <p className="w-130 shrink-0 text-[20px] leading-7.5 opacity-85">
            <Link href={APP_LOGIN} className="underline decoration-1 underline-offset-2">Start a 30-day free trial</Link>
            , or send us last wave&apos;s file and we&apos;ll rebuild your tab book in Tensr on the call.
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
