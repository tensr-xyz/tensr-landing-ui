import type { Metadata } from 'next';
import { LandingPage } from '@/components/paper/landing';

export const metadata: Metadata = {
  title: {
    absolute: 'Every number, traced to the people behind it · Tensr',
  },
  description:
    'Weighted, sig-tested tables from survey files you already have. Import .sav today. Qualtrics, Prolific and Decipher sync are coming soon.',
};

export default function HomePage() {
  return <LandingPage />;
}
