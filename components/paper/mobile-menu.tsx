'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Mark } from '@/components/paper/chrome';

const APP_LOGIN = 'https://app.tensr.xyz/login';

const links = [
  ['/product', 'Product'],
  ['/integrations', 'Integrations'],
  ['/agencies', 'Agencies'],
  ['/pricing', 'Pricing'],
  ['/docs', 'Docs'],
  ['/changelog', 'Changelog'],
  ['/security', 'Security'],
] as const;

function Arrow() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
      <path d="M3 9h12M10 4l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function MobileMenu() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [openPath, setOpenPath] = useState(pathname);
  if (pathname !== openPath) {
    setOpenPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <>
      <div className="hidden items-center gap-1 mobile:flex">
        <Link
          href="/signin"
          className="inline-flex min-h-11 items-center px-2.5 text-[15px] leading-5"
        >
          Sign in
        </Link>
        <button
          type="button"
          className="flex size-11 items-center justify-center border border-[#14473A]"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(true)}
        >
          <span className="sr-only">Open menu</span>
          <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
            <path d="M2 5h14M2 9h14M2 13h14" fill="none" stroke="#14473A" strokeWidth="1.6" />
          </svg>
        </button>
      </div>
      {open ? (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-50 flex flex-col bg-[#F9F4EB] text-[#14473A]"
        >
          <div className="flex h-16 shrink-0 items-center justify-between border-b border-[#14473A26] pr-3 pl-5">
            <Link
              href="/"
              className="flex items-center gap-2"
              aria-label="Tensr homepage"
              onClick={() => setOpen(false)}
            >
              <span className="[&_svg]:size-6">
                <Mark />
              </span>
              <span className="text-[22px] leading-6 font-semibold tracking-[-0.04em]">tensr</span>
            </Link>
            <button
              type="button"
              className="flex size-11 items-center justify-center bg-[#14473A] text-[#F9F4EB]"
              onClick={() => setOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
                <path
                  d="M4 4l10 10M14 4L4 14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
              </svg>
            </button>
          </div>
          <nav className="flex flex-col overflow-y-auto px-5 pt-2">
            {links.map(([href, label]) => (
              <Link
                key={href}
                href={href}
                className="flex min-h-[60px] items-center justify-between border-b border-[#14473A33] text-[28px] leading-8 tracking-[-0.03em]"
                onClick={() => setOpen(false)}
              >
                {label}
                <Arrow />
              </Link>
            ))}
          </nav>
          <div className="mt-auto flex flex-col gap-2 border-t border-[#14473A] px-5 pt-5 pb-8">
            <Link
              href={APP_LOGIN}
              className="flex h-14 items-center justify-center gap-2 bg-[#14473A] text-[17px] leading-5.5 text-[#F9F4EB]"
            >
              Start free trial
              <Arrow />
            </Link>
            <div className="grid grid-cols-2 gap-2">
              <Link
                href="/signin"
                className="flex h-[52px] items-center justify-center border border-[#14473A] text-[17px] leading-5.5"
              >
                Sign in
              </Link>
              <Link
                href="/demo"
                className="flex h-[52px] items-center justify-center border border-[#14473A] text-[17px] leading-5.5"
              >
                Book a demo
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
