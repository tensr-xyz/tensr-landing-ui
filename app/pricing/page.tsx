import type { Metadata } from 'next';
import PricingTemplate from '@/components/templates/pricing';

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'Tensr pricing plans: Free Education plan, Professional (£20/month), Team (£99/month), and Enterprise (custom). Choose the plan that fits your research needs.',
  openGraph: {
    title: 'Pricing | Tensr',
    description:
      'Choose from Education (Free), Professional (£20/month), Team (£99/month), or Enterprise plans. All plans include complete statistical analysis suite.',
    url: 'https://www.tensr.xyz/pricing',
    images: ['/tensr_logo_light.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pricing | Tensr',
    description:
      'Choose from Education (Free), Professional (£20/month), Team (£99/month), or Enterprise plans.',
    images: ['/tensr_logo_light.png'],
  },
};

export default function PricingPage() {
  return <PricingTemplate />;
}
