#!/usr/bin/env node
/**
 * Keep in sync with lib/changelog-cors.ts.
 */
const PREVIEW_HOST = /^tensr-platform-web(?:-[a-z0-9]+)*\.vercel\.app$/i;

function isAllowedChangelogOrigin(origin) {
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

const cases = [
  ['https://app.tensr.xyz', true],
  ['https://tensr-platform-web.vercel.app', true],
  ['https://tensr-platform-web-git-feat-whats-new-popover-tensr.vercel.app', true],
  ['https://tensr-platform-web-abc123xyz-tensr.vercel.app', true],
  ['https://evil.vercel.app', false],
  ['https://www.tensr.xyz', false],
  ['https://app.tensr.xyz.evil.com', false],
  ['http://app.tensr.xyz', false],
  ['https://app.tensr.xyz:443', true],
  ['https://app.tensr.xyz:4443', false],
  ['*', false],
  ['https://localhost:3000', false],
];

let failed = 0;
for (const [origin, expected] of cases) {
  const actual = isAllowedChangelogOrigin(origin);
  if (actual !== expected) {
    console.error(`fail: ${origin} → ${actual}, expected ${expected}`);
    failed += 1;
  }
}

if (failed) {
  process.exit(1);
}

console.log(`ok: ${cases.length} changelog CORS origin cases.`);
