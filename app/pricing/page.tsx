import type { Metadata } from 'next';
import PricingTemplate from '@/components/templates/pricing';

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'Tensr pricing plans: Free Education plan, Professional (£20/month), Team (£99/month), and Enterprise (custom). Choose the plan that fits your research needs.',
  keywords: [
    'statistical analysis pricing',
    'research software pricing',
    'free education plan',
    'professional plan',
    'team collaboration pricing',
    'enterprise pricing',
    'affordable statistics software',
    'data analysis subscription',
  ],
  alternates: {
    canonical: 'https://www.tensr.xyz/pricing',
  },
  openGraph: {
    type: 'website',
    title: 'Pricing | Tensr',
    description:
      'Choose from Education (Free), Professional (£20/month), Team (£99/month), or Enterprise plans. All plans include complete statistical analysis suite.',
    url: 'https://www.tensr.xyz/pricing',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pricing | Tensr',
    description:
      'Choose from Education (Free), Professional (£20/month), Team (£99/month), or Enterprise plans.',
  },
};

export default function PricingPage() {
  return <PricingTemplate />;
}
