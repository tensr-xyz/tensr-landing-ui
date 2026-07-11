import type { Metadata } from 'next';
import HomeTemplate from '@/components/templates/home';

export const metadata: Metadata = {
  title: 'Ship research that never stalls › Tensr',
  description:
    'Tensr empowers researchers, analysts and data scientists with a collaborative statistical workspace — spreadsheets, tests, charts, and an AI agent in one place.',
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
    title: 'Ship research that never stalls › Tensr',
    description:
      'Tensr empowers researchers, analysts and data scientists with a collaborative statistical workspace — spreadsheets, tests, charts, and an AI agent in one place.',
    url: 'https://www.tensr.xyz',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ship research that never stalls › Tensr',
    description:
      'Tensr empowers researchers, analysts and data scientists with a collaborative statistical workspace.',
  },
};

export default function HomePage() {
  return <HomeTemplate />;
}
