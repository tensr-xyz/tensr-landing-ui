'use client';

import Link from 'next/link';
import { Check } from 'lucide-react';
import {
  AgentProductMock,
  ReportProductMock,
  ChartsProductMock,
  CollabProductMock,
  PluginsProductMock,
} from '@/components/product-mocks';

const CheckIcon = () => (
  <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[var(--component)] text-text-primary">
    <Check className="h-2.5 w-2.5" strokeWidth={3} aria-hidden="true" />
  </span>
);

const moments = [
  {
    id: 'agent',
    num: '01 — Tensr Agent',
    title: 'An analyst that reads your data first.',
    lead: 'The agent loads your dataset, understands its shape, and suggests the right test before you ask. Pose a question in plain English — it runs the analysis and hands back a table, the exact code, and one‑click next steps.',
    bullets: [
      'Suggests tests from the data — not a generic menu',
      'Returns results as tables, code, and follow‑up actions',
      '80+ tests with full feature parity with SPSS',
    ],
    mock: 'agent' as const,
  },
  {
    id: 'report',
    num: '02 — Analysis report',
    title: 'Output you can put in a paper.',
    lead: 'Every analysis opens as a structured report — descriptives, the test table, assumption checks, effect sizes, and post‑hoc, each with the exact function call recorded. Plain‑language AI interpretation sits alongside, and APA citations export in a click.',
    bullets: [
      'ANOVA, correlation matrix, regression — fully formatted',
      'Shapiro–Wilk, Levene & independence checks, pass / fail',
      'Export PDF, CSV, Markdown, or copy APA 7 citation',
    ],
    mock: 'report' as const,
  },
  {
    id: 'workspace',
    num: '03 — The workspace',
    title: 'Spreadsheet, charts, and notebook — one file.',
    lead: 'Switch between a typed data grid, interactive charts, and a Jupyter‑style notebook without ever leaving the analysis. Plot a regression, drop the figure into the notebook, and keep one source of truth across all three.',
    bullets: [
      'Sortable, typed grid with sticky headers and % formatting',
      'Interactive scatter, colour‑by, regression overlay, export PNG',
      'Notebook cells with live numpy / scipy output',
    ],
    mock: 'charts' as const,
  },
  {
    id: 'collaboration',
    num: '04 — Collaboration',
    title: 'Review an analysis together, live.',
    lead: 'Multiplayer presence, live cursors, and inline comments mean your team works in the same file — not in a chain of exported PDFs. Leave a note on a result, tag a collaborator, and resolve it without leaving the workspace.',
    bullets: [
      'Live cursors and presence in the title bar',
      'Comment on any result, cell, or notebook cell',
      'Share a workspace with a link — viewer or editor',
    ],
    mock: 'collab' as const,
  },
  {
    id: 'plugins',
    num: '05 — Plugin marketplace',
    title: 'Extend the agent with a click.',
    lead: 'An app store for analysis. Add Bayesian inference, time‑series, geospatial, or survey toolkits — written in Python, R, JS, or TypeScript — and they become available to the agent and command palette. Build your own and publish to the community.',
    bullets: [
      'Curated, rated, and versioned plugins',
      'Free and subscription toolkits — installed per workspace',
      'Publish & monetise — a path for community authors',
    ],
    mock: 'plugins' as const,
  },
];

const engineTests = [
  'Descriptive statistics',
  'Frequencies',
  'One‑sample t‑test',
  'Independent t‑test',
  'Paired t‑test',
  'One‑way ANOVA',
  'Factorial ANOVA',
  'Repeated‑measures ANOVA',
  'ANCOVA',
  'Pearson correlation',
  'Spearman ρ',
  'Partial correlation',
  'Linear regression OLS',
  'Logistic regression',
  'Mann–Whitney U',
  'Wilcoxon signed‑rank',
  'Kruskal–Wallis',
  'Chi‑square',
  "Cronbach's α",
];

const miniFeats = [
  {
    title: 'Command palette ⌘K',
    description:
      'Every test, transform, and plugin one search away — run an analysis without touching a menu.',
  },
  {
    title: 'Integrated terminal ⌘`',
    description: 'A resizable Python REPL — numpy, scipy, statsmodels — right beside your data.',
  },
  {
    title: 'Provenance on everything',
    description:
      'Each result footer shows the exact function call — re‑run, annotate, or audit in a click.',
  },
];

function MomentMock({ type }: { type: (typeof moments)[number]['mock'] }) {
  switch (type) {
    case 'agent':
      return <AgentProductMock />;
    case 'report':
      return <ReportProductMock />;
    case 'charts':
      return <ChartsProductMock />;
    case 'collab':
      return <CollabProductMock />;
    case 'plugins':
      return <PluginsProductMock />;
  }
}

