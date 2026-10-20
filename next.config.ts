import { createMDX } from 'fumadocs-mdx/next';
import type { NextConfig } from 'next';

const posthogHost = (process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com').replace(
  /\/$/,
  ''
);

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
  // PostHog reverse proxy — same /ingest paths as tensr-platform-web, so ad blockers
  // are less likely to drop landing analytics. Trailing-slash redirects must stay off
  // or PostHog's ingest calls get bounced.
  skipTrailingSlashRedirect: true,
  async rewrites() {
    return [
      {
        source: '/docs/:slug*.md',
        destination: '/llms.mdx/docs/:slug*/content.md',
      },
      {
        source: '/ingest/static/:path*',
        destination: 'https://us-assets.i.posthog.com/static/:path*',
      },
      {
        source: '/ingest/array/:path*',
        destination: 'https://us-assets.i.posthog.com/array/:path*',
      },
      {
        source: '/ingest/:path*',
        destination: `${posthogHost}/:path*`,
      },
    ];
  },
};

const withMDX = createMDX();

export default withMDX(nextConfig);
