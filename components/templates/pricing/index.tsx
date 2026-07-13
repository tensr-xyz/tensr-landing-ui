'use client';

import Link from 'next/link';
import { Check } from 'lucide-react';
import { Fragment, useState } from 'react';
import { Accordion } from '@/components/accordion';

const plans = [
  {
    id: 'pro',
    name: 'Pro',
    subtitle: 'For individual analysts running real tests on real data.',
    monthly: 20,
    annualMonthly: 16,
    annualTotal: 192,
    note: 'Per user · cancel any time',
    cta: 'Get started',
    href: 'https://app.tensr.xyz',
    featured: false,
    features: [
      'Full tri‑modal workspace',
      'Sheet, charts & notebook',
      'All 80+ statistical tests + report view',
      'Tensr Agent — 1,200 runs / month',
      '300 AI reports / month',
      'APA, PDF, CSV & Markdown export',
    ],
  },
  {
    id: 'pro_plus',
    name: 'Pro Plus',
    subtitle: 'For power users who live in the agent and ship more analyses.',
    monthly: 60,
    annualMonthly: 48,
    annualTotal: 576,
    note: 'Per user · cancel any time',
    cta: 'Get started',
    href: 'https://app.tensr.xyz',
    featured: true,
    features: [
      'Everything in Pro, plus',
      'Tensr Agent — 5,000 runs / month',
      '1,200 AI reports / month',
      'Higher assistant cost budget',
      'Priority support',
      'Early access to new analysis tools',
    ],
  },
  {
    id: 'teams',
    name: 'Teams',
    subtitle: 'For research groups and analytics teams working in one place.',
    monthly: 40,
    annualMonthly: 32,
    annualTotal: 384,
    note: 'Per seat · billed to your organisation',
    cta: 'Get started',
    href: 'https://app.tensr.xyz',
    featured: false,
    perSeat: true,
    features: [
      'Everything in Pro Plus, plus',
      'Organisation billing & shared seats',
      'Real‑time collaboration & presence',
      'Tensr Agent — 10,000 runs / month',
      '3,000 AI reports / month',
      'Shared workspaces & plugin library',
    ],
  },
];

const comparison = [
  {
    group: 'Workspace',
    rows: [
      { feature: 'Spreadsheet, charts & notebook', pro: true, proPlus: true, teams: true },
      { feature: 'All 80+ statistical tests', pro: true, proPlus: true, teams: true },
      { feature: 'Report view & APA export', pro: true, proPlus: true, teams: true },
    ],
  },
  {
    group: 'AI & limits',
    rows: [
      {
        feature: 'Tensr Agent runs / month',
        pro: '1,200',
        proPlus: '5,000',
        teams: '10,000',
      },
      {
        feature: 'AI reports / month',
        pro: '300',
        proPlus: '1,200',
        teams: '3,000',
      },
      {
        feature: 'Assistant cost budget',
        pro: '$4 / mo',
        proPlus: '$15 / mo',
        teams: '$10 / mo',
      },
    ],
  },
  {
    group: 'Collaboration',
    rows: [
      {
        feature: 'Organisation / shared seats',
        pro: false,
        proPlus: false,
        teams: true,
      },
      {
        feature: 'Real‑time presence & comments',
        pro: false,
        proPlus: false,
        teams: true,
      },
      {
        feature: 'Shared plugin library',
        pro: false,
        proPlus: false,
        teams: true,
      },
    ],
  },
  {
    group: 'Support',
    rows: [
      {
        feature: 'Support',
        pro: 'Standard',
        proPlus: 'Priority',
        teams: 'Priority',
      },
    ],
  },
];

