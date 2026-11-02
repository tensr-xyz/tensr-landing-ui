import type { Metadata } from 'next';
import { IntegrationsPage } from '@/components/paper/integrations';

export const metadata: Metadata = {
  title: { absolute: 'Connect the survey. Keep the workflow. · Tensr' },
};

export default function Page() {
  return <IntegrationsPage />;
}
