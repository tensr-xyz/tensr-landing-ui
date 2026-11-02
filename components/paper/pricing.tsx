'use client';

import Link from 'next/link';
import { useState } from 'react';
import { APP_LOGIN, Arrow, PaperShell, SectionRule } from '@/components/paper/shell';

const plans = [
  {
    name: 'Pro',
    monthly: 79,
    annual: 63,
    year: 756,
    lines: ['1,200 agent runs a month', '300 reports a month', '1,000,000 rows per dataset'],
  },
  {
    name: 'Pro+',
    monthly: 149,
    annual: 119,
    year: 1428,
    lines: ['5,000 agent runs a month', '1,200 reports a month', '1,000,000 rows per dataset'],
  },
  {
    name: 'Teams',
    monthly: 119,
    annual: 95,
    year: 1140,
    perSeat: true,
    lines: ['£119 a seat, 3 seats minimum', '10,000 agent runs a month', '3,000 reports a month', 'Billed to the organisation'],
  },
] as const;

const rows: { feature: string; pro: string; plus: string; teams: string }[] = [
  { feature: 'Price, monthly', pro: '£79', plus: '£149', teams: '£119 / seat' },
  { feature: 'Price, annual monthly equivalent', pro: '£63', plus: '£119', teams: '£95 / seat' },
  { feature: 'Agent runs / month', pro: '1,200', plus: '5,000', teams: '10,000' },
  { feature: 'Reports / month', pro: '300', plus: '1,200', teams: '3,000' },
  { feature: 'Rows per dataset', pro: '1,000,000', plus: '1,000,000', teams: '1,000,000' },
  { feature: 'Seats', pro: '1', plus: '1', teams: '3 minimum' },
];

