import type { Metadata } from 'next';
import PricingTemplate from '@/components/templates/pricing';

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'Pro, Pro Plus, and Teams for statistical analysis. Same tools on every plan — more agent capacity and collaboration as you grow. Annual billing saves 20%.',
  keywords: [
    'statistical analysis pricing',
    'research software pricing',
    'pro plan',
    'pro plus',
    'teams pricing',
    'data analysis subscription',
  ],
  alternates: {
    canonical: 'https://www.tensr.xyz/pricing',
  },
  openGraph: {
    type: 'website',
    title: 'Pricing | Tensr',
    description:
      'Pro, Pro Plus, and Teams. Same statistical tools on every plan — more agent capacity and collaboration as you grow.',
    url: 'https://www.tensr.xyz/pricing',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pricing | Tensr',
    description: 'Pro, Pro Plus, and Teams for statistical analysis. Annual billing saves 20%.',
  },
};

export default function PricingPage() {
  return <PricingTemplate />;
}
