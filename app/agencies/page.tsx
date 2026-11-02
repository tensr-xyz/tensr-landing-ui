import type { Metadata } from 'next';
import { AgenciesPage } from '@/components/paper/agencies';

export const metadata: Metadata = {
  title: { absolute: 'Stop rebuilding the same tables every wave · Tensr' },
};

export default function Page() {
  return <AgenciesPage />;
}
