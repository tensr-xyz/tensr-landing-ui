import type { Metadata } from 'next';
import PricingTemplate from '@/components/templates/pricing';

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'Tensr pricing: Pro ($20/mo), Pro Plus ($60/mo), and Teams ($40/seat/mo). Annual billing saves 20%. No free tier.',
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
    description: 'Pro, Pro Plus, and Teams. Annual billing saves 20%. No free or student tier.',
    url: 'https://www.tensr.xyz/pricing',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pricing | Tensr',
    description: 'Pro, Pro Plus, and Teams. Annual billing saves 20%.',
  },
};

export default function PricingPage() {
  return <PricingTemplate />;
}
