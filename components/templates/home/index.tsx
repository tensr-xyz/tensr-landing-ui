'use client';

import Link from 'next/link';
import { StepVisual } from '@/components/asset-library/step-assets';
import {
  CollabProductMock,
  ReportProductMock,
  WorkspaceProductMock,
} from '@/components/product-mocks';

const trustedLogos = ['Universities', 'Research labs', 'Data teams', 'Analysts', 'Scientists'];

const featureCards = [
  {
    num: '01',
    title: 'Learn from your data before you guess',
    description:
      'Tensr continuously surfaces patterns, distributions, and anomalies so you notice what matters before conclusions go wrong.',
    visual: 'detect' as const,
  },
  {
    num: '02',
    title: "Understand what's in your data",
    description:
      'Go beyond spreadsheets and charts. Tensr finds the right tests, explains assumptions, and shows who and what your results impact.',
    visual: 'understand' as const,
  },
  {
    num: '03',
    title: 'Ship analyses with confidence',
    description:
      'Turn insight into action with AI-assisted interpretation, report-grade output, and collaboration — you stay in control.',
    visual: 'resolve' as const,
  },
];

const deepFeatures = [
  {
    num: '01',
    title: 'Learn from your data before you guess',
    description:
      'Tensr continuously surfaces patterns, distributions, and anomalies so you notice what matters before conclusions go wrong.',
    mock: 'workspace' as const,
    label: 'Full-stack workspace',
    chips: [
      'Sheet & charts',
      'Notebook cells',
      'Column filters',
      'Project templates',
      'Activity feed',
      'Data import',
    ],
  },
  {
    num: '02',
    title: "Understand what's in your data",
    description:
      'Go beyond spreadsheets and charts. Tensr finds the right tests, explains assumptions, and shows who and what your results impact.',
    mock: 'report' as const,
    label: 'Zero-friction analysis',
    chips: [
      'Test selection',
      'Assumption checks',
      'Effect sizes',
      'ANOVA & regression',
      'AI interpretation',
      'APA-ready export',
    ],
  },
  {
    num: '03',
    title: 'Ship analyses with confidence',
    description:
      "Turn insight into action by suggesting next steps, linking results to your notebook, and tracking progress until you're done. You're always in control.",
    mock: 'collab' as const,
    label: 'Built for teams of any size',
    chips: [
      'Multiplayer presence',
      'Comments & annotations',
      'Plugin marketplace',
      'SSO-ready',
      'Custom roles',
      'Export & share',
    ],
  },
];

function DeepMock({ type }: { type: 'workspace' | 'report' | 'collab' }) {
  switch (type) {
    case 'workspace':
      return <WorkspaceProductMock />;
    case 'report':
      return <ReportProductMock />;
    case 'collab':
      return <CollabProductMock />;
  }
}

