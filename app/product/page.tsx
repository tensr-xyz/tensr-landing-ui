import type { Metadata } from 'next';
import { ProductPage } from '@/components/paper/product';

export const metadata: Metadata = {
  title: { absolute: 'From raw responses to the client deck, in one place · Tensr' },
};

export default function Page() {
  return <ProductPage />;
}