export const FeaturesTemplate = () => {
  return (
    <div className="flex flex-1 flex-col bg-page text-text-primary">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border-default pb-14 pt-12 md:pb-20 md:pt-16">
        <div className="hero-glow" aria-hidden="true" />
        <div className="relative mx-auto max-w-[var(--max-width)] page-pad text-center">
          <span className="pill-label">Product</span>
          <h1 className="mx-auto mt-5 max-w-[18ch] text-[2.5rem] leading-[1.08] tracking-tight text-text-primary sm:text-5xl md:text-[3.25rem]">
            From raw data to a result you can <span className="font-serif-italic">defend</span>
          </h1>
          <p className="mx-auto mt-5 max-w-[56ch] text-[15px] leading-relaxed text-text-secondary md:text-base">
            Five capabilities, one workspace. An AI agent that does the analysis, a report view
            built for rigour, a tri‑modal canvas, live collaboration, and a marketplace to extend it
            all.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="https://app.tensr.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-inverted px-5 py-2.5 text-sm font-medium text-[var(--inverted-fg)] transition-opacity hover:opacity-90"
            >
              Get started
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center rounded-full bg-component px-5 py-2.5 text-sm text-text-primary transition-colors hover:bg-[var(--component-hover)]"
            >
              See pricing →
            </Link>
          </div>
        </div>
      </section>

      {/* Feature moments */}
      {moments.map((moment, index) => (
        <section
          key={moment.id}
          id={moment.id}
          className={`overflow-x-clip py-16 md:py-24 ${
            index < moments.length - 1 ? 'border-b border-border-default' : ''
          }`}
        >
          <div className="mx-auto max-w-[var(--max-width)] page-pad">
            <div
              className={`grid items-center gap-10 md:gap-14 ${
                index % 2 === 1 ? 'md:grid-cols-[1.15fr_0.85fr]' : 'md:grid-cols-[0.85fr_1.15fr]'
              }`}
            >
              <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                <div className="mb-3 text-sm text-text-muted">{moment.num}</div>
                <h2 className="mb-4 text-2xl tracking-tight text-text-primary md:text-3xl">
                  {moment.title}
                </h2>
                <p className="mb-6 max-w-md text-[15px] leading-relaxed text-text-secondary">
                  {moment.lead}
                </p>
                <ul className="flex max-w-md flex-col gap-3">
                  {moment.bullets.map(bullet => (
                    <li
                      key={bullet}
                      className="flex gap-2.5 text-sm leading-snug text-text-secondary"
                    >
                      <CheckIcon />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                <MomentMock type={moment.mock} />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Engine */}
      <section className="border-y border-border-default bg-[var(--surface-muted,transparent)] py-16 md:py-24">
        <div className="mx-auto max-w-[var(--max-width)] page-pad">
          <div className="mb-3 text-xs tracking-wider text-text-muted uppercase">The engine</div>
          <h2 className="mb-4 max-w-2xl text-2xl tracking-tight text-text-primary md:text-4xl">
            Feature parity with SPSS — without the SPSS.
          </h2>
          <p className="mb-10 max-w-[54ch] text-[15px] leading-relaxed text-text-secondary md:text-base">
            Over 80 tests, from t‑tests and ANOVA to regression, non‑parametrics, and reliability
            analysis — ready the moment your data loads, and reproducible every time.
          </p>

          <p className="mb-4 text-xs tracking-wider text-text-muted uppercase">
            80+ tests, ready to run
          </p>
          <div className="mb-14 flex flex-wrap gap-2">
            {engineTests.map(test => (
              <span
                key={test}
                className="rounded-full border border-border-default bg-page px-3 py-1.5 text-xs text-text-secondary"
              >
                {test}
              </span>
            ))}
            <span className="rounded-full border border-[var(--brand-line,#c4b5fd)] bg-[var(--brand-soft,#f5f3ff)] px-3 py-1.5 text-xs font-medium text-[var(--brand-deep,#5b21b6)]">
              + 60 more
            </span>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {miniFeats.map(feat => (
              <div key={feat.title}>
                <h3 className="mb-2 text-base tracking-tight text-text-primary">{feat.title}</h3>
                <p className="text-sm leading-relaxed text-text-secondary">{feat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[var(--max-width)] page-pad">
          <div className="rounded-2xl border border-border-default bg-inverted px-8 py-14 text-center text-[var(--inverted-fg)] md:px-16 md:py-16">
            <span className="text-xs tracking-wider uppercase opacity-60">Get started</span>
            <h2 className="mx-auto mt-4 max-w-lg text-2xl tracking-tight md:text-4xl">
              See it on your own data.
            </h2>
            <p className="mx-auto mt-4 max-w-[46ch] text-[15px] leading-relaxed opacity-70">
              Upload a CSV and let the agent take the first look. Nothing to install.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="https://app.tensr.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition-opacity hover:opacity-90"
              >
                Get started
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center rounded-full border border-white/25 px-5 py-2.5 text-sm text-white transition-colors hover:bg-white/10"
              >
                See pricing →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturesTemplate;
