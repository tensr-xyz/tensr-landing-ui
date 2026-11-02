import type { Metadata } from 'next';
import { PricingPage } from '@/components/paper/pricing';

export const metadata: Metadata = {
  title: { absolute: 'Pay per researcher, not per table · Tensr' },
};

export default function Page() {
  return <PricingPage />;
}
