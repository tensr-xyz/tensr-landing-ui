export const siteUrl = 'https://www.tensr.xyz';

export const github = {
  owner: 'tensr-xyz',
  repo: 'tensr-landing-ui',
  branch: 'main',
} as const;

export function githubDocsUrl(filePath: string) {
  return `https://github.com/${github.owner}/${github.repo}/blob/${github.branch}/content/docs/${filePath}`;
}
