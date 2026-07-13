'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const askQuery = encodeURIComponent('What does Tensr (the startup) do?');

const askLinks = [
  {
    label: 'ChatGPT',
    href: `https://chatgpt.com/?q=${askQuery}`,
    icon: (
      <svg className="size-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M22.28 9.82a5.95 5.95 0 0 0-.51-4.86 6.03 6.03 0 0 0-6.5-2.89 6.03 6.03 0 0 0-4.52-2.01A6.04 6.04 0 0 0 5.2 2.96 5.95 5.95 0 0 0 1.7 7.3a6 6 0 0 0 .73 7.08 5.95 5.95 0 0 0 .52 4.86 6.04 6.04 0 0 0 6.5 2.89 5.98 5.98 0 0 0 4.51 2.01 6.04 6.04 0 0 0 5.56-2.9 5.95 5.95 0 0 0 3.5-4.34 6 6 0 0 0-.74-7.08ZM13.15 21.2a4.47 4.47 0 0 1-2.87-1.04l.14-.08 4.77-2.76a.78.78 0 0 0 .39-.67v-6.74l2.02 1.17a.07.07 0 0 1 .04.05v5.59a4.5 4.5 0 0 1-4.49 4.48Zm-9.65-3.64a4.47 4.47 0 0 1-.54-3.02l.14.08 4.78 2.76c.12.07.27.07.39 0l5.83-3.36v2.33a.08.08 0 0 1-.03.06L8.3 19.9a4.5 4.5 0 0 1-4.8-2.34Zm-1.25-10.4a4.48 4.48 0 0 1 2.34-1.96v5.7c0 .27.14.52.39.67l5.82 3.36-2.02 1.17a.08.08 0 0 1-.07 0L3.95 11.9a4.5 4.5 0 0 1-1.7-4.74Zm16.9 3.94-.14-.08-4.77-2.78a.8.8 0 0 0-.4 0l-5.82 3.36v-2.33c0-.02.01-.04.03-.06l4.77-2.76a4.5 4.5 0 0 1 6.75 4.66l-.42-.01Zm2.03-3.04.14.08-4.78 2.76a.78.78 0 0 0-.39.67v5.7l-2.02-1.16a.08.08 0 0 1-.04-.06V9.88c0-.27.15-.53.4-.68l4.76-2.75a4.49 4.49 0 0 1 1.93 5.01Z" />
      </svg>
    ),
  },
  {
    label: 'Claude',
    href: `https://claude.ai/new?q=${askQuery}`,
    icon: (
      <svg className="size-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M11.98 2.5 16.7 15.2h-2.46l-.94-2.66H9.28l-.94 2.66H5.9L10.6 2.5h1.38Zm-1.95 8.1h3.52L11.8 5.76 10.03 10.6Zm10.07 4.64-.9 2.46h-9.7l.9-2.46h9.7ZM7.02 4.96l-.9 2.46H2.5L3.4 4.96h3.62Z" />
      </svg>
    ),
  },
  {
    label: 'Perplexity',
    href: `https://www.perplexity.ai/search?q=${askQuery}`,
    icon: (
      <svg className="size-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M4.5 4.5h3.2v6.3L12 7.1l4.3 3.7V4.5h3.2V19.5h-3.2v-6.2L12 16.9l-4.3-3.6v6.2H4.5V4.5Z" />
      </svg>
    ),
  },
  {
    label: 'Gemini',
    href: `https://www.google.com/search?udm=50&q=${askQuery}`,
    icon: (
      <svg className="size-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2c.4 4.4 2.4 7.5 6.5 9.5C14.4 13.5 12.4 16.6 12 21c-.4-4.4-2.4-7.5-6.5-9.5C9.6 9.5 11.6 6.4 12 2Z" />
      </svg>
    ),
  },
  {
    label: 'Grok',
    href: `https://x.com/i/grok?text=${askQuery}`,
    icon: (
      <svg className="size-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

type FooterCta = {
  line1: string;
  beforeItalic?: string;
  italic: string;
};

const defaultCta: FooterCta = {
  line1: 'Ship research that',
  beforeItalic: 'never ',
  italic: 'stalls',
};

const ctaByPath: Record<string, FooterCta> = {
  '/': defaultCta,
  '/features': {
    line1: 'See it on your',
    beforeItalic: 'own ',
    italic: 'data',
  },
  '/pricing': {
    line1: 'Start analysing',
    italic: 'today',
  },
  '/enterprise': {
    line1: 'Analyse together.',
    beforeItalic: 'Ship with ',
    italic: 'confidence',
  },
  '/download': defaultCta,
};

const legalLinks = [
  {
    href: 'https://tensr-1.gitbook.io/tensr/legal-policies/privacy-policy',
    label: 'Privacy Policy',
  },
  {
    href: 'https://tensr-1.gitbook.io/tensr/legal-policies/terms-of-service',
    label: 'Terms of Service',
  },
];

export const Footer = () => {
  const pathname = usePathname() || '/';
  const cta = ctaByPath[pathname] ?? defaultCta;

  return (
    <footer className="footer-root w-full shrink-0 overflow-hidden bg-shell">
      <div className="footer-shell relative mx-auto w-full">
        <div className="absolute top-0 left-1/2 h-px w-screen -translate-x-1/2 bg-border-default" />

        <div className="relative py-16 md:py-28">
          <div className="footer-cta-glow" aria-hidden="true" />
          <div className="relative z-10 flex flex-col items-center gap-6 md:gap-10">
            <h2 className="text-center text-4xl leading-none font-medium tracking-tight text-text-primary md:text-[56px]">
              <span className="block">{cta.line1}</span>
              <span className="inline-block">
                {cta.beforeItalic}
                <span className="font-serif-italic text-[38px] tracking-[-0.03em] md:text-[59px]">
                  {cta.italic}
                </span>
              </span>
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                href="https://app.tensr.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-w-[10rem] items-center justify-center rounded-full bg-component px-5 py-3 text-sm text-text-primary transition-colors hover:bg-[var(--component-hover)]"
              >
                Get started
              </Link>
              <Link
                href="mailto:help@tensr.xyz?subject=Demo%20request"
                className="inline-flex min-w-[10rem] items-center justify-center rounded-full bg-inverted px-5 py-3 text-sm font-medium text-[var(--inverted-fg)] transition-opacity hover:opacity-90"
              >
                Request a demo
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 border-t border-border-default py-8 md:flex-row md:justify-between md:gap-6">
          <div className="flex flex-col items-center gap-3 md:flex-row md:gap-4">
            <p className="text-sm text-text-muted select-none">Ask about Tensr on</p>
            <div className="flex items-center gap-2">
              {askLinks.map(item => (
                <Link
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Ask about Tensr on ${item.label}`}
                  className="footer-ask-btn"
                >
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>
          <Link href="/" aria-label="Tensr" className="hidden shrink-0 md:block">
            <Image
              src="/tensr_icon_light.png"
              alt=""
              width={24}
              height={24}
              className="h-6 w-6 opacity-80"
            />
          </Link>
        </div>

        <div className="flex flex-col items-start justify-between gap-3 border-t border-border-default py-5 text-xs text-text-muted sm:flex-row sm:items-center">
          <p>Copyright © {new Date().getFullYear()} Tensr, Inc.</p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            {legalLinks.map(link => (
              <Link
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-text-primary"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
