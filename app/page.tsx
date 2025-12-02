import type { Metadata } from 'next';
import HomeTemplate from '@/components/templates/home';

export const metadata: Metadata = {
  title: 'Tensr | Statistical Analysis Platform',
  description:
    'Modern statistical analysis platform built for researchers and data scientists. Complete suite of statistical methods, data preparation tools, and collaborative features.',
  keywords: [
    'tensr',
    'statistical analysis',
    'data analysis platform',
    'research software',
    'SPSS alternative',
    'statistical computing',
    'data science tools',
    'research statistics',
    'quantitative analysis',
    'SEM software',
  ],
  alternates: {
    canonical: 'https://www.tensr.xyz',
  },
  openGraph: {
    type: 'website',
    title: 'Tensr | Statistical Analysis Platform',
    description:
      'Modern statistical analysis platform with cloud-native architecture, powerful research tools, and collaborative features for data scientists and researchers.',
    url: 'https://www.tensr.xyz',
    images: [
      {
        url: '/tensr_logo_light.png',
        width: 1200,
        height: 630,
        alt: 'Tensr - Statistical Analysis Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tensr | Statistical Analysis Platform',
    description:
      'Modern statistical analysis platform with cloud-native architecture and powerful research tools for data scientists.',
    images: ['/tensr_logo_light.png'],
  },
};

export default function HomePage() {
  return <HomeTemplate />;
}
