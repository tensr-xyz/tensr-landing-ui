import type { Metadata } from 'next';
import FeaturesTemplate from '@/components/templates/features';

export const metadata: Metadata = {
  title: 'Product',
  description:
    'Weighted banner tables for research agencies. Significance-tested, Excel and PowerPoint, every number traced to the original respondents.',
  keywords: [
    'statistical analysis software',
    'AI data analysis',
    'ANOVA report',
    'collaborative statistics',
    'Displayr alternative',
    'research workspace',
    'plugin marketplace',
  ],
  alternates: {
    canonical: 'https://www.tensr.xyz/features',
  },
  openGraph: {
    type: 'website',
    title: 'Product | Tensr',
    description:
      'Five capabilities, one workspace: AI agent, report view, tri‑modal canvas, live collaboration, and plugins.',
    url: 'https://www.tensr.xyz/features',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Product | Tensr',
    description:
      'Five capabilities, one workspace: AI agent, report view, tri‑modal canvas, live collaboration, and plugins.',
  },
};

export default function FeaturesPage() {
  return <FeaturesTemplate />;
}
