'use client';

import Link from 'next/link';
import { Check } from 'lucide-react';
import type { CSSProperties } from 'react';
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

function ProductHeroChip({
  label,
  style,
  short,
}: {
  label: string;
  style: CSSProperties;
  short?: string;
}) {
  return (
    <div className="product-hero-chip group" style={style}>
      <span className="product-hero-chip-glow" aria-hidden="true" />
      <p className="relative tracking-[0.5px]">
        <span className="hidden sm:inline">{label}</span>
        <span className="sm:hidden">{short ?? label}</span>
      </p>
    </div>
  );
}

function ProductHeroVisual() {
  return (
    <div className="relative z-10 flex w-full items-center justify-center px-4 py-10 sm:px-6 lg:px-8">
      <div className="product-hero-diagram relative aspect-square w-[min(640px,calc(100vw-48px))] select-none lg:w-[min(640px,calc(50vw-48px))]">
        <svg
          className="absolute inset-0 size-full"
          fill="none"
          preserveAspectRatio="none"
          role="presentation"
          viewBox="0 0 700 669"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient
              id="tensr-flow-up"
              cx="350"
              cy="359.5"
              r="340"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="var(--text-primary)" />
              <stop offset="0.8" stopColor="rgba(38,37,30,0.18)" />
              <stop offset="1" stopColor="rgba(38,37,30,0.08)" />
            </radialGradient>
            <radialGradient
              id="tensr-flow-down"
              cx="350"
              cy="359.5"
              r="250"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="var(--text-primary)" />
              <stop offset="0.8" stopColor="rgba(38,37,30,0.18)" />
              <stop offset="1" stopColor="rgba(38,37,30,0.08)" />
            </radialGradient>
          </defs>
          <path
            className="product-hero-flow"
            d="M350 109.5L350 359.5"
            stroke="url(#tensr-flow-up)"
            strokeDasharray="2 3"
          />
          <path
            className="product-hero-flow"
            d="M245 59.5L245 179.5Q245 209.5 275 209.5L320 209.5Q350 209.5 350 239.5L350 239.5"
            stroke="url(#tensr-flow-up)"
            strokeDasharray="2 3"
          />
          <path
            className="product-hero-flow"
            d="M455 59.5L455 179.5Q455 209.5 425 209.5L380 209.5Q350 209.5 350 239.5L350 239.5"
            stroke="url(#tensr-flow-up)"
            strokeDasharray="2 3"
          />
          <path
            className="product-hero-flow"
            d="M157.5 134.5L205 134.5Q245 134.5 245 174.5L245 174.5"
            stroke="url(#tensr-flow-up)"
            strokeDasharray="2 3"
          />
          <path
            className="product-hero-flow"
            d="M542.5 134.5L495 134.5Q455 134.5 455 174.5L455 174.5"
            stroke="url(#tensr-flow-up)"
            strokeDasharray="2 3"
          />
          <path
            className="product-hero-flow"
            d="M210 209.5L275 209.5"
            stroke="url(#tensr-flow-up)"
            strokeDasharray="2 3"
          />
          <path
            className="product-hero-flow"
            d="M490 209.5L425 209.5"
            stroke="url(#tensr-flow-up)"
            strokeDasharray="2 3"
          />
          <path
            className="product-hero-flow"
            d="M350 359.5L350 609.5"
            stroke="url(#tensr-flow-down)"
            strokeDasharray="2 3"
          />
          <path
            className="product-hero-flow"
            d="M350 424.5L350 424.5Q350 459.5 315 459.5L280 459.5Q245 459.5 245 494.5L245 509.5"
            stroke="url(#tensr-flow-down)"
            strokeDasharray="2 3"
          />
          <path
            className="product-hero-flow"
            d="M350 424.5L350 424.5Q350 459.5 385 459.5L420 459.5Q455 459.5 455 494.5L455 509.5"
            stroke="url(#tensr-flow-down)"
            strokeDasharray="2 3"
          />
        </svg>

        <ProductHeroChip label="Dataset" short="Data" style={{ left: '35%', top: '8.9%' }} />
        <ProductHeroChip label="Import" style={{ left: '65%', top: '8.9%' }} />
        <ProductHeroChip label="Sheet" style={{ left: '50%', top: '16.4%' }} />
        <ProductHeroChip
          label="Charts"
          style={{ left: '22.5%', top: '20.1%', transform: 'translate(-100%, -50%)' }}
        />
        <ProductHeroChip
          label="Notebook"
          short="Code"
          style={{ left: '77.5%', top: '20.1%', transform: 'translateY(-50%)' }}
        />
        <ProductHeroChip
          label="Tests"
          style={{ left: '30%', top: '31.3%', transform: 'translate(-100%, -50%)' }}
        />
        <ProductHeroChip
          label="Agent"
          style={{ left: '70%', top: '31.3%', transform: 'translateY(-50%)' }}
        />
        <ProductHeroChip label="Report" style={{ left: '35%', top: '76.2%' }} />
        <ProductHeroChip label="APA export" short="APA" style={{ left: '65%', top: '76.2%' }} />
        <ProductHeroChip
          label="Publication-ready"
          short="Publish"
          style={{ left: '50%', top: '91.1%' }}
        />

        <div className="product-hero-core" style={{ left: '50%', top: '53.7%' }}>
          <div className="product-hero-core-glow" aria-hidden="true" />
          <div className="product-hero-core-glow-hot" aria-hidden="true" />
          <div className="product-hero-core-face">
            <div className="product-hero-core-inner">
              <span className="product-hero-core-mark">T</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const FeaturesTemplate = () => {
  return (
    <div className="flex flex-1 flex-col bg-page text-text-primary">
      {/* Hero — Interfere-style split panel */}
      <section className="product-hero relative overflow-hidden">
        <div className="absolute inset-x-0 bottom-0 h-px bg-border-default" />
        <div className="product-hero-bloom" aria-hidden="true" />

        <div className="product-hero-shell">
          <div className="product-hero-grid relative grid grid-cols-1 items-center border-border-default border-dashed sm:border-x lg:grid-cols-2">
            <div className="relative z-10 flex flex-col items-start justify-center gap-6 px-6 pb-10 pt-10 sm:px-8 sm:pb-16 sm:pt-14 lg:aspect-square xl:px-16">
              <span className="text-sm font-medium text-text-muted">Product</span>
              <h1 className="max-w-[14ch] text-[2.5rem] leading-none font-medium tracking-tight text-text-primary text-pretty sm:text-5xl md:text-[3.5rem]">
                From raw data to a result you can <span className="font-serif-italic">defend</span>
              </h1>
              <p className="max-w-md text-[15px] leading-relaxed text-pretty text-text-secondary md:text-base">
                An AI agent that runs the analysis, a report view built for rigour, and a tri‑modal
                workspace — sheet, charts, and notebook in one place.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="https://app.tensr.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full bg-component px-5 py-3 text-sm text-text-primary transition-colors hover:bg-[var(--component-hover)]"
                >
                  Get started
                </Link>
                <Link
                  href="mailto:help@tensr.xyz?subject=Demo%20request"
                  className="inline-flex items-center rounded-full bg-inverted px-5 py-3 text-sm font-medium text-[var(--inverted-fg)] transition-opacity hover:opacity-90"
                >
                  Request a demo
                </Link>
              </div>
            </div>

            <div className="product-hero-visual relative z-20 flex aspect-square items-center justify-center border-t border-dashed border-border-default lg:aspect-auto lg:self-stretch lg:border-t-0 lg:border-l">
              <div
                className="product-hero-crosshair pointer-events-none absolute inset-0"
                aria-hidden="true"
              />
              <ProductHeroVisual />
            </div>
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
                <div className="product-frame">
                  <MomentMock type={moment.mock} />
                </div>
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
    </div>
  );
};

export default FeaturesTemplate;
