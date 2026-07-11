'use client';

import Link from 'next/link';
import { HeroProductMock, WorkspaceProductMock } from '@/components/product-mocks';

const trustedLogos = ['Universities', 'Research labs', 'Data teams', 'Analysts', 'Scientists'];

const featureCards = [
  {
    num: '01',
    title: 'Learn from your data before you guess',
    description:
      'Tensr continuously surfaces patterns, distributions, and anomalies so you notice what matters before conclusions go wrong.',
  },
  {
    num: '02',
    title: "Understand what's in your data",
    description:
      'Go beyond spreadsheets and charts. Tensr finds the right tests, explains assumptions, and shows who and what your results impact.',
  },
  {
    num: '03',
    title: 'Ship analyses with confidence',
    description:
      'Turn insight into action with AI-assisted interpretation, report-grade output, and collaboration — you stay in control.',
  },
];

const deepFeatures = [
  {
    num: '01',
    title: 'Learn from your data before you guess',
    description:
      'Tensr continuously surfaces patterns, distributions, and anomalies so you notice what matters before conclusions go wrong.',
    mock: 'hero' as const,
    chips: [
      'Full-stack workspace',
      'Sheet & charts',
      'Notebook cells',
      'Column filters',
      'Project templates',
      'Activity feed',
    ],
    capabilities: [
      'Data import',
      'Descriptive stats',
      'Anomaly checks',
      'Template analyses',
      'Collaborative projects',
    ],
  },
  {
    num: '02',
    title: "Understand what's in your data",
    description:
      'Go beyond spreadsheets and charts. Tensr finds the right tests, explains assumptions, and shows who and what your results impact.',
    mock: 'workspace' as const,
    chips: [
      'Zero-friction triage',
      'Test selection',
      'Assumption checks',
      'Effect sizes',
      'Root-cause insight',
    ],
    capabilities: [
      'ANOVA & regression',
      'Correlation matrices',
      'Post-hoc tests',
      'AI interpretation',
      'APA-ready export',
    ],
  },
  {
    num: '03',
    title: 'Ship analyses with confidence',
    description:
      "Turn insight into action by suggesting next steps, linking results to your notebook, and tracking progress until you're done. You're always in control.",
    mock: 'workspace' as const,
    chips: [
      'Built for teams of any size',
      'Multiplayer collaboration',
      'SSO-ready',
      'Plugin marketplace',
      'Custom roles',
      'Export & share',
    ],
    capabilities: [
      'Multiplayer presence',
      'Comments & annotations',
      'Plugin marketplace',
      'PDF / CSV / Markdown',
      'Command palette',
    ],
  },
];

