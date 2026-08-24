import type { Metadata } from 'next';
import PricingTemplate from '@/components/templates/pricing';

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    '30-day trial, no card. Everything unlocked. Day 31 the account is read-only and your data stays. Then Pro, Pro Plus, and Teams.',
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
    description: '30-day trial, no card, everything unlocked. Day 31 is read-only. Pay to resume.',
    url: 'https://www.tensr.xyz/pricing',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pricing | Tensr',
    description: '30-day trial, no card. Data retained after day 31. Pay to resume writes.',
  },
};

export default function PricingPage() {
  return <PricingTemplate />;
}
