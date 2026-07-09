import type { Metadata } from 'next';
import FeaturesTemplate from '@/components/templates/features';

export const metadata: Metadata = {
  title: 'Features',
  description:
    'Explore Tensr features: complete statistical analysis suite, data preparation tools, Structural Equation Modeling, plugin architecture, interactive notebooks, and advanced visualizations.',
  keywords: [
    'statistical analysis features',
    'data preparation',
    'structural equation modeling',
    'SEM software',
    'statistical plugins',
    'interactive notebooks',
    'data visualization tools',
    'statistical computing',
    'research tools',
  ],
  alternates: {
    canonical: 'https://www.tensr.xyz/features',
  },
  openGraph: {
    type: 'website',
    title: 'Features | Tensr',
    description:
      'Complete statistical analysis suite with data preparation tools, SEM, plugin architecture, interactive notebooks, and advanced visualizations.',
    url: 'https://www.tensr.xyz/features',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Features | Tensr',
    description:
      'Complete statistical analysis suite with data preparation tools, SEM, plugin architecture, and interactive notebooks.',
  },
};

export default function FeaturesPage() {
  return <FeaturesTemplate />;
}
