import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export const metadata: Metadata = {
  title: 'Tensr - Built to make you extraordinarily productive',
  description: 'Tensr is the best way to code with AI.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div className="flex min-h-screen flex-col">
          <Header />
          <main id="main" className="flex-1 pt-[72px]">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
