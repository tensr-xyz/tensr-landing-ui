'use client';

import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { usePathname } from 'next/navigation';

export const SiteChrome = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const isDocs = pathname === '/docs' || pathname.startsWith('/docs/');

  if (isDocs) return children;

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