export const HomeTemplate = () => {
  return (
    <div className="flex flex-1 flex-col bg-page text-text-primary">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border-default pb-12 pt-10 md:pb-16 md:pt-14">
        <div className="hero-glow" aria-hidden="true" />
        <div className="relative mx-auto max-w-[var(--max-width)] page-pad">
          <div className="mb-10 grid gap-8 md:mb-14 md:grid-cols-2 md:items-end md:gap-12">
            <h1 className="text-[2.75rem] leading-[1.05] tracking-tight text-text-primary sm:text-5xl md:text-[3.5rem] lg:text-[4rem]">
              Ship research that
              <br />
              never <span className="font-serif-italic">stalls</span>
            </h1>
            <div className="md:pb-1">
              <p className="mb-6 max-w-md text-[15px] leading-relaxed text-text-secondary md:text-base">
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
                  href="https://app.tensr.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full bg-inverted px-4 py-2.5 text-sm font-medium text-[var(--inverted-fg)] transition-opacity hover:opacity-90"
                >
                  Request a demo
                </Link>
              </div>
            </div>
          </div>

          <HeroProductMock />
        </div>
      </section>

      {/* Trusted by */}
      <section className="border-b border-border-default py-12">
        <div className="mx-auto max-w-[var(--max-width)] page-pad">
          <div className="mb-8 flex justify-center">
            <span className="pill-label">Trusted by teams who ship research</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 md:gap-x-14">
            {trustedLogos.map(name => (
              <span
                key={name}
                className="text-sm font-medium tracking-wide text-text-faint md:text-base"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Value prop + 3 cards */}
      <section className="py-16 md:py-36">
        <div className="mx-auto max-w-[var(--max-width)] page-pad">
          <h2 className="mx-auto mb-14 max-w-3xl text-center text-2xl leading-snug tracking-tight text-text-primary md:mb-20 md:text-4xl md:leading-snug">
            Tensr finds
            <span className="step-num">01</span> signal in your data,{' '}
            <span className="step-chip step-chip-muted mx-0.5">
              understands
              <span className="step-num !opacity-100">02</span>
            </span>{' '}
            what&apos;s happening, and owns{' '}
            <span className="step-chip step-chip-brand mx-0.5">
              resolution
              <span className="step-num !opacity-100 !text-white/80">03</span>
            </span>{' '}
            from first import to published insight.
          </h2>

          <div className="mb-16">
            <WorkspaceProductMock />
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {featureCards.map(card => (
              <div key={card.num} className="flex flex-col">
                <div className="mb-2 text-xs text-text-muted">{card.num}</div>
                <h3 className="mb-2 text-lg tracking-tight text-text-primary">{card.title}</h3>
                <p className="text-sm leading-relaxed text-text-secondary">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="border-y border-border-default py-16 md:py-24">
        <div className="mx-auto max-w-[var(--max-width)] page-pad">
          <blockquote className="mx-auto max-w-3xl text-center">
            <p className="mb-8 text-xl leading-relaxed tracking-tight text-text-primary md:text-2xl">
              &ldquo;Every hour spent wrestling with tools is time away from the research that
              matters. Tensr gives your team one workspace to analyse, interpret, and ship.&rdquo;
            </p>
            <footer className="flex flex-col items-center gap-1">
              <cite className="not-italic text-sm font-medium text-text-primary">
                Built for researchers
              </cite>
              <span className="text-sm text-text-muted">
                Modern collaborative statistical workspace
              </span>
            </footer>
          </blockquote>
        </div>
      </section>

      {/* Deep feature sections */}
      {deepFeatures.map((feature, index) => (
        <section
          key={feature.num}
          className={`overflow-x-clip py-16 md:py-24 ${
            index < deepFeatures.length - 1 ? 'border-b border-border-default' : ''
          }`}
        >
          <div className="mx-auto max-w-[var(--max-width)] page-pad">
            <div
              className={`grid items-center gap-10 md:gap-14 ${
                index % 2 === 1 ? 'md:grid-cols-[1.15fr_0.85fr]' : 'md:grid-cols-[0.85fr_1.15fr]'
              }`}
            >
              <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                <div className="mb-3 text-sm text-text-muted">{feature.num}</div>
                <h3 className="mb-4 text-2xl tracking-tight text-text-primary md:text-3xl">
                  {feature.title}
                </h3>
                <p className="mb-8 max-w-md text-[15px] leading-relaxed text-text-secondary">
                  {feature.description}
                </p>
                <div className="mb-6 grid grid-cols-2 gap-x-6 gap-y-2">
                  {feature.chips.map(chip => (
                    <span key={chip} className="text-sm text-text-muted">
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
              <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                {feature.mock === 'hero' ? <HeroProductMock /> : <WorkspaceProductMock />}
              </div>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-3 border-t border-border-default pt-8 sm:grid-cols-3 md:grid-cols-5">
              {feature.capabilities.map(cap => (
                <div key={cap} className="text-sm text-text-secondary">
                  {cap}
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Security */}
      <section className="border-y border-border-default py-16 md:py-20">
        <div className="mx-auto max-w-[var(--max-width)] page-pad">
          <div className="mb-3 text-xs tracking-wider text-text-muted uppercase">Security</div>
          <h3 className="mb-10 text-2xl tracking-tight text-text-primary md:text-3xl">
            Secure by design.
            <br />
            Safe by default.
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-border-default bg-standout/40 p-6">
              <h4 className="mb-2 text-base text-text-primary">Cloud-native workspace</h4>
              <p className="text-sm leading-relaxed text-text-secondary">
                Your analyses live in a modern collaborative environment with project isolation,
                role-aware access, and export controls you can trust.
              </p>
            </div>
            <div className="rounded-xl border border-border-default bg-standout/40 p-6">
              <h4 className="mb-2 text-base text-text-primary">Enterprise-ready</h4>
              <p className="text-sm leading-relaxed text-text-secondary">
                SSO, custom roles, and team workflows are built for research groups and data teams
                that need control without friction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest / product highlights */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[var(--max-width)] page-pad">
          <div className="mb-3 text-xs tracking-wider text-text-muted uppercase">Product</div>
          <h3 className="mb-10 text-2xl tracking-tight text-text-primary md:text-3xl">
            The Latest
          </h3>
          <div className="divide-y divide-border-default border-y border-border-default">
            {[
              {
                date: 'Workspace',
                title: 'Sheets, charts & notebooks in one surface',
                body: 'Move between spreadsheet grids, interactive charts, and Jupyter-style notebook cells without leaving your project.',
              },
              {
                date: 'AI Agent',
                title: 'Ask about your data in plain language',
                body: 'Tensr Agent reads your dataset, suggests analyses, returns tables and code, and writes plain-language interpretations.',
              },
              {
                date: 'Reports',
                title: 'Publication-grade statistical output',
                body: 'Assumption checks, effect sizes, post-hoc tests, and APA-ready export — built for rigorous research workflows.',
              },
            ].map(item => (
              <div key={item.title} className="grid gap-3 py-6 md:grid-cols-[140px_1fr] md:gap-8">
                <div className="text-xs tracking-wide text-text-muted uppercase">{item.date}</div>
                <div>
                  <h4 className="mb-2 text-base text-text-primary">{item.title}</h4>
                  <p className="max-w-2xl text-sm leading-relaxed text-text-secondary">
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link
              href="/features"
              className="text-sm text-text-secondary transition-colors hover:text-text-primary"
            >
              See all features →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeTemplate;