const faqItems = [
  {
    id: 'free',
    question: 'Is there a free plan?',
    answer:
      "Tensr is a paid product built for people doing serious analysis — there's no permanent free or student tier. Pick the plan that fits your work, and you can change or cancel it at any time.",
  },
  {
    id: 'agent',
    question: 'What counts as a Tensr Agent run?',
    answer:
      'A run is one analysis the agent executes on your behalf — a test, a transform, or an interpretation. Browsing data, editing sheets, and writing your own notebook code never count toward your monthly limit.',
  },
  {
    id: 'billing',
    question: 'Can I switch between monthly and annual?',
    answer:
      'Yes. Annual billing saves 20% versus monthly. Upgrades take effect immediately and are prorated; downgrades apply at the start of your next cycle.',
  },
  {
    id: 'teams',
    question: 'How does Teams seat pricing work?',
    answer:
      'Teams is billed per seat to your organisation. Add or remove seats as your group changes — billing adjusts automatically. Shared workspaces and collaboration features are included.',
  },
  {
    id: 'security',
    question: 'Where does my data live, and is it secure?',
    answer:
      'Datasets are encrypted at rest and in transit. Your data is never used to train models. Contact us if you need SSO, audit logs, or a signed DPA.',
  },
  {
    id: 'academic',
    question: 'Do you offer academic or non‑profit pricing?',
    answer:
      "We offer discounted Teams pricing for accredited research labs and registered non‑profits. Reach out with your institution details and we'll set you up.",
  },
];

function CellValue({ value }: { value: boolean | string }) {
  if (value === true) {
    return <span className="text-text-primary">●</span>;
  }
  if (value === false) {
    return <span className="text-text-faint">—</span>;
  }
  return <span className="text-text-secondary">{value}</span>;
}

