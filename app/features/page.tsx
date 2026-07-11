import type { Metadata } from 'next';
import FeaturesTemplate from '@/components/templates/features';

export const metadata: Metadata = {
  title: 'Product',
  description:
    'From raw data to a result you can defend. Tensr Agent, analysis reports, tri‑modal workspace, live collaboration, and a plugin marketplace — SPSS‑parity stats in one place.',
  keywords: [
    'statistical analysis software',
    'AI data analysis',
    'ANOVA report',
    'collaborative statistics',
    'SPSS alternative',
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
