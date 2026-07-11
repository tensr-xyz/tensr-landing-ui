'use client';

import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const navLinks = [
  { href: '/features', label: 'Product' },
  { href: '/pricing', label: 'Pricing' },
];

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      if (e.key.toLowerCase() === 'l' && !e.metaKey && !e.ctrlKey) {
        window.open('https://app.tensr.xyz', '_blank');
      }
      if (e.key.toLowerCase() === 'g' && !e.metaKey && !e.ctrlKey) {
        window.open('https://app.tensr.xyz', '_blank');
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 z-50 h-[var(--header-height)] w-full border-b border-border-default bg-shell/90 backdrop-blur-md">
        <div className="page-pad mx-auto flex h-full max-w-[var(--max-width)] items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-2.5" aria-label="Tensr homepage">
            <Image
              src="/tensr_icon_light.png"
              alt=""
              width={22}
              height={22}
              className="h-[22px] w-[22px]"
            />
            <span className="text-[1.2rem] font-medium leading-none tracking-tight text-text-primary">
              Tensr
            </span>
          </Link>

          <nav className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 md:block">
            <ul className="flex items-center gap-1">
              {navLinks.map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="px-3 py-2 text-[13px] text-text-secondary transition-colors hover:text-text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="https://app.tensr.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 px-2 py-1.5 text-[13px] text-text-secondary transition-colors hover:text-text-primary sm:inline-flex"
            >
              Login
              <span className="kbd">L</span>
            </Link>
            <Link
              href="https://app.tensr.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 rounded-full bg-component px-4 py-1.5 text-[13px] text-text-primary transition-colors hover:bg-[var(--component-hover)] sm:inline-flex"
            >
              Get started
              <span className="kbd">G</span>
            </Link>
            <button
              type="button"
              className="inline-flex h-8 w-8 items-center justify-center text-text-primary md:hidden"
              aria-label="Open navigation"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[60] bg-page transition-opacity duration-200 md:hidden ${
          isMobileMenuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <div className="page-pad flex h-[var(--header-height)] items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2.5"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <Image
              src="/tensr_icon_light.png"
              alt=""
              width={22}
              height={22}
              className="h-[22px] w-[22px]"
            />
            <span className="text-[1.2rem] font-medium leading-none text-text-primary">Tensr</span>
          </Link>
          <button
            type="button"
            className="inline-flex h-8 w-8 items-center justify-center"
            aria-label="Close navigation"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="page-pad pt-4">
          <ul className="flex flex-col">
            {navLinks.map(link => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block py-3 text-lg text-text-primary"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="https://app.tensr.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="block py-3 text-lg text-text-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Login
              </Link>
            </li>
            <li className="pt-4">
              <Link
                href="https://app.tensr.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-full bg-inverted px-5 py-2.5 text-sm font-medium text-[var(--inverted-fg)]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get started
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};
