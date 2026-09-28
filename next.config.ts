import { createMDX } from 'fumadocs-mdx/next';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/docs/banners',
        destination: '/docs/analyses/banner-table',
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/docs/:slug*.md',
        destination: '/llms.mdx/docs/:slug*/content.md',
      },
    ];
  },
};

const withMDX = createMDX();

export default withMDX(nextConfig);