export const HomeTemplate = () => {
  return (
    <div className="flex flex-1 flex-col overflow-x-clip bg-page text-text-primary">
      {/* Hero */}
      <section className="relative overflow-x-clip pb-8 pt-10 md:pb-12 md:pt-14 lg:pt-28">
        <div className="relative mx-auto max-w-[var(--max-width)] page-pad">
          <div className="mb-10 flex flex-col items-start justify-between gap-6 md:mb-12 lg:flex-row lg:items-end lg:gap-0">
            <h1 className="max-w-xl text-[2.75rem] leading-none font-medium tracking-tight text-text-primary sm:text-5xl md:text-[3.5rem] lg:text-[3.5rem]">
              Ship research that
              <br />
              never <span className="font-serif-italic">stalls</span>
            </h1>
            <div className="relative z-10 flex flex-col items-start gap-4 lg:items-end">
              <p className="max-w-lg text-balance text-[15px] leading-relaxed text-text-secondary lg:text-right md:text-base">
                Tensr empowers researchers, analysts and data scientists with a collaborative
                statistical workspace — spreadsheets, tests, charts, and an AI agent in one place.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="https://app.tensr.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full bg-component px-4 py-2.5 text-sm text-text-primary transition-colors hover:bg-[var(--component-hover)]"
                >
                  Get started
                </Link>
                <Link
                  href="mailto:help@tensr.xyz?subject=Demo%20request"
                  className="inline-flex items-center rounded-full bg-inverted px-4 py-2.5 text-sm font-medium text-[var(--inverted-fg)] transition-opacity hover:opacity-90"
                >
                  Request a demo
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-stage">
          <div className="hero-stage-frame">
            <div className="hero-glow" aria-hidden="true" />
            <div className="hero-stage-shell" data-testid="hero-illustration">
              <div className="hero-stage-shell-face">
                <div className="hero-stage-panel">
                  <WorkspaceProductMock />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted by */}
      <section className="border-b border-border-default py-12">
        <div className="mx-auto max-w-[var(--max-width)] page-pad">
          <div className="flex flex-col items-center gap-8 md:flex-row">
            <div className="flex h-8 shrink-0 items-center justify-center rounded-md border border-border-default px-3 text-sm text-text-faint">
              Trusted by teams who ship research
            </div>
            <div
              className="trusted-marquee flex h-14 w-full items-center overflow-hidden"
              style={{
                maskImage:
                  'linear-gradient(to right, transparent, black 80px, black calc(100% - 80px), transparent)',
              }}
            >
              <div className="trusted-track flex w-max shrink-0 items-center gap-x-16 pr-16 text-text-primary md:gap-x-20">
                {[...trustedLogos, ...trustedLogos, ...trustedLogos, ...trustedLogos].map(
                  (name, i) => (
                    <span
                      key={`${name}-${i}`}
                      className="shrink-0 text-sm font-medium tracking-wide text-text-secondary md:text-base"
                    >
                      {name}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value prop + 3 steps (static — GSAP later) */}
      <section className="relative overflow-hidden py-16 md:py-28">
        <div className="relative mx-auto max-w-[var(--max-width)] page-pad">
          <h2 className="mb-12 max-w-4xl text-left text-2xl leading-snug tracking-tight text-text-primary md:mb-16 md:text-[2.5rem] md:leading-snug">
            Tensr{' '}
            <span className="step-chip step-chip-muted mx-0.5">
              finds
              <span className="step-num !opacity-100">01</span>
            </span>{' '}
            signal in your data,{' '}
            <span className="step-chip step-chip-muted mx-0.5">
              understands
              <span className="step-num !opacity-100">02</span>
            </span>{' '}
            what&apos;s happening, and owns{' '}
            <span className="step-chip step-chip-indigo mx-0.5">
              resolution
              <span className="step-num !opacity-100 !text-white/80">03</span>
            </span>{' '}
            from first import to published insight.
          </h2>

          <div className="grid gap-8 md:grid-cols-3 md:gap-6">
            {featureCards.map(card => (
              <div key={card.num} className="flex flex-col gap-4">
                <div className="step-visual">
                  <StepVisual type={card.visual} />
                </div>
                <div className="font-mono text-[10px] leading-none text-text-secondary">
                  {card.num}
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-base font-medium tracking-tight text-text-primary">
                    {card.title}
                  </h3>
                  <p className="text-base leading-relaxed text-text-secondary">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-10 md:py-16">
        <div className="mx-auto max-w-[var(--max-width)] page-pad">
          <blockquote className="quote-card">
            <p className="quote-card-text">
              Every hour spent wrestling with tools is time away from the research that matters.
              Tensr gives your team one workspace to analyse, interpret, and ship.
            </p>
            <footer className="quote-card-attr">
              <span className="quote-card-avatar" aria-hidden="true">
                T
              </span>
              <span>
                <cite className="not-italic text-sm font-medium text-text-primary">
                  Built for researchers
                </cite>
                <span className="mt-0.5 block text-sm text-text-muted">
                  Modern collaborative statistical workspace
                </span>
              </span>
            </footer>
          </blockquote>
        </div>
      </section>

      {/* Deep feature sections — always bleed right like Interfere */}
      {deepFeatures.map((feature, index) => (
        <section key={feature.num} className="overflow-x-clip py-16 md:py-24">
          {index > 0 && (
            <div className="page-pad mx-auto max-w-[var(--max-width)]">
              <div className="-mx-4 mb-16 border-t border-border-default md:mx-0 md:mb-24" />
            </div>
          )}
          <div className="page-pad mx-auto grid max-w-[var(--max-width)] grid-cols-1 gap-10 md:grid-cols-2">
            <div className="flex items-center">
              <div className="flex h-full w-full max-w-[30rem] flex-col md:py-12">
                <span className="font-mono text-xs leading-none text-text-secondary">
                  {feature.num}
                </span>
                <h3 className="mt-4 text-pretty text-2xl font-medium tracking-tight text-text-primary md:text-[1.75rem] md:leading-snug">
                  {feature.title}
                </h3>
                <p className="mt-4 text-balance text-[15px] leading-relaxed text-text-secondary">
                  {feature.description}
                </p>
                <p className="mt-10 text-sm font-medium text-text-secondary md:mt-auto">
                  {feature.label}
                </p>
                <div className="mt-4">
                  <div className="border-t border-border-default" />
                  <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-x-2 md:gap-y-4">
                    {feature.chips.map(chip => (
                      <p key={chip} className="text-sm text-text-secondary">
                        {chip}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-[min(78vh,48rem)] min-h-[32rem] min-w-0 md:h-[min(82vh,52rem)]">
              <div className="absolute inset-y-0 -right-40 left-0 flex items-center justify-start overflow-hidden md:-right-52">
                <div className="relative flex h-full w-[min(100vw,75rem)] shrink-0 items-center justify-start">
                  <div className="showcase-bleed-inner relative h-full w-full max-w-[56rem] select-none overflow-hidden rounded-2xl border border-border-default bg-page">
                    <DeepMock type={feature.mock} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Security — Interfere panel */}
      <section>
        <div className="mx-auto max-w-[var(--max-width)] page-pad">
          <div className="security-panel">
            <div className="security-panel-copy">
              <div>
                <div className="mb-4 font-mono text-xs tracking-wider text-text-secondary uppercase">
                  Security
                </div>
                <h3 className="text-pretty text-2xl font-medium tracking-tight md:text-[1.75rem] md:leading-snug">
                  <span className="text-text-primary">Secure by design.</span>
                  <br />
                  <span className="text-text-muted">Safe by default.</span>
                </h3>
              </div>
              <Link
                href="/features"
                className="mt-8 inline-flex items-center gap-1.5 text-sm text-text-secondary transition-colors hover:text-text-primary lg:mt-0"
              >
                Learn more
                <span aria-hidden="true">→</span>
              </Link>
            </div>

            <div className="security-panel-items">
              <div className="security-divider" aria-hidden="true" />
              <div className="security-item">
                <div className="security-icon-wrap">
                  <span className="security-icon" aria-hidden="true">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    >
                      <path d="M12 3 5 6v5c0 5 3.2 8.4 7 9.5 3.8-1.1 7-4.5 7-9.5V6l-7-3Z" />
                    </svg>
                  </span>
                </div>
                <h4 className="mb-2 text-base font-medium text-text-primary">
                  Encrypted by default
                </h4>
                <p className="text-[15px] leading-relaxed text-text-muted">
                  Datasets are encrypted at rest and in transit. Your research data is never used to
                  train models.
                </p>
              </div>

              <div className="security-divider" aria-hidden="true" />
              <div className="security-item">
                <div className="security-icon-wrap">
                  <span className="security-icon" aria-hidden="true">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    >
                      <circle cx="12" cy="12" r="8" />
                      <path d="M8.5 12.5 11 15l4.5-5" />
                    </svg>
                  </span>
                </div>
                <h4 className="mb-2 text-base font-medium text-text-primary">Enterprise-ready</h4>
                <p className="text-[15px] leading-relaxed text-text-muted">
                  SSO, custom roles, and team workflows for labs that need control without friction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Changelog */}
      <section className="py-16 md:py-24">
        <div className="mx-auto flex w-full max-w-[var(--max-width)] flex-col gap-10 page-pad">
          <div className="flex select-none flex-col gap-4">
            <span className="font-mono text-[0.75rem] leading-none text-text-secondary uppercase">
              Changelog
            </span>
            <h3 className="text-2xl font-medium tracking-tight text-text-primary md:text-3xl">
              The Latest
            </h3>
          </div>

          <div className="flex flex-col gap-10">
            <div className="scrollbar-none flex gap-4 overflow-x-auto md:grid md:grid-cols-3 md:gap-10 md:overflow-x-visible">
              {[
                {
                  href: '/features',
                  date: 'Mar 12, 2026',
                  title: 'Sheets, charts & notebooks in one surface',
                  body: 'Move between spreadsheet grids, interactive charts, and Jupyter-style notebook cells without leaving your project.',
                },
                {
                  href: '/features',
                  date: 'Feb 11, 2026',
                  title: 'Ask about your data in plain language',
                  body: 'Tensr Agent reads your dataset, suggests analyses, returns tables and code, and writes plain-language interpretations.',
                },
                {
                  href: '/features',
                  date: 'Feb 1, 2026',
                  title: 'Publication-grade statistical output',
                  body: 'Assumption checks, effect sizes, post-hoc tests, and APA-ready export — built for rigorous research workflows.',
                },
              ].map(item => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group relative flex min-w-[19rem] flex-1 flex-col gap-4 border-t border-border-default pt-6 pr-6 no-underline md:min-w-0"
                >
                  <span className="flex-1 font-mono text-[0.75rem] leading-none text-text-secondary">
                    {item.date}
                  </span>
                  <svg
                    aria-hidden="true"
                    className="absolute top-[1.375rem] right-0 size-4 translate-x-2 text-text-secondary opacity-0 transition-[opacity,transform] duration-200 ease-out group-hover:translate-x-0 group-hover:opacity-100"
                    fill="none"
                    height="16"
                    viewBox="0 0 16 16"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clipRule="evenodd"
                      d="M10.8536 7.64637C11.0489 7.84163 11.0489 8.15822 10.8536 8.35348L7.20707 12C7.01181 12.1953 6.69522 12.1953 6.49996 12C6.3047 11.8047 6.3047 11.4882 6.49996 11.2929L9.79296 7.99993L6.50007 4.70707C6.30481 4.51181 6.30481 4.19522 6.50007 3.99996C6.69533 3.8047 7.01192 3.8047 7.20718 3.99996L10.8536 7.64637Z"
                      fill="currentColor"
                      fillRule="evenodd"
                    />
                  </svg>
                  <div className="flex flex-col gap-1">
                    <p className="truncate text-base font-medium text-text-primary">{item.title}</p>
                    <p className="line-clamp-3 text-base font-normal text-text-secondary">
                      {item.body}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            <div>
              <Link
                href="/features"
                className="group flex select-none items-center gap-2 no-underline duration-200 ease-out"
              >
                <p className="text-base text-text-secondary duration-200 ease-out group-hover:text-text-primary">
                  See all releases
                </p>
                <svg
                  aria-hidden="true"
                  className="size-4 text-text-secondary duration-200 ease-out group-hover:text-text-primary"
                  fill="none"
                  height="16"
                  viewBox="0 0 16 16"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    d="M10.8536 7.64637C11.0489 7.84163 11.0489 8.15822 10.8536 8.35348L7.20707 12C7.01181 12.1953 6.69522 12.1953 6.49996 12C6.3047 11.8047 6.3047 11.4882 6.49996 11.2929L9.79296 7.99993L6.50007 4.70707C6.30481 4.51181 6.30481 4.19522 6.50007 3.99996C6.69533 3.8047 7.01192 3.8047 7.20718 3.99996L10.8536 7.64637Z"
                    fill="currentColor"
                    fillRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeTemplate;
