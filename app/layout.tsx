import type { Metadata } from 'next';
import { Instrument_Serif, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ThemeProvider } from '@/components/theme-provider';

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-instrument',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Tensr',
  applicationCategory: 'StatisticalAnalysisApplication',
  operatingSystem: 'Web',
  offers: {
    '@type': 'Offer',
    category: 'Statistical Analysis Software',
  },
  description:
    'Modern statistical analysis platform for researchers and data scientists. Cloud-native architecture with powerful tools for research and collaboration.',
  url: 'https://www.tensr.xyz',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.tensr.xyz'),
  title: {
    template: '%s | Tensr',
    default: 'Tensr | Statistical Analysis Platform',
  },
  description:
    'Modern statistical analysis platform built for researchers and data scientists. Fast, intuitive, and collaborative with cloud-native architecture.',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
      { url: '/tensr_icon_light.png', sizes: '560x576', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    shortcut: '/favicon.ico',
  },
  keywords: [
    'tensr',
    'statistical analysis',
    'data analysis',
    'research software',
    'SPSS alternative',
    'statistics platform',
    'research statistics',
    'data science',
    'cloud statistics',
    'academic research',
    'statistical computing',
    'structural equation modeling',
    'SEM',
    'data visualization',
    'research collaboration',
    'quantitative research',
    'statistical methods',
    'data analytics platform',
  ],
  alternates: {
    canonical: 'https://www.tensr.xyz',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    url: 'https://www.tensr.xyz',
    title: 'Tensr | Statistical Analysis Platform',
    description:
      'Modern statistical analysis platform with cloud-native architecture, powerful research tools, and collaborative features for data scientists and researchers.',
    siteName: 'Tensr',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@TensrXYZ',
    creator: '@TensrXYZ',
    title: 'Tensr | Statistical Analysis Platform',
    description:
      'Modern statistical analysis platform with cloud-native architecture and powerful research tools for data scientists.',
  },
  category: 'Statistical Analysis Software',
  manifest: '/manifest.json',
  other: {
    'msapplication-TileColor': '#26251e',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="antialiased bg-page text-text-primary font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          forcedTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col bg-page">
            <Header />
            <main id="main" className="flex-1 pt-[var(--header-height)]">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
