import type { Metadata } from 'next';
import EnterpriseTemplate from '@/components/templates/enterprise';

export const metadata: Metadata = {
  title: 'Enterprise',
  description:
    'Tensr Enterprise: Scalable statistical analysis platform for large teams. Advanced security, SSO, SCIM, 100,000 operations/month, 100 GB data processing, and dedicated support.',
  openGraph: {
    title: 'Enterprise | Tensr',
    description:
      'Enterprise statistical analysis platform with advanced security, SSO, SCIM, and dedicated support. Built for large research teams and organizations.',
    url: 'https://www.tensr.xyz/enterprise',
    images: ['/tensr_logo_light.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Enterprise | Tensr',
    description:
      'Enterprise statistical analysis platform with advanced security, SSO, SCIM, and dedicated support.',
    images: ['/tensr_logo_light.png'],
  },
};

export default function EnterprisePage() {
  return <EnterpriseTemplate />;
}
