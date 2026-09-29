'use client';

import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { usePathname } from 'next/navigation';

const isDocsChrome = (pathname: string) =>
  pathname === '/docs' ||
  pathname.startsWith('/docs/') ||
  pathname === '/changelog' ||
  (pathname.startsWith('/changelog/') && !pathname.startsWith('/changelog/rss'));

export const SiteChrome = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  if (isDocsChrome(pathname)) return children;

  return (
    <div className="flex min-h-screen flex-col bg-page">
      <Header />
      <main id="main" className="flex-1 pt-[var(--header-height)]">
        {children}
      </main>
      <Footer />
    </div>
  );
};
