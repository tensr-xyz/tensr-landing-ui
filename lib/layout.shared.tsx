import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { github } from '@/lib/site';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      url: '/docs',
    },
    githubUrl: `https://github.com/${github.owner}/${github.repo}`,
  };
}
