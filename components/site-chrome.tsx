'use client';

import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { usePathname } from 'next/navigation';

const bareChrome = (pathname: string) =>
  pathname === '/docs' ||
  pathname.startsWith('/docs/') ||
  pathname === '/' ||
  pathname === '/product' ||
  pathname === '/integrations' ||
  pathname === '/agencies' ||
  pathname === '/security' ||
  pathname === '/demo' ||
  pathname === '/pricing' ||
  pathname === '/changelog' ||
  pathname.startsWith('/signin');

export const SiteChrome = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  if (bareChrome(pathname)) return children;

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
