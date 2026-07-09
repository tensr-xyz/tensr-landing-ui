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
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tensr | Statistical Analysis Platform',
    description:
      'Modern statistical analysis platform with cloud-native architecture and powerful research tools for data scientists.',
  },
};

export default function HomePage() {
  return <HomeTemplate />;
}
