import type { Metadata } from 'next';
import EnterpriseTemplate from '@/components/templates/enterprise';

export const metadata: Metadata = {
  title: 'Enterprise',
  description:
    'Tensr Enterprise: statistical analysis for research teams, with datasets encrypted at rest and in transit. SSO and SCIM are not available.',
  keywords: [
    'enterprise statistical analysis',
    'enterprise research software',
    'enterprise data analysis',
    'team collaboration',
    'dedicated support',
  ],
  alternates: {
    canonical: 'https://www.tensr.xyz/enterprise',
  },
  openGraph: {
    type: 'website',
    title: 'Enterprise | Tensr',
    description:
      'Statistical analysis for research teams. Datasets are encrypted at rest and in transit. SSO and SCIM are not available.',
    url: 'https://www.tensr.xyz/enterprise',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Enterprise | Tensr',
    description:
      'Statistical analysis for research teams. Datasets are encrypted at rest and in transit.',
  },
};

export default function EnterprisePage() {
  return <EnterpriseTemplate />;
}
