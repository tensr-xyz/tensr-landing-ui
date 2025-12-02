import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ThemeProvider } from '@/components/theme-provider';

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
      { url: '/tensr_icon_light.png', sizes: '144x144', type: 'image/png' },
    ],
    apple: [{ url: '/tensr_icon_light.png', sizes: '144x144', type: 'image/png' }],
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
    images: [
      {
        url: '/tensr_logo_light.png',
        width: 1200,
        height: 630,
        alt: 'Tensr - Statistical Analysis Platform',
      },
    ],
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
    images: ['/tensr_logo_light.png'],
  },
  category: 'Statistical Analysis Software',
  manifest: '/manifest.json',
  verification: {
    google: 'google-site-verification-code-here',
  },
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Header />
            <main id="main" className="flex-1 pt-14">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
