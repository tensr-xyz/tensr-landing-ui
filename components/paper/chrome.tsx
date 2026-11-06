import Link from 'next/link';
import type { ReactNode } from 'react';

const links = [
  ['/product', 'Product'],
  ['/integrations', 'Integrations'],
  ['/agencies', 'Agencies'],
  ['/pricing', 'Pricing'],
  ['/docs', 'Docs'],
  ['/changelog', 'Changelog'],
  ['/security', 'Security'],
];

export function Mark() {
  return (
    <svg width="28" height="28" viewBox="0 0 48 48" aria-hidden="true">
      <rect x="4" y="5" width="12" height="12" rx="2.5" fill="#14473A" />
      <rect x="18" y="5" width="12" height="12" rx="2.5" fill="#14473A" />
      <rect x="32" y="5" width="12" height="12" rx="2.5" fill="#5E8A74" />
      <rect x="18" y="19" width="12" height="12" rx="2.5" fill="#14473A" />
      <rect x="18" y="33" width="12" height="12" rx="2.5" fill="#14473A" />
    </svg>
  );
}

export function PaperPage({
  title,
  lede,
  children,
}: {
  title: string;
  lede: string;
  children?: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#F9F4EB] text-[#14473A] antialiased">
      <header className="mx-auto flex h-16 max-w-[1120px] items-center justify-between px-8">
        <Link
          href="/"
          className="flex items-center gap-2 text-[22px] font-semibold tracking-[-0.04em]"
        >
          <Mark />
          tensr
        </Link>
        <nav className="hidden gap-4 text-[14px] md:flex">
          {links.map(([href, label]) => (
            <Link key={href} href={href} className="text-[#3D6A5E]">
              {label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3 text-[14px]">
          <Link href="https://app.tensr.xyz/login">Sign in</Link>
          <Link href="/demo" className="rounded-full bg-[#14473A] px-3 py-1.5 text-[#F9F4EB]">
            Book a demo
          </Link>
        </div>
      </header>
      <main className="mx-auto flex max-w-[880px] flex-col gap-6 px-8 pb-24 pt-16">
        <h1 className="text-[48px] leading-[52px] tracking-[-0.04em]">{title}</h1>
        <p className="max-w-[640px] text-[18px] leading-[27px] text-[#3D6A5E]">{lede}</p>
        {children}
      </main>
    </div>
  );
}

export function Soon({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex rounded-md bg-[#EEE8DC] px-2 py-0.5 text-[13px] text-[#3D6A5E]">
      {children}
    </span>
  );
}
