import Link from 'next/link';
import type { ReactNode } from 'react';
import { MobileMenu } from '@/components/paper/mobile-menu';
import './paper.css';

export const APP_LOGIN = 'https://app.tensr.xyz/login';

const askQuery = encodeURIComponent('What does Tensr (the startup) do?');

export const askLinks = [
  { label: 'ChatGPT', href: `https://chatgpt.com/?q=${askQuery}` },
  { label: 'Claude', href: `https://claude.ai/new?q=${askQuery}` },
  { label: 'Perplexity', href: `https://www.perplexity.ai/search?q=${askQuery}` },
  { label: 'Google', href: `https://www.google.com/search?q=${askQuery}` },
  { label: 'Grok', href: `https://x.com/i/grok?text=${askQuery}` },
];

const nav = [
  ['/product', 'Product'],
  ['/integrations', 'Integrations'],
  ['/agencies', 'Agencies'],
  ['/pricing', 'Pricing'],
  ['/docs', 'Docs'],
  ['/changelog', 'Changelog'],
] as const;

export function Mark({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true">
      <rect x="4" y="5" width="12" height="12" rx="2.5" fill="#14473A" />
      <rect x="18" y="5" width="12" height="12" rx="2.5" fill="#14473A" />
      <rect x="32" y="5" width="12" height="12" rx="2.5" fill="#5E8A74" />
      <rect x="18" y="19" width="12" height="12" rx="2.5" fill="#14473A" />
      <rect x="18" y="33" width="12" height="12" rx="2.5" fill="#14473A" />
    </svg>
  );
}

export function Arrow({ light = false }: { light?: boolean }) {
  const stroke = light ? '#F9F4EB' : '#14473A';
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
      <path d="M3 9h12M10 4l5 5-5 5" fill="none" stroke={stroke} strokeWidth="1.6" />
    </svg>
  );
}

export function PaperNav() {
  return (
    <header className="flex min-h-21 flex-wrap items-center justify-between gap-4 px-5 py-4 lg:px-10 mobile:h-16 mobile:min-h-16 mobile:flex-nowrap mobile:gap-0 mobile:border-b mobile:border-[#14473A26] mobile:py-0 mobile:pr-3 mobile:pl-5">
      <Link
        href="/"
        className="flex items-center gap-2.25 mobile:[&_svg]:size-6"
        aria-label="Tensr homepage"
      >
        <Mark />
        <span className="text-[28px] leading-7 font-semibold tracking-[-0.04em] mobile:text-[22px] mobile:leading-6">
          tensr
        </span>
      </Link>
      <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[16px] leading-5 lg:gap-9 mobile:hidden">
        {nav.map(([href, label]) => (
          <Link key={href} href={href}>
            {label}
          </Link>
        ))}
        <Link href={APP_LOGIN}>Sign in</Link>
        <Link
          href="/demo"
          className="bg-[#14473A] px-5.5 py-3.75 text-[17px] leading-5.5 text-[#F9F4EB]"
        >
          Book a demo
        </Link>
      </nav>
      <MobileMenu />
    </header>
  );
}

const footerColumns: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: 'Product',
    links: [
      { label: 'Workspace', href: '/product' },
      { label: 'Tables & banner books', href: '/product' },
      { label: 'Agent', href: '/product' },
      { label: 'Plugins', href: '/product' },
      { label: 'Pricing', href: '/pricing' },
    ],
  },
  {
    title: 'Use cases',
    links: [
      { label: 'Brand tracking', href: '/agencies' },
      { label: 'Concept testing', href: '/agencies' },
      { label: 'Pricing research', href: '/agencies' },
      { label: 'MaxDiff & conjoint', href: '/agencies' },
      { label: 'Agency tab books', href: '/agencies' },
    ],
  },
  {
    title: 'Integrations',
    links: [
      { label: 'Prolific', href: '/integrations' },
      { label: 'Qualtrics', href: '/integrations' },
      { label: 'SPSS .sav', href: '/integrations' },
      { label: 'Excel & PowerPoint', href: '/integrations' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Switching from SPSS', href: '/product' },
      { label: 'Docs', href: '/docs' },
      {
        label: 'Privacy',
        href: 'https://tensr-1.gitbook.io/tensr/legal-policies/privacy-policy',
      },
      {
        label: 'Terms',
        href: 'https://tensr-1.gitbook.io/tensr/legal-policies/terms-of-service',
      },
    ],
  },
];

export function PaperFooter() {
  return (
    <footer className="flex flex-col gap-16 bg-[#F9F4EB] px-5 pt-16 pb-10 lg:px-10 mobile:gap-10 mobile:px-5 mobile:pt-12 mobile:pb-8">
      <div className="flex flex-wrap gap-10 mobile:flex-col mobile:gap-8">
        <div className="flex w-full max-w-85 flex-col gap-3.5 sm:w-85 mobile:max-w-none">
          <Link href="/" className="flex items-center gap-2.25">
            <Mark size={26} />
            <span className="text-[26px] leading-6.5 font-semibold tracking-[-0.04em]">tensr</span>
          </Link>
          <p className="w-65 text-[15px] leading-5.5 text-[#3D6A5E] mobile:w-auto">
            Survey analysis for people who still care about the base size.
          </p>
        </div>
        <div className="contents mobile:grid mobile:w-full mobile:grid-cols-2 mobile:gap-x-4 mobile:gap-y-8">
          {footerColumns.map(column => (
            <div key={column.title} className="flex grow basis-0 flex-col gap-2.5">
              <p className="pb-1 text-[15px] leading-4.5 text-[#3D6A5E]">{column.title}</p>
              {column.links.map(link => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-[15px] leading-4.5 mobile:inline-flex mobile:min-h-11 mobile:items-center"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-wrap justify-between gap-4 border-t border-[#14473A] pt-4 text-[14px] leading-4.5 text-[#3D6A5E]">
        <p>© 2026 Tensr · Made in Preston</p>
        <div className="flex gap-6">
          <span>LinkedIn</span>
          <span>X</span>
          <Link href="/demo">Book a demo</Link>
        </div>
      </div>
    </footer>
  );
}

export function AskStrip() {
  return (
    <div className="bg-[#F9F4EB] px-5 pt-10 lg:px-10 mobile:px-5 mobile:pt-6">
      <div className="flex flex-wrap items-center justify-between gap-4 border-y border-[#14473A] py-5 mobile:flex-col mobile:items-start">
        <p className="text-[17px] leading-5.5">Ask about Tensr on</p>
        <div className="flex flex-wrap items-center gap-x-3.5 gap-y-2 text-[17px] leading-5.5">
          {askLinks.map((link, index) => (
            <span key={link.label} className="flex items-center gap-3.5">
              {index > 0 ? <span className="text-[#3D6A5E] mobile:hidden">·</span> : null}
              <a
                href={link.href}
                className="underline decoration-1 underline-offset-2 mobile:inline-flex mobile:min-h-11 mobile:items-center"
                target="_blank"
                rel="noreferrer"
              >
                {link.label}
              </a>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function PaperShell({ children }: { children: ReactNode }) {
  return (
    <div className="paper-site min-h-screen mobile:overflow-x-clip">
      <PaperNav />
      {children}
      <AskStrip />
      <PaperFooter />
    </div>
  );
}

export function SectionRule({ left, right }: { left: string; right?: string }) {
  return (
    <div className="flex justify-between border-t border-[#14473A] pt-3.5 text-[17px] leading-5.5 mobile:text-[15px] mobile:leading-5">
      <p>{left}</p>
      <p className="mobile:hidden">{right ?? left}</p>
    </div>
  );
}
