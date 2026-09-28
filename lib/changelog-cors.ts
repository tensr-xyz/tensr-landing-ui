/**
 * Browser origins allowed to read GET /api/changelog.
 * Keep in sync with scripts/check-changelog-cors.mjs.
 */
export const CHANGELOG_PRODUCTION_ORIGIN = 'https://app.tensr.xyz';

const PREVIEW_HOST = /^tensr-platform-web(?:-[a-z0-9]+)*\.vercel\.app$/i;

export function isAllowedChangelogOrigin(origin: string | null | undefined): boolean {
  if (!origin) return false;
  try {
    const url = new URL(origin);
    if (url.protocol !== 'https:') return false;
    if (url.port) return false;
    if (url.hostname === 'app.tensr.xyz') return true;
    return PREVIEW_HOST.test(url.hostname);
  } catch {
    return false;
  }
}

export function changelogCorsHeaders(origin: string | null | undefined): HeadersInit {
  if (!isAllowedChangelogOrigin(origin) || !origin) {
    return {
      'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=3600',
    };
  }

  return {
    'Access-Control-Allow-Origin': origin,
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Accept',
    Vary: 'Origin',
    'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=3600',
  };
}
