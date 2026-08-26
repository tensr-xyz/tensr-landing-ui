import type { Metadata } from 'next';
import HomeTemplate from '@/components/templates/home';

export const metadata: Metadata = {
  title: 'Banner tables that trace to the respondents › Tensr',
  description:
    'Weighted crosstabs and banner tables for research agencies — significance-tested, delivered as Excel and PowerPoint, every number traced to the original respondents.',
  keywords: [
    'tensr',
    'banner tables',
    'weighted crosstabs',
    'survey research software',
    'Displayr alternative',
    'Q alternative',
    'significance testing',
    'rim weighting',
    'market research tables',
    'provenance',
  ],
  alternates: {
    canonical: 'https://www.tensr.xyz',
  },
  openGraph: {
    type: 'website',
    title: 'Banner tables that trace to the respondents › Tensr',
    description:
      'Weighted crosstabs and banner tables for research agencies — significance-tested, Excel and PowerPoint, every number traced to the respondents.',
    url: 'https://www.tensr.xyz',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Banner tables that trace to the respondents › Tensr',
    description:
      'Weighted crosstabs and banner tables for research agencies. Every number traces to the respondents.',
  },
};

export default function HomePage() {
  return <HomeTemplate />;
}
