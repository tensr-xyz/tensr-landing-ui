import Link from 'next/link';
import { PaperShell, SectionRule } from '@/components/paper/shell';

function Tick() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" className="shrink-0">
      <path d="M3 8.5l3 3 7-7" fill="none" stroke="#14473A" strokeWidth="1.6" />
    </svg>
  );
}

function Points({ items }: { items: readonly string[] }) {
  return (
    <ul className="flex flex-col gap-2.5 pt-1.5">
      {items.map((item) => (
        <li key={item} className="flex items-center gap-3 text-[16px] leading-5.5">
          <Tick />
          {item}
        </li>
      ))}
    </ul>
  );
}

export function AgenciesPage() {
  return (
    <PaperShell>
      <section className="flex flex-col items-start gap-7 px-10 pb-16 pt-14">
        <p className="rounded-[999px] border border-[#14473A] px-3.5 py-1.5 text-[16px] leading-5">
          For agencies, DP teams and independent researchers
        </p>
        <h1 className="w-300 whitespace-pre-wrap text-[96px] leading-24 tracking-[-0.045em]">
          Stop rebuilding the{'\n'}same tables every wave
        </h1>
        <p className="w-190 text-[22px] leading-8 text-[#3D6A5E]">
          Rebuilding tracker tables, re-running banners when the client changes a cut at 5pm, checking your own work twice, bouncing files between SPSS, Excel and PowerPoint. Tensr does the grind once and keeps doing it, so your team spends the week on what the numbers mean.
        </p>
        <div className="flex pt-1.5">
          <div className="flex h-17 w-110 items-center border border-[#14473A] bg-[#FCFAF5] px-5.5 text-[20px] leading-6 text-[#14473A]/70">
            What&apos;s your work email?
          </div>
          <Link href="/demo" className="flex h-17 items-center bg-[#14473A] px-6.5 text-[20px] leading-6 text-[#F9F4EB]">
            Book an agency demo
          </Link>
        </div>
      </section>

      <section className="px-10 pb-16">
        <div className="grid h-[560px] grid-cols-3 bg-[#EEE8DC]">
          {[
            ['Excel', 'The banner you signed off, with the provenance sheet.'],
            ['PowerPoint', 'The same banner as slides. Excel stays the audit record.'],
            ['Word', 'A methodology document, not a second copy of the grid.'],
          ].map(([title, body]) => (
            <div key={title} className="flex flex-col justify-end gap-3 border-r border-[#14473A1F] p-10 last:border-r-0">
              <p className="text-[15px] leading-4.5 text-[#3D6A5E]">From the signed-off table</p>
              <h2 className="text-[40px] leading-11.5 tracking-[-0.025em]">{title}</h2>
              <p className="text-[17px] leading-6.5 text-[#3D6A5E]">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-12 px-10 pb-16">
        <SectionRule left="The grind" right="The grind" />
        <div className="flex items-end justify-between gap-10">
          <h2 className="w-225 shrink-0 text-[56px] leading-14.5 tracking-[-0.04em]">The work nobody bills for, done once</h2>
          <p className="w-95 shrink-0 text-[18px] leading-6.75 text-[#3D6A5E]">
            Five places a wave usually loses its days, and what Tensr does instead.
          </p>
        </div>

        <div className="flex h-130 gap-2">
          <div className="flex w-140 shrink-0 flex-col justify-between bg-[#EEE8DC] p-10">
            <p className="text-[15px] leading-4.5 text-[#3D6A5E]">01 · Trackers</p>
            <div className="flex flex-col gap-4.5">
              <h3 className="text-[40px] leading-11.5 tracking-[-0.025em]">The next wave uses the same spec</h3>
              <p className="text-[17px] leading-6.5 text-[#3D6A5E]">
                Build the tracker once. When the next wave is in the file, merge it, apply the same weight and recodes, and rerun the tables. Tables do not update themselves while fieldwork is still open.
              </p>
              <Points
                items={[
                  'Waves merged by variable, not by column order',
                  'The same tables rerun when the new file is in',
                  'Wave-on-wave significance letters on the banner',
                ]}
              />
            </div>
          </div>
          <div className="flex grow flex-col justify-center gap-3 bg-[#14473A] p-12 text-[#F9F4EB]">
            <p className="pb-3 text-[15px] leading-4.5 opacity-80">A tracker, wave on wave</p>
            {['W1', 'W2', 'W3'].map((wave) => (
              <div key={wave} className="flex items-center justify-between border border-[#F9F4EB33] px-5 py-4">
                <p className="text-[18px] leading-5.5 opacity-70">{wave}</p>
                <p className="text-[15px] leading-4.5 opacity-70">Same spec</p>
              </div>
            ))}
            <div className="flex items-center justify-between bg-[#F9F4EB] px-5 py-4 text-[#14473A]">
              <p className="text-[18px] leading-5.5">W4 · the file you upload next</p>
              <p className="text-[15px] leading-4.5 text-[#3D6A5E]">Rerun from the spec</p>
            </div>
            <div className="flex gap-2 pt-3">
              {['Sig letters', 'Low base', 'Open-end codes'].map((label) => (
                <div key={label} className="flex grow basis-0 flex-col gap-1 border border-[#F9F4EB33] p-4">
                  <p className="text-[18px] leading-6">{label}</p>
                  <p className="text-[14px] leading-4.5 opacity-75">On the rerun</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex h-130 gap-2">
          <div className="flex w-[55%] shrink-0 flex-col justify-end gap-4 bg-[#7895A8] p-10 text-[#F9F4EB]">
            <p className="text-[15px] leading-4.5">What leaves the project</p>
            <h3 className="text-[40px] leading-11.5 tracking-[-0.025em]">Excel, PowerPoint, and a Word note</h3>
            <p className="max-w-[520px] text-[17px] leading-6.5">
              Banner books are a spec. Add a break, change a net or swap a base and the book reruns, out to Excel, PowerPoint and Word.
            </p>
          </div>
          <div className="flex grow flex-col justify-between bg-[#EEE8DC] p-10">
            <p className="text-[15px] leading-4.5 text-[#3D6A5E]">02 · Banner books</p>
            <div className="flex flex-col gap-4.5">
              <h3 className="text-[40px] leading-11.5 tracking-[-0.025em]">The client changes a cut at 5pm. Fine.</h3>
              <p className="text-[17px] leading-6.5 text-[#3D6A5E]">
                A banner book is a spec. Add a break, change a net, or swap a base, and that book can be rerun to Excel or PowerPoint.
              </p>
              <Points
                items={[
                  'Excel is the audit record',
                  'Nets, low-base flags, and sig letters go with the grid',
                  'The same spec on the next wave',
                ]}
              />
            </div>
          </div>
        </div>

        <div className="flex h-130 gap-2">
          <div className="flex w-140 shrink-0 flex-col justify-between bg-[#EEE8DC] p-10">
            <p className="text-[15px] leading-4.5 text-[#3D6A5E]">03 · Checking</p>
            <div className="flex flex-col gap-4.5">
              <h3 className="text-[40px] leading-11.5 tracking-[-0.025em]">Check the work without redoing it</h3>
              <p className="text-[17px] leading-6.5 text-[#3D6A5E]">
                Click any number to see the filter, the weight, the base and the respondents behind it. The R script for that run comes with it.
              </p>
              <Points
                items={[
                  'A complete cell traces back to the rows',
                  'An R script you can take away',
                  'Significance letters on the weighted banner',
                ]}
              />
            </div>
          </div>
          <div className="flex grow items-center justify-center bg-[#C9B48F] p-12">
            <div className="w-140 bg-[#FCFAF5] shadow-[0_18px_48px_#14473A30]">
              <div className="flex items-center justify-between border-b border-[#14473A1F] px-6 py-5">
                <div>
                  <p className="text-[13px] leading-4 text-[#3D6A5E]">A cell</p>
                  <p className="text-[32px] leading-9 tracking-[-0.03em]">The rows behind it</p>
                </div>
                <p className="bg-[#E3ECE6] px-2.5 py-1.5 text-[13px] leading-4">When provenance is complete</p>
              </div>
              <div className="flex flex-col gap-2.5 border-b border-[#14473A1F] px-6 py-5 text-[14px] leading-4.5">
                {[
                  ['Base', 'The rows in the cell'],
                  ['Weight', 'The weight on the table'],
                  ['Test', 'The letter, when a contrast differs'],
                ].map(([label, value]) => (
                  <div key={label} className="flex justify-between">
                    <span className="text-[#3D6A5E]">{label}</span>
                    <span>{value}</span>
                  </div>
                ))}
              </div>
              <p className="bg-[#14473A] px-6 py-5 font-mono text-[13px] leading-5 text-[#F9F4EB]">
                The R script for that run.
              </p>
            </div>
          </div>
        </div>

        <div className="flex h-130 gap-2">
          <div className="flex grow items-center justify-center bg-[#5E8A74] p-12">
            <div className="w-150 bg-[#FCFAF5] shadow-[0_18px_48px_#14473A40]">
              <div className="border-b border-[#14473A1F] px-6 py-5">
                <p className="text-[18px] leading-5.5">Sample project</p>
                <p className="text-[13px] leading-4 text-[#3D6A5E]">Shared workspace</p>
              </div>
              {[
                ['One person', 'Owner'],
                ['Another person', 'Member'],
              ].map(([name, role]) => (
                <div key={name} className="flex items-center justify-between border-b border-[#14473A14] px-6 py-3.5 last:border-b-0">
                  <p className="text-[15px] leading-4.5">{name}</p>
                  <p className="text-[14px] leading-4.5 text-[#3D6A5E]">{role}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex w-140 shrink-0 flex-col justify-between bg-[#EEE8DC] p-10">
            <p className="text-[15px] leading-4.5 text-[#3D6A5E]">04 · Teams</p>
            <div className="flex flex-col gap-4.5">
              <h3 className="text-[40px] leading-11.5 tracking-[-0.025em]">One project, not three versions of it</h3>
              <p className="text-[17px] leading-6.5 text-[#3D6A5E]">
                The team works in the same project. Sign in with an emailed code, or Google, Microsoft or GitHub. You can see who is in. SSO is on the roadmap.
              </p>
              <Points
                items={[
                  'Shared workspaces and presence',
                  'Owner or member on the organisation',
                  'A working session on your own file, when you book one',
                ]}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-12 bg-[#14473A] p-12 text-[#F9F4EB]">
          <div className="flex items-end justify-between gap-10">
            <div className="flex w-180 shrink-0 flex-col gap-4.5">
              <p className="text-[15px] leading-4.5 opacity-80">05 · Confidentiality</p>
              <h3 className="text-[40px] leading-11.5 tracking-[-0.025em]">Your client&apos;s data stays your client&apos;s data</h3>
            </div>
            <p className="w-110 shrink-0 text-[17px] leading-6.5 opacity-85">
              Respondent-level files are the most sensitive thing an agency holds. Here is what happens to them in Tensr.
            </p>
          </div>
          <div className="flex gap-2">
            {[
              ['Encrypted at rest', 'Uploaded files and outputs are encrypted at rest with AES-256 and in transit over HTTPS, hosted in AWS US East.'],
              [
                'Who the agent calls',
                <>
                  The current agent calls Anthropic. The earlier agent still calls OpenAI.{' '}
                  <a className="underline" href="https://privacy.claude.com/en/articles/7996868-is-my-data-used-for-model-training">
                    See Anthropic&apos;s policy
                  </a>
                  .{' '}
                  <a className="underline" href="https://developers.openai.com/api/docs/guides/your-data">
                    See OpenAI&apos;s policy
                  </a>
                  .
                </>,
              ],
              ['Where it lives', 'The store today is us-east-1. Ask before you upload if a contract needs somewhere else.'],
            ].map(([title, body]) => (
              <div key={title} className="flex grow basis-0 flex-col gap-10 border border-[#F9F4EB33] p-7">
                <h4 className="text-[24px] leading-7.5 tracking-[-0.02em]">{title}</h4>
                <p className="text-[16px] leading-6 opacity-80">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-12 px-10 pb-30">
        <SectionRule left="Rollout" right="One study, then the rest" />
        <div className="flex items-end justify-between gap-10">
          <h2 className="w-225 shrink-0 text-[56px] leading-14.5 tracking-[-0.04em]">How agencies roll it out</h2>
          <p className="w-95 shrink-0 text-[18px] leading-6.75 text-[#3D6A5E]">
            No big switch-over. Prove it on one study, then move the rest when the team is ready.
          </p>
        </div>
        <div className="flex gap-10">
          {[
            ['01', 'Pilot one tracker', "Send last wave's .sav and the tab spec. On the call we rebuild that book with you."],
            ['02', 'Onboard the DP team', 'A working session on your own file: weights, nets, and the banner spec.'],
            ['03', 'Move the next study', 'Excel, PowerPoint, and a Word methodology document come out. Nothing is locked to a private format.'],
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
        <SectionRule left="Design partners" right="Design partners" />
        <div className="flex h-105 gap-2">
          <div className="flex w-115 shrink-0 flex-col justify-between bg-[#7895A8] p-8 text-[#F9F4EB]">
            <p className="text-[15px] leading-4.5">Small group, on purpose</p>
            <div>
              <p className="text-[96px] leading-22.5 tracking-[-0.05em]">Few</p>
              <p className="text-[18px] leading-6.5">seats for agencies and independent researchers.</p>
            </div>
          </div>
          <div className="flex grow flex-col justify-between bg-[#EEE8DC] p-10">
            <p className="text-[15px] leading-4.5 text-[#3D6A5E]">Join as a design partner</p>
            <h2 className="w-190 text-[40px] leading-12 tracking-[-0.025em]">
              Bring a live study, tell us what slows you down, and we&apos;ll build it with you.
            </h2>
            <div className="flex items-center justify-between gap-8">
              <p className="text-[16px] leading-5.5 text-[#3D6A5E]">A working session on your file, and a direct line when you book the demo.</p>
              <Link href="/demo" className="shrink-0 border-b border-[#14473A] pb-0.5 text-[16px] leading-5">
                Apply to join →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-10 bg-[#14473A] px-10 pb-26 pt-24 text-[#F9F4EB]">
        <h2 className="w-275 text-[120px] leading-28 tracking-[-0.055em]">Bring a .sav. Leave with the tables.</h2>
        <div className="flex items-end justify-between gap-10">
          <p className="w-130 shrink-0 text-[20px] leading-7.5 opacity-85">
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