export function PricingPage() {
  const [annual, setAnnual] = useState(true);

  return (
    <PaperShell>
      <section className="flex flex-col gap-7 px-10 pb-16 pt-14">
        <p className="w-fit rounded-[999px] border border-[#14473A] px-3.5 py-1.5 text-[16px] leading-5">Pricing · GBP</p>
        <div className="flex items-end justify-between gap-10">
          <div className="flex flex-col gap-7">
            <h1 className="whitespace-pre-wrap text-[96px] leading-24 tracking-[-0.045em]">
              Pay per researcher,{'\n'}not per table
            </h1>
            <p className="w-175 text-[22px] leading-8 text-[#3D6A5E]">
              Prices are the live catalog: Pro £79, Pro+ £149, Teams £119 a seat. Annual is 20% off, rounded to the pound.
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-1 border border-[#14473A] p-1">
            <button type="button" onClick={() => setAnnual(false)} className={`px-4.5 py-2.5 text-[16px] leading-5 ${annual ? '' : 'bg-[#14473A] text-[#F9F4EB]'}`}>
              Monthly
            </button>
            <button type="button" onClick={() => setAnnual(true)} className={`flex items-center gap-2.5 px-4.5 py-2.5 text-[16px] leading-5 ${annual ? 'bg-[#14473A] text-[#F9F4EB]' : ''}`}>
              Annual
              <span className="bg-[#C9B48F] px-1.75 py-0.5 text-[13px] leading-4 text-[#14473A]">20% off</span>
            </button>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-4 px-10 pb-20">
        <div className="flex items-center justify-between gap-10 border border-[#14473A] px-9 py-7">
          <div className="flex items-center gap-10">
            <div>
              <p className="text-[30px] leading-9 tracking-[-0.02em]">Trial</p>
              <p className="text-[15px] leading-5 text-[#3D6A5E]">£0 for 30 days · no card</p>
            </div>
            <div className="h-14 w-px bg-[#14473A33]" />
            <div className="flex gap-8">
              {[
                ['5 datasets', '100,000 rows each'],
                ['150', 'tables a month'],
                ['150', 'agent runs'],
                ['150', 'reports'],
                ['8 an hour', 'agent run limit'],
              ].map(([title, note]) => (
                <div key={note}>
                  <p className="text-[22px] leading-7 tracking-[-0.02em]">{title}</p>
                  <p className="text-[14px] leading-4.5 text-[#3D6A5E]">{note}</p>
                </div>
              ))}
            </div>
          </div>
          <Link href={APP_LOGIN} className="flex h-14 shrink-0 items-center gap-3 border border-[#14473A] px-6 text-[17px] leading-5.5">
            Start free trial
            <Arrow />
          </Link>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {plans.map((plan) => {
            const price = annual ? plan.annual : plan.monthly;
            return (
              <article key={plan.name} className="flex flex-col gap-6 bg-[#EEE8DC] p-8">
                <div>
                  <h2 className="text-[30px] leading-9 tracking-[-0.02em]">{plan.name}</h2>
                  <p className="mt-3 text-[56px] leading-none tracking-[-0.04em]">
                    £{price}
                    <span className="text-[18px] tracking-normal text-[#3D6A5E]">{plan.perSeat ? ' / seat' : ''}</span>
                  </p>
                  <p className="mt-2 text-[15px] leading-5 text-[#3D6A5E]">
                    {annual ? `£${plan.year}${plan.perSeat ? ' a seat' : ''} billed annually` : 'Billed monthly'}
                  </p>
                </div>
                <ul className="flex flex-col gap-2 text-[16px] leading-6 text-[#3D6A5E]">
                  {plan.lines.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
                <Link href={APP_LOGIN} className="mt-auto flex h-14 items-center justify-center bg-[#14473A] text-[17px] leading-5.5 text-[#F9F4EB]">
                  Get started
                </Link>
              </article>
            );
          })}
        </div>

        <div className="flex items-center justify-between bg-[#14473A] px-9 py-7 text-[#F9F4EB]">
          <div>
            <p className="text-[30px] leading-9 tracking-[-0.02em]">Agencies</p>
            <p className="text-[16px] leading-6 text-[#BFD3C8]">No separate enterprise price in the catalog. Teams is the organisation plan.</p>
          </div>
          <Link href="/demo" className="border border-[#F9F4EB] px-6 py-3 text-[17px] leading-5.5">
            Book a demo
          </Link>
        </div>
      </section>

      <section className="flex flex-col gap-10 px-10 pb-20">
        <SectionRule left="Compare" right="From the billing catalog" />
        <h2 className="text-[56px] leading-14.5 tracking-[-0.04em]">What the plans actually cap</h2>
        <div className="border-t border-[#14473A]">
          <div className="grid grid-cols-4 py-3 text-[15px] leading-5 text-[#3D6A5E]">
            <span />
            <span>Pro</span>
            <span>Pro+</span>
            <span>Teams</span>
          </div>
          {rows.map((row) => (
            <div key={row.feature} className="grid grid-cols-4 border-t border-[#14473A33] py-4 text-[16px] leading-6">
              <span>{row.feature}</span>
              <span>{row.pro}</span>
              <span>{row.plus}</span>
              <span>{row.teams}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-8 px-10 pb-24">
        <SectionRule left="Questions" right="Questions" />
        {[
          ['Where do the prices come from?', 'app/plan_catalog.json. Annual is nearest pound after 20% off, then times 12.'],
          ['What happens after the trial?', 'The catalog sets 30 days. A paid plan is Pro, Pro+, or Teams.'],
          ['Is there a USD price?', 'USD figures in the catalog are marked proposed, not live. This page shows GBP only.'],
        ].map(([q, a]) => (
          <div key={q} className="border-t border-[#14473A] pt-4">
            <h3 className="text-[24px] leading-8 tracking-[-0.02em]">{q}</h3>
            <p className="mt-2 max-w-[720px] text-[17px] leading-6.5 text-[#3D6A5E]">{a}</p>
          </div>
        ))}
      </section>

      <section className="flex flex-col gap-10 bg-[#14473A] px-10 pb-26 pt-24 text-[#F9F4EB]">
        <h2 className="text-[96px] leading-24 tracking-[-0.045em]">Bring a .sav. Leave with the tables.</h2>
        <Link href="/demo" className="w-fit bg-[#F9F4EB] px-6 py-4 text-[17px] leading-5.5 text-[#14473A]">
          Book a demo →
        </Link>
      </section>
    </PaperShell>
  );
}