export const PricingTemplate = () => {
  const [frequency, setFrequency] = useState<'monthly' | 'yearly'>('yearly');

  return (
    <div className="bg-page text-text-primary">
      <section className="page-pad mx-auto max-w-[var(--max-width)] pb-8 pt-14 md:pt-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs tracking-wider text-text-muted uppercase">Pricing</p>
          <h1 className="text-3xl tracking-tight md:text-5xl">
            Pricing that scales with your research.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-text-secondary md:text-base">
            Pro, Pro Plus, and Teams — upgrade when you need more agent capacity and collaboration.
            No free tier — a serious tool for serious work.
          </p>
          <div className="mt-8 flex justify-center">
            <div className="inline-flex items-center gap-1 rounded-full border border-border-default bg-standout p-1">
              <button
                type="button"
                onClick={() => setFrequency('monthly')}
                className={`rounded-full px-4 py-1.5 text-sm transition-colors ${
                  frequency === 'monthly'
                    ? 'bg-page text-text-primary shadow-sm'
                    : 'text-text-muted hover:text-text-primary'
                }`}
              >
                Monthly
              </button>
              <button
                type="button"
                onClick={() => setFrequency('yearly')}
                className={`rounded-full px-4 py-1.5 text-sm transition-colors ${
                  frequency === 'yearly'
                    ? 'bg-page text-text-primary shadow-sm'
                    : 'text-text-muted hover:text-text-primary'
                }`}
              >
                Annual <span className="ml-1 text-xs text-emerald-600">−20%</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="page-pad mx-auto max-w-[var(--max-width)] pb-16">
        <div className="grid gap-4 md:grid-cols-3">
          {plans.map(plan => {
            const price = frequency === 'yearly' ? plan.annualMonthly : plan.monthly;
            const period = plan.perSeat
              ? frequency === 'yearly'
                ? '/seat/mo · billed annually'
                : '/seat/mo'
              : frequency === 'yearly'
                ? '/mo · billed annually'
                : '/mo';

            return (
              <div
                key={plan.id}
                className={`relative flex flex-col rounded-2xl border p-6 md:p-7 ${
                  plan.featured
                    ? 'border-text-primary bg-page shadow-[0_0_0_1px_var(--text-primary)]'
                    : 'border-border-default bg-page'
                }`}
              >
                {plan.featured && (
                  <span className="absolute -top-3 left-6 rounded-full bg-inverted px-3 py-0.5 text-xs font-medium text-[var(--inverted-fg)]">
                    Most popular
                  </span>
                )}
                <h2 className="text-lg font-medium tracking-tight">{plan.name}</h2>
                <p className="mt-2 min-h-[44px] text-sm leading-relaxed text-text-secondary">
                  {plan.subtitle}
                </p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-lg text-text-muted">$</span>
                  <span className="text-4xl tracking-tight">{price}</span>
                  <span className="text-sm text-text-muted">{period}</span>
                </div>
                {frequency === 'yearly' && (
                  <p className="mt-1 text-xs text-text-faint">
                    ${plan.annualTotal}
                    {plan.perSeat ? ' / seat' : ''} billed yearly
                  </p>
                )}
                <p className="mt-2 text-xs text-text-faint">{plan.note}</p>
                <Link
                  href={plan.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-6 inline-flex items-center justify-center rounded-full px-4 py-2.5 text-sm font-medium transition-opacity hover:opacity-90 ${
                    plan.featured
                      ? 'bg-inverted text-[var(--inverted-fg)]'
                      : 'border border-border-default bg-component text-text-primary'
                  }`}
                >
                  {plan.cta}
                </Link>
                <ul className="mt-8 space-y-3 border-t border-border-default pt-6">
                  {plan.features.map((feature, i) => (
                    <li key={feature} className="flex gap-3 text-sm text-text-secondary">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-text-primary" />
                      <span className={i === 0 ? 'font-medium text-text-primary' : ''}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
        <p className="mt-8 text-center text-sm text-text-muted">
          Change or cancel your plan at any time · no long‑term lock‑in
        </p>
      </section>

      {/* Compare plans table — temporarily hidden
      <section className="border-y border-border-default py-16 md:py-20">
        <div className="page-pad mx-auto max-w-[var(--max-width)]">
          <div className="mb-10 text-center">
            <p className="mb-3 text-xs tracking-wider text-text-muted uppercase">Compare plans</p>
            <h2 className="text-2xl tracking-tight md:text-3xl">Every detail, side by side.</h2>
          </div>
          <div className="overflow-x-auto rounded-xl border border-border-default">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead>
                <tr className="border-b border-border-default bg-standout/60">
                  <th className="px-4 py-3 font-medium text-text-primary md:w-[40%]">Feature</th>
                  <th className="px-4 py-3 font-medium text-text-primary">Pro</th>
                  <th className="bg-standout px-4 py-3 font-medium text-text-primary">Pro Plus</th>
                  <th className="px-4 py-3 font-medium text-text-primary">Teams</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map(section => (
                  <Fragment key={section.group}>
                    <tr className="border-b border-border-default bg-standout/40">
                      <td
                        colSpan={4}
                        className="px-4 py-2 text-xs font-medium tracking-wide text-text-muted uppercase"
                      >
                        {section.group}
                      </td>
                    </tr>
                    {section.rows.map(row => (
                      <tr
                        key={row.feature}
                        className="border-b border-border-default last:border-0"
                      >
                        <th className="px-4 py-3 font-normal text-text-primary">{row.feature}</th>
                        <td className="px-4 py-3">
                          <CellValue value={row.pro} />
                        </td>
                        <td className="bg-standout/30 px-4 py-3">
                          <CellValue value={row.proPlus} />
                        </td>
                        <td className="px-4 py-3">
                          <CellValue value={row.teams} />
                        </td>
                      </tr>
                    ))}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      */}

      <section className="py-16 md:py-20">
        <div className="page-pad mx-auto max-w-3xl">
          <div className="mb-10 text-center">
            <p className="mb-3 text-xs tracking-wider text-text-muted uppercase">FAQ</p>
            <h2 className="text-2xl tracking-tight md:text-3xl">Questions, answered.</h2>
          </div>
          <Accordion items={faqItems} />
        </div>
      </section>
    </div>
  );
};

export default PricingTemplate;
