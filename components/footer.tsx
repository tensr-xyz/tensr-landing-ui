'use client';

import Link from 'next/link';
import { useState } from 'react';

export const Footer = () => {
  const [languageOpen, setLanguageOpen] = useState(false);
  const [theme, setTheme] = useState<'system' | 'light' | 'dark'>('system');

  return (
    <footer className="pt-12 pb-12 md:pb-12 px-4 bg-card relative">
      <div className="mb-9 max-w-7xl mx-auto">
        <nav>
          <div className="gap-x-4 gap-y-8 grid grid-cols-2 md:grid-cols-5">
            <div>
              <h3 className="text-base md:text-sm text-gray-600 pb-2.5">Product</h3>
              <ul>
                <li>
                  <Link
                    href="/features"
                    className="text-base md:text-sm py-2.5 inline-block hover:text-gray-900 transition-colors"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pricing"
                    className="text-base md:text-sm py-2.5 inline-block hover:text-gray-900 transition-colors"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://tensr-1.gitbook.io/tensr/"
                    className="text-base md:text-sm py-2.5 inline-block hover:text-gray-900 transition-colors"
                  >
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/download"
                    className="text-base md:text-sm py-2.5 inline-block hover:text-gray-900 transition-colors"
                  >
                    Download
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-base md:text-sm text-gray-600 pb-2.5">Resources</h3>
              <ul>
                <li>
                  <Link
                    href="https://tensr-1.gitbook.io/tensr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base md:text-sm py-2.5 inline-block hover:text-gray-900 transition-colors"
                  >
                    Documentation
                    <span className="ml-1">&nbsp;↗</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pricing"
                    className="text-base md:text-sm py-2.5 inline-block hover:text-gray-900 transition-colors"
                  >
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-base md:text-sm text-gray-600 pb-2.5">Company</h3>
              <ul>
                <li>
                  <Link
                    href="/about"
                    className="text-base md:text-sm py-2.5 inline-block hover:text-gray-900 transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="text-base md:text-sm py-2.5 inline-block hover:text-gray-900 transition-colors"
                  >
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-base md:text-sm text-gray-600 pb-2.5">Legal</h3>
              <ul>
                <li>
                  <Link
                    href="/terms-of-service"
                    className="text-base md:text-sm py-2.5 inline-block hover:text-gray-900 transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="text-base md:text-sm py-2.5 inline-block hover:text-gray-900 transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-base md:text-sm text-gray-600 pb-2.5">Connect</h3>
              <ul>
                <li>
                  <Link
                    href="https://twitter.com/tensrxyz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base md:text-sm py-2.5 inline-block hover:text-gray-900 transition-colors"
                  >
                    X<span className="ml-1">&nbsp;↗</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div className="gap-8 max-w-7xl mx-auto flex flex-col items-start justify-between md:flex-row md:items-center">
        <div className="text-gray-600 gap-6 flex items-center">
          <small className="text-base md:text-sm">
            © {new Date().getFullYear()}{' '}
            <Link href="/" className="hover:text-gray-900 active:text-gray-900">
              Tensr, Inc.
            </Link>
          </small>
        </div>
        <div className="gap-6 flex items-center">
          <div className="md:text-sm rounded-full bg-gray-100 relative flex rounded-full text-center p-0.5">
            <div
              className="absolute rounded-full transition-all bg-white border border-gray-200"
              style={{
                left: theme === 'system' ? '2px' : theme === 'light' ? '38px' : '74px',
                width: '36px',
                top: '2px',
                bottom: '2px',
                transitionDuration: '200ms',
                transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            />
            <button
              className="font-size-inherit relative inline-flex cursor-pointer items-center justify-center rounded-full leading-none px-2 py-1 text-sm"
              aria-label="System theme"
              onClick={() => setTheme('system')}
            >
              <span aria-hidden="true">🖥</span>
            </button>
            <button
              className="font-size-inherit relative inline-flex cursor-pointer items-center justify-center rounded-full leading-none px-2 py-1 text-sm text-gray-600 hover:text-gray-900"
              aria-label="Light theme"
              onClick={() => setTheme('light')}
            >
              <span aria-hidden="true">☉</span>
            </button>
            <button
              className="font-size-inherit relative inline-flex cursor-pointer items-center justify-center rounded-full leading-none px-2 py-1 text-sm text-gray-600 hover:text-gray-900"
              aria-label="Dark theme"
              onClick={() => setTheme('dark')}
            >
              <span aria-hidden="true">☾</span>
            </button>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative">
              <button
                className="px-3 py-2 text-sm border border-gray-200 rounded-md cursor-pointer flex items-center gap-2"
                aria-expanded={languageOpen}
                aria-controls="language-dropdown"
                aria-haspopup="listbox"
                type="button"
                onClick={() => setLanguageOpen(!languageOpen)}
              >
                <span>🌐</span>
                English
                <span className="cursor-pointer">↓</span>
              </button>
              {languageOpen && (
                <div
                  id="language-dropdown"
                  role="listbox"
                  className="pt-3 absolute bottom-full left-0 md:left-auto md:right-0 z-50 mb-6"
                >
                  <div className="bg-white border border-gray-200 rounded-md shadow-lg px-0 py-3 text-base md:text-sm min-w-[10rem]">
                    <ul>
                      <li>
                        <button
                          role="option"
                          aria-selected={true}
                          className="py-2.5 px-6 relative flex w-full cursor-pointer items-center justify-between hover:bg-gray-50"
                        >
                          English
                          <span className="font-feature-case">✓</span>
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
