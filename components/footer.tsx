'use client';

import Image from 'next/image';
import Link from 'next/link';

const footerColumns = [
  {
    title: 'Solutions',
    links: [
      { href: '/features', label: 'Researchers' },
      { href: '/features', label: 'Data Scientists' },
      { href: '/features', label: 'Analysts' },
      { href: '/enterprise', label: 'Enterprise' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { href: '/features', label: 'Features' },
      { href: 'https://tensr-1.gitbook.io/tensr/', label: 'Docs', external: true },
      { href: '/pricing', label: 'Pricing' },
    ],
  },
  {
    title: 'Company',
    links: [
      { href: 'mailto:help@tensr.xyz', label: 'Contact' },
      { href: '/enterprise', label: 'Enterprise' },
    ],
  },
  {
    title: 'Legal',
    links: [
      {
        href: 'https://tensr-1.gitbook.io/tensr/legal-policies/privacy-policy',
        label: 'Privacy Policy',
        external: true,
      },
      {
        href: 'https://tensr-1.gitbook.io/tensr/legal-policies/terms-of-service',
        label: 'Terms of Service',
        external: true,
      },
    ],
  },
];

export const Footer = () => {
  return (
    <footer className="w-full overflow-hidden border-t border-border-default bg-shell">
      <div className="page-pad mx-auto max-w-[var(--max-width)] py-16 md:py-20">
        <div className="mb-14 flex flex-col items-start justify-between gap-8 md:mb-20 md:flex-row md:items-end">
          <h2 className="max-w-md text-3xl leading-tight tracking-tight text-text-primary md:text-4xl">
            Ship research that
            <br />
            <span className="font-serif-italic">never stalls</span>
          </h2>
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
              href="mailto:help@tensr.xyz"
              className="inline-flex items-center rounded-full bg-inverted px-4 py-2.5 text-sm font-medium text-[var(--inverted-fg)] transition-opacity hover:opacity-90"
            >
              Contact sales
            </Link>
          </div>
        </div>

        <div className="mb-14 grid grid-cols-2 gap-8 md:grid-cols-4">
          {footerColumns.map(col => (
            <div key={col.title}>
              <h3 className="mb-3 text-sm text-text-muted">{col.title}</h3>
              <ul className="space-y-2.5">
                {col.links.map(link => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      className="text-sm text-text-secondary transition-colors hover:text-text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-6 border-t border-border-default pt-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <Image src="/tensr_icon_light.png" alt="" width={20} height={20} className="h-5 w-5" />
            <span className="font-serif text-lg text-text-primary">Tensr</span>
          </div>
          <div className="flex flex-col gap-2 text-xs text-text-faint md:items-end">
            <p>Copyright © {new Date().getFullYear()} Tensr, Inc. All rights reserved.</p>
            <p>Tensr™ and the Tensr logo are trademarks of Tensr, Inc.</p>
          </div>
          <div className="flex items-center gap-4 text-sm text-text-secondary">
            <Link
              href="https://twitter.com/tensrxyz"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-text-primary"
            >
              X
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
