import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { github } from '@/lib/site';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: 'Docs',
      url: '/docs',
    },
    links: [
      {
        text: 'Changelog',
        url: '/changelog',
      },
    ],
    githubUrl: `https://github.com/${github.owner}/${github.repo}`,
  };
}
