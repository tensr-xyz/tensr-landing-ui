import type { Metadata } from 'next';
import DownloadTemplate from '@/components/templates/download';

export const metadata: Metadata = {
  title: 'Get Started',
  description:
    'Get started with Tensr: Access our web platform, integrate with our API, or use our SDK to build custom plugins. Available for researchers and data scientists.',
  openGraph: {
    title: 'Get Started | Tensr',
    description:
      'Access Tensr web platform, integrate with our API, or use our SDK to build custom plugins. Start your statistical analysis journey today.',
    url: 'https://www.tensr.xyz/download',
    images: ['/tensr_logo_light.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Get Started | Tensr',
    description:
      'Access Tensr web platform, integrate with our API, or use our SDK to build custom plugins.',
    images: ['/tensr_logo_light.png'],
  },
};

export default function DownloadPage() {
  return <DownloadTemplate />;
}
